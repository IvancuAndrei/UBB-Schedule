import { useState, useEffect } from "react";

interface SelectorsProps {
  onSubmit: (params: {
    selectedSpec: string;
    selectedYear: string;
    selectedGroup: string;
    selectedSemigroup: string;
  }) => void;
}

const Selectors = ({ onSubmit }: SelectorsProps) => {
  const [selectedSpec, setSelectedSpec] = useState("I");
  const [selectedYear, setSelectedYear] = useState("1");
  const [selectedGroup, setSelectedGroup] = useState("211");
  const [selectedSemigroup, setSelectedSemigroup] = useState("1");
  const [groups, setGroups] = useState([
    "211",
    "212",
    "213",
    "214",
    "215",
    "216",
    "217",
  ]);

  useEffect(() => {
    updateGroups();
  }, [selectedSpec, selectedYear]);

  const updateGroups = () => {
    const localURL = "http://localhost:4000";
    const selectedURL = `${localURL}/api/groups/${selectedSpec}/${selectedYear}/${selectedGroup}/${selectedSemigroup}`;
    fetch(selectedURL)
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
        setSelectedGroup(data[0]);
      });
  };

  const handleApply = () => {
    onSubmit({ selectedSpec, selectedYear, selectedGroup, selectedSemigroup });
  };

  return (
    <div className="flex flex-wrap space-x-6 p-5">
      <div className="flex flex-col">
        <label htmlFor="spec" className="mb-2 font-semibold">
          Specializare:
        </label>
        <select
          name="spec"
          id="spec"
          onChange={(e) => setSelectedSpec(e.target.value)}
          className="p-2 border-2 border-blue-950 rounded-md"
        >
          <option value="I">Informatica Romana</option>
          <option value="IE">Informatica Engleza</option>
          <option value="IM">Informatica Maghiara</option>
          <option value="IG">Informatica Germana</option>
          <option value="MI">Mate Info Romana</option>
          <option value="MIE">Mate Info Engleza</option>
          <option value="MIM">Mate Info Maghiara</option>
          <option value="M">Matematica Romana</option>
          <option value="MM">Matematica Maghiara</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="year" className="mb-2 font-semibold">
          An:
        </label>
        <select
          name="year"
          id="year"
          onChange={(e) => setSelectedYear(e.target.value)}
          className="p-2 border-2 border-blue-950 rounded-md"
        >
          <option value="1">I</option>
          <option value="2">II</option>
          <option value="3">III</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="group" className="mb-2 font-semibold">
          Grupa:
        </label>
        <select
          name="group"
          id="group"
          onChange={(e) => setSelectedGroup(e.target.value)}
          className="p-2 border-2 border-blue-950 rounded-md"
        >
          {groups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="semigroup" className="mb-2 font-semibold">
          Semigrupa:
        </label>
        <select
          name="semigroup"
          id="semigroup"
          onChange={(e) => setSelectedSemigroup(e.target.value)}
          className="p-2 border-2 border-blue-950 rounded-md"
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      {/* Butonul pentru aplicare */}
      <button
        onClick={handleApply}
        className="mt-2 p-3 bg-blue-400 text-white rounded-md hover:bg-blue-600 transition"
      >
        Aplică
      </button>
    </div>
  );
};

export default Selectors;
