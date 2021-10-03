import React, { FC } from "react"
import { Comment } from "../data/Comment"
import {
  Avatar,
  Fade,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core"
import { TransitionGroup } from "react-transition-group"

export const CommentsContainer: FC<{ comments: Comment[] }> = ({
  comments,
}) => {
  return (
    <List>
      <TransitionGroup>
        {comments.map(comment => (
          <Fade key={comment.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                {comment.profilePic ? (
                  <Avatar alt="Remy Sharp" src={comment.profilePic} />
                ) : (
                  <Avatar>{comment.name.substr(0, 1)}</Avatar>
                )}
              </ListItemAvatar>
              <ListItemText
                primary={comment.name}
                secondary={comment.comment}
              />
            </ListItem>
          </Fade>
        ))}
      </TransitionGroup>
    </List>
  )
}
