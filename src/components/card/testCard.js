import React, { useMemo,useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { from, switchMap, tap } from "rxjs";
import Logger from "../../plugins/Logger$";
import { ButtonYellowSC, ButtonYellow2SC } from "../aircraft/stye";
import { DivBoxButtonsAddCardSC, DivBoxButtonsSC } from "../flights/style";
import {

	DivIconInput22SC,
  DivIconInputcardSC,
  DivIconInputdatedSC,
  DivIconInputdated2SC,
  DivIconInputNameSC,
  DivBoxContentAddCardSC
} from "../sign_up/style";
import useTopics from "../../plugins/useTopics";
import {
	DivBoxRowsInputsSC,
	
	TextareaSC,
} from "../profile/style";
import {
	DivIconInputSC,
	
} from "../sign_up/style";
import useResponsiveFontSize from "./useResponsiveFontSize";
import { LinkBack22SC, LinkBackSC } from "../tour_info/style";
import "./style.css";
const useOptions = () => {
  
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          border:"solid",
          fontSize,
          color: "#e8e8e8",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: " rgba(255, 255, 255, 0.5)"
          }
        },
        invalid: {
          color: "#FF4A4A",
          border: "1px solid #FF4A4A"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

function inpNum(e) {
  e = e || window.event;
  var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
  var charStr = String.fromCharCode(charCode);
  if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
}
function noDigits(e) {
  if ("1234567890".indexOf(e.key) != -1) e.preventDefault();
}
const handleInputFocus = ({ target }) => {
  setFocused(target.id);
};
const Save = () =>
  Topic('firebase', 'user:uid')
    .pipe(switchMap(uid => from(addDoc(collection(getFirestore(), `users/${ uid }/profiles`), {
      card_number: cardNumber,
      Cardholder_Name:cardName,
      exp_date: MMYY,
    }))))
    .pipe(tap(() => navigate("/add-profile")))
    .subscribe(Logger('Add Profile'))
const SplitForm = () => {
  const navigate = useNavigate();
  const [error, setEror] = useState(false);
  const [error2, setEror2] = useState(false);
	const [focused, setFocused] = useState("");
	const [number, setNumber] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [cardName, setCardName] = useState("");
	const [MMYY, setMMYY] = useState("");
  const [disabl, setDisabl] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const { Topic, Message } = useTopics;
  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
    if (payload.error) {
      // Show error to your customer (for example, payment details incomplete)
      return Message("toast", "show", "Please fill in the correct card details");
    } else {
       
      navigate("/add-profile");
    }
  };

  return (
    
      <form onSubmit={handleSubmit}>
    <DivBoxContentAddCardSC>
							<DivBoxRowsInputsSC>
								<DivIconInputcardSC isEnabled={error}>
									{/*<SpanStarSC>*/}
									{/*	<DivStarSC></DivStarSC>*/}
									{/*</SpanStarSC>*/}
               
        <CardNumberElement
       
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            if( event.error===undefined){
setEror(false);
console.log(error);
            }
           else if(event.error){
              setEror(true);
              console.log(error);
            }
            console.log("CardNumberElement [change]", event.error);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
     
								</DivIconInputcardSC>
						
								<DivIconInputdatedSC >
									{/*<SpanStarSC>*/}
									{/*	<DivStarSC></DivStarSC>*/}
									{/*</SpanStarSC>*/}
								<DivIconInputdated2SC id="date"  isEnabled={error2}>
       <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            if( event.error===undefined){
              setEror2(false);
              console.log(error);
                          }
                         else if(event.error){
                            setEror2(true);
                            console.log(error);
                          }
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </DivIconInputdated2SC>
								</DivIconInputdatedSC>
							</DivBoxRowsInputsSC>
							<DivBoxButtonsAddCardSC>
								<LinkBack22SC
									// isEnabled={cardNumber&&cardName&&MMYY}
									// disabled={!cardNumber||!cardName||!MMYY}
									onClick={(e) => {
										navigate("/sms-mfa");
									}}
									style={{
										maxWidth: "200px",
									}}
								>
									Back
								</LinkBack22SC>
								<ButtonYellow2SC
								isEnabled={true}
									// onClick={Save}
									style={{
										maxWidth: "200px",
									}}
                  type="submit"
								>
									Next
								</ButtonYellow2SC>
							</DivBoxButtonsAddCardSC>
						</DivBoxContentAddCardSC>
   
            </form>
    
   
     
  
      
     
      
  );
};

export default SplitForm;
