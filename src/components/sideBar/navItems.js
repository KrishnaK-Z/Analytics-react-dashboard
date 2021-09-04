import { RiDashboardFill, RiTestTubeLine } from "react-icons/ri";
import { AiOutlineCalendar, AiOutlineInbox } from "react-icons/ai";
import { IoCashOutline } from "react-icons/io5";

// List of navigation items.
export const NAV_ITEMS = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "collapse",
    icon: <RiDashboardFill />,
    children: [
      {
        id: "page-visitors",
        title: "Page Visitors",
        type: "item",
        url: "#"
      },
      {
        id: "post-performance",
        title: "Post Performance",
        type: "item",
        url: "#"
      },
      {
        id: "team-overall",
        title: "Team Overall",
        type: "item",
        url: "#"
      }
    ]
  },
  {
    id: "calender",
    title: "Calender",
    type: "item",
    icon: <AiOutlineCalendar />
  },
  {
    id: "inbox",
    title: "Inbox",
    type: "item",
    icon: <AiOutlineInbox />
  },
  {
    id: "invoicing",
    title: "Invoicing",
    type: "item",
    icon: <IoCashOutline />
  },
  {
    id: "lab",
    title: "Lab / Experimental",
    type: "item",
    icon: <RiTestTubeLine />
  }
];

export const RECENTLY_VIEWS = [
  {
    id: 1,
    name: "Overall Performance"
  },
  {
    id: 2,
    name: "Invoice #940"
  },
  {
    id: 3,
    name: "Customer: Minerva Viewer"
  }
];
