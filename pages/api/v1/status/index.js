function status(request, response) {
  response
    .status(200)
    .json({ key: "Students on Corso.dev been good persons." });
}

export default status;
