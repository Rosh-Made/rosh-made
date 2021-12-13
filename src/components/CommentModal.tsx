import {
  Avatar,
  ButtonGroup,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Icon,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core"
import React, { FC, useState } from "react"
import styled from "styled-components"
import { Button } from "gatsby-theme-material-ui"
import PersonIcon from "@material-ui/icons/Person"
import FacebookIcon from "@material-ui/icons/Facebook"

type CommentModalProps = {
  visible: boolean
  comment: string
  close: () => void
}

const Content = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`

const PostModel = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
`

const ContentContainer = styled.div`
  display: flex;
  padding: 1rem;
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: rgba(193, 193, 193, 0.21);
  flex-grow: 1;
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1rem;
  gap: 1rem;
`

const CustomButton = styled(Button)`
  text-transform: none;
`

export const CommentModal: FC<CommentModalProps> = ({
  visible,
  close,
  comment,
}) => {
  const [profileOption, setProfileOption] = useState("facebook")

  return (
    <PostModel open={visible} onClose={close}>
      <Content>
        <Header>
          <Typography variant="subtitle2">
            Comment using social profile
          </Typography>
          <RadioGroup
            onSelect={e => console.log(e)}
            aria-label="anonymous"
            name="anonymous"
            value={profileOption}
            row
          >
            <FormControlLabel
              value="facebook"
              control={<Radio />}
              label="Facebook"
              onClick={() => setProfileOption("facebook")}
            />
            <FormControlLabel
              value="google"
              control={<Radio />}
              label="Google"
              onClick={() => setProfileOption("google")}
            />
            <FormControlLabel
              value="name"
              control={<Radio />}
              label="Name"
              onClick={() => setProfileOption("name")}
            />
          </RadioGroup>
        </Header>
        <Divider />
        <ContentContainer>
          <LeftContainer>
            <Avatar>
              <PersonIcon />
            </Avatar>
            <Typography>Anonymous</Typography>
          </LeftContainer>
          <RightContainer>{comment}</RightContainer>
        </ContentContainer>
        <Divider />
        <FooterContainer>
          <CustomButton onClick={close} variant="outlined">
            Cancel
          </CustomButton>
          <CustomButton variant="outlined">Post</CustomButton>
        </FooterContainer>
      </Content>
    </PostModel>
  )
}
