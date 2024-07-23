import { Slide, FlexBox, Heading, Notes, SlideLayout, UnorderedList, ListItem} from 'spectacle'

const Jon = () => (
	<>
		<Heading>Jon longlastname</Heading>
		<UnorderedList>
			<ListItem>@desrosj</ListItem>
		</UnorderedList>
	</>
)

const Jorbin = () => (
	<>
		<Heading>Aaron Jorbin</Heading>
		<UnorderedList>
			<ListItem>@jorbin</ListItem>
		</UnorderedList>
	</>
)

const Outro = () => (
	<>
		<Slide>
		  <FlexBox height="100%">
		  	Make Slide with clock
		  </FlexBox>
		  <Notes>
			Release at XX:XX
		  </Notes>
		</Slide>
		<SlideLayout.TwoColumn
			left=<Jon />
			right=<Jorbin />
		/>
	</>
)

export default Outro;
