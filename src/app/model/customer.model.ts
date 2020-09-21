

export interface Cutomer {
  "email": string,
  "firstname": string,
  "lastname": string,
  "address": Address,


}
export interface Address {
  "defaultShipping": boolean,
  "defaultBilling": boolean,
  "firstname": string,
  "lastname": string,
  "region": Region,
  "postcode": string,
  "street": string,
  "city": string,
  "telephone": string,
  "countryId": string
}
export interface Region {
  "regionCode": string,
  "region": string,
  "regionId": number
}
