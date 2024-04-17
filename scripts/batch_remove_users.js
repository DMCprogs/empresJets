//https://cloud.google.com/identity-platform/docs/reference/rest/v1/projects.accounts/batchGet
//https://cloud.google.com/identity-platform/docs/reference/rest/v1/projects.accounts/batchDelete

let users = [
]

require('fs').writeFileSync(__dirname + '/users.json', JSON.stringify(users.map(e => e.localId)))

