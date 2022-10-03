# Getting Started with Tempo Exercise

## Project Name & Pitch

Tempo

An application used to manage users and teams built with `Typescript`, `React`, `Styled-component`, and `Bootstrap`

## Project Link

https://tempo-ex.netlify.app


## Installation and Setup Instructions

Clone down this repository. You will need `node` and `yarn` installed globally on your machine.

git clone https://github.com/lawee94/tempo.git

Installation:

`yarn install`

To Start Server:

`yarn start`

To Run Test:

`yarn test`

To Visit App:

`localhost:3000/`



## Reflection

According to the project description, the project is to have at least two(2) user roles:

1. Engineering Manager
2. Team Lead, 
3. But i added a third role called `Member` which is the default role of a normal user

Based on the project description there is need for access role management, therefore i created a light-weight login page to collect ID and make sure only the right ID have access to the page and also to know the role of the current user. 

The API given is not that flexible because you can know the team a particular user belong to unless you peep into a particular team, there there is need for all user to be able to see the list of all team. 

Access is given to all users to view team details but on the following basis:
 1. Only the `Engineering Manager` can view the details of all teams and the team members.
 2. A Team lead can view the details of `ONLY` his team and can view other team member profile.
 3. A member can view details of only his team but can access the details of other team members.
 
Also all user can view their own personal profile but the `Engineering Manager` doesnt have that feature



Below is a sample ID for each of these roles to login

Engineering Manager:
`EM_3826-dodge-user-all`

Team Lead:
`b12fa35a-9c4c-4bf9-8f32-27cf03a1f190`  
`aca6aac7-b6e9-4425-8961-801aae6eb2dd`

Member:
`827411ea-1f07-4b5a-a2eb-84717f0a8904`  
`826ddd76-4a45-4821-9c81-8d8efbb17a4b`

ENJOY!
