import { Card, Grid, Typography, Icon } from "@mui/material";
import React from "react";
import AmazingExperiencesIcon from "@mui/icons-material/EmojiEvents";
import QualityIcon from "@mui/icons-material/Stars";
import CustomerServiceIcon from "@mui/icons-material/Headset";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import "./whytravelo.css";

function WhyTravelo() {
  return (
    <Card>
      <div className="Tittle">
        <h2>¿Por qué reservar con Travelo?</h2>
      </div>
      <Grid container spacing={2} className="Columns">
        <Grid className="WhyInformationCard" item xs={12} sm={6} md={3}>
          <Icon
            className="IconCreditScoreIcon"
            component={CreditScoreIcon}
            style={{ fontSize: "45px" }}
          />
          <Typography>
            <h2>
              <strong>Máxima flexibilidad</strong>
            </h2>
            <p>
              {" "}
              Usted tiene el control; ofrecemos cancelación gratuita y opciones
              de pago que se adaptan a cualquier plan o bolsillo.
            </p>
          </Typography>
        </Grid>
        <Grid className="WhyInformationCard" item xs={12} sm={6} md={3}>
          <Icon
            className="IconAmazingExperiencesIcon"
            component={AmazingExperiencesIcon}
            style={{ fontSize: "45px" }}
          />
          <Typography>
            <h2>
              <strong>Experiencias inolvidables</strong>
            </h2>
            <p>
              Busque y reserve visitas guiadas y actividades tan increíbles que
              no podrá esperar a contárselas a sus amigos.
            </p>
          </Typography>
        </Grid>
        <Grid className="WhyInformationCard" item xs={12} sm={6} md={3}>
          <Icon
            className="IconQualityIcon"
            component={QualityIcon}
            style={{ fontSize: "45px" }}
          />
          <Typography>
            <h2>
              <strong>La calidad es nuestro objetivo</strong>
            </h2>
            <p>
              Estándares de calidad estrictos. Millones de opiniones. Una
              empresa de Tripadvisor.
            </p>
          </Typography>
        </Grid>
        <Grid className="WhyInformationCard" item xs={12} sm={6} md={3}>
          <Icon
            className="IconCustomerServiceIcon"
            component={CustomerServiceIcon}
            style={{ fontSize: "45px" }}
          />
          <Typography>
            <h2>
              <strong>Servicio de atención al cliente galardonado</strong>
            </h2>
            <p>
              ¿Ha cambiado el precio? ¿Han cambiado los planes? No se preocupe.
              Estamos aquí para ayudarle las 24 horas del día, los 7 días de la
              semana.
            </p>
          </Typography>
        </Grid>
      </Grid>
      <hr className="Divider" />
      <div className="DividerTextContainer">
        <span className="DividerText">
          Por qué estas viendo estas recomendaciones?
        </span>
      </div>
    </Card>
  );
}

export default WhyTravelo;
