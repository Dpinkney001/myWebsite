import React from 'react';
import { DiAndroid, DiDatabase, DiFirebase, DiJava, DiLinux, DiPython, DiRasberryPi, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>
      I worked with these Technologies
    </SectionTitle>
    <SectionText>
      I have worked with a huge range of technologies over the course of the years.
    </SectionText>
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
        
        <ListContainer>
          <ListTitle>Software Engineering</ListTitle>
          <ListParagraph>
            Experience with different software engineering methods and life cycles.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiRasberryPi  size="3rem" />
        <ListContainer>
          <ListTitle>Digital Electronics</ListTitle>
          <ListParagraph>
            Experience with electronics and electrical circuits
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiDatabase  size="3rem" />
        <ListContainer>
          <ListTitle>Database Systems</ListTitle>
          <ListParagraph>
            Experience with mySQL and SQL developer
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiRasberryPi  size="3rem" />
        <ListContainer>
          <ListTitle>Gazebo and Gmapping</ListTitle>
          <ListParagraph>
            Experience with Gazebo similation and gmapping with the mapping software for autonomous robotics.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiLinux  size="3rem" />
        <ListContainer>
          <ListTitle>Operating Systems</ListTitle>
          <ListParagraph>
            Experience with Windows xp, 7, 8, 10, Linux, Fedora, Ubuntu
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
