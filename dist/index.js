"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var r=i(e),o=n(e),a=n(t);const l="#ffffff",c="#242424",s="#111111",m="#e6e6e6",d="#d7d6d6",f=a.default.span`
    position: relative;
    padding: 0.4rem 3rem;
    border: 1px solid ${s};
    text-decoration: none;
    cursor: pointer;
    color: ${e=>e.light?l:s};
    background: ${e=>e.filled?s:""};
    font-weight: 600;
    transition: all 0.4s ease 0s;
    z-index: 0;
    /* ::before {
        content: '';
        position: absolute;
        inset: 0px;
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0s, -webkit-transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0s;
        transform: scale(0, 1);
        transform-origin: right center;
        background: ${e=>e.light?l:s};
        z-index: -1;
    } */
    /* :hover {
        color: ${e=>e.light?s:l};
    } */
    :hover {
        background: ${e=>e.light?d:m};
        color: ${s};
    }
    :active {
        background: ${e=>e.light?m:d};
        color: ${s};
    }
    /* ::before {
        color: ${s} !important;
    } */
    /* :hover::before {
        transform: scale(1, 1);
        transform-origin: left center;
    } */
    @media (max-width: 575px) {
        padding: 0.4rem 1.5rem;
    }
`;function u({children:e,href:t,light:n=!1,filled:i=!1,className:o,onClick:a}){return r.createElement("div",{className:"d-flex"},r.createElement(f,{href:t,light:n,filled:i,onClick:a,className:o},e))}const g=a.default.div`
    padding: 2rem 1rem;
    bottom: 0;
    z-index: 9999;
    background: ${l};
    h4 {
        font-weight: bold;
    }
    .actions {
        gap: 1.4rem;
    }

    @media (max-width: 575px) {
        .r {
            flex-direction: column;
        }
        .actions {
            width: 100%;
            margin-top: 1rem;
        }
        .fifty {
            width: 100%;
        }
    }
`;const p=a.default.div`
    padding: 4rem 1rem;
    border-top: 1px solid ${s};
    .footer-link {
        position: relative;
        color: ${s};
        text-decoration: none;
    }
    .footer-link:hover::after {
        content: '';
        background: ${s};
        bottom: -3px;
        height: 2px;
        left: 0;
        position: absolute;
        width: 100%;
    }
    .footer-logo {
        margin-left: 1rem;
        font-size: 4.7rem;
        font-weight: 200;
    }
    .gap-responsive {
        row-gap: 2rem;
        column-gap: 4rem;
    }

    @media (max-width: 502px) {
        .gap-responsive {
            flex-direction: column;
        }
        .footer-logo {
            font-size: 3rem;
        }
    }
`,h=a.default.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    background: ${s};
    color: ${l};
    .social-media {
        margin-left: 1rem;
        display: flex;
        gap: 4.5rem;
        a {
            position: relative;
            color: ${l} !important;
            text-decoration: none;
        }
        a:hover::after {
            content: '';
            background: ${l};
            bottom: -1px;
            height: 2px;
            left: 0;
            position: absolute;
            transition: width 0.3s ease-in-out;
            width: 100%;
        }
    }

    @media (max-width: 560px) {
        .social-media {
            flex-direction: column;
            gap: 1rem;
        }
    }
`;const x=a.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${s};
    color: ${l};
    padding: 0.5rem 1rem;
    font-family: 'Montserrat-Light', sans-serif;
    strong {
        font-family: 'Montserrat-Bold', sans-serif;
        font-weight: 600;
    }
`;function v({children:e}){return o.default.createElement(x,null,o.default.createElement("div",{className:"container"},e))}const w=a.default.header`
    background: ${l};
    padding: 1.8rem 1rem;
    color: ${s};
    max-height: 87px;
    border-bottom: 1px solid ${c};
    #logo {
        margin-right: 6rem;
    }
    .nav-link-element {
        position: relative;
        color: ${s};
        text-decoration: none;
        margin: 0 1.5rem;
        font-family: 'Montserrat', sans-serif;
    }
    .nav-link-element:hover::after {
        content: '';
        background: ${s};
        bottom: -3px;
        height: 2px;
        left: 0;
        position: absolute;
        width: 100%;
    }
    .icon:first-child {
        margin-right: 2.8rem;
        @media (max-width: 385px) {
            margin-right: 1rem;
        }
    }
    #menu-icon {
        display: none;
        cursor: pointer;
    }

    @media (max-width: 1199px) {
        .nav-link-element {
            display: none;
        }
        #menu-icon {
            margin-left: auto;
            margin-right: 2.8rem;
            display: block;
        }
        .responsive {
            width: 100%;
        }
    }

    @media (max-width: 385px) {
        .icon {
            margin-right: 1rem;
        }
        #menu-icon {
            margin-right: 1rem;
        }
    }
`;const b=a.default.div`
    opacity: ${e=>e.menuOpen?1:0};
    visibility: ${e=>e.menuOpen?"visible":"hidden"};
    position: relative;
    z-index: 9999;
    background: ${l};
    transition: all 0.3s ease;
    .nav-mobile-element {
        position: relative;
        color: ${s};
        text-decoration: none;
        margin: 1rem 0;
        font-family: 'Montserrat', sans-serif;
    }
    .nav-mobile-element:hover::after {
        content: '';
        background: ${s};
        bottom: -3px;
        height: 2px;
        left: 0;
        position: absolute;
        width: 100%;
    }
    #close-menu {
        position: absolute;
        top: 30px;
        right: 40px;
        cursor: pointer;
    }
`;exports.Button=u,exports.CookieWarning=function({cookieWarning:e}){return r.createElement(r.Fragment,null,!localStorage.getItem("isNotNew")&&r.createElement(g,{className:"position-sticky w-100 d-flex justify-content-center flex-column",ref:e},r.createElement("div",{className:"container d-flex align-items-center justify-content-between r"},r.createElement("div",{className:"me-3"},r.createElement("h4",null,"Notice"),r.createElement("p",{className:"m-0"},"We use cookies to measure the performance of our site, personalize your experience and for advertising purposes.")),r.createElement("div",{className:"d-flex align-items-center actions"},r.createElement(u,{className:"fifty"},"Reject"),r.createElement(u,{className:"fifty",filled:!0,light:!0,onClick:()=>{e.current.classList.add("d-none"),localStorage.setItem("isNotNew",!0)}},"Accept")))))},exports.Footer=function({children:e,notice:t,socialMedia:n,className:i}){return r.createElement(r.Fragment,null,r.createElement(p,{className:""+(i?` ${i}`:"")},r.createElement("div",{className:"container d-flex align-items-center justify-content-between"},r.createElement("div",{className:"d-flex align-items-center flex-wrap gap-responsive"},e),r.createElement("span",{className:"footer-logo"},"Logo"))),r.createElement(h,null,r.createElement("div",{className:"container d-flex align-items-center justify-content-between"},r.createElement("span",null,t),r.createElement("div",{className:"social-media"},n&&n.map(((e,t)=>r.createElement("a",{href:e.link,rel:"noopener noreferrer",key:t},e.text)))))))},exports.Header=function({setMenuOpen:e,logo:t,children:n,noticeText:i,className:r,socialMedia:a}){return o.default.createElement(o.default.Fragment,null,i&&o.default.createElement(v,null,i),o.default.createElement(w,{className:"d-flex w-100"+(r?` ${r}`:"")},o.default.createElement("div",{className:"container d-flex w-100 justify-content-between align-items-center small-text"},o.default.createElement("div",{className:"d-flex align-items-center responsive"},o.default.createElement("span",{id:"logo"},"Logo"),n,o.default.createElement("svg",{id:"menu-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:30,height:30,fill:s,onClick:()=>e((e=>!e))},o.default.createElement("path",{d:"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"}))),o.default.createElement("div",{className:"d-flex align-items-center"},a&&a.map(((e,t)=>"instagram"===e.type?o.default.createElement("a",{key:t,className:"d-inline-flex icon",href:e.link,rel:"noopener noreferrer"},o.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:30,height:30,fill:s},o.default.createElement("path",{d:"M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"}))):o.default.createElement("a",{key:t,className:"d-inline-flex icon",href:e.link,rel:"noopener noreferrer"},o.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:30,height:30,fill:s},o.default.createElement("path",{d:"M 8 2 C 5.960938 2 4.15625 2.210938 3.058594 2.375 C 2.160156 2.507813 1.445313 3.210938 1.28125 4.113081 C 1.140625 4.902344 1 6.054688 1 7.5 C 1 8.945313 1.140625 10.097656 1.28125 10.886719 C 1.445313 11.789063 2.160156 12.488281 3.058594 12.625 C 4.160156 12.789063 5.972656 13 8 13 C 10.027344 13 11.835938 12.789063 12.9375 12.625 L 12.941406 12.625 C 13.839844 12.492188 14.554688 11.789063 14.71875 10.886719 C 14.859375 10.09375 15 8.941406 15 7.5 C 15 6.054688 14.859375 4.902344 14.714844 4.113081 C 14.554688 3.210938 13.839844 2.507813 12.941406 2.375 C 11.84375 2.210938 10.039063 2 8 2 Z M 8 3 C 9.96875 3 11.730469 3.203125 12.792969 3.363081 C 13.261719 3.433594 13.640625 3.800781 13.730469 4.289063 C 13.863081 5.027344 14 6.121094 14 7.5 C 14 8.878906 13.863081 9.972656 13.734375 10.707031 C 13.644531 11.199219 13.265625 11.566406 12.792969 11.636719 C 11.722656 11.792969 9.957031 12 8 12 C 6.042969 12 4.273438 11.792969 3.207031 11.636719 C 2.738281 11.566406 2.355469 11.199219 2.265625 10.707031 C 2.136719 9.96875 2 8.878906 2 7.5 C 2 6.117188 2.136719 5.027344 2.265625 4.289063 C 2.355469 3.800781 2.734375 3.433594 3.203125 3.367188 L 3.207031 3.367188 C 4.269531 3.207031 6.03125 3 8 3 Z M 6 5 L 6 10 L 11 7.5 Z"})))))))))},exports.MobileNav=function({menuOpen:e,setMenuOpen:t,children:n}){return r.createElement(b,{className:"position-fixed w-100 vh-100 d-flex justify-content-center align-items-center flex-column",menuOpen:e},n,r.createElement("svg",{id:"close-menu",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:30,height:30,fill:s,onClick:()=>t(!1)},r.createElement("path",{d:"M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"})))},exports.NoticeElement=v;
