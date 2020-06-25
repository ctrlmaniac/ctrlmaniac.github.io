import React from "react";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LoadingSpinner } from "src/Components";
import { action } from "src/store";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  centered: {
    margin: "0 auto",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export function AvatarMe({
  large = false,
  centered = false,
  progressColor = "primary",
}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  let { getting, dettagli } = useSelector((state) => state.github);

  let avatarClasses = [];

  if (large) avatarClasses.push(classes.large);
  if (centered) avatarClasses.push(classes.centered);

  React.useEffect(() => {
    if (isEmpty(dettagli)) {
      dispatch(action.github.get());
    }
  }, [dettagli, dispatch]);

  if (getting) {
    return <LoadingSpinner color={progressColor} />;
  } else {
    return (
      <Avatar
        alt="me"
        src={dettagli.avatar_url}
        className={clsx(...avatarClasses)}
      >
        D
      </Avatar>
    );
  }
}
