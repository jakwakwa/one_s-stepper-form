import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import DefautlValues from "../DefaultValues/DefaultValues";

// const formatDate = (date) =>
//   `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")} ${String(
//     date.getSeconds()
//   ).padStart(2, "0")}.${String(date.getMilliseconds()).padStart(3, "0")}`;

// the delay argument is for faking things out a bit
function fetchData(url, delay = 1000) {
  return window
    .fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
        delay: delay,
      },
    })
    .then(async (response) => {
      const { data } = await response.json();
      if (response.ok) {
        const questions = data?.pokemon;
        console.log(questions);
      } else {
        // handle the error
        const error = {
          message: data?.errors?.map((e) => e.message).join("\n"),
        };
        return Promise.reject(error);
      }
    });
}

function InfoFallback({ name }) {
  const fallbackData = {
    sections: [
      {
        id: "59c3ea63-7d6e-4b0c-80f6-77fd9bd5a36f",
        questions: [
          {
            id: "fe67a247-7846-4218-ad26-6ac20d32af6c",
            label: "I am {age} years old",
            name: "age",
            required: true,
            type: "inline_numeric",
            validation: { max: 65, min: 18, type: "numeric" },
          },
          {
            id: "14e4a02b-61d8-42de-9152-b210e8101d2f",
            name: "gender",
            options: [
              {
                id: "c0523145-f374-4092-87e9-39f3599fe07f",
                text: "Male",
                value: "MALE",
              },
              {
                id: "0bf55aa3-214c-470c-880c-4298a62729ee",
                text: "Female",
                value: "FEMALE",
              },
            ],
            required: true,
            type: "radio",
          },
          {
            id: "dcbce607-7dbc-4731-8c5f-08a61ecc8954",
            label: "My highest qualification is",
            name: "qualification",
            options: [
              {
                id: "e703b1ce-038d-49aa-8e9d-465f8f52fb2e",
                text: "No matric",
                value: "NO_MATRIC",
              },
              {
                id: "70b05e79-a932-480b-ac58-4dbe12b09676",
                text: "Matric",
                value: "MATRIC",
              },
              {
                id: "4b2f45a0-9ad6-4f1f-8cf6-84a487fdf8f8",
                label: "Three year diploma",
                value: "THREE_YEAR_DIPLOMA",
              },
              {
                id: "0d9d7c16-3e73-4d09-9ebe-c79e0e01c806",
                text: "More than three year diploma",
                value: "MORE_THAN_THREE_YEAR_DIPLOMA",
              },
              {
                id: "f50faa73-7cdb-421b-bde8-37d7f7563570",
                text: "Three year degree",
                value: "THREE_YEAR_DEGREE",
              },
              {
                id: "183dab70-1797-4182-a835-eb3987147c0e",
                text: "More than three year degree",
                value: "MORE_THAN_THREE_YEAR_DEGREE",
              },
              {
                id: "e472fc5e-7a9d-403d-8a59-e302a51e0e45",
                text: "Professional",
                value: "PROFESSIONAL",
              },
            ],
            required: true,
            type: "select",
          },
          {
            id: "a4ad9c90-f691-4067-9521-225f52695e71",
            label: "And I work as an",
            name: "job_title",
            options: [
              {
                id: "77f8cfe6-522b-4184-80a4-d13da1540c55",
                text: "Accountant",
                value: "ACCOUNTANT",
              },
              {
                id: "cfa0449b-bf39-4164-a03a-57c61b36e5e4",
                text: "Actuary",
                value: "ACTUARY",
              },
              {
                id: "6fe92de7-6015-4b68-be5a-eb55bdfded3f",
                text: "Administrator",
                value: "ADMINISTRATOR",
              },
              {
                id: "260439fd-570b-4f91-9f5c-56ece4ac2511",
                text: "Architect",
                value: "ARCHITECT",
              },
              {
                id: "80508cd3-f0b8-4241-8bf3-712d370ab2ae",
                text: "Attorney",
                value: "ATTORNEY",
              },
              {
                id: "3c9bd800-2681-45b8-85c9-53f9864b999f",
                text: "Auditor",
                value: "AUDITOR",
              },
              {
                id: "06eebe90-f3d4-4f41-93cf-2ce03c927bf9",
                text: "Banker",
                value: "BANKER",
              },
              {
                id: "5246f2eb-d936-4750-a669-fb7a3fcd1ad9",
                text: "Broker",
                value: "BROKER",
              },
              {
                id: "1ac2e0ff-f5a2-459e-af92-b25ebf2566bd",
                text: "Business Analyst",
                value: "BUSINESS_ANALYST",
              },
              {
                id: "dd36dcb3-74a9-4547-befe-a20dda2fb394",
                text: "Business Development",
                value: "BUSINESS_DEVELOPMENT",
              },
              {
                id: "acd494b2-639e-4aca-8545-3b2ace3cc63b",
                text: "Business Owner",
                value: "BUSINESS_OWNER",
              },
              {
                id: "a014a6dd-04bf-4228-969e-961b1920aefd",
                text: "Business Partner",
                value: "BUSINESS_PARTNER",
              },
              {
                id: "43cbe13a-7596-44f9-8bd2-1f40408e7eed",
                text: "Business Person",
                value: "BUSINESS_PERSON",
              },
              {
                id: "ea31db9e-a646-4a30-94df-5176664f7213",
                text: "Businessman",
                value: "BUSINESSMAN",
              },
              {
                id: "94d912bb-b2a0-438a-8dbd-cc0b3d315340",
                text: "Businesswoman",
                value: "BUSINESSWOMAN",
              },
              {
                id: "6c1a9255-f714-43ae-a087-2dc70230fd9c",
                text: "CFO",
                value: "CFO",
              },
              {
                id: "0dd3e823-8265-49f3-a2ad-83480fffe3da",
                text: "CEO",
                value: "CEO",
              },
              {
                id: "2da88a7e-91b0-48a6-b32b-e9c90449e7f5",
                text: "Other",
                value: "OTHER",
              },
            ],
            required: true,
            type: "search_select",
          },
          {
            id: "2ffe1666-ed39-46d8-979d-4db489c24baa",
            label: "I earn a monthly salary before tax and any deductions of",
            name: "salary",
            required: true,
            type: "currency",
          },
        ],
      },
      {
        id: "2048144a-81d4-44a2-8ee8-09259d9c6224",
        questions: [
          {
            id: "7e509021-255d-4b48-8539-70ea2609c40a",
            label: "My name is",
            name: "name",
            required: true,
            type: "text",
          },
          {
            id: "c4234c83-2742-43d6-bcd4-3a9c0314d901",
            label: "You can email my quote to",
            name: "email",
            required: true,
            type: "email",
            validation: { type: "email" },
          },
          {
            id: "070b9815-58e7-4e2e-9435-c67736709640",
            label: "My mobile number is",
            name: "tel",
            required: true,
            type: "tel",
            validation: { type: "za_tel" },
          },
        ],
      },
      {
        id: "a8456891-d9d9-40c1-9131-00870444359b",
        questions: [
          {
            id: "24de74e4-5f20-49a7-8f4b-8da0b5fcc3e4",
            label: "My SA ID number is",
            name: "id_number",
            required: true,
            type: "numeric",
            validation: { type: "za_id" },
          },
          {
            id: "20d7eaf7-42fe-44cd-9f62-87caa39e4a64",
            label: "Which option is most like you?",
            name: "medication",
            options: [
              {
                id: "97c29b87-8d3e-4d13-8065-e50f3974fb88",
                label:
                  "I use chronic medication, but this only includes vitamins, supplements, birth control and/or hormone replacement therapy.",
                value: "nonChronic",
              },
              {
                id: "ceac4e53-f9cf-466e-a465-b6e69a07bed9",
                label:
                  "I use chronic medication for the treatment and management of an ongoing condition and/or symptom.",
                value: "ongoing",
              },
              {
                id: "11672be3-f9ef-449c-a537-6532b75258ad",
                label:
                  "I suffer from a chronic condition but currently do not take any treatment for this.",
                value: "chronicCondition",
              },
              {
                id: "7c21c33f-c6e6-4d7c-9d20-055a9e6e2493",
                label: "I do not currently use any chronic medication.",
                value: "none",
              },
            ],
            required: true,
            type: "radio",
          },
          {
            id: "f96bb720-4604-4254-9f75-18e101de13dd",
            label: "Which option is you?",
            name: "specailist",
            options: [
              {
                id: "ab99baf4-2d05-425d-a0d2-1b7b2013938a",
                label:
                  "I have an appointment with a medical specialist scheduled in the next 6 months to investigate a new symptom or complaint",
                value: "haveAppointment",
              },
              {
                id: "89ff389a-e013-49c5-a1a1-7778dea08181",
                label:
                  "I plan to consult a medical specialist for a new symptom or condition",
                value: "planToConsult",
              },
              {
                id: "391ceb1a-329a-4e6c-a1ff-ec27e5a9949d",
                label:
                  "I have no plans to consult a medical specialist for any symptom or condition – other than my routine medical checks",
                value: "NONE",
              },
            ],
            required: true,
            type: "radio",
          },
          {
            id: "8caf8e6c-a810-41da-b212-5fe39d98f075",
            label:
              "Have you been admitted to hospital for 24 hours or longer in the past 5 years?",
            name: "hospital",
            options: [
              {
                id: "00dfe707-d499-4841-9808-d1196d81dc65",
                label: "Yes",
                value: "yes",
              },
              {
                id: "7e6fd3fb-4516-4965-9574-f6134f62671a",
                label: "No",
                value: "no",
              },
            ],
            required: true,
            type: "radio",
          },
        ],
      },
      {
        id: "368855ca-bbe5-463f-a893-dab6a404ae9f",
        questions: [
          {
            id: "7bb0ff1a-4559-4a7e-a906-fdd3fd4d58a9",
            label:
              "In the past 12 months I have used tobacco or nicotine products",
            name: "nicotine",
            options: [
              {
                id: "0487511b-04f8-4056-ba15-85ddff5534ae",
                label: "Not once",
                value: "NEVER",
              },
              {
                id: "55b1a063-39cf-458c-84b5-a7c4e51c5329",
                label: "On a daily basis",
                value: "DAILY",
              },
              {
                id: "222c3bea-8acf-4e14-943b-8434a07c74f4",
                label: "On a weekly basis",
                value: "WEEKLY",
              },
              {
                id: "32c57272-8da3-44ba-a312-c6b956232959",
                label: "A few times here and there",
                value: "OCCASIONALLY",
              },
            ],
            required: true,
            type: "radio",
          },
          {
            description:
              "Average person your age drinks 29 -35 units. 1 unit = 1 glass of wine, 1 shot or 1 beer.",
            id: "835e72ce-d4cd-44af-a800-8b5f4362a45b",
            label: "I drink on average {label} units of alcohol a week.",
            name: "alcohol",
            options: [
              {
                id: "6aabdeb3-3dfc-4901-b279-a415c30e3273",
                label: "0",
                value: "UNIT0",
              },
              {
                id: "59a71b29-7f12-4d57-9dbb-3940a577ef2a",
                label: "1 - 7",
                value: "UNIT1TO7",
              },
              {
                id: "bccda7fe-5945-4a28-ae14-735547f873c1",
                label: "8 - 14",
                value: "UNIT8TO14",
              },
              {
                id: "5d702384-21b8-43e8-8890-611cc2e50b68",
                label: "15 - 20",
                value: "UNIT15TO20",
              },
              {
                id: "779d79f2-8f14-40b3-87ed-6074567d7b95",
                label: "21 - 28",
                value: "UNIT21TO28",
              },
              {
                id: "4b07f74f-fd69-4320-8683-850d9502c371",
                label: "29 - 35",
                value: "UNIT29TO35",
              },
              {
                id: "7221ec35-3244-4609-939e-cc55fa235296",
                label: "36+",
                value: "UNIT36PLUS",
              },
            ],
            required: true,
            type: "inline_select",
          },
          {
            id: "53d44abd-788e-4780-8389-e50c1811954f",
            label: "We’ve all been young and free…I’ve tried the following",
            name: "drugs",
            options: [
              {
                id: "c977bad8-58d7-431f-b49f-971d15b1b444",
                label: "Amphetamines",
                value: "AMPHETAMINES",
              },
              {
                id: "da758dc7-44bb-4b6e-8758-872c9375af1c",
                label: "Heroin",
                value: "HEROIN",
              },
              {
                id: "15796112-0e55-4e9f-8a91-9f285205a2ec",
                label: "Cocaine (crack, freebase)",
                value: "COCAINE",
              },
              {
                id: "48c70a41-cf0e-4734-810f-750ee5d10333",
                label: "Hallucinogens (LSD, mushrooms, PCP)",
                value: "HALLUCINOGENS",
              },
              {
                id: "feed8d01-20fa-4935-bdb9-226ffb8602a7",
                label: "Marijuana",
                value: "MARIJUANA",
              },
              {
                id: "8ca05dd4-ae8d-4566-8920-ebc92900e78e",
                label: "Other",
                value: "OTHER",
              },
              {
                id: "59bca65a-bfc7-417b-98b1-7f64cf9941ac",
                label: "None of the above",
                value: "NONE_OF_THE_ABOVE",
              },
            ],
            required: true,
            type: "checkbox",
          },
        ],
      },
      {
        id: "e48d05f9-67f5-471f-8123-32299f2805d5",
        questions: [
          {
            id: "e98faceb-10f0-4f1a-a2df-c36b48cee77d",
            label:
              "Have you had a life insurance application declined in the past 5 years?",
            name: "prev_insurance",
            options: [
              {
                id: "2a5549f3-9f89-4ba3-a3fb-204980204801",
                label: "Yes",
                value: "yes",
              },
              {
                id: "c8dd348e-4203-4e4c-8bc2-057fd312ee51",
                label: "No",
                value: "no",
              },
            ],
            required: true,
            type: "radio",
          },
        ],
      },
    ],
  };
  return fallbackData;
}

function DataView({ myFormVal }) {
  return (
    <div>
      <section>
        <h2>
          {myFormVal.firstName}
          <sup>{myFormVal.phone}</sup>
          <sup>{myFormVal.age}</sup>
          <sup>{myFormVal.emailAddress}</sup>
        </h2>
      </section>
      <section>
        <ul>
          {myFormVal.drugs.map((d) => (
            <li key={d}>
              <label>{d}</label>
            </li>
          ))}
        </ul>
      </section>
      <small className="questions-info__fetch-time">{"20:00"}</small>
    </div>
  );
}

function QuestionsForm({ initialValues = DefautlValues, onSubmit }) {
  const [questionsFormValues, setQuestionsFromValues] =
    React.useState(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(questionsFormValues);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setQuestionsFromValues((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="questions-form">
      <label htmlFor="qName-input">Pokemon Name</label>

      <div>
        <input
          className="pokemonName-input"
          id="pokemonName-input"
          name="pokemonName"
          placeholder="Pokemon Name..."
          value={initialValues}
          onChange={handleChange}
        />
        <button type="submit" disabled={true}>
          Submit
        </button>
      </div>
    </form>
  );
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      There was an error:{" "}
      <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function MyErrorBoundary(props) {
  return <ErrorBoundary FallbackComponent={ErrorFallback} {...props} />;
}

export { InfoFallback, QuestionsForm, DataView, fetchData, MyErrorBoundary };
