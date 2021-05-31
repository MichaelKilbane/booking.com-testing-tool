import { testDriver } from "./functions/testDriver.js ";
import { saveToCSV } from "./functions/saveToCSV.js";

import * as gen from "./generators/index.js";
import Runner from "./runner/runner.js";
import { runTest } from "./functions/runTest.js";

const main = async () => {
  const runner = new Runner();

  const generators = {
    destinationInput: gen.string().destination().garble(0.5),
    checkIn: gen.date(),
    checkOut: gen.date(runner.retrieveValue("checkIn")).after(10).offset(2),
    noOfAdults: gen.number().min(1).max(10),
    noOfChildren: gen.number().min(0).max(10),
  };


  runner.setSeed(100);

  runner.setGenerators(generators);

  runner.setTest(runTest);

  const results = await runner.run(2);

  const resultsTitles = {
    destinationInput: "Dest Name",
    checkIn: "Check In",
    checkOut: "Check Out",
    noOfAdults: "Adults",
    noOfChildren: "Children",
    loadTestSuccess: "Page Loaded",
    loadTestMessage: "Load Msg",
    inputTestSuccess: "Input Success",
    inputTestMessage: "Input Msg",
  };

  saveToCSV(resultsTitles, results);
};

main();
