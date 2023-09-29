import ApprovedStatus from "../components/logo/approved-status"
import DeniedStatus from "../components/logo/denied-status"
import PendingStatus from "../components/logo/pending-status"
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

export const statusToSvg = {
  [StatusTransaction.Approved]: <ApprovedStatus/>,
  [StatusTransaction.Denied]: <DeniedStatus/>,
  [StatusTransaction.Pending]: <PendingStatus/>,
}