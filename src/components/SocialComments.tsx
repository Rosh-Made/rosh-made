import React, { FC, useState } from "react"
import styled from "styled-components"
import { useAuth, useUser } from "reactfire"
import FacebookIcon from "@material-ui/icons/Facebook"
import {
  CircularProgress,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core"
import { Button } from "gatsby-theme-material-ui"
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth"
import { useComments } from "../hooks/useComments"
import { CommentsContainer } from "./CommentsContainer"

type SocialCommentsProps = {
  blogUrl: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-items: flex-end;
`

const TextInput = styled(TextField)`
  width: 100%;
  margin-bottom: 1rem;
  font-family: freight-sans-pro, sans-serif;
`

const TopDivider = styled(Divider)`
  margin-top: 4em;
`

const PostButton = styled(Button)`
  text-transform: none;
`

const CommentsButtons = styled.div`
  display: flex;
  flex-direction: row;

  .Mui-checked {
    color: #4e4e4e;
  }

  @media (max-width: 382px) {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`

const CustomRadioGroup = styled(RadioGroup)`
  align-items: center;
  justify-content: center;
`

const RadioButtonLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 0.75rem;
  color: #4e4e4e;
`

const NameInput = styled(TextField)`
  margin-right: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 382px) {
    margin-right: 0;
  }
`

export const SocialComments: FC<SocialCommentsProps> = ({ blogUrl }) => {
  const [comment, setComment] = useState<string>("")
  const [profileOption, setProfileOption] = useState("facebook")
  const [name, setName] = useState<string>("")
  const [posing, setPosting] = useState<boolean>(false)
  const auth = useAuth()
  const userData = useUser()
  const { postComments, getComments } = useComments(blogUrl)

  const postComment = async () => {
    setPosting(true)
    if (profileOption === "facebook") {
      let user
      if (userData && userData.data && userData.data.displayName) {
        user = userData.data
      } else {
        const provider = new FacebookAuthProvider()
        const result = await signInWithPopup(auth, provider)
        user = result.user
      }

      const displayName = user.displayName as string
      const profilePic = user.photoURL as string
      const uid = user.uid

      await postComments({
        name: displayName,
        profilePic,
        comment,
        uid,
        timestamp: new Date().getTime(),
      })
    } else if (name) {
      await postComments({
        name,
        comment,
        timestamp: new Date().getTime(),
      })
      setProfileOption("facebook")
    }
    setPosting(false)
    setComment("")
    setName("")
  }

  const comments = getComments()

  return (
    <>
      <TopDivider />
      <CommentsContainer comments={comments || []} />
      <Container>
        <TextInput
          id="outlined-multiline-static"
          multiline
          rows={2}
          variant="outlined"
          placeholder="Share your thoughts..."
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <CommentsButtons>
          <CustomRadioGroup value={profileOption} row>
            <FormControlLabel
              value="facebook"
              control={<Radio />}
              label={
                <RadioButtonLabel>
                  <FacebookIcon fontSize="small" /> Facebook
                </RadioButtonLabel>
              }
              onClick={() => setProfileOption("facebook")}
            />
            {profileOption !== "name" && (
              <FormControlLabel
                value="name"
                control={<Radio />}
                label={<RadioButtonLabel>Name</RadioButtonLabel>}
                onClick={() => setProfileOption("name")}
              />
            )}
          </CustomRadioGroup>
          {profileOption === "name" && (
            <NameInput
              focused
              value={name}
              onChange={e => setName(e.target.value)}
              size="small"
              label="Name"
              variant="outlined"
            />
          )}
          <PostButton
            variant="outlined"
            onClick={() => postComment()}
            disabled={!comment || posing || (profileOption === "name" && !name)}
          >
            {posing && <CircularProgress size={20} />} Comment
          </PostButton>
        </CommentsButtons>
      </Container>
    </>
  )
}
