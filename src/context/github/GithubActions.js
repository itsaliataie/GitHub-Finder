const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

// Get Search Results
export const searchUsers = async (text) => {
  // setLoading() dispatch from the component right before the action

  const params = new URLSearchParams({
    q: text
  })

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`)

  // Added a Github Token, but I had to keep changing it because it woul fail every new day.
  // Adding the token would look something like this:
  // , {
  //   headers: {
  //     authorization: `token ${GITHUB_TOKEN}`
  //   }
  // }

  const {items} = await response.json()

  // We're dispatching from the component, so we just return the data
  // dispatch({
  //   type: 'GET_USERS',
  //   payload: items
  // })
  return items
}

// Get single user
export const getUser = async (login) => {

  const response = await fetch(`${GITHUB_URL}/users/${login}`)

  // Added a Github Token, but I had to keep changing it because it woul fail every new day.
  // Adding the token would look something like this:
  // , {
  //   headers: {
  //     authorization: `token ${GITHUB_TOKEN}`
  //   }
  // }

  if(response.status === 404) {
    window.location = '/notfound'
  } else {
    const data = await response.json()
    return data
  }

}

// Get User Repos
export const getUserRepos = async (login) => {

  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10
  })

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)

  // Added a Github Token, but I had to keep changing it because it woul fail every new day.
  // Adding the token would look something like this:
  // , {
  //   headers: {
  //     authorization: `token ${GITHUB_TOKEN}`
  //   }
  // }

  const data = await response.json()
  return data
}