import { Channel, StatusTransaction } from "../store/transaction.store"

export const statusTranslated = {
  [StatusTransaction.Approved]: "Approved",
  [StatusTransaction.Denied]: "Denied",
  [StatusTransaction.Pending]: "Pending",
}

export const channelTranslated = {
  [Channel.Ecommerce]: "Ecommerce",
  [Channel.Machine]: "Machine",
  [Channel.SuperLink]: "Super Link / Typed",
}
