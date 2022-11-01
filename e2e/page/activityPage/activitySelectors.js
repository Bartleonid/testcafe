//removed Selector() from here because I want to log out which css element is clicked
export default {
    calendarDropdown: '[data-testid="tinyOrderbox-calendar-fakedropdown-CTA"]',
    calendar: '[data-testid="tinyOrderbox-calendar"]',
    date: '[data-testid="calendar-cell-enabled"]',
    ticketOption: '[data-testid="tinyOrderbox-featureAccordion"] section',
    timeSlotDropdown: '[data-testid="tinyOrderbox-timeslotSelector"] [data-testid="dropdown-input"]',
    timeSlot: '[data-testid="tinyOrderbox-timeslotSelector"] [data-testid="dropdown-item"]',
    selectYourTickets: '[data-testid="tinyOrderbox-holderSelector"] h3',
    singleTicket: '[data-testid="tinyOrderbox-holderSelector"] [data-testid="single-ticket"]'
}