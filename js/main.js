const apiUri = "https://flynn.boolean.careers/exercises/api/random/mail";
const emailListEl = document.getElementById("email-list");
const numbersOfEmails = 10;
const generatedEmails = [];

for (let i = 0; i < numbersOfEmails; i++) {
  axios.get(apiUri).then((response) => {
    const email = response.data.response;
    generatedEmails.push(email);

    if (generatedEmails.length >= numbersOfEmails) {
      let listHtml = "";

      generatedEmails.forEach((email) => {
        listHtml += `<li>${email}</li>`;
      });
      emailListEl.innerHTML += listHtml;
    }
  });
}
