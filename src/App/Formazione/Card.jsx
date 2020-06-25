import React from "react";
import {
  Box,
  Card as MaterialCard,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import GradeIcon from "@material-ui/icons/Grade";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: 0,
    paddingBottom: 8,
  },
  icon: {
    flex: "0 0 auto",
    marginRight: 16,
  },
  content: {
    flex: "1 1 auto",
  },
  offset: {
    marginLeft: 40,
  },
}));

const Content = ({ icon, children, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {icon && <div className={classes.icon}>{icon}</div>}
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export function Card({ dettagli: d, ...rest }) {
  return (
    <Box {...rest}>
      <MaterialCard>
        <CardHeader
          title={d.qualification}
          subheader={d.qualificationType}
          titleTypographyProps={{
            variant: "h6",
            component: "h2",
            style: { lineHeight: 1.1 },
          }}
          style={{ paddingBottom: 0 }}
          action={
            d.certUrl ? (
              <IconButton
                disabled={d.certUrl ? false : true}
                onClick={() => window.open(d.certUrl, "_blank")}
              >
                <PictureAsPdfIcon />
              </IconButton>
            ) : null
          }
        />

        <CardContent style={{ paddingBottom: "16px !important" }}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Content icon={<LocationCityIcon />}>
                <Typography>
                  {d.name}, {d.location}
                </Typography>
              </Content>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Content icon={<AccessTimeIcon />}>
                <Typography>
                  {d.started} {String.fromCharCode(8594)}{" "}
                  {d.finished ? d.finished : "ad oggi"}
                </Typography>
              </Content>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Content icon={<GradeIcon />}>
                <Typography>
                  {d.grade ? `${d.grade}/${d.maxGrade}` : "n.d."}
                </Typography>
              </Content>
            </Grid>
          </Grid>

          {d.description && (
            <React.Fragment>
              <Typography>
                <b>Descrizione:</b>
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                style={{ whiteSpace: "pre-line" }}
              >
                {d.description}
              </Typography>
            </React.Fragment>
          )}

          {d.otherActivities && (
            <React.Fragment>
              <Typography>
                <b>Altre attività:</b>
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                style={{ whiteSpace: "pre-line" }}
              >
                {d.otherActivities}
              </Typography>
            </React.Fragment>
          )}
        </CardContent>
      </MaterialCard>
    </Box>
  );
}