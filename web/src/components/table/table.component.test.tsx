import { render } from '@testing-library/react';
import Table from './table.component';
import { faker } from '@faker-js/faker';

interface RandomUserData {name:string, gender: string, occupation: string}

describe('Table component', () => {

  const randomData: RandomUserData[] = [
    { name: faker.person.firstName(), gender: faker.person.gender(), occupation: faker.person.jobTitle() },
    { name: faker.person.firstName(), gender: faker.person.gender(), occupation: faker.person.jobTitle() }
  ];

  it('should render without crashing', () => {
    render(<Table data={randomData} />);
  });

  it('should render correct headers', () => {
    const { getAllByRole } = render(<Table data={randomData} />);
    const headers = getAllByRole('columnheader');
    expect(headers).toHaveLength(3);
    expect(headers[0]).toHaveTextContent('name');
    expect(headers[1]).toHaveTextContent('gender');
    expect(headers[2]).toHaveTextContent('occupation');
  });

  it('should render correct rows and cells', () => {
    const { getAllByRole } = render(<Table data={randomData} />);
    const rows = getAllByRole('row');
    // 2 data rows + 1 header row
    expect(rows).toHaveLength(3); 
    const cells = getAllByRole('cell');
    expect(cells).toHaveLength(6); 
    expect(cells[0]).toHaveTextContent(randomData[0].name);
    expect(cells[1]).toHaveTextContent(randomData[0].gender);
    expect(cells[2]).toHaveTextContent(randomData[0].occupation);
    expect(cells[3]).toHaveTextContent(randomData[1].name);
    expect(cells[4]).toHaveTextContent(randomData[1].gender);
    expect(cells[5]).toHaveTextContent(randomData[1].occupation);
  });
});

