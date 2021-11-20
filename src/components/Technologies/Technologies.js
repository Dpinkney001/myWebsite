import React from 'react';
import { DiAndroid, DiFirebase, DiJava, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>
      I worked with these Technologies
    </SectionTitle>
    <List>
      <ListItem>
        <DiReact  size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with React.js, Javascript, JSX, HTML and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid  size="3rem" />
        <ListContainer>
          <ListTitle>Andriod Programming</ListTitle>
          <ListParagraph>
            Experience with using Android Studio and using JAVA.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava  size="3rem" />
        <ListContainer>
          <ListTitle>Java Programming</ListTitle>
          <ListParagraph>
            Experience with Using JAVA programming language
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython  size="3rem" />
        <ListContainer>
          <ListTitle>Python Programming</ListTitle>
          <ListParagraph>
            Experience with Using Python programmin Language for Artificial intelligence
            Projects and Data Science projects.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>ROS (Robot Operating System)</ListTitle>
          <ListParagraph>
            Experience with ROS and python scripting for programming autonmous robot
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Other Programming Lanaguages</ListTitle>
          <ListParagraph>
            Experience with C/C++, and C#
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        
        <ListContainer>
          <ListTitle>Artificial Intelligence</ListTitle>
          <ListParagraph>
            Experience with Python, google colab and Jupyter notebook.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>
            Experience with using Python and jupyter notebook.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact  size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with React.js, Javascript, JSX, HTML and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact  size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with React.js, Javascript, JSX, HTML and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
