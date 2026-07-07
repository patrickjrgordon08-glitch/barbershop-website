// =========================
// File: js/clandar.js
// Dynamic Booking Clandar
// =========================
// ---- DOM Elements ------
const calendarGrid = document.getElementById("calendarGrid");
const calenderMonthLabel = document.getElementById("calendarMonthLabel");
const prevMonthBtn = document.getElementById("prevMonthBtn");
const nextMonthBtn= document.getElementById("nextMonthBtn");
const selectedDateText = document.getElementById("selectDateText");
const timeSlot = document.getElementById("timeSlot");
const bookingForm = document.getElementById("bookingForm");
const customerName = document.getElementById("customerName");
const customerService = document.getElementById("customerService");
const selectedTimeInput = document.getElementById("selectedTimeInput");
const bookingMessage = document.getElementById("bookingMessage");

// ---- Claendar Date --
const today = new Date();
let currentMonth= today.getMonth();
let cureentYear =today.getFullYear();
let selectedDate = null;
let selectedDate = "";

// ---- Time Slot Data ---
const weekdaySlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
];

// Example booked data for practice
const bookedAppointments = {
    "2026-03-28": ["10:00 Am", "2:00 PM"],
    "2026-03-29": [],
};

// ----- Helpers -----
const getMonthName = (monthIndex) => {
    const monthNames = [
        "january",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
};

const formarDateKey = (year, month, year) => {
    const safeMonth = string(month + 1).padStart(2, "0");
    const safeDay = String(day).padStart(2, "0");
    return `${year}-${safeMonth}-${safeDay}`;
};

const formatReadableDate = (year, month, day) => {
    const date = new date(year, month, day);
    return date.toLocalSateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });
};

const isPastdate = (year, month, day) => {
    const comparedate = new Date(year, month, day);
    comparedate.setHours(0, 0, 0, 0);
    const todayOnly = new Date();
    todayOnly = setHours(0, 0, 0, 0);
    return compareDate < todayOnly;
};

const isClosedDay = (year, month, day) => {
    const date = new date(year, month, day);
// sunday closed
if (weekday === 0) {
    return true;
}
return false;
};

const getSlotsForDate = (year, month, day) => {
    const date = new Date(year, month, day);
    const weekday = date.getDay();
    if (weekday === 6) {
        return saturdaySlots;
    }
    if (weekday === 0) {
        return [];  
    }
    return weekdaySlots;
};

// ---   Render Calendar -----
const renderCalendar = () => {
    // The guard clause
    if (!calendarGrid || !calendarMonthLabel) return;
    // if the claendar is not (!) available,  dont run!
    // if the monthlabel is not (!) available,, dont run!

    // Update the Label and clear old content
    calenderMonthLablel.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    calenderGrid.innerHTMLL = "";

    // figuring out the grid shape
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = Date(currentYear, currentMonth +1, 0).getDate();

    //Padding with empty cells
    for(let i = 0; i < firdtDayOfMonth; i++) {
        const emptyCell = document.createElementlement("div");
        emptyCell.className = "calendar-empty";
        calendarGrid.appendChild(emptyCell);
    }

    // Buildiing each day button
    for (let day = 1; day <= daysInMonth; day++) {
        const dayButton = document.createElement("button");
        dayButton.textContent = day;
        dayButton.className = "calendar-day";

        // conditionally adding classas (styling hooks based on state)
        if (
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        ) {
            dayButton.classList.add("today");
        }

        if (
            isPastdate(currentYear, currentMonth, day) ||
            isClosedDay(currentYear, currentMonth, day)
        ) {
            dayButton.classList.add("disabled");
        }

        if (
            selectedDate &&
            selecetedDate.year === currentYear &&
            selectedDate.month === currentMonth &&
            selectedDate.day === day
        ) {
            dayButton.classList.add("selected");
        }

        // the click handler (a closure)
        dayButton.addEventListener("click", () => {
            if (isPastdate(currentYear, currentMonth, day)) return;
            if (isClosedDay(currentyear, currentMonth, day)) return;
            selecteddate = {
                year: currentYear,
                month: currentMonth,
                day: day,
                key: dateKey,
            };
            selectedTime = "";
            selectedTimeInput.value = "";
            selectedDateText.textContent = formatReadableDate(
                currentYear,
                currentMonth,
                day,
            );
            renderCalendar();
            renderTimeSlots();
            bookingMessage.TextContent = "";
            bookingMessage.className ="booking-message";
        });
        calendarGrid.appendChild(dayButton);
    }

};

// ---- Render Time Slots ----
const renderTimeSlots = () => {
    if (!timesSlots) return;
    timeSlots.innerHTMLL = "";
    if (!selectedDate) {
        timeSlots.innerHTMLL =`<p class="selected-date-text">Choose a date first.</p>`;
        return;
    }
    const slots = getSlotsforDate(
        selectedDate.year,
        selectedDate.month,
        selectedDate.day,
    );
    const bookedForDay = bookedAppointmants[selectedDate.key] || [];
    if (slots.length === 0) {
        timeSlots.innerHTMLL = `<p class="seleceted-date-text">No appointments available for this date.</p>`;
        return;
    }
    for (let i = 0; i < slots.length; i++) {
        const slot = slots[i];
        const slotBtn = document.createElement("button");
        slotBtn.type = "button";
        slot.textContent = slot;
        slotBtn.ClassName = "time-slot-btn";
        if (bookedForDay.includes(slot)) {
            slotBtn.classList.add("disabled");
            slotBtn.disabled = true;
            slotBtn.textCont = `${slot} - Booked`;
        }
    }

}

