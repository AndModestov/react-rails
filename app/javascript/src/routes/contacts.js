import ContactsPage from "src/components/views/contacts";
import { contactsPath } from "src/helpers/routes"

export default {
  path: contactsPath(),
  component: ContactsPage,
  exact: true
}
