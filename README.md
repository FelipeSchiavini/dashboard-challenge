## Web
This project was crafted using the following technologies:
- <b>React:</b> A JavaScript library for building user interfaces.
- <b>TailwindCSS:</b> A low-level, utility-first CSS framework.
- <b>DaisyUI:</b> UI components for TailwindCSS.
- <b>Recharts:</b> A re-usable chart library for React.

### Getting Started
run `npm install` then `npm run dev`

## Server
This project was built using Node and Express, utilizing the routing-controller. It has only one endpoint `/transactions`, which can accept query parameters such as `status` and `cardBrand`. It will then return the filtered data based on these parameters.

### Acceptable Query Parameters
- <b>status</b>: Based on the StatusTransaction interface. Acceptable values are:
  - <b>Approved</b>: ("Corresponding to Aprovada")
  - <b>Pending</b>: ("Corresponding to Pendente")
  - <b>Denied</b>: ("Corresponding to Negada")

- cardBrand: Based on the CardBrand interface. Acceptable values are:
  - <b>MasterCard</b>
  - <b>Elo</b>
  - <b>Visa</b>
  - <b>Hipercard</b>
  - <b>Others</b>

### Getting Started

To run the project, make a copy of .env.sample to .env and choose the port on which you wish to run the application.
then run `npm install` then `npm run dev`
