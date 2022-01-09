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
      <ListItem>
      <DiLinux  size="3rem" />
        <ListContainer>
          <ListTitle>Braking Systems</ListTitle>
          <ListParagraph>
            Experience with Automotive Braking Systems
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiLinux  size="3rem" />
        <ListContainer>
          <ListTitle>Electrical Systems</ListTitle>
          <ListParagraph>
            Experience with Automotive Electrical Systems.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiLinux  size="3rem" />
        <ListContainer>
          <ListTitle>Heating and Airconditioning Systems</ListTitle>
          <ListParagraph>
            Experience with Automotive Heating and Air Conditioning Systems.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiLinux  size="3rem" />
        <ListContainer>
          <ListTitle>Automatic transmissions and trans-axle Systems</ListTitle>
          <ListParagraph>
            Experience with Automatic transmissions and trans-axle Systems.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiLinux  size="3rem" />
        <ListContainer>
          <ListTitle>Manual Transmissions and trans-axle Systems</ListTitle>
          <ListParagraph>
            Experience with Manual Transmissions and trans-axle Systems.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiLinux  size="3rem" />
        <ListContainer>
          <ListTitle>Engine Repair</ListTitle>
          <ListParagraph>
            Experience with Engine Repair.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiLinux  size="3rem" />
        <ListContainer>
          <ListTitle>Engine Performance</ListTitle>
          <ListParagraph>
            Experience with Engine Performance.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiLinux  size="3rem" />
        <ListContainer>
          <ListTitle>Diesel Engines</ListTitle>
          <ListParagraph>
            Experience Diesel Engines.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiLinux  size="3rem" />
        <ListContainer>
          <ListTitle></ListTitle>
          <ListParagraph>
          https://www.amazon.com/gp/product/0984782850/ref=as_li_tl?ie=UTF8&tag=dpinkney001-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0984782850&linkId=a86943d387001a654d66a02b01a876da
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
