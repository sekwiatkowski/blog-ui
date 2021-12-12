"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var r=i(e),o=n(e),a=n(t);const l="#ffffff",s="#242424",c="#111111",m=a.default.span`
    position: relative;
    padding: 0.4rem 3rem;
    border: 1px solid ${c};
    text-decoration: none;
    cursor: pointer;
    color: ${e=>e.light?l:c};
    background: ${e=>e.filled?c:""};
    font-weight: 600;
    transition: all 0.4s ease 0s;
    z-index: 0;
    ::before {
        content: '';
        position: absolute;
        inset: 0px;
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0s, -webkit-transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0s;
        transform: scale(0, 1);
        transform-origin: right center;
        background: ${e=>e.light?l:c};
        z-index: -1;
    }
    :hover {
        color: ${e=>e.light?c:l};
    }
    :hover::before {
        transform: scale(1, 1);
        transform-origin: left center;
    }
    @media (max-width: 575px) {
        padding: 0.4rem 1.5rem;
    }
`;function d({children:e,href:t,light:n=!1,filled:i=!1,className:o,onClick:a}){return r.createElement("div",{className:"d-flex"},r.createElement(m,{href:t,light:n,filled:i,onClick:a,className:o},e))}const f=a.default.div`
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
`;const u=a.default.div`
    padding: 4rem 1rem;
    border-top: 1px solid ${c};
    .footer-link {
        position: relative;
        color: ${c};
        text-decoration: none;
    }
    .footer-link:hover::after {
        content: '';
        background: ${c};
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
`,p=a.default.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    background: ${c};
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
`;const g=a.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${c};
    color: ${l};
    padding: 0.5rem 1rem;
    font-family: 'Montserrat-Light', sans-serif;
    strong {
        font-family: 'Montserrat-Bold', sans-serif;
        font-weight: 600;
    }
`;function h({children:e}){return o.default.createElement(g,null,o.default.createElement("div",{className:"container"},e))}const x=a.default.header`
    background: ${l};
    padding: 1.8rem 1rem;
    color: ${c};
    max-height: 87px;
    border-bottom: 1px solid ${s};
    #logo {
        margin-right: 6rem;
    }
    .nav-link-element {
        position: relative;
        color: ${c};
        text-decoration: none;
        margin: 0 1.5rem;
        font-family: 'Montserrat', sans-serif;
    }
    .nav-link-element:hover::after {
        content: '';
        background: ${c};
        bottom: -3px;
        height: 2px;
        left: 0;
        position: absolute;
        width: 100%;
    }
    .icon {
        margin-right: 2.8rem;
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
`;const v=a.default.div`
    opacity: ${e=>e.menuOpen?1:0};
    visibility: ${e=>e.menuOpen?"visible":"hidden"};
    position: relative;
    z-index: 9999;
    background: ${l};
    transition: all 0.3s ease;
    .nav-mobile-element {
        position: relative;
        color: ${c};
        text-decoration: none;
        margin: 1rem 0;
        font-family: 'Montserrat', sans-serif;
    }
    .nav-mobile-element:hover::after {
        content: '';
        background: ${c};
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
`;exports.Button=d,exports.CookieWarning=function({cookieWarning:e}){return r.createElement(r.Fragment,null,!localStorage.getItem("isNotNew")&&r.createElement(f,{className:"position-sticky w-100 d-flex justify-content-center flex-column",ref:e},r.createElement("div",{className:"container d-flex align-items-center justify-content-between r"},r.createElement("div",{className:"me-3"},r.createElement("h4",null,"Notice"),r.createElement("p",{className:"m-0"},"We use cookies to measure the performance of our site, personalize your experience and for advertising purposes.")),r.createElement("div",{className:"d-flex align-items-center actions"},r.createElement(d,{className:"fifty"},"Reject"),r.createElement(d,{className:"fifty",filled:!0,light:!0,onClick:()=>{e.current.classList.add("d-none"),localStorage.setItem("isNotNew",!0)}},"Accept")))))},exports.Footer=function({children:e,notice:t,socialMedia:n,className:i}){return r.createElement(r.Fragment,null,r.createElement(u,{className:""+(i?` ${i}`:"")},r.createElement("div",{className:"container d-flex align-items-center justify-content-between"},r.createElement("div",{className:"d-flex align-items-center flex-wrap gap-responsive"},e),r.createElement("span",{className:"footer-logo"},"Logo"))),r.createElement(p,null,r.createElement("div",{className:"container d-flex align-items-center justify-content-between"},r.createElement("span",null,t),r.createElement("div",{className:"social-media"},n&&n.map(((e,t)=>r.createElement("a",{href:e.link,rel:"noopener noreferrer",key:t},e.text)))))))},exports.Header=function({setMenuOpen:e,logo:t,children:n,noticeText:i,className:r,socialMedia:a}){return o.default.createElement(o.default.Fragment,null,i&&o.default.createElement(h,null,i),o.default.createElement(x,{className:"d-flex w-100"+(r?` ${r}`:"")},o.default.createElement("div",{className:"container d-flex w-100 justify-content-between align-items-center small-text"},o.default.createElement("div",{className:"d-flex align-items-center responsive"},o.default.createElement("span",{id:"logo"},"Logo"),n,o.default.createElement("svg",{id:"menu-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:30,height:30,fill:c,onClick:()=>e((e=>!e))},o.default.createElement("path",{d:"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"}))),o.default.createElement("div",{className:"d-flex align-items-center"},a&&a.map(((e,t)=>o.default.createElement("a",{key:t,className:"d-inline-flex icon",href:e.link,rel:"noopener noreferrer"},o.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:30,height:30,fill:c},o.default.createElement("path",{d:"M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"})))))))))},exports.MobileNav=function({menuOpen:e,setMenuOpen:t,children:n}){return r.createElement(v,{className:"position-fixed w-100 vh-100 d-flex justify-content-center align-items-center flex-column",menuOpen:e},n,r.createElement("svg",{id:"close-menu",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:30,height:30,fill:c,onClick:()=>t(!1)},r.createElement("path",{d:"M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"})))},exports.NoticeElement=h;
