import React, { useEffect, useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { CustomNavBar, Footer } from "../components";
import Calendar from "../components/Calendar";
import axios from "axios";
import cheerio from "cheerio";

export default function Rdv() {
  const [appointmentDates, setAppointmentDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://calendar.google.com/calendar/embed?src=dc805217f06644fe297e8e3e67ecda287125d301703ff8908db77cee129514f8%40group.calendar.google.com&ctz=Europe%2FParis"
        );
        const html = response.data;
        const $ = cheerio.load(html);

        // Sélectionnez les éléments contenant les dates des rendez-vous
        const appointmentElements = $(".event-when");

        // Parcourez les éléments et extrayez les dates
        const appointmentDates = appointmentElements
          .map((index, element) => {
            const date = $(element).text();
            console.log("Date extrait :", date); // Ajoutez cette ligne pour afficher la date extraite dans la console
            return date; // Vous devrez adapter cette étape en fonction de la structure HTML de votre iframe
          })
          .get();
        setAppointmentDates(appointmentDates);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de l'extraction des dates de rendez-vous : ",
          error
        );
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <CustomNavBar />
      <Calendar />
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sélectionner une date de rendez-vous
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {appointmentDates.map((date, index) => (
            <Dropdown.Item key={index}>{date}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Footer />
    </div>
  );
}
