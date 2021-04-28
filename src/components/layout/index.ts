import Layout from "./layout";

export { default as Header, COMPONENT_KEY as HEADER_COMPONENT_KEY } from "./header";
export { default as Footer, COMPONENT_KEY as FOOTER_COMPONENT_KEY } from "./footer";
export { default as Links, COMPONENT_KEY as LINKS_COMPONENT_KEY } from "./header/links";

export type { LayoutOwnProps } from "./layout";
export { COMPONENT_KEY } from "./layout";
export default Layout;
