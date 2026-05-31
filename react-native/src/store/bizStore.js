import React, { createContext, useContext, useReducer } from 'react';

const THEMES = {
 blue: { primary:'#2563EB', primaryDark:'#1D4ED8', accent:'#F59E0B', bg:'#FFFFFF', bgCard:'#F8FAFC', text:'#1E293B', textMuted:'#64748B', name:'Blue (Default)' },
 green: { primary:'#059669', primaryDark:'#047857', accent:'#F59E0B', bg:'#FFFFFF', bgCard:'#F0FDF4', text:'#1E293B', textMuted:'#64748B', name:'Green' },
 purple: { primary:'#7C3AED', primaryDark:'#6D28D9', accent:'#EC4899', bg:'#FFFFFF', bgCard:'#FAF5FF', text:'#1E293B', textMuted:'#64748B', name:'Purple' },
 red: { primary:'#DC2626', primaryDark:'#B91C1C', accent:'#F59E0B', bg:'#FFFFFF', bgCard:'#FEF2F2', text:'#1E293B', textMuted:'#64748B', name:'Bold Red' },
 dark: { primary:'#6366F1', primaryDark:'#4F46E5', accent:'#34D399', bg:'#0F172A', bgCard:'#1E293B', text:'#F1F5F9', textMuted:'#94A3B8', name:'Dark' },
};

const SERVICES = [
 { id:'s1', emoji:'', title:'Web Development', desc:'Custom websites and web apps built to convert. Responsive, fast, SEO-optimised.' },
 { id:'s2', emoji:'', title:'Mobile Apps', desc:'iOS and Android apps built on React Native — cross-platform with native performance.' },
 { id:'s3', emoji:'', title:'AI Integration', desc:'ChatInstance AI agents, voice bots, and smart automation to save your team hours daily.' },
 { id:'s4', emoji:'', title:'Brand & Design', desc:'Logo, colour palette, typography and UI design systems that make your brand stand out.' },
 { id:'s5', emoji:'', title:'Digital Marketing', desc:'SEO, Google Ads, social media strategy and analytics dashboards.' },
 { id:'s6', emoji:'️', title:'Cloud & DevOps', desc:'Hosting, CI/CD pipelines, Docker, and 24/7 monitoring so your app never goes down.' },
];

const TEAM = [
 { id:'t1', emoji:'‍', name:'Sarah Chen', role:'CEO & Founder', bio:'10+ years building SaaS products. Ex-Google, Ex-Stripe.' },
 { id:'t2', emoji:'‍', name:'Marcus Reid', role:'Head of Engineering', bio:'Full stack + mobile specialist. Shipped 40+ production apps.' },
 { id:'t3', emoji:'‍', name:'Priya Kapoor', role:'Design Lead', bio:'Figma wizard. UX research background from IDEO.' },
 { id:'t4', emoji:'‍', name:'James Wu', role:'Head of Growth', bio:'Scaled 3 startups to $1M ARR. Performance marketing expert.' },
];

const TESTIMONIALS = [
 { id:'r1', emoji:'', name:'Alex Thompson', company:'RetailCo', text:'They delivered our e-commerce platform in 6 weeks. Revenue up 40% first month.', stars:5 },
 { id:'r2', emoji:'', name:'Dr. Lisa Moore', company:'HealthFirst Clinic', text:'Our booking app reduced no-shows by 60%. The team was incredible to work with.', stars:5 },
 { id:'r3', emoji:'', name:'Tony Ricci', company:'Ricci\'s Restaurants', text:'Three locations now use our app for orders. Best investment we ever made.', stars:5 },
];

const initState = {
 themeKey: 'blue',
 theme: THEMES.blue,
 phase: 'home',
 chatOpen: false,
 chatMessages: [{ id:'m0', from:'agent', text:'Hi there! I\'m Alex, your AI assistant. How can I help today?' }],
 chatInput: '',
 contactSent: false,
};

function reducer(state, action) {
 switch (action.type) {
 case 'SET_THEME': return { ...state, themeKey: action.key, theme: THEMES[action.key] };
 case 'SET_PHASE': return { ...state, phase: action.phase };
 case 'TOGGLE_CHAT': return { ...state, chatOpen: !state.chatOpen };
 case 'SET_CHAT_INPUT': return { ...state, chatInput: action.val };
 case 'SEND_CHAT': {
 const userMsg = { id:'m'+Date.now(), from:'user', text: state.chatInput };
 const responses = [
 'Great question! Let me connect you with our team right away.',
 'We\'d love to help with that. Can I get your email to follow up?',
 'Our typical turnaround for a project like that is 4-6 weeks.',
 'Absolutely! We\'ve done many projects like this. Want to schedule a call?',
 ];
 const agentMsg = { id:'m'+(Date.now()+1), from:'agent', text: responses[Math.floor(Math.random()*responses.length)] };
 return { ...state, chatInput: '', chatMessages: [...state.chatMessages, userMsg, agentMsg] };
 }
 case 'CONTACT_SENT': return { ...state, contactSent: true };
 default: return state;
 }
}

const BizContext = createContext(null);
export const useBiz = () => useContext(BizContext);
export { THEMES, SERVICES, TEAM, TESTIMONIALS };

export function BizProvider({ children }) {
 const [state, dispatch] = useReducer(reducer, initState);
 return <BizContext.Provider value={{ state, dispatch }}>{children}</BizContext.Provider>;
}
