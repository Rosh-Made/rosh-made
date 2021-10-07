import React, { FC } from "react"
import { Comment } from "../data/Comment"
import {
  Avatar,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core"
import { TransitionGroup } from "react-transition-group"
import CloseIcon from "@material-ui/icons/Close"
import { useUser } from "reactfire"

export const CommentsList: FC<{
  comments: Comment[]
  deleteComment: (id: string) => void
}> = ({ comments, deleteComment }) => {
  if (comments.length == 0) {
    return <></>
  }

  const user = useUser()

  const canDelete = (userId: string | undefined) => {
    return userId && userId === user?.data?.uid
  }

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
              {canDelete(comment.uid) && (
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteComment(comment.id as string)}
                  >
                    <CloseIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              )}
            </ListItem>
          </Fade>
        ))}
      </TransitionGroup>
    </List>
  )
}
