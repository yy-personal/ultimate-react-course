import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
	{
		skill: "HTML+CSS",
		level: "advanced",
		color: "#2662EA",
	},
	{
		skill: "JavaScript",
		level: "advanced",
		color: "#EFD81D",
	},
	{
		skill: "Web Design",
		level: "advanced",
		color: "#C3DCAF",
	},
	{
		skill: "Git and GitHub",
		level: "intermediate",
		color: "#E84F33",
	},
	{
		skill: "React",
		level: "advanced",
		color: "#60DAFB",
	},
	{
		skill: "Svelte",
		level: "beginner",
		color: "#FF3B00",
	},
];

function App() {
	return (
		<div className="card">
			<Avatar photoName="jonas.jpeg" />
			<div className="data">
				<Intro name="Yin Yao" information="this is my information" />
				{/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
				<SkillList />
			</div>
		</div>
	);
}

function Avatar({ photoName }) {
	return (
		<>
			<img className="avatar" src={photoName} alt="" />
		</>
	);
}

function Intro({ name, information }) {
	return (
		<div>
			<h1>{name}</h1>
			<p>{information}</p>
		</div>
	);
}

function SkillList() {
	return (
		<div className="skill-list">
			{skills.map((skill) => (
				<Skills skillsObj={skill} />
			))}
		</div>
	);
}

function Skills({ skillsObj }) {
	return (
		<div className="skill" style={{ backgroundColor: skillsObj.color }}>
			<span>{skillsObj.skill}</span>
			<span>
				{skillsObj.level === "beginner" && "👶"}
				{skillsObj.level === "advanced" && "👍"}
				{skillsObj.level === "intermediate" && "💪"}
			</span>
		</div>
	);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
