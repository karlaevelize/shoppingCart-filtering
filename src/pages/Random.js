import styled from "styled-components";

const data = [
  { id: 1, name: "Xiaodan", description: "Description will be added later" },
  { id: 2, name: "Casper", description: "Description will be added later" },
  { id: 3, name: "Patryk", description: "Description will be added later" },
];

const Random = () => {
  return (
    <div>
      <Title>Styling with 62</Title>
      <Button>Accept</Button>
      <Button primary>Decline</Button>
      <StudentsContainer>
        {data.map((student) => {
          return (
            <MapContainer>
              <MapTitle>{student.name}</MapTitle>
              <MapDescription>{student.description}</MapDescription>
            </MapContainer>
          );
        })}
      </StudentsContainer>
    </div>
  );
};

const Title = styled.h1`
  color: blue;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#B22727" : "green")};
  color: white;
  border: 0px;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
`;

const StudentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

const MapContainer = styled.div`
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 10px 10px RGBA(0, 0, 0, 0.1);
`;

const MapTitle = styled.p`
  border-bottom: 1.5px solid black;
  font-weight: 600;
  font-size: 24;
`;

const MapDescription = styled.p`
  font-size: 12px;
`;

export { Random };
