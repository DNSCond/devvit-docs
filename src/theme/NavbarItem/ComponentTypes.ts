/* eslint-disable implicitDependencies/no-implicit */
// Docusaurus handles these imports for us - ESLint, it's fine, calm down!
// See: https://docusaurus.io/docs/swizzling
import { useLocation } from '@docusaurus/router';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DocNavbarItem from '@theme/NavbarItem/DocNavbarItem';
import DocSidebarNavbarItem from '@theme/NavbarItem/DocSidebarNavbarItem';
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import DocsVersionNavbarItem from '@theme/NavbarItem/DocsVersionNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import HtmlNavbarItem from '@theme/NavbarItem/HtmlNavbarItem';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import SearchNavbarItem from '@theme/NavbarItem/SearchNavbarItem';
/* eslint-enable implicitDependencies/no-implicit */

const ComponentTypes = {
  default: DefaultNavbarItem,
  localeDropdown: LocaleDropdownNavbarItem,
  search: SearchNavbarItem,
  dropdown: DropdownNavbarItem,
  html: HtmlNavbarItem,
  doc: DocNavbarItem,
  docSidebar: DocSidebarNavbarItem,
  docsVersion: DocsVersionNavbarItem,
  docsVersionDropdown: (props) => {
    //EXCLUDE_FROM_PUBLIC_START
    const location = useLocation();

    // don't show the version dropdown for the firehose
    if (location && location.pathname.includes('firehose')) {
      return () => {};
    }

    //EXCLUDE_FROM_PUBLIC_END
    return DocsVersionDropdownNavbarItem(props);
  }, //,
};
export default ComponentTypes;
