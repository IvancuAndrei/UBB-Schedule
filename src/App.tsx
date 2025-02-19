import Courses from "./components/Courses";
import Header from "./components/Header";
import Selectors from "./components/Selectors";
import { useEffect, useState } from "react";

interface Course {
  ora: string;
  frecventa: string;
  sala: string;
  formatie: string;
  tip: string;
  disciplina: string;
  prof: string;
}

interface Table {
  [key: string]: Course[];
}

function App() {
  const [table, setTable] = useState<Table>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const localURL = "http://localhost:4000";

  const onSubmit = ({
    selectedSpec,
    selectedYear,
    selectedGroup,
    selectedSemigroup,
  }: {
    selectedSpec: string;
    selectedYear: string;
    selectedGroup: string;
    selectedSemigroup: string;
  }) => {
    console.log(selectedSpec, selectedYear, selectedGroup, selectedSemigroup);
    const selectedURL = `${localURL}/api/${selectedSpec}/${selectedYear}/${selectedGroup}/${selectedSemigroup}`;
    console.log(selectedURL);
    fetch(selectedURL)
      .then((res) => res.json())
      .then((data) => {
        setTable(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load data");
        setLoading(false);
      });
  };

  useEffect(() => {
    const defaultSpec = "I";
    const defaultYear = "1";
    const defaultGroup = "211";
    const defaultSemigroup = "1";

    onSubmit({
      selectedSpec: defaultSpec,
      selectedYear: defaultYear,
      selectedGroup: defaultGroup,
      selectedSemigroup: defaultSemigroup,
    });
  }, []);

  if (loading) {
    return (
      <div className="bg-darkblue min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-darkblue min-h-screen flex items-center justify-center text-white">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-darkblue min-h-screen">
      <Header />
      <Selectors onSubmit={onSubmit} />
      <Courses days={table} />
    </div>
  );
}

export default App;
