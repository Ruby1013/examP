// Source: Society of Actuaries Exam P Sample Questions and Solutions PDFs.
const questions = [
    {
        "id": 1,
        "topic": "SOA Exam P Sample Question",
        "question": "A survey of a group’s viewing habits over the last year revealed the following\ninformation:\n(i) 28% watched gymnastics\n(ii) 29% watched baseball\n(iii) 19% watched soccer\n(iv) 14% watched gymnastics and baseball\n(v) 12% watched baseball and soccer\n(vi) 10% watched gymnastics and soccer\n(vii) 8% watched all three sports.\nCalculate the percentage of the group that watched none of the three sports during the last\nyear.",
        "options": [
            "24%",
            "36%",
            "41%",
            "52%",
            "60%"
        ],
        "answerLetter": "D",
        "answer": "52%",
        "explanation": "Official solution: D\n\nLet G = viewer watched gymnastics, B = viewer watched baseball, S = viewer watched soccer.\nThen we want to find\nc\n’ ’\nPr G ∪ B ∪ S = 1 − Pr G ∪ B ∪ S\n( ) ( )\n’ ’\n= 1 − ’ Pr G + Pr B + Pr S − Pr G ∩ B − Pr G ∩ S − Pr B ∩ S + Pr G ∩ B ∩ S ’\n( ) ( ) ( ) ( ) ( ) ( ) ( )\n’ ’\n= 1 − 0.28 + 0.29 + 0.19 − 0.14 − 0.10 − 0.12 + 0.08 = 1 − 0.48 = 0.52\n( )"
    },
    {
        "id": 2,
        "topic": "SOA Exam P Sample Question",
        "question": "The probability that a visit to a primary care physician’s (PCP) office results in neither\nlab work nor referral to a specialist is 35%. Of those coming to a PCP’s office, 30% are\nreferred to specialists and 40% require lab work.\nCalculate the probability that a visit to a PCP’s office results in both lab work and referral\nto a specialist.",
        "options": [
            "0.05",
            "0.12",
            "0.18",
            "0.25",
            "0.35"
        ],
        "answerLetter": "A",
        "answer": "0.05",
        "explanation": "Official solution: A\n\nLet R = referral to a specialist and L = lab work. Then\nc\nP R [ ∩ L ] = P R [ ] + P L [ ] − P R [ ∪ L ] = P R [ ] + P L [ ] − 1 + P [( R ∪ L ) ]\nc\n′\n= p R [ ] + P L [ ] − 1 + P R [ ∩ L ] = 0.30 + 0.40 − 1 + 0.35 = 0.05."
    },
    {
        "id": 3,
        "topic": "SOA Exam P Sample Question",
        "question": "You are given and ′ .\nP A [ ∪ B ] = 0.7 P A [ ∪ B ] = 0.9\nCalculate P [ A ].",
        "options": [
            "0.2",
            "0.3",
            "0.4",
            "0.6",
            "0.8"
        ],
        "answerLetter": "D",
        "answer": "0.6",
        "explanation": "Official solution: D\n\nFirst note\nP A ∪ B = P A + P B − P A ∩ B\n[ ] [ ] [ ] [ ]\nc c c\n’ ’ ’ ’ ’ ’\nP A ∪ B = P A + P B − P A ∩ B\n[ ]\n’ ’ ’ ’ ’ ’\nThen add these two equations to get\nc c c\n’ ’ ’ ’ ’ ’\nP A ∪ B + P A ∪ B = 2 P A + P B + P B − P A ∩ B + P A ∩ B\n[ ] [ ] [ ] [ ]\n( ) ( )\n’ ’ ’ ’ ’ ’\nc\n’ ’\n0.7 + 0.9 = 2 P A + 1 − P A ∩ B ∪ A ∩ B\n[ ] ( ) ( )\n’ ’\n1.6 = 2 P A + 1 − P A\n[ ] [ ]\nP A = 0.6\n[ ]"
    },
    {
        "id": 4,
        "topic": "SOA Exam P Sample Question",
        "question": "An urn contains 10 balls: 4 red and 6 blue. A second urn contains 16 red balls and an\nunknown number of blue balls. A single ball is drawn from each urn. The probability\nthat both balls are the same color is 0.44.\nCalculate the number of blue balls in the second urn.",
        "options": [
            "4",
            "20",
            "24",
            "44",
            "64"
        ],
        "answerLetter": "A",
        "answer": "4",
        "explanation": "Official solution: A\n\nFor i = 1,2, let R = event that a red ball is drawn from urn i and let B = event that a blue ball is\ni i\ndrawn from urn i. Then, if x is the number of blue balls in urn 2,\n0.44 = Pr[ R ∩ R ’ B ∩ B ] = Pr[ R ∩ R ] + Pr B ∩ B\n( ) ( ) [ ]\n1 2 1 2 1 2 1 2\n= Pr R Pr R + Pr B Pr B\n[ ] [ ] [ ] [ ]\n1 2 1 2\n4 16 6 x\n’ ’ ’ ’\n= +\n’ ’ ’ ’\n10 x + 16 10 x + 16\n’ ’ ’ ’\nTherefore,\n32 3 x 3 x + 32\n2.2 = + =\nx + 16 x + 16 x + 16\n2.2 x + 35.2 = 3 x + 32\n0.8 x = 3.2\nx = 4"
    },
    {
        "id": 5,
        "topic": "SOA Exam P Sample Question",
        "question": "An auto insurance company has 10,000 policyholders. Each policyholder is classified as\n(i) young or old;\n(ii) male or female; and\n(iii) married or single.\nOf these policyholders, 3000 are young, 4600 are male, and 7000 are married. The\npolicyholders can also be classified as 1320 young males, 3010 married males, and 1400\nyoung married persons. Finally, 600 of the policyholders are young married males.\nCalculate the number of the company’s policyholders who are young, female, and single.",
        "options": [
            "280",
            "423",
            "486",
            "880",
            "896"
        ],
        "answerLetter": "D",
        "answer": "880",
        "explanation": "Official solution: D\n\nLet N ( C ) denote the number of policyholders in classification C . Then\nN (Young and Female and Single)\n= N (Young and Female) – N (Young and Female and Married)\n= N (Young) – N (Young and Male) – [ N (Young and Married) – N (Young and Married and\nMale)]\n= 3000 – 1320 – (1400 – 600) = 880."
    },
    {
        "id": 6,
        "topic": "SOA Exam P Sample Question",
        "question": "A public health researcher examines the medical records of a group of 937 men who died\nin 1999 and discovers that 210 of the men died from causes related to heart disease.\nMoreover, 312 of the 937 men had at least one parent who suffered from heart disease,\nand, of these 312 men, 102 died from causes related to heart disease.\nCalculate the probability that a man randomly selected from this group died of causes\nrelated to heart disease, given that neither of his parents suffered from heart disease.",
        "options": [
            "0.115",
            "0.173",
            "0.224",
            "0.327",
            "0.514"
        ],
        "answerLetter": "B",
        "answer": "0.173",
        "explanation": "Official solution: B\n\nLet\nH = event that a death is due to heart disease\nF = event that at least one parent suffered from heart disease\nThen based on the medical records,\n210 − 102 108\nc\n’ ’\nP H ∩ F = =\n’ ’\n937 937\n937 − 312 625\nc\nP ’ F ’ = =\n’ ’\n937 937\nc\n’ ’\nP H ∩ F\n108 625 108\nc ’ ’\n’ ’ =\nand P H | F = = = 0.173\n’ ’ c\n’ ’ 937 937 625\nP F\n’ ’"
    },
    {
        "id": 7,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company estimates that 40% of policyholders who have only an auto policy\nwill renew next year and 60% of policyholders who have only a homeowners policy will\nrenew next year. The company estimates that 80% of policyholders who have both an\nauto policy and a homeowners policy will renew at least one of those policies next year.\nCompany records show that 65% of policyholders have an auto policy, 50% of\npolicyholders have a homeowners policy, and 15% of policyholders have both an auto\npolicy and a homeowners policy.\nUsing the company’s estimates, calculate the percentage of policyholders that will renew\nat least one policy next year.",
        "options": [
            "20%",
            "29%",
            "41%",
            "53%",
            "70%"
        ],
        "answerLetter": "D",
        "answer": "53%",
        "explanation": "Official solution: D\n\nLet A = event that a policyholder has an auto policy and H = event that a policyholder has a\nhomeowners policy. Then,\nPr ( A ∩ H ) = 0.15\nc\nPr A ∩ H = Pr A − Pr A ∩ H = 0.65 − 0.15 = 0.50\n( ) ( )\n( )\nc\nPr A ∩ H = Pr H − Pr A ∩ H = 0.50 − 0.15 = 0.35\n( ) ( ) ( )\nand the portion of policyholders that will renew at least one policy is given by\nc c\n0.4 Pr A ∩ H + 0.6 Pr A ∩ H + 0.8 Pr A ∩ H\n( )\n( ) ( )\n= 0.4 0.5 + 0.6 0.35 + 0.8 0.15 = 0.53 = 53%\n( )( ) ( )( ) ( )( ) ( )"
    },
    {
        "id": 8,
        "topic": "SOA Exam P Sample Question",
        "question": "Among a large group of patients recovering from shoulder injuries, it is found that 22%\nvisit both a physical therapist and a chiropractor, whereas 12% visit neither of these. The\nprobability that a patient visits a chiropractor exceeds by 0.14 the probability that a\npatient visits a physical therapist.\nCalculate the probability that a randomly chosen member of this group visits a physical\ntherapist.",
        "options": [
            "0.26",
            "0.38",
            "0.40",
            "0.48",
            "0.62"
        ],
        "answerLetter": "D",
        "answer": "0.48",
        "explanation": "Official solution: D\n\nLet C = event that patient visits a chiropractor and T = event that patient visits a physical\ntherapist. We are given that\nPr C = Pr T + 0.14\n[ ] [ ]\nPr C ∩ T = 0.22\n( )\nc c\nPr C ∩ T = 0.12\n( )\nTherefore,\nc c\n0.88 = 1 − Pr ’ C ∩ T ’ = Pr C ∪ T = Pr C + Pr T − Pr C ∩ T\n[ ] [ ] [ ] [ ]\n’ ’\n= Pr T + 0.14 + Pr T − 0.22\n[ ] [ ]\n= 2 Pr T − 0.08\n[ ]\nor\nP T = 0.88 + 0.08 2 = 0.48\n[ ] ( )"
    },
    {
        "id": 9,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company examines its pool of auto insurance customers and gathers the\nfollowing information:\n(i) All customers insure at least one car.\n(ii) 70% of the customers insure more than one car.\n(iii) 20% of the customers insure a sports car.\n(iv) Of those customers who insure more than one car, 15% insure a sports car.\nCalculate the probability that a randomly selected customer insures exactly one car and\nthat car is not a sports car.",
        "options": [
            "0.13",
            "0.21",
            "0.24",
            "0.25",
            "0.30"
        ],
        "answerLetter": "B",
        "answer": "0.21",
        "explanation": "Official solution: B\n\nLet M = event that customer insures more than one car and S = event that customer insurers a\nsports car. Then applying DeMorgan’s Law, compute the desired probability as:\nc\nc c\n’ ’\nPr M ∩ S = Pr M ∪ S = 1 − Pr M ∪ S = 1 − ’ Pr M + Pr S − Pr M ∩ S ’\n( ) ( ) ( ) ( ) ( )\n( )\n’ ’\n’ ’\n= 1 − Pr M − Pr S + Pr S M Pr M = 1 − 0.70 − 0.20 + 0.15 0.70 = 0.205\n( ) ( ) ( ) ( )( )\n( )"
    },
    {
        "id": 10,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary studying the insurance preferences of automobile owners makes the following\nconclusions:\n(i) An automobile owner is twice as likely to purchase collision coverage as\ndisability coverage.\n(ii) The event that an automobile owner purchases collision coverage is\nindependent of the event that he or she purchases disability coverage.\n(iii) The probability that an automobile owner purchases both collision and\ndisability coverages is 0.15.\nCalculate the probability that an automobile owner purchases neither collision nor\ndisability coverage.",
        "options": [
            "0.18",
            "0.33",
            "0.48",
            "0.67",
            "0.82"
        ],
        "answerLetter": "B",
        "answer": "0.33",
        "explanation": "Official solution: B\n\nLet C = Event that a policyholder buys collision coverage and D = Event that a policyholder\nbuys disability coverage. Then we are given that P C [ ] = 2 P D [ ] and P C [ ∩ D ] = 0.15 .\nBy the independence of C and D ,\n2\n0.15 = [ C ∩ D ] = P C P D [ ] [ ] = 2 P D [ ]\n2\nP D [ ] = 0.15 / 2 = 0.075\nP D [ ] = 0.075, P C [ ] = 2 0.075.\nc c\nIndependence of C and D implies independence of C and D . Then\nc c c c\nP C [ ∩ D ] = P C [ ] [ P D ] = (1 − 2 0.075)(1 − 0.075) = 0.33."
    },
    {
        "id": 11,
        "topic": "SOA Exam P Sample Question",
        "question": "A doctor is studying the relationship between blood pressure and heartbeat abnormalities\nin her patients. She tests a random sample of her patients and notes their blood pressures\n(high, low, or normal) and their heartbeats (regular or irregular). She finds that:\n(i) 14% have high blood pressure.\n(ii) 22% have low blood pressure.\n(iii) 15% have an irregular heartbeat.\n(iv) Of those with an irregular heartbeat, one-third have high blood pressure.\n(v) Of those with normal blood pressure, one-eighth have an irregular\nheartbeat.\nCalculate the portion of the patients selected who have a regular heartbeat and low blood\npressure.",
        "options": [
            "2%",
            "5%",
            "8%",
            "9%",
            "20%"
        ],
        "answerLetter": "E",
        "answer": "20%",
        "explanation": "Official solution: E\n\n“Boxed” numbers in the table below were computed.\nHigh BP Low BP Norm BP Total\nRegular heartbeat 0.09 0.20 0.56 0.85\nIrregular heartbeat 0.05 0.02 0.08 0.15\nTotal 0.14 0.22 0.64 1.00\nFrom the table, 20% of patients have a regular heartbeat and low blood pressure."
    },
    {
        "id": 12,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary is studying the prevalence of three health risk factors, denoted by A, B, and C,\nwithin a population of women. For each of the three factors, the probability is 0.1 that a\nwoman in the population has only this risk factor (and no others). For any two of the\nthree factors, the probability is 0.12 that she has exactly these two risk factors (but not the\nother). The probability that a woman has all three risk factors, given that she has A and\nB, is 1/3.\nCalculate the probability that a woman has none of the three risk factors, given that she\ndoes not have risk factor A.",
        "options": [
            "0.280",
            "0.311",
            "0.467",
            "0.484",
            "0.700"
        ],
        "answerLetter": "C",
        "answer": "0.467",
        "explanation": "Official solution: C\n\nLet x be the probability of having all three risk factors.\nP A ∩ B ∩ C\n1 [ ] x\n= P A ∩ B ∩ C | A ∩ B = =\n[ ]\n3 P A ∩ B x + 0.12\n[ ]\nIt follows that\n1 1\nx = x + 0.12 = x + 0.04\n( )\n3 3\n2\nx = 0.04\n3\nx = 0.06\nNow we want to find\nc\n’ ’\nP A ∪ B ∪ C\n( )\nc\nc ’ ’\n’ ’\nP A ∪ B ∪ C | A =\n( )\nc\n’ ’\n’ ’\nP A\n’ ’\n1 − P A [ ∪ B ∪ C ]\n=\n1 − P A [ ]\n1 − 3 0.10 − 3 0.12 − 0.06\n( ) ( )\n=\n1 − 0.10 − 2 0.12 − 0.06\n( )\n0.28\n= = 0.467\n0.60"
    },
    {
        "id": 13,
        "topic": "SOA Exam P Sample Question",
        "question": "In modeling the number of claims filed by an individual under an automobile policy\nduring a three-year period, an actuary makes the simplifying assumption that for all\nintegers n ≥ 0 , where represents the probability that the\np n ( + 1) = 0.2 p n ( ) p n ( )\npolicyholder files n claims during the period.\nUnder this assumption, calculate the probability that a policyholder files more than one\nclaim during the period.",
        "options": [
            "0.04",
            "0.16",
            "0.20",
            "0.80",
            "0.96"
        ],
        "answerLetter": "A",
        "answer": "0.04",
        "explanation": "Official solution: A\n\nk\n1 1 1 1 1 1 1\n’ ’\np = p = p = p = ’ = p k ≥ 0\nk k − 1 k − 2 k − 3 ’ ’ 0\n5 5 5 5 5 5 5\n’ ’\nk\n∞ ∞\n1 p 5\n’ ’\n0\n1 = 1 = p = p = = p , p = 4 / 5\n∑ k ∑ ’ ’ 0 0 0\n1\n5 4\nk = 0 k = 0 ’ ’\n1 −\n5\nTherefore, P[ N > 1] = 1 – P[ N £ 1] = 1 – (4/5 + 4/5 x 1/5) = 1 – 24/25 = 1/25 = 0.04 ."
    },
    {
        "id": 14,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurer offers a health plan to the employees of a large company. As part of this plan,\nthe individual employees may choose exactly two of the supplementary coverages A, B,\nand C, or they may choose no supplementary coverage. The proportions of the\ncompany’s employees that choose coverages A, B, and C are 1/4, 1/3, and 5/12\nrespectively.\nCalculate the probability that a randomly chosen employee will choose no supplementary\ncoverage.",
        "options": [
            "0",
            "47/144",
            "1/2",
            "97/144",
            "7/9"
        ],
        "answerLetter": "C",
        "answer": "1/2",
        "explanation": "Official solution: C\n\nLet x be the probability of choosing A and B, but not C, y the probability of choosing A and C,\nbut not B, z the probability of choosing B and C, but not A.\nWe want to find w = 1 – ( x + y + z ).\nWe have x + y = 1/4, x + z = 1/3, y + z = 5/12.\nAdding these three equations gives\n1 1 5\nx + y + x + z + y + z = + +\n( ) ( ) ( )\n4 3 12\n2 x + y + z = 1\n( )\n1\nx + y + z =\n2\n1 1\nw = 1 − x + y + z = 1 − = .\n( )\n2 2\nAlternatively the three equations can be solved to give x = 1/12, y = 1/6, z =1/4 again leading to\n1 1 1 1\n’ ’\nw = 1 − + + =\n’ ’\n12 6 4 2\n’ ’"
    },
    {
        "id": 15,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company determines that N , the number of claims received in a week, is a\n1\nrandom variable with P N [ = n ] = where n ≥ 0 . The company also determines that\nn + 1\n2\nthe number of claims received in a given week is independent of the number of claims\nreceived in any other week.\nCalculate the probability that exactly seven claims will be received during a given\ntwo-week period.",
        "options": [
            "1/256",
            "1/128",
            "7/512",
            "1/64",
            "1/32"
        ],
        "answerLetter": "D",
        "answer": "1/64",
        "explanation": "Official solution: D\n\nLet N and N denote the number of claims during weeks one and two, respectively. Then since\n1 2\nthey are independent,\n7\nP N + N = 7 = P N = n Pr N = 7 − n\n[ ] [ ] [ ]\n1 2 ∑ 1 2\nn = 0\n7 1 1\n’ ’’ ’\n=\n∑ ’ ’’ ’\nn + 1 8 − n\nn = 0\n2 2\n’ ’’ ’\n7 1\n=\n∑\n9\nn = 0\n2\n8 1 1\n= = =\n9 6\n2 2 64"
    },
    {
        "id": 16,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company pays hospital claims. The number of claims that include\nemergency room or operating room charges is 85% of the total number of claims. The\nnumber of claims that do not include emergency room charges is 25% of the total number\nof claims. The occurrence of emergency room charges is independent of the occurrence\nof operating room charges on hospital claims.\nCalculate the probability that a claim submitted to the insurance company includes\noperating room charges.",
        "options": [
            "0.10",
            "0.20",
            "0.25",
            "0.40",
            "0.80"
        ],
        "answerLetter": "D",
        "answer": "0.40",
        "explanation": "Official solution: D\n\nLet O = event of operating room charges and E = event of emergency room charges. Then\n0.85 = P O ∪ E = P O + P E − P O ∩ E\n( ) ( ) ( ) ( )\n= P O + P E − P O P E Independence\n( ) ( ) ( ) ( ) ( )\nc\nP E = 0.25 = 1 − P E , P E ( ) = 0.75\nBecause ( ) ,\n( )\n0.85 = P O + 0.75 − P O 0.75\n( ) ( )( )\nP O ( )(1 − 0.75) = 0.85 − 0.75 = 0.10\nP O ( ) = 0.10 / 0.25 = 0.40."
    },
    {
        "id": 17,
        "topic": "SOA Exam P Sample Question",
        "question": "Two instruments are used to measure the height, h , of a tower. The error made by the\nless accurate instrument is normally distributed with mean 0 and standard deviation\n0.0056 h . The error made by the more accurate instrument is normally distributed with\nmean 0 and standard deviation 0.0044 h .\nThe errors from the two instruments are independent of each other.\nCalculate the probability that the average value of the two measurements is within 0.005 h\nof the height of the tower.",
        "options": [
            "0.38",
            "0.47",
            "0.68",
            "0.84",
            "0.90"
        ],
        "answerLetter": "D",
        "answer": "0.84",
        "explanation": "Official solution: D\n\nLet X and X denote the measurement errors of the less and more accurate instruments,\n1 2\nrespectively. If N ( μ σ , ) denotes a normal random variable then\nX ’ N (0, 0.0056 ), h X ’ N (0, 0044 ) h and they are independent. It follows that\n1 2\n2 2 2 2\nX + X 0.0056 h + 0.0044 h\n1 2\nY = ’ N (0, = 0.00356 ) h\n. Therefore,\n2 4\n0.005 h − 0 0.005 h − 0\n’ ’\nP ( 0.005 − h ≤ Y ≤ 0.005 ) h = P − ≤ Z ≤\n’ ’\n0.00356 h 0.00356 h\n’ ’\n= P ( 1.4 − ≤ Z ≤ 1.4) = P Z ( ≤ 1.4) − [1 − P Z ( ≤ 1.4)] = 2(0.9192) − 1 = 0.84."
    },
    {
        "id": 18,
        "topic": "SOA Exam P Sample Question",
        "question": "An auto insurance company insures drivers of all ages. An actuary compiled the\nfollowing statistics on the company’s insured drivers:\nAge of Probability Portion of Company’s\nDriver of Accident Insured Drivers\n16-20 0.06 0.08\n21-30 0.03 0.15\n31-65 0.02 0.49\n66-99 0.04 0.28\nA randomly selected driver that the company insures has an accident.\nCalculate the probability that the driver was age 16-20.",
        "options": [
            "0.13",
            "0.16",
            "0.19",
            "0.23",
            "0.40"
        ],
        "answerLetter": "B",
        "answer": "0.16",
        "explanation": "Official solution: B\n\nApply Bayes’ Formula. Let\nA = Event of an accident\nB = Event the driver’s age is in the range 16-20\n1\nB = Event the driver’s age is in the range 21-30\n2\nB = Event the driver’s age is in the range 30-65\n3\nB = Event the driver’s age is in the range 66-99\n4\nThen\nP A B P B\n( )\n( )\n1 1\nP B A =\n( )\n1\nP A B P B + P A B P B + P A B P B + P A B P B\n( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )\n1 1 2 2 3 3 4 4\n0.06 0.08\n( )( )\n= = 0.1584\n0.06 0.08 + 0.03 0.15 + 0.02 0.49 + 0.04 0.28\n( )( ) ( )( ) ( )( ) ( )( )"
    },
    {
        "id": 19,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company issues life insurance policies in three separate categories:\nstandard, preferred, and ultra-preferred. Of the company’s policyholders, 50% are\nstandard, 40% are preferred, and 10% are ultra-preferred. Each standard policyholder has\nprobability 0.010 of dying in the next year, each preferred policyholder has probability\n0.005 of dying in the next year, and each ultra-preferred policyholder has probability\n0.001 of dying in the next year.\nA policyholder dies in the next year.\nCalculate the probability that the deceased policyholder was ultra-preferred.",
        "options": [
            "0.0001",
            "0.0010",
            "0.0071",
            "0.0141",
            "0.2817"
        ],
        "answerLetter": "D",
        "answer": "0.0141",
        "explanation": "Official solution: D\n\nLet\nS = Event of a standard policy\nF = Event of a preferred policy\nU = Event of an ultra-preferred policy\nD = Event that a policyholder dies\nThen\nP D U | P U\n[ ] [ ]\nP U | D =\n[ ]\nP D S P S | + P D | F P F + P D U | P U\n[ ] [ ] [ ] [ ] [ ] [ ]\n0.001 0.10\n( )( )\n=\n( 0.01 )( 0.50 ) + ( 0.005 )( 0.40 ) + ( 0.001 )( 0.10 )\n= 0.0141"
    },
    {
        "id": 20,
        "topic": "SOA Exam P Sample Question",
        "question": "Upon arrival at a hospital’s emergency room, patients are categorized according to their\ncondition as critical, serious, or stable. In the past year:\n(i) 10% of the emergency room patients were critical;\n(ii) 30% of the emergency room patients were serious;\n(iii) the rest of the emergency room patients were stable;\n(iv) 40% of the critical patients died;\n(vi) 10% of the serious patients died; and\n(vii) 1% of the stable patients died.\nGiven that a patient survived, calculate the probability that the patient was categorized as\nserious upon arrival.",
        "options": [
            "0.06",
            "0.29",
            "0.30",
            "0.39",
            "0.64"
        ],
        "answerLetter": "B",
        "answer": "0.29",
        "explanation": "Official solution: B\n\nP ’ Seri. Surv. ’\n’ ’\nP ’ Surv. Seri. ’ P Seri.\n[ ]\n’ ’\n=\nP ’ Surv. Crit. ’ P Crit. + P ’ Surv. Seri. ’ P Seri. + P ’ Surv. Stab. ’ P Stab.\n[ ] [ ] [ ]\n’ ’ ’ ’ ’ ’\n0.9 0.3\n( )( )\n= = 0.29\n0.6 0.1 + 0.9 0.3 + 0.99 0.6\n( )( ) ( )( ) ( )( )"
    },
    {
        "id": 21,
        "topic": "SOA Exam P Sample Question",
        "question": "A health study tracked a group of persons for five years. At the beginning of the study,\n20% were classified as heavy smokers, 30% as light smokers, and 50% as nonsmokers.\nResults of the study showed that light smokers were twice as likely as nonsmokers to die\nduring the five-year study, but only half as likely as heavy smokers.\nA randomly selected participant from the study died during the five-year period.\nCalculate the probability that the participant was a heavy smoker.",
        "options": [
            "0.20",
            "0.25",
            "0.35",
            "0.42",
            "0.57"
        ],
        "answerLetter": "D",
        "answer": "0.42",
        "explanation": "Official solution: D\n\nLet H = heavy smoker, L = light smoker, N = non-smoker, D = death within five-year period.\n1\nWe are given that P D [ | L ] = 2 P D [ | N ] and P D [ | L ] = P D [ | H ]\n2\nTherefore,\nP ’ D H ’ P H\n[ ]\n’ ’\nP ’ H D ’ =\n’ ’\nP ’ D N ’ P N + P ’ D L ’ P L + P ’ D H ’ P H\n[ ] [ ] [ ]\n’ ’ ’ ’ ’ ’\n2 P ’ D L ’ ( 0.2 )\n0.4\n’ ’\n= = = 0.42\n1\n0.25 + 0.3 + 0.4\nP ’ D L ’ 0.5 + P ’ D L ’ 0.3 + 2 P ’ D L ’ 0.2\n( ) ( ) ( )\n’ ’ ’ ’ ’ ’\n2"
    },
    {
        "id": 22,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary studied the likelihood that different types of drivers would be involved in at\nleast one collision during any one-year period. The results of the study are:\nProbability\nType of Percentage of of at least one\ndriver all drivers collision\nTeen 8% 0.15\nYoung adult 16% 0.08\nMidlife 45% 0.04\nSenior 31% 0.05\nTotal 100%\nGiven that a driver has been involved in at least one collision in the past year, calculate\nthe probability that the driver is a young adult driver.",
        "options": [
            "0.06",
            "0.16",
            "0.19",
            "0.22",
            "0.25"
        ],
        "answerLetter": "D",
        "answer": "0.22",
        "explanation": "Official solution: D\n\nLet\nC = Event of a collision\nT = Event of a teen driver\nY = Event of a young adult driver\nM = Event of a midlife driver\nS = Event of a senior driver\nThen,\nP C Y P Y [ ] [ ]\nP Y [ | C ] =\nP C T P T [ ] [ ] + P C Y P Y [ ] [ ] + P C M P M [ ] [ ] + P C S P S [ ] [ ]\n(0.08)(0.16)\n= = 0.22.\n(0.15)(0.08) + (0.08)(0.16) + (0.04)(0.45) + (0.05)(0.31)"
    },
    {
        "id": 23,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of injury claims per month is modeled by a random variable N with\n1\nP N [ = n ] =\n, for nonnegative integers, n .\n( n + 1)( n + 2)\nCalculate the probability of at least one claim during a particular month, given that there\nhave been at most four claims during that month.",
        "options": [
            "1/3",
            "2/5",
            "1/2",
            "3/5",
            "5/6"
        ],
        "answerLetter": "B",
        "answer": "2/5",
        "explanation": "Official solution: B\n\nP 1 ≤ N ≤ 4\n[ ] 1 1 1 1 1 1 1 1 1\n’ ’ ’ ’\nP ’ N ≥ 1 N ≤ 4 ’ = = + + + + + + +\n’ ’\n’ ’ ’ ’\nP N ≤ 4 6 12 20 30 2 6 12 20 30\n[ ] ’ ’ ’ ’\n10 + 5 + 3 + 2 20 2\n= = =\n30 + 10 + 5 + 3 + 2 50 5"
    },
    {
        "id": 24,
        "topic": "SOA Exam P Sample Question",
        "question": "A blood test indicates the presence of a particular disease 95% of the time when the\ndisease is actually present. The same test indicates the presence of the disease 0.5% of\nthe time when the disease is not actually present. One percent of the population actually\nhas the disease.\nCalculate the probability that a person actually has the disease given that the test indicates\nthe presence of the disease.",
        "options": [
            "0.324",
            "0.657",
            "0.945",
            "0.950",
            "0.995"
        ],
        "answerLetter": "B",
        "answer": "0.657",
        "explanation": "Official solution: B\n\nLet Y = positive test result\nD = disease is present\nThen,\nP Y [ | D P D ] [ ] (0.95)(0.01)\nP D Y [ | ] = = = 0.657.\nc c\nP Y [ | D P D ] [ ] + P Y [ | D ] [ P D ] (0.95)(0.01) + (0.005)(0.99)"
    },
    {
        "id": 25,
        "topic": "SOA Exam P Sample Question",
        "question": "The probability that a randomly chosen male has a blood circulation problem is 0.25.\nMales who have a blood circulation problem are twice as likely to be smokers as those\nwho do not have a blood circulation problem.\nCalculate the probability that a male has a blood circulation problem, given that he is a\nsmoker.",
        "options": [
            "1/4",
            "1/3",
            "2/5",
            "1/2",
            "2/3"
        ],
        "answerLetter": "C",
        "answer": "2/5",
        "explanation": "Official solution: C\n\nLet:\nS = Event of a smoker\nC = Event of a circulation problem\nc\nThen we are given that P[ C ] = 0.25 and P[ S ½ C ] = 2 P[ S ½ C ]\nThen,,\nP S [ | C P C ] [ ]\nP C [ | S ] =\nc c\nP S [ | C P C ] [ ] + P S [ | C ] [ P C ]\nc\n2 P S [ | C ] [ P C ] 2(0.25) 2 2\n= = = =\nc c\nP S C P C P S C P C\n2 [ | ] [ ] + [ | ](1 − [ ]) 2(0.25) + 0.75 2 + 3 5"
    },
    {
        "id": 26,
        "topic": "SOA Exam P Sample Question",
        "question": "A study of automobile accidents produced the following data:\nProbability of\nModel Proportion of involvement\nyear all vehicles in an accident\n2014 0.16 0.05\n2013 0.18 0.02\n2012 0.20 0.03\nOther 0.46 0.04\nAn automobile from one of the model years 2014, 2013, and 2012 was involved in an\naccident.\nCalculate the probability that the model year of this automobile is 2014.",
        "options": [
            "0.22",
            "0.30",
            "0.33",
            "0.45",
            "0.50"
        ],
        "answerLetter": "D",
        "answer": "0.45",
        "explanation": "Official solution: D\n\nLet B , C , and D be the events of an accident occurring in 2014, 2013, and 2012, respectively.\nLet A = B ∪ C ∪ D .\nP A B P B [ ] [ ]\nP B [ | A ] =\nP A B [ ][ P B [ ] + P A C P C [ ] [ ] + P A D P D [ ] [ ]\nUse Bayes’ Theorem\n(0.05)(0.16)\n= = 0.45.\n(0.05)(0.16) + (0.02)(0.18) + (0.03)(0.20)"
    },
    {
        "id": 27,
        "topic": "SOA Exam P Sample Question",
        "question": "A hospital receives 1/5 of its flu vaccine shipments from Company X and the remainder\nof its shipments from other companies. Each shipment contains a very large number of\nvaccine vials.\nFor Company X’s shipments, 10% of the vials are ineffective. For every other company,\n2% of the vials are ineffective. The hospital tests 30 randomly selected vials from a\nshipment and finds that one vial is ineffective.\nCalculate the probability that this shipment came from Company X.",
        "options": [
            "0.10",
            "0.14",
            "0.37",
            "0.63",
            "0.86"
        ],
        "answerLetter": "A",
        "answer": "0.10",
        "explanation": "Official solution: A\n\nLet\nC = Event that shipment came from Company X\nI = Event that one of the vaccine vials tested is ineffective\nP I | C P C\n[ ] [ ]\nThen, P C | I = .\n[ ]\nc c\nP I | C P C + P ’ I | C ’ P C ’ ’\n[ ] [ ]\n’ ’ ’ ’\nNow\n1\nP C =\n[ ]\n5\n1 4\nc\n’ ’ =\nP C 1 − P C = 1 − =\n[ ]\n’ ’\n5 5\n29\n30\nP I | C = 0.10 0.90 = 0.141\n[ ] ( ) ( )( )\n1\n29\nc 30\n’ ’ =\nP I | C ( 0.02 )( 0.98 ) = 0.334\n( )\n1\n’ ’\nTherefore,\n0.141 1/ 5\n( )( )\nP C | I = = 0.096 .\n[ ]\n0.141 1/ 5 + 0.334 4 / 5\n( )( ) ( )( )"
    },
    {
        "id": 28,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of days that elapse between the beginning of a calendar year and the moment\na high-risk driver is involved in an accident is exponentially distributed. An insurance\ncompany expects that 30% of high-risk drivers will be involved in an accident during the\nfirst 50 days of a calendar year.\nCalculate the portion of high-risk drivers are expected to be involved in an accident\nduring the first 80 days of a calendar year.",
        "options": [
            "0.15",
            "0.34",
            "0.43",
            "0.57",
            "0.66"
        ],
        "answerLetter": "C",
        "answer": "0.43",
        "explanation": "Official solution: C\n\nLet T denote the number of days that elapse before a high-risk driver is involved in an accident.\nThen T is exponentially distributed with unknown parameter l . We are given that\n50\n− λ t − λ t 50 − 50 λ\n0.3 = P T [ ≤ 50] = λ e dt = − e = 1 − e .\n∫\n0\n0\n= 50 λ\nTherefore,\ne = 0.7 and λ = − (1/ 50) ln(0.7).\nThen,\n80\n− λ t − λ t 80 − 80 λ\nP T [ ≤ 80] = λ e dt = − e = 1 − e\n∫ –80\nl\n0\n= 1 – e\n0\n(80/50)ln(0.7) 8/5\n= 1 − e = 1 − 0.7 = 0.435."
    },
    {
        "id": 29,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary has discovered that policyholders are three times as likely to file two claims\nas to file four claims.\nThe number of claims filed has a Poisson distribution.\nCalculate the variance of the number of claims filed.\n1",
        "options": [
            "3",
            "1 2",
            "",
            "2",
            "4"
        ],
        "answerLetter": "D",
        "answer": "2",
        "explanation": "Official solution: D\n\n− λ 2 − λ 4\ne λ e λ\nLet N be the number of claims filed. We are given P N [ = 2] = = 3 [ P N = 4] = 3 .\n2! 4!\nThen,\n1 3\n2 4 2\nλ = λ or λ = 4 or λ = 2 , which is the variance of N .\n2 24"
    },
    {
        "id": 30,
        "topic": "SOA Exam P Sample Question",
        "question": "A company establishes a fund of 120 from which it wants to pay an amount, C , to any of\nits 20 employees who achieve a high performance level during the coming year. Each\nemployee has a 2% chance of achieving a high performance level during the coming\nyear. The events of different employees achieving a high performance level during the\ncoming year are mutually independent.\nCalculate the maximum value of C for which the probability is less than 1% that the fund\nwill be inadequate to cover all payments for high performance.",
        "options": [
            "24",
            "30",
            "40",
            "60",
            "120"
        ],
        "answerLetter": "D",
        "answer": "60",
        "explanation": "Official solution: D\n\nLet X denote the number of employees who achieve the high performance level. Then X follows\na binomial distribution with parameters n = 20 and p = 0.02. Now we want to determine x such\nx\nk 20 − k\n20\nthat P[ X > x ] < 0.01 or equivalently 0.99 ≤ P X ≤ x = 0.02 0.98\n[ ] ( ) ( )\n( )\n∑ k\nk = 0\nThe first three probabilities (at 0, 1, and 2) are 0.668, 0.272, and 0.053. The total is 0.993 and so\nthe smallest x that has the probability exceed 0.99 is 2. Thus C = 120/2 = 60."
    },
    {
        "id": 31,
        "topic": "SOA Exam P Sample Question",
        "question": "A large pool of adults earning their first driver’s license includes 50% low-risk drivers,\n30% moderate-risk drivers, and 20% high-risk drivers. Because these drivers have no\nprior driving record, an insurance company considers each driver to be randomly selected\nfrom the pool.\nThis month, the insurance company writes four new policies for adults earning their first\ndriver’s license.\nCalculate the probability that these four will contain at least two more high-risk drivers\nthan low-risk drivers.",
        "options": [
            "0.006",
            "0.012",
            "0.018",
            "0.049",
            "0.073"
        ],
        "answerLetter": "D",
        "answer": "0.049",
        "explanation": "Official solution: D\n\nLet\nX = number of low-risk drivers insured\nY = number of moderate-risk drivers insured\nZ = number of high-risk drivers insured\nf ( x , y , z ) = probability function of X , Y , and Z\nThen f is a trinomial probability function, so\nP z ≥ x + 2 = f 0, 0, 4 + f 1, 0,3 + f 0,1,3 + f 0, 2, 2\n[ ] ( ) ( ) ( ) ( )\n4 3 3 4! 2 2\n= 0.20 + 4 0.50 0.20 + 4 0.30 0.20 + 0.30 0.20\n( ) ( )( ) ( )( ) ( ) ( )\n2!2!\n= 0.0488"
    },
    {
        "id": 32,
        "topic": "SOA Exam P Sample Question",
        "question": "The loss due to a fire in a commercial building is modeled by a random variable X with\ndensity function\n0.005(20 − x ), 0 < x < 20\n’\nf ( ) x = ’\n0, otherwise.\n’\nGiven that a fire loss exceeds 8, calculate the probability that it exceeds 16.",
        "options": [
            "1/25",
            "1/9",
            "1/8",
            "1/3",
            "3/7"
        ],
        "answerLetter": "B",
        "answer": "1/9",
        "explanation": "Official solution: B\n\n20\n1\n’ ’\n2 20\nP X > x = 0.005 20 − t dt = 0.005 20 t − t\n[ ] ( )\n’ ’ x\n∫\nx\n2\n’ ’\n1 1\n’ ’ ’ ’\n2 2\n= 0.005 400 − 200 − 20 x + x = 0.005 200 − 20 x + x\n’ ’ ’ ’\n2 2\n’ ’ ’ ’\nwhere 0 < x < 20. Therefore,\n2\n1\n200 − 20 16 ( ) + ( 16 )\nP X > 16\n[ ] 8 1\n2\nP ’ X > 16 X > 8 ’ = = = =\n.\n2\n’ ’\n1\nP X > 8 72 9\n[ ] 200 − 20 8 + 8\n( ) ( )\n2"
    },
    {
        "id": 33,
        "topic": "SOA Exam P Sample Question",
        "question": "The lifetime of a machine part has a continuous distribution on the interval (0, 40) with\n− 2\nprobability density function f ( x ), where f ( x ) is proportional to (10 + x ) on the interval.\nCalculate the probability that the lifetime of the machine part is less than 6.",
        "options": [
            "0.04",
            "0.15",
            "0.47",
            "0.53",
            "0.94"
        ],
        "answerLetter": "C",
        "answer": "0.47",
        "explanation": "Official solution: C\n\n− 2\nWe know the density has the form C ( 10 + x ) for 0 < x < 40 (equals zero otherwise). First,\ndetermine the proportionality constant C .\n40\n40\n− 2 C C 2\n− 1\n1 = C 10 + x dx = − C (10 + x ) = − = C\n( )\n∫\n0\n0\n10 50 25\nSo C = 25/2 or 12.5. Then, calculate the probability over the interval (0, 6):\n6\n6\n− 2 − 1 1 1\n’ ’\n.\n12.5 10 + x dx = − 12.5 10 + x = 12.5 − = 0.47\n( ) ( )\n’ ’\n∫\n0\n0\n10 16\n’ ’"
    },
    {
        "id": 34,
        "topic": "SOA Exam P Sample Question",
        "question": "A group insurance policy covers the medical claims of the employees of a small\ncompany. The value, V , of the claims made in one year is described by\nV = 100,000 Y\nwhere Y is a random variable with density function\n4\n’\nk (1 − y ) , 0 < y < 1\nf ( y ) = ’\n0, otherwise\n’\nwhere k is a constant.\nCalculate the conditional probability that V exceeds 40,000, given that V exceeds 10,000.",
        "options": [
            "0.08",
            "0.13",
            "0.17",
            "0.20",
            "0.51"
        ],
        "answerLetter": "B",
        "answer": "0.13",
        "explanation": "Official solution: B\n\nTo determine k ,\n1\nk k\n4 5\n1\n1 = 1 = k 1 − y dy = − 1 − y = , so k = 5\n( ) ( )\n∫\n0\n5 5\n0\nWe next need to find P[ V > 10,000] = P[100,000 Y > 10,000] = P[ Y > 0.1], which is\n1\n4 5\n1 5\n5 1 − y dy = − 1 − y = 0.9 = 0.59\n( ) ( ) and P[ V > 40,000] which is\n∫\n0.1\n0.1\n1\n4 5\n1 5\n5 1 − y dy = − 1 − y = 0.6 = 0.078 . Then,\n( ) ( )\n∫\n0.4\n0.4\nP V [ > 40, 000 ∩ V > 10, 000] P V [ > 40, 000] 0.078\nP V [ > 40, 000 | V > 10, 000] = = = = 0.132.\nP V [ > 10, 000] P V [ > 10, 000] 0.590"
    },
    {
        "id": 35,
        "topic": "SOA Exam P Sample Question",
        "question": "The lifetime of a printer costing 200 is exponentially distributed with mean 2 years. The\nmanufacturer agrees to pay a full refund to a buyer if the printer fails during the first year\nfollowing its purchase, a one-half refund if it fails during the second year, and no refund\nfor failure after the second year.\nCalculate the expected total amount of refunds from the sale of 100 printers.",
        "options": [
            "6,321",
            "7,358",
            "7,869",
            "10,256",
            "12,642"
        ],
        "answerLetter": "D",
        "answer": "10,256",
        "explanation": "Official solution: D\n\n− t /2\nLet Τ denote printer lifetime. The distribution function is . The probability of\nF t ( ) = 1 − e\nfailure in the first year is F (1) = 0.3935 and the probability of failure in the second year is F (2) –\nF (1) = 0.6321 – 0.3935 = 0.2386. Of 100 printers, the expected number of failures is 39.35 and\n23.86 for the two periods. The total expected cost is 200(39.35) + 100(23.86) = 10,256."
    },
    {
        "id": 36,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company insures a large number of homes. The insured value, X , of a\nrandomly selected home is assumed to follow a distribution with density function\n− 4\n’\n3 x , x > 1\nf ( ) x = ’\n0, otherwise.\n’\nGiven that a randomly selected home is insured for at least 1.5, calculate the probability\nthat it is insured for less than 2.",
        "options": [
            "0.578",
            "0.684",
            "0.704",
            "0.829",
            "0.875"
        ],
        "answerLetter": "A",
        "answer": "0.578",
        "explanation": "Official solution: A\n\nx x\n− 4 − 3 − 3\nThe distribution function is F x ( ) = P X [ ≤ x ] = 3 t dt = − t = 1 − x . Then,\n∫\n1\n1\nP ( X < 2) and ( X ≥ 1.5)\n[ ] P X [ < 2] − Pr[X < 1.5]\nP X [ < 2 | X ≥ 1.5] = =\nP X ≥ 1.5 Pr X ≥ 1.5\n[ ] [ ]\n− 3 − 3\nF (2) − F (1.5) (1 − 2 ) − (1 − 1.5 ) − 1/ 8 + 8 / 27 37\n= = = = = 0.578\n− 3\n1 − F (1.5) 1 − (1 − 1.5 ) 8 / 27 64"
    },
    {
        "id": 37,
        "topic": "SOA Exam P Sample Question",
        "question": "A company prices its hurricane insurance using the following assumptions:\n(i) In any calendar year, there can be at most one hurricane.\n(ii) In any calendar year, the probability of a hurricane is 0.05.\n(iii) The numbers of hurricanes in different calendar years are mutually\nindependent.\nUsing the company’s assumptions, calculate the probability that there are fewer\nthan 3 hurricanes in a 20-year period.",
        "options": [
            "0.06",
            "0.19",
            "0.38",
            "0.62",
            "0.92"
        ],
        "answerLetter": "E",
        "answer": "0.92",
        "explanation": "Official solution: E\n\nThe number of hurricanes has a binomial distribution with n = 20 and p = 0.05. Then\n20 19 18 2\nP X [ < 3] = 0.95 + 20(0.95) (0.05) + 190(0.95) (0.05) = 0.9245."
    },
    {
        "id": 38,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy pays for a random loss X subject to a deductible of C , where\n0 < C < 1 . The loss amount is modeled as a continuous random variable with density\nfunction\n2 , x 0 < x < 1\n’\nf ( ) x = ’\n0, otherwise.\n’\nGiven a random loss X , the probability that the insurance payment is less than 0.5 is equal\nto 0.64.\nCalculate C .",
        "options": [
            "0.1",
            "0.3",
            "0.4",
            "0.6",
            "0.8"
        ],
        "answerLetter": "B",
        "answer": "0.3",
        "explanation": "Official solution: B\n\nDenote the insurance payment by the random variable Y . Then\n0 if 0 < X ≤ C\n’\nY = ’\nX − C if C < X < 1\n’\nWe are given that\n0.5 + C\n0.5 + C\n2 2\n0.64 = P Y [ < 0.5] = P [0 < X < 0.5 + C ] = 2 x dx = x = (0.5 + C ) .\n∫\n0\n0\nThe quadratic equation has roots at C = 0.3 and –1.3. Because C must be between 0 and 1, the\nsolution is C = 0.3."
    },
    {
        "id": 39,
        "topic": "SOA Exam P Sample Question",
        "question": "A study is being conducted in which the health of two independent groups of ten\npolicyholders is being monitored over a one-year period of time. Individual participants\nin the study drop out before the end of the study with probability 0.2 (independently of\nthe other participants).\nCalculate the probability that at least nine participants complete the study in one of the\ntwo groups, but not in both groups?",
        "options": [
            "0.096",
            "0.192",
            "0.235",
            "0.376",
            "0.469"
        ],
        "answerLetter": "E",
        "answer": "0.469",
        "explanation": "Official solution: E\n\nThe number completing the study in a single group is binomial (10,0.8). For a single group the\n9 10\n10 10\nprobability that at least nine complete the study is 0.8 0.2 + 0.8 = 0.376\n( ) ( ) ( ) ( ) ( )\n9 10\nThe probability that this happens for one group but not the other is 0.376(0.624) + 0.624(0.376)\n= 0.469."
    },
    {
        "id": 40,
        "topic": "SOA Exam P Sample Question",
        "question": "For Company A there is a 60% chance that no claim is made during the coming year. If\none or more claims are made, the total claim amount is normally distributed with mean\n10,000 and standard deviation 2,000.\nFor Company B there is a 70% chance that no claim is made during the coming year. If\none or more claims are made, the total claim amount is normally distributed with mean\n9,000 and standard deviation 2,000.\nThe total claim amounts of the two companies are independent.\nCalculate the probability that, in the coming year, Company B’s total claim amount will\nexceed Company A’s total claim amount.",
        "options": [
            "0.180",
            "0.185",
            "0.217",
            "0.223",
            "0.240"
        ],
        "answerLetter": "D",
        "answer": "0.223",
        "explanation": "Official solution: D\n\nThere are two situations where Company B’s total exceeds Company A’s. First, Company B has\nat least one claim and Company A has no claims. This probability is 0.3(0.6) = 0.18. Second,\nboth have claims. This probability is 0.3(0.4) = 0.12. Given that both have claims, the\ndistribution of B’s claims minus A’s claims is normal with mean 9,000 – 10,000 = –1,000 and\n2 2\nstandard deviation 2, 000 + 2, 000 = 2,828.43. The probability that the difference exceeds\n0 − − ( 1, 000)\nzero is the probability that a standard normal variable exceeds = 0.354. The\n2,828.43\nprobability is 1 – 0.638 = 0.362. The probability of the desired event is 0.18 + 0.12(0.362) =\n0.223."
    },
    {
        "id": 41,
        "topic": "SOA Exam P Sample Question",
        "question": "A company takes out an insurance policy to cover accidents that occur at its\nmanufacturing plant. The probability that one or more accidents will occur during any\ngiven month is 0.60. The numbers of accidents that occur in different months are\nmutually independent.\nCalculate the probability that there will be at least four months in which no accidents\noccur before the fourth month in which at least one accident occurs.",
        "options": [
            "0.01",
            "0.12",
            "0.23",
            "0.29",
            "0.41"
        ],
        "answerLetter": "D",
        "answer": "0.29",
        "explanation": "Official solution: D\n\nOne way to view this event is that in the first seven months there must be at least four with no\naccidents. These are binomial probabilities:\n7 4 3 7 5 2 7 6 7 7\n0.4 0.6 + 0.4 0.6 + 0.4 0.6 + 0.4\n( ) ( ) ( ) ( )\n4 5 6 7\n= 0.1935 + 0.0774 + 0.0172 + 0.0016 = 0.2897.\nAlternatively, consider a negative binomial distribution where K is the number of failures before\nthe fourth success (no accidents). Then\n4 4 4 5 4 2 6 4 3\nP K [ < 4] = 0.4 + 0.4 0.6 + 0.4 0.6 + 0.4 0.6 = 0.2898\n( ) ( ) ( )\n1 2 3"
    },
    {
        "id": 42,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy pays 100 per day for up to three days of hospitalization and 50 per\nday for each day of hospitalization thereafter .\nThe number of days of hospitalization, X , is a discrete random variable with probability\nfunction\n6 − k\n’\n, k = 1, 2,3, 4,5\n’\nP X [ = k ] = ’\n15\n’\n0, otherwise.\n’\nDetermine the expected payment for hospitalization under this policy.",
        "options": [
            "123",
            "210",
            "220",
            "270",
            "367"
        ],
        "answerLetter": "C",
        "answer": "220",
        "explanation": "Official solution: C\n\nThe probabilities of 1, 2, 3, 4, and 5 days of hospitalization are 5/15, 4/15, 3/15, 2/15, and 1/15\nrespectively. The payments are 100, 200, 300, 350, and 400 respectively. The expected value is\n[100(5) + 200(4) + 300(3) + 350(2) + 400(1)]/15 = 220."
    },
    {
        "id": 43,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X be a continuous random variable with density function\n’ | x |\n, − 2 ≤ x ≤ 4\n’\nf ( ) x = ’\n10\n’\n0, otherwise.\n’\nCalculate the expected value of X .",
        "options": [
            "1/5",
            "3/5",
            "1",
            "28/15",
            "12/5"
        ],
        "answerLetter": "D",
        "answer": "28/15",
        "explanation": "Official solution: D\n\n0 4\n3 3\n0 4\n− x x x x 8 64 56 28\nE X = x dx + x dx = − + = − + = =\n( )\n∫ ∫\n− 2 0\n10 10 30 30 30 30 30 15\n− 2 0"
    },
    {
        "id": 44,
        "topic": "SOA Exam P Sample Question",
        "question": "A device that continuously measures and records seismic activity is placed in a remote\nregion. The time, T , to failure of this device is exponentially distributed with mean 3\nyears. Since the device will not be monitored during its first two years of service, the\ntime to discovery of its failure is X = max( T , 2).\nCalculate E ( X ).\n1\n− 6",
        "options": [
            "2 + e 3 − 2/3 − 4/3",
            "2 − 2 e + 5 e",
            "3 − 2/3",
            "2 + 3 e",
            "5"
        ],
        "answerLetter": "D",
        "answer": "2 + 3 e",
        "explanation": "Official solution: D\n\nThe density function of T is\n1\n− t /3\nf t ( ) = e , 0 < t < ∞\n3\nTherefore,\n2 ∞\n2 t\n− t /3 − t /3\nE X = E ’ max T , 2 ’ = e dt + e dt\n[ ] ( )\n’ ’ ∫ ∫\n0 2\n3 3\n∞\n− t /3 2 − t /3 ∞ − t /3 − 2/3 − 2/3 − t /3 ∞\n= − 2 e | − te | + e dt = − 2 e + 2 + 2 e − 3 e |\n0 2 2\n∫\n2\n− 2/3\n= 2 + 3 e\n− 2/3\nAlternatively, with probability 1 − e the device fails in the first two years and contributes 2 to\nthe expected value. With the remaining probability the expected value is 2 + 3 = 5 (employing\n− 2/3 − 2/3 − 2/3\nthe memoryless property). The unconditional expected value is\n(1 − e )2 + ( e )5 = 2 + 3 e ."
    },
    {
        "id": 45,
        "topic": "SOA Exam P Sample Question",
        "question": "A piece of equipment is being insured against early failure. The time from purchase until\nfailure of the equipment is exponentially distributed with mean 10 years. The insurance\nwill pay an amount x if the equipment fails during the first year, and it will pay 0.5 x if\nfailure occurs during the second or third year. If failure occurs after the first three years,\nno payment will be made.\nCalculate x such that the expected payment made under this insurance is 1000.",
        "options": [
            "3858",
            "4449",
            "5382",
            "5644",
            "7235"
        ],
        "answerLetter": "D",
        "answer": "5644",
        "explanation": "Official solution: D\n\nWe want to find x such that\n3\n1\nx 1\nx\n–t/10 –t/10\n1000 = E[P] = e dt + e dt =\n∫\n∫\n10 2 10\n0 1\n1 3\n− t /10 − t /10\n1000 = x (0.1) e dt + 0.5 (0.1) x e dt\n∫ ∫\n0 1\n1 3\n− t /10 − t /10\n= − xe − 0.5 xe\n0 1\n− 1/10 − 3/10 − 1/10\n= − xe + x − 0.5 xe + 0.5 xe = 0.1772 . x\nThus x = 5644."
    },
    {
        "id": 46,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy on an electrical device pays a benefit of 4000 if the device fails\nduring the first year. The amount of the benefit decreases by 1000 each successive year\nuntil it reaches 0. If the device has not failed by the beginning of any given year, the\nprobability of failure during that year is 0.4.\nCalculate the expected benefit under this policy.",
        "options": [
            "2234",
            "2400",
            "2500",
            "2667",
            "2694"
        ],
        "answerLetter": "E",
        "answer": "2694",
        "explanation": "Official solution: E\n\n2 3\nE Y [ ] = 4000(0.4) + 3000(0.6)(0.4) + 2000(0.6) (0.4) + 1000(0.6) (0.4)\n= 2694"
    },
    {
        "id": 47,
        "topic": "SOA Exam P Sample Question",
        "question": "A company buys a policy to insure its revenue in the event of major snowstorms that shut\ndown business. The policy pays nothing for the first such snowstorm of the year and\n10,000 for each one thereafter, until the end of the year. The number of major\nsnowstorms per year that shut down business is assumed to have a Poisson distribution\nwith mean 1.5.\nCalculate the expected amount paid to the company under this policy during a one-year\nperiod.",
        "options": [
            "2,769",
            "5,000",
            "7,231",
            "8,347",
            "10,578"
        ],
        "answerLetter": "C",
        "answer": "7,231",
        "explanation": "Official solution: C\n\nThe expected payment is\nn − 3/2 n − 3/2\n∞ ∞\n’ ’\n(3 / 2) e (3 / 2) e\n− 3/2\n10, 000( n − 1) = 10, 000( n − 1) − 10, 000( 1) − e\n∑ ∑\n’ ’\nn ! n !\nn = 1 n = 0\n’ ’\n− 3/2\n= 10, 000(1.5 − 1) + 10, 000 e = 7, 231."
    },
    {
        "id": 48,
        "topic": "SOA Exam P Sample Question",
        "question": "A manufacturer’s annual losses follow a distribution with density function\n2.5\n’\n2.5(0.6)\n, x > 0.6\n’\n3.5\nf ( ) x = ’\nx\n’\n0, otherwise.\n’\nTo cover its losses, the manufacturer purchases an insurance policy with an annual\ndeductible of 2.\nCalculate the mean of the manufacturer’s annual losses not paid by the insurance policy.",
        "options": [
            "0.84",
            "0.88",
            "0.93",
            "0.95",
            "1.00"
        ],
        "answerLetter": "C",
        "answer": "0.93",
        "explanation": "Official solution: C\n\nThe expected payment is\n2 ∞\n2 ∞\n2.5 2.5 − 1.5 − 2.5\n’ ’\n’ ’ ’ ’\n2.5(0.6) 2.5(0.6) − x − x\n2.5\nx dx + 2 dx = 2.5(0.6) ’ + ’\n∫ ’ 3.5 ’ ∫ ’ 3.5 ’\n’ ’\nx x 1.5 2.5\n’ ’ ’ ’\n0.6 2\n0.6 2\n’ ’\n− 1.5 − 1.5 − 2.5\n’ − 2 0.6 2 ’\n2.5\n= 2.5(0.6) + + 2 = 0.9343.\n’ ’\n1.5 1.5 2.5\n’ ’"
    },
    {
        "id": 49,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company sells a one-year automobile policy with a deductible of 2. The\nprobability that the insured will incur a loss is 0.05. If there is a loss, the probability of a\nloss of amount N is K / N , for N = 1, . . . , 5 and K a constant. These are the only possible\nloss amounts and no more than one loss can occur.\nCalculate the expected payment for this policy.",
        "options": [
            "0.031",
            "0.066",
            "0.072",
            "0.110",
            "0.150"
        ],
        "answerLetter": "A",
        "answer": "0.031",
        "explanation": "Official solution: A\n\nFirst, determine K .\n1 1 1 1 60 + 30 + 20 + 15 + 12 137\n’ ’ ’ ’ ’ ’\n1 = K 1 + + + + = K = K\n’ ’ ’ ’ ’ ’\n2 3 4 5 60 60\n’ ’ ’ ’ ’ ’\n60\nK =\n137\nThen, after applying the deductible, the expected payment is\n0.05[(3 − 2) P N ( = 3) + (4 − 2) P N ( = 4) + (5 − 2) P N ( = 5)]\n= 0.05(60 /137)[1(1/ 3) + 2(1/ 4) + 3(1/ 5)] = 0.0314"
    },
    {
        "id": 50,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy reimburses a loss up to a benefit limit of 10. The policyholder’s\nloss, Y , follows a distribution with density function:\n− 3\n’\n2 y , y > 1\nf ( y ) = ’\n0, otherwise.\n’\nCalculate the expected value of the benefit paid under the insurance policy.",
        "options": [
            "1.0",
            "1.3",
            "1.8",
            "1.9",
            "2.0"
        ],
        "answerLetter": "D",
        "answer": "1.9",
        "explanation": "Official solution: D\n\nThe expected payment is\n10 ∞\n10 ∞\n2 2 2 20 2 2 20\ny dy + 10 dy = − − = − + − 0 + = 1.9.\n3 3 2\n∫ ∫\ny y y 2 y 10 1 200\n1 10 1 10"
    },
    {
        "id": 51,
        "topic": "SOA Exam P Sample Question",
        "question": "An auto insurance company insures an automobile worth 15,000 for one year under a\npolicy with a 1,000 deductible. During the policy year there is a 0.04 chance of partial\ndamage to the car and a 0.02 chance of a total loss of the car. If there is partial damage to\nthe car, the amount X of damage (in thousands) follows a distribution with density\nfunction\n− x /2\n’ 0.5003 e , 0 < x < 15\nf ( ) x = ’\n0, otherwise.\n’\nCalculate the expected claim payment.",
        "options": [
            "320",
            "328",
            "352",
            "380",
            "540"
        ],
        "answerLetter": "B",
        "answer": "328",
        "explanation": "Official solution: B\n\nThe expected payment is (in thousands)\n15\n− x /2\n(0.94)(0) + (0.02)(15 − 1) + 0.04 ( x − 1)0.5003 e dx\n∫\n1\n15\n15\n− x /2 − x /2\n’ ’\n= 0.28 + ( 0.020012 ) − 2 e ( x − 1) + 2 e dx\n∫\n’ 1 1 ’\n’ ’\n15\n− 7.5 − x /2\n’ ’\n= 0.28 + 0.020012 − 2 e (14) + − 4 e\n( )\n( )\n’ 1 ’\n’ ’\n− 7.5 − 7.5 − 0.5\n= 0.28 + 0.020012 ’ − 2 e (14) − 4 e + 4 e ’\n( )\n’ ’\n= 0.28 + 0.020012 2.408\n( )( )\n= 0.328."
    },
    {
        "id": 52,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company’s monthly claims are modeled by a continuous, positive random\n4\n-\nvariable X , whose probability density function is proportional to (1 + x ) , for 0 < x < ∞ .\nCalculate the company’s expected monthly claims.",
        "options": [
            "1/6",
            "1/3",
            "1/2",
            "1",
            "3"
        ],
        "answerLetter": "C",
        "answer": "1/2",
        "explanation": "Official solution: C\n\n∞\n∞\nk k 1 k\n1 = dx = − = and so k = 3.\n∫ 4 3\n(1 + x ) 3 (1 + x ) 3\n0 0\nThe expected value is (where the substitution u = 1 + x is used.\n∞ ∞\n∞\n3\n− 4 − 2 − 3\nx dx = 3( u − 1) u du = 3 u / ( 2) − − 3 u / ( 3) − = 3 / 2 − 1 = 1/ 2.\n∫ 4 ∫\n0 1 1\n(1 + x )\nIntegration by parts may also be used."
    },
    {
        "id": 53,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy is written to cover a loss, X , where X has a uniform distribution on\n[0, 1000]. The policy has a deductible, d , and the expected payment under the policy is\n25% of what it would be with no deductible.\nCalculate d .",
        "options": [
            "250",
            "375",
            "500",
            "625",
            "750"
        ],
        "answerLetter": "C",
        "answer": "500",
        "explanation": "Official solution: C\n\nWith no deductible, the expected payment is 500. With the deductible it is to be 125. Let d be the\ndeductible. Then,\n1000\n2\n1000\n( x − d )\n2\n’ ’\n125 = ( x − d )(0.001) dx = (0.001) = 0.0005 (1000 − d ) − 0\n∫\n’ ’\nd\n2\nd\n2\n250, 000 = (1000 − d )\n500 = 1000 − d\nd = 500."
    },
    {
        "id": 54,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurer's annual weather-related loss, X , is a random variable with density function\n2.5\n’\n2.5(200)\n, x > 200\n’\n3.5\nf ( ) x = ’\nx\n’\n0, otherwise.\n’\nth th\nCalculate the difference between the 30 and 70 percentiles of X .",
        "options": [
            "35",
            "93",
            "124",
            "231",
            "298"
        ],
        "answerLetter": "B",
        "answer": "93",
        "explanation": "Official solution: B\n\nThe distribution function of X is\nx\n2.5 2.5 2.5\nx\n2.5(200) − (200) (200)\nF x ( ) = dt = = 1 − , x > 200\n∫ 3.5 2.5 2.5\n200\nt t x\n200\nThe p th percentile x of X is given by\np\n2.5\np (200)\n= F x ( ) = 1 −\np\n2.5\n100 x\np\n2.5\n(200)\n1 − 0.01 p =\n2.5\nx\np\n200\n0.4\n(1 − 0.01 ) p =\nx\np\n200\nx =\np\n0.4\n(1 − 0.01 ) p\n200 200\nIt follows that x − x = − = 93.06 .\n70 30\n0.4 0.4\n(0.30) (0.70)"
    },
    {
        "id": 55,
        "topic": "SOA Exam P Sample Question",
        "question": "A recent study indicates that the annual cost of maintaining and repairing a car in a town\nin Ontario averages 200 with a variance of 260.\nA tax of 20% is introduced on all items associated with the maintenance and repair of\ncars (i.e., everything is made 20% more expensive).\nCalculate the variance of the annual cost of maintaining and repairing a car after the tax is\nintroduced.",
        "options": [
            "208",
            "260",
            "270",
            "312",
            "374"
        ],
        "answerLetter": "E",
        "answer": "374",
        "explanation": "Official solution: E\n\nLet X and Y denote the annual cost of maintaining and repairing a car before and after the 20%\ntax, respectively. Then Y = 1.2 X and Var Y ( ) = Var (1.2 X ) = 1.44 Var X ( ) = 1.44(260) = 374.4 ."
    },
    {
        "id": 56,
        "topic": "SOA Exam P Sample Question",
        "question": "A random variable X has the cumulative distribution function\n0, x < 1\n’\n’\n2\nx − 2 x + 2\n’\nF x ( ) = , 1 ≤ x < 2\n’\n2\n’\n1, x ≥ 2.\n’\n’\nCalculate the variance of X .",
        "options": [
            "7/72",
            "1/8",
            "5/36",
            "4/3",
            "23/12"
        ],
        "answerLetter": "C",
        "answer": "5/36",
        "explanation": "Official solution: C\n\nFirst note that the distribution function jumps ½ at x = 1, so there is discrete probability at that\npoint. From 1 to 2, the density function is the derivative of the distribution function, x – 1. Then,\n2\n3 2\n2\n1 1 ’ x x ’ 1 8 4 1 1 4\nE X ( ) = (1) + x x ( − 1) dx = + − = + − − + =\n’ ’\n∫\n1\n2 2 3 2 2 3 2 3 2 3\n’ ’\n1\n2\n4 3\n2 ’ ’\n1 1 x x 1 16 8 1 1 23\n2 2 2\nE X ( ) = (1) + x ( x − 1) dx = + − = + − − + =\n’ ’\n∫\n1\n2 2 4 3 2 4 3 4 3 12\n’ ’\n1\n2\n23 4 23 16 5\n2 ’ ’\n2\nVar X = E X ( ) − E X ( ) = − = − = .\n( ) [ ]\n’ ’\n12 3 12 9 36\n’ ’"
    },
    {
        "id": 57,
        "topic": "SOA Exam P Sample Question",
        "question": "The warranty on a machine specifies that it will be replaced at failure or age 4, whichever\noccurs first. The machine’s age at failure, X , has density function\n1/ 5, 0 < x < 5\n’\nf ( ) x = ’\n0, otherwise.\n’\nLet Y be the age of the machine at the time of replacement.\nCalculate the variance of Y .",
        "options": [
            "1.3",
            "1.4",
            "1.7",
            "2.1",
            "7.5"
        ],
        "answerLetter": "C",
        "answer": "1.7",
        "explanation": "Official solution: C\n\n4 5 4\n2\nE Y [ ] = x (0.2) dx + 4(0.2) dx = 0.1 x + 0.8 = 2.4\n∫ ∫\n0 4 0\n4 5 4\n2 2 2 3\nE Y [ ] = x (0.2) dx + 4 (0.2) dx = (0.2 / 3) x + 3.2 = 7.46667\n∫ ∫\n0\n0 4\n2\n2 2\nVar[Y] = E Y [ ] − E Y [ ] = 7.46667 − 2.4 = 1.707.\n( )"
    },
    {
        "id": 58,
        "topic": "SOA Exam P Sample Question",
        "question": "A probability distribution of the claim sizes for an auto insurance policy is given in the\ntable below:\nClaim\nSize Probability\n20 0.15\n30 0.10\n40 0.05\n50 0.20\n60 0.10\n70 0.10\n80 0.30\nCalculate the percentage of claims that are within one standard deviation of the mean\nclaim size.",
        "options": [
            "45%",
            "55%",
            "68%",
            "85%",
            "100%"
        ],
        "answerLetter": "A",
        "answer": "45%",
        "explanation": "Official solution: A\n\nThe mean is 20(0.15) + 30(0.10) + 40(0.05) + 50(0.20) + 60(0.10) + 70(0.10) + 80(0.30) = 55.\nThe second moment is 400(0.15) + 900(0.10) + 1600(0.05) + 2500(0.20) + 3600(0.10) +\n2\n4900(0.10) + 6400(0.30) = 3500. The variance is 3500 – 55 = 475. The standard deviation is\n21.79. The range within one standard deviation of the mean is 33.21 to 76.79, which includes the\nvalues 40, 50, 60, and 70. The sum of the probabilities for those values is 0.05 + 0.20 + 0.10 +\n0.10 = 0.45."
    },
    {
        "id": 59,
        "topic": "SOA Exam P Sample Question",
        "question": "The owner of an automobile insures it against damage by purchasing an insurance policy\nwith a deductible of 250. In the event that the automobile is damaged, repair costs can be\nmodeled by a uniform random variable on the interval (0, 1500).\nCalculate the standard deviation of the insurance payment in the event that the\nautomobile is damaged.",
        "options": [
            "361",
            "403",
            "433",
            "464",
            "521"
        ],
        "answerLetter": "B",
        "answer": "403",
        "explanation": "Official solution: B\n\nLet Y be the amount of the insurance payment.\n1500\n2\n1500\n1 1 1250\n2\nE Y [ ] = ( x − 250) dx = ( x − 250) = = 521\n∫\n250\n1500 3000 3000\n250\n1500\n3\n1500\n1 1 1250\n2 2 3\nE Y [ ] = ( x − 250) dx = ( x − 250) = = 434, 028\n∫\n250\n1500 4500 4500\n250\n2\nVar[Y] = 434, 028 − (521) = 162,587\nSD Y [ ] = 403."
    },
    {
        "id": 60,
        "topic": "SOA Exam P Sample Question",
        "question": "A baseball team has scheduled its opening game for April 1. If it rains on April 1, the\ngame is postponed and will be played on the next day that it does not rain. The team\npurchases insurance against rain. The policy will pay 1000 for each day, up to 2 days,\nthat the opening game is postponed.\nThe insurance company determines that the number of consecutive days of rain beginning\non April 1 is a Poisson random variable with mean 0.6.\nCalculate the standard deviation of the amount the insurance company will have to pay.",
        "options": [
            "668",
            "699",
            "775",
            "817",
            "904"
        ],
        "answerLetter": "B",
        "answer": "699",
        "explanation": "Official solution: B\n\nThe expected amount paid is (where N is the number of consecutive days of rain)\n− 0.6\ne 0.6\n− 0.6 − 0.6\n1000 P N [ = 1] + 2000 P N [ > 1] = 1000 + 2000 1 − e − e 0.6 = 573.\n( )\n1!\nThe second moment is\n− 0.6\ne 0.6\n2 2 2 2 − 0.6 − 0.6\n1000 P N [ = 1] + 2000 P N [ > 1] = 1000 + 2000 1 − e − e 0.6 = 816,893.\n( )\n1!\n2\nThe variance is 816,893 – 573 = 488,564 and the standard deviation is 699."
    },
    {
        "id": 61,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy reimburses dental expense, X , up to a maximum benefit of 250. The\nprobability density function for X is:\n− 0.004 x\n’\nce , x ≥ 0\nf ( ) x = ’\n0, otherwise\n’\nwhere c is a constant.\nCalculate the median benefit for this policy.",
        "options": [
            "161",
            "165",
            "173",
            "182",
            "250"
        ],
        "answerLetter": "C",
        "answer": "173",
        "explanation": "Official solution: C\n\nX has an exponential distribution. Therefore, c = 0.004 and the distribution function is\n− 0.004 x\nF x ( ) = 1 − e . For the moment, ignore the maximum benefit. The median is the solution to\n− 0.004 m\n0.5 = F m ( ) = 1 − e , which is m = − 250 ln(0.5) = 173.29. Because this is below the\nmaximum benefit, it is the median regardless of the existence of the maximum. Note that had the\nquestion asked for a percentile such that the solution without the maximum exceeds 250, then the\nanswer is 250."
    },
    {
        "id": 62,
        "topic": "SOA Exam P Sample Question",
        "question": "The time to failure of a component in an electronic device has an exponential distribution\nwith a median of four hours.\nCalculate the probability that the component will work without failing for at least five\nhours.",
        "options": [
            "0.07",
            "0.29",
            "0.38",
            "0.42",
            "0.57"
        ],
        "answerLetter": "D",
        "answer": "0.42",
        "explanation": "Official solution: D\n\n− t θ\nThe distribution function of an exponential random variable, T , is F t ( ) = 1 − e , t > 0 . With a\n− 4/ θ\nmedian of four hours, 0.5 = F (4) = 1 − e and so θ = − 4 / ln(0.5) . The probability the\n5ln(0.5)/4 5/4\ncomponent works for at least five hours is P T [ ≥ 5] = 1 − F (5) = 1 − 1 + e = 0.5 = 0.42."
    },
    {
        "id": 63,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company sells an auto insurance policy that covers losses incurred by a\npolicyholder, subject to a deductible of 100. Losses incurred follow an exponential\ndistribution with mean 300.\nth\nCalculate the 95 percentile of losses that exceed the deductible.",
        "options": [
            "600",
            "700",
            "800",
            "900",
            "1000"
        ],
        "answerLetter": "E",
        "answer": "1000",
        "explanation": "Official solution: E\n\nThis is a conditional probability. The solution is\nP [100 ≤ X ≤ p ] F p ( ) − F (100)\n0.95 = P X [ ≤ p | X > 100] = =\nP X [ > 100] 1 − F (100)\n− p /300 − 100/300 − 100/300 − p /300\n1 − e − 1 + e e − e\n− ( p − 100)/300\n= = = 1 − e\n− 100/300 − 100/300\n1 − 1 + e e\n− ( p − 100)/300\n0.05 = e\n− 2.9957 = − ( p − 100) / 300\np = 999"
    },
    {
        "id": 64,
        "topic": "SOA Exam P Sample Question",
        "question": "Claim amounts for wind damage to insured homes are mutually independent random\nvariables with common density function\n3\n’\n, x > 1\n’\n4\n= ’\nf ( ) x x\n’\n0, otherwise,\n’\nwhere x is the amount of a claim in thousands.\nSuppose 3 such claims will be made.\nCalculate the expected value of the largest of the three claims.",
        "options": [
            "2025",
            "2700",
            "3232",
            "3375",
            "4500"
        ],
        "answerLetter": "A",
        "answer": "2025",
        "explanation": "Official solution: A\n\nThe distribution function of X is given by\nx x\n3\n− 3 − 3\nF x ( ) = dt = − t = 1 − x , x > 1\n∫ 4\n1 1\nt\nNext, let X , X , and X denote the three claims made that have this distribution. Then if Y\n1 2 3\ndenotes the largest of these three claims, it follows that the distribution function of Y is given by\n− 3 3\nG y ( ) = P X [ ≤ y P X ] [ ≤ y P X ] [ ≤ y ] = (1 − y ) .\n1 2 3\nThe density function of Y is given by\n− 3 2 − 4\n′\ng y ( ) = G ( y ) = 3(1 − y ) (3 y ).\nTherefore,\n∞ ∞\n− 3 2 − 4 − 3 − 6 − 9\nE Y [ ] = y 3(1 − y ) 3 y dy = 9 y − 2 y + y dy\n∫ ∫\n1 1\n∞\n− 2 − 5 − 8\n’ ’\n= 9 − y / 2 + 2 y / 5 − y / 8 = 9 1/ 2 − 2 / 5 + 1/ 8\n[ ]\n’ 1 ’\n’ ’\n= 2.025 (in thousands)."
    },
    {
        "id": 65,
        "topic": "SOA Exam P Sample Question",
        "question": "A charity receives 2025 contributions. Contributions are assumed to be mutually\nindependent and identically distributed with mean 3125 and standard deviation 250.\nth\nCalculate the approximate 90 percentile for the distribution of the total contributions\nreceived.",
        "options": [
            "6,328,000",
            "6,338,000",
            "6,343,000",
            "6,784,000",
            "6,977,000"
        ],
        "answerLetter": "C",
        "answer": "6,343,000",
        "explanation": "Official solution: C\n\nThe mean and standard deviation for the 2025 contributions are 2025(3125) = 6,328,125 and\n45(250) = 11,250. By the central limit theorem, the total contributions are approximately\nth\nnormally distributed. The 90 percentile is the mean plus 1.282 standard deviations or 6,328,125\n+ 1.282(11,250) = 6,342,548."
    },
    {
        "id": 66,
        "topic": "SOA Exam P Sample Question",
        "question": "Claims filed under auto insurance policies follow a normal distribution with mean 19,400\nand standard deviation 5,000.\nCalculate the probability that the average of 25 randomly selected claims exceeds 20,000.",
        "options": [
            "0.01",
            "0.15",
            "0.27",
            "0.33",
            "0.45"
        ],
        "answerLetter": "C",
        "answer": "0.27",
        "explanation": "Official solution: C\n\nThe average has the same mean as a single claim, 19,400. The standard deviation is that for a\nsingle claim divided by the square root of the sample size, 5,000/5 = 1,000. The probability of\nexceeding 20,000 is the probability that a standard normal variable exceeds (20,000 –\n19,400)/1,000 = 0.6. From the tables, this is 1 – 0.7257 = 0.2743."
    },
    {
        "id": 67,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company issues 1250 vision care insurance policies. The number of claims\nfiled by a policyholder under a vision care insurance policy during one year is a Poisson\nrandom variable with mean 2. Assume the numbers of claims filed by different\npolicyholders are mutually independent.\nCalculate the approximate probability that there is a total of between 2450 and 2600\nclaims during a one-year period?",
        "options": [
            "0.68",
            "0.82",
            "0.87",
            "0.95",
            "1.00"
        ],
        "answerLetter": "B",
        "answer": "0.82",
        "explanation": "Official solution: B\n\nA single policy has a mean and variance of 2 claims. For 1250 polices the mean and variance of\nthe total are both 2500. The standard deviation is the square root, or 50.\nThe approximate probability of being between 2450 and 2600 is the same as a standard normal\nrandom variable being between (2450 – 2500)/50 = –1 and (2600 – 2500)/50 = 2. From the\ntables, the probability is 0.9772 – (1 – 0.8413) = 0.8185."
    },
    {
        "id": 68,
        "topic": "SOA Exam P Sample Question",
        "question": "A company manufactures a brand of light bulb with a lifetime in months that is normally\ndistributed with mean 3 and variance 1. A consumer buys a number of these bulbs with\nthe intention of replacing them successively as they burn out. The light bulbs have\nmutually independent lifetimes.\nCalculate the smallest number of bulbs to be purchased so that the succession of light\nbulbs produces light for at least 40 months with probability at least 0.9772.",
        "options": [
            "14",
            "16",
            "20",
            "40",
            "55"
        ],
        "answerLetter": "B",
        "answer": "16",
        "explanation": "Official solution: B\n\nLet n be the number of bulbs purchased. The mean lifetime is 3 n and the variance is n . From the\nnormal tables, a probability of 0.9772 is 2 standard deviations below the mean. Hence 40 = 3 n –\n2\n2sqrt( n ). Let m be the square root of n . The quadratic equation is 3 m – 2 m – 40. The roots are 4\nand –10/3. So n is either 16 or 100/9. At 16 the mean is 48 and the standard deviation is 4, which\nworks. At 100/9 the mean is 100/3 and the standard deviation is 10/3. In this case 40 is two\nstandard deviations above the mean, and so is not appropriate. Thus 16 is the correct choice."
    },
    {
        "id": 69,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X and Y be the number of hours that a randomly selected person watches movies and\nsporting events, respectively, during a three-month period. The following information is\nknown about X and Y :\nE( X ) = 50, E( Y ) = 20, Var( X ) = 50, Var( Y ) = 30, Cov( X , Y ) = 10.\nThe totals of hours that different individuals watch movies and sporting events during the\nthree months are mutually independent.\nOne hundred people are randomly selected and observed for these three months. Let T be\nthe total number of hours that these one hundred people watch movies or sporting events\nduring this three-month period.\nApproximate the value of P[ T < 7100].",
        "options": [
            "0.62",
            "0.84",
            "0.87",
            "0.92",
            "0.97"
        ],
        "answerLetter": "B",
        "answer": "0.84",
        "explanation": "Official solution: B\n\nObserve that (where Z is total hours for a randomly selected person)\nE Z [ ] = E X [ + Y ] = E X [ ] + E Y [ ] = 50 + 20 = 70\nVar Z [ ] = Var X [ + Y ] = Var X [ ] + Var Y [ ] + 2 Cov X Y [ , ] = 50 + 30 + 20 = 100.\nIt then follows from the Central Limit Theorem that T is approximately normal with mean\n100(70) = 7000 and variance 100(100) = 10,000 and standard deviation 100. The probability of\nbeing less than 7100 is the probability that a standard normal variable is less than (7100 –\n7000)/100 = 1. From the tables, this is 0.8413."
    },
    {
        "id": 70,
        "topic": "SOA Exam P Sample Question",
        "question": "The total claim amount for a health insurance policy follows a distribution with density\nfunction\n1\n− ( /1000) x\n, x > 0.\nf ( ) x = e\n1000\nThe premium for the policy is set at the expected total claim amount plus 100.\nIf 100 policies are sold, calculate the approximate probability that the insurance company\nwill have claims exceeding the premiums collected.",
        "options": [
            "0.001",
            "0.159",
            "0.333",
            "0.407",
            "0.460"
        ],
        "answerLetter": "B",
        "answer": "0.159",
        "explanation": "Official solution: B\n\nA single policy has an exponential distribution with mean and standard deviation 1000. The\npremium is then 1000 + 100 = 1100. For 100 policies, the total claims have mean 100(1000) =\n100,000 and standard deviation 10(1000) = 10,000. Total premiums are 100(1100) = 110,000.\nThe probability of exceeding this number is the probability that a standard normal variable\nexceeds (110,000 – 100,000)/10,000 = 1. From the tables this probability is 1 – 0.8413 = 0.1587."
    },
    {
        "id": 71,
        "topic": "SOA Exam P Sample Question",
        "question": "A city has just added 100 new female recruits to its police force. The city will provide a\npension to each new hire who remains with the force until retirement. In addition, if the\nnew hire is married at the time of her retirement, a second pension will be provided for\nher husband. A consulting actuary makes the following assumptions:\n(i) Each new recruit has a 0.4 probability of remaining with\nthe police force until retirement.\n(ii) Given that a new recruit reaches retirement with the police\nforce, the probability that she is not married at the time of\nretirement is 0.25.\n(iii) The events of different new hires reaching retirement and the\nevents of different new hires being married at retirement are all\nmutually independent events.\nCalculate the probability that the city will provide at most 90 pensions to the 100 new\nhires and their husbands.",
        "options": [
            "0.60",
            "0.67",
            "0.75",
            "0.93",
            "0.99"
        ],
        "answerLetter": "E",
        "answer": "0.99",
        "explanation": "Official solution: E\n\nFor a single recruit, the probability of 0 pensions is 0.6, of 1 pension is 0.4(0.25) = 0.1, and of 2\npensions is 0.4(0.75) = 0.3. The expected number of pensions is 0(0.6) + 1(0.1) + 2(0.3) = 0.7.\nThe second moment is 0(0.6) + 1(0.1) + 4(0.3) = 1.3. The variance is 1.3 – 0.49 = 0.81. For 100\nrecruits the mean is 70 and the variance is 81. The probability of providing at most 90 pensions\nis (with a continuity correction) the probability of being below 90.5. This is (90.5 – 70)/9 = 2.28\nstandard deviations above the mean. From the tables, this probability is 0.9887."
    },
    {
        "id": 72,
        "topic": "SOA Exam P Sample Question",
        "question": "In an analysis of healthcare data, ages have been rounded to the nearest multiple of 5\nyears. The difference between the true age and the rounded age is assumed to be\nuniformly distributed on the interval from - 2.5 years to 2.5 years. The healthcare data\nare based on a random sample of 48 people.\nCalculate the approximate probability that the mean of the rounded ages is within 0.25\nyears of the mean of the true ages.",
        "options": [
            "0.14",
            "0.38",
            "0.57",
            "0.77",
            "0.88"
        ],
        "answerLetter": "D",
        "answer": "0.77",
        "explanation": "Official solution: D\n\nFor one observation, the mean is 0 and the variance is 25/12 (for a uniform distribution the\nvariance is the square of the range divided by 12). For 48 observations, the average has a mean\nof 0 and a variance of (25/12)/48 = 0.0434. The standard deviation is 0.2083. 0.25 years is\n0.25/0.2083 = 1.2 standard deviations from the mean. From the normal tables the probability of\nbeing within 1.2 standard deviations is 0.8849 – (1 – 0.8849) = 0.7698."
    },
    {
        "id": 73,
        "topic": "SOA Exam P Sample Question",
        "question": "The waiting time for the first claim from a good driver and the waiting time for the first\nclaim from a bad driver are independent and follow exponential distributions with means\n6 years and 3 years, respectively.\nCalculate the probability that the first claim from a good driver will be filed within\n3 years and the first claim from a bad driver will be filed within 2 years.\n1\n− 2/3 − 1/2 − 7/6",
        "options": [
            "1 − e − e + e ( ) 18 1 − 7/6",
            "e 18 − 2/3 − 1/2 − 7/6",
            "1 − e − e + e − 2/3 − 1/2 − 1/3",
            "1 − e − e + e 1 1 1 − 2/3 − 1/2 − 7/6",
            "1 − e − e + e 3 6 18"
        ],
        "answerLetter": "C",
        "answer": "1 − e − e + e − 2/3 − 1/2 − 1/3",
        "explanation": "Official solution: C\n\n− 3/6 − 2/3\nFor a good driver, the probability is 1 − e and for a bad driver, the probability is 1 − e . The\n− 3/6 − 2/3 − 1/2 − 2/3 − 7/6\nprobability of both is the product, (1 − e )(1 − e ) = 1 − e − e + e ."
    },
    {
        "id": 74,
        "topic": "SOA Exam P Sample Question",
        "question": "A tour operator has a bus that can accommodate 20 tourists. The operator knows that\ntourists may not show up, so he sells 21 tickets. The probability that an individual tourist\nwill not show up is 0.02, independent of all other tourists.\nEach ticket costs 50, and is non-refundable if a tourist fails to show up. If a tourist shows\nup and a seat is not available, the tour operator has to pay 100 (ticket cost + 50 penalty) to\nthe tourist.\nCalculate the expected revenue of the tour operator.",
        "options": [
            "955",
            "962",
            "967",
            "976",
            "985"
        ],
        "answerLetter": "E",
        "answer": "985",
        "explanation": "Official solution: E\n\nThe tour operator collects 21x50 = 1050 for the 21 tickets sold. The probability that all 21\n21 21\n1 − 0.02 = 0.98 = 0.65\npassengers will show up is ( ) ( ) . Therefore, the tour operator’s expected\nrevenue is 1050 – 100(065) = 985."
    },
    {
        "id": 75,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy pays a total medical benefit consisting of two parts for each claim.\nLet X represent the part of the benefit that is paid to the surgeon, and let Y represent the\npart that is paid to the hospital. The variance of X is 5000, the variance of Y is 10,000,\nand the variance of the total benefit, X + Y , is 17,000.\nDue to increasing medical costs, the company that issues the policy decides to increase X\nby a flat amount of 100 per claim and to increase Y by 10% per claim.\nCalculate the variance of the total benefit after these revisions have been made.",
        "options": [
            "18,200",
            "18,800",
            "19,300",
            "19,520",
            "20,670"
        ],
        "answerLetter": "C",
        "answer": "19,300",
        "explanation": "Official solution: C\n\nFirst obtain the covariance of the two variables as (17,000 – 5,000 – 10,000)/2 = 1,000.\nThe requested variance is\nVar X ( + 100 + 1.1 ) Y = Var X ( ) + Var (1.1 ) Y + 2 Cov X ( ,1.1 ) Y\n= Var X ( ) + 1.21 Var Y ( ) + 2(1.1) Cov X Y ( , )\n= 5, 000 + 1.21(10, 000) + 2.2(1, 000) = 19,300."
    },
    {
        "id": 76,
        "topic": "SOA Exam P Sample Question",
        "question": "A car dealership sells 0, 1, or 2 luxury cars on any day. When selling a car, the dealer\nalso tries to persuade the customer to buy an extended warranty for the car. Let X denote\nthe number of luxury cars sold in a given day, and let Y denote the number of extended\nwarranties sold.\nP[ X = 0, Y = 0] = 1/6\nP[ X = 1, Y = 0] = 1/12\nP[ X = 1, Y = 1] = 1/6\nP[ X = 2, Y = 0] = 1/12\nP[ X = 2, Y = 1] = 1/3\nP[ X = 2, Y = 2] = 1/6\nCalculate the variance of X .",
        "options": [
            "0.47",
            "0.58",
            "0.83",
            "1.42",
            "2.58"
        ],
        "answerLetter": "B",
        "answer": "0.58",
        "explanation": "Official solution: B\n\nP ( X = 0) = 1/6\nP ( X = 1) = 1/12 + 1/6 = 3/12\nP ( X = 2) = 1/12 + 1/3 + 1/6 = 7/12 .\nE [ X ] = (0)(1/6) + (1)(3/12) + (2)(7/12) = 17/12\n2 2 2 2\nE [ X ] = (0) (1/6) + (1) (3/12) + (2) (7/12) = 31/12\n2\nVar[ X ] = 31/12 – (17/12) = 0.58."
    },
    {
        "id": 77,
        "topic": "SOA Exam P Sample Question",
        "question": "The profit for a new product is given by Z = 3 X – Y – 5. X and Y are independent random\nvariables with Var( X ) = 1 and Var( Y ) = 2.\nCalculate Var( Z ).",
        "options": [
            "1",
            "5",
            "7",
            "11",
            "16"
        ],
        "answerLetter": "D",
        "answer": "11",
        "explanation": "Official solution: D\n\nDue to the independence of X and Y\n2 2\nVar Z ( ) = Var (3 X − Y − 5) = 3 Var X ( ) + − ( 1) Var Y ( ) = 9(1) + 2 = 11."
    },
    {
        "id": 78,
        "topic": "SOA Exam P Sample Question",
        "question": "A company has two electric generators. The time until failure for each generator follows\nan exponential distribution with mean 10. The company will begin using the second\ngenerator immediately after the first one fails.\nCalculate the variance of the total time that the generators produce electricity.",
        "options": [
            "10",
            "20",
            "50",
            "100",
            "200"
        ],
        "answerLetter": "E",
        "answer": "200",
        "explanation": "Official solution: E\n\nLet X and Y denote the times that the generators can operate. Now the variance of an exponential\nrandom variable is the square of them mean, so each generator has a variance of 100. Because\nthey are independent, the variance of the sum is 200."
    },
    {
        "id": 79,
        "topic": "SOA Exam P Sample Question",
        "question": "In a small metropolitan area, annual losses due to storm, fire, and theft are assumed to be\nmutually independent, exponentially distributed random variables with respective means\n1.0, 1.5, and 2.4.\nCalculate the probability that the maximum of these losses exceeds 3.",
        "options": [
            "0.002",
            "0.050",
            "0.159",
            "0.287",
            "0.414"
        ],
        "answerLetter": "E",
        "answer": "0.414",
        "explanation": "Official solution: E\n\nLet S , F , and T be the losses due to storm, fire, and theft respectively. Let Y = max( S , F , T ). Then,\nP Y [ > 3] = 1 − P Y [ ≤ 3] = 1 − P [max( S F T , , ) ≤ 3] = 1 − P S [ ≤ 3] [ P F ≤ 3] [ P T ≤ 3]\n− 3/1 − 3/1.5 − 3/2.4\n= 1 − (1 − e )(1 − e )(1 − e ) = 0.414."
    },
    {
        "id": 80,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X denote the size of a surgical claim and let Y denote the size of the associated\nhospital claim. An actuary is using a model in which\n2 2\nE X ( ) = 5, E X ( ) = 27.4, E Y ( ) = 7, E Y ( ) = 51.4, Var X ( + Y ) = 8.\nC = X + Y\nLet denote the size of the combined claims before the application of a 20%\n1\nC\nsurcharge on the hospital portion of the claim, and let denote the size of the combined\n2\nclaims after the application of that surcharge.\nCov C ( , C )\nCalculate .\n1 2",
        "options": [
            "8.80",
            "9.60",
            "9.76",
            "11.52",
            "12.32"
        ],
        "answerLetter": "A",
        "answer": "8.80",
        "explanation": "Official solution: A\n\nFirst obtain Var( X ) = 27.4 – 25 = 2.4, Var( Y ) = 51.4 – 49 = 2.4, Cov( X , Y ) = (8 – 2.4 – 2.4)/2 =\n1.6. Then,\nCov C ( , C ) = Cov X ( + Y X , + 1.2 Y ) = Cov X ( , X ) + 1.2 Cov X Y ( , ) + Cov Y X ( , ) + 1.2 Cov Y Y ( , )\n1 2\n= Var X ( ) + 1.2 Var Y ( ) + 2.2 Cov X Y ( , )\n= 2.4 + 1.2(2.4) + 2.2(1.6) = 8.8."
    },
    {
        "id": 81,
        "topic": "SOA Exam P Sample Question",
        "question": "Two life insurance policies, each with a death benefit of 10,000 and a one-time premium\nof 500, are sold to a married couple, one for each person. The policies will expire at the\nend of the tenth year. The probability that only the wife will survive at least ten years is\n0.025, the probability that only the husband will survive at least ten years is 0.01, and the\nprobability that both of them will survive at least ten years is 0.96.\nCalculate the expected excess of premiums over claims, given that the husband survives\nat least ten years.",
        "options": [
            "350",
            "385",
            "397",
            "870",
            "897"
        ],
        "answerLetter": "E",
        "answer": "897",
        "explanation": "Official solution: E\n\nBecause the husband has survived, the only possible claim payment is to the wife. So we need\nthe probability that the wife dies within ten years given that the husband survives. The numerator\nof the conditional probability is the unique event that only the husband survives, with probability\n0.01. The denominator is the sum of two events, both survive (0.96) and only the husband\nsurvives (0.01). The conditional probability is 0.01/(0.96 + 0.01) = 1/97. The expected claim\npayment is 10,000/97 = 103 and the expected excess is 1,000 – 103 = 897."
    },
    {
        "id": 82,
        "topic": "SOA Exam P Sample Question",
        "question": "A diagnostic test for the presence of a disease has two possible outcomes: 1 for disease\npresent and 0 for disease not present. Let X denote the disease state (0 or 1) of a patient,\nand let Y denote the outcome of the diagnostic test. The joint probability function of X\nand Y is given by:\nP[ X = 0, Y = 0] = 0.800\nP[ X = 1, Y = 0] = 0.050\nP[ X = 0, Y = 1] = 0.025\nP[ X = 1, Y = 1] = 0.125\nVar( Y X = 1)\nCalculate .",
        "options": [
            "0.13",
            "0.15",
            "0.20",
            "0.51",
            "0.71"
        ],
        "answerLetter": "C",
        "answer": "0.20",
        "explanation": "Official solution: C\n\nP X ( = 1, Y = 0) P X ( = 1, Y = 0) 0.05\nP Y [ = 0 | X = 1] = = = = 0.286\nP X ( = 1) P X ( = 1, Y = 0) + P X ( = 1, Y = 1) 0.05 + 0.125\nP Y [ = 1| X = 1] = 1 − 0.286 = 0.714.\nThe conditional variable is Bernoulli with p = 0.714. The variance is (0.714)(0.286) = 0.204."
    },
    {
        "id": 83,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary determines that the annual number of tornadoes in counties P and Q are\njointly distributed as follows:\nAnnual number of\ntornadoes in county Q\n0 1 2 3\nAnnual number 0 0.12 0.06 0.05 0.02\nof tornadoes 1 0.13 0.15 0.12 0.03\nin county P 2 0.05 0.15 0.10 0.02\nCalculate the conditional variance of the annual number of tornadoes in county Q, given\nthat there are no tornadoes in county P.",
        "options": [
            "0.51",
            "0.84",
            "0.88",
            "0.99",
            "1.76"
        ],
        "answerLetter": "D",
        "answer": "0.99",
        "explanation": "Official solution: D\n\nWith no tornadoes in County P the probabilities of 0, 1, 2, and 3 tornadoes in County Q are\n12/25, 6/25, 5/25, and 2/25 respectively.\nThe mean is (0 + 6 + 10 + 6)/25 = 22/25.\nThe second moment is (0 + 6 + 20 + 18)/25 = 44/25.\n2\nThe variance is 44/25 – (22/25) = 0.9856."
    },
    {
        "id": 84,
        "topic": "SOA Exam P Sample Question",
        "question": "You are given the following information about N , the annual number of claims for a\nrandomly selected insured:\n1 1 1\n.\nP N ( = 0) = , P N ( = 1) = , P N ( > 1) =\n2 3 6\nLet S denote the total annual claim amount for an insured. When N = 1, S is\nexponentially distributed with mean 5. When N > 1, S is exponentially distributed with\nmean 8.\nCalculate P(4 < S < 8).",
        "options": [
            "0.04",
            "0.08",
            "0.12",
            "0.24",
            "0.25"
        ],
        "answerLetter": "C",
        "answer": "0.12",
        "explanation": "Official solution: C\n\nFrom the Law of Total Probability:\nP [4 < S < 8] = P [4 < S < 8 | N = 1] [ P N = 1] + P [4 < S < 8 | N > 1] [ P N > 1]\n− 4/5 − 8/5 − 4/8 − 8/8\n= ( e − e )(1/ 3) + ( e − e )(1/ 6) = 0.122."
    },
    {
        "id": 85,
        "topic": "SOA Exam P Sample Question",
        "question": "Under an insurance policy, a maximum of five claims may be filed per year by a\npolicyholder. Let be the probability that a policyholder files n claims during a\np n ( )\ngiven year, where n = 0,1,2,3,4,5. An actuary makes the following observations:\ni) .\np n ( ) ≥ p n ( + 1) for n = 0, 1, 2, 3, 4\nii) The difference between and is the same for n = 0,1,2,3,4.\np n ( ) p n ( + 1)\niii) Exactly 40% of policyholders file fewer than two claims during a given\nyear.\nCalculate the probability that a random policyholder will file more than three claims\nduring a given year.",
        "options": [
            "0.14",
            "0.16",
            "0.27",
            "0.29",
            "0.33"
        ],
        "answerLetter": "C",
        "answer": "0.27",
        "explanation": "Official solution: C\n\nDue to the equal spacing of probabilities, p = p − nc for c = 1, 2, 3, 4, 5. Also,\nn 0\n0.4 = p + p = p + p − c = 2 p − c . Because the probabilities must sum to 1,\n0 1 0 0 0\n1 = p + p − c + p − 2 c + p − 3 c + p − 4 c + p − 5 c = 6 p − 15 . c This provides two equations in\n0 0 0 0 0 0 0\ntwo unknowns. Multiplying the first equation by 15 gives 6 = 30 p − 15 . c Subtracting the second\n0\nequation gives 5 = 24 p ⇒ p = 5 / 24 . Inserting this in the first equation gives c = 1/60. The\n0 0\nrequested probability is p + p = 5 / 24 − 4 / 60 + 5 / 24 − 5 / 60 = 32 /120 = 0.267.\n4 5"
    },
    {
        "id": 86,
        "topic": "SOA Exam P Sample Question",
        "question": "The amounts of automobile losses reported to an insurance company are mutually\nindependent, and each loss is uniformly distributed between 0 and 20,000. The company\ncovers each such loss subject to a deductible of 5,000.\nCalculate the probability that the total payout on 200 reported losses is between\n1,000,000 and 1,200,000.",
        "options": [
            "0.0803",
            "0.1051",
            "0.1799",
            "0.8201",
            "0.8575"
        ],
        "answerLetter": "D",
        "answer": "0.8201",
        "explanation": "Official solution: D\n\nBecause the number of payouts (including payouts of zero when the loss is below the deductible)\nis large, apply the central limit theorem and assume the total payout S is normal. For one loss, the\nmean, second moment, and variance of the payout are\n20,000\n2\n5,000 20,000\n1 1 ( x − 5, 000)\n0 dx + ( x − 5, 000) = 0 + = 5, 625\n∫ ∫\n0 5,000\n20, 000 20, 000 40, 000\n5,000\n20,000\n3\n5,000 20,000\n1 1 ( x − 5, 000)\n2 2\n0 dx + ( x − 5, 000) = 0 + = 56, 250, 000\n∫ ∫\n0 5,000\n20, 000 20, 000 60, 000\n5,000\n2\n56, 250, 000 − 5, 625 = 24, 609,375.\nFor 200 losses the mean, variance, and standard deviation are 1,125,000, 4,921,875,000, and\n70,156. 1,000,000 is 125,000/70,156 = 1.7817 standard deviations below the mean and\n1,200,000 is 75,000/70,156 = 1.0690 standard deviations above the mean. From the standard\nnormal tables, the probability of being between these values is 0.8575 – (1 – 0.9626) = 0.8201."
    },
    {
        "id": 87,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance agent offers his clients auto insurance, homeowners insurance and renters\ninsurance. The purchase of homeowners insurance and the purchase of renters insurance\nare mutually exclusive. The profile of the agent’s clients is as follows:\ni) 17% of the clients have none of these three products.\nii) 64% of the clients have auto insurance.\niii) Twice as many of the clients have homeowners insurance as have renters insurance.\niv) 35% of the clients have two of these three products.\nv) 11% of the clients have homeowners insurance, but not auto insurance.\nCalculate the percentage of the agent’s clients that have both auto and renters insurance.",
        "options": [
            "7%",
            "10%",
            "16%",
            "25%",
            "28%"
        ],
        "answerLetter": "B",
        "answer": "10%",
        "explanation": "Official solution: B\n\nLet H be the percentage of clients with homeowners insurance and R be the percentage of clients\nwith renters insurance.\nBecause 36% of clients do not have auto insurance and none have both homeowners and renters\ninsurance, we calculate that 8% (36% – 17% – 11%) must have renters insurance, but not auto\ninsurance.\n(H – 11)% have both homeowners and auto insurance, (R – 8)% have both renters and auto\ninsurance, and none have both homeowners and renters insurance, so (H + R – 19)% must equal\n35%. Because H = 2R, R must be 18%, which implies that 10% have both renters and auto\ninsurance."
    },
    {
        "id": 88,
        "topic": "SOA Exam P Sample Question",
        "question": "The cumulative distribution function for health care costs experienced by a policyholder\nis modeled by the function\nx\n−\n’\n100\n’ −\n1 e , x > 0\nF x ( ) = ’\n’\n0, otherwise.\n’\nThe policy has a deductible of 20. An insurer reimburses the policyholder for 100% of\nhealth care costs between 20 and 120. Health care costs above 120 are reimbursed at\n50%.\nLet G be the cumulative distribution function of reimbursements given that the\nreimbursement is positive.\nCalculate G (115).",
        "options": [
            "0.683",
            "0.727",
            "0.741",
            "0.757",
            "0.777 N N"
        ],
        "answerLetter": "B",
        "answer": "0.727",
        "explanation": "Official solution: B\n\nLet Y be the reimbursement. Then, G (115) = P [ Y < 115 | X > 20]. For Y to be 115, the costs must\nbe above 120 (up to 120 accounts for a reimbursement of 100). The extra 15 requires 30 in\nadditional costs. Therefore, we need\n− 150/100 − 20/100\nP X [ ≤ 150] − P X [ ≤ 20] 1 − e − 1 + e\nP X [ ≤ 150 | X > 20] = =\n− 20/100\nP X [ > 20] 1 − 1 + e\n− 1.5 − 0.2\n− e +\n− 1.3\n= = 1 − e = 0.727.\n− 0,2\ne"
    },
    {
        "id": 89,
        "topic": "SOA Exam P Sample Question",
        "question": "Let and represent the numbers of claims submitted to a life insurance company\n1 2\nN N\nin April and May, respectively. The joint probability function of and is\n1 2\nn − 1\n1\n’\nn − 1\n3 1\n’ ’ 2\n− n − n\n1 1\ne 1 − e , n = 1, 2,3,..., n = 1, 2,3,...\n’\n( )\n1 2\n’ ’\np n ( , n ) = ’\n4 4\n1 2 ’ ’\n’\n0, otherwise.\n’\nCalculate the expected number of claims that will be submitted to the company in May,\ngiven that exactly 2 claims were submitted in April.\n3\n2",
        "options": [
            "e − 1 ( ) 16 3 2",
            "e 16 3 e",
            "4 − e 2",
            "e − 1 2",
            "e"
        ],
        "answerLetter": "E",
        "answer": "e",
        "explanation": "Official solution: E\n\nThe conditional probability function given 2 claims in April is\n− 2\n∞ 3 1 3 e 1 3\n− 2 − 2 n − 1\n2\np (2) = e (1 − e ) = =\nN ∑\n− 2\n1 n = 1\n2\n4 4 16 1 − (1 − e ) 16\np (2, n ) 3 1 16\n− 2 − 2 n − 1 − 2 − 2 n − 1\n2\n2 2\np n ( | N = 2) = = e (1 − e ) = e (1 − e ) .\n2 1\np (2) 4 4 3\nN\n1\n− 2 2\nThis can be recognized as a geometric probability function and so the mean is 1/ e = e ."
    },
    {
        "id": 90,
        "topic": "SOA Exam P Sample Question",
        "question": "A store has 80 modems in its inventory, 30 coming from Source A and the remainder\nfrom Source B. Of the modems in inventory from Source A, 20% are defective. Of the\nmodems in inventory from Source B, 8% are defective.\nCalculate the probability that exactly two out of a sample of five modems selected\nwithout replacement from the store’s inventory are defective.",
        "options": [
            "0.010",
            "0.078",
            "0.102",
            "0.105",
            "0.125 th"
        ],
        "answerLetter": "C",
        "answer": "0.102",
        "explanation": "Official solution: C\n\nThe number of defective modems is 20% x 30 + 8% x 50 = 10.\n10 70\n’ ’ ’ ’\n’ ’ ’ ’\n’ ’ ’ ’\n2 3\n’ ’ ’ ’\nThe probability that exactly two of a random sample of five are defective is = 0 . 102 .\n80\n’ ’\n’ ’\n’ ’\n5\n’ ’"
    },
    {
        "id": 91,
        "topic": "SOA Exam P Sample Question",
        "question": "A man purchases a life insurance policy on his 40 birthday. The policy will pay 5000 if\nth\nhe dies before his 50 birthday and will pay 0 otherwise. The length of lifetime, in years\nfrom birth, of a male born the same year as the insured has the cumulative distribution\nfunction\n0, t ≤ 0\n’\n’\nt\nF t ( ) =\n’ ’\n’ 1 − 1.1\n1 − exp , t > 0.\n’ ’\n’\n1000\n’ ’\n’\nCalculate the expected payment under this policy.",
        "options": [
            "333",
            "348",
            "421",
            "549",
            "574"
        ],
        "answerLetter": "B",
        "answer": "348",
        "explanation": "Official solution: B\n\nP (40 year old man dies before age 50) = P( T < 50 | T > 40)\nPr(40 < T < 50) F (50) − F (40)\n= =\nPr( T > 40) 1 − F (40)\n50 40 40 50\n’ 1 − 1.1 ’ ’ 1 − 1.1 ’ ’ 1 − 1.1 ’ ’ 1 − 1.1 ’\n1 − exp − 1 + exp exp − exp\n’ ’ ’ ’ ’ ’ ’ ’\n1000 1000 1000 1000\n’ ’ ’ ’ ’ ’ ’ ’\n= =\n40 40\n’ ’ ’ ’\n1 − 1.1 1 − 1.1\n1 − 1 + exp exp\n’ ’ ’ ’\n1000 1000\n’ ’ ’ ’\n0.9567 − 0.8901\n= = 0.0696\n0.9567\nExpected Benefit = 5000(0.0696) = 348."
    },
    {
        "id": 92,
        "topic": "SOA Exam P Sample Question",
        "question": "A mattress store sells only king, queen and twin-size mattresses. Sales records at the\nstore indicate that the number of queen-size mattresses sold is one-fourth the number of\nking and twin-size mattresses combined. Records also indicate that three times as many\nking-size mattresses are sold as twin-size mattresses.\nCalculate the probability that the next mattress sold is either king or queen-size.",
        "options": [
            "0.12",
            "0.15",
            "0.80",
            "0.85",
            "0.95"
        ],
        "answerLetter": "C",
        "answer": "0.80",
        "explanation": "Official solution: C\n\nLetting t denote the relative frequency with which twin-sized mattresses are sold, we have that\nthe relative frequency with which king-sized mattresses are sold is 3t and the relative frequency\nwith which queen-sized mattresses are sold is (3t+t)/4, or t. Thus, t = 0.2 since t + 3t + t = 1. The\nprobability we seek is 3t + t = 0.80."
    },
    {
        "id": 93,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of workplace injuries, N , occurring in a factory on any given day is Poisson\ndistributed with mean λ. The parameter λ is a random variable that is determined by the\nlevel of activity in the factory, and is uniformly distributed on the interval [0, 3].\nCalculate Var( N ).",
        "options": [
            "λ",
            "2 λ",
            "0.75",
            "1.50",
            "2.25"
        ],
        "answerLetter": "E",
        "answer": "2.25",
        "explanation": "Official solution: E\n\nVar N ( ) = E Var N [ ( | λ )] + Var E N [ ( | λ )] = E [ λ ] + Var ( λ ) = 1.5 + 0.75 = 2.25. The variance of a\n2\nuniform random variable is the square of the range divided by 12, in this case 3 /12 = 0.75."
    },
    {
        "id": 94,
        "topic": "SOA Exam P Sample Question",
        "question": "A fair die is rolled repeatedly. Let X be the number of rolls needed to obtain a 5 and Y\nthe number of rolls needed to obtain a 6.\nCalculate E( X | Y = 2).",
        "options": [
            "5.0",
            "5.2",
            "6.0",
            "6.6",
            "6.8"
        ],
        "answerLetter": "D",
        "answer": "6.6",
        "explanation": "Official solution: D\n\nX follows a geometric distribution with p = 1/6 and Y = 2 implies the first roll is not a 6 and the\nsecond roll is a 6. This means a 5 is obtained for the first time on the first roll (probability = 0.2)\nor a 5 is obtained for the first time on the third or later roll (probability = 0.8).\n1\nE X [ | X ≥ 3] = + 2 = 6 + 2 = 8. , The expected value is 0.2(1) + 0.8(8) = 6.6.\np"
    },
    {
        "id": 95,
        "topic": "SOA Exam P Sample Question",
        "question": "A driver and a passenger are in a car accident. Each of them independently has\nprobability 0.3 of being hospitalized. When a hospitalization occurs, the loss is\nuniformly distributed on [0, 1]. When two hospitalizations occur, the losses are\nindependent.\nCalculate the expected number of people in the car who are hospitalized, given that the\ntotal loss due to hospitalizations from the accident is less than 1.",
        "options": [
            "0.510",
            "0.534",
            "0.600",
            "0.628",
            "0.800"
        ],
        "answerLetter": "B",
        "answer": "0.534",
        "explanation": "Official solution: B\n\nThe unconditional probabilities for the number of people in the car who are hospitalized are 0.49,\n0.42 and 0.09 for 0, 1 and 2, respectively. If the number of people hospitalized is 0 or 1, then the\ntotal loss will be less than 1. However, if two people are hospitalized, the probability that the\ntotal loss will be less than 1 is 0.5. Thus, the expected number of people in the car who are\nhospitalized, given that the total loss due to hospitalizations from the accident is less than 1 is\n0.49 0.42 0.09 0.5 ⋅\n(0) + (1) + (2) = 0.534\n0.49 + 0.42 + 0.09 0.5 ⋅ 0.49 + 0.42 + 0.09 0.5 ⋅ 0.49 + 0.42 + 0.09 0.5 ⋅"
    },
    {
        "id": 96,
        "topic": "SOA Exam P Sample Question",
        "question": "Each time a hurricane arrives, a new home has a 0.4 probability of experiencing damage.\nThe occurrences of damage in different hurricanes are mutually independent.\nCalculate the mode of the number of hurricanes it takes for the home to experience\ndamage from two hurricanes.",
        "options": [
            "2",
            "3",
            "4",
            "5",
            "6"
        ],
        "answerLetter": "B",
        "answer": "3",
        "explanation": "Official solution: B\n\nLet X equal the number of hurricanes it takes for two losses to occur. Then X is negative\nbinomial with “success” probability p = 0.4 and r = 2 “successes” needed.\nn − 1 n − 1\n’ ’ ’ ’\nr n − r 2 n − 2 2 n − 2\nP X [ = n ] = p (1 − p ) = (0.4) (1 − 0.4) = ( n − 1)(0.4) (0.6)\n, for n ≥ 2.\n’ ’ ’ ’\nr − 1 2 − 1\n’ ’ ’ ’\nWe need to maximize P [ X = n ]. Note that the ratio\n2 n − 1\nP X [ = n + 1] n (0.4) (0.6) n\n= = (0.6)\n.\n2 n − 2\nP X [ = n ] ( n − 1)(0.4) (0.6) n − 1\nThis ratio of “consecutive” probabilities is greater than 1 when n = 2 and less than 1 when n ≥ 3.\nThus, P [ X = n ] is maximized at n = 3; the mode is 3. Alternatively, the first few probabilities\ncould be calculated."
    },
    {
        "id": 97,
        "topic": "SOA Exam P Sample Question",
        "question": "Thirty items are arranged in a 6-by-5 array as shown.\nA A A A A\n1 2 3 4 5\nA A A A A\n6 7 8 9 10\nA A A A A\n11 12 13 14 15\nA A A A A\n16 17 18 19 20\nA A A A A\n21 22 23 24 25\nA A A A A\n26 27 28 29 30\nCalculate the number of ways to form a set of three distinct items such that no two of the\nselected items are in the same row or same column.",
        "options": [
            "200",
            "760",
            "1200",
            "4560",
            "7200"
        ],
        "answerLetter": "C",
        "answer": "1200",
        "explanation": "Official solution: C\n\nThere are 10 (5 choose 3) ways to select the three columns in which the three items will appear.\nThe row of the rightmost selected item can be chosen in any of six ways, the row of the leftmost\nselected item can then be chosen in any of five ways, and the row of the middle selected item can\nthen be chosen in any of four ways. The answer is thus (10)(6)(5)(4) = 1200. Alternatively, there\nare 30 ways to select the first item. Because there are 10 squares in the row or column of the first\nselected item, there are 30 − 10 = 20 ways to select the second item. Because there are 18\nsquares in the rows or columns of the first and second selected items, there are 30 − 18 = 12\nways to select the third item. The number of permutations of three qualifying items is\n(30)(20)(12). The number of combinations is thus (30)(20)(12)/3! = 1200."
    },
    {
        "id": 98,
        "topic": "SOA Exam P Sample Question",
        "question": "An auto insurance company is implementing a new bonus system. In each month, if a\npolicyholder does not have an accident, he or she will receive a cash-back bonus of 5\nfrom the insurer.\nAmong the 1,000 policyholders of the auto insurance company, 400 are classified as low-\nrisk drivers and 600 are classified as high-risk drivers.\nIn each month, the probability of zero accidents for high-risk drivers is 0.80 and the\nprobability of zero accidents for low-risk drivers is 0.90.\nCalculate the expected bonus payment from the insurer to the 1000 policyholders in one\nyear.",
        "options": [
            "48,000",
            "50,400",
            "51,000",
            "54,000",
            "60,000"
        ],
        "answerLetter": "B",
        "answer": "50,400",
        "explanation": "Official solution: B\n\nThe expected bonus for a high-risk driver is 0.8(12)(5) = 48.\nThe expected bonus for a low-risk driver is 0.9(12)(5) = 54.\nThe expected bonus payment from the insurer is 600(48) + 400(54) = 50,400."
    },
    {
        "id": 99,
        "topic": "SOA Exam P Sample Question",
        "question": "The probability that a member of a certain class of homeowners with liability and\nproperty coverage will file a liability claim is 0.04, and the probability that a member of\nthis class will file a property claim is 0.10. The probability that a member of this class\nwill file a liability claim but not a property claim is 0.01.\nCalculate the probability that a randomly selected member of this class of homeowners\nwill not file a claim of either type.",
        "options": [
            "0.850",
            "0.860",
            "0.864",
            "0.870",
            "0.890"
        ],
        "answerLetter": "E",
        "answer": "0.890",
        "explanation": "Official solution: E\n\nLiability but not property = 0.01 (given)\nLiability and property = 0.04 – 0.01 = 0.03.\nProperty but not liability = 0.10 – 0.03 = 0.07\nProbability of neither = 1 – 0.01 – 0.03 – 0.07 = 0.89"
    },
    {
        "id": 100,
        "topic": "SOA Exam P Sample Question",
        "question": "A survey of 100 TV viewers revealed that over the last year:\ni) 34 watched CBS.\nii) 15 watched NBC.\niii) 10 watched ABC.\niv) 7 watched CBS and NBC.\nv) 6 watched CBS and ABC.\nvi) 5 watched NBC and ABC.\nvii) 4 watched CBS, NBC, and ABC.\nviii) 18 watched HGTV, and of these, none watched CBS, NBC, or ABC.\nCalculate how many of the 100 TV viewers did not watch any of the four channels (CBS,\nNBC, ABC or HGTV).",
        "options": [
            "1",
            "37",
            "45",
            "55",
            "82"
        ],
        "answerLetter": "B",
        "answer": "37",
        "explanation": "Official solution: B\n\nC = the set of TV watchers who watched CBS over the last year\nN = the set of TV watchers who watched NBC over the last year\nA = the set of TV watchers who watched ABC over the last year\nH = the set of TV watchers who watched HGTV over the last year\nThe number of TV watchers in the set C ∪ N ∪ A is 34 + 15 + 10 – 7 – 6 – 5 + 4 = 45.\nBecause C ∪ N ∪ A and H are mutually exclusive, the number of TV watchers in the set\nC ∪ N ∪ A ∪ H is 45 + 18 = 63.\nThe number of TV watchers in the complement of C ∪ N ∪ A ∪ H is thus 100 – 63 = 37."
    },
    {
        "id": 101,
        "topic": "SOA Exam P Sample Question",
        "question": "The amount of a claim that a car insurance company pays out follows an exponential\ndistribution. By imposing a deductible of d , the insurance company reduces the expected\nclaim payment by 10%.\nCalculate the percentage reduction on the variance of the claim payment.",
        "options": [
            "1%",
            "5%",
            "10%",
            "20%",
            "25%"
        ],
        "answerLetter": "A",
        "answer": "1%",
        "explanation": "Official solution: A\n\nLet X denote the amount of a claim before application of the deductible. Let Y denote the amount\nof a claim payment after application of the deductible. Let λ be the mean of X , which because X\n2 2 2\nis exponential, implies that λ is the variance of X and E X ( ) = 2 λ .\nBy the memoryless property of the exponential distribution, the conditional distribution of the\nportion of a claim above the deductible given that the claim exceeds the deductible is an\nexponential distribution with mean λ . Given that E Y ( ) = 0.9 λ , this implies that the probability of\n2 2 2\na claim exceeding the deductible is 0.9 and thus E Y ( ) = 0.9(2 λ ) = 1.8 λ . Then,\n2 2 2\nVar( Y ) = 1.8 λ − (0.9 λ ) = 0.99 λ . The percentage reduction is 1%."
    },
    {
        "id": 102,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of hurricanes that will hit a certain house in the next ten years is Poisson\ndistributed with mean 4.\nEach hurricane results in a loss that is exponentially distributed with mean 1000. Losses\nare mutually independent and independent of the number of hurricanes.\nCalculate the variance of the total loss due to hurricanes hitting this house in the next ten\nyears.",
        "options": [
            "4,000,000",
            "4,004,000",
            "8,000,000",
            "16,000,000",
            "20,000,000"
        ],
        "answerLetter": "C",
        "answer": "8,000,000",
        "explanation": "Official solution: C\n\nLet N denote the number of hurricanes, which is Poisson distributed with mean and variance 4.\nth\nLet X denote the loss due to the i hurricane, which is exponentially distributed with mean\ni\n2\n1,000 and therefore variance (1,000) = 1,000,000.\nLet X denote the total loss due to the N hurricanes.\nThis problem can be solved using the conditional variance formula. Note that independence is\nused to write the variance of a sum as the sum of the variances.\nVar( X ) = Var E X [ ( | N )] + E Var X [ ( | N )]\n= Var E X [ ( + ’ + X )] + E Var X [ ( + ’ + X )]\n1 N 1 N\n= Var NE X [ ( )] + E NVar X [ ( )]\n1 1\n= Var (1, 000 N ) + E (1, 000, 000 N )\n2\n= 1, 000 Var N ( ) + 1, 000, 000 E N ( )\n= 1, 000, 000(4) + 1, 000, 000(4) = 8, 000, 000."
    },
    {
        "id": 103,
        "topic": "SOA Exam P Sample Question",
        "question": "A motorist makes three driving errors, each independently resulting in an accident with\nprobability 0.25.\nEach accident results in a loss that is exponentially distributed with mean 0.80. Losses\nare mutually independent and independent of the number of accidents.\nThe motorist’s insurer reimburses 70% of each loss due to an accident.\nCalculate the variance of the total unreimbursed loss the motorist experiences due to\naccidents resulting from these driving errors.",
        "options": [
            "0.0432",
            "0.0756",
            "0.1782",
            "0.2520",
            "0.4116"
        ],
        "answerLetter": "B",
        "answer": "0.0756",
        "explanation": "Official solution: B\n\nLet N denote the number of accidents, which is binomial with parameters 3 and 0.25 and thus has\nmean 3(0.25) = 0.75 and variance 3(0.25)(0.75) = 0.5625.\nth\nLet X denote the unreimbursed loss due to the i accident, which is 0.3 times an exponentially\ni\n2\ndistributed random variable with mean 0.8 and therefore variance (0.8) = 0.64. Thus, X has\ni\n2\nmean 0.8(0.3) = 0.24 and variance 0.64(0.3) = 0.0576 .\nLet X denote the total unreimbursed loss due to the N accidents.\nThis problem can be solved using the conditional variance formula. Note that independence is\nused to write the variance of a sum as the sum of the variances.\nVar( X ) = Var E X [ ( | N )] + E Var X [ ( | N )]\n= Var E X [ ( + ’ + X )] + E Var X [ ( + ’ + X )]\n1 N 1 N\n= Var NE X [ ( )] + E NVar X [ ( )]\n1 1\n= Var (0.24 N ) + E (0.0576 N )\n2\n= 0.24 Var N ( ) + 0.0576 E N ( )\n= 0.0576(0.5625) + 0.0576(0.75) = 0.0756."
    },
    {
        "id": 104,
        "topic": "SOA Exam P Sample Question",
        "question": "An automobile insurance company issues a one-year policy with a deductible of 500.\nThe probability is 0.8 that the insured automobile has no accident and 0.0 that the\nautomobile has more than one accident. If there is an accident, the loss before\napplication of the deductible is exponentially distributed with mean 3000.\nth\nCalculate the 95 percentile of the insurance company payout on this policy.",
        "options": [
            "3466",
            "3659",
            "4159",
            "8487",
            "8987"
        ],
        "answerLetter": "B",
        "answer": "3659",
        "explanation": "Official solution: B\n\nth th\nThe 95 percentile is in the range when an accident occurs. It is the 75 percentile of the payout,\nth\ngiven that an accident occurs, because (0.95 − 0.80)/(1 − 0.80) = 0.75. Letting x be the 75\nx\n−\n3000\npercentile of the given exponential distribution, F x ( ) = 1 − e = 0.75 , so x = 4159. Subtracting\nth\nthe deductible of 500 gives 3659 as the (unconditional) 95 percentile of the insurance company\npayout."
    },
    {
        "id": 105,
        "topic": "SOA Exam P Sample Question",
        "question": "From 27 pieces of luggage, an airline luggage handler damages a random sample of four.\nThe probability that exactly one of the damaged pieces of luggage is insured is twice the\nprobability that none of the damaged pieces are insured.\nCalculate the probability that exactly two of the four damaged pieces are insured.",
        "options": [
            "0.06",
            "0.13",
            "0.27",
            "0.30",
            "0.31"
        ],
        "answerLetter": "C",
        "answer": "0.27",
        "explanation": "Official solution: C\n\nThe ratio of the probability that one of the damaged pieces is insured to the probability that none\nof the damaged pieces are insured is\nr 27 − r\n’ ’’ ’\n’ ’’ ’\n1 3\n’ ’’ ’\n27\n’ ’\n’ ’\n4\n4 r\n’ ’\n= ,\nr 27 − r 24 − r\n’ ’’ ’\n’ ’’ ’\n0 4\n’ ’’ ’\n27\n’ ’\n’ ’\n4\n’ ’\nwhere r is the total number of pieces insured. Setting this ratio equal to 2 and solving yields r =\n8.\nThe probability that two of the damaged pieces are insured is\nr 27 − r 8 19\n’ ’’ ’ ’ ’’ ’\n’ ’’ ’ ’ ’’ ’\n2 2 2 2 (8)(7)(19)(18)(4)(3)(2)(1) 266\n’ ’’ ’ ’ ’’ ’\n= = = = 0.27 .\n27 27 (27)(26)(25)(24)(2)(1)(2)(1) 975\n’ ’ ’ ’\n’ ’ ’ ’\n4 4\n’ ’ ’ ’"
    },
    {
        "id": 106,
        "topic": "SOA Exam P Sample Question",
        "question": "Automobile policies are separated into two groups: low-risk and high-risk. Actuary\nRahul examines low-risk policies, continuing until a policy with a claim is found and\nthen stopping. Actuary Toby follows the same procedure with high-risk policies. Each\nlow-risk policy has a 10% probability of having a claim. Each high-risk policy has a\n20% probability of having a claim. The claim statuses of polices are mutually\nindependent.\nCalculate the probability that Actuary Rahul examines fewer policies than Actuary Toby.",
        "options": [
            "0.2857",
            "0.3214",
            "0.3333",
            "0.3571",
            "0.4000"
        ],
        "answerLetter": "A",
        "answer": "0.2857",
        "explanation": "Official solution: A\n\nn − 1\nThe probability that Rahul examines exactly n policies is 0.1(0.9) . The probability that Toby\nn\nexamines more than n policies is 0.8 . The required probability is thus\n∞ ∞\n1 0.72\nn − 1 n n\n0.1(0.9) (0.8) = 0.72 = = 0.2857\n.\n∑ ∑\n9 9 1 − 0.72\n( )\nn = 1 n = 1\nAn alternative solution begins by imagining Rahul and Toby examine policies simultaneously\nuntil at least one of the finds a claim. At each examination there are four possible outcomes:\n1. Both find a claim. The probability is 0.02.\n2. Rahul finds a claim and Toby does not. The probability is 0.08.\n3. Toby finds a claim and Rahul does not. The probability is 0.18\n4. Neither finds a claim. The probability is 0.72.\nConditioning on the examination at which the process ends, the probability that it ends with\nRahul being the first to find a claim (and hence needing to examine fewer policies) is 0.08/(0.02\n+ 0.08 + 0.18) = 8/28 = 0.2857."
    },
    {
        "id": 107,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X represent the number of customers arriving during the morning hours and let Y\nrepresent the number of customers arriving during the afternoon hours at a diner.\nYou are given:\ni) X and Y are Poisson distributed.\nii) The first moment of X is less than the first moment of Y by 8.\niii) The second moment of X is 60% of the second moment of Y .\nCalculate the variance of Y .",
        "options": [
            "4",
            "12",
            "16",
            "27",
            "35"
        ],
        "answerLetter": "E",
        "answer": "35",
        "explanation": "Official solution: E\n\nLet a be the mean and variance of X and b be the mean and variance of Y . The two facts are a = b\n2 2\n– 8 and a + a = 0.6( b + b ). Substituting the first equation into the second gives\n2 2\nb − 8 + ( b − 8) = 0.6 b + 0.6 b\n2 2\nb − 8 + b − 16 b + 64 = 0.6 b + 0.6 b\n2\n0.4 b − 15.6 b + 56 = 0\n2\n15.6 ± 15.6 − 4(0.4)(56) 15.6 ± 12.4\nb = = = 4 or 35.\n2(0.4) 0.8\nAt b = 4, a is negative, so the answer is 35."
    },
    {
        "id": 108,
        "topic": "SOA Exam P Sample Question",
        "question": "In a certain game of chance, a square board with area 1 is colored with sectors of either\nred or blue. A player, who cannot see the board, must specify a point on the board by\ngiving an x -coordinate and a y -coordinate. The player wins the game if the specified\npoint is in a blue sector. The game can be arranged with any number of red sectors, and\nthe red sectors are designed so that\ni\n9 th\n’ ’\nR i\n, where is the area of the red sector.\nR =\ni\ni ’ ’\n20\n’ ’\nCalculate the minimum number of red sectors that makes the chance of a player winning\nless than 20%.",
        "options": [
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        "answerLetter": "C",
        "answer": "5",
        "explanation": "Official solution: C\n\nSuppose there are N red sectors. Let w be the probability of a player winning the game.\nThen, w = the probability of a player missing all the red sectors and\n2 N\n’ ’\n9 9 9\n’ ’ ’ ’\nw = 1 − + + ’ +\n’ ’\n’ ’ ’ ’\n20 20 20\n’ ’ ’ ’\n’ ’\n’ ’\nUsing the geometric series formula,\nN + 1 N\n9 9 9\n’ ’ ’ ’\n− 1 −\nN\n’ ’ ’ ’\n20 20 9 20 2 9 9\n’ ’\n’ ’ ’ ’\nw = 1 − = 1 − = +\n’ ’\n9 9\n20 11 11 20\n’ ’\n1 − 1 −\n20 20\nThus we need\nN\n2 9 9\n’ ’\n0.2 > w = +\n’ ’\n11 11 20\n’ ’\nN\n9\n’ ’\n2.2 > 2 + 9\n’ ’\n20\n’ ’\nN\n9\n’ ’\n0.2 > 9\n’ ’\n20\n’ ’\nN\n2 9\n’ ’\n>\n’ ’\n90 20\n’ ’\nN\n20\n’ ’\n> 45\n’ ’\n9\n’ ’\nln(45)\nN > ≈ 4.767\nln(20 / 9)\nThus N must be the first integer greater than 4.767, or 5."
    },
    {
        "id": 109,
        "topic": "SOA Exam P Sample Question",
        "question": "Automobile claim amounts are modeled by a uniform distribution on the interval [0,\n10,000]. Actuary A reports X , the claim amount divided by 1000. Actuary B reports Y ,\nwhich is X rounded to the nearest integer from 0 to 10.\nth th\nCalculate the absolute value of the difference between the 4 moment of X and the 4\nmoment of Y .",
        "options": [
            "0",
            "33",
            "296",
            "303",
            "533 x + 1 (0.5) for x = 0,1, 2, ’ ."
        ],
        "answerLetter": "B",
        "answer": "33",
        "explanation": "Official solution: B\n\nThe fourth moment of X is\n10\n4 5\n10\nx x\ndx = = 2000.\n∫\n0\n10 50\n0\nThe Y probabilities are 1/20 for Y = 0 and 10, and 1/10 for Y = 1,2,…,9.\n4 4 4 4 4\nE Y [ ] = (1 + 2 + ’ + 9 ) /10 + 10 / 20 = 2033.3.\nThe absolute value of the difference is 33.3."
    },
    {
        "id": 110,
        "topic": "SOA Exam P Sample Question",
        "question": "The probability of x losses occurring in year 1 is\nThe probability of y losses in year 2 given x losses in year 1 is given by the table:\nNumber of Number of losses in year 2 ( y )\nlosses in given x losses in year 1\nyear 1 ( x) 0 1 2 3 4+\n0 0.60 0.25 0.05 0.05 0.05\n1 0.45 0.30 0.10 0.10 0.05\n2 0.25 0.30 0.20 0.20 0.05\n3 0.15 0.20 0.20 0.30 0.15\n4+ 0.05 0.15 0.25 0.35 0.20\nCalculate the probability of exactly 2 losses in 2 years.",
        "options": [
            "0.025",
            "0.031",
            "0.075",
            "0.100",
            "0.131"
        ],
        "answerLetter": "E",
        "answer": "0.131",
        "explanation": "Official solution: E\n\n2\nP x ( = 1, y = 1) = P y ( = 1| x = 1) P x ( = 1) = 0.3(0.5) = 0.075\n3\nP x ( = 2, y = 0) = P y ( = 0 | x = 2) P x ( = 2) = 0.25(0.5) = 0.03125\n1\nP x ( = 0, y = 2) = P y ( = 2 | x = 0) P x ( = 0) = 0.05(0.5) = 0.025\nThe total is 0.13125."
    },
    {
        "id": 111,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X be a continuous random variable with density function\np − 1\n’\n, x > 1\n’\np\nf ( ) x = ’\nx\n’\n0, otherwise\n’\nCalculate the value of p such that E ( X ) = 2.",
        "options": [
            "1",
            "2.5",
            "3",
            "5",
            "There is no such p ."
        ],
        "answerLetter": "C",
        "answer": "3",
        "explanation": "Official solution: C\n\n∞ ∞\np − 1\n1 − p\nE X ( ) = x dx = ( p − 1) x dx\n∫ p ∫\n1 1\nx\n∞\n2 − p\nx p − 1\n( p − 1) = = 2\n2 − p p − 2\n1\np − 1 = 2( p − 2) = 2 p − 4\np = 3"
    },
    {
        "id": 112,
        "topic": "SOA Exam P Sample Question",
        "question": "The figure below shows the cumulative distribution function of a random variable, X .\nCalculate E ( X ).",
        "options": [
            "0.00",
            "0.50",
            "1.00",
            "1.25",
            "2.50"
        ],
        "answerLetter": "D",
        "answer": "1.25",
        "explanation": "Official solution: D\n\nThe distribution function plot shows that X has a point mass at 0 with probability 0.5. From 2 to\n3 it has a continuous distribution. The density function is the derivative, which is the constant (1\n– 0.5)/(3 – 2) = 0.5. The expected value is 0(0.5) plus the integral from 2 to 3 of 0.5 x . The\nintegral evaluates to 1.25, which is the answer. Alternatively, this is a 50-50 mixture of a point\nmass at 0 and a uniform(2,3) distribution. The mean is 0.5(0) + 0.5(2.5) = 1.25."
    },
    {
        "id": 113,
        "topic": "SOA Exam P Sample Question",
        "question": "Two fair dice are rolled. Let X be the absolute value of the difference between the two\nnumbers on the dice.\nCalculate the probability that X < 3.",
        "options": [
            "2/9",
            "1/3",
            "4/9",
            "5/9",
            "2/3"
        ],
        "answerLetter": "E",
        "answer": "2/3",
        "explanation": "Official solution: E\n\nThe dice rolls that satisfy this event are (1,1), (1,2), (1,3), (2,1), (2,2), (2,3), (2,4), (3,1), (3,2),\n(3,3), (3,4), (3,5), (4,2), (4,3), (4,4), (4,5), (4,6), (5,3), (5,4), (5,5), (5,6), (6,4), (6,5), and (6,6).\nThey represent 24 of the 36 equally likely outcomes for a probability of 2/3."
    },
    {
        "id": 114,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary analyzes a company’s annual personal auto claims, M , and annual commercial\nauto claims, N . The analysis reveals that Var( M ) = 1600, Var( N ) = 900, and the\ncorrelation between M and N is 0.64.\nCalculate Var( M + N ).",
        "options": [
            "768",
            "2500",
            "3268",
            "4036",
            "4420"
        ],
        "answerLetter": "D",
        "answer": "4036",
        "explanation": "Official solution: D\n\nCov M N ( , )\n0.64 = ρ =\nVar M Var N ( ) ( )\nCov M N ( , ) = 0.64 1600(900) = 768\nVar M ( + N ) = Var M ( ) + Var N ( ) + 2 Cov M N ( , ) = 1600 + 900 + 2(768) = 4036"
    },
    {
        "id": 115,
        "topic": "SOA Exam P Sample Question",
        "question": "An auto insurance policy has a deductible of 1 and a maximum claim payment of 5. Auto\nloss amounts follow an exponential distribution with mean 2.\nCalculate the expected claim payment made for an auto loss.\n− 2 − 12",
        "options": [
            "0.5 e − 0.5 e 1 − − 3 2",
            "2 e − 7 e 1 − − 3 2 2 e − 2 e",
            "1 − 2",
            "2 e 1 − − 3 2",
            "3 e − 2 e"
        ],
        "answerLetter": "C",
        "answer": "1 − 2",
        "explanation": "Official solution: C\n\n6\n6 ∞ 6 ∞\n− 0,5 x − 0.5 x − 0.5 x − 0.5 x − 0.5 x\n( x − 1)0.5 e dx + 5(0.5) e dx = − ( x − 1) e + e dx − 5 e\n∫ ∫ ∫\n6\n1 6 1 1\n6\n− 3 − 0.5 x − 3 − 3 − 1/2\n= − 5 e + 0 − 2 e + 5 e = − 2 e + 2 e\n1"
    },
    {
        "id": 116,
        "topic": "SOA Exam P Sample Question",
        "question": "A student takes a multiple-choice test with 40 questions. The probability that the student\nanswers a given question correctly is 0.5, independent of all other questions. The\nprobability that the student answers more than N questions correctly is greater than 0.10.\nThe probability that the student answers more than N + 1 questions correctly is less than\n0.10.\nCalculate N using a normal approximation with the continuity correction.",
        "options": [
            "23",
            "25",
            "32",
            "33",
            "35"
        ],
        "answerLetter": "A",
        "answer": "23",
        "explanation": "Official solution: A\n\nLet C be the number correct. C has a binomial distribution with n = 40 and p = 0.5. Then the\nmean is 40(0.5) = 20 and the variance is 40(0.5)(0.5) = 10. With the exact probability we have\nN + 0.5 − 20\n’ ’\n0.1 = P C ( > N ) = Pr Z >\n’ ’\n10\n’ ’\nN + 0.5 − 20\n1.282 = , N = 1.282 10 + 19.5 = 23.55.\n10\nAt N = 23 the approximate probability will exceed 0.1 ( Z = 1.107)."
    },
    {
        "id": 117,
        "topic": "SOA Exam P Sample Question",
        "question": "In each of the months June, July, and August, the number of accidents occurring in that\nmonth is modeled by a Poisson random variable with mean 1. In each of the other 9\nmonths of the year, the number of accidents occurring is modeled by a Poisson random\nvariable with mean 0.5. Assume that these 12 random variables are mutually\nindependent.\nCalculate the probability that exactly two accidents occur in July through November.",
        "options": [
            "0.084",
            "0.185",
            "0.251",
            "0.257",
            "0.271"
        ],
        "answerLetter": "B",
        "answer": "0.185",
        "explanation": "Official solution: B\n\nThe months in question have 1, 1, 0.5, 0.5, and 0.5 respectively for their means. The sum of\nindependent Poisson random variables is also Poisson, with the parameters added. So the total\nnumber of accidents is Poisson with mean 3.5. The probability of two accidents is\n− 3.5 2\ne 3.5\n= 0.185.\n2!"
    },
    {
        "id": 118,
        "topic": "SOA Exam P Sample Question",
        "question": "An airport purchases an insurance policy to offset costs associated with excessive\namounts of snowfall. For every full ten inches of snow in excess of 40 inches during the\nwinter season, the insurer pays the airport 300 up to a policy maximum of 700.\nThe following table shows the probability function for the random variable X of annual\n(winter season) snowfall, in inches, at the airport.\n[0,20) [20,30) [30,40) [40,50) [50,60) [60,70) [70,80) [80,90) [90,inf)\nInches\nProbability 0.06 0.18 0.26 0.22 0.14 0.06 0.04 0.04 0.00\nCalculate the standard deviation of the amount paid under the policy.",
        "options": [
            "134",
            "235",
            "271",
            "313",
            "352"
        ],
        "answerLetter": "B",
        "answer": "235",
        "explanation": "Official solution: B\n\nThe payments are 0 with probability 0.72 (snowfall up to 50 inches), 300 with probability 0.14,\n600 with probability 0.06, and 700 with probability 0.08. The mean is 0.72(0) + 0.14(300) +\n0.06(600) + 0.08(700) = 134 and the second moment is 0.72(0^2) + 0.14(300^2) + 0.06(600^2) +\n0.08(700^2) = 73,400. The variance is 73,400 – 134^2 = 55,444. The standard deviation is the\nsquare root, 235."
    },
    {
        "id": 119,
        "topic": "SOA Exam P Sample Question",
        "question": "Damages to a car in a crash are modeled by a random variable with density function\n2\n’ c x ( − 60 x + 800), 0 < x < 20\nf ( ) x = ’\n0, otherwise\n’\nwhere c is a constant.\nA particular car is insured with a deductible of 2. This car was involved in a crash with\nresulting damages in excess of the deductible.\nCalculate the probability that the damages exceeded 10.",
        "options": [
            "0.12",
            "0.16",
            "0.20",
            "0.26",
            "0.78"
        ],
        "answerLetter": "D",
        "answer": "0.26",
        "explanation": "Official solution: D\n\n20 20\n2 3 2\n1 = c x ( − 60 x + 800) dx = c x ( / 3 − 30 x + 800 ) x = c 20, 000 / 3 ⇒ c = 3 / 20, 000\n∫\n0 0\n20\n20\n3\n2 3 2 3 2\nP X ( > d ) = c x ( − 60 x + 800) dx = c x ( / 3 − 30 x + 800 ) x = 1 − ( d / 3 − 30 d + 800 d )\n∫\nd d\n20, 000\nP X ( > 10) 0.2\nP X ( > 10 | X > 2) = = = 0.2572\nP X ( > 2) 0.7776"
    },
    {
        "id": 120,
        "topic": "SOA Exam P Sample Question",
        "question": "Two fair dice, one red and one blue, are rolled.\nLet A be the event that the number rolled on the red die is odd.\nLet B be the event that the number rolled on the blue die is odd.\nLet C be the event that the sum of the numbers rolled on the two dice is odd.\nDetermine which of the following is true.",
        "options": [
            "A, B, and C are not mutually independent, but each pair is independent.",
            "A, B, and C are mutually independent.",
            "Exactly one pair of the three events is independent.",
            "Exactly two of the three pairs are independent.",
            "No pair of the three events is independent."
        ],
        "answerLetter": "A",
        "answer": "A, B, and C are not mutually independent, but each pair is independent.",
        "explanation": "Official solution: A\n\nEach event has probability 0.5. Each of the three possible intersections of two events has\nprobability 0.25 = (0.5)(0.5), so each pair is independent. The intersection of all three events has\nprobability 0, which does not equal (0.5)(0.5)(0.5) and so the three events are not mutually\nindependent."
    },
    {
        "id": 121,
        "topic": "SOA Exam P Sample Question",
        "question": "An urn contains four fair dice. Two have faces numbered 1, 2, 3, 4, 5, and 6; one has\nfaces numbered 2, 2, 4, 4, 6, and 6; and one has all six faces numbered 6. One of the dice\nis randomly selected from the urn and rolled. The same die is rolled a second time.\nCalculate the probability that a 6 is rolled both times.",
        "options": [
            "0.174",
            "0.250",
            "0.292",
            "0.380",
            "0.417"
        ],
        "answerLetter": "C",
        "answer": "0.292",
        "explanation": "Official solution: C\n\nLet event A be the selection of the die with faces (1,2,3,4,5,6), event B be the selection of the die\nwith faces (2,2,4,4,6,6) and event C be the selection of the die with all 6’s. The desired\nprobability is, using the law of total probability,\nP (6, 6) = P (6, 6 | A P A ) ( ) + P (6, 6 | B P B ) ( ) + P (6, 6 | C P C ) ( )\n= (1/ 36)(1/ 2) + (1/ 9)(1/ 4) + 1(1/ 4) = 1/ 72 + 2 / 72 + 18 / 72 = 21/ 72 = 0.292."
    },
    {
        "id": 122,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance agent meets twelve potential customers independently, each of whom is\nequally likely to purchase an insurance product. Six are interested only in auto insurance,\nfour are interested only in homeowners insurance, and two are interested only in life\ninsurance.\nThe agent makes six sales.\nCalculate the probability that two are for auto insurance, two are for homeowners\ninsurance, and two are for life insurance.",
        "options": [
            "0.001",
            "0.024",
            "0.069",
            "0.097",
            "0.500"
        ],
        "answerLetter": "D",
        "answer": "0.097",
        "explanation": "Official solution: D\n\n6 4 2\n’ ’’ ’’ ’\n’ ’’ ’’ ’\n2 2 2\n15(6)(1)\n’ ’’ ’’ ’\n= = 0.097\n12\n’ ’ 924\n’ ’\n6\n’ ’"
    },
    {
        "id": 123,
        "topic": "SOA Exam P Sample Question",
        "question": "A policyholder has probability 0.7 of having no claims, 0.2 of having exactly one claim,\nand 0.1 of having exactly two claims. Claim amounts are uniformly distributed on the\ninterval [0, 60] and are independent. The insurer covers 100% of each claim.\nCalculate the probability that the total benefit paid to the policyholder is 48 or less.",
        "options": [
            "0.320",
            "0.400",
            "0.800",
            "0.892",
            "0.924"
        ],
        "answerLetter": "D",
        "answer": "0.892",
        "explanation": "Official solution: D\n\nConsider the three cases based on the number of claims.\nIf there are no claims, the probability of total benefits being 48 or less is 1.\nIf there is one claim, the probability is 48/60 = 0.8, from the uniform distribution.\nIf there are two claims, the density is uniform on a 60x60 square. The event where the total is 48\nor less is represented by a triangle with base and height equal to 48. The triangle’s area is\n48x48/2 = 1152. Dividing by the area of the square, the probability is 1152/3600 = 0.32.\nUsing the law of total probability, the answer is 0.7(1) + 0.2(0.8) + 0.1(0.32) = 0.892."
    },
    {
        "id": 124,
        "topic": "SOA Exam P Sample Question",
        "question": "In a given region, the number of tornadoes in a one-week period is modeled by a Poisson\ndistribution with mean 2. The numbers of tornadoes in different weeks are mutually\nindependent.\nCalculate the probability that fewer than four tornadoes occur in a three-week period.",
        "options": [
            "0.13",
            "0.15",
            "0.29",
            "0.43",
            "0.86"
        ],
        "answerLetter": "B",
        "answer": "0.15",
        "explanation": "Official solution: B\n\nThe sum of independent Poisson variables is also Poisson, with the means added. Thus the\nnumber of tornadoes in a three week period is Poisson with a mean of 3x2 = 6. Then,\n0 1 2 3\n’ ’\n6 6 6 6\n− 6\nP N ( < 4) = p (0) + p (1) + p (2) + p (3) = e + + + = 0.1512.\n’ ’\n0! 1! 2! 3!\n’ ’"
    },
    {
        "id": 125,
        "topic": "SOA Exam P Sample Question",
        "question": "An electronic system contains three cooling components that operate independently. The\nprobability of each component’s failure is 0.05. The system will overheat if and only if at\nleast two components fail.\nCalculate the probability that the system will overheat.",
        "options": [
            "0.007",
            "0.045",
            "0.098",
            "0.135",
            "0.143"
        ],
        "answerLetter": "A",
        "answer": "0.007",
        "explanation": "Official solution: A\n\nThe number of components that fail has a binomial(3, 0.05) distribution. Then,\n3 3\n’ ’ ’ ’\n2 3\nP N ( ≥ 2) = p (2) + p (3) = (0.05) (0.95) + (0.05) = 0.00725.\n’ ’ ’ ’\n2 3\n’ ’ ’ ’"
    },
    {
        "id": 126,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company’s annual profit is normally distributed with mean 100 and\nvariance 400.\nLet Z be normally distributed with mean 0 and variance 1 and let F be the cumulative\ndistribution function of Z.\nDetermine the probability that the company’s profit in a year is at most 60, given that the\nprofit in the year is positive.",
        "options": [
            "1 – F (2)",
            "F (2)/ F (5)",
            "[1 – F (2)]/ F (5)",
            "[ F (0.25) – F (0.1)]/ F (0.25)",
            "[ F (5) – F (2)]/ F (5)"
        ],
        "answerLetter": "E",
        "answer": "[ F (5) – F (2)]/ F (5)",
        "explanation": "Official solution: E\n\nThe profit variable X is normal with mean 100 and standard deviation 20. Then,\n0 − 100 60 − 100\n’ ’\nP < Z ≤\n’ ’\nP (0 < X 60) ≤ 20 20 F ( 2) − − F ( 5) −\n’ ’\nP X ( ≤ 60 | X > 0) = = = .\nP X ( > 0) ’ 0 − 100 ’ 1 − F ( 5) −\nP Z >\n’ ’\n20\n’ ’\nFor the normal distribution, F (– x ) = 1 – F ( x ) and so the answer can be rewritten as\n[1 – F (2) – 1 + F (5)]/[1 – 1 + F (5)] = [ F (5) – F (2)]/ F (5)."
    },
    {
        "id": 127,
        "topic": "SOA Exam P Sample Question",
        "question": "In a group of health insurance policyholders, 20% have high blood pressure and 30%\nhave high cholesterol. Of the policyholders with high blood pressure, 25% have high\ncholesterol.\nA policyholder is randomly selected from the group.\nCalculate the probability that a policyholder has high blood pressure, given that the\npolicyholder has high cholesterol.",
        "options": [
            "1/6",
            "1/5",
            "1/4",
            "2/3",
            "5/6"
        ],
        "answerLetter": "A",
        "answer": "1/6",
        "explanation": "Official solution: A\n\nLet B be the event that the policyholder has high blood pressure and C be the event that the\npolicyholder has high cholesterol. We are given P ( B ) = 0.2, P ( C ) = 0.3, and P ( C | B ) = 0.25.\nThen,\nP B ( ∩ C ) P C ( | B P B ) ( ) 0.25(0.2)\nP B C ( | ) = = = = 1/ 6.\nP C ( ) P C ( ) 0.3"
    },
    {
        "id": 128,
        "topic": "SOA Exam P Sample Question",
        "question": "In a group of 25 factory workers, 20 are low-risk and five are high-risk.\nTwo of the 25 factory workers are randomly selected without replacement.\nCalculate the probability that exactly one of the two selected factory workers is low-risk.",
        "options": [
            "0.160",
            "0.167",
            "0.320",
            "0.333",
            "0.633"
        ],
        "answerLetter": "D",
        "answer": "0.333",
        "explanation": "Official solution: D\n\nThis is a hypergeometric probability,\n20 5\n’ ’’ ’\n’ ’’ ’\n1 1 20(5) 100\n’ ’’ ’\n= = = 0.333 ,\n25 25(24) / 2 300\n’ ’\n’ ’\n2\n’ ’\nAlternatively, the probability of the first worker being high risk and the second low risk is\n(5/25)(20/24) = 100/600 and of the first being low risk and the second high risk is (20/25)(5/24)\n= 100/600 for a total probability of 200/600 = 0.333."
    },
    {
        "id": 129,
        "topic": "SOA Exam P Sample Question",
        "question": "The proportion X of yearly dental claims that exceed 200 is a random variable with\nprobability density function\n3 2\n’\n60 x (1 − x ) , 0 < x < 1\nf ( ) x = ’\n0, otherwise.\n’\nCalculate Var[ X /(1 – X )]",
        "options": [
            "149/900",
            "10/7",
            "6",
            "8",
            "10"
        ],
        "answerLetter": "C",
        "answer": "6",
        "explanation": "Official solution: C\n\n1 1 1\nX x\n’ ’\n3 2 4 5 6\nE = 60 x (1 − x ) dx = 60 x (1 − x dx ) = 60( x / 5 − x / 6) = 60(1/ 5 − 1/ 6) = 2\n’ ’\n∫ ∫\n0 0 0\n1 − X 1 − x\n’ ’\n2\n2\n’ ’\n1 1 1\nX x\n’ ’\n3 2 5 6\nE = 60 x (1 − x ) dx = 60 x dx = 60( x / 6) = 60(1/ 6) = 10\n’ ’\n’ ’\n∫ 2 ∫\n0 0 0\n1 − X (1 − x )\n’ ’\n’ ’\n’ ’\nX\n’ ’\n2\nVar = 10 − 2 = 6\n’ ’\n1 − X\n’ ’"
    },
    {
        "id": 130,
        "topic": "SOA Exam P Sample Question",
        "question": "This year, a medical insurance policyholder has probability 0.70 of having no emergency\nroom visits, 0.85 of having no hospital stays, and 0.61 of having neither emergency room\nvisits nor hospital stays\nCalculate the probability that the policyholder has at least one emergency room visit and\nat least one hospital stay this year.",
        "options": [
            "0.045",
            "0.060",
            "0.390",
            "0.667",
            "0.840"
        ],
        "answerLetter": "B",
        "answer": "0.060",
        "explanation": "Official solution: B\n\nP (at least one emergency room visit or at least one hospital stay) = 1 – 0.61 = 0.39 = P (at least\none emergency room visit) + P (at least one hospital stay) – P (at least one emergency room visit\nand at least one hospital stay).\nP (at least one emergency room visit and at least one hospital stay) = 1 – 0.70 + 1 – 0.85 – 0.39 =\n0.060."
    },
    {
        "id": 131,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurer offers a travelers insurance policy. Losses under the policy are uniformly\ndistributed on the interval [0, 5].\nThe insurer reimburses a policyholder for a loss up to a maximum of 4.\nDetermine the cumulative distribution function, F , of the benefit that the insurer pays a\npolicyholder who experiences exactly one loss under the policy.\n0, x < 0\n’\n’\nF x ( ) = 0.20 , x 0 ≤ x < 4",
        "options": [
            "’ ’ 1 x ≥ 4 ’ ’ 0, x < 0 ’ F x ( ) = 0.20 , x 0 ≤ x < 5",
            "’ ’ 1 x ≥ 5 ’ 0, x < 0 ’ ’ F x ( ) = 0.25 , x 0 ≤ x < 4",
            "’ ’ 1 x ≥ 4 ’ 0, x < 0 ’ ’",
            "F x ( ) = 0.25 , x 0 ≤ x < 5 ’ ’ 1 x ≥ 5 ’ 0, x < 1 ’ ’ F x ( ) = 0.25 , x 1 ≤ x < 5",
            "’ ’ 1 x ≥ 5 ’"
        ],
        "answerLetter": "A",
        "answer": "’ ’ 1 x ≥ 4 ’ ’ 0, x < 0 ’ F x ( ) = 0.20 , x 0 ≤ x < 5",
        "explanation": "Official solution: A\n\nLet Y be the loss and X be the reimbursement. If the loss is less than 4,\nfor x < 4 because Y has a uniform distribution on [0, 5]. However,\nP X ( ≤ x ) = P Y ( ≤ x ) = 0.2 x\nthe probability of the reimbursement being less than or equal to 4 is 1 because 4 is the maximum\nreimbursement."
    },
    {
        "id": 132,
        "topic": "SOA Exam P Sample Question",
        "question": "A company issues auto insurance policies. There are 900 insured individuals. Fifty-four\npercent of them are male. If a female is randomly selected from the 900, the probability\nshe is over 25 years old is 0.43. There are 395 total insured individuals over 25 years old.\nA person under 25 years old is randomly selected.\nCalculate the probability that the person selected is male.",
        "options": [
            "0.47",
            "0.53",
            "0.54",
            "0.55",
            "0.56"
        ],
        "answerLetter": "B",
        "answer": "0.53",
        "explanation": "Official solution: B\n\nThe number of males is 0.54(900) = 486 and of females is then 414.\nThe number of females over age 25 is 0.43(414) = 178.\nThe number over age 25 is 395. Therefore the number under age 25 is 505. The number of\nfemales under age 25 is 414 – 178 = 236. Therefore the number of males under 25 is 505 – 236 =\n269 and the probability is 269/505 =0.533."
    },
    {
        "id": 133,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company insures red and green cars. An actuary compiles the following\ndata:\nColor of car Red Green\nNumber insured 300 700\nProbability an accident occurs 0.10 0.05\nProbability that the claim exceeds\nthe deductible, given an accident 0.90 0.80\noccurs from this group\nThe actuary randomly picks a claim from all claims that exceed the deductible.\nCalculate the probability that the claim is on a red car.",
        "options": [
            "0.300",
            "0.462",
            "0.491",
            "0.667",
            "0.692"
        ],
        "answerLetter": "C",
        "answer": "0.491",
        "explanation": "Official solution: C\n\nLet R be the event the car is red and G be the event the car is green. Let E be the event that the\nclaim exceeds the deductible. Then,\nP R P E ( ) ( | R ) 0.3(0.09) 0.027\nP R ( | E ) = = = = 0.491.\nP R P E ( ) ( | R ) + P (G) P E ( | G) 0.3(0.09) + 0.7(0.04) 0.055\nNote that if A is the probability of an accident,\nP E ( | R ) = P E ( | R and A P A R ) ( | ) = 0.1(0.9) = 0.09."
    },
    {
        "id": 134,
        "topic": "SOA Exam P Sample Question",
        "question": "George and Paul play a betting game. Each chooses an integer from 1 to 20 (inclusive) at\nrandom. If the two numbers differ by more than 3, George wins the bet. Otherwise, Paul\nwins the bet.\nCalculate the probability that Paul wins the bet.",
        "options": [
            "0.27",
            "0.32",
            "0.40",
            "0.48",
            "0.66"
        ],
        "answerLetter": "B",
        "answer": "0.32",
        "explanation": "Official solution: B\n\nLet X and Y be the selected numbers. The probability Paul wins is P (| X − Y | ≤ 3) . Of the 400\npairs, it is easiest to count the number of outcomes that satisfy this event:\nIf X = 1, then Y can be 1, 2, 3, or 4 (4 total)\nIf X = 2, then Y can be 1, 2, 3, 4, or 5 (5 total)\nFor X = 3 there are 6, and for X = 4 through 17 there are 7. For X = 18, 19, and 20 the counts are\n6, 5, and 4 respectively. The total is then 4 + 5 + 6 + 14(7) + 6 + 5 + 4 = 128. The probability is\n128/400 = 0.32."
    },
    {
        "id": 135,
        "topic": "SOA Exam P Sample Question",
        "question": "A student takes an examination consisting of 20 true-false questions. The student knows\nthe answer to N of the questions, which are answered correctly, and guesses the answers\nto the rest. The conditional probability that the student knows the answer to a question,\ngiven that the student answered it correctly, is 0.824..\nCalculate N .",
        "options": [
            "8",
            "10",
            "14",
            "16",
            "18"
        ],
        "answerLetter": "C",
        "answer": "14",
        "explanation": "Official solution: C\n\nLet C and K denote respectively the event that the student answers the question correctly and the\nevent that he actually knows the answer. The known probabilities are\nc\nP C ( | K ) = 0.5, P C ( | K ) = 1, P K ( | C ) = 0.824, P K ( ) = N / 20. Then,\nP C ( | K P K ) ( ) 1( N / 20) N\n0.824 = P K ( | C ) = = =\nc c\nP C ( | K P K ) ( ) + P C ( | K ) P K ( ) 1( N / 20) + 0.5(20 − N ) / 20 N + 0.5(20 − N )\n0.824(0.5 N + 10) = N\n8.24 = 0.588 N\nN = 14."
    },
    {
        "id": 136,
        "topic": "SOA Exam P Sample Question",
        "question": "The minimum force required to break a particular type of cable is normally distributed\nwith mean 12,432 and standard deviation 25. A random sample of 400 cables of this type\nis selected.\nCalculate the probability that at least 349 of the selected cables will not break under a\nforce of 12,400.",
        "options": [
            "0.62",
            "0.67",
            "0.92",
            "0.97",
            "1.00"
        ],
        "answerLetter": "D",
        "answer": "0.97",
        "explanation": "Official solution: D\n\nThe probability that a randomly selected cable will not break under a force of 12,400 is\nP Y ( > 12, 400) = P Z [ > (12, 400 − 12, 432) / 25 = − 1.28] = 0.9. The number of cables, N , that will\nnot break has the binomial distribution with n = 400 and p = 0.9. This can be approximated by a\nnormal distribution with mean 360 and standard deviation 6. With the continuity correction,\nP N ( ≥ 349) = P Z [ ≥ (348.5 − 360) / 6 = − 1.9167] = 0.97."
    },
    {
        "id": 137,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of policies that an agent sells has a Poisson distribution with modes at 2 and\n3.\nK is the smallest number such that the probability of selling more than K policies is less\nthan 25%.\nCalculate K .",
        "options": [
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        "answerLetter": "D",
        "answer": "4",
        "explanation": "Official solution: D\n\nBecause the mode is 2 and 3, the parameter is 3 (when the parameter is a whole number the\nprobabilities at the parameter and at one less than the parameter are always equal).\nAlternatively, the equation p (2) = p (3) can be solved for the parameter. Then the probability of\nselling 4 or fewer policies is 0.815 and this is the first such probability that exceeds 0.75. Thus,\n4 is the first number for which the probability of selling more than that number of policies is less\nthan 0.25."
    },
    {
        "id": 138,
        "topic": "SOA Exam P Sample Question",
        "question": "Two fair dice are tossed. One die is red and one die is green.\nCalculate the probability that the sum of the numbers on the two dice is an odd number\ngiven that the number that shows on the red die is larger than the number that shows on\nthe green die.",
        "options": [
            "1/4",
            "5/12",
            "3/7",
            "1/2",
            "3/5"
        ],
        "answerLetter": "E",
        "answer": "3/5",
        "explanation": "Official solution: E\n\nOf the 36 possible pairs, there are a total of 15 that have the red number larger than the green\nnumber. Note that a list is not needed. There are 6 that have equal numbers showing and of the\nremaining 30 one-half must have red larger than green. Of these 15, 9 have an odd sum for the\nanswer, 9/15 = 3/5. This is best done by counting, with 3 combinations adding to 7, 2\ncombinations each totaling 5 and 9, and 1 combination each totaling 3 and 11."
    },
    {
        "id": 139,
        "topic": "SOA Exam P Sample Question",
        "question": "Math SAT scores are normally distributed and when reported are rounded to multiples of\nten.\nIn 1982 Abby’s mother scored at the rounded 93rd percentile on the math SAT exam. In\n1982 the mean score was 503 and the variance of the scores was 9604.\nIn 2008 Abby took the math SAT and got the same rounded numerical score as her\nmother had received 26 years before. In 2008 the mean score was 521 and the variance\nof the scores was 10,201.\nCalculate the percentile corresponding to Abby’s rounded score.",
        "options": [
            "89th",
            "90th",
            "91st",
            "92nd",
            "93rd"
        ],
        "answerLetter": "B",
        "answer": "90th",
        "explanation": "Official solution: B\n\nFrom the table the exact 93rd percentile comes from a z-score between 1.47 and 1.48. 1.47\nimplies a test score of 503 + 1.47(98) = 647.1. Similarly, 1.48 implies a score of 648.0. The\nclosest multiple of 10 is 650. Abby’s z-score is then (650 – 521)/101 = 1.277. This rounds to\nthe 90th percentile of the standard normal distribution."
    },
    {
        "id": 140,
        "topic": "SOA Exam P Sample Question",
        "question": "A certain brand of refrigerator has a useful life that is normally distributed with mean 10\nyears and standard deviation 3 years. The useful lives of these refrigerators are\nindependent.\nCalculate the probability that the total useful life of two randomly selected refrigerators\nwill exceed 1.9 times the useful life of a third randomly selected refrigerator.",
        "options": [
            "0.407",
            "0.444",
            "0.556",
            "0.593",
            "0.604"
        ],
        "answerLetter": "C",
        "answer": "0.556",
        "explanation": "Official solution: C\n\nLet X , Y , and Z be the three lifetimes. We want\nP X ( + Y > 1.9 Z ) = P W ( = X + Y − 1.9 Z > 0) .\nA linear combination of independent normal variables is also normal. In this case W has a mean\nof 10 + 10 – 1.9(10) = 1 and a variance of 9 + 9 + 1.9(1.9)(9) = 50.49 for a standard deviation of\n7.106.\nThen the desired probability is that a standard normal variable exceeds (0 – 1)/7.106 = –0.141.\nInterpolating in the normal tables gives 0.5557 + (0.5596 – 0.5557)(0.1) = 0.5561, which rounds\nto 0.556."
    },
    {
        "id": 141,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses covered by a flood insurance policy are uniformly distributed on the interval\n[0, 2]. The insurer pays the amount of the loss in excess of a deductible d .\nThe probability that the insurer pays at least 1.20 on a random loss is 0.30.\nCalculate the probability that the insurer pays at least 1.44 on a random loss.",
        "options": [
            "0.06",
            "0.16",
            "0.18",
            "0.20",
            "0.28"
        ],
        "answerLetter": "C",
        "answer": "0.18",
        "explanation": "Official solution: C\n\nWe have\n2 − 1.2 − d 0.8 − d\n0.3 = P insurer must pay at least 1.2 = P loss ≥ 1.2 + d = =\n[ ] [ ]\n2 − 0 2\nd = 0.8 − 2(0.3) = 0.2.\nThen,\n2 − 1.44 − 0.2\nP insurer must pay at least 1.44 = P loss ≥ 1.44 + d = = 0.18.\n[ ] [ ]\n2 − 0"
    },
    {
        "id": 142,
        "topic": "SOA Exam P Sample Question",
        "question": "The lifespan, in years, of a certain computer is exponentially distributed. The probability\nthat its lifespan exceeds four years is 0.30.\nLet f ( x ) represent the density function of the computer’s lifespan, in years, for x > 0.\nDetermine which of the following is an expression for f ( x ).\n− x /4",
        "options": [
            "1 − (0.3) x /4 1 − (0.7)",
            "x /4 1 − (0.3)",
            "ln 0.7 x /4",
            "− (0.7) 4 ln 0.3 x /4",
            "− (0.3) 4"
        ],
        "answerLetter": "E",
        "answer": "− (0.3) 4",
        "explanation": "Official solution: E\n\nThe cumulative distribution function for the exponential distribution of the lifespan is\n− λ x\nF x ( ) = 1 − e , for positive x .\n− 4 λ\nThe probability that the lifespan exceeds 4 years is 0.3 = 1 − F (4) = e . Thus λ = − (ln 0.3) / 4 .\nFor positive x , the probability density function is\nln 0.3 ln 0.3\n− λ x (ln 0.3) x/4 x /4\nf ( ) x = λ e = − e = − (0.3) .\n4 4"
    },
    {
        "id": 143,
        "topic": "SOA Exam P Sample Question",
        "question": "The lifetime of a light bulb has density function, f , where f ( x ) is proportional to\n2\nx\n, 0 < x < 5\n, and 0, otherwise.\n3\n1 + x\nCalculate the mode of this distribution.",
        "options": [
            "0.00",
            "0.79",
            "1.26",
            "4.42",
            "5.00"
        ],
        "answerLetter": "C",
        "answer": "1.26",
        "explanation": "Official solution: C\n\nIt is not necessary to determine the constant of proportionality. Let it be c . To determine the\nmode, set the derivative of the density function equal to zero and solve.\nd\n2 3 − 1 3 − 1 2 3 − 2 2\n′\n0 = f ( ) x = cx (1 + x ) = 2 cx (1 + x ) + cx [ (1 − + x ) ]3 x\ndx\n3 4 3 2\n= 2 cx (1 + x ) − 3 cx (multiplying by (1 + x ) )\n4 4 4\n= 2 cx + 2 cx − 3 cx = 2 cx − cx\n3 1/3\n= 2 − x ⇒ x = 2 = 1.26."
    },
    {
        "id": 144,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurer’s medical reimbursements have density function f , where f ( x ) is proportional\nto\n2\n− x\nxe , for 0 < x < 1, and 0, otherwise.\nCalculate the mode of the medical reimbursements.",
        "options": [
            "0.00",
            "0.50",
            "0.71",
            "0.84",
            "1.00"
        ],
        "answerLetter": "C",
        "answer": "0.71",
        "explanation": "Official solution: C\n\nIt is not necessary to determine the constant of proportionality. Let it be c . To determine the\nmode, set the derivative of the density function equal to zero and solve.\n2 2 2 2\nd\n− x − x − x − x 2\n′\n0 = f ( ) x = cxe = ce − cx (2 ) x e = ce (1 − 2 x )\ndx\n2\n2 x\n= 1 − 2 x (multiplying by ce )\n1/2\n⇒ x = (1/ 2) = 0.71."
    },
    {
        "id": 145,
        "topic": "SOA Exam P Sample Question",
        "question": "A company has five employees on its health insurance plan. Each year, each employee\nindependently has an 80% probability of no hospital admissions. If an employee requires\none or more hospital admissions, the number of admissions is modeled by a geometric\ndistribution with a mean of 1.50. The numbers of hospital admissions of different\nemployees are mutually independent.\nEach hospital admission costs 20,000.\nCalculate the probability that the company’s total hospital costs in a year are less than\n50,000.",
        "options": [
            "0.41",
            "0.46",
            "0.58",
            "0.69",
            "0.78"
        ],
        "answerLetter": "E",
        "answer": "0.78",
        "explanation": "Official solution: E\n\nA geometric probability distribution with mean 1.5 will have p = 2/3. So Pr(1 visit) = 2/3, P(two\nvisits) = 2/9, etc. There are four disjoint scenarios in which total admissions will be two or less.\n5\nScenario 1: No employees have hospital admissions. Probability = 0.8 = 0.32768 .\nScenario 2: One employee has one admission and the other employees have none. Probability =\n5\n’ ’\n4\n(0.2)(0.8) (2 / 3) = 0.27307\n.\n’ ’\n1\n’ ’\nScenario 3: One employee has two admissions and the other employees have none. Probability =\n5\n’ ’\n4\n(0.2)(0.8) (2 / 9) = 0.09102\n.\n’ ’\n1\n’ ’\nScenario 4: Two employees each have one admission and the other three employees have none.\n’ 5 ’\n2 3\n(0.2) (0.8) (2 / 3)(2 / 3) = 0.09102\nProbability = .\n’ ’\n2\n’ ’\nThe total probability is 0.78279."
    },
    {
        "id": 146,
        "topic": "SOA Exam P Sample Question",
        "question": "On any given day, a certain machine has either no malfunctions or exactly one\nmalfunction. The probability of malfunction on any given day is 0.40. Machine\nmalfunctions on different days are mutually independent.\nCalculate the probability that the machine has its third malfunction on the fifth day, given\nthat the machine has not had three malfunctions in the first three days.",
        "options": [
            "0.064",
            "0.138",
            "0.148",
            "0.230",
            "0.246"
        ],
        "answerLetter": "C",
        "answer": "0.148",
        "explanation": "Official solution: C\n\nThe intersection of the two events (third malfunction on the fifth day and not three malfunctions\non first three days) is the same as the first of those events. So the numerator of the conditional\nprobability is the negative binomial probability of the third success (malfunction) on the fifth\nday, which is\n4\n’ ’\n2 2\n(0.4) (0.6) (0.4) = 0.13824\n.\n’ ’\n2\n’ ’\nThe denominator is the probability of not having three malfunctions in three days, which is\n3\n1 − (0.4) = 0.936 .\nThe conditional probability is 0.13824/0.936 = 0.1477."
    },
    {
        "id": 147,
        "topic": "SOA Exam P Sample Question",
        "question": "In a certain group of cancer patients, each patient's cancer is classified in exactly one of\nthe following five stages: stage 0, stage 1, stage 2, stage 3, or stage 4.\ni) 75% of the patients in the group have stage 2 or lower.\nii) 80% of the patients in the group have stage 1 or higher.\niii) 80% of the patients in the group have stage 0, 1, 3, or 4.\nOne patient from the group is randomly selected.\nCalculate the probability that the selected patient's cancer is stage 1.",
        "options": [
            "0.20",
            "0.25",
            "0.35",
            "0.48",
            "0.65"
        ],
        "answerLetter": "C",
        "answer": "0.35",
        "explanation": "Official solution: C\n\nLet p represent the probability that the patient's cancer is in stage i , for i = 0, 1, 2, 3, or 4.\ni\nThe probabilities must sum to 1. That fact and the three facts given the question produce the\nfollowing equations.\np + p + p + p + p = 1\n0 1 2 3 4\np + p + p = 0.75\n0 1 2\n.\np + p + p + p = 0.8\n1 2 3 4\np + p + p + p = 0.8\n0 1 3 4\nTherefore, we have\np = ( p + p + p + p + p ) − p + p + p + p = 1 − 0.8 = 0.2\n( )\n0 0 1 2 3 4 1 2 3 4\np = ( p + p + p + p + p ) − p + p + p + p = 1 − 0.8 = 0.2\n( ) .\n2 0 1 2 3 4 0 1 3 4\np = ( p + p + p ) − p − p = 0.75 − 0.2 − 0.2 = 0.35.\n1 0 1 2 0 2"
    },
    {
        "id": 148,
        "topic": "SOA Exam P Sample Question",
        "question": "A car is new at the beginning of a calendar year. The time, in years, before the car\nexperiences its first failure is exponentially distributed with mean 2.\nCalculate the probability that the car experiences its first failure in the last quarter of\nsome calendar year.",
        "options": [
            "0.081",
            "0.088",
            "0.102",
            "0.205",
            "0.250"
        ],
        "answerLetter": "D",
        "answer": "0.205",
        "explanation": "Official solution: D\n\nUsing the law of total probability, the requested probability is\n∞\nP k ( + 0.75 < X ≤ k + 1| k < X ≤ k + 1) P k ( < X ≤ k + 1) .\n∑\nk = 0\nThe first probability is\nP k ( + 0.75 < X ≤ k + 1)\nP k ( + 0.75 < X ≤ k + 1| k < X ≤ k + 1) =\nP k ( < X ≤ k + 1)\n− ( k + 1)/2 − ( k + 0.75)/2 − 0.375 − 0.5\nF k ( + 1) − F k ( + 0.75) 1 − e − 1 + e e − e\n= = = = 0.205.\n− ( k + 1)/2 − k /2 − 0.5\nF k ( + 1) − F k ( ) 1 − e − 1 + e 1 − e\nThis probability factors out of the sum and the remaining probabilities sum to 1 so the requested\nprobability is 0.205."
    },
    {
        "id": 149,
        "topic": "SOA Exam P Sample Question",
        "question": "In a shipment of 20 packages, 7 packages are damaged. The packages are randomly\ninspected, one at a time, without replacement, until the fourth damaged package is\ndiscovered.\nCalculate the probability that exactly 12 packages are inspected.",
        "options": [
            "0.079",
            "0.119",
            "0.237",
            "0.243",
            "0.358"
        ],
        "answerLetter": "B",
        "answer": "0.119",
        "explanation": "Official solution: B\n\nThe requested probability can be determined as\nP (3 of first 11 damaged) P (12th is damaged | 3 of first 11 damaged)\n7 13\n’ ’’ ’\n’ ’’ ’\n3 8\n4 35(1, 287) 4\n’ ’’ ’\n= = = 0.119.\n20 9 167,960 9\n’ ’\n’ ’\n11\n’ ’"
    },
    {
        "id": 150,
        "topic": "SOA Exam P Sample Question",
        "question": "A theme park conducts a study of families that visit the park during a year. The fraction\n8 − m\nof such families of size m is , m = 1, 2, 3, 4, 5, 6, and 7.\n28\nFor a family of size m that visits the park, the number of members of the family that ride\nthe roller coaster follows a discrete uniform distribution on the set {1, … , m }.\nCalculate the probability that a family visiting the park has exactly six members, given\nthat exactly five members of the family ride the roller coaster.",
        "options": [
            "0.17",
            "0.21",
            "0.24",
            "0.28",
            "0.31"
        ],
        "answerLetter": "E",
        "answer": "0.31",
        "explanation": "Official solution: E\n\nLet M be the size of a family that visits the park and let N be the number of members of that\nfamily that ride the roller coaster. We want P ( M = 6 | N = 5). By Bayes theorem\nP M ( = 6 | N = 5)\nP N ( = 5 | M = 6) P M ( = 6)\n=\n7\nP N ( = 5 | M = m P M ) ( = m )\n∑\nm = 1\n1 2 1\n35 35\n6 28 3\n= = = = ≈ 0.3097.\n1 3 1 2 1 1 3 1 1\n63 + 35 + 15 113\n0 + 0 + 0 + 0 + + + + +\n5 28 6 28 7 28 5 3 7"
    },
    {
        "id": 151,
        "topic": "SOA Exam P Sample Question",
        "question": "The following information is given about a group of high-risk borrowers.\ni) Of all these borrowers, 30% defaulted on at least one student loan.\nii) Of the borrowers who defaulted on at least one car loan, 40% defaulted on at least\none student loan.\niii) Of the borrowers who did not default on any student loans, 28% defaulted on at\nleast one car loan.\nA statistician randomly selects a borrower from this group and observes that the selected\nborrower defaulted on at least one student loan.\nCalculate the probability that the selected borrower defaulted on at least one car loan.",
        "options": [
            "0.33",
            "0.40",
            "0.44",
            "0.65",
            "0.72"
        ],
        "answerLetter": "C",
        "answer": "0.44",
        "explanation": "Official solution: C\n\nLet S represent the event that the selected borrower defaulted on at least one student loan.\nLet C represent the event that the selected borrower defaulted on at least one car loan.\nP C ( ∩ S )\nWe need to find P C ( | S ) = .\nP S ( )\nc\nP C ( ∩ S ) P C ( ∩ S )\nc\nP S ( ) = 0.3, P S ( | C ) = = 0.4, P C ( | S ) = = 0.28\nWe are given .\nc\nP C ( ) P S ( )\nThen,\nc c\nP C ( ∩ S ) = 0.28 P S ( ) = 0.28(1 − 0.3) = 0.196 .\nBecause\nc\nP C ( ) = P C ( ∩ S ) + P C ( ∩ S ] and P C ( ) = P C ( ∩ S ) / 0.4 we have\nP C ( ∩ S ) / 0.4 = P C ( ∩ S ) + 0.196 ⇒ P C ( ∩ S ) = 0.196 /1.5 = 0.13067.\nTherefore,\nP C ( ∩ S ) 0.13067\nP C ( | S ) = = = 0.4356,\nP S ( ) 0.3"
    },
    {
        "id": 152,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company issues policies covering damage to automobiles. The amount of\ndamage is modeled by a uniform distribution on [0, b ].\nThe policy payout is subject to a deductible of b /10.\nA policyholder experiences automobile damage.\nCalculate the ratio of the standard deviation of the policy payout to the standard deviation\nof the amount of the damage.",
        "options": [
            "0.8100",
            "0.9000",
            "0.9477",
            "0.9487",
            "0.9735"
        ],
        "answerLetter": "E",
        "answer": "0.9735",
        "explanation": "Official solution: E\n\nWithout the deductible, the standard deviation is, from the uniform distribution,\nb / 12 = 0.28868 b . Let Y be the random variable representing the payout with the deductible.\nb\n2\nb\n1 y\nE Y ( ) = ( y − 0.1 ) b dy = − 0.1 y = 0.5 b − 0.1 b − 0.005 b + 0.01 b = 0.405 b\n∫\n0.1 b\nb 2 b\n0.1 b\nb\n3\nb\n1 y\n2 2 2\nE Y ( ) = ( y − 0.1 ) b dy = − 0.1 y + 0.01 by\n∫\n0.1 b\nb 3 b\n0.1 b\n2 2 2 2 2 2 2\n= b / 3 − 0.1 b + 0.01 b − 0.001 b / 3 + 0.001 b − 0.001 b = 0.243 b\n2 2 2\nVar Y ( ) = 0.243 b − (0.405 ) b = 0.07897 5 b\nSD Y ( ) = 0.28102 . b\nThe ratio is 0.28102/0.28868 = 0.97347."
    },
    {
        "id": 153,
        "topic": "SOA Exam P Sample Question",
        "question": "A policyholder purchases automobile insurance for two years. Define the following\nevents:\nF = the policyholder has exactly one accident in year one.\nG = the policyholder has one or more accidents in year two.\nDefine the following events:\ni) The policyholder has exactly one accident in year one and has more than one\naccident in year two.\nii) The policyholder has at least two accidents during the two-year period.\niii) The policyholder has exactly one accident in year one and has at least one\naccident in year two.\niv) The policyholder has exactly one accident in year one and has a total of two or\nmore accidents in the two-year period.\nv) The policyholder has exactly one accident in year one and has more accidents in\nyear two than in year one.\nDetermine the number of events from the above list of five that are the same as F ∩ G .",
        "options": [
            "None",
            "Exactly one",
            "Exactly two",
            "Exactly three",
            "All"
        ],
        "answerLetter": "C",
        "answer": "Exactly two",
        "explanation": "Official solution: C\n\ni) is false because G includes having one accident in year two.\nii) is false because there could be no accidents in year one.\niii) is true because it connects the descriptions of F and G (noting that “one or more” and “at\nleast one” are identical events) with “and.”\niv) is true because given one accident in year one (F), having a total of two or more in two years\nis the same as one or more in year two (G).\nv) is false because it requires year two to have at least two accidents."
    },
    {
        "id": 154,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company categorizes its policyholders into three mutually exclusive groups:\nhigh-risk, medium-risk, and low-risk. An internal study of the company showed that\n45% of the policyholders are low-risk and 35% are medium-risk. The probability of\ndeath over the next year, given that a policyholder is high-risk is two times the\nprobability of death of a medium-risk policyholder. The probability of death over the\nnext year, given that a policyholder is medium-risk is three times the probability of death\nof a low-risk policyholder. The probability of death of a randomly selected policyholder,\nover the next year, is 0.009.\nCalculate the probability of death of a policyholder over the next year, given that the\npolicyholder is high-risk.",
        "options": [
            "0.0025",
            "0.0200",
            "0.1215",
            "0.2000",
            "0.3750"
        ],
        "answerLetter": "B",
        "answer": "0.0200",
        "explanation": "Official solution: B\n\nP D [ ] = P H P D [ ] [ | H ] + P M P D M [ ] [ | ] + P L P D [ ] [ | L ]\n1 1 1\n’ ’ ’ ’\n0.009 = P H P D [ ] [ | H ] + P M [ ] P D [ | H ] + P L [ ] P D [ | H ]\n’ ’ ’ ’\n2 2 3\n’ ’ ’ ’\n1 1\n’ ’ ’ ’\n0.009 = 0.20 P D [ | H ] + 0.35 P D [ | H ] + 0.45 P D [ | H ] = 0.45 P D [ | H ]\n’ ’ ’ ’\n2 6\n’ ’ ’ ’\nP D [ | H ] = 0.009 / 0.45 = 0.02"
    },
    {
        "id": 155,
        "topic": "SOA Exam P Sample Question",
        "question": "A policy covers a gas furnace for one year. During that year, only one of three problems\ncan occur:\ni) The igniter switch may need to be replaced at a cost of 60. There is a 0.10\nprobability of this.\nii) The pilot light may need to be replaced at a cost of 200. There is a 0.05\nprobability of this.\niii) The furnace may need to be replaced at a cost of 3000. There is a 0.01 probability\nof this.\nCalculate the deductible that would produce an expected claim payment of 30.",
        "options": [
            "100",
            "At least 100 but less than 150",
            "At least 150 but less than 200",
            "At least 200 but less than 250",
            "At least 250"
        ],
        "answerLetter": "C",
        "answer": "At least 150 but less than 200",
        "explanation": "Official solution: C\n\nIf the deductible is less than 60 the equation is,\n0.10(60 − d ) + 0.05(200 − d ) + 0.01(3000 − d ) = 30 ⇒ d = 100. .\nSo this cannot be the answer. If the deductible is between 60 and 200, the equation is\n0.05(200 − d ) + 0.01(3000 − d ) = 30 ⇒ d = 166.67 . This is consistent with the assumption and is\nthe answer."
    },
    {
        "id": 156,
        "topic": "SOA Exam P Sample Question",
        "question": "On a block of ten houses, k are not insured. A tornado randomly damages three houses\non the block.\nThe probability that none of the damaged houses are insured is 1/120.\nCalculate the probability that at most one of the damaged houses is insured.",
        "options": [
            "1/5",
            "7/40",
            "11/60",
            "49/60",
            "119/120"
        ],
        "answerLetter": "C",
        "answer": "11/60",
        "explanation": "Official solution: C\n\nThe probability that none of the damaged houses are insured is\n10 − k k\n’ ’’ ’\n’ ’’ ’\n0 3\n1 k k ( − 1)( k − 2)\n’ ’’ ’\n= =\n10 .\n120 ’ ’ 720\n’ ’\n3\n’ ’\nk k ( − 1)( k − 2) = 6\nThis cubic equation could be solved by expanding, subtracting 6, and refactoring. However,\nbecause k must be an integer, the three factors must be integers and thus must be 3(2)(1) for k =\n3.\nThe probability that at most one of the damaged houses is insured equals\n10 − 3 3\n’ ’’ ’\n’ ’’ ’\n1 2\n1 1 7(3) 22 11\n’ ’’ ’\n+ = + = = .\n10\n120 ’ ’ 120 120 120 60\n’ ’\n3\n’ ’"
    },
    {
        "id": 157,
        "topic": "SOA Exam P Sample Question",
        "question": "In a casino game, a gambler selects four different numbers from the first twelve positive\nintegers. The casino then randomly draws nine numbers without replacement from the\nfirst twelve positive integers. The gambler wins the jackpot if the casino draws all four\nof the gambler’s selected numbers.\nCalculate the probability that the gambler wins the jackpot.",
        "options": [
            "0.002",
            "0.255",
            "0.296",
            "0.573",
            "0.625"
        ],
        "answerLetter": "B",
        "answer": "0.255",
        "explanation": "Official solution: B\n\nThis question is equivalent to “What is the probability that 9 different chips randomly drawn\nfrom a box containing 4 red chips and 8 blues chips will contain the 4 red chips?” The\nhypergeometric probability is\n4 8\n’ ’’ ’\n’ ’’ ’\n4 5\n1(56)\n’ ’’ ’\n= = 0.2545.\n12\n’ ’ 220\n’ ’\n9\n’ ’"
    },
    {
        "id": 158,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of days an employee is sick each month is modeled by a Poisson distribution\nwith mean 1. The numbers of sick days in different months are mutually independent.\nCalculate the probability that an employee is sick more than two days in a three-month\nperiod.",
        "options": [
            "0.199",
            "0.224",
            "0.423",
            "0.577",
            "0.801"
        ],
        "answerLetter": "D",
        "answer": "0.577",
        "explanation": "Official solution: D\n\nLet N be the number of sick days for an employee in three months. The sum of independent\nPoisson variables is also Poisson and thus N is Poisson with a mean of 3.. Then,\n0 1 2\n’ ’\n3 3 3\n− 3 − 3\nP[ N ≤ 2] = e + + = e (1 + 3 + 4.5) = 0.423 .\n’ ’\n’ ’\n0! 1! 2!\n’ ’\nThe answer is the complement, 1 – 0.423 = 0.577."
    },
    {
        "id": 159,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of traffic accidents per week at intersection Q has a Poisson distribution with\nmean 3. The number of traffic accidents per week at intersection R has a Poisson\ndistribution with mean 1.5.\nLet A be the probability that the number of accidents at intersection Q exceeds its mean.\nLet B be the corresponding probability for intersection R.\nCalculate B – A .",
        "options": [
            "0.00",
            "0.09",
            "0.13",
            "0.19",
            "0.31"
        ],
        "answerLetter": "B",
        "answer": "0.09",
        "explanation": "Official solution: B\n\nA = P N ( > 3) = 1 − P N ( = 0) + P N ( = 1) + P N ( = 2) + P N ( = 3)\n[ ]\n3 9 27\n’ ’\n− 3 − 3\n= 1 − e 1 + + + = 1 − 13 e = 0.3528\n’ ’\n1 2 6\n’ ’\nB = P N ( > 1.5) = 1 − P N ( = 0) + P N ( = 1)\n[ ]\n1.5\n’ ’\n− 1.5 − 1.5\n= 1 − e 1 + = 1 − 2.5 e = 0.4422\n’ ’\n1\n’ ’\nB – A = 0.4422 – 0.3528 = 0.0894."
    },
    {
        "id": 160,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses due to accidents at an amusement park are exponentially distributed. An\ninsurance company offers the park owner two different policies, with different premiums,\nto insure against losses due to accidents at the park.\nPolicy A has a deductible of 1.44. For a random loss, the probability is 0.640 that under\nthis policy, the insurer will pay some money to the park owner. Policy B has a deductible\nof d . For a random loss, the probability is 0.512 that under this policy, the insurer will\npay some money to the park owner.\nCalculate d .",
        "options": [
            "0.960",
            "1.152",
            "1.728",
            "1.800",
            "2.160"
        ],
        "answerLetter": "E",
        "answer": "2.160",
        "explanation": "Official solution: E\n\nFor Policy A, the relevant equation is\n− 1.44/ μ\n0.64 = P L ( > 1.44) = e\nln(0.64) = − 0.44629 = − 1.44 / μ\nμ = 3.2266.\nFor Policy B, the relevant equation is\n− d /3.2266\n0.512 = P L ( > d ) = e\nln(0.512) = − 0.6694 = − d / 3.2266\nd = 2.1599."
    },
    {
        "id": 161,
        "topic": "SOA Exam P Sample Question",
        "question": "The distribution of the size of claims paid under an insurance policy has probability\ndensity function\na\n’\n’ cx , 0 < x < 5\nf ( ) x = ’\n0, otherwise,\n’\n’\nWhere a >0 and c > 0.\nFor a randomly selected claim, the probability that the size of the claim is less than 3.75\nis 0.4871.\nCalculate the probability that the size of a randomly selected claim is greater than 4.",
        "options": [
            "0.404",
            "0.428",
            "0.500",
            "0.572",
            "0.596"
        ],
        "answerLetter": "B",
        "answer": "0.428",
        "explanation": "Official solution: B\n\na + 1\n5\n5 a + 1\na\n1 = cx dx = c ⇒ c = .\nBecause the density function must integrate to 1,\n∫\na + 1\n0\na + 1\n5\nFrom the given probability,\na + 1\na + 1 a + 1\n3.75\n3.75 a + 1 3.75 3.75\n’ ’\na\n0.4871 = cx dx = c = =\n’ ’\n∫\na + 1\n0\na + 1 a + 1 5\n5 ’ ’\nln(0.4871) = − 0.71929 = ( a + 1) ln(3.75 / 5) = − 0.28768( a + 1)\na = − ( 0.71929) / ( 0.28768) − − 1 = 1.5.\nThe probability of a claim exceeding 4 is,\n1.5 1 +\na + 1 a + 1 a + 1 a + 1\n5\n5 − 4 a + 1 5 − 4 ’ 4 ’\na\ncx dx = c = = 1 − = 0.42757.\n’ ’\n∫\na + 1\n4\na + 1 a + 1 5\n5 ’ ’"
    },
    {
        "id": 162,
        "topic": "SOA Exam P Sample Question",
        "question": "Company XYZ provides a warranty on a product that it produces. Each year, the number\nof warranty claims follows a Poisson distribution with mean c . The probability that no\nwarranty claims are received in any given year is 0.60.\nCompany XYZ purchases an insurance policy that will reduce its overall warranty claim\npayment costs. The insurance policy will pay nothing for the first warranty claim\nreceived and 5000 for each claim thereafter until the end of the year.\nCalculate the expected amount of annual insurance policy payments to Company XYZ.",
        "options": [
            "554",
            "872",
            "1022",
            "1354",
            "1612"
        ],
        "answerLetter": "A",
        "answer": "554",
        "explanation": "Official solution: A\n\nLet N denote the number of warranty claims received. Then,\n− c\n0.6 = P N ( = 0) = e ⇒ c = − ln(0.6) = 0.5108.\nThe expected yearly insurance payments are:\n5000[ P N ( = 2) + 2 P N ( = 3) + 3 P N ( = 4) + ’ ]\n= 5000[ P N ( = 1) + 2 P N ( = 2) + 3 P N ( = 3) + ’ ] − 5000[ P N ( = 1) + P N ( = 2) + P N ( = 3) + ’ ]\n= 5000 E N ( ) − 5000[1 − P N ( = 0)] = 5000(0.5108) − 5000(1 − 0.6) = 554."
    },
    {
        "id": 163,
        "topic": "SOA Exam P Sample Question",
        "question": "For a certain health insurance policy, losses are uniformly distributed on the interval\n[0, b ]. The policy has a deductible of 180 and the expected value of the unreimbursed\nportion of a loss is 144.\nCalculate b.",
        "options": [
            "236",
            "288",
            "388",
            "450",
            "468"
        ],
        "answerLetter": "D",
        "answer": "450",
        "explanation": "Official solution: D\n\nIf L is the loss, the unreimbursed loss, X is\nL , L ≤ 180\n’\nX = ’\n180, L > 180.\n’\nThe expected unreimbursed loss is\n180 180\n1 b − 180\n144 = E X ( ) = l f l [ ( )] dl + 180 Pr( L > 180) = l dl + 180\n∫ ∫\n0 0\nb b\n180\n2 2 2 2\nl 180 180 180\n= + 180 − = + 180 −\n2 b b 2 b b\n0\n2 2\n144 b = 180 / 2 + 180 b − 180\n16, 200 = 36 b\nb = 450."
    },
    {
        "id": 164,
        "topic": "SOA Exam P Sample Question",
        "question": "The working lifetime, in years, of a particular model of bread maker is normally\ndistributed with mean 10 and variance 4.\nCalculate the 12th percentile of the working lifetime, in years.",
        "options": [
            "5.30",
            "7.65",
            "8.41",
            "12.35",
            "14.70"
        ],
        "answerLetter": "B",
        "answer": "7.65",
        "explanation": "Official solution: B\n\nLet X be normal with mean 10 and variance 4. Let Z have the standard normal distribution. Let\n= 12th percentile. Then\nX − 10 p − 10 p − 10\n’ ’ ’ ’\n0.12 = P X ( ≤ p ) = P ≤ = P Z ≤ .\n’ ’ ’ ’\n2 2 2\n’ ’ ’ ’\nFrom the tables, P Z ( ≤ − 1.175) = 0.12. Therefore,\np − 10\n= − 1.175; p − 10 = − 2.35; p = 7.65.\n2"
    },
    {
        "id": 165,
        "topic": "SOA Exam P Sample Question",
        "question": "The profits of life insurance companies A and B are normally distributed with the same\nmean. The variance of company B's profit is 2.25 times the variance of company A's\nprofit. The 14th percentile of company A’s profit is the same as the p th percentile of\ncompany B’s profit.\nCalculate p .",
        "options": [
            "5.3",
            "9.3",
            "21.0",
            "23.6",
            "31.6"
        ],
        "answerLetter": "D",
        "answer": "23.6",
        "explanation": "Official solution: D\n\nFrom the normal table, the 14th percentile is associated with a z -score of −1.08 . Since the\nmeans are equal and the standard deviation of company B's profit is 2.25 = 1.5 times the\nstandard deviation of company A's profit, a profit that is 1.08 standard deviations below the\nmean for company A would be1.08/1.5 = 0.72 standard deviations below the mean for company\nB. From the normal table, a z -score of −0.72 is associated with the 23.6th percentile."
    },
    {
        "id": 166,
        "topic": "SOA Exam P Sample Question",
        "question": "The distribution of values of the retirement package offered by a company to new\nemployees is modeled by the probability density function\n1\n’ − ( x − 5)\n1\n5\n’ e , x > 5\nf ( ) x = ’\n5\n’\n0, otherwise.\n’\nCalculate the variance of the retirement package value for a new employee, given that the\nvalue is at least 10.",
        "options": [
            "15",
            "20",
            "25",
            "30",
            "35"
        ],
        "answerLetter": "C",
        "answer": "25",
        "explanation": "Official solution: C\n\nThe conditional variance is\n2 2\nVar X ( | X ≥ 10) = E X ( | X ≥ 10) − E X ( | X ≥ 10)\n2\n∞ ∞\n’ ’\n2 − 0.2( x − 5) − 0.2( x − 5)\nx (0.2) e dx x (0.2) e dx\n’ ’\n∫ ∫\n10 10\n’ ’\n= − .\n∞ ∞\n’ ’\n− 0.2( x − 5) − 0.2( x − 5)\n0.2 e dx 0.2 e dx\n’ ’\n∫ ∫\n10 10\n’ ’\nPerforming integration (using integration by parts) produces the answer of 25.\nAn alternative solution is to first determine the density function for the conditional distribution.\nIt is\n− 0.2( y − 5) − 0.2( y − 5) − 0.2( y − 5)\n0.2 e 0.2 e 0.2 e\n− 0.2( y − 10)\nf ( y ) = = = = 0.2 e , y > 10\n.\n∞ ∞ − 0.2(5)\n− 0.2( x − 5)\ne\n− 0.2( x − 5)\n− e\n0.2 e dx\n10\n∫\n10\nThen note that Y – 10 has an exponential distraction with mean 5. Subtracting a constant does not\nchange the variance, so the variance of Y is also 25."
    },
    {
        "id": 167,
        "topic": "SOA Exam P Sample Question",
        "question": "Insurance companies A and B each earn an annual profit that is normally distributed with\nthe same positive mean. The standard deviation of company A’s annual profit is one half\nof its mean.\nIn a given year, the probability that company B has a loss (negative profit) is 0.9 times\nthe probability that company A has a loss.\nCalculate the ratio of the standard deviation of company B’s annual profit to the standard\ndeviation of company A’s annual profit.",
        "options": [
            "0.49",
            "0.90",
            "0.98",
            "1.11",
            "1.71"
        ],
        "answerLetter": "C",
        "answer": "0.98",
        "explanation": "Official solution: C\n\nLet X and Y represent the annual profits for companies A and B , respectively and m represent the\ncommon mean and s the standard deviation of Y . Let Z represent the standard normal random\nvariable.\nThen because X ’s standard deviation is one-half its mean,\nX − m 0 − m\n’ ’\nP X ( < 0) = P < = P Z ( < − 2) = 0.0228.\n’ ’\n0.5 m 0.5 m\n’ ’\nTherefore company B’s probability of a loss is 0.9(0.0228) = 0.02052. Then,\nY m 0 m\n’ − − ’\n0.02052 = P Y ( < 0) = P < = P Z ( < − m / s ) . From the tables, –2.04 = – m / s and\n’ ’\ns s\n’ ’\ntherefore s = m /2.04. The ratio of the standard deviations is ( m /2.04)/(0.5 m ) = 0.98."
    },
    {
        "id": 168,
        "topic": "SOA Exam P Sample Question",
        "question": "Claim amounts at an insurance company are independent of one another. In year one,\nclaim amounts are modeled by a normal random variable X with mean 100 and standard\ndeviation 25. In year two, claim amounts are modeled by the random variable\nY = 1.04 X + 5.\nCalculate the probability that a random sample of 25 claim amounts in year two average\nbetween 100 and 110.",
        "options": [
            "0.48",
            "0.53",
            "0.54",
            "0.67",
            "0.68"
        ],
        "answerLetter": "B",
        "answer": "0.53",
        "explanation": "Official solution: B\n\nY is a normal random variable with mean 1.04(100) + 5 = 109 and standard deviation 1.04(25) =\n26. The average of 25 observations has mean 109 and standard deviation 26/5 = 5.2. The\nrequested probability is\n100 − 109 110 − 109\n’ ’\nP (100 < sample mean < 110) = P = − 1.73 < Z < = 0.19\n’ ’\n5.2 5.2\n’ ’\n= 0.5753 − (1 − 0.9582) = 0.5335."
    },
    {
        "id": 169,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company will cover losses incurred from tornadoes in a single calendar\nyear. However, the insurer will only cover losses for a maximum of three separate\ntornadoes during this timeframe. Let X be the number of tornadoes that result in at least\n50 million in losses, and let Y be the total number of tornadoes. The joint probability\nfunction for X and Y is\nc x ( + 2 ), y for x = 0,1, 2,3, y = 0,1, 2,3, x ≤ y\n’\np x y ( , ) = ’\n0, otherwise,\n’\nwhere c is a constant.\nCalculate the expected number of tornadoes that result in fewer than 50 million in losses.",
        "options": [
            "0.19",
            "0.28",
            "0.76",
            "1.00",
            "1.10"
        ],
        "answerLetter": "E",
        "answer": "1.10",
        "explanation": "Official solution: E\n\nThe possible events are (0,0), (0,1), (0,2), (0,3), (1,1), (1,2), (1,3), (2,2), (2,3), and (3,3). The\nprobabilities (without c ) sum to 0 + 2 + 4 + 6 + 3 + 5 + 7 + 6 + 8 + 9 = 50. Therefor c = 1/50.\nThe number of tornadoes with fewer than 50 million in losses is Y – X . The expected value is\n(1/50)[0(0) + 1(2) + 2(4) + 3(6) + 0(3) + 1(5) + 2(7) + 0(6) + 1(8) + 0(9)]=55/50 = 1.1."
    },
    {
        "id": 170,
        "topic": "SOA Exam P Sample Question",
        "question": "At a polling booth, ballots are cast by ten voters, of whom three are Republicans, two are\nDemocrats, and five are Independents. A local journalist interviews two of these voters,\nchosen randomly.\nCalculate the expectation of the absolute value of the difference between the number of\nRepublicans interviewed and the number of Democrats interviewed.",
        "options": [
            "1/5",
            "7/15",
            "3/5",
            "11/15",
            "1"
        ],
        "answerLetter": "D",
        "answer": "11/15",
        "explanation": "Official solution: D\n\nConsider three cases, one for each result of the first interview.\nIndependent (prob 0.5): Expected absolute difference is (4/9)(0) +(5/9)(1) = 5/9\nRepublican (prob =0.3): Expected absolute difference is (2/9)(0) + (5/9)(1) + (2/9)(2) = 1\nDemocrat (prob = 0.2): Expected absolute difference is (3/9)(0) + (5/9)(1) + (1/9)(2) = 7/9.\nThe unconditional expectation is 0.5(5/9) + 0.3(1) + 0.2(7/9) = 6.6/9 = 11/15.\nAlternatively, the six possible outcomes can be listed along with their probabilities and absolute\ndifferences."
    },
    {
        "id": 171,
        "topic": "SOA Exam P Sample Question",
        "question": "The random variables X and Y have joint probability function p ( x,y ) for x = 0,1 and\ny = 0,1,2.\nSuppose 3 p (1,1) = p (1,2), and p (1,1) maximizes the variance of XY.\nCalculate the probability that X or Y is 0.",
        "options": [
            "11/25",
            "23/50",
            "23/49",
            "26/49",
            "14/25"
        ],
        "answerLetter": "C",
        "answer": "23/49",
        "explanation": "Official solution: C\n\nLet Z = XY . Let a , b , and c be the probabilities that Z takes on the values 0, 1, and 2, respectively.\nWe have b = p (1,1) and c = p (1,,2) and thus 3 b = c . And because the probabilities sum to 1,\na = 1 – b – c = 1 – 4 b . Then, E(Z) = b + 2c = 7b, E(Z*Z) = b + 4 c = 13 b . Then,\n2\nVar Z ( ) = 13 b − 49 b\n( d / db Var Z ) ( ) = 13 − 98 b = 0 ⇒ b = 13 / 98.\nThe probability that either X or Y is zero is the same as the probability that Z is 0 which is\na = 1 – 4 b = 46/98 = 23/49."
    },
    {
        "id": 172,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of severe storms that strike city J in a year follows a binomial distribution\nwith n = 5 and p = 0.6. Given that m severe storms strike city J in a year, the number of\nsevere storms that strike city K in the same year is m with probability 1/2, m + 1 with\nprobability 1/3, and m + 2 with probability 1/6.\nCalculate the expected number of severe storms that strike city J in a year during which 5\nsevere storms strike city K.",
        "options": [
            "3.5",
            "3.7",
            "3.9",
            "4.0",
            "5.7"
        ],
        "answerLetter": "C",
        "answer": "3.9",
        "explanation": "Official solution: C\n\nLet J and K be the random variables for the number of severe storms in each city.\nP K ( = 5 | J = j P J ) ( = j )\nP J ( = j | K = 5) =\nP K ( = 5)\n5\n’ ’\n3 2\nP K ( = 5 | J = 3) = 1/ 6, P J ( = 3) = 0.6 0.4 = 0.3456\n’ ’\n3\n’ ’\n5\n’ ’\n4 1\nP K ( = 5 | J = 4) = 1/ 3, P J ( = 4) = 0.6 0.4 = 0.2592\n’ ’\n4\n’ ’\n5\n’ ’\n5 0\nP K ( = 5 | J = 5) = 1/ 2, P J ( = 5) = 0.6 0.4 = 0.07776\n’ ’\n5\n’ ’\nP K ( = 5) = (1/ 6)(0.3456) + (1/ 3)(0.25 92) + (1/ 2)(0.07776) = 0.18288\n(1/ 6)(0.3456)\nP J ( = 3 | K = 5) = = 0.31496\n0.18288\n(1/ 3)(0.2592)\nP J ( = 4 | K = 5) = = 0.47244\n0.18288\n(1/ 2)(0.07776)\nP J ( = 5 | K = 5) = = 0.21260\n0.18288\nE J ( | K = 5) = 3(0.31496) + 4(0.47244) + 5(0.21260) = 3.89764."
    },
    {
        "id": 173,
        "topic": "SOA Exam P Sample Question",
        "question": "Let N denote the number of accidents occurring during one month on the northbound side\nof a highway and let S denote the number occurring on the southbound side.\nSuppose that N and S are jointly distributed as indicated in the table.\nN \\ S 0 1 2 3 or more\n0 0.04 0.06 0.10 0.04\n1 0.10 0.18 0.08 0.03\n2 0.12 0.06 0.05 0.02\n3 or more 0.05 0.04 0.02 0.01\nCalculate Var ( N | N + S = 2).",
        "options": [
            "0.48",
            "0.55",
            "0.67",
            "0.91",
            "1.25"
        ],
        "answerLetter": "B",
        "answer": "0.55",
        "explanation": "Official solution: B\n\nGiven N + S = 2, there are 3 possibilities ( N , S ) = (2,0), (1,1), (0,2) with probabilities 0.12, 0.18,\nand 0.10 respectively.\nThe associated conditional probabilities are\nP( N = 0 | N + S = 2) = 0.10/0.40 = 0.25,\nP( N = 1 | N + S = 2) = 0.18/0.40 = 0.45,\nP( N = 2 | N + S = 2) = 0.12/0.40 = 0.30.\nThe mean is 0.25(0) + 0.45(1) + 0.30(2) = 1.05.\nThe second moment is 0.25(0) + 0.45(1) + 0.30(4) = 1.65.\nThe variance is 1.65 – (1.05)(1.05) = 0.5475."
    },
    {
        "id": 174,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company has an equal number of claims in each of three territories. In each\nterritory, only three claim amounts are possible: 100, 500, and 1000. Based on the\ncompany’s data, the probabilities of each claim amount are:\nClaim Amount\n100 500 1000\nTerritory 1 0.90 0.08 0.02\nTerritory 2 0.80 0.11 0.09\nTerritory 3 0.70 0.20 0.10\nCalculate the standard deviation of a randomly selected claim amount.",
        "options": [
            "254",
            "291",
            "332",
            "368",
            "396"
        ],
        "answerLetter": "A",
        "answer": "254",
        "explanation": "Official solution: A\n\nBecause the territories are evenly distributed, the probabilities can be averaged. Thus the\nprobability of a 100 claim is 0.80, of a 500 claim is 0.13, and of a 1000 claim is 0.07. The mean\nis 0.80(100) + 0.13(500) + 0.07(1000) = 215. The second moment is 0.80(10,000) +\n0.13(250,000) + 0.07(1,000,000) = 110,500. The variance is 110,500 – (215)(215) = 64,275.\nThe standard deviation is 253.53."
    },
    {
        "id": 175,
        "topic": "SOA Exam P Sample Question",
        "question": "At the start of a week, a coal mine has a high-capacity storage bin that is half full.\nDuring the week, 20 loads of coal are added to the storage bin. Each load of coal has a\nvolume that is normally distributed with mean 1.50 cubic yards and standard deviation\n0.25 cubic yards.\nDuring the same week, coal is removed from the storage bin and loaded into 4 railroad\ncars. The amount of coal loaded into each railroad car is normally distributed with mean\n7.25 cubic yards and standard deviation 0.50 cubic yards.\nThe amounts added to the storage bin or removed from the storage bin are mutually\nindependent.\nCalculate the probability that the storage bin contains more coal at the end of the week\nthan it had at the beginning of the week.",
        "options": [
            "0.56",
            "0.63",
            "0.67",
            "0.75",
            "0.98"
        ],
        "answerLetter": "D",
        "answer": "0.75",
        "explanation": "Official solution: D\n\nWith each load of coal having mean 1.5 and standard deviation 0.25, twenty loads have a mean\nof 20(1.5) = 30 and a variance of 20(0.0625) = 1.25. The total amount removed is normal with\nmean 4(7.25) = 29 and a variance of 4(0.25) = 1. The difference is normal with mean 30 – 29 =\n1 and standard deviation sqrt(1.25 + 1) = 1.5. If D is that difference,\n0 − 1\n’ ’\nP D ( > 0) = P Z > = − 0.67 = 0.7486.\n’ ’\n1.5\n’ ’"
    },
    {
        "id": 176,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company insures a good driver and a bad driver on the same policy. The\ntable below gives the probability of a given number of claims occurring for each of these\ndrivers in the next ten years.\nNumber Probability for Probability for\nof claims the good driver the bad driver\n0 0.5 0.2\n1 0.3 0.3\n2 0.2 0.4\n3 0.0 0.1\nThe number of claims occurring for the two drivers are independent.\nCalculate the mode of the distribution of the total number of claims occurring on this\npolicy in the next ten years.",
        "options": [
            "0",
            "1",
            "2",
            "3",
            "4"
        ],
        "answerLetter": "C",
        "answer": "2",
        "explanation": "Official solution: C\n\nThe probability needs to be calculated for each total number of claims.\n0: 0.5(0.2) = 0.10\n1: 0.5(0.3) + 0.3(0.2) = 0.21\n2: 0.5(0.4) + 0.3(0.3) + 0.2(0.2) = 0.33\n3: 0.5(0.1) + 0.3(0.4) + 0.2(0.3) + 0.0(0.2) = 0.23\nAt this point there is only 0.13 probability remaining, so the mode must be at 2."
    },
    {
        "id": 177,
        "topic": "SOA Exam P Sample Question",
        "question": "In a group of 15 health insurance policyholders diagnosed with cancer, each policyholder\nhas probability 0.90 of receiving radiation and probability 0.40 of receiving\nchemotherapy. Radiation and chemotherapy treatments are independent events for each\npolicyholder, and the treatments of different policyholders are mutually independent.\nThe policyholders in this group all have the same health insurance that pays 2 for\nradiation treatment and 3 for chemotherapy treatment.\nCalculate the variance of the total amount the insurance company pays for the radiation\nand chemotherapy treatments for these 15 policyholders.",
        "options": [
            "13.5",
            "37.8",
            "108.0",
            "202.5",
            "567.0"
        ],
        "answerLetter": "B",
        "answer": "37.8",
        "explanation": "Official solution: B\n\nLet X represent the number of policyholders who undergo radiation.\nLet Y represent the number of policyholders who undergo chemotherapy.\nX and Y are independent and binomially distributed with 15 trials each and with \"success\"\nprobabilities 0.9 and 0.4, respectively.\nThe variances are 15(0.9)(0.1) = 1.35 and 15(0.4)(0.6) = 3.6.\nThe total paid is 2 X + 3 Y and so the variance is 4(1.35) + 9(3.6) = 37.8."
    },
    {
        "id": 178,
        "topic": "SOA Exam P Sample Question",
        "question": "In a large population of patients, 20% have early stage cancer, 10% have advanced stage\ncancer, and the other 70% do not have cancer. Six patients from this population are\nrandomly selected.\nCalculate the expected number of selected patients with advanced stage cancer, given that\nat least one of the selected patients has early stage cancer.",
        "options": [
            "0.403",
            "0.500",
            "0.547",
            "0.600",
            "0.625"
        ],
        "answerLetter": "C",
        "answer": "0.547",
        "explanation": "Official solution: C\n\nLet X and Y represent the number of selected patients with early stage and advanced stage\ncancer, respectively. We need to calculate E Y ( | X ≥ 1) .\nFrom conditioning on whether or not X ≥ 1 , we have\nE Y ( ) = P X [ = 0] E Y ( | X = 0) + P X [ ≥ 1] E Y ( | X ≥ 1) .\n6 6 6\nObserve that , , and\nP X [ = 0] = (1 − 0.2) = (0.8) P X [ ≥ 1] = 1 − P X [ = 0] = 1 − (0.8)\nE Y ( ) = 6(0.1) = 0.6 . Also, note that if none of the 6 selected patients have early stage cancer,\nthen each of the 6 selected patients would independently have conditional probability\n0.1 1\n= of having late stage cancer, so E Y ( | X = 0) = 6(1/ 8) = 0.75 .\n1 − 0.2 8\nTherefore,\n6\nE Y ( ) − P X [ = 0] E Y ( | X = 0) 0.6 − (0.8) (0.75)\nE Y ( | X ≥ 1) = = = 0.547\n.\n6\nP X [ ≥ 1] 1 − (0.8)"
    },
    {
        "id": 179,
        "topic": "SOA Exam P Sample Question",
        "question": "Four distinct integers are chosen randomly and without replacement from the first twelve\npositive integers. Let X be the random variable representing the second largest of the\nfour selected integers, and let p be the probability function for X .\nDetermine p ( x ), for integer values of x , where p ( x ) > 0.\n( x − 1)( x − 2)(12 − x )",
        "options": [
            "990 ( x − 1)( x − 2)(12 − x )",
            "495 ( x − 1)(12 − x )(11 − x )",
            "495 ( x − 1)(12 − x )(11 − x )",
            "990 (10 − x )(12 − x )(11 − x )",
            "990"
        ],
        "answerLetter": "A",
        "answer": "990 ( x − 1)( x − 2)(12 − x )",
        "explanation": "Official solution: A\n\nBecause there must be two smaller values and one larger value than X , X cannot be 1, 2, or 12. If\nX is 3, there is one choice for the two smallest of the four integers and nine choices for the\nlargest integer. If X is 4, there are three choices for the two smallest of the four integers and\neight choices for the largest integer. In general, if X = x , there are ( x – 1) choose (2) choices for\nthe two smallest integers and 12 – x choices for the largest integer. The total number of ways of\nchoosing 4 integers from 12 integers is 12 choose 4 which is 12!/(4!8!) = 495. So the probability\nthat X = x is:\nx − 1\n’ ’\n(12 − x )\n’ ’\n2 ( x − 1)( x − 2)(12 − x )\n’ ’\n.\n=\n495 990"
    },
    {
        "id": 180,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy covers losses incurred by a policyholder, subject to a deductible of\n10,000. Incurred losses follow a normal distribution with mean 12,000 and standard\ndeviation c. The probability that a loss is less than k is 0.9582, where k is a constant.\nGiven that the loss exceeds the deductible, there is a probability of 0.9500 that it is less\nthan k .\nCalculate c .",
        "options": [
            "2045",
            "2267",
            "2393",
            "2505",
            "2840"
        ],
        "answerLetter": "A",
        "answer": "2045",
        "explanation": "Official solution: A\n\nWe have\nP X ( < k ) − P X ( ≤ 10, 000)\n0.95 = P X ( < k | X > 10, 000) =\n1 − P (X ≤ 10, 000)\n0.95[1 − P X ( ≤ 10, 000)] = 0.9582 − P X ( ≤ 10, 000)\n0.9582 − 0.95\nP X ( ≤ 10, 000) = = 0.164\n1 − 0.95\n10, 000 − 12, 000\n’ ’\n0.164 = Φ .\n’ ’\nc\n’ ’\nThe z -value that corresponds to 0.164 is between –0.98 and –0.97. Interpolating leads to\nz = –0.978. Then,\n10, 000 − 12, 000 − 2, 000\n’ ’\n0.164 = Φ ⇒ − 0.978 = ⇒ c = 2045.\n’ ’\nc c\n’ ’"
    },
    {
        "id": 181,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses covered by an insurance policy are modeled by a uniform distribution on the\ninterval [0, 1000]. An insurance company reimburses losses in excess of a deductible of\n250.\nCalculate the difference between the median and the 20th percentile of the insurance\ncompany reimbursement, over all losses.",
        "options": [
            "225",
            "250",
            "300",
            "375",
            "500"
        ],
        "answerLetter": "B",
        "answer": "250",
        "explanation": "Official solution: B\n\nBefore applying the deductible, the median is 500 and the 20th percentile is 200. After applying\nthe deductible, the median payment is 500 – 250 = 250 and the 20th percentile is max(0, 200 –\n250) = 0. The difference is 250."
    },
    {
        "id": 182,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance agent’s files reveal the following facts about his policyholders:\ni) 243 own auto insurance.\nii) 207 own homeowner insurance.\niii) 55 own life insurance and homeowner insurance.\niv) 96 own auto insurance and homeowner insurance.\nv) 32 own life insurance, auto insurance and homeowner insurance.\nvi) 76 more clients own only auto insurance than only life insurance.\nvii) 270 own only one of these three insurance products.\nCalculate the total number of the agent’s policyholders who own at least one of these\nthree insurance products.",
        "options": [
            "389",
            "407",
            "423",
            "448",
            "483"
        ],
        "answerLetter": "B",
        "answer": "407",
        "explanation": "Official solution: B\n\n32 own L/A/H\n55 own L/H so 55 – 32 = 23 own L/H/notA\n96 own A/H so 96 – 32 = 64 own A/H/notL\n207 own H so 207 – 32 – 23 – 64 = 88 own H only\nL only = X , A only = X + 76\n88 + X + ( X + 76) = 270 so X = 53 so L only = 53, A only = 129\n129 + 64 + 32 + L/A/notH = 243 so L/A/notH = 18\nTotal clients = 53 + 129 + 88 + 18 + 64 + 23 + 32 = 407\nAlternatively, a Venn diagram could be used to guide the calculations."
    },
    {
        "id": 183,
        "topic": "SOA Exam P Sample Question",
        "question": "A profile of the investments owned by an agent’s clients follows:\ni) 228 own annuities.\nii) 220 own mutual funds.\niii) 98 own life insurance and mutual funds.\niv) 93 own annuities and mutual funds.\nv) 16 own annuities, mutual funds, and life insurance.\nvi) 45 more clients own only life insurance than own only annuities.\nvii) 290 own only one type of investment (i.e., annuity, mutual fund, or life\ninsurance).\nCalculate the agent’s total number of clients who own at least one of these three\ninsurance products.",
        "options": [
            "455",
            "495",
            "496",
            "500",
            "516"
        ],
        "answerLetter": "D",
        "answer": "500",
        "explanation": "Official solution: D\n\nThen 290 = 45 + 45 + x + x , thus x = 100.\nAlso 228 = 100 + y + 16 + 77, thus y = 35.\nTotal clients = 145 + 82 + 16 + 35 + 100 + 77 + 45 = 500."
    },
    {
        "id": 184,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary compiles the following information from a portfolio of 1000 homeowners\ninsurance policies:\ni) 130 policies insure three-bedroom homes.\nii) 280 policies insure one-story homes.\niii) 150 policies insure two-bath homes.\niv) 30 policies insure three-bedroom, two-bath homes.\nv) 50 policies insure one-story, two-bath homes.\nvi) 40 policies insure three-bedroom, one-story homes.\nvii) 10 policies insure three-bedroom, one-story, two-bath homes.\nCalculate the number of homeowners policies in the portfolio that insure neither one-\nstory nor two-bath nor three-bedroom homes.",
        "options": [
            "310",
            "450",
            "530",
            "550",
            "570"
        ],
        "answerLetter": "D",
        "answer": "550",
        "explanation": "Official solution: D\n\nLet A, B , and C be the sets of policies in the portfolio on three-bedroom homes, one-story homes,\nand two-bath homes, respectively. We are asked to calculate 1000 − n A ( ∪ B ∪ C ) , where n ( D )\ndenotes the number of elements of the set D . Then,\nn A ( ∪ B ∪ C ) = n A ( ) + n B ( ) + n C ( ) − n A ( ∩ B ) − n A ( ∩ C ) − n B ( ∩ C ) + n A ( ∩ B ∩ C )\n= 130 + 280 + 150 − 40 − 30 − 50 + 10 = 450.\nThe answer is 1000 – 450 = 550."
    },
    {
        "id": 185,
        "topic": "SOA Exam P Sample Question",
        "question": "Each week, a subcommittee of four individuals is formed from among the members of a\ncommittee comprising seven individuals. Two of the four subcommittee members are\nthen assigned to lead the subcommittee, one as chair and the other as secretary.\nCalculate the maximum number of consecutive weeks that can elapse without having the\nsubcommittee contain four individuals who have previously served together with the\nsame subcommittee chair.",
        "options": [
            "70",
            "140",
            "210",
            "420",
            "840"
        ],
        "answerLetter": "B",
        "answer": "140",
        "explanation": "Official solution: B\n\nWe seek the number of ways to select 4 individuals from 7 and choose one selected member as\nsubcommittee chair. (The existence of a subcommittee secretary is irrelevant.) There are (7\nchoose 4) = 7(6)(5)(3)/4! = 35 ways to form a collection of 4 individuals from 7. For each of\nthem, there are 4 ways to assign a chair. The product, 140, is the number of different ways to\nform a subcommittee of 4 individuals and assign a chair and thus is the maximum number\nwithout repetition."
    },
    {
        "id": 186,
        "topic": "SOA Exam P Sample Question",
        "question": "Bowl I contains eight red balls and six blue balls. Bowl II is empty. Four balls are\nselected at random, without replacement, and transferred from bowl I to bowl II. One\nball is then selected at random from bowl II.\nCalculate the conditional probability that two red balls and two blue balls were\ntransferred from bowl I to bowl II, given that the ball selected from bowl II is blue.",
        "options": [
            "0.21",
            "0.24",
            "0.43",
            "0.49",
            "0.57"
        ],
        "answerLetter": "D",
        "answer": "0.49",
        "explanation": "Official solution: D\n\nP (2 red and 2 blue transferred and blue drawn)\nP (2 red and 2 blue transferred | blue drawn) =\nP (blue drawn)\n8 6\n’ ’’ ’\n’ ’’ ’\n2 2\n2 28(15) 2 840\n’ ’’ ’\nP (2 red and 2 blue transferred and blue drawn) = × = × =\n14\n’ ’ 4 1001 4 4004\n’ ’\n4\n’ ’\n’ 8 ’’ 6 ’ ’ 8 ’’ 6 ’ ’ 8 ’’ 6 ’ ’ 8 ’’ 6 ’\n’ ’’ ’ ’ ’’ ’ ’ ’’ ’ ’ ’’ ’\n0 4 1 3 2 2 3 1\n4 3 2 1 60 + 480 + 840 + 336 1716\n’ ’’ ’ ’ ’’ ’ ’ ’’ ’ ’ ’’ ’\nP (blue drawn) = × + × + × + × = =\n14 14 14 14\n’ ’ 4 ’ ’ 4 ’ ’ 4 ’ ’ 4 4004 4004\n’ ’ ’ ’ ’ ’ ’ ’\n4 4 4 4\n’ ’ ’ ’ ’ ’ ’ ’\n8 40\nP (2 red and 2 blue transferred | blue drawn) = = 0.49.\n1716"
    },
    {
        "id": 187,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary has done an analysis of all policies that cover two cars. 70% of the policies\nare of type A for both cars, and 30% of the policies are of type B for both cars. The\nnumber of claims on different cars across all policies are mutually independent. The\ndistributions of the number of claims on a car are given in the following table.\nNumber of\nType A Type B\nClaims\n0 40% 25%\n1 30% 25%\n2 20% 25%\n3 10% 25%\nFour policies are selected at random.\nCalculate the probability that exactly one of the four policies has the same number of\nclaims on both covered cars.",
        "options": [
            "0.104",
            "0.250",
            "0.285",
            "0.417",
            "0.739"
        ],
        "answerLetter": "D",
        "answer": "0.417",
        "explanation": "Official solution: D\n\nIf a policy is of Type A, the probability that the two claims are equal is (0.4)(0.4) + (0.3)(0.3) +\n(0.2)(0.2) + (0.1)(0.1) = 0.16 + 0.09 + 0.04 + 0.01 = 0.30.\nIf a policy is of Type B, the probability that the two claims are equal is 4(0.25)(0.25) = 0.25.\nTherefore, the probability that a randomly selected policy has equal claims is 0.70(0.30) +\n0.30(0.25) = 0.285.\nIf four policies are selected, the desired probability is the probability that a binomial random\nvariable with n = 4 and p = 0.285 is 1. This is 4(0.285)(1 – 0.285)^3 = 0.417."
    },
    {
        "id": 188,
        "topic": "SOA Exam P Sample Question",
        "question": "A company sells two types of life insurance policies (P and Q) and one type of health\ninsurance policy. A survey of potential customers revealed the following:\ni) No survey participant wanted to purchase both life policies.\nii) Twice as many survey participants wanted to purchase life policy P as life policy\nQ.\niii) 45% of survey participants wanted to purchase the health policy.\niv) 18% of survey participants wanted to purchase only the health policy.\nv) The event that a survey participant wanted to purchase the health policy was\nindependent of the event that a survey participant wanted to purchase a life policy.\nCalculate the probability that a randomly selected survey participant wanted to purchase\nexactly one policy.",
        "options": [
            "0.51",
            "0.60",
            "0.69",
            "0.73",
            "0.78"
        ],
        "answerLetter": "A",
        "answer": "0.51",
        "explanation": "Official solution: A\n\nLet A = event that person wants life policy P\nB = event that person wants life policy Q\nC = event that person wants the health policy\nand let a, b, c, d be the probabilities of the regions as shown.\ni) is reflected by no intersection of A and B\niv) is reflected by the 0.18 in the diagram\nii) implies a + b = 2(c + d)\niii) implies b + c + 0.18 = 0.45 or b + c = 0.27\nv) implies P([A or B] and C) = P(A or B)P(C) or b + c = (a + b + c + d)(0.45)\nSo 0.27 = (a + d + 0.27)(0.45) and then a + d = 0.33.\nThe desired probability is a + 0.18 + d = 0.33 + 0.18 = 0.51."
    },
    {
        "id": 189,
        "topic": "SOA Exam P Sample Question",
        "question": "A state is starting a lottery game. To enter this lottery, a player uses a machine that\nrandomly selects six distinct numbers from among the first 30 positive integers. The\nlottery randomly selects six distinct numbers from the same 30 positive integers. A\nwinning entry must match the same set of six numbers that the lottery selected.\nThe entry fee is 1, each winning entry receives a prize amount of 500,000, and all other\nentries receive no prize.\nCalculate the probability that the state will lose money, given that 800,000 entries are\npurchased.",
        "options": [
            "0.33",
            "0.39",
            "0.61",
            "0.67",
            "0.74"
        ],
        "answerLetter": "B",
        "answer": "0.39",
        "explanation": "Official solution: B\n\nThe state will receive 800,000($1) = $800,000 in revenue, and will lose money if there are 2 or\nmore winning tickets sold. The player’s entry can be viewed as fixed. The probability the\nlottery randomly selects those same six numbers is from a hypergeometric distribution and is\n6 24\n’ ’’ ’\n’ ’’ ’\n6 0\n1(1) 6(5)(4)(3)(2)(1) 1\n’ ’’ ’\n= = = .\n30!\n30 30(29)(28)(27)(26)(25) 593,775\n’ ’\n’ ’\n6!(24!)\n6\n’ ’\nThe number of winners has a binomial distribution with n = 800,000 and p = 1/593,775. The\ndesired probability is\nPr(2 or more winners) = 1 − Pr(0 winners) − Pr(1 winner)\n0 800,000 1 799,999\n800,000 800,000\n’ ’ ’ 1 ’ ’ 593,774 ’ ’ ’ ’ 1 ’ ’ 593,774 ’\n= 1 − −\n’ ’ ’ ’\n’ ’ ’ ’ ’ ’ ’ ’\n0 593,775 593,775 1 593,775 593,775\n’ ’ ’ ’ ’ ’ ’ ’\n’ ’ ’ ’\n= 1 − 0.2599 − 0.3502 = 0.39."
    },
    {
        "id": 190,
        "topic": "SOA Exam P Sample Question",
        "question": "A life insurance company has found there is a 3% probability that a randomly selected\napplication contains an error. Assume applications are mutually independent in this\nrespect.\nAn auditor randomly selects 100 applications.\nCalculate the probability that 95% or less of the selected applications are error-free.",
        "options": [
            "0.08",
            "0.10",
            "0.13",
            "0.15",
            "0.18"
        ],
        "answerLetter": "E",
        "answer": "0.18",
        "explanation": "Official solution: E\n\nThe number that have errors is a binomial random variable with p = 0.03 and n = 100. Let X be\nthe number that have errors. Then,\nPr(number that are error-free ≤ 95) = Pr( X ≥ 5) = 1 − P (0) − P (1) − P (2) − P (3) − P (4)\n100 100 100\n’ ’ ’ ’ ’ ’\n’ 100 ’ 0 100 1 99 2 98 3 97\n= 1 − 0.03 0.97 − 0.03 0.97 − 0.03 0.97 − 0.03 0.97\n( ) ( ) ( ) ( ) ( ) ( ) ( ) ( )\n’ ’ ’ ’ ’ ’ ’ ’\n0 1 2 3\n’ ’\n’ ’ ’ ’ ’ ’\n100\n’ ’\n4 96\n− 0.03 0.97 = 0.1821.\n( ) ( )\n’ ’\n4\n’ ’\nOr, the Poisson approximation can be used. Then, λ = 3 and\n− 3 0 − 3 1 − 3 2 − 3 3 − 3 4\ne 3 e 3 e 3 e 3 e 3 9 27 81\n’ ’\n− 3\nP X ≥ 5 = 1 − − − − − = 1 − e 1 + 3 + + + = 0.1847.\n( )\n’ ’\n0! 1! 2! 3! 4! 2 6 24\n’ ’"
    },
    {
        "id": 191,
        "topic": "SOA Exam P Sample Question",
        "question": "Let A, B, and C be events such that P [A] = 0.2, P [B] = 0.1, and P [C] = 0.3. The events\nA and B are independent, the events B and C are independent, and the events A and C are\nmutually exclusive.\nCalculate .\nP [A ∪ B ∪ C]",
        "options": [
            "0.496",
            "0.540",
            "0.544",
            "0.550",
            "0.600"
        ],
        "answerLetter": "D",
        "answer": "0.550",
        "explanation": "Official solution: D\n\nP A [ ∪ B ∪ C ] = P A [ ] + P B [ ] + P C [ ] − P A [ ∩ B ] − P A [ ∩ C ] − P B [ ∩ C ] + P A [ ∩ B ∩ C ]\n= 0.2 + 0.1 + 0.3 − 0.2(0.1) − 0 − 0.1(0.3) + 0 = 0.55."
    },
    {
        "id": 192,
        "topic": "SOA Exam P Sample Question",
        "question": "The annual numbers of thefts a homeowners insurance policyholder experiences are\nanalyzed over three years.\nDefine the following events:\ni) A = the event that the policyholder experiences no thefts in the three years.\nii) B = the event that the policyholder experiences at least one theft in the second\nyear.\niii) C = the event that the policyholder experiences exactly one theft in the first year.\niv) D = the event that the policyholder experiences no thefts in the third year.\nv) E = the event that the policyholder experiences no thefts in the second year, and at\nleast one theft in the third year.\nDetermine which three events satisfy the condition that the probability of their union\nequals the sum of their probabilities.",
        "options": [
            "Events A, B, and E",
            "Events A, C, and E",
            "Events A, D, and E",
            "Events B, C, and D",
            "Events B, C, and E"
        ],
        "answerLetter": "A",
        "answer": "Events A, B, and E",
        "explanation": "Official solution: A\n\nThe probability a union of three events equals the sum of their probabilities if and only if they\nare mutually exclusive, that is, no two of them can both occur.\nEvents A and B cannot both occur since no thefts in the first three years would imply no thefts in\nthe second year, thus precluding the possibility of at least 1 theft in the second year.\nEvents A and E cannot both occur since no thefts in the first three years would imply no thefts in\nthe third year, thus precluding the possibility of at least 1 theft in the third year.\nEvents B and E cannot both occur since it is impossible to experience both no thefts and at least\n1 theft in the second year.\nThus, events A, B, and E satisfy the desired condition."
    },
    {
        "id": 193,
        "topic": "SOA Exam P Sample Question",
        "question": "Four letters to different insureds are prepared along with accompanying envelopes. The\nletters are put into the envelopes randomly.\nCalculate the probability that at least one letter ends up in its accompanying envelope.",
        "options": [
            "27/256",
            "1/4",
            "11/24",
            "5/8",
            "3/4"
        ],
        "answerLetter": "D",
        "answer": "5/8",
        "explanation": "Official solution: D\n\nConsider the two mutually exclusive events “first envelope correct” and “first envelope\nincorrect.” The probability of the first event is 1/4 and meets the requirement of at least one\ncorrect. For the 3/4 of the time the first envelope is incorrect, there are now 3 more envelopes to\nfill. Of the six permutations, three will place one letter correctly. The total probability is 1/4 +\n3/4(3/6) = 5/8."
    },
    {
        "id": 194,
        "topic": "SOA Exam P Sample Question",
        "question": "A health insurance policy covers visits to a doctor’s office. Each visit costs 100. The\nannual deductible on the policy is 350. For a policy, the number of visits per year has the\nfollowing probability distribution:\nNumber of Visits 0 1 2 3 4 5 6\nProbability 0.60 0.15 0.10 0.08 0.04 0.02 0.01\nA policy is selected at random from those where costs exceed the deductible.\nCalculate the probability that this policyholder had exactly five office visits.",
        "options": [
            "0.050",
            "0.133",
            "0.286",
            "0.333",
            "0.429"
        ],
        "answerLetter": "C",
        "answer": "0.286",
        "explanation": "Official solution: C\n\nThe deductible is exceeded for 4, 5 or 6 office visits. Therefore, the requested probability is\n0.02/(0.04 + 0.02 + 0.01) = 0.286."
    },
    {
        "id": 195,
        "topic": "SOA Exam P Sample Question",
        "question": "A machine has two parts labelled A and B. The probability that part A works for one\nyear is 0.8 and the probability that part B works for one year is 0.6. The probability that\nat least one part works for one year is 0.9.\nCalculate the probability that part B works for one year, given that part A works for one\nyear.",
        "options": [
            "1/2",
            "3/5",
            "5/8",
            "3/4",
            "5/6"
        ],
        "answerLetter": "C",
        "answer": "5/8",
        "explanation": "Official solution: C\n\nLet A be the event that part A is working after one year and B be the event that part B is working\nafter one year. Then,\nP A ( and B ) P A ( ) + P B ( ) − P A ( or B ) 0.8 + 0.6 − 0.9\nP B ( | A ) = = = = 5 / 8.\nP A ( ) P A ( ) 0.8"
    },
    {
        "id": 196,
        "topic": "SOA Exam P Sample Question",
        "question": "Six claims are to be randomly selected from a group of thirteen different claims, which\nincludes two workers compensation claims, four homeowners claims and seven auto\nclaims.\nCalculate the probability that the six claims selected will include one workers\ncompensation claim, two homeowners claims and three auto claims.",
        "options": [
            "0.025",
            "0.107",
            "0.153",
            "0.245",
            "0.643"
        ],
        "answerLetter": "D",
        "answer": "0.245",
        "explanation": "Official solution: D\n\n2 4 7\n’ ’’ ’’ ’\n’ ’’ ’’ ’\n1 2 3\n’ ’’ ’’ ’\n= 0.245.\n13\n’ ’\n’ ’\n6\n’ ’"
    },
    {
        "id": 197,
        "topic": "SOA Exam P Sample Question",
        "question": "A drawer contains four pairs of socks, with each pair a different color. One sock at a\ntime is randomly drawn from the drawer until a matching pair is obtained.\nCalculate the probability that the maximum number of draws is required.",
        "options": [
            "0.0006",
            "0.0095",
            "0.0417",
            "0.1429",
            "0.2286"
        ],
        "answerLetter": "E",
        "answer": "0.2286",
        "explanation": "Official solution: E\n\nThe maximum number of draws needed is 5. This can only happen if the first four draws produce\nfour different colors. The first draw can be any sock. The second draw must be one of the 6 (of 7\nremaining) that are different. The third draw must be one of the 4 (of 6) that are different from\nthe first two. The fourth draw must be one of the 2 (of 5) that are different. The probability all\nof this happens is 1(6/7)(4/6)(2/5) = 0.2286."
    },
    {
        "id": 198,
        "topic": "SOA Exam P Sample Question",
        "question": "At a mortgage company, 60% of calls are answered by an attendant. The remaining 40%\nof callers leave their phone numbers. Of these 40%, 75% receive a return phone call the\nsame day. The remaining 25% receive a return call the next day.\nOf those who initially spoke to an attendant, 80% will apply for a mortgage. Of those\nwho received a return call the same day, 60% will apply. Of those who received a return\ncall the next day, 40% will apply.\nCalculate the probability that a person initially spoke to an attendant, given that he or she\napplied for a mortgage.",
        "options": [
            "0.06",
            "0.26",
            "0.48",
            "0.60",
            "0.69"
        ],
        "answerLetter": "E",
        "answer": "0.69",
        "explanation": "Official solution: E\n\nDefine the events as follows:\nA = applies for a mortgage\nS = initially spoke to an attendant\nR = call returned the same day\nN = call returned the next day\nThen, using Bayes’ Theorem,\nP A S P S ( | ) ( )\nP S ( | A ) =\nP A S P S ( | ) ( ) + P A R P R ( | ) ( ) + P A N P N ( | ) ( )\n0.8(0.6)\n= = 0.69.\n0.8(0.6) + 0.6(0.4)(0.75) + 0.4(0.4)(0.25)"
    },
    {
        "id": 199,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company studies back injury claims from a manufacturing company. The\ninsurance company finds that 40% of workers do no lifting on the job, 50% do moderate\nlifting and 10% do heavy lifting.\nDuring a given year, the probability of filing a claim is 0.05 for a worker who does no\nlifting, 0.08 for a worker who does moderate lifting and 0.20 for a worker who does\nheavy lifting.\nA worker is chosen randomly from among those who have filed a back injury claim.\nCalculate the probability that the worker’s job involves moderate or heavy lifting.",
        "options": [
            "0.75",
            "0.81",
            "0.85",
            "0.86",
            "0.89"
        ],
        "answerLetter": "A",
        "answer": "0.75",
        "explanation": "Official solution: A\n\nDefine the events as follows:\nC = files a claim\nN = no lifting\nM = moderate lifting\nH = heavy lifting\nThen, using Bayes’ Theorem,\nP C ( | N P N ) ( )\nP M ( or H | C ) = 1 − P N ( | C ) = 1 −\nP C ( | N P N ) ( ) + P C ( | M) P (M) + P C ( | H) P (H)\n0.05(0.4)\n= 1 − = 1 − 0.25 = 0.75.\n0.05(0.4) + 0.08(0.5) + 0.2(0.1)"
    },
    {
        "id": 200,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of traffic accidents occurring on any given day in Coralville is Poisson\ndistributed with mean 5. The probability that any such accident involves an uninsured\ndriver is 0.25, independent of all other such accidents.\nCalculate the probability that on a given day in Coralville there are no traffic accidents\nthat involve an uninsured driver.",
        "options": [
            "0.007",
            "0.010",
            "0.124",
            "0.237",
            "0.287"
        ],
        "answerLetter": "E",
        "answer": "0.287",
        "explanation": "Official solution: E\n\nFrom the Law of Total Probability, the required probability is\n∞\nP (0 accidents with an uninsured driver | k accidents) P k ( accidents)\n∑\nk = 0\n− 5 k − 5 − 3.75 k\n∞ e 5 e ∞ e (3.75)\nk − 1.25\n= (0.75) = = e = 0.287.\n∑ ∑\n− 3.75\nk = 0 k = 0\nk ! e k !"
    },
    {
        "id": 201,
        "topic": "SOA Exam P Sample Question",
        "question": "A group of 100 patients is tested, one patient at a time, for three risk factors for a certain\ndisease until either all patients have been tested or a patient tests positive for more than\none of these three risk factors. For each risk factor, a patient tests positive with\nprobability p , where 0 < p < 1. The outcomes of the tests across all patients and all risk\nfactors are mutually independent.\nDetermine an expression for the probability that exactly n patients are tested, where n is a\npositive integer less than 100.\nn − 1\n2 2\n’ ’ ’ ’\n1 − 3 p (1 − p ) 3 p (1 − p )",
        "options": [
            "’ ’ ’ ’ n − 1 2 3 2 3 ’ 1 − 3 p (1 − p ) − p ’ ’ 3 p (1 − p ) + p ’",
            "’ ’ ’ ’ n − 1 2 3 2 3 ’ ’ ’ ’ 1 − 3 p (1 − p ) − p 3 p (1 − p ) + p",
            "’ ’ ’ ’ n − 1 2 3 2 3 ’ ’ ’ ’ n 1 − 3 p (1 − p ) − p 3 p (1 − p ) + p",
            "’ ’ ’ ’ 2 3 n − 1 n − 1 n − 1 ’ ’ ’ ’ ’ ’ 3 (1 − p ) p 1 − (1 − p ) p + (1 − p ) p",
            "’ ’ ’ ’ ’ ’"
        ],
        "answerLetter": "B",
        "answer": "’ ’ ’ ’ n − 1 2 3 2 3 ’ ’ ’ ’ 1 − 3 p (1 − p ) − p 3 p (1 − p ) + p",
        "explanation": "Official solution: B\n\nFrom the binomial distribution formula, the probability P that a given patient tests positive for at\n3 3\n’ ’ ’ ’\n2 3 − 2 3 3 3 − 2 3\nP = p (1 − p ) + p (1 − p ) = 3 p (1 − p ) + p\nleast 2 of these 3 risk factors is .\n’ ’ ’ ’\n2 3\n’ ’ ’ ’\n2 3\nUsing the geometric distribution formula with probability of success P = 3 p (1 − p ) + p , the\nprobability that exactly n patients are tested is\nn − 1\nn − 1 2 3 2 3\n’ ’ ’ ’\n(1 − P ) P = 1 − 3 p (1 − p ) − p 3 p (1 − p ) + p .\n’ ’ ’ ’"
    },
    {
        "id": 202,
        "topic": "SOA Exam P Sample Question",
        "question": "A representative of a market research firm contacts consumers by phone in order to\nconduct surveys. The specific consumer contacted by each phone call is randomly\ndetermined. The probability that a phone call produces a completed survey is 0.25.\nCalculate the probability that more than three phone calls are required to produce one\ncompleted survey.",
        "options": [
            "0.32",
            "0.42",
            "0.44",
            "0.56",
            "0.58"
        ],
        "answerLetter": "B",
        "answer": "0.42",
        "explanation": "Official solution: B\n\nFor there to be more than three calls before one completed survey all that is required is the first\n3\nthree calls not result in a completed survey. This probability is (1 − 0.25) = 0.42."
    },
    {
        "id": 203,
        "topic": "SOA Exam P Sample Question",
        "question": "Four distinct integers are chosen randomly and without replacement from the first twelve\npositive integers. X is the random variable representing the second smallest of the four\nselected integers, and p is the probability function of X .\nDetermine p ( x ) for x = 2,3,…,10.\n( x − 1)(11 − x )(12 − x )",
        "options": [
            "495 ( x − 1)(11 − x )(12 − x )",
            "990 ( x − 1)( x − 2)(12 − x )",
            "990 ( x − 1)( x − 2)(12 − x )",
            "495 (10 − x )(11 − x )(12 − x )",
            "495"
        ],
        "answerLetter": "B",
        "answer": "990 ( x − 1)( x − 2)(12 − x )",
        "explanation": "Official solution: B\n\nFor a given x , there are x – 1 choices for the smaller of the four integers and 12 – x choices for\n12 − x\n’ ’\n( x − 1)(12 − x )(11 − x )\n( x − 1) =\nthe two larger integers. Thus, there are triples that satisfy\n’ ’\n2 2\n’ ’\n12\n’ ’\n= 495\nthe event. The total number of possible draws is and the probability is\n’ ’\n4\n’ ’\n( x − 1)(12 − x )(11 − x ) 1 x − 1)(12 − x )(11 − x )\n= .\n2 495 990"
    },
    {
        "id": 204,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses due to burglary are exponentially distributed with mean 100.\nThe probability that a loss is between 40 and 50 equals the probability that a loss is\nbetween 60 and r , with r > 60.\nCalculate r .",
        "options": [
            "68.26",
            "70.00",
            "70.51",
            "72.36",
            "75.00"
        ],
        "answerLetter": "D",
        "answer": "72.36",
        "explanation": "Official solution: D\n\nThe cumulative distribution function for the exponential distribution is\n− λ x − x / μ − x /100\nF x ( ) = 1 − e = 1 − e = 1 − e , x > 0 .\nFrom the given probability data,\nF (50) − F (40) = F r ( ) − F (60)\n− 50/100 − 40/100 − r /100 − 60/100\n1 − e − 1 − e = 1 − e − 1 − e\n( ) ( )\n− 40/100 − 50/100 − 60/100 − r /100\ne − e = e − e\n.\n− r /100 − 60/100 − 40/100 − 50/100\ne = e − e + e = 0.4850\n− r /100 = ln(0.4850) = − 0.7236\nr = 72.36."
    },
    {
        "id": 205,
        "topic": "SOA Exam P Sample Question",
        "question": "The time until the next car accident for a particular driver is exponentially distributed\nwith a mean of 200 days.\nCalculate the probability that the driver has no accidents in the next 365 days, but then\nhas at least one accident in the 365-day period that follows this initial 365-day period.",
        "options": [
            "0.026",
            "0.135",
            "0.161",
            "0.704",
            "0.839"
        ],
        "answerLetter": "B",
        "answer": "0.135",
        "explanation": "Official solution: B\n\nThe desired event is equivalent to the time of the next accident being between 365 and 730 days\nfrom now. The probability is\n− 730/200 − 365/200 − 1.825 − 3.65\nF (730) − F (365) = 1 − e − 1 − e = e − e = 0.1352.\n( )\nNote that the problem provides no information about the distribution of the time to subsequent\naccidents, but that information is not needed. With nothing given, anything can be assumed. If\nthe time to subsequent accidents has the same exponential distribution and the times are\nindependent, then the number of accidents in each 365 day period is Poisson with mean 1.825.\n− 1.825 − 1.825\nThen the required probability is e (1 − e ) = 0.1352."
    },
    {
        "id": 206,
        "topic": "SOA Exam P Sample Question",
        "question": "The annual profit of a life insurance company is normally distributed.\nThe probability that the annual profit does not exceed 2000 is 0.7642. The probability\nthat the annual profit does not exceed 3000 is 0.9066.\nCalculate the probability that the annual profit does not exceed 1000.",
        "options": [
            "0.1424",
            "0.3022",
            "0.5478",
            "0.6218",
            "0.7257"
        ],
        "answerLetter": "C",
        "answer": "0.5478",
        "explanation": "Official solution: C\n\nPr( Z ≤ 0.72) = 0.7642 = Pr( X ≤ 2000) = Pr[ Z ≤ (2000 − μ ) / σ ]\n0.72 = (2000 − μ ) / σ\nPr( Z ≤ 1.32) = 0.9066 = Pr( X ≤ 3000) = Pr[ Z ≤ (3000 − μ ) / σ ]\n1.32 = (3000 − μ ) / σ\n1.32 / 0.72 = (3000 − μ ) / (2000 − μ )\n1.8333(2000 − μ ) = 3000 − μ\nμ = [1.8333(2000) − 3000] / (1.8333 − 1) = 800\nσ = (3000 − μ ) /1.32 = 1666.67\nPr( X ≤ 1000) = Pr[ Z ≤ (1000 − 800) /1666.67] = Pr( Z ≤ 0.12) = 0.5478."
    },
    {
        "id": 207,
        "topic": "SOA Exam P Sample Question",
        "question": "Individuals purchase both collision and liability insurance on their automobiles. The\nvalue of the insured’s automobile is V . Assume the loss L on an automobile claim is a\nrandom variable with cumulative distribution function\n3\n’\n3 ’ l ’\n, 0 ≤ l < V\n’\n’ ’\n’ 4 V\n’ ’\nF l ( ) = ’\n− ( l − V )\n’ 1\nV\n1 − e , V ≤ l .\n’\n’ 10\nCalculate the probability that the loss on a randomly selected claim is greater than the\nvalue of the automobile.",
        "options": [
            "0.00",
            "0.10",
            "0.25",
            "0.75",
            "0.90"
        ],
        "answerLetter": "B",
        "answer": "0.10",
        "explanation": "Official solution: B\n\nV − V\n’ − ’\n1\nV\nP X ( > V ) = 1 − P X ( ≤ V ) = 1 − F V ( ) = 1 − 1 − e = 0.10.\n’ ’\n10\n’ ’"
    },
    {
        "id": 208,
        "topic": "SOA Exam P Sample Question",
        "question": "The lifetime of a machine part is exponentially distributed with a mean of five years.\nCalculate the mean lifetime of the part, given that it survives less than ten years.",
        "options": [
            "0.865",
            "1.157",
            "2.568",
            "2.970",
            "3.435"
        ],
        "answerLetter": "E",
        "answer": "3.435",
        "explanation": "Official solution: E\n\n− 0.2 t\nThe given mean of 5 years corresponds to the pdf f t ( ) = 0.2 e and the cumulative distribution\n− 0.2 t\nfunction F t ( ) = 1 − e . The conditional pdf is\n− 0.2 t\nf t ( ) 0.2 e\ng t ( ) = = , 0 < t < 10\n.\n− 2\nF (10) 1 − e\nThe conditional mean is (using integration by parts)\n− 0.2 t\n10 10 10\n0.2 e\n− 0.2 t\nE T ( | T < 10) = tg t dt ( ) = t dt = 0.2313 te dt\n− 2\n∫ ∫ ∫\n0 0 0\n1 − e\n10\n10 10\n− 0.2 t − 0.2 t − 0.2 t\n’ ’ ’ ’\n= 0.2313 t ( 5 − e ) − − 5 e ) dt = 0.2323 − 6.7668 + 0 − 25 e\n∫\n’ ’\n’ 0 0 ’ 0\n’ ’ ’ ’\n= 0.2313[ 6.7668 − − 3.3834 + 25] = 3.435."
    },
    {
        "id": 209,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X be a random variable with density function\n− 2 x\n’\n2 e , x > 0\nf ( ) x = ’\n0, otherwise.\n’\nCalculate P X [ ≤ 0.5 X ≤ 1.0] .",
        "options": [
            "0.433",
            "0.547",
            "0.632",
            "0.731",
            "0.865"
        ],
        "answerLetter": "D",
        "answer": "0.731",
        "explanation": "Official solution: D\n\nx\nx\n− 2 y − 2 y − 2 x\nF x ( ) = 2 e dy = − e = 1 − e\n∫\n0 0\n− 1\nP X [ ≤ 0.5] F (0.5) 1 − e\nP X [ ≤ 0.5 | X ≤ 1.0] = = = = 0.731.\n− 2\nP X [ ≤ 1.0] F (1.0) 1 − e"
    },
    {
        "id": 210,
        "topic": "SOA Exam P Sample Question",
        "question": "Events E and F are independent. P[E] = 0.84 and P[F] = 0.65.\nCalculate the probability that exactly one of the two events occurs.",
        "options": [
            "0.056",
            "0.398",
            "0.546",
            "0.650",
            "0.944"
        ],
        "answerLetter": "B",
        "answer": "0.398",
        "explanation": "Official solution: B\n\nIf E and F are independent, so are E and the complement of F. Then,\nc c\nP (exactly one) = P E ( ∩ F ) + P E ( ∩ F ) = 0.84(0.35) + 0.16(0.65) = 0.398."
    },
    {
        "id": 211,
        "topic": "SOA Exam P Sample Question",
        "question": "A flood insurance company determines that N , the number of claims received in a month,\n2\nis a random variable with The numbers of claims\nP N [ = n ] = , for n = 0,1, 2, ’ .\nn + 1\n3\nreceived in different months are mutually independent.\nCalculate the probability that more than three claims will be received during a\nconsecutive two-month period, given that fewer than two claims were received in the first\nof the two months.",
        "options": [
            "0.0062",
            "0.0123",
            "0.0139",
            "0.0165",
            "0.0185"
        ],
        "answerLetter": "E",
        "answer": "0.0185",
        "explanation": "Official solution: E\n\nLet M and N be the random variables for the number of claims in the first and second month.\nThen\nP M [ + N ≤ 3, M < 2]\nP M [ + N > 3 | M < 2] = 1 − P M [ + N ≤ 3 | M < 2] = 1 −\nP M [ < 2]\nP M [ = 0, N = 0] + P M [ = 1, N = 0] + P M [ = 0, N = 1] + P M [ = 1, N = 1]\n+ P M [ = 0, N = 2] + P M [ = 1, N = 2] + P M [ = 0, N = 3]\n= 1 −\nP M [ = 0] + P M [ = 1]\n(2 / 3)(2 / 3) + (2 / 9)(2 / 3) + (2 / 3)(2 / 9) + (2 / 9)(2 / 9) + (2 / 3)(2 / 27) + ( 2 / 9)(2 / 27) + (2 / 3)(2 / 81)\n= 1 −\n2 / 3 + 2 / 9\n0.87243\n= 1 − = 0.0185.\n0.88889"
    },
    {
        "id": 212,
        "topic": "SOA Exam P Sample Question",
        "question": "Patients in a study are tested for sleep apnea, one at a time, until a patient is found to have\nthis disease. Each patient independently has the same probability of having sleep apnea.\nLet r represent the probability that at least four patients are tested.\nDetermine the probability that at least twelve patients are tested given that at least four\npatients are tested.\n11\n3\nr",
        "options": [
            "3 r",
            "8 3 r",
            "2 r",
            "1 3 r",
            ""
        ],
        "answerLetter": "C",
        "answer": "2 r",
        "explanation": "Official solution: C\n\nLet X = number of patients tested, which is geometrically distributed with constant “success”\nprobability, say p .\nn − 1\nP X [ ≥ n ] = P [first n − 1 patients do not have apnea] = (1 − p ) .\nTherefore,\n3\nr = P X [ ≥ 4] = (1 − p )\n11 8 8\nP X [ ≥ 12] (1 − p )\n8 3\n3\n3\nP X [ ≥ 12 | X ≥ 4] = = = (1 − p ) = ’ (1 − p ) ’ = r\n3\n’ ’\nP X [ ≥ 4] (1 − p )"
    },
    {
        "id": 213,
        "topic": "SOA Exam P Sample Question",
        "question": "A factory tests 100 light bulbs for defects. The probability that a bulb is defective is 0.02.\nThe occurrences of defects among the light bulbs are mutually independent events.\nCalculate the probability that exactly two are defective given that the number of defective\nbulbs is two or fewer.",
        "options": [
            "0.133",
            "0.271",
            "0.273",
            "0.404",
            "0.677"
        ],
        "answerLetter": "D",
        "answer": "0.404",
        "explanation": "Official solution: D\n\nThe number of defects has a binomial distribution with n = 100 and p = 0.02.\n’ 100 ’\n2 98\n(0.02) (0.98)\n’ ’\nP X [ = 2] 2\n’ ’\nP X [ = 2 | X ≤ 2] = =\nP X [ ≤ 2] 100 100 100\n’ ’ ’ ’ ’ ’\n0 100 1 99 2 98\n(0.02) (0.98) + (0.02) (0.98) + (0.02) (0.98)\n’ ’ ’ ’ ’ ’\n0 1 2\n’ ’ ’ ’ ’ ’\n0.27341\n= = 0.404.\n0.13262 + 0.27065 + 0.27341"
    },
    {
        "id": 214,
        "topic": "SOA Exam P Sample Question",
        "question": "A certain town experiences an average of 5 tornadoes in any four year period. The\nnumber of years from now until the town experiences its next tornado as well as the\nnumber of years between tornados have identical exponential distributions and all such\ntimes are mutually independent\nCalculate the median number of years from now until the town experiences its next\ntornado.",
        "options": [
            "0.55",
            "0.73",
            "0.80",
            "0.87",
            "1.25"
        ],
        "answerLetter": "A",
        "answer": "0.55",
        "explanation": "Official solution: A\n\nThe town experiences one tornado every 0.8 years on average, which is the mean of the\nexponential distribution. The median is found from\n− m /0.8\n0.5 = P X [ ≤ m ] = 1 − e\nln(0.5) = − m / 0.8\nm = − 0.8ln(0.5) = 0.55."
    },
    {
        "id": 215,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses under an insurance policy are exponentially distributed with mean 4. The\ndeductible is 1 for each loss.\nCalculate the median amount that the insurer pays a policyholder for a loss under the\npolicy.",
        "options": [
            "1.77",
            "2.08",
            "2.12",
            "2.77",
            "3.12"
        ],
        "answerLetter": "A",
        "answer": "1.77",
        "explanation": "Official solution: A\n\nLet X = the amount of a loss. Ignoring the deductible, the median loss is the solution to\n∞\n− 0.25 x − 0.25 m − 0.25 m\n0.5 = P X [ > m ] = 0.25 e dx = 0 − − ( e ) = e which is m = –4(ln0.5) = 2.77.\n∫\nm\nBecause 2.77 > 1, the loss exceeds 2.77 if and only if the claim payment exceeds\n2.77 – 1 = 1.77, which is therefore the median claim payment."
    },
    {
        "id": 216,
        "topic": "SOA Exam P Sample Question",
        "question": "A company has purchased a policy that will compensate for the loss of revenue due to\nsevere weather events. The policy pays 1000 for each severe weather event in a year\nafter the first two such events in that year. The number of severe weather events per year\nhas a Poisson distribution with mean 1.\nCalculate the expected amount paid to this company in one year.",
        "options": [
            "80",
            "104",
            "368",
            "512",
            "632"
        ],
        "answerLetter": "B",
        "answer": "104",
        "explanation": "Official solution: B\n\nThe payment random variable is 1000( X – 2) if positive, where X has a Poisson distribution with\nmean 1. The expected value is\n− 1 − 1 − 1\n∞ e ’ ∞ e 2 e ’\n1000 ( x − 2) = 1000 ( x − 2) − ( x − 2)\n∑ ’ ∑ ∑ ’\nx = 3 x = 0 x = 0\nx ! x ! x !\n’ ’\n− 1 − 1 − 1\n= 1000 1 − 2 − − [ 2 e − e ] = 1000( 1 − + 3 e ) = 104.\n( )\nNote the first sum splits into the expected value of X , which is 1, and 2 times the sum of the\nprobabilities (also 1)."
    },
    {
        "id": 217,
        "topic": "SOA Exam P Sample Question",
        "question": "A company provides each of its employees with a death benefit of 100. The company\npurchases insurance that pays the cost of total death benefits in excess of 400 per year.\nThe number of employees who will die during the year is a Poisson random variable with\nmean 2.\nCalculate the expected annual cost to the company of providing the death benefits,\nexcluding the cost of the insurance.",
        "options": [
            "171",
            "189",
            "192",
            "200",
            "208"
        ],
        "answerLetter": "C",
        "answer": "192",
        "explanation": "Official solution: C\n\nLet X be the number of employees who die. The expected cost to the company is\n100 P Y [ = 1] + 200 P Y [ = 2] + 300 P Y [ = 3] + 400 P Y [ > 3]\n− 2 − 2 − 2 − 2\n= 100(2) e + 200(2) e + 300(4 / 3) e + 400[1 − (1 + 2 + 2 + 4 / 3) e ]\n− 2\n= 400 − 1533.33 e = 192."
    },
    {
        "id": 218,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of burglaries occurring on Burlington Street during a one-year period is\nPoisson distributed with mean 1.\nCalculate the expected number of burglaries on Burlington Street in a one-year period,\ngiven that there are at least two burglaries.",
        "options": [
            "0.63",
            "2.39",
            "2.54",
            "3.00",
            "3.78"
        ],
        "answerLetter": "B",
        "answer": "2.39",
        "explanation": "Official solution: B\n\nLet X be the number of burglaries. Then,\n∞ ∞\nxp x ( ) xp x ( ) − (0) p (0) − (1) p (1)\n∑ ∑\nx = 2 x = 0\nE X ( | X ≥ 2) = =\n1 − p (0) − p (1) 1 − p (0) − p (1)\n− 1\n1 − p (1) 1 − e\n= = = 2.39.\n− 1 − 1\n1 − p (0) − p (1) 1 − e − e"
    },
    {
        "id": 219,
        "topic": "SOA Exam P Sample Question",
        "question": "For a certain health insurance policy, losses are uniformly distributed on the interval\n[0, 450]. The policy has a deductible of d and the expected value of the unreimbursed\nportion of a loss is 56.\nCalculate d .",
        "options": [
            "60",
            "87",
            "112",
            "169",
            "224"
        ],
        "answerLetter": "A",
        "answer": "60",
        "explanation": "Official solution: A\n\nThe expected unreimbursed loss is\n2\nd 450\n1 1 d 450 − d 1\n2\nx dx + d dx = + d = (900 d − d ) = 56\n∫ ∫\n0 d\n450 450 900 450 900\n2\nd − 900 d + 50, 400 = 0\n2\n900 ± 900 − 201, 600 900 − 780\nd = = = 60.\n2 2"
    },
    {
        "id": 220,
        "topic": "SOA Exam P Sample Question",
        "question": "A motorist just had an accident. The accident is minor with probability 0.75 and is\notherwise major.\nLet b be a positive constant. If the accident is minor, then the loss amount follows a\nuniform distribution on the interval [0, b ]. If the accident is major, then the loss amount\nfollows a uniform distribution on the interval [ b , 3 b ].\nThe median loss amount due to this accident is 672.\nCalculate the mean loss amount due to this accident.",
        "options": [
            "392",
            "512",
            "672",
            "882",
            "1008"
        ],
        "answerLetter": "D",
        "answer": "882",
        "explanation": "Official solution: D\n\nLet X represent the loss due to the accident.\nFrom the given information, the probability that X is in[0, b ] is 0.75, which is larger than 0.5. So\nthe median, 672, must lie in the interval [0, b ].\nNote that in a uniform distribution over an interval I , the probability of landing in an interval J is\nthe length of the intersection of J and I , divided by the length of I .\n672 − 0 0.75\n’ ’ ’ ’\nTherefore, we have 0.5 = P[ X ≤ 672] = 0.75 which gives b = 672 = 1008 .\n’ ’ ’ ’\nb − 0 0.5\n’ ’ ’ ’\nFrom the law of total probability applied to means, the mean loss due to the accident is\nE( X ) = P[minor acc.]E( X | minor acc.) + P[major acc.]E( X | major acc.)\n= 0.75E( X | X is uniform on [0, b ]) + 0.25E( X | X is uniform on [ ,3 ]) b b .\n0 + 1008 1008 + 3(1008)\n’ ’ ’ ’\n= 0.75 + 0.25 = 882.\n’ ’ ’ ’\n2 2\n’ ’ ’ ’"
    },
    {
        "id": 221,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy will reimburse only one claim per year.\nFor a random policyholder, there is a 20% probability of no loss in the next year, in\nwhich case the claim amount is 0. If a loss occurs in the next year, the claim amount is\nnormally distributed with mean 1000 and standard deviation 400.\nCalculate the median claim amount in the next year for a random policyholder.",
        "options": [
            "663",
            "790",
            "873",
            "994",
            "1000"
        ],
        "answerLetter": "C",
        "answer": "873",
        "explanation": "Official solution: C\n\nThe claim amount distribution is a mixture distribution with 20% point mass at 0. To obtain the\nmedian, the remaining 30% probability is from the case where there is a non-zero payment. This\ncorresponds to the 30/(1 – 0.2) = 37.5 percentile of the unconditional claim amount distribution.\nThe 37.5 percentile of the standard normal distribution is at z = –0.3187 and thus the median is\n1000 – 0.3187(400) = 873."
    },
    {
        "id": 222,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses incurred by a policyholder follow a normal distribution with mean 20,000 and\nstandard deviation 4,500. The policy covers losses, subject to a deductible of 15,000.\nth\nCalculate the 95 percentile of losses that exceed the deductible.",
        "options": [
            "27,400",
            "27,700",
            "28,100",
            "28,400",
            "28,800"
        ],
        "answerLetter": "B",
        "answer": "27,700",
        "explanation": "Official solution: B\n\nFirst, the z -score associated with the deductible is:\n15, 000 − 20, 000\nz = = − 1.11\n4,500\nNext, using the normal table, we find that the probability that a loss exceeds the deductible is:\nP Z ( > − 1.11) = 0.8665.\nThe 95th percentile of losses that exceed the deductible is the 1 – 0.05(0.8665) = 0.9567 =\n95.67th percentile of all losses.\nThe 95.67th percentile of all losses is between 1.71 and 1.72 standard deviations above the mean.\nTo the nearest hundred, both of these correspond to a loss amount of 27,700."
    },
    {
        "id": 223,
        "topic": "SOA Exam P Sample Question",
        "question": "A gun shop sells gunpowder. Monthly demand for gunpowder is normally distributed,\naverages 20 pounds, and has a standard deviation of 2 pounds. The shop manager wishes\nto stock gunpowder inventory at the beginning of each month so that there is only a 2%\nchance that the shop will run out of gunpowder (i.e., that demand will exceed inventory)\nin any given month.\nCalculate the amount of gunpowder to stock in inventory, in pounds.",
        "options": [
            "16",
            "23",
            "24",
            "32",
            "43"
        ],
        "answerLetter": "C",
        "answer": "24",
        "explanation": "Official solution: C\n\nThe z -score corresponding to the 98th percentile is 2.054. The answer is 20 + 2.054(2) = 24.108."
    },
    {
        "id": 224,
        "topic": "SOA Exam P Sample Question",
        "question": "A large university will begin a 13-day period during which students may register for that\nsemester’s courses. Of those 13 days, the number of elapsed days before a randomly\nselected student registers has a continuous distribution with density function f ( t ) that is\nsymmetric about t = 6.5 and proportional to 1/( t + 1) between days 0 and 6.5.\nA student registers at the 60th percentile of this distribution.\nCalculate the number of elapsed days in the registration period for this student.",
        "options": [
            "4.01",
            "7.80",
            "8.99",
            "10.22",
            "10.51"
        ],
        "answerLetter": "C",
        "answer": "8.99",
        "explanation": "Official solution: C\n\nLet T be the time of registration. Due to symmetry of the density function about 6.5. The\nconstant of proportionality, c , can be solved from\n6 5 .\n6.5\n1\n0.5 = c dt = c ln( t + 1) = c ln(7.5)\n, which gives c = 0.5/ln(7.5).\nt + 1\n∫ 0\n0\nAgain using the symmetry, if 60th percentile of T is at k , then P T [ ≤ 13 − k ] = 0.4. Thus,\n13 − k\n0.5 1 0.5\n0.4 = P T [ ≤ 13 − k ] = dt = ln(14 − k )\n∫\n0\nln(7.5) t + 1 ln(7.5)\nln(14 − k ) = 0.8ln(7.5) = 1.6119\n1.6119\n14 − k = e = 5.0124\nk = 8.99."
    },
    {
        "id": 225,
        "topic": "SOA Exam P Sample Question",
        "question": "The loss L due to a boat accident is exponentially distributed.\nBoat insurance policy A covers up to 1 unit for each loss. Boat insurance policy B covers\nup to 2 units for each loss.\nThe probability that a loss is fully covered under policy B is 1.9 times the probability that\nit is fully covered under policy A.\nCalculate the variance of L .",
        "options": [
            "0.1",
            "0.4",
            "2.4",
            "9.5",
            "90.1"
        ],
        "answerLetter": "E",
        "answer": "90.1",
        "explanation": "Official solution: E\n\n− λ x 2\nThe distribution function of L is F x ( ) = 1 − e and its variance is 1/ λ . We are given\nF (2) = 1.9 F (1) and therefore,\n− 2 λ − λ\n1 − e = 1.9(1 − e )\n− λ − λ − λ\n(1 − e )(1 + e ) = 1.9(1 − e )\n− λ\ne = 0.9\nλ = − ln(0.9) = 0.10536\n2\nVar L ( ) = 1/ 0.10536 = 90.1."
    },
    {
        "id": 226,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses, X , under an insurance policy are exponentially distributed with mean 10. For\neach loss, the claim payment Y is equal to the amount of the loss in excess of a deductible\nd > 0.\nCalculate Var( Y ).",
        "options": [
            "100 - d 2 (10 − d )",
            "− d /10",
            "100 e − d /10 − d /5",
            "100 2 e − e ( ) 2 − d /10 − d /5",
            "(10 − d ) 2 e − e ( )"
        ],
        "answerLetter": "D",
        "answer": "100 2 e − e ( ) 2 − d /10 − d /5",
        "explanation": "Official solution: D\n\nWe have Y = 0 when X < d and Y = X – d otherwise. Then, noting that the second moment of an\nexponential random variable is twice the square of the mean,\nd ∞ ∞\n− 0.1 x − 0.1 x − 0.1( x + d ) − 0.1 d\nE Y ( ) = 0(0.1 e ) dx + ( x − d )(0.1 e ) dx = 0 + x (0.1 e ) dx = e (10)\n∫ ∫ ∫\no d 0\nd ∞ ∞\n2 2 − 0.1 x 2 − 0.1 x 2 − 0.1( x + d ) − 0.1 d\nE Y ( ) = 0 (0.1 e ) dx + ( x − d ) (0.1 e ) dx = 0 + x (0.1 e ) dx = e (200)\n∫ ∫ ∫\no d 0\n− 0.1 d − 0.1 d 2 − 0.1 d − 0.2 d\nVar(Y) = e (200) − [ e (10)] = 100[ 2 e − e ],"
    },
    {
        "id": 227,
        "topic": "SOA Exam P Sample Question",
        "question": "For a certain insurance company, 10% of its policies are Type A, 50% are Type B, and\n40% are Type C.\nThe annual number of claims for an individual Type A, Type B, and Type C policy\nfollow Poisson distributions with respective means 1, 2, and 10.\nLet X represent the annual number of claims of a randomly selected policy.\nCalculate the variance of X .",
        "options": [
            "5.10",
            "16.09",
            "21.19",
            "42.10",
            "47.20"
        ],
        "answerLetter": "C",
        "answer": "21.19",
        "explanation": "Official solution: C\n\nFor the Poisson distribution the variance is equal to the mean and hence the second moment is\nthe mean plus the square of the mean. Then,\nE X [ ] = 0.1(1) + 0.5(2) + 0.4(10) = 5.1\n2 2 2 2\nE X [ ] = 0.1(1 + 1 ) + 0.5(2 + 2 ) + 0.4(10 + 10 ) = 47.2\n2\nVar X ( ) = 47.2 − 5.1 = 21.19."
    },
    {
        "id": 228,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of tornadoes in a given year follows a Poisson distribution with mean 3.\nCalculate the variance of the number of tornadoes in a year given that at least one tornado\noccurs.",
        "options": [
            "1.63",
            "1.73",
            "2.66",
            "3.00",
            "3.16"
        ],
        "answerLetter": "C",
        "answer": "2.66",
        "explanation": "Official solution: C\n\nLet X be the number of tornadoes and Y be the conditional distribution of X given that X is at\nleast one. There are (at least) two ways to solve this problem. The first way is to begin with the\nprobability function for Y and observe that starting the sums at zero adds nothing because that\nterm is zero. Then note that the sums are the first and second moments of a regular Poisson\ndistribution.\ny − 3\nP X [ = y ] 3 e / y !\np y ( ) = P Y [ = y ] = P X [ = y | X > 0] = = , y = 1, 2, ’\n− 3\nP X [ > 0] 1 − e\ny − 3 y − 3\n1 ∞ 3 e 1 ∞ 3 e 3\nE Y ( ) = y = y =\n∑ ∑\n− 3 − 3 − 3\ny = 1 y = 0\n1 − e y ! 1 − e y ! 1 − e\ny − 3 y − 3 2\n1 ∞ 3 e 1 ∞ 3 e 3 + 3\n2 2 2\nE Y ( ) = y = y =\n∑ ∑\n− 3 − 3 − 3\ny = 1 y = 0\n1 − e y ! 1 − e y ! 1 − e\n2\n12 3\n’ ’\nVar Y ( ) = − = 2.6609 .\n’ ’\n− 3 − 3\n1 − e 1 − e\n’ ’\nThe second way is to use formulas about conditional expectation based on the law of total\nprobability.\nE X ( ) = E X ( | X = 0) P X [ = 0] + E X ( | X > 0) P X [ > 0]\n− 3 − 3\n3 = 0( e ) + E X ( | X > 0)(1 − e )\n3\nE X ( | X > 0) = = 3.1572\n− 3\n1 − e\n2 2 2\nE X ( ) = E X ( | X = 0) P X [ = 0] + E X ( | X > 0) P X [ > 0]\n2 − 3 2 − 3\n3 + 3 = 0( e ) + E X ( | X > 0)(1 − e )\n12\n2\nE X ( | X > 0) = = 12.6287\n− 3\n1 − e\n2\nVar X ( ) = 12.6287 − 3.1572 = 2.6608."
    },
    {
        "id": 229,
        "topic": "SOA Exam P Sample Question",
        "question": "A government employee’s yearly dental expense follows a uniform distribution on the\ninterval from 200 to 1200. The government’s primary dental plan reimburses an\nemployee for up to 400 of dental expense incurred in a year, while a supplemental plan\npays up to 500 of any remaining dental expense.\nLet Y represent the yearly benefit paid by the supplemental plan to a government\nemployee.\nCalculate Var( Y ).",
        "options": [
            "20,833",
            "26,042",
            "41,042",
            "53,333",
            "83,333"
        ],
        "answerLetter": "C",
        "answer": "41,042",
        "explanation": "Official solution: C\n\nLet X represent individual expense. Then,\n0, 200 ≤ X ≤ 400\n’\n’\nY = X − 400, 400 < X ≤ 900 and the density function of X is f ( ) x = 0.001, 200 ≤ x ≤ 1200.\n’\n’\n500, 900 < X ≤ 1200\n’\n400 900 1200\nE Y ( ) = 0(0.001) dx + (x − 400)(0.001) dx + 500(0.001) dx\n∫ ∫ ∫\n200 400 900\n900\n2\n( x − 400)\n= 0 + 0.001 + 500(0.001)(1200 − 900) = 0 + 125 + 150 = 275\n2\n400\n400 900 1200\n2 2 2 2\nE Y ( ) = 0 (0.001) dx + (x − 400) (0.001) dx + 500 (0.001) dx\n∫ ∫ ∫\n200 400 900\n900\n3\n( x − 400)\n2\n= 0 + 0 .001 + 500 (0.001)(1200 − 900) = 0 + 41, 666.67 + 75, 000 = 116, 666.67\n3\n400\n2\nVar Y ( ) = 116, 666.67 − 275 = 41, 041.67."
    },
    {
        "id": 230,
        "topic": "SOA Exam P Sample Question",
        "question": "Under a liability insurance policy, losses are uniformly distributed on [0, b ], where b is a\npositive constant. There is a deductible of b /2.\nCalculate the ratio of the variance of the claim payment (greater than or equal to zero)\nfrom a given loss to the variance of the loss.",
        "options": [
            "1:8",
            "3:16",
            "1:4",
            "5:16",
            "1:2"
        ],
        "answerLetter": "D",
        "answer": "5:16",
        "explanation": "Official solution: D\n\nLet X represent the loss.\nThe variance for a uniform distribution is the square of the interval length, divided by 12. Thus,\n2\nb\nVar ( X ) = .\n12\nLet C represent the claim payment from the loss. Then C = 0 for X < b /2 and C = X – b /2,\notherwise. Then,\nb /2 b b\n2 2\nE C ( ) = 0(1/ b dx ) + ( x − b / 2)(1/ b dx ) = 0 + ( x − b / 2) / (2 ) b = ( b / 2) / (2 ) b = b / 8\n∫ ∫\n0 b /2 b /2\nb /2 b b\n2 2 2 3 3 2\nE C ( ) = 0 (1/ b dx ) + ( x − b / 2) (1/ b dx ) = 0 + ( x − b / 2) / (3 ) b = ( b / 2) / (3 ) b = b / 24\n∫ ∫\n0 b /2 b /2\n2 2 2\nVar C ( ) = b / 24 − ( b / 8) = 5 b /192.\n2 2\nThe ratio is [5 b /192] / [ b /12] = 60 /192 = 5 /16."
    },
    {
        "id": 231,
        "topic": "SOA Exam P Sample Question",
        "question": "A company’s annual profit, in billions, has a normal distribution with variance equal to\nthe cube of its mean. The probability of an annual loss is 5%.\nCalculate the company’s expected annual profit.",
        "options": [
            "370 million",
            "520 million",
            "780 million",
            "950 million",
            "1645 million"
        ],
        "answerLetter": "A",
        "answer": "370 million",
        "explanation": "Official solution: A\n\nLet X be the profit random variable. Then, 0.05 = P X ( < 0) = P Z ( < − μ / σ ) and from the table,\n2 3 3/2 − 1/2\n− μ / σ = − 1.645. From the problem, σ = μ . Therefore, − 1.645 = − μ / μ = − μ and\n2\nμ = 1/1.645 = 0.37. in billions, or 370 million."
    },
    {
        "id": 232,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of claims X on a health insurance policy is a random variable with\n2 2\nE[ X ] = 61 and E [( X − 1) ] = 47 .\nCalculate the standard deviation of the number of claims.",
        "options": [
            "2.18",
            "2.40",
            "7.31",
            "7.50",
            "7.81"
        ],
        "answerLetter": "A",
        "answer": "2.18",
        "explanation": "Official solution: A\n\n2 2\nE [( X − 1) ] = E X [ ] − 2 E X [ ] + 1 = 47 so E X [ ] = (61 + 1 − 47) / 2 = 7.5 . The standard deviation is\n2 2 2\nE X [ ] − E X [ ] = 61 − 7.5 = 2.18."
    },
    {
        "id": 233,
        "topic": "SOA Exam P Sample Question",
        "question": "Ten cards from a deck of playing cards are in a box: two diamonds, three spades, and five\nhearts. Two cards are randomly selected without replacement.\nCalculate the variance of the number of diamonds selected, given that no spade is\nselected.",
        "options": [
            "0.24",
            "0.28",
            "0.32",
            "0.34",
            "0.41"
        ],
        "answerLetter": "D",
        "answer": "0.34",
        "explanation": "Official solution: D\n\nLet D be the number of diamonds selected and S be the number of spades. First obtain the\nhypergeometric probability S = 0:\n3 7\n’ ’’ ’\n’ ’’ ’\n0 2\n1(21) 7\n’ ’’ ’\nP S ( = 0) = = = .\n10\n’ ’ 45 15\n’ ’\n2\n’ ’\nThe required probability distribution is:\n2 3 5\n’ ’’ ’’ ’\n’ ’’ ’’ ’\nP D ( = 0, S = 0) 1 0 0 2 15 1(1)(10) 10\n’ ’’ ’’ ’\nP D ( = 0 | S = 0) = = = =\nP S ( = 0) 7 /15 10 7 45 21\n’ ’\n’ ’\n2\n’ ’\n’ 2 ’’ 3 ’’ 5 ’\n’ ’’ ’’ ’\nP D ( = 1, S = 0) 1 1 0 1 15 2(1)(5) 10\n’ ’’ ’’ ’\nP D ( = 1| S = 0) = = = =\n10\nP S ( = 0) 7 /15 ’ ’ 7 45 21\n’ ’\n2\n’ ’\n2 3 5\n’ ’’ ’’ ’\n’ ’’ ’’ ’\n2 0 0\nP D ( = 2, S = 0) 1 15 1(1)(1) 1\n’ ’’ ’’ ’\nP D ( = 2 | S = 0) = = = = .\n10\nP S ( = 0) 7 / 15 ’ ’ 7 45 21\n’ ’\n2\n’ ’\nThen,\nE D S ( | = 0) = 0(10 / 21) + 1(10 / 21) + 2(1/ 21) = 12 / 21 = 4 / 7\n2 2 2 2\nE D ( | S = 0) = 0 (10 / 21) + 1 (10 / 21) + 2 (1/ 21) = 14 / 21 = 2 / 3\n2\nVar D S ( | = 0) = 2 / 3 − (4 / 7) = 50 /147 = 0.34.\n234. – 236. DELETED"
    },
    {
        "id": 237,
        "topic": "SOA Exam P Sample Question",
        "question": "A car and a bus arrive at a railroad crossing at times independently and uniformly\ndistributed between 7:15 and 7:30. A train arrives at the crossing at 7:20 and halts traffic\nat the crossing for five minutes.\nCalculate the probability that the waiting time of the car or the bus at the crossing\nexceeds three minutes.",
        "options": [
            "0.25",
            "0.27",
            "0.36",
            "0.40",
            "0.56"
        ],
        "answerLetter": "A",
        "answer": "0.25",
        "explanation": "Official solution: A\n\nTo be delayed over three minutes, either the car or the bus must arrive between 7:20 and 7:22.\nThe probability for each is 2/15. The probability they both arrive in that interval is (2/15)(2/15).\nThus, the probability of at least one being delayed is 2/15 + 2/15 – (2/15)(2/15) = 56/225 = 0.25."
    },
    {
        "id": 238,
        "topic": "SOA Exam P Sample Question",
        "question": "Skateboarders A and B practice one difficult stunt until becoming injured while\nattempting the stunt. On each attempt, the probability of becoming injured is p ,\nindependent of the outcomes of all previous attempts.\nLet F ( x , y ) represent the probability that skateboarders A and B make no more than x and\ny attempts, respectively, where x and y are positive integers.\nIt is given that F (2, 2) = 0.0441.\nCalculate F (1, 5).",
        "options": [
            "0.0093",
            "0.0216",
            "0.0495",
            "0.0551",
            "0.1112"
        ],
        "answerLetter": "C",
        "answer": "0.0495",
        "explanation": "Official solution: C\n\nThe probability that a skateboarder makes no more than two attempts is the probability of being\n2\ninjured on the first or second attempt, which is p + (1 − p p ) = 2 p − p . Then,\n2 2\n0.0441 = F (2, 2) = (2 p − p )\n2\n0.21 = 2 p − p\n2\np − 2 p + 1 = 0.79\n2\n( p − 1) = 0.79\np − 1 = ± 0.88882\np = 0.11118.\nThe probability that a skateboarder makes no more than one attempt is p while the probability of\nmaking no more than five attempts is the complement of having no injuries on the first five\nattempts. Hence,\n5\nF (1,5) = p [1 − (1 − p ) ] = 0.0495."
    },
    {
        "id": 239,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of minor surgeries, X , and the number of major surgeries, Y , for a\npolicyholder, this decade, has joint cumulative distribution function\nx + 1 y + 1\n’ ’ ’ ’\nF x y ( , ) = 1 − (0.5) 1 − (0.2) ,\n’ ’ ’ ’\nfor nonnegative integers x and y .\nCalculate the probability that the policyholder experiences exactly three minor surgeries\nand exactly three major surgeries this decade.",
        "options": [
            "0.00004",
            "0.00040",
            "0.03244",
            "0.06800",
            "0.12440"
        ],
        "answerLetter": "B",
        "answer": "0.00040",
        "explanation": "Official solution: B\n\nP X ( = 3, Y = 3)) = F (3,3) − F (2,3) − F (3, 2) + F (2, 2) = 0.9360 − 0.8736 − 0.9300 + 0.8680 = 0.0004"
    },
    {
        "id": 240,
        "topic": "SOA Exam P Sample Question",
        "question": "A company provides a death benefit of 50,000 for each of its 1000 employees. There is a\n1.4% chance that any one employee will die next year, independent of all other\nemployees. The company establishes a fund such that the probability is at least 0.99 that\nthe fund will cover next year’s death benefits.\nCalculate, using the Central Limit Theorem, the smallest amount of money, rounded to\nthe nearest 50 thousand, that the company must put into the fund.",
        "options": [
            "750,000",
            "850,000",
            "1,050,000",
            "1,150,000",
            "1,400,000"
        ],
        "answerLetter": "D",
        "answer": "1,150,000",
        "explanation": "Official solution: D\n\nLet X denote the number of deaths next year, and S denote life insurance payments next year.\nThen S = 50,000 X , where X ~ Bin(1000, 0.014). Therefore,\nE S ( ) = E (50, 000 X ) = 50, 000(1000)(0.014) = 700, 000\n2\nVar S ( ) = Var (50, 000 X ) = 50, 000 (1000)(0.014)(0.986) = 34,510, 000, 000\nStdDev S ( ) = 185, 769.\nThe 99th percentile is 700,000+185,769(2.326)= 1,132,099, which rounds to 1,150,000."
    },
    {
        "id": 241,
        "topic": "SOA Exam P Sample Question",
        "question": "An investor invests 100 dollars in a stock. Each month, the investment has probability\n0.5 of increasing by 1.10 dollars and probability 0.5 of decreasing by 0.90 dollars. The\nchanges in price in different months are mutually independent.\nCalculate the probability that the investment has a value greater than 91 dollars at the end\nof month 100.",
        "options": [
            "0.63",
            "0.75",
            "0.82",
            "0.94",
            "0.97"
        ],
        "answerLetter": "E",
        "answer": "0.97",
        "explanation": "Official solution: E\n\nLet X be the random change in month k . Then E X ( ) = (0.5)(1.1) + 0.5( 0.9) − = 0.1 and\nk k\n100\n2 2 2\nVar X ( ) = 0.5(1.1) + 0.5( 0.9) − − (0.1) = 1 . Let S = X . Then, E ( S ) = 100(0.1) = 10 and\nk ∑ k\nk = 1\nVar ( S ) = 100(1) = 100. Finally,\n’ − 9 − 10 ’\nP (100 + S > 91) = P S ( > − 9) ’ P Z > = − 1.9 = 0.9713.\n’ ’\n100\n’ ’"
    },
    {
        "id": 242,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X denote the loss amount sustained by an insurance company’s policyholder in an\nauto collision. Let Z denote the portion of X that the insurance company will have to pay.\nAn actuary determines that X and Z are independent with respective density and\nprobability functions\n− x /8\n’ (1/ 8) e , x > 0\nf ( ) x = ’\n0, otherwise\n’\nand\n0.45, z = 1\n’\nP Z [ = z ] = ’\n0.55, z = 0.\n’\nCalculate the variance of the insurance company’s claim payment ZX .",
        "options": [
            "13.0",
            "15.8",
            "28.8",
            "35.2",
            "44.6"
        ],
        "answerLetter": "E",
        "answer": "44.6",
        "explanation": "Official solution: E\n\nX has an exponential distribution with mean 8 and variance 64. The second moment is 128. The\nmean and second moment of Z are both 0.45. Then (using the independence of X and Z ),\nE ZX ( ) = E Z E X ( ) ( ) = 0.45(8)\n2 2 2\nE [( ZX ) ] = E Z ( ) E X ( ) = 0.45(128) = 57.6\n2\nVar ZX ( ) = 57.6 − 3.6 = 44.64."
    },
    {
        "id": 243,
        "topic": "SOA Exam P Sample Question",
        "question": "A couple takes out a medical insurance policy that reimburses them for days of work\nmissed due to illness. Let X and Y denote the number of days missed during a given\nmonth by the wife and husband, respectively. The policy pays a monthly benefit of 50\ntimes the maximum of X and Y , subject to a benefit limit of 100. X and Y are\nindependent, each with a discrete uniform distribution on the set {0,1,2,3,4}.\nCalculate the expected monthly benefit for missed days of work that is paid to the couple.",
        "options": [
            "70",
            "90",
            "92",
            "95",
            "140"
        ],
        "answerLetter": "B",
        "answer": "90",
        "explanation": "Official solution: B\n\nEach ( x , y ) pair has probability 1/25. There are only three possible benefit amounts:\n0: Occurs only for the pair (0.0) and so the probability is 1/25.\n50: Occurs for the three pairs (0,1), (1,0), and (1,1) and so the probability is 3/25.\n100: Occurs in all remaining cases and so the probability is 21/25.\nThe expected value is 0(1/25) + 50(3/25) + 100(21/25) = 2250/25 = 90."
    },
    {
        "id": 244,
        "topic": "SOA Exam P Sample Question",
        "question": "The table below shows the joint probability function of a sailor’s number of boating\naccidents and number of hospitalizations from these accidents this year.\nNumber of Hospitalizations from Accidents\n0 1 2 3\n0 0.700\nNumber of\n1 0.150 0.050\nAccidents\n2 0.060 0.020 0.010\n3 0.005 0.002 0.002 0.001\nCalculate the sailor’s expected number of hospitalizations from boating accidents this\nyear.",
        "options": [
            "0.085",
            "0.099",
            "0.410",
            "1.000",
            "1.500"
        ],
        "answerLetter": "B",
        "answer": "0.099",
        "explanation": "Official solution: B\n\nThe marginal distribution for the probability of a given number of hospitalizations can be\ncalculated by adding the columns. Then p (0) = 0.915, p (1) = 0.072, p (2) = 0.012, and p (3) =\n0.001. The expected value is 0.915(0) + 0.072(1) + 0.012(2) + 0.001(3) = 0.099."
    },
    {
        "id": 245,
        "topic": "SOA Exam P Sample Question",
        "question": "On Main Street, a driver’s speed just before an accident is uniformly distributed on\n[5, 20]. Given the speed, the resulting loss from the accident is exponentially distributed\nwith mean equal to three times the speed.\nCalculate the variance of a loss due to an accident on Main Street.",
        "options": [
            "525",
            "1463",
            "1575",
            "1632",
            "1744"
        ],
        "answerLetter": "E",
        "answer": "1744",
        "explanation": "Official solution: E\n\nLet S be the speed and X be the loss. Given S , X has an exponential distribution with mean 3 X .\nThen, noting that the variance of an exponential random variable is the square of the mean, the\nvariance of a uniform random variable is the square of the range divided by 12, and for any\nrandom variable the second moment is the variance plus the square of the mean:\nVar X ( ) = Var E X [ ( | S )] + E Var X [ ( | S )\n2\n= Var [3 ] S + E (9 S )\n2 2 2\n= 9(20 − 5) /12 + 9[(20 − 5) /12 + 12.5 ]\n= 1743.75."
    },
    {
        "id": 246,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X be the annual number of hurricanes hitting Florida, and let Y be the annual number\nof hurricanes hitting Texas. X and Y are independent Poisson variables with respective\nmeans 1.70 and 2.30.\nCalculate .\nVar( X − Y | X + Y = 3)",
        "options": [
            "1.71",
            "1.77",
            "2.93",
            "3.14",
            "4.00"
        ],
        "answerLetter": "C",
        "answer": "2.93",
        "explanation": "Official solution: C\n\nThe four possible outcomes for which X + Y = 3 are given below, with their probabilities.\n3 − 2.3\n2.3 e\n− 1.7 − 4\n(0,3) : e = 2.0278 e\n3!\n− 1.7 2 − 2.3\n1.7 e 2.3 e\n− 4\n(1, 2) : = 4.4965 e\n1! 2!\n2 − 1.7 − 2.3\n1.7 e 2.3 e\n− 4\n(2,1) : = 3.3235 e\n2! 1!\n3 − 1.7\n1.7 e\n− 2.3 − 4\n(3, 0) : e = 0.8188 e .\n3!\nThe conditional probabilities are found by dividing the above probabilities by their sum. They\nare, 0.1901, 0.4215, 0.3116, 0.0768, respectively. These apply to the X – Y values of –3, –1, 1,\nand 3. The mean is –3(0.1901) –1(0.4215) + 1(0.3116) + 3(0.0768) = –0.4498. The second\nmoment is 9(0.1901) + 1(0.4215) + 1(0.3116) + 9(0.0768) = 3.1352. The variance is 2.9329."
    },
    {
        "id": 247,
        "topic": "SOA Exam P Sample Question",
        "question": "Random variables X and Y have joint distribution\nX = 0 X = 1 X = 2\nY = 0 1/15 a 2/15\nY = 1 a b a\nY = 2 2/15 a 1/15\nLet a be the value that minimizes the variance of X.\nCalculate the variance of Y .",
        "options": [
            "2/5",
            "8/15",
            "16/25",
            "2/3",
            "7/10"
        ],
        "answerLetter": "A",
        "answer": "2/5",
        "explanation": "Official solution: A\n\nThe marginal distribution of X has probability 1/5 + a at 0, 2 a + b at 1, and 1/5 + b at 2. Due to\n2 2\nsymmetry, the mean is 1 and so the variance is (0 − 1) (1/ 5 + a ) + (1 − 0) (1/ 5 + a ) = 2 / 5 + 2 a\nwhich is minimized at a = 0. The marginal distribution of Y is the same as that of X and thus has\nthe same variance, 2/5 + 0 = 2/5."
    },
    {
        "id": 248,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X be a random variable that takes on the values –1, 0, and 1 with equal probabilities.\n2\nLet Y = X .\nWhich of the following is true?",
        "options": [
            "Cov( X , Y ) > 0; the random variables X and Y are dependent.",
            "Cov( X , Y ) > 0; the random variables X and Y are independent.",
            "Cov( X , Y ) = 0; the random variables X and Y are dependent.",
            "Cov( X , Y ) = 0; the random variables X and Y are independent.",
            "Cov( X , Y ) < 0; the random variables X and Y are dependent."
        ],
        "answerLetter": "C",
        "answer": "Cov( X , Y ) = 0; the random variables X and Y are dependent.",
        "explanation": "Official solution: C\n\n3 2\nCov X Y ( , ) = E XY ( ) − E X E Y ( ) ( ) = E X ( ) − E X E X ( ) ( )\n3\nE X ( ) = E X ( ) = (1/ 3)( 1 − + 0 + 1) = 0\n2\nE X ( ) = (1/ 3)(1 + 0 + 1) = 2 / 3\nCov X Y ( , ) = 0 − 0(2 / 3) = 0.\nThey are dependent, because\n2\nPr( X = 0, Y = 0) = Pr( X = 0, X = 0) = Pr( X = 0) = 1/ 3\nPr( X = 0) Pr( Y = 0) = (1/ 3)(1/ 3) = 1/ 9 ≠ 1/ 3."
    },
    {
        "id": 249,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses follow an exponential distribution with mean 1. Two independent losses are\nobserved.\nCalculate the expected value of the smaller loss.",
        "options": [
            "0.25",
            "0.50",
            "0.75",
            "1.00",
            "1.50"
        ],
        "answerLetter": "B",
        "answer": "0.50",
        "explanation": "Official solution: B\n\nLet X and Y be the two independent losses and Z = min( X , Y ). Then,\n− z − z − 2 z\nPr( Z > z ) = Pr( X > z and Y > z ) = Pr( X > z ) Pr( Y > z ) = e e = e\n− 2 z\nF ( ) z = Pr( Z ≤ z ) = 1 − Pr( Z > z ) = 1 − e ,\nZ\nwhich can be recognized as an exponential distribution with mean 1/2."
    },
    {
        "id": 250,
        "topic": "SOA Exam P Sample Question",
        "question": "A delivery service owns two cars that consume 15 and 30 miles per gallon. Fuel costs 3\nper gallon. On any given business day, each car travels a number of miles that is\nindependent of the other and is normally distributed with mean 25 miles and standard\ndeviation 3 miles.\nCalculate the probability that on any given business day, the total fuel cost to the delivery\nservice will be less than 7.",
        "options": [
            "0.13",
            "0.23",
            "0.29",
            "0.38",
            "0.47"
        ],
        "answerLetter": "B",
        "answer": "0.23",
        "explanation": "Official solution: B\n\nLet X and Y be the miles driven by the two cars. The total cost, is then C = 3( X /15 + Y /30) =\n0.2 X + 0.1 Y . C has a normal distribution with mean 0.2(25) + 0.1(25) = 7.5 and variance 0.04(9)\n+ 0.01(9) = 0.45. Then, Pr( C < 7) = Pr( Z < (7 − 7.5) / 0.45 = − 0.7454) = 0.23."
    },
    {
        "id": 251,
        "topic": "SOA Exam P Sample Question",
        "question": "Two independent estimates are to be made on a building damaged by fire. Each estimate\n2\nis normally distributed with mean 10 b and variance b .\nCalculate the probability that the first estimate is at least 20 percent higher than the\nsecond.",
        "options": [
            "0.023",
            "0.100",
            "0.115",
            "0.221",
            "0.444"
        ],
        "answerLetter": "B",
        "answer": "0.100",
        "explanation": "Official solution: B\n\nLet X denote the first estimate and Y the second. Then, W = X\nPr( X > 1.2 Y ) = Pr( X − 1.2 Y > 0).\n– 1.2 Y has a normal distribution with mean 1(10 b ) – 1.2(10 b ) = –2b and variance\n2\n2 2 2 2 2\n1 b + 1.2 b = 2.44 b . Then, Pr( W > 0) = Pr( Z > (0 + 2 ) / b 2.44 b = 1.280) = 0.100."
    },
    {
        "id": 252,
        "topic": "SOA Exam P Sample Question",
        "question": "The independent random variables X and Y have the same mean. The coefficients\nof variation of X and Y are 3 and 4 respectively.\n1\nCalculate the coefficient of variation of .\n( X + Y )\n2",
        "options": [
            "5/4",
            "7/4",
            "5/2",
            "7/2",
            "7"
        ],
        "answerLetter": "C",
        "answer": "5/2",
        "explanation": "Official solution: C\n\nLet μ be the common mean. Then the standard deviations of X and Y are and\n3 μ 4 μ\nrespectively. The mean and variance of ( X + Y )/2 are then ( μ + μ ) / 2 = μ and\n2\n25 μ / 4\n2 2 2\n[(3 μ ) + (4 μ ) ] / 4 = 25 μ / 4 respectively. The coefficient of variation is = 5 / 2.\nμ"
    },
    {
        "id": 253,
        "topic": "SOA Exam P Sample Question",
        "question": "Points scored by a game participant can be modeled by Z = 3 X + 2 Y – 5. X and Y are\nindependent random variables with Var ( X ) = 3 and Var ( Y ) = 4.\nCalculate Var ( Z ).",
        "options": [
            "12",
            "17",
            "38",
            "43",
            "68"
        ],
        "answerLetter": "D",
        "answer": "43",
        "explanation": "Official solution: D\n\nVar( Z ) = Var(3 X + 2 Y – 5) = 9Var( X ) + 4Var( Y ) = 9(3) + 4(4) = 43."
    },
    {
        "id": 254,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary is studying hurricane models. A year is classified as a high, medium, or low\nhurricane year with probabilities 0.1, 0.3, and 0.6, respectively. The numbers of\nhurricanes in high, medium, and low years follow Poisson distributions with means 20,\n15, and 10, respectively.\nCalculate the variance of the number of hurricanes in a randomly selected year.",
        "options": [
            "11.25",
            "12.50",
            "12.94",
            "13.42",
            "23.75"
        ],
        "answerLetter": "E",
        "answer": "23.75",
        "explanation": "Official solution: E\n\nThe mean is the weighted average of the three means: 0.1(20) + 0.3(15) + 0.6(10) = 12.5. The\nsecond moment is the weighted average of the three second moments (each of which is the\nsquare of the mean plus the mean, for a Poisson distribution): 0.1(420) + 0.3(240) + 0.6(110) =\n180. The variance is the second moment minus the square of the mean, which is 23.75."
    },
    {
        "id": 255,
        "topic": "SOA Exam P Sample Question",
        "question": "A dental insurance company pays 100% of the cost of fillings and 70% of the cost of root\ncanals. Fillings and root canals cost 50 and 500 each, respectively.\nThe tables below show the probability distributions of the annual number of fillings and\nannual number of root canals for each of the company’s policyholders.\n# of Fillings 0 1 2 3 # of Root Canals 0 1\nProbability 0.60 0.20 0.15 0.05 Probability 0.80 0.20\nCalculate the expected annual payment per policyholder for fillings and root canals.",
        "options": [
            "90.00",
            "102.50",
            "132.50",
            "250.00",
            "400.00"
        ],
        "answerLetter": "B",
        "answer": "102.50",
        "explanation": "Official solution: B\n\nLet F be the number of fillings and R be the number of root canals. The total claim for a given\npolicyholder, C , in a year is C = 50 F + 0.7(500 R ) = 50 F + 350 R .\nWe have E ( F ) = 0.6(0) + 0.2(1) + 0.15(2) + 0.05(3) = 0.65 and E ( R ) = 0.8(0) + 0.2(1) = 0.2.\nThen, E ( C ) = 50(0.65) + 350(0.2) = 102.50."
    },
    {
        "id": 256,
        "topic": "SOA Exam P Sample Question",
        "question": "A loss under a liability policy is modeled by an exponential distribution. The insurance\ncompany will cover the amount of that loss in excess of a deductible of 2000. The\nprobability that the reimbursement is less than 6000, given that the loss exceeds the\ndeductible, is 0.50.\nCalculate the probability that the reimbursement is greater than 3000 but less than 9000,\ngiven that the loss exceeds the deductible.",
        "options": [
            "0.28",
            "0.35",
            "0.50",
            "0.65",
            "0.72"
        ],
        "answerLetter": "B",
        "answer": "0.35",
        "explanation": "Official solution: B\n\nDue to the memoryless property of the exponential distribution, the distribution of the\nreimbursement given that there is a payment is exponential with the same parameter. Thus\n− 6000/ λ\n0.5 = F (6000) = 1 − e which implies that λ = 8656.17 . The solution is\n− 9000/8656.17 − 3000/8656.17\nF (9000) − F (3000) = 1 − e − 1 − e = 0.35.\n( ) ( )"
    },
    {
        "id": 257,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X be the percentage score on a college-entrance exam for students who did not\nparticipate in an exam-preparation seminar. X is modeled by a uniform distribution on\n[ a , 100].\nLet Y be the percentage score on a college-entrance exam for students who did participate\nin an exam-preparation seminar. Y is modeled by a uniform distribution on [1.25 a , 100].\n19, 600\n2\nIt is given that .\nE X ( ) =\n3\nth\nCalculate the 80 percentile of Y .",
        "options": [
            "80",
            "85",
            "90",
            "92",
            "95"
        ],
        "answerLetter": "E",
        "answer": "95",
        "explanation": "Official solution: E\n\nUsing the formulas for the variance and mean of the uniform distribution:\n2\n2 2 2 2 2\n(100 − a ) 100 + a 100 − 200 a + a + 3(100) + 600 a + 3 a\n’ ’\n2 2\nE X ( ) = Var X ( ) + E X ( ) = + =\n’ ’\n12 2 12\n’ ’\n2\n40, 000 + 400 a + 4 a 19, 600\n= =\n12 3\n2\n0 = 40, 000 − 78, 400 + 400 a + 4 a\n2\n0 = a + 100 a − 9, 600\n0 = ( a − 60)( a + 160)\na = 60\nth\nThen, Y is uniform on the interval 1.25(60) = 75 to 100. The 80 percentile is 75 + 0.8(25) = 95."
    },
    {
        "id": 258,
        "topic": "SOA Exam P Sample Question",
        "question": "In a study of driver safety, drivers were categorized according to three risk factors.\nExactly 1000 drivers exhibited each individual risk factor. Also, for each of the risk\nfactors, there were exactly 400 drivers exhibiting that risk factor and neither of the other\ntwo risk factors. Finally, there were exactly 300 drivers who exhibited all three risk\nfactors and 500 who exhibited none of the three risk factors.\nCalculate the number of drivers in the study.",
        "options": [
            "2000",
            "2300",
            "2450",
            "2750",
            "3500"
        ],
        "answerLetter": "C",
        "answer": "2450",
        "explanation": "Official solution: C\n\nUsing a Venn Diagram (calling the risk factors A, B, C ) we get 400 + 300 + X + Y = 1000 (circle\nA ), 400 + 300 + X + Z = 1000 (circle B ), 400 + 300 + Y + Z= 1000 (circle C ). Using the first 2\nequations we get Y = Z , and using the second 2 equations we get X = Y. Thus X = Y = Z = 150,\nand so the total number of participants is 3(400) + 3(150) + 300 + 500 = 2450."
    },
    {
        "id": 259,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company examines its pool of auto insurance customers and gathers the\nfollowing information:\ni) All customers insure at least one car.\nii) 64% of the customers insure more than one car.\niii) 20% of the customers insure a sports car.\niv) Of those customers who insure more than one car, 15% insure a sports car.\nCalculate the probability that a randomly selected customer insures exactly one car, and\nthat the car is not a sports car.",
        "options": [
            "0.16",
            "0.19",
            "0.26",
            "0.29",
            "0.31"
        ],
        "answerLetter": "C",
        "answer": "0.26",
        "explanation": "Official solution: C\n\nConsider the following events about a randomly selected auto insurance customer:\nA = customer insures more than one car\nB = customer insures a sports car\nWe want to find the probability of the complement of A intersecting the complement of B\nc c\n(exactly one car, non-sports). We have .\nP A ( ∩ B ) = 1 − P A ( ∪ B )\nBy the Additive Law, P A ( ∪ B ) = P A ( ) + P B ( ) − P A ( ∩ B ) .\nP ( A ∪ B ) = P ( A) + P ( B ) – P ( A ∩ B ).\nBy the Multiplicative Law, P A ( ∩ B ) = P B ( | A P A ) ( ) = 0.15(0.64) = 0.096 .\nThen, P A ( ∪ B ) = 0.64 + 0.20 − 0.096 = 0.744 .\nc c\nFinally, P A ( ∩ B ) = 1 − 0.744 = 0.256 ."
    },
    {
        "id": 260,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company has found that 1% of all applicants for life insurance have\ndiabetes.\nCalculate the probability that five or fewer of 200 randomly selected applicants have\ndiabetes.",
        "options": [
            "0.85",
            "0.88",
            "0.91",
            "0.95",
            "0.98"
        ],
        "answerLetter": "E",
        "answer": "0.98",
        "explanation": "Official solution: E\n\nThe number of applicants with diabetes has a binomial distribution and thus\n5\n200\n’ ’\nx 200 − x\nP X ( ≤ 5) = (0.01) (0.99) = 0.134 + 0.271 + 0.272 + 0.181 + 0.090 + 0.036 = 0.984 .\n∑ ’ ’\nx\nx = 0 ’ ’\nA faster solution is to use the Poisson distribution with λ − 200(0.01) = 2 as an approximation.\n− 2 x\n5\ne 2 1 2 4 8 16 32\n’ ’\n− 2\nP X ( ≤ 5) = = e + + + + + = 0.983\nThen, .\n∑\n’ ’\nx ! 1 1 2 6 24 120\n’ ’\nx = 0"
    },
    {
        "id": 261,
        "topic": "SOA Exam P Sample Question",
        "question": "The probability that an agent sells an insurance policy to a potential customer during a first\nappointment is 0.20. The events of selling an insurance policy to different potential\ncustomers during first appointments are mutually independent.\nThe agent has scheduled first appointments with five potential customers.\nCalculate the probability that the agent sells an insurance policy during at least two of these\nappointments.",
        "options": [
            "0.04",
            "0.20",
            "0.26",
            "0.40",
            "0.74"
        ],
        "answerLetter": "C",
        "answer": "0.26",
        "explanation": "Official solution: C\n\nThe number of sales has a binomial distribution with n = 5 and p = 0.2. Then,\n5 5\n’ ’ ’ ’\n0 5 1 4\nP X ( ≥ 2) = 1 − P X ( ≤ 1) = 1 − (0.2) (0.8) − (0.2) (0.8) = 1 − 0.328 − 0.410 = 0.262 .\n’ ’ ’ ’\n0 1\n’ ’ ’ ’"
    },
    {
        "id": 262,
        "topic": "SOA Exam P Sample Question",
        "question": "A manufacturer produces computers and releases them in shipments of 100. From a\nshipment of 100, the probability that exactly three computers are defective is twice the\nprobability that exactly two computers are defective. The events that different computers\nare defective are mutually independent.\nCalculate the probability that a randomly selected computer is defective.",
        "options": [
            "0.040",
            "0.042",
            "0.058",
            "0.060",
            "0.072"
        ],
        "answerLetter": "C",
        "answer": "0.058",
        "explanation": "Official solution: C\n\nThe number of defective computers has a binomial distribution with n = 100 and p unknown. We\nhave\nP X ( = 3) = 2 P X ( = 2)\n100 100\n’ ’ ’ ’\n3 97 2 98\np (1 − p ) = 2 p (1 − p )\n’ ’ ’ ’\n3 2\n’ ’ ’ ’\n161, 700 p = 2(4,950)(1 − p )\n171, 600 p = 9,900\np = 9,900 /171, 600 = 0.058"
    },
    {
        "id": 263,
        "topic": "SOA Exam P Sample Question",
        "question": "In any 12-month period, the probability that a home is damaged by fire is 20% and the\nprobability of a theft loss at a home is 30%. The occurrences of fire damage and theft\nloss are independent events.\nCalculate the probability that a randomly selected home will either be damaged by fire\nor will have a theft loss, but not both, during the next year.",
        "options": [
            "0.30",
            "0.38",
            "0.44",
            "0.50",
            "0.56"
        ],
        "answerLetter": "B",
        "answer": "0.38",
        "explanation": "Official solution: B\n\nP(fire damage and no theft) = 0.2(1 – 0.3) = 0.14\nP(no fire damage and theft) = (1 – 0.2)(0.3) = 0.24\nP(exactly one) = 0.14 + 0.24 = 0.38"
    },
    {
        "id": 264,
        "topic": "SOA Exam P Sample Question",
        "question": "In one company, 30% of males and 20% of females contribute to a supplemental\nretirement plan. Furthermore, 45% of the company’s employees are female.\nCalculate the probability that a randomly selected employee is female, given that this\nemployee contributes to a supplemental retirement plan.",
        "options": [
            "0.09",
            "0.23",
            "0.35",
            "0.45",
            "0.55"
        ],
        "answerLetter": "C",
        "answer": "0.35",
        "explanation": "Official solution: C\n\nLet C be the event that the employee contributes to a supplemental retirement plan and let F be\nthe event that the employee is female. Then, by Bayes’ Theorem,\nP C ( | F P F ) ( ) 0.2(0.45)\nP F ( | C ) = = = 0.353.\nc c\nP C ( | F P F ) ( ) + P C ( | F ) P F ( ) 0.2(0.45) + 0.3(0.55)"
    },
    {
        "id": 265,
        "topic": "SOA Exam P Sample Question",
        "question": "A health insurer sells policies to residents of territory X and territory Y. Past claims\nexperience indicates the following:\ni) 20% of the total policyholders from territory X and territory Y combined filed no\nclaims.\nii) 15% of the policyholders from territory X filed no claims.\niii) 40% of the policyholders from territory Y filed no claims.\nCalculate the probability that a randomly selected policyholder was a resident of territory\nX, given that the policyholder filed no claims.",
        "options": [
            "0.09",
            "0.27",
            "0.50",
            "0.60",
            "0.80"
        ],
        "answerLetter": "D",
        "answer": "0.60",
        "explanation": "Official solution: D\n\nLet C be the event that no claim is filed and X be the event that the policyholder is from territory\nX. Then, by Bayes’ Theorem,\nP C ( | X P X ) ( ) 0.15 P X ( )\nP X ( | C ) = = .\nc c\n0.15 P X ( ) + 0.4[1 − P X ( )]\nP C ( | X P X ) ( ) + P C ( | X ) P X ( )\nFrom the law of total probability,\n0.2 = P C ( ) = P C ( | X P X ) ( ) + P C ( )[1 − P X ( )]\n= 0.15 P X ( ) + 0.4[1 − P X ( )]\n0.4 − 0.2 = P X ( )[0.4 − 0.15]\nP X ( ) = 0.2 / 0.25 = 0.8.\nThen,\n0.15(0.8)\nP X ( | C ) = = 0.6.\n0.2"
    },
    {
        "id": 266,
        "topic": "SOA Exam P Sample Question",
        "question": "Claim amounts are independent random variables with probability density function\n10\n’\n, for x > 10\n2\n’\nx\n’\nf ( ) x = ’\n’\n’\n0, otherwise.\n’\nCalculate the probability that the largest of three randomly selected claims is less than 25.\n8",
        "options": [
            "125 12",
            "125 27",
            "125 2",
            "5 3",
            "5"
        ],
        "answerLetter": "C",
        "answer": "125 2",
        "explanation": "Official solution: C\n\nThe probability that a single claim is less than 25 is\n25\n− 2\nP X ( < 25) = 10 x dx = 3 5.\n∫\n10\n3\nThe probability that all three claims are less than 25 is\n(3 / 5) = 27 /125."
    },
    {
        "id": 267,
        "topic": "SOA Exam P Sample Question",
        "question": "The lifetime of a certain electronic device has an exponential distribution with mean 0.50.\nCalculate the probability that the lifetime of the device is greater than 0.70, given that it is\ngreater than 0.40.",
        "options": [
            "0.203",
            "0.247",
            "0.449",
            "0.549",
            "0.861"
        ],
        "answerLetter": "D",
        "answer": "0.549",
        "explanation": "Official solution: D\n\n− 2 x\nThe distribution function of an exponential distribution with mean 0.5 is F x ( ) = 1 − e .\n− 1.4\nPr( X > 0.7) e\n− 0.6\nPr( X > 0.7 | X > 0.4) = = = e = 0.549. This can be more efficiently solved\n− 0.8\nPr( X > 0.4)\ne\n− 0.6\nusing the memoryless property: Pr( X > 0.7 | X > 0.4) = Pr( X > 0.3) = e = 0.549."
    },
    {
        "id": 268,
        "topic": "SOA Exam P Sample Question",
        "question": "A farmer purchases a five-year insurance policy that covers crop destruction due to hail.\nOver the five-year period, the farmer will receive a benefit of 20 for each year in which\nhail destroys his crop, subject to a maximum of three benefit payments. The probability\nthat hail will destroy the farmer’s crop in any given year is 0.5, independent of any other\nyear.\nCalculate the expected benefit that the farmer will receive over the five-year period.",
        "options": [
            "30",
            "34",
            "40",
            "46",
            "50"
        ],
        "answerLetter": "D",
        "answer": "46",
        "explanation": "Official solution: D\n\nLet X be the number of years in which a payment of 20 is received. X has a binomial distribution\nwith n = 5 and p = 0.5. Let p ( x ) be the probability of x payments. The expected payment is\n0 p (0) + 20 p (1) + 40 p (2) + 60[1 − p (0) − p (1) − p (2)]\n= 0(1/ 32) + 20(5 / 32) + 40(10 / 32) + 60(16 / 32) = 45.625."
    },
    {
        "id": 269,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company has two divisions, auto and property. Total annual claims, X , in\nthe auto division follow a normal distribution with mean 10 and standard deviation 3.\nTotal annual claims, Y , in the property division follow a normal distribution with mean 12\nand standard deviation 4.\nAssume that X and Y are independent.\nCalculate the probability that total overall claims, X + Y , will not exceed 29.",
        "options": [
            "0.61",
            "0.69",
            "0.78",
            "0.84",
            "0.92"
        ],
        "answerLetter": "E",
        "answer": "0.92",
        "explanation": "Official solution: E\n\n2 2\nThe mean of the sum is 10 + 12 = 22. The standard deviation of the sum is 3 + 4 = 5 . The\nprobability the sum is less than 29 is the probability a standard normal random variable is less\nthan (29 – 22)/5 = 1.4, which is 0.9192."
    },
    {
        "id": 270,
        "topic": "SOA Exam P Sample Question",
        "question": "An industrial company provides health insurance to employees located at four different\nplants. Health insurance costs at each plant are independent of the costs at any other\nplant. Plant managers have calculated the following statistics:\nAverage Standard\nPlant Cost Deviation\nW 2 1.0\nX 2 1.0\nY 5 1.5\nZ 7 2.0\nCalculate the standard deviation of total company health insurance costs.",
        "options": [
            "1.4",
            "2.1",
            "2.9",
            "5.5",
            "6.3"
        ],
        "answerLetter": "C",
        "answer": "2.9",
        "explanation": "Official solution: C\n\nThe variance of the total is the sum of the variances: 1 + 1 + 2.25 + 4 = 8.25. The standard\ndeviation is the square root, 2.87.\n271. Deleted\n272 Deleted\n273. Deleted"
    },
    {
        "id": 274,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company examines its pool of auto insurance customers and gathers the\nfollowing information:\ni) All customers insure at least one car.\nii) 62% of the customers insure more than one car.\niii) 15% of the customers insure a sports car.\niv) Of those customers who insure more than one car, 20% insure a sports car.\nCalculate the probability that a randomly selected customer insures exactly one car, and\nthat the car is not a sports car.",
        "options": [
            "0.230",
            "0.260",
            "0.323",
            "0.354",
            "0.380"
        ],
        "answerLetter": "D",
        "answer": "0.354",
        "explanation": "Official solution: D\n\nConsider the following events about a randomly selected auto insurance customer:\nA = customer insures more than one car\nB = customer insures a sports car\nWe want to find the probability of the complement of A intersecting the complement of B\n(exactly one car, non-sports).\nThen,\nc c\nP A ( ∩ B ) = 1 − P A ( ∪ B )\n= 1 − [ P A ( ) + P B ( ) − P A ( ∩ B )\nP A ( ∩ B ) = P B ( | A P A ) ( ) = 0.2(0.62) = 0.124\nc c\nP A ( ∩ B ) = 1 − [0.62 + 0.15 − 0.124] = 0.354.\n275. Deleted\n276. Deleted\n277. Deleted\n278. Deleted\n279. Deleted\n280. Deleted\n281. Deleted\n282. Deleted\n283. Deleted"
    },
    {
        "id": 284,
        "topic": "SOA Exam P Sample Question",
        "question": "An employer provides disability benefits to its employees for work-related and other\ninjuries. The random variables X and Y denote the employer’s annual expenditures for\nwork-related and other injuries, respectively. An actuarial study reveals the following\ninformation about X and Y :\n− x\n1\n20 5\ni) The density of X is f ( ) x = e , for x > 0 .\n20 5\nii) Var ( Y ) = 12,500.\niii) The correlation between X and Y is 0.20.\nCalculate the variance of the employer’s total expenditures for work-related and other\ninjuries.",
        "options": [
            "12,500",
            "13,500",
            "15,500",
            "16,500",
            "18,972"
        ],
        "answerLetter": "D",
        "answer": "16,500",
        "explanation": "Official solution: D\n\n2\nX follows an exponential distribution with mean and variance Then,\n20 5 (20 5) = 2000.\n.\nCov X , Y = Var X Var Y Corr X , Y = 2000 12,500 0.2 ( ) = 1000\n[ ] [ ] [ ] [ ]\nIt follows that\nVar X + Y = Var X + Var Y + 2Cov X , Y = 2000 + 12,500 + 2 1000 = 16,500 .\n[ ] [ ] [ ] [ ] ( )"
    },
    {
        "id": 288,
        "topic": "SOA Exam P Sample Question",
        "question": "For a pregnant woman, a certain test will give the outcome “not pregnant” with\nprobability 0.10. For a non-pregnant woman, the test will give the outcome “pregnant”\nwith probability 0.20. Of women who take the test, 20% are pregnant.\nCalculate the probability that a woman is pregnant, given her test outcome is “pregnant.”",
        "options": [
            "0.10",
            "0.20",
            "0.50",
            "0.53",
            "0.90"
        ],
        "answerLetter": "D",
        "answer": "0.53",
        "explanation": "Official solution: D\n\nLet WP denote the event “Woman is Pregnant”, WNP the event “Woman is Not Pregnant”, and\nTP the event “Test Shows Pregnancy”. Using Bayes Theorem:\nP( TP WP | ) * P( WP )\nWP TP =\nP( | )\nP( TP WP | ) * P( WP ) + P( TP WNP | ) * P( WNP )\n(1 − 0.1)(0.2) 0.18\n= = = 0.5294\n(1 − 0.1)(0.2) + (0.2)(1 − 0.2) 0.34"
    },
    {
        "id": 289,
        "topic": "SOA Exam P Sample Question",
        "question": "An airport owner purchases an insurance policy to offset costs associated with excessive\namounts of snowfall. For every full ten inches of snow in excess of 40 inches during the\nwinter season, the insurer pays the airport 200 up to a policy maximum of 500.\nThe following table shows a probability function for the random variable X of winter\nseason snowfall, in inches, at the airport.\nInches of Snowfall ( x ) p ( x )\n0 ≤ x < 20 0.06\n20 ≤ x < 30 0.18\n30 ≤ x < 40 0.26\n40 ≤ x < 50 0.22\n50 ≤ x < 60 0.14\n60 ≤ x < 70 0.06\n70 ≤ x < 80 0.04\n80 ≤ x < 90 0.04\n90 ≤ x 0.00\nCalculate the standard deviation of the amount paid under the policy.",
        "options": [
            "163.5",
            "187.6",
            "208.7",
            "234.9",
            "336.6 X , ’ , X"
        ],
        "answerLetter": "A",
        "answer": "163.5",
        "explanation": "Official solution: A\n\nThe probability function of Y , the amount paid in thousands, is\n0.72 y = 0\n’\n’\n0.14 y = 200\n’\np y ( ) = ’\n0.06 y = 400\n’\n’\n0.08 y = 500\n’\nE( Y ) = 200 * 0.14 + 400 * 0.06 + 500 * 0.08 = 28 + 24 + 40 = 92\n2 2 2 2\nE( Y ) = 200 * 0.14 + 400 * 0.06 + 500 * 0.08 = 35200\n2 2 2\nVar( Y ) = E( Y ) – (E( Y )) = 35200 – 92 = 26736\n0.5\nSD( Y )=26,736 = 163.5115"
    },
    {
        "id": 290,
        "topic": "SOA Exam P Sample Question",
        "question": "Let be independent identically distributed random variables such that\n1 100\nS = X + ’ + X\nP X [ = 0] = P X [ = 2] = 0.5 . Let .\n1 100\nCalculate the approximate value of P[ S >115].",
        "options": [
            "0.005",
            "0.067",
            "0.144",
            "0.147",
            "0.440"
        ],
        "answerLetter": "B",
        "answer": "0.067",
        "explanation": "Official solution: B\n\n’ 0.5 x = 0\np x ( ) = ’\n0.5 x = 2\n’\nE( X ) = 1\nVar( X ) = 1\nE( S ) = 100, Va ( r S ) = 100.\nBy the Central Limit Theorem:\n’ 115 − 100 ’\nP[ S > 115] = P Z > = P[ Z > 1.5] = 0.0668.\n’ ’\n100\n’ ’"
    },
    {
        "id": 291,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X and Y be discrete random variables with joint probability function\n0 . 250 , for x = 0 , y = 0\n’\n’\n0 . 250 , for x = 1 , y = 0\n’\np ( x , y ) =\n’\n0 . 125 , for x = 0 , y = 1\n’\n’\n0 . 375 , for x = 1 , y = 1 .\n’\nCalculate Corr ( X , Y ), the correlation coefficient of X and Y .",
        "options": [
            "0.06",
            "0.23",
            "0.26",
            "0.38",
            "0.63"
        ],
        "answerLetter": "C",
        "answer": "0.26",
        "explanation": "Official solution: C\n\nE( X) = 0.25*1 + 0.375*1 = 0.625\nE( Y ) = 0.125*1 + 0.375 = 0.500\nE( XY ) = P[ X = 1, Y = 1] = 0.375\n2\nVar( X ) = 0.625 – 0.625 = 0.234\n2\nVar( Y ) = 0.5 – 0.5 = 0.25\nCov( X,Y)= E( XY )-E( X )E( Y ) = 0.375 – 0.625*0.500 = 0.0625\n1/2\nCorr( X,Y ) = 0.0625/(0.234*0.25) = 0.258"
    },
    {
        "id": 292,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X and Y be discrete random variables with joint probability function\n1\n’\n, for x = 0 , 1 , . .. , 5 and y = 0 ,. .. , x\n’\np ( x , y ) =\n21\n’\n’\n0 , otherwise.\n’\nCalculate the variance of Y .",
        "options": [
            "1.67",
            "2.22",
            "3.33",
            "5.00",
            "5.56"
        ],
        "answerLetter": "B",
        "answer": "2.22",
        "explanation": "Official solution: B\n\n6 / 21 y = 0\n’\n’\n5 / 21 y = 1\n’\n’ 4 / 21 y = 2\np y ( ) = ’\n3 / 21 y = 3\n’\n’\n2 / 21 y = 4\n’\n1/ 21 y = 5\n’\nE( Y ) = 0*6/21 + 1*5/21 + 2*4/21 + 3*3/21 + 4*2/21 + 5*1/21 = 1.67\n2\nE( Y ) = 0*6/21 + 1*5/21 + 4*4/21 + 9*3/21 + 16*2/21 + 25*1/21 = 5\n2\nVar( Y ) = 5 – (1.67) = 2.22"
    },
    {
        "id": 293,
        "topic": "SOA Exam P Sample Question",
        "question": "A company provides disability benefits to its employees. There are only two possible\nbenefits: partial disability, costing the company 40, and total disability, costing the\ncompany 200. The company employs a number of married couples.\nLet ( X , Y ) denote the company's disability costs for a randomly selected employed\nmarried couple. The joint probability function for ( X , Y ) is:\nx\np(x,y) 0 40 200\n0 0.9729 0.0100 0.0020\ny 40 0.0100 0.0020 0.0005\n200 0.0020 0.0005 0.0001\nCalculate the standard deviation of the total disability cost X + Y for the married couple.",
        "options": [
            "12.3",
            "13.8",
            "15.7",
            "16.6",
            "19.8"
        ],
        "answerLetter": "D",
        "answer": "16.6",
        "explanation": "Official solution: D\n\nLet W = X + Y . Then W has the probability function:\nw p ( w )\n0 0.9729\n40 0.02\n80 0.002\n200 0.004\n240 0.001\n400 0.0001\nFor instance, the event { W = 200} is the union of the events { X = 200, Y = 0} and\n{ X = 0, Y = 200}.\n2\nIt follows that E ( W ) = 2.04, E ( W ) = 278.4, and Var ( W ) = 274.24. Taking the square root gives\nthe standard deviation of 16.56."
    },
    {
        "id": 294,
        "topic": "SOA Exam P Sample Question",
        "question": "The probability that the economy will improve, remain stable, or decline is:\nState of the Economy Probability\nImprove 0.30\nRemain stable 0.50\nDecline 0.20\nPrices for Stock X and Stock Y will change as follows:\nState of the Economy Stock X Stock Y\nImprove Increase 18% Increase 15%\nRemain stable Increase 8% Increase 7%\nDecline Decrease 13% Decrease 6%\nDetermine which of the following statements about the percentage price changes for\nStock X and Stock Y is true.",
        "options": [
            "The percentage change for Stock X has a larger variance and a larger mean.",
            "The percentage change for Stock X has a larger variance and the means are equal.",
            "The percentage change for Stock X has a larger variance and a smaller mean.",
            "The variances are equal and the percentage change for Stock X has a larger mean.",
            "Both the variances and the means are equal."
        ],
        "answerLetter": "B",
        "answer": "The percentage change for Stock X has a larger variance and the means are equal.",
        "explanation": "Official solution: B\n\nE [ X ] = (0.3) (0.18) + (0.50) (0.08) + (0.20) ( − 0.13) = 0.068\nE [ Y ] = (0.3) (0.15) + (0.50) (0.08) + 0(.20) ( − 0.06) = 0.068\n2 2 2\nV [ X ] = 0.3 (0.18 − 0.068) + .5 (0.08 − 0.068) + 0.2 ( − 0.13 − 0.068) = .01168\n2 2 2\nV [ Y ] = 0.3 (0.15 − 0.068) + .5 (0.07 − 0.068) + 0.2 ( − 0.06 − 0.068) = .00529\nSo X has a larger variance, but the means are equal."
    },
    {
        "id": 295,
        "topic": "SOA Exam P Sample Question",
        "question": "A company is marketing an investment opportunity to four potential customers. The\ncompany believes that its probability of making a sale is 0.5 for each of the first three\ncustomers but that it is only 0.1 for the fourth customer. The customers' purchases are\nindependent of one another.\nCalculate the probability that at most two customers purchase the investment.",
        "options": [
            "0.38",
            "0.46",
            "0.54",
            "0.84",
            "0.90"
        ],
        "answerLetter": "D",
        "answer": "0.84",
        "explanation": "Official solution: D\n\nUsing the independence of the purchases P(exactly 3 customers purchase)\n2 3 3\n= 3(0.5) (0.5)(0.1) + (0.5) (0.9) = 0.15, and P(4 purchases = (0.5) (0.1) = 0.0125.\nSo P(at most 2) = 1 − P(3) − P(4) = 0.1625 = 0.8375."
    },
    {
        "id": 296,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary compiles the following information about a portfolio of life insurance\npolicies:\ni) There are 150 more policies on males than there are on females.\nii) There are 100 more policies on female nonsmokers than there are on male\nnonsmokers.\niii) There are 350 policies on smokers.\nCalculate the number of policies on female smokers within this portfolio.",
        "options": [
            "50",
            "100",
            "200",
            "250",
            "300"
        ],
        "answerLetter": "A",
        "answer": "50",
        "explanation": "Official solution: A\n\nLet x be the number of policies on male nonsmokers, and let y be the number of policies on\nfemale smokers (to be determined). Then, by condition (ii), the number of policies on female\nnonsmokers is 100 + x , so that the total number of policies on females is 100 + x + y. Next, by\ncondition (iii), the number of policies on male smokers is 350 − y , so that the number of policies\non males is 350 − y + x . Now, by condition (i), we have\n350 − y + x = 150 + (100 + x + y ).\nAfter simplification, we obtain: 100 = 2 y , which produces y = 50, the number of female smokers."
    },
    {
        "id": 297,
        "topic": "SOA Exam P Sample Question",
        "question": "The lifetime of a machine part has a continuous distribution on the interval (0, 40) with\n2\n−\nprobability density function f , where f ( x ) is proportional to (10 + x ) .\nCalculate the probability that the lifetime of the machine part is less than five.",
        "options": [
            "0.03",
            "0.13",
            "0.42",
            "0.58",
            "0.97"
        ],
        "answerLetter": "C",
        "answer": "0.42",
        "explanation": "Official solution: C\n\nLet the random variable X be the future lifetime of a machine part. We know that the density of\n2\n−\nX has the form f (x ) = C (10 + x ) for 0 < x < 40 (and it is equal to zero otherwise). First,\n40\ndetermine the proportionality constant C from the condition\n∫ f ( ) x dx = 1:\n0\n40\n2\n− 1 40\n1 = f ( ) x dx = − C (10 + x ) | = C\n0\n∫\n0\n25\nso that C = 25/2 = 12.5. Then,\n5\n− 2 − 1 5\nP X ( < 5) = 12.5(10 + x ) dx = − 12.5(10 + x ) | = − 0.8333 + 1.25 = 0.4167.\n0\n∫\n0"
    },
    {
        "id": 298,
        "topic": "SOA Exam P Sample Question",
        "question": "The claim, X , for a dental insurance policy is a random variable with the following\nprobability function:\nx P[ X = x ]\n0 0.5\n1 0.2\n2 0.3\nThe premium for the policy is equal to 125% of the expected claim amount.\nCalculate the approximate probability that the total claims on 76 independent policies\nexceed the total premium collected.",
        "options": [
            "0.02",
            "0.07",
            "0.17",
            "0.25",
            "0.40"
        ],
        "answerLetter": "A",
        "answer": "0.02",
        "explanation": "Official solution: A\n\nE( X ) = 0(0.5) + 1(0.2) + 2(0.3) = 0.8\n2 2 2 2\nE( X ) = 0 (0.5) + 1 (0.2) + 2 (0.3) = 1.4,\n2 2 2\nVar( X ) = E( X ) - (E( X) ) = 1.4 − (0.8) = 0.76\nThe premium on a policy is 125% of 0.8, which is 1. The total premium on 76 policies is thus\n76. Let Y be the total claim on 76 policies. By the Central Limit Theorem Y has approximately a\nnormal distribution with mean (76)(0.8) = 60.8 and variance 76(0.76) = 57.76. Consequently,\n’ 76 − 60.8 ’\nP( Y > 76) ≈ P( Z > where Z is the standard normal random\nP Y [ > 76] = P Z > = 2 ,\n’ ’\n57.76\n’ ’\nvariable. The answer is 1 − Φ (2) = 0.0228."
    },
    {
        "id": 299,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company categorizes its policyholders into three mutually exclusive groups.\nA study produced the following information:\nProbability a\nNumber of policyholder\nGroup policyholders has no claims\nA 20,000 70%\nB 45,000 90%\nC 35,000 50%\nWithin each group, the numbers of claims made by individual policyholders are mutually\nindependent Poisson random variables.\nCalculate the expected total number of claims, in thousands, made by the 100,000\npolicyholders.",
        "options": [
            "21",
            "28",
            "36",
            "64",
            "72"
        ],
        "answerLetter": "C",
        "answer": "36",
        "explanation": "Official solution: C\n\n− λ 0\nA\ne λ\nFor Group A: P X [ = 0] = 0.70 = ⇒ λ = 0.3567\nA\n0!\n− λ 0\nB\ne λ\nFor Group B: P X [ = 0] = 0.90 = ⇒ λ = 0.1054\nB\n0!\n− λ 0\nC\ne λ\nFor Group C: P X [ = 0] = 0.50 = ⇒ λ = 0.6931\nC\n0!\nThen, 20, 000 × 0.3567 + 45, 000 × 0.1054 + 35, 000 × 0.6931 = 36,136"
    },
    {
        "id": 300,
        "topic": "SOA Exam P Sample Question",
        "question": "A group of insurance policies have all been in force for at least three years. The\ninsurance company plans to pay a dividend on each policy in the group that had no more\nthan one claim incurred on it in the past three years. The number of claims incurred on a\npolicy in any year follows a Poisson distribution with mean 0.288 and the number\nincurred in any year is independent of the number incurred in any other year.\nCalculate the probability that a policy chosen at random from the group will receive a\ndividend.",
        "options": [
            "0.01",
            "0.36",
            "0.42",
            "0.54",
            "0.79"
        ],
        "answerLetter": "E",
        "answer": "0.79",
        "explanation": "Official solution: E\n\n− 0.288 0\ne 0.288\nP 0 claims = = 0.750\n( )\n0!\n− 0.288 1\ne 0.288\nP 1 claim = = 0.216\n( )\n1!\nFor three years the probability of 0 or 1 claim is\n3 2\n3\nP 0 in 3 years)+P(1 in 3 years = 0.75 + 0.75 0.216 = 0.79.\n( ) ( ) ( ) ( )\n( )\n1\nAlternatively, the number of claims in three years has a Poisson distribution with mean 3(0.288)\n= 0. 864. The probability of 0 or 1 claims is\n− 0.864 0 − 0.864 1\ne 0.864 e 0.864\n+ = 0.79.\n0! 1!"
    },
    {
        "id": 301,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company sells a one-year insurance policy that covers fire and theft losses.\nThe variance of the number of fire losses is 5. The variance of the number of theft\nlosses is 8. The covariance between the number of fire and theft losses is 3.\nCalculate the variance of the total number of fire and theft losses covered by this policy.",
        "options": [
            "7",
            "10",
            "13",
            "16",
            "19"
        ],
        "answerLetter": "E",
        "answer": "19",
        "explanation": "Official solution: E\n\nVar(Total) = Var(Fire) + Var(Theft) + 2Cov(Fire, Theft) = 5 + 8 + 2(3) = 19."
    },
    {
        "id": 302,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of automobile accidents on any day in a city has a Poisson distribution with\nmean 4. The number of accidents on a given day is independent of the number of\naccidents on any other day.\nCalculate the probability that at most one accident occurs in a three-day period.\n− 12",
        "options": [
            "13 e − 12",
            "72 e − 12",
            "85 e − 4",
            "5 e − 4",
            "13 e"
        ],
        "answerLetter": "A",
        "answer": "13 e − 12",
        "explanation": "Official solution: A\n\nLet X , X , X denote the number of accidents in days 1, 2, and 3, respectively.\n1 2 3\nThen, each has Poisson distribution with mean 4. Since the X s are assumed to be independent,\ni\nX = X + X + X has a Poisson distribution with mean 3(4) = 12. Then,\n1 2 3\n− 12 0 − 12 1\ne 12 e 12\n− 12\nP X < 2 = P X = 0 + P X = 1 = + = 13 e .\n[ ] [ ] [ ]\n0! 1!"
    },
    {
        "id": 303,
        "topic": "SOA Exam P Sample Question",
        "question": "An experiment consists of tossing three fair coins and is deemed a success if the result is\nthree heads or three tails. The experiment is repeated until a success occurs.\nCalculate the probability that it takes exactly three experiments to obtain a success.",
        "options": [
            "0.047",
            "0.070",
            "0.141",
            "0.188",
            "0.422"
        ],
        "answerLetter": "C",
        "answer": "0.141",
        "explanation": "Official solution: C\n\n1 1 1\nThe probability of success is p = P HHH ( ) + P TTT ( ) = + = .\n8 8 4\nFor the first success to be on the third experiment we need two failures followed by one success.\nThe probability is (3/4)(3/4)(1/4) = 9/64 = 0.141."
    },
    {
        "id": 304,
        "topic": "SOA Exam P Sample Question",
        "question": "Companies P, Q, and R use routes that take their trucks through a common inspection\ncheckpoint each day. The number of trucks for each company that pass the checkpoint\neach day is as follows:\nNumber\nCompany of Trucks\nP 4\nQ 3\nR 2\nTotal 9\nCalculate the probability that at least one of two randomly chosen trucks\nis from Company P.",
        "options": [
            "0.28",
            "0.31",
            "0.56",
            "0.69",
            "0.72"
        ],
        "answerLetter": "E",
        "answer": "0.72",
        "explanation": "Official solution: E\n\nP[At least one Company P truck]:\nP[P and (Q or R)]+P[(R or Q) and P]+P[P and P]\n4 5 4 3\n’ ’’ ’ ’ ’’ ’\n= 2 + = 0.72.\n’ ’’ ’ ’ ’’ ’\n9 8 9 8\n’ ’’ ’ ’ ’’ ’\nAlternatively, take the complement of having no Company P trucks:\n1 – (5/9)(4/8) = 0.72."
    },
    {
        "id": 305,
        "topic": "SOA Exam P Sample Question",
        "question": "A company administers a typing test to screen applicants for a secretarial position. In\norder to pass the test, an applicant must complete the test in 50 minutes with no more\nthan one error. Historical data reveals the following about the population of applicants:\ni) The number of test errors follows a Poisson distribution with mean 3.\nii) The time required to complete the test follows a normal distribution with mean 45\nand standard deviation 10.\niii) The number of errors and the time required to complete the test are independent.\nCalculate the probability that an applicant chosen at random will pass the test.",
        "options": [
            "0.10",
            "0.14",
            "0.19",
            "0.84",
            "0.89"
        ],
        "answerLetter": "B",
        "answer": "0.14",
        "explanation": "Official solution: B\n\n− 3 0 − 3 1\ne 3 e 3\n− 3\nP Less than 2 Errors = + = 4 e = 0.199\n( )\n0! 1!\n50 − 45\n’ ’\nP Time < 50 = P Z < = P Z < 0.5 = 0.6915\n( ) ( )\n’ ’\n10\n’ ’\nDue to independence of errors and time, the probability is\n0.199*0.6915 = 0.1376."
    },
    {
        "id": 306,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company sells 40% of its renters policies to home renters and the remaining\n60% to apartment renters. Among home renters, the time from policy purchase until\npolicy cancellation has an exponential distribution with mean 4 years, and among\napartment renters, it has an exponential distribution with mean 2 years.\nCalculate the probability that the policyholder is a home renter, given that a renter still\nhas a policy one year after purchase.",
        "options": [
            "0.08",
            "0.27",
            "0.46",
            "0.56",
            "0.66"
        ],
        "answerLetter": "C",
        "answer": "0.46",
        "explanation": "Official solution: C\n\nH: Home Renter\nA: Apartment Renter\nP H T [ ] > 1]\nLet T be time from purchase to cancellation. We are looking for .\n1 1\n∞ − t ∞ − t\n1 1\n− 1 4 − 1 2\n4 2\nNow and .\nP T > 1 H = e dt = e P T > 1 A = e dt = e .\n( ) ( )\n∫ ∫\n1 1\n4 2\nP H P T > 1 H\n( ) ( )\nUsing Bayes’ Theorem, P H T > 1 =\n( )\nP A P T > 1 A + P H P T > 1 H\n( ) ( )\n( ) ( )\n− 0.25\n0.4 e\n= = 0.4612.\n− 0.5 − 0.25\n0.6 e + 0.4 e"
    },
    {
        "id": 307,
        "topic": "SOA Exam P Sample Question",
        "question": "A company sells insurance policies for which benefit payments made to each\npolicyholder are independently and identically normally distributed with mean 2475 and\nstandard deviation 250.\nCalculate the minimum number of policies that must be sold for there to be at least a 99%\nprobability that the average benefit paid per policy will be no greater than 2500.",
        "options": [
            "24",
            "542",
            "664",
            "5815",
            "6440"
        ],
        "answerLetter": "B",
        "answer": "542",
        "explanation": "Official solution: B\n\nn\nS\nn\nLet S = X and S = , where the X are the yearly benefit amounts. Then,\nn ∑ i i\nn\ni = 1\nS − 2475 n S − 2475\nn\nis N (0,1) because the sum of independent normal variables is also\nZ = =\n250 n 250 / n\nnormal. Then,\n’ ’\n2500 − 2475\nP S ≤ 2500 = P Z < = P Z < 0.1 n = 0.99\n( ) ’ ’ ( )\n250\nn\n’ ’\n( So, 0.1 n = 2.32634\nn = 541.19, so use n = 542.\nThe solution must be rounded up to 542 or the probability will be slightly less than 0.99."
    },
    {
        "id": 308,
        "topic": "SOA Exam P Sample Question",
        "question": "A life insurance policy pays 1000 upon the death of a policyholder provided that the\npolicyholder survives at least one year but less than five years after purchasing the policy.\nLet X denote the number of years that a policyholder survives after purchasing the policy\nwith the following probabilities:\nP[ X < x ]\nx\n1 0.05\n2 0.12\n3 0.21\n4 0.33\n5 0.48\nCalculate the standard deviation of the payment made under this policy.",
        "options": [
            "218",
            "430",
            "480",
            "495",
            "500"
        ],
        "answerLetter": "D",
        "answer": "495",
        "explanation": "Official solution: D\n\nLet Y be the amount paid out. The amount is 0 if the policyholder lives less than 1 year or more\nthan 5 years. The amount is 1000 otherwise. Then,\n’ 0.57, y = 0\np y ( ) = ’\n0.43, y = 1000\n’\nE Y = 0 0.57 + 1000 0.43 = 430\n( ) ( ) ( )\n2 2 2\nE Y = 0 0.57 + 1000 0.43 = 430, 000\n( ) ( ) ( )\n2\nVar Y = 430, 000 − 430 = 245,100\n( )\nSD( Y ) = 495."
    },
    {
        "id": 309,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurer divides a city into three zones and assesses risks associated with fire loss as\nfollows:\nProbability of fire Percentage of\nloss for a home insurer’s fire\nZone in a given year policies\nA 0.015 40%\nB 0.011 35%\nC 0.008 25%\nGiven that a fire loss occurs in a home covered by the insurer, calculate the probability\nthat the home is in Zone A.",
        "options": [
            "0.349",
            "0.400",
            "0.441",
            "0.465",
            "0.506"
        ],
        "answerLetter": "E",
        "answer": "0.506",
        "explanation": "Official solution: E\n\nThe solution uses Bayes’ Theorem.\nDenote the event of Zone A by A, etc.\nDenote the event of a fire occurring by F.\nP F = P F A P A + P F B P B + P F C P C\n( ) ( ) ( ) ( ) ( ) ( ) ( )\n= 0.015*0.4 + 0.011*0.35 + 0.008*0.25\n= 0.01185.\nThen P A F = P F A * P A P F\n( ) ( )\n( ) ( )\n= 0.015*0.4 0.01185 = 0.5063."
    },
    {
        "id": 310,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurer offers policies for which insured loss amounts follow a distribution with\ndensity function\nx\n’\n, for 0 < x < 10\n’\nf ( ) x =\n50\n’\n’\n0 , otherwise.\n’\nCustomers may choose one of two policies. Policy 1 has no deductible and a limit of 4,\nwhile Policy 2 has a deductible of 4 and no limit.\nGiven the occurrence of an insured loss, calculate the absolute value of the difference\nbetween the insurer’s expected claim payments under Policies 1 and 2.",
        "options": [
            "0.32",
            "0.64",
            "0.79",
            "0.91",
            "1.12"
        ],
        "answerLetter": "D",
        "answer": "0.91",
        "explanation": "Official solution: D\n\nUnder plan 1 the expected payment is\n4 10\n3 2\n4 10\nx x x 4 x\nP = x ⋅ dx + 4 ⋅ dx = +\n1\n∫ ∫\n0 4\n50 50 150 100\n0 4\n64 400 − 64 1136\n’ ’\n= + = = 3.786667\n’ ’\n150 100 300\n’ ’\nUnder plan 2,\n4 10\nx x\nP = 0 ⋅ dx + ( x − 4 ) ⋅ dx\n2\n∫ ∫\n0 4\n50 50\n10\n2 3 2\n10\nx 4 x x x 1000 64 16\n’ ’ ’ ’\n= − dx = − = − 4 − −\n’ ’ ’ ’\n∫\n4\n50 50 150 25 150 150 25\n’ ’ ’ ’\n4\n8 32 432\n= + = = 2.88\n3 150 150\nSo .\nP − P = 3.78666 − 2.88 = 0.906667\n1 2"
    },
    {
        "id": 311,
        "topic": "SOA Exam P Sample Question",
        "question": "Employees of a large company all choose one of three levels of health insurance\ncoverage, for which premiums, denoted by are 1, 2, and 3, respectively. Premiums\nX ,\nare subject to a discount, denoted by of 0 for smokers and 1 for non-smokers. The\nY ,\njoint probability function of X and Y is given by\n2 2\n’ x + y\n, for x = 1 , 2 , 3 and y = 0 , 1\n’\np ( x , y ) =\n’ 31\n’\n0 , otherwise.\n’\nCalculate the variance of X − Y , the total premium paid by a randomly chosen employee.",
        "options": [
            "0.20",
            "0.69",
            "0.74",
            "1.90",
            "2.65"
        ],
        "answerLetter": "C",
        "answer": "0.74",
        "explanation": "Official solution: C\n\nLet Z = X – Y . The probabilities for Z are:\np (0) = 2/31 (when x = 1 and y = 1, that is (1,1))\np (1) = 6/31 (for (1,0) and (2,1))\np (2) = 14/31 (for (2,0) and (3,1))\np (3) = 9/31 (for (3,0))\nThen.\n1 61\nE Z = 2(0) + 6(1) + 14(2) + 9(3) = ,\n( ) [ ]\n31 31\n1 143\n2 2 2 2 2\nE(Z ) = ’ 2(0 ) + 6(1 ) + 14(2 ) + 9(3 ) ’ = , and\n’ ’\n31 31\n2\n143 61 4433 − 3721 712\n’ ’\nVar( Z ) = − = = = 0.7409\nand so .\n’ ’ 2\n31 31 31 961\n’ ’"
    },
    {
        "id": 312,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary determines the following regarding an individual auto policyholder:\ni) The probability that the auto policyholder will file a medical claim is 0.30.\nii) The probability that the auto policyholder will file a property claim is 0.42.\niii) The probability that the auto policyholder will file a medical claim or a property\nclaim is 0.60.\nCalculate the probability that the auto policyholder will file exactly one type of claim,\ngiven that the policyholder will not file both types of claims.",
        "options": [
            "0.45",
            "0.48",
            "0.52",
            "0.55",
            "0.60"
        ],
        "answerLetter": "D",
        "answer": "0.55",
        "explanation": "Official solution: D\n\nM = medical, P = property\nP[ M ] = 0.30, P[ P ] = 0.42, P[ M ∪ P ] = 0.60\nTherefore, P[ M ∩ P ] = 0.12 (0.30 + 0.42 − 0.60 = 0.12)\nP[Exactly 1] 0.48\nP[Exactly 1 | Not Both]= = = 0.54545.\nP[Not Both] 0.88"
    },
    {
        "id": 313,
        "topic": "SOA Exam P Sample Question",
        "question": "The probability that a homeowners policyholder reports a property claim in a year\nincreases by 25% per year. Conversely, the probability that a homeowners policyholder\nreports a liability claim in a year decreases by 25% per year.\nThe probability that a homeowners policyholder reports both a property claim and a\nliability claim in Year 1 is 0.01. The event that a homeowners policyholder reports a\nproperty claim is independent of the event that the policyholder reports a liability claim.\nCalculate the probability that a homeowners policyholder reports both a property claim\nand a liability claim in Year 9.",
        "options": [
            "0.005",
            "0.006",
            "0.010",
            "0.014",
            "0.015"
        ],
        "answerLetter": "B",
        "answer": "0.006",
        "explanation": "Official solution: B\n\n8\nP[Reports Property Claim in Year 9]=1.25 * P[Reports Property Claim in Year 1]\n8\nP[Reports Liability Claim in Year 9]=0.75 * P[Reports Liability Claim in Year 1]\n8 8\n0.01 *(1.25) x (0.75) = 0.005967"
    },
    {
        "id": 314,
        "topic": "SOA Exam P Sample Question",
        "question": "An auto insurance company tracks the experience of its first-year and multi-year\npolicyholders separately. First-year policyholders account for 15% of the company's\nbusiness while multi-year policyholders account for the rest.\nThe number of claims reported to the company in a year by a first-year policyholder\nfollows a Poisson distribution with mean 0.50, while the number of claims reported to the\ncompany in a year by a multi-year policyholder follows a Poisson distribution with mean\n0.20.\nCalculate the probability that a policyholder is a first-year policyholder, given that the\npolicyholder reports at least one claim in a year to the company.",
        "options": [
            "0.246",
            "0.277",
            "0.306",
            "0.476",
            "0.685 X 1 Y = e X"
        ],
        "answerLetter": "B",
        "answer": "0.277",
        "explanation": "Official solution: B\n\nDefine: N = # of claims reported in a year by a policyholder\nF = event of a first-year policyholder\n− 0 5 . 0\ne 0 .5\n’ ’\nP N ≥ 1 F = 1 − P N < 1 F = 1 − P N = 0 | F = 1 − = 0.393 47\n] [ ] [\n’ ’\n0!\n− 0.2 0\ne 0.2\nC C C\n’ ’\nP N ≥ 1 F = 1 − P N < 1 F = 1 − P N = 0 | F = 1 − = 0.18127\n] [ ] [\n’ ’\n0 !\nP[ N ≥ 1| F ]P[ F ]\nPr[ F | N ≥ 1] = P F [ | N ≥ 1] =\nC C\nP[ N ≥ 1| F ]P[ F ] + P[ N ≥ 1| F ]P[ F ]\n(0.39347)(0.15)\n= = 0.27696\n(0.39347)(0.15) + (0.18127)(0.85)"
    },
    {
        "id": 315,
        "topic": "SOA Exam P Sample Question",
        "question": "The random variable characterizes an insurer's annual property losses, where is\n1 1\nnormally distributed with mean 16 and standard deviation 1.50. Similarly, the random variable\nX\n2\nY = e X\ncharacterizes the insurer's annual liability losses, where is normally distributed\n2 2\nwith mean 15 and standard deviation 2.\nThe insurer's annual property losses are independent of its annual liability losses.\nCalculate the probability that, in a given year, the minimum of the insurer's property losses\n16\nand liability losses exceeds e .",
        "options": [
            "0.126",
            "0.154",
            "0.250",
            "0.309",
            "0.346"
        ],
        "answerLetter": "B",
        "answer": "0.154",
        "explanation": "Official solution: B\n\n16 16 16 16 16\nP [min( Y Y , ) > e ] = P Y [ > e , Y > e ] = P Y [ > e ] [ P Y > e ] due to independence.\n1 2 1 2 1 2\n16 − 16 16 − 15\n’ ’ ’ ’\n16 16\nP Y [ > e ] [ P Y > e ] = P X [ > 16] [ P X > 16] = P Z > P Z >\n1 2 1 2\n’ ’ ’ ’\n1.5 2\n’ ’ ’ ’\n= P Z [ > 0] [ P Z > 0.5] = 0.5(1 − 0.6916) = 0.15425."
    },
    {
        "id": 316,
        "topic": "SOA Exam P Sample Question",
        "question": "A health insurance company classifies applicants, depending on their health, into one of\nthree categories: A, B, or C.\nThe following probabilities apply:\ni) P[A] = 5P[C]\nii) P[B] = 4P[C]\niii) P[ zero claims | A] = 0.1\niv) P[ zero claims | B] = 0.2\nv) P[ zero claims | C] = 0.4\nCalculate the probability that an insured was classified in category C, given that the\ninsured had zero claims.",
        "options": [
            "0.040",
            "0.170",
            "0.235",
            "0.294",
            "0.471"
        ],
        "answerLetter": "C",
        "answer": "0.235",
        "explanation": "Official solution: C\n\nP( A ) + P( B ) + P( C ) = 1\n5P( C ) + 4P( C ) + P( C ) = 1\nP( C ) = 0.1\nP( B ) = 0.4\nP( A ) = 0.5\nP 0 Claims C ⋅ P C\nP C ∩ 0 Claims ( ) ( )\n( )\nP C 0 Claims = =\n( )\nP 0 Cliaims P 0 Claims| A ⋅ P A + P 0 Claims B ⋅ P B + P 0 Claims| C ⋅ P C\n( ) ( ) ( ) ( ) ( ) ( ) ( )\n0.4 0.1\n( )( ) 0.04\n= = = 0.235\n0.1 0.5 + 0.2 0.4 + 0.4 0.1 0.05 + 0.08 + 0.04\n( )( ) ( )( ) ( )( )"
    },
    {
        "id": 317,
        "topic": "SOA Exam P Sample Question",
        "question": "A five-year term insurance policy pays 25,000 if the insured dies in the first year. The\nbenefit declines by 5000 per year for each of the next four years. In each of the five years\ncovered by the policy, the probability of dying is 0.01, given that the insured is alive at\nthe beginning of that year.\nCalculate the expected benefit the insurance company will pay during the five-year term.",
        "options": [
            "692",
            "740",
            "750",
            "985",
            "1225"
        ],
        "answerLetter": "B",
        "answer": "740",
        "explanation": "Official solution: B\n\nLet Y be the random variable for the benefit.\n0.01, y = 25, 000\n’\n’\n0.99(0.01), y = 20, 000\n’\n2\n’ 0.99 (0.01), y = 15, 000\np y ( ) = ’\n3\n0.99 (0.01), y = 10, 000\n’\n4\n’\n0.99 (0.01), y = 5, 000\n’\n1 − above, y = 0\n’\n2 3 4\nE[ Y ] = 25000 0.01 ( ) + 20000 0.99 ( )( 0.01 ) + 15000 0.99 ( ) ( 0.01 ) + 10000 0.99 ( ) ( 0.01 ) + 5000 0.99 ( ) ( 0.01 )\n= 740"
    },
    {
        "id": 318,
        "topic": "SOA Exam P Sample Question",
        "question": "Data on a certain pregnancy test show that a pregnant woman will test negative or not\npregnant 10% of the time, while a non-pregnant woman will test positive 20% of the\ntime.\nThirty percent of the women who take the test are pregnant.\nCalculate the probability that a woman is pregnant given that her test outcome is positive.",
        "options": [
            "0.18",
            "0.30",
            "0.66",
            "0.82",
            "0.90"
        ],
        "answerLetter": "C",
        "answer": "0.66",
        "explanation": "Official solution: C\n\nLet WP = Woman Pregnant\nWNP = Woman Not Pregnant\nTP = Test Shows Pregnancy (Positive)\nUsing Bayes Theorem:\nP ( TP WP | ) P ( WP )\nP WP TP | =\n( )\nP TP WP | P WP + P TP WNP | P WNP\n( ) ( ) ( ) ( )\n0.90 0.30\n( )( ) 0.27 0.27\n= = = = 0.6585\n0.90 0.30 + 0.20 0.70 0.27 + 0.14 0.41\n( )( ) ( )( )"
    },
    {
        "id": 319,
        "topic": "SOA Exam P Sample Question",
        "question": "A company is marketing an investment opportunity to four potential customers. The\ncompany believes that its probability of making a sale is 0.7 for each of the first three\ncustomers but that it is only 0.2 for the fourth customer. The customers' purchases are\nindependent of one another.\nCalculate the probability that at most two customers purchase the investment.",
        "options": [
            "0.18",
            "0.39",
            "0.57",
            "0.71",
            "0.82"
        ],
        "answerLetter": "C",
        "answer": "0.57",
        "explanation": "Official solution: C\n\n2 3\n= +\nP exactly 3 ( ) ( )( 3 0.70 ) ( 0.30 )( 0.20 ) ( 0.70 ) ( 0.80 )\n= 0.0882 + 0.2744 = 0.3626\n3\nP exactly 4 = 0.70 0.20 = 0.0686\n( ) ( ) ( )\nP at most 2 = 1 − 0.3626 − 0.0686 = 0.5688\n( )"
    },
    {
        "id": 320,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary compiles a sample of 100 auto insurance claims. The sizes of these sampled\nclaims are independently and identically distributed with mean 1000 and standard\ndeviation 400.\nCalculate the approximate probability that the sum of the sizes of the 100 claims is less\nthan 92,000.",
        "options": [
            "0.023",
            "0.050",
            "0.421",
            "0.579",
            "0.977"
        ],
        "answerLetter": "A",
        "answer": "0.023",
        "explanation": "Official solution: A\n\nMean of sum = 100(1000) = 100, 000\n2\nStandard deviation of sum = 100 400 = 4, 000\n( )\n92, 000 − 100, 000\n’ ’\nP X < 92, 000 = P Z < = P Z < − 2 = 0.0228\n( ) ( )\n’ ’\n4000\n’ ’"
    },
    {
        "id": 321,
        "topic": "SOA Exam P Sample Question",
        "question": "A business manufactures light bulbs and sells them in boxes of 50. Let p denote the\nprobability that a light bulb is defective. The events that different light bulbs are\ndefective are mutually independent.\nLet X denote the number of non-defective light bulbs in a box of 50. In addition, let n be\nan integer such that P .\n[ X ≥ n ] ≥ 0 . 95\nDetermine which one of the following statements must be true.\n50\n’ 50 ! ’\nk 50 − k",
        "options": [
            "( 1 − p ) p ≥ 0 . 95 ∑ ’ ’ k ! ( 50 − k )! k = n ’ ’ n ’ 50 ! ’ k 50 − k",
            "( 1 − p ) p ≥ 0 . 95 ∑ ’ ’ k ! ( 50 − k )! k = 0 ’ ’ 50 ’ 50 ! ’ k 50 − k",
            "p ( 1 − p ) ≥ 0 . 95 ∑ ’ ’ k ! ( 50 − k )! k = n + 1 ’ ’ n ’ 50 ! ’ k 50 − k",
            "p ( 1 − p ) ≥ 0 . 95 ∑ ’ ’ k ! ( 50 − k )! k = 0 ’ ’ 50 ’ 50 ! ’ k 50 − k",
            "p ( 1 − p ) ≥ 0 . 95 ∑ ’ ’ k ! ( 50 − k )! k = n ’ ’"
        ],
        "answerLetter": "A",
        "answer": "( 1 − p ) p ≥ 0 . 95 ∑ ’ ’ k ! ( 50 − k )! k = n ’ ’ n ’ 50 ! ’ k 50 − k",
        "explanation": "Official solution: A\n\nLet X be the number of non-defective items in a randomly chosen box of 50 items.\n*\nThen X − Binomial 50, 1 − p and P (at least t non-defective items in the box of 50 items)\n( )\n50\nt 50 − t\n* 50\n= P X ≥ t = 1 − p p and we want this probability to be at\n( ) ( ) ( ) ( )\n∑\nt\n*\nt = t\nleast 0.95 ⇒ A is correct."
    },
    {
        "id": 322,
        "topic": "SOA Exam P Sample Question",
        "question": "A fair die is rolled until three sixes are obtained. Let the random variable X be the total\nnumber of rolls required.\nCalculate Var ( X ).",
        "options": [
            "5/12",
            "18/25",
            "15",
            "30",
            "90"
        ],
        "answerLetter": "E",
        "answer": "90",
        "explanation": "Official solution: E\n\n1\nX has a negative binomial probability distribution, where r = 3 and p = . The probability\n6\n5\n’ ’\n3\n’ ’\n’ x − 1 ’\nr (1 − p ) 6\nr y − r ’ ’\nfunction is: p x ( ) = p q . The variance for this is Var X ( ) = = = 90.\n’ ’\n2 2\nr − 1 p\n’ ’ 1\n’ ’\n’ ’\n6\n’ ’"
    },
    {
        "id": 323,
        "topic": "SOA Exam P Sample Question",
        "question": "A broker markets four separate products. The probabilities of selling these products to a\nclient follow:\nProduct Probability\nAuto insurance 0.45\nHomeowners insurance 0.55\nHealth insurance 0.60\nLife insurance 0.60\nThe sales of these products are mutually independent.\nCalculate the probability that the broker sells more than two products to a client.",
        "options": [
            "0.24",
            "0.30",
            "0.39",
            "0.61",
            "0.76"
        ],
        "answerLetter": "C",
        "answer": "0.39",
        "explanation": "Official solution: C\n\nP ( 3 products ) = ( 0.45 )( 0.55 )( 0.60 )( 0.40 ) + ( 0.55 )( 0.55 )( 0.60 )( 0.60 )\n+ 0.45 0.45 0.60 0.60 + 0.45 0.55 0.40 0.60 = 0.3006\n( )( )( )( ) ( )( )( )( )\nP 4 products = 0.45 0.55 0.60 0.60 = 0.0891\n( ) ( )( )( )( )\nP 3 or 4 = 0.3006 + 0.0891 = 0.3897\n( )"
    },
    {
        "id": 324,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary determines that the daily auto accident count within a city can be modeled by\na Poisson random variable with mean 4. In addition, the accident counts on different\ndays are mutually independent.\nCalculate the approximate probability that at least 6496 accidents occur during a period\nof 1600 days.",
        "options": [
            "0.01",
            "0.12",
            "0.19",
            "0.27",
            "0.49"
        ],
        "answerLetter": "B",
        "answer": "0.12",
        "explanation": "Official solution: B\n\nThe total number of accidents has mean 1600(4) = 6400 and variance 1600(4) = 6400. Using the\nCentral Limit Theorem,\n1600\n’ ’ 6496 − 6400\n’ ’\nP X ≥ 6496 ≈ P Ζ ≥ = P Ζ ≥ 1.2 = 1 − 0.8849 = 0.1151 .\n( )\n∑ i\n’ ’ ’ ’\n80\n’ ’\n’ i = 1 ’"
    },
    {
        "id": 325,
        "topic": "SOA Exam P Sample Question",
        "question": "A company sponsors health insurance, life insurance, and retirement plans for its\nemployees. Each employee selects one of two participation options:\ni) participate in exactly two plans at the company’s expense\nii) participate in none of the plans and receive a cash lump sum payment instead\nEmployee participation levels in each plan follow:\ni) 62.5% of employees participate in the health insurance plan.\nii) 37.5% of employees participate in the life insurance plan.\niii) 50.0% of employees participate in the retirement plan.\nCalculate the percentage of employees who participate in both the life insurance and\nretirement plans.",
        "options": [
            "12.5%",
            "25.0%",
            "37.5%",
            "50.0%",
            "62.5%"
        ],
        "answerLetter": "A",
        "answer": "12.5%",
        "explanation": "Official solution: A\n\nLet H − health\nL − life\nR − retirement\na = H ∩ L b = H ∩ R c = L ∩ R\n( ) ( ) ( )\na + b = 0.625\na + c = 0.375\nb + c = 0 . 5 00\nb + c + a + c − a + b = 2 c = 0. 00 5 + 0.375 − 0.625 = 0. 25\n( ) ( ) ( )\nc = 0 .12 5"
    },
    {
        "id": 326,
        "topic": "SOA Exam P Sample Question",
        "question": "The monthly commission that an agent earns is modeled by a random variable X with\nprobability density function\nx\n’ −\n1\n20\ne , for x > 0\n’\n’\n20\nf ( x ) =\n’\n’\n’\n0 , otherwise.\n’\nCalculate the probability that the commission the agent earns in a month is within 0.5\nstandard deviations of E( X ).",
        "options": [
            "0.34",
            "0.38",
            "0.50",
            "0.68",
            "0.95"
        ],
        "answerLetter": "B",
        "answer": "0.38",
        "explanation": "Official solution: B\n\nThis is an exponential distribution with mean 20 and standard deviation 20. So, we want:\n1 1\n30\n30 − x − x\n1\n− 1.5 − 0.5\n20 20\ne dx = e = − e + e = 0.3834\n∫\n10 10\n20"
    },
    {
        "id": 327,
        "topic": "SOA Exam P Sample Question",
        "question": "Individual burglary claim amounts covered by policies of an insurance company are\nnormally distributed with mean 2500 and standard deviation 500.\nThe probability that the mean of a random sample of 100 claims will exceed K is 0.01.\nCalculate K .",
        "options": [
            "2505",
            "2512",
            "2616",
            "3663",
            "4950"
        ],
        "answerLetter": "C",
        "answer": "2616",
        "explanation": "Official solution: C\n\nAverage of 100 claims is normal with mean 2500 and standard deviation 500 100 = 50 .\nP X < K = 0.99\n( )\nK − 2500\n’ ’\nP Z < = 0.99\n’ ’\n50\n’ ’\nK − 2500\n= 2.32635\n50\nK = 2616"
    },
    {
        "id": 328,
        "topic": "SOA Exam P Sample Question",
        "question": "The operating cost of a new claims system is modeled by a random variable X with\nvariance 50. In its second year of use, inflation of 3% and an additional fixed\nmaintenance cost of 2.5 increase the operating cost of the system.\nCalculate the variance of the operating cost of the claims system in its second year of use.",
        "options": [
            "52",
            "53",
            "54",
            "56",
            "59"
        ],
        "answerLetter": "B",
        "answer": "53",
        "explanation": "Official solution: B\n\n2 2\nVar[1.03 X + 2.5] = (1.03) Var[ X ] = (1.03) (50) = 53.045"
    },
    {
        "id": 329,
        "topic": "SOA Exam P Sample Question",
        "question": "A geneticist compiled the following information:\ni) 1/2 of children who have two left-handed parents are left-handed.\nii) 1/6 of children who have exactly one left-handed parent are left-handed.\niii) 1/16 of children who have no left-handed parents are left-handed.\niv) 1/50 of children have two left-handed parents.\nv) 1/5 of children have exactly one left-handed parent.\nCalculate the probability that a randomly selected left-handed child has no left-handed\nparents.",
        "options": [
            "0.09",
            "0.42",
            "0.53",
            "0.78",
            "0.91"
        ],
        "answerLetter": "C",
        "answer": "0.53",
        "explanation": "Official solution: C\n\nL: left-handed child\n0LP: no left-handed parents\n1LP: one left-handed parent\n2LP: two left-handed parents\nP L ( | 2 LP ) = 1/ 2\nP L ( |1 LP ) = 1/ 6\nP L ( | 0 LP ) = 1/16\nP (2 LP ) = 1/ 50\nP (1 LP ) = 1/ 5\nP (0 LP ) = 1 − 1/ 50 − 1/ 5 = 39 / 50\nP L ( | 0 LP P ) (0 LP )\nP (0 LP | L ) =\nP L ( | 0 LP P ) (0 LP ) + P L ( |1 LP P ) (1 LP ) + P L ( | 2 LP P ) (2 LP )\n(1/16)(39 / 50) 3 (39) 117\n= = = = 0.529\n(1/16)(39 / 50) + (1/ 6)(1/ 5) + (1/ 2)(1/ 50) 3(39) + 8(10) + (24)(1) 221"
    },
    {
        "id": 330,
        "topic": "SOA Exam P Sample Question",
        "question": "The sales for a product can be modeled by Z = 4 X – Y – 3. X and Y are independent\nrandom variables with Var ( X ) = 2 and Var ( Y ) = 3.\nCalculate Var ( Z ).",
        "options": [
            "5",
            "11",
            "29",
            "32",
            "35"
        ],
        "answerLetter": "E",
        "answer": "35",
        "explanation": "Official solution: E\n\n2 2\nVar Z = Var 4 X − Y − 3 = (4) Var X ( ) + ( − 1) Var Y ( ) = 16 2 + 3 = 35\n( ) ( ) ( )( )"
    },
    {
        "id": 331,
        "topic": "SOA Exam P Sample Question",
        "question": "According to a survey, x % of respondents have health insurance, y % have disability\nincome insurance, and z % have only health insurance.\nCalculate the probability that a randomly selected respondent has only disability income\ninsurance.\ny − x + z",
        "options": [
            "100 y − x − z",
            "100 y − x − 2 z",
            "100 y − x + 2 z",
            "200 y − z",
            "100"
        ],
        "answerLetter": "A",
        "answer": "100 y − x − z",
        "explanation": "Official solution: A\n\nLet H = health insurance; D =disability income insurance\nx y z\nThen P(H)= ; P(D) = ; P(H and not D)=\n100 100 100\nk\nLet P(H and D) =\n100\nSince, P(H) = P(H and not D) + P(H and D),\nx = z + k\n⇒ k = x − z\nSince P(D) = P(D and not H) + P(D and H),\nP(D and not H) = P(D) – P(D and H)\ny k y − ( x − z ) y − x + z\nP(D and not H) = − = =\n100 100 100 100"
    },
    {
        "id": 332,
        "topic": "SOA Exam P Sample Question",
        "question": "Three fair dice are thrown.\nCalculate the probability that the same number appears on exactly two of the three dice.",
        "options": [
            "0.278",
            "0.417",
            "0.444",
            "0.556",
            "0.583"
        ],
        "answerLetter": "B",
        "answer": "0.417",
        "explanation": "Official solution: B\n\nThe first die can be any number, so 6 possibilities. If the second die matches (1 possibility) then\nthe third die must not match (5 possibilities). Hence this outcome can occur 6(1)(5) = 30 ways. A\nsecond outcome is the second die does not match (5 possibilities), in which case the third die\nmust match one of the first two (2 possibilities), for an additional 60 ways. The desired\nprobability is then 90/216 = 0.417."
    },
    {
        "id": 333,
        "topic": "SOA Exam P Sample Question",
        "question": "A group of 17 people in a study on lung cancer consists of three heavy smokers, four\nlight smokers, and ten non-smokers. Six people from the group are chosen at random for\na new treatment.\nCalculate the probability that three of those chosen are non-smokers.",
        "options": [
            "0.176",
            "0.284",
            "0.300",
            "0.339",
            "0.588"
        ],
        "answerLetter": "D",
        "answer": "0.339",
        "explanation": "Official solution: D\n\nHypergeometric:\n10 7\n’ ’’ ’\n’ ’’ ’\n3 3\n75\n’ ’’ ’\n= = 0.33937\n17\n’ ’ 221\n’ ’\n6\n’ ’"
    },
    {
        "id": 334,
        "topic": "SOA Exam P Sample Question",
        "question": "A group of health insurance policyholders is composed of 60% men and 40% women. Of\nthe male policyholders, 20% are smokers. Given that a policyholder from the group\nsmokes, the probability that the policyholder is female is 20%.\nCalculate the percentage of female policyholders who are smokers.",
        "options": [
            "7.50%",
            "8.00%",
            "12.00%",
            "13.33%",
            "20.00%"
        ],
        "answerLetter": "A",
        "answer": "7.50%",
        "explanation": "Official solution: A\n\nP(M) = 0.6\nP(F) = 0.4\nP(S|M) = 0.20\nP(F|S) = 0.20\nP S ( | F P F ) ( )\nP F S =\n( | )\nP S ( | F P F ) ( ) + P S ( | M P M ) ( )\nP S ( | F )(0.4) 0.2(0.2)(0.6)\n0.2 = ⇒ P S ( | F ) = = 0.75\nP S ( | F )(0.4) + 0.2(0.6) 0.4 − 0.2(0.4)"
    },
    {
        "id": 335,
        "topic": "SOA Exam P Sample Question",
        "question": "An inspector examines a random sample of three glasses from each incoming box of ten\nglasses. The inspector accepts the box of ten glasses if at least two of the three examined\nare found to be in good condition.\nCalculate the probability that a box of ten glasses will be accepted by the inspector if the\nbox contains exactly two glasses that are not in good condition.",
        "options": [
            "0.10",
            "0.47",
            "0.70",
            "0.90",
            "0.93"
        ],
        "answerLetter": "E",
        "answer": "0.93",
        "explanation": "Official solution: E\n\nHypergeometric:\n8 2 8 2\n’ ’’ ’ ’ ’’ ’\n+\n’ ’’ ’ ’ ’’ ’\n2 1 3 0\n56 + 56\n’ ’’ ’ ’ ’’ ’\n= = 0.9333\n10 120\n’ ’\n’ ’\n3\n’ ’"
    },
    {
        "id": 336,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses under an insurance policy are uniformly distributed on the interval [0, 100]. A\ndeductible is set so that the expected claim payment of losses net of the deductible is 32.\nCalculate the deductible.",
        "options": [
            "9",
            "18",
            "20",
            "36",
            "52"
        ],
        "answerLetter": "C",
        "answer": "20",
        "explanation": "Official solution: C\n\nLet d be the deductible. Assume d < 100 because the expected claim needs to be positive.\nThe claim is 0 with probability d /100 (i.e. when the loss does not exceed d ), and uniformly\ndistributed over [0, 100 - d ] with probability (100 - d )/100 (i.e. when the loss exceeds d ).\nNote that the probability that a uniformly distributed random variable is in an interval is\nproportional to the length of the interval; the expected value is halfway between the minimum\nand maximum possible values of the uniformly distributed random variable.\n0 + (100 − d ) 100 − d d\n32 = E Claim [ ] = [ * ] + [0* ]\n2 100 100\nSolving for d gives d = 20 or d = 180; disregard d = 180 > 100."
    },
    {
        "id": 337,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy has a deductible of 3. Losses under the policy are exponentially\ndistributed with mean 10.\nCalculate the expected claim payment of losses net of the deductible.",
        "options": [
            "2.59",
            "5.19",
            "7.00",
            "7.41",
            "9.63"
        ],
        "answerLetter": "D",
        "answer": "7.41",
        "explanation": "Official solution: D\n\nLet Y represent the loss and X represent the claim. Note that X = 0 if Y ≤ 3; otherwise,\nX = Y - 3.\nE X [ ] = P Y ( ≤ 3) E X [ | Y ≤ 3) + P Y ( > 3) E X [ | Y > 3)\n= P Y ( ≤ 3)(0) + P Y ( > 3) E Y [ − 3 | Y > 3]\ny\n−\n∞\n10\ne\n= 0 + dy * E Y [ ] since exponentials are memoryless.\n∫\n10\n3\n3\n−\n10\n=10e ."
    },
    {
        "id": 338,
        "topic": "SOA Exam P Sample Question",
        "question": "The table below shows the joint probability for the number of root canals and the number\nof fillings a dental patient undergoes this year.\nNumber of Fillings\n0 1 2 3 4\nNumber of Root\n0 0.40 0.26 0.05 0.04 0.01\nCanals\n1 0.04 0.03 0.03 0.03 0.02\n2 0.01 0.01 0.02 0.03 0.02\nCalculate the expected number of root canals the patient undergoes, given that the patient\nundergoes at most one filling this year.",
        "options": [
            "0.11",
            "0.15",
            "0.17",
            "0.33",
            "0.91"
        ],
        "answerLetter": "B",
        "answer": "0.15",
        "explanation": "Official solution: B\n\nR = # of root canals, F = # of fillings, p ( r , f ) = P( R = r , F = f )\nP( R = r | F is at most 1)\n= P( R = r | F = 0 or 1)\n= P( R = r AND F = 0 or 1) / P( F = 0 or 1)\n= [ p ( r , 0) + p ( r , 1)] /[ p (0, 0) + p (0, 1) + p (1, 0) + p (1, 1) + p (2, 0) + p (2, 1)]\nP( R = 0 | F = 0 or 1) = (0.40 + 0.26) / (0.40 + 0.26 + 0.04 + 0.03 + 0.01 + 0.01) = 22/25\nP( R = 1 | F = 0 or 1) = (0.04 + 0.03) / (0.40 + 0.26 + 0.04 + 0.03 + 0.01 + 0.01) = 7/75\nP( R = 2 | F = 0 or 1) = (0.01 + 0.01) / (0.40 + 0.26 + 0.04 + 0.03 + 0.01 + 0.01) = 2/75\n7 2 11\n’ ’ ’ ’\nE R [ | F ≤ 1] = 1 + 2 = = 0.14667 .\n’ ’ ’ ’\n75 75 75\n’ ’ ’ ’"
    },
    {
        "id": 339,
        "topic": "SOA Exam P Sample Question",
        "question": "Let N denote the number of items returned out of the next 500 items sold at a department\nstore. For each item sold, the probability that the item is returned is 0.12. Returns are\nmutually independent.\nCalculate the standard deviation of N .",
        "options": [
            "7.27",
            "7.75",
            "12.75",
            "20.98",
            "52.80"
        ],
        "answerLetter": "A",
        "answer": "7.27",
        "explanation": "Official solution: A\n\nN is Binomial, n =500, p =0.12, q =0.88\nStandard deviation = 500(0.12)(0.88) = 7.26636"
    },
    {
        "id": 340,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company has a large number of claims pending. The amount, X , of an\nindividual pending claim is assumed to follow a distribution with density function\n2\n’\nfor x > 1\n,\n’ 3\n’\nx\nf ( x ) =\n’\n’\n’ 0 , otherwise.\n’\nCalculate the probability that the amount of a randomly selected pending claim is less\nthan 4, given that it is at least 3.",
        "options": [
            "0.04",
            "0.05",
            "0.06",
            "0.11",
            "0.44"
        ],
        "answerLetter": "E",
        "answer": "0.44",
        "explanation": "Official solution: E\n\nx\nx\n− 3 − 2 − 2\nF x ( ) = 2 t dt = − t = 1 − x\n∫\n1\n1\nF (4) = 15 /16\nF (3) = 8 / 9\nPr(3 ≤ X < 4) F (4) − F (3) 15 /16 − 8 / 9 135 − 128 7\nPr( X < 4 | X ≥ 3) = = = = = = 0.4375\nPr( X ≥ 3) 1 − F (3) 1 − 8 / 9 144 − 128 16"
    },
    {
        "id": 341,
        "topic": "SOA Exam P Sample Question",
        "question": "The time to death of a 70-year-old person is modeled by a random variable X with\nprobability density function\nk\n’\n, for 0 < x < 30\n’\n2\nf ( x ) = ( x + 5 )\n’\n’\n0 , otherwise,\n’\nwhere k is a constant.\nCalculate the probability the man will live five years and then die during the following\nfive years.",
        "options": [
            "0.004",
            "0.194",
            "0.333",
            "0.583",
            "0.778"
        ],
        "answerLetter": "B",
        "answer": "0.194",
        "explanation": "Official solution: B\n\n30\n2\n1 = k x ( + 5) dx\n∫\n0\n− 1 30\n1 = − k x ( + 5)\n0\n1 1\n’ ’\n1 = − k −\n’ ’\n35 5\n’ ’\n1 = k (0.171429)\nk = 5.8333\n10\n5.8333\ndx = 0.1944\n∫\n2\n5\n( x + 5)"
    },
    {
        "id": 342,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X be a Poisson random variable with cumulative distribution function F such that\nF ( 2 )\n= 2 . 6 .\nF ( 1 )\nCalculate E ( X ).",
        "options": [
            "3.2",
            "4.0",
            "4.2",
            "5.0",
            "5.2"
        ],
        "answerLetter": "B",
        "answer": "4.0",
        "explanation": "Official solution: B\n\n− λ 0 − λ 1\ne λ e λ\nF (1) = +\n0! 1!\n− λ 0 − λ 1 − λ 2\ne λ e λ e λ\nF (2) = + +\n0! 1! 2!\n2\nλ\n1 + λ +\nF (2) 13 26\n2\n= = =\nF (1) 1 + λ 5 10\n2\n10 + 10 λ + 5 λ = 26 + 26 λ\n2\n5 λ − 16 λ − 16 = 0\n(5 λ + 4)( λ − 4) = 0\nλ = 4 = E X ( ).\nIgnore negative solution."
    },
    {
        "id": 343,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X represent the number of defective parts in a shipment of five parts.\n’ ’\n1 x − 1\nP X [ ≥ x ] = 1 − , x = 1, 2,3, 4,5\n’ ’\n’ ’\n2 5\n’ ’\nCalculate E( X ).",
        "options": [
            "0.9",
            "1.1",
            "2.1",
            "2.3",
            "3.9"
        ],
        "answerLetter": "B",
        "answer": "1.1",
        "explanation": "Official solution: B\n\nP[ X ≥ 0] = 1\nP[ X ≥ 1] = 0.5\nP[ X ≥ 2] = 0.27639\nP[ X ≥ 3] = 0.18377\nP[ X ≥ 4] = 0.11270\nP[ X ≥ 5] = 0.05279\n0.5, x = 0\n’\n’\n0.22361, x = 1\n’\n’ 0.09262, x = 2\np x ( ) = ’\n0.07107, x = 3\n’\n’\n0.05991, x = 4\n’\n0.05279, x = 5\n’\n5\nE X ( ) = x p x ( ) = 1.12565\n∑ i i\ni = 0"
    },
    {
        "id": 344,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X be a random variable with probability density function\n2 x , for 0 < x < 1\n’\nf ( x ) =\n’\n0, otherwise.\n’\nA sample of size 3 is randomly selected from the distribution. Let Y be a random variable\nrepresenting the median value from the sample.\nCalculate the variance of Y .",
        "options": [
            "0.019",
            "0.030",
            "0.056",
            "0.500",
            "0.714"
        ],
        "answerLetter": "B",
        "answer": "0.030",
        "explanation": "Official solution: B\n\nLet g y ( ) represent the density function for the median.\n2 2\ng y ( ) = 6( y )(1 − y )(2 ) y\n3 5\n= 12( y − y )\n1\n1 1 24\nE Y ( ) = yg y dy ( ) = 12( − ) =\n5 7 35\n∫\n0\n1\n2 2\n1 1 1\nE Y ( ) = y g y dy ( ) = 12( − ) =\n6 8 2\n∫\n0\n2\n1 24\nVar Y ( ) = ( ) − ( ) = 0.030\n2 35"
    },
    {
        "id": 345,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary wishes to predict the size W of a claim using a predictor T . Suppose that W\nand T are independent and normally distributed with the same mean and with variances 4\nand 12, respectively.\nCalculate P W [| − T | < 1].",
        "options": [
            "0.20",
            "0.23",
            "0.38",
            "0.60",
            "0.68"
        ],
        "answerLetter": "A",
        "answer": "0.20",
        "explanation": "Official solution: A\n\nW – T has a normal distribution with mean 0 and variance 4 + 12 = 16.\nP W − T < 1 = P ( 1 − < W − T < 1)\n( )\n= P ( 1 − < N (0,16) < 1) = P ( .25 − < N (0,1) < .25) = 0.197"
    },
    {
        "id": 346,
        "topic": "SOA Exam P Sample Question",
        "question": "A, B, and C are three events defined on the same sample space. A and C are mutually\nexclusive and B and C are mutually exclusive. The probability that at least one of the\nthree events occurs is 0.90. The probability that exactly two of the three events occur is\n0.06. The probability that exactly one of the events A or B occurs is 0.38.\nCalculate P[C].",
        "options": [
            "0.32",
            "0.46",
            "0.52",
            "0.56",
            "0.58"
        ],
        "answerLetter": "B",
        "answer": "0.46",
        "explanation": "Official solution: B\n\nThe only way exactly two of the events can occur is if A and B both occur. Hence\nP A [ ∩ B ] = 0.06.\nBecause the intersections of A and C and of B and C are empty,\n0.90 = P A [ ∪ B ∪ C ] = P A [ ] + P B [ ] + P C [ ] − P A [ ∩ B ].\nThe probability of exactly one of A and B is P A [ ] + P B [ ] − 2 P A [ ∩ B ] = 0.38.\nTherefore, P A [ ] + P B [ ] − P A [ ∩ B ] = 0.38 + 0.06 = 0.44.\nThen, P[ C ] = 0.90 – 0.44 = 0.46."
    },
    {
        "id": 347,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X = 1 if termites are present in a building and X = 0 if they are not.\nLet Y = 1 if a test indicates the presence of termites in that building and Y = 0 if it does\nnot.\nThe joint probabilities of X and Y are:\nP[ X =0, Y= 0] = 0.90\nP[ X =1, Y= 0] = 0.01\nP[ X =0, Y= 1] = 0.05\nP[ X =1, Y= 1] = 0.04\nCalculate the coefficient of variation for Y .",
        "options": [
            "0.31",
            "0.91",
            "0.95",
            "3.18",
            "4.36"
        ],
        "answerLetter": "D",
        "answer": "3.18",
        "explanation": "Official solution: D\n\n0.91, y = 0\n’\np y ( ) = ’\n0.09, y = 1\n’\nE Y ( ) = (0)(0.91) + (1)(0.09) = 0.09\n2 2 2\nE Y ( ) = (0 )(0.91) + (1 )(0.09) = 0.09\n2\nV Y ( ) = 0.09 − 0.09 = 0.0819\nSD Y ( ) = 0.0819 = 0.28618\n0.28618\nCV Y ( ) = = 3.179797\n.09"
    },
    {
        "id": 348,
        "topic": "SOA Exam P Sample Question",
        "question": "A policyholder incurs one loss under each of three policies. Each policy has a deductible\nof 30. Losses under each policy are uniformly distributed on the interval [0, 100].\nThe three losses are mutually independent.\nCalculate the probability that the policyholder will receive benefits from any of the three\npolicies.",
        "options": [
            "0.027",
            "0.343",
            "0.657",
            "0.700",
            "0.973"
        ],
        "answerLetter": "E",
        "answer": "0.973",
        "explanation": "Official solution: E\n\nThe policyholder will receive benefits if and only if at least 1 of the 3 losses exceeds 30.\nThe probability that a given loss exceeds 30 is (100 - 30)/100 = 0.7.\n3\nThe probability that no losses exceed 30 is (1 − 0.7) = 0.027.\nThe probability that at least one loss exceeds 30 is 1 – 0.027 = 0.973."
    },
    {
        "id": 349,
        "topic": "SOA Exam P Sample Question",
        "question": "Each student in a group will take an exam in January and another in February. While\n70% of the students will pass the January exam, only 50% will pass the February exam.\nStudents who pass the January exam are twice as likely to pass the February exam as\nthose who fail the January exam.\nCalculate the probability that a randomly selected student will pass both exams.",
        "options": [
            "0.35",
            "0.41",
            "0.45",
            "0.50",
            "0.59"
        ],
        "answerLetter": "B",
        "answer": "0.41",
        "explanation": "Official solution: B\n\nP J [ ] = 0.70\nP F [ ] = 0.50\nc\nP F [ | J ] = 2 P F [ | J ]\nc c\nP F [ ] = 0.50 = P F [ | J P J ] [ ] + P F [ | J ] [ P J ]\n0.50 = P F [ | J ]0.70 + 0.50 P F [ | J ]0.30\nP F [ | J ] = 0.50 / (0.70 + 0.25) = 0.58824\nP F [ ∩ J ] = P F [ | J P J ] [ ]\nP F [ ∩ J ] = 0.58824(0.70) = 0.41176."
    },
    {
        "id": 350,
        "topic": "SOA Exam P Sample Question",
        "question": "A homeowner with theft insurance experiences exactly one theft this year. Loss due to\ntheft is exponentially distributed with mean 2000. The insurer covers the loss due to theft\nup to a maximum of 3000.\nCalculate the probability that the insurer will pay the homeowner exactly 3000 for the\nloss due to theft.",
        "options": [
            "0.000",
            "0.223",
            "0.487",
            "0.513",
            "0.777"
        ],
        "answerLetter": "B",
        "answer": "0.223",
        "explanation": "Official solution: B\n\n3000\n−\n2000\nP Y [ ≥ 3000] = e = 0.223."
    },
    {
        "id": 351,
        "topic": "SOA Exam P Sample Question",
        "question": "In a group of four employees, two are high-risk and two are low-risk. This year, each\nhigh-risk employee has probability 0.6 of having no accidents; each low-risk employee\nhas probability 0.9 of having no accidents.\nThe occurrences of accidents among employees are independent events.\nCalculate the probability that at most one employee has one or more accidents this year.",
        "options": [
            "0.4536",
            "0.5184",
            "0.6804",
            "0.7084",
            "0.7452"
        ],
        "answerLetter": "E",
        "answer": "0.7452",
        "explanation": "Official solution: E\n\n2 2\nP(0 employees have accidents) = (0.6) (0.9) = 0.2916\nP(1 employee has accidents)\n= P(1 high-risk employee has accidents and 0 low-risk employees have accidents\nOR 0 high-risk employees have accidents and1 low-risk employee has accidents)\n= P(1 high-risk employee has accidents)P(0 low-risk employees have accidents)\n+ P(0 high-risk employees have accidents)P(1 low-risk employee has accidents)\n[combining the addition rule for a union of mutually exclusive events and the multiplication rule\nfor independent events]\n2 2\n= (2)(0.4)(0.6)(0.9) + (0.6) (2)(0.1)(0.9) = 0.4536\nP(at most 1 employee has accidents) = 0.2916 + 0.4536 = 0.7452."
    },
    {
        "id": 352,
        "topic": "SOA Exam P Sample Question",
        "question": "A homeowner purchases flood insurance that pays a benefit based on the amount of rain\nthat falls. No benefit is paid for rainfall amounts less than twelve inches. For every full\ntwo inches greater than twelve, the insurer pays the homeowner 5000, with a maximum\npayment of 18,000.\nThe following table displays probabilities for the rainfall amounts.\nInches of Rain ( x ) Probability of being in interval\n0 ≤ x < 2 0 . 04\n2 ≤ x < 4 0 . 06\n4 ≤ x < 6 0 . 07\n6 ≤ x < 8 0 . 09\n8 ≤ x < 10 0 . 12\n10 ≤ x < 12 0 . 14\n12 ≤ x < 14 0 . 18\n14 ≤ x < 16 0 . 11\n16 ≤ x < 18 0 . 08\n18 ≤ x < 20 0 . 07\n20 ≤ x 0 . 04\nCalculate the standard deviation of the benefit paid under the policy.",
        "options": [
            "2201",
            "3120",
            "3200",
            "5452",
            "5680"
        ],
        "answerLetter": "D",
        "answer": "5452",
        "explanation": "Official solution: D\n\nAmt Paid Prob\n0 0.70\n5000 0.11\n10000 0.08\n15000 0.07\n18000 0.04\nE( X ) = 3120\n2\nE( X ) =39,460,000\n2\nV( X ) =39,460,000 – 3,120 = 29,725,600\nSD( X ) = 5452"
    },
    {
        "id": 353,
        "topic": "SOA Exam P Sample Question",
        "question": "A community college provides life insurance to its employees. The amount of insurance,\nX , of a randomly selected employee is modeled by a distribution with density function\n8\n’\n, for x > 2\n’\n3\n( )\nf x =\n’\nx\n’\n0 , otherwise,\n’\nwhere X is measured in tens of thousands.\nCalculate the probability that an employee is insured for no more than 30,000, given that\nthe employee is insured for at least 25,000.",
        "options": [
            "0.20",
            "0.31",
            "0.44",
            "0.64",
            "0.69"
        ],
        "answerLetter": "B",
        "answer": "0.31",
        "explanation": "Official solution: B\n\nx\nx\n− 3 − 2 − 2\nF x ( ) = 8 t dt = − 4 t = 1 − 4 x .\n∫\n2 2\nP 2.5 ≤ x ≤ 3 | x ≥ 2.5\n( )\nF (3) − F (2.5) 1 − 4 / 9 − 1 + 4 / 6.25\n= = = 0.3056.\n1 − F (2.5) 1 − 1 + 4 / 6.25"
    },
    {
        "id": 354,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company insures male and female drivers. The probability that a randomly\nselected insured driver is male and has an accident is 0.30. The probability of an insured\nmale driver having an accident is 0.50.\nCalculate the probability that a randomly selected insured driver is female.",
        "options": [
            "0.15",
            "0.40",
            "0.50",
            "0.60",
            "0.85"
        ],
        "answerLetter": "B",
        "answer": "0.40",
        "explanation": "Official solution: B\n\nM = Male\nF = Female\nA = Accident\nP M [ ∩ A ] = 0.30\nP M [ ∩ A ]\nP A M [ | ] = 0.50 =\nP M [ ]\n0.30\nP M [ ] = = 0.60\n0.50\nP F [ ] = 1 − P M [ ] = 1 − 0.60 = 0.40."
    },
    {
        "id": 355,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of calls received by a certain emergency unit in a day is modeled by a\nPoisson distribution with a standard deviation of 2.\nCalculate the probability that on a particular day the unit receives at least two calls.",
        "options": [
            "0.092",
            "0.147",
            "0.238",
            "0.762",
            "0.908"
        ],
        "answerLetter": "E",
        "answer": "0.908",
        "explanation": "Official solution: E\n\n− 4 x\ne 4\np x ( ) = , x = 0,1, 2,...;1 − p (0) + p (1) = 1 − 0.091578 = 0.908\n[ ]\nx !\n356. Deleted"
    },
    {
        "id": 357,
        "topic": "SOA Exam P Sample Question",
        "question": "A fair die is rolled repeatedly. Let X be the number of rolls needed to obtain a 5 and Y\nthe number of rolls needed to obtain a 6.\nCalculate E ( X Y = 1 ) .",
        "options": [
            "5.0",
            "5.5",
            "6.0",
            "6.5",
            "7.0"
        ],
        "answerLetter": "E",
        "answer": "7.0",
        "explanation": "Official solution: E\n\n1\nX follows a geometric distribution with p =\n6\n1\nY = 1 implies the first roll is a 6. Counting from the second roll E X = = 6. So\n[ ]\np\nE [ X Y = 1 ] = 1 + 6 = 7 ."
    },
    {
        "id": 358,
        "topic": "SOA Exam P Sample Question",
        "question": "The annual number of accidents for a driver is modeled by a Poisson distribution with\nmean 2.5.\nCalculate the mode of the annual number of accidents.",
        "options": [
            "1.0",
            "1.5",
            "2.0",
            "2.5",
            "3.0"
        ],
        "answerLetter": "C",
        "answer": "2.0",
        "explanation": "Official solution: C\n\n− 2.5 x\ne 2.5\nP[ X = x ] =\nx !\nP[0] = 0.082, P[1] = 0.205, P[2] = 0.257, P[3] = 0.214.\nProbabilities for values greater than 3 are less than the probability of 3. The largest probability\noccurs at the value of 2."
    },
    {
        "id": 359,
        "topic": "SOA Exam P Sample Question",
        "question": "Every member of a certain committee is either an X or aY.\nThirty percent of the Xs on the committee are male. Forty percent of the Ys on the\ncommittee are female. Sixty percent of the committee members are Ys. A randomly\nselected member of the committee is male.\nCalculate the probability that he is a Y.",
        "options": [
            "0.36",
            "0.48",
            "0.60",
            "0.67",
            "0.75"
        ],
        "answerLetter": "E",
        "answer": "0.75",
        "explanation": "Official solution: E\n\nP[ M | X ] = 0.3 ⇒ P[ F | X ] = 0.7\nP[ F Y | ] = 0.4 ⇒ P[ M | Y ] = 0.6\nP[ Y ] = 0.6 ⇒ P[ D ] = 0.4\nP[ M | Y ]P[ Y ] (0.6)(0.6)\nP[ Y | M ] = = = 0.75\nP[ M | Y ]P[ Y ] + P[ M | X ]P[ X ] (0.6)(0.6) + (0.3)(0.4)"
    },
    {
        "id": 360,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company surcharges a driver, based on the year of the driver’s last accident,\nusing the following table with the current year denoted by t :\nYear of Last\nt–1 t–2 t–3 t–4\nAccident\nSurcharge 20% 15% 10% 5%\nThe probability that a driver has at least one accident in any given year is 0.10,\nindependent of the number of accidents in all other years.\nCalculate the expected surcharge in year t for a driver who has been driving since the\nbeginning of year t – 4.",
        "options": [
            "4.5%",
            "5.0%",
            "8.6%",
            "10.0%",
            "19.4%"
        ],
        "answerLetter": "A",
        "answer": "4.5%",
        "explanation": "Official solution: A\n\nThe probability of a 20% surcharge is 0.1, the probability of a 15% surcharge is 0.9(0.1), the\nprobability of a 10% surcharge is 0.9(0.9)(0.1) and the probability of a 5% surcharge is\n0.9(0.9)(0.9)(0.1).\n2 3\nExpected surcharge = 0.20(0.1) + 0.15(0.1)(0.9) + 0.10(0.1)(0.9) + 0.05(0.1)(0.9) = 0.045245"
    },
    {
        "id": 361,
        "topic": "SOA Exam P Sample Question",
        "question": "Auto accidents for an individual driver can result in annual losses of 0, 1000, 5000,\n10,000, or 15,000 with probabilities 0.75, 0.12, 0.08, 0.04, and 0.01, respectively. An\nauto insurer offers a policy that insures individual drivers against such losses, subject to\nan annual deductible of 500.\nThe insurer charges an annual premium that exceeds its expected annual payment by 75\nto provide for insurer expenses and profit.\nCalculate the annual premium that the insurer charges.",
        "options": [
            "870",
            "945",
            "1020",
            "1070",
            "1145"
        ],
        "answerLetter": "C",
        "answer": "1020",
        "explanation": "Official solution: C\n\nLet Y be the expected payout. Then\nE Y = 0(0.75) + 1000 − 500 (0.12) + 5000 − 500 (0.08)\n[ ] ( ) ( )\n+ 10000 − 500 (0.04) + 15000 − 500 (0.01) = 945\n( ) ( )\nThe premium sis 945 + 75 = 1020 ."
    },
    {
        "id": 362,
        "topic": "SOA Exam P Sample Question",
        "question": "At a certain airport, 1/6 of all scheduled flights are delayed. Assume that flight delays are\nmutually independent events.\nUse the normal approximation (with continuity correction) to calculate the probability\nthat at least 40 of the next 180 flights are delayed.",
        "options": [
            "0.011",
            "0.014",
            "0.018",
            "0.023",
            "0.029"
        ],
        "answerLetter": "E",
        "answer": "0.029",
        "explanation": "Official solution: E\n\n1\n’ ’\nμ = 180 = 30\n’ ’\n6\n’ ’\n1 5\n’ ’’ ’\n180 5\nσ = =\n’ ’’ ’\n6 6\n’ ’’ ’\n39.5 − 30\nP X ( ≥ 40) → P Z ( > ) = P Z ( > 1.90) = 0.0287.\n5"
    },
    {
        "id": 363,
        "topic": "SOA Exam P Sample Question",
        "question": "In a group of 30,000 health insurance policyholders, 12,000 are in Class A and 18,000 are\nin Class B.\nThis year, each policyholder in Class A has probability 0.98 of not undergoing\nhospitalization; each policyholder in Class B has probability 0.995 of not undergoing\nhospitalization.\nA randomly chosen policyholder in the group undergoes hospitalization this year.\nCalculate the probability that this policyholder is in Class A.",
        "options": [
            "0.011",
            "0.020",
            "0.396",
            "0.400",
            "0.727"
        ],
        "answerLetter": "E",
        "answer": "0.727",
        "explanation": "Official solution: E\n\nLet H be the event that the policyholder undergoes hospitalization this year.\nLet A be the event that the policyholder is in class A.\nP(A) = 12,000/30,000 = 0.4; P(B) = 18,000/30,000 = 0.6\nP(H|A) = 1 - 0.98 = 0.02; P(H|B) = 1 - 0.995 = 0.005.\nP(A|H) = P(A)P(H|A) / [P(A)P(H|A) + P(B)P(H|B)] by Bayes' Theorem\n= (0.4)(0.02) / [(0.4)(0.02) + (0.6)(0.005)]\n= 0.008 / 0.011 = 0.7272"
    },
    {
        "id": 364,
        "topic": "SOA Exam P Sample Question",
        "question": "A two-part machine functions when at least one of its parts is working. Both parts are\nworking today. The future lifetime of each part is exponentially distributed with mean\nfive years. The lifetimes of the parts are independent.\nThe machine functions one year from now.\nCalculate the probability that both parts will be working at that time.",
        "options": [
            "0.003",
            "0.409",
            "0.670",
            "0.693",
            "0.819"
        ],
        "answerLetter": "D",
        "answer": "0.693",
        "explanation": "Official solution: D\n\nLet X be the random variable that a part works. Then:\n− 0.2 x\nP X ( > x ) = e\n− 0.2 x\nP X ( < x ) = 1 − e\nOne year from now,\nP[both parts will work | at least 1 part will work]\nP both parts will work\n[ ]\n=\nP at least 1 part will work\n[ ]\n− 0.2 − 0.2\ne e\n1 − P (neither part works)\n− 0.2 − 0.2\ne e\n=\n− 0.2 − 0.2\n1 − (1 − e )(1 − e )\n0.67032\n= = 0.69310\n0.96714"
    },
    {
        "id": 365,
        "topic": "SOA Exam P Sample Question",
        "question": "This year, a dental insurance policyholder has probability 0.70 of having no fillings,\nprobability 0.90 of having no root canals, and probability 0.35 of having at least one\nfilling or root canal.\nCalculate the probability that a policyholder has no root canals, given that the\npolicyholder has no fillings.",
        "options": [
            "0.50",
            "0.65",
            "0.72",
            "0.78",
            "0.93"
        ],
        "answerLetter": "E",
        "answer": "0.93",
        "explanation": "Official solution: E\n\nP[no root canal | no fillings] = P[no root canals and no fillings] / P[no fillings]\n= {1 – P[at least 1 root canal or filling]} / P[no fillings]\n= (1 – 0.35)/0.7 = 13/14 = 0.92857."
    },
    {
        "id": 366,
        "topic": "SOA Exam P Sample Question",
        "question": "A mover transports ten identical boxes with fragile contents. The contents of seven of\nthese boxes all stay intact after the move.\nThe mover randomly chooses five different boxes from the ten to inspect.\nCalculate the probability that the contents of exactly three of these five boxes are all\nintact.",
        "options": [
            "0.042",
            "0.083",
            "0.139",
            "0.417",
            "0.700"
        ],
        "answerLetter": "D",
        "answer": "0.417",
        "explanation": "Official solution: D\n\nThis is a hypergeometric probability:\nC C 35(3)\n7 3 3 2\n= = 0.41667\nC 252\n10 5"
    },
    {
        "id": 367,
        "topic": "SOA Exam P Sample Question",
        "question": "A study is to be conducted on health risk factors of insurance applicants. The study\nneeds exactly 268 people with heart disease, 268 with diabetes and 268 with high\ncholesterol. The study also needs exactly 68 people with only heart disease, 68 with only\ndiabetes and 68 with only high cholesterol. The study needs exactly 84 people with all\nthree risk factors and 155 people with no risk factors.\nCalculate the total number of people the study needs.",
        "options": [
            "443",
            "462",
            "617",
            "636",
            "791"
        ],
        "answerLetter": "C",
        "answer": "617",
        "explanation": "Official solution: C\n\nHeart\n68\nX\n84\nDiabete\nY\ns\n68\nZ\nCholesterol\n68\n68 + 84 + X + Z = 268\n68 + 84 + X + Y = 268\n68 + 84 + Y + Z = 268\nX, Y and Z must all be equal, X = Y = Z = 58.\nTotal = 68 + 68 + 68 + 84 + 58 + 58 + 58 + 155 = 617"
    },
    {
        "id": 368,
        "topic": "SOA Exam P Sample Question",
        "question": "In a population under study it is known that 40% are smokers or have below normal lung\nfunction. Among the 25% of the population that smoke 70% have below normal lung\nfunction.\nCalculate the percentage of the population that have below normal lung function.",
        "options": [
            "15%",
            "20%",
            "33%",
            "55%",
            "60%"
        ],
        "answerLetter": "C",
        "answer": "33%",
        "explanation": "Official solution: C\n\nA: The event that a person is a smoker\nB: The event that a person has below normal lung function.\nP A ( ∪ B ) = P A ( ) + P B ( ) − P A ( ∩ B )\nP A ( ∪ B ) = P A ( ) + P B ( ) − P B ( | A P A ) ( )\n0.40 = 0.25 + P B ( ) − (0.70)(0.25)\nP B ( ) = 0.325"
    },
    {
        "id": 369,
        "topic": "SOA Exam P Sample Question",
        "question": "The death of a husband and the death of his wife are independent events. The probability\nthat the husband dies during the next two years is 0.10. The probability that both the\nhusband and the wife survive the next two years is 0.70.\nCalculate the probability that the wife dies within the next two years.",
        "options": [
            "0.100",
            "0.118",
            "0.143",
            "0.200",
            "0.222"
        ],
        "answerLetter": "E",
        "answer": "0.222",
        "explanation": "Official solution: E\n\nP H ∩ W = P H P W where H is the husband’s survival and W is the wife’s survival.\n[ ] [ ] [ ]\n0.70\nP H = 1 − 0.10 = 0.90 , P H ∩ W = 0.70 . Therefore, P W = = 77.8% and the\n[ ] [ ] [ ]\n0.90\nprobability of the wife dying is .\n1 − P W = 22.2%\n[ ]"
    },
    {
        "id": 370,
        "topic": "SOA Exam P Sample Question",
        "question": "Small businesses in a particular city are categorized as retail, service, transportation, or\nother.\nIn a study of the yearly bankruptcies of small businesses in this city, the following\ninformation from the past year was observed:\ni) 60% of the small businesses were retail, and of those, 12% went bankrupt.\nii) 25% of the small businesses were service, and of those, 8% went bankrupt.\niii) 10% of the small businesses were transportation, and of those, 6% went bankrupt.\niv) 5% of the small businesses were other, and none of those went bankrupt.\nAn auditor randomly selected a small business that went bankrupt last year.\nCalculate the probability that it was a service business.",
        "options": [
            "0.020",
            "0.080",
            "0.204",
            "0.250",
            "0.308"
        ],
        "answerLetter": "C",
        "answer": "0.204",
        "explanation": "Official solution: C\n\nP B S P S [ | ] [ ]\nP S [ | B ] =\nP B S P S [ | ] [ ] + P B [ | R P R ] [ ] + P B T P T [ | ] [ ] + P B O P O [ | ] [ ]\n0.08(0.25)\n= = 0.20408\n0.08(0.25) + 0.12(0.60) + 0.06(0.10) + 0(0.05)"
    },
    {
        "id": 371,
        "topic": "SOA Exam P Sample Question",
        "question": "A random variable X is normally distributed with mean 5 and standard deviation 2.\n2\nCalculate the probability that 8 X − X < 1.",
        "options": [
            "0.007",
            "0.076",
            "0.082",
            "0.917",
            "0.925"
        ],
        "answerLetter": "C",
        "answer": "0.082",
        "explanation": "Official solution: C\n\nUsing the quadratic equation and being careful with inequalities,\n2\n’\nP 8 X − X < 1 = P X < 0.127016654 + P X > 7.872983346 . For the standard normal\n] [ ] [ ]\n’\nX − 5\nvariable Z = , this is:\n2\nP Z < − 2.436491673 + P Z > 1.436491673\n[ ] [ ]\n= 0.0073 + 0.0749 = 0.0822."
    },
    {
        "id": 372,
        "topic": "SOA Exam P Sample Question",
        "question": "For which of the exponential, normal, and continuous uniform distributions does\ndoubling the mean also double the median?",
        "options": [
            "all three",
            "all but the normal",
            "all but the uniform",
            "all but the exponential",
            "fewer than two"
        ],
        "answerLetter": "A",
        "answer": "all three",
        "explanation": "Official solution: A\n\nSince the normal and uniform are symmetric the mean and median are the same and doubling\none doubles the other. For the exponential distribution the median is ln2 times the mean. Thus\ndoubling the mean doubles the median."
    },
    {
        "id": 373,
        "topic": "SOA Exam P Sample Question",
        "question": "In a particular contract, there are two options available for each of two sections A and B.\nIf X is the number of options selected for section A and Y is the number of options\nselected for section B, then the joint probability function of X and Y is\nx + y + 2\n’\n, for x = 0, 1, 2 and y = 0, 1, 2\n’\np x y ( , ) = ’\n36\n’\n0, otherwise.\n’\nCalculate the variance of X .",
        "options": [
            "0.56",
            "0.64",
            "0.83",
            "2.00",
            "3.36"
        ],
        "answerLetter": "B",
        "answer": "0.64",
        "explanation": "Official solution: B\n\nThe marginal distribution of X is: P ( X = 0 ) = 3 / 12 ; ;\nP ( X = 1 ) = 4 / 12\n3 4 5\n2 2 2 2\n. Thus and\nP ( X = 2 ) = 5 / 12 E ( X ) = 0 × + 1 × + 2 × = 2\n12 12 12\n3 4 5 14 196 23\nso the variance is\nE ( X ) = 0 × + 1 × + 2 × = Var X ( ) = 2 − = = 0.639.\n12 12 12 12 144 36"
    },
    {
        "id": 374,
        "topic": "SOA Exam P Sample Question",
        "question": "A random variable X has density function\n5\n’\n2 4\n’ ’\n3( x − 2) − ( x − 2) + 4 , for 0 < x < 3\n’\n’ ’\nf ( ) x = ’\n72\n’\n0, otherwise.\n’\nCalculate the mode of the distribution.",
        "options": [
            "0.000",
            "0.775",
            "2.000",
            "3.000",
            "The correct answer is not given by (A), (B), (C), or (D)."
        ],
        "answerLetter": "B",
        "answer": "0.775",
        "explanation": "Official solution: B\n\n5\n3\nTo determine the mode, set ′ [ ] . This solves for\nf ( x ) = 6 ( x − 2 ) − 4 ( x − 2 ) = 0\n72\n3 2\n6 ( x − 2 ) − 4 ( x − 2 ) = 0 6 − 4 ( x − 2 ) = 0\nso either x − 2 = 0 and x = 2 or . In this case,\n6\n2\ngiving x = 2 ± 1.2247 , so x = 0.7753 or x = 3.2247 which is outside the domain.\n( x − 2 ) =\n4\nCheck these two values and the endpoints:\nf (0) = 0\nf (3) = 0.4167\nf (2) = 0.2778\nf (0.7753) = 0.4340\nThe mode occurs at 0.775."
    },
    {
        "id": 375,
        "topic": "SOA Exam P Sample Question",
        "question": "The length of time, T , in months, taken by relatives to file for a death benefit has density\nfunction\n4\n’\n4 β\n’ , for t > β , 0 < β < 3\n5\nf t ( ) = ’\nt\n’\n0, otherwise.\n’\nCalculate the probability that the relatives of a policyholder will not file for the death\nbenefit in the next four months, given that the policyholder died three months ago and the\nrelatives have not yet filed for the death benefit.\n81",
        "options": [
            "2401 256",
            "2401 81",
            "256 4 2401 ’ 81 − β ’",
            "’ ’ 4 81 2401 − β ’ ’ 4 ’ ’ 2401 256 − β",
            "’ ’ 4 256 2401 − β ’ ’"
        ],
        "answerLetter": "A",
        "answer": "2401 256",
        "explanation": "Official solution: A\n\n4\nt\nβ\n’ ’\n4 − 5\nF t ( ) = 4 β r dr = − 1 , for 0 < β ≤ t\n’ ’\n∫\nt\n’ ’\nβ\n4\nβ\n’ ’\n’ ’\nP T > 7 1 − F 7\n[ ] ( ) 81\n7\n’ ’\nP T > 4 + 3 | T > 3 = = = =\n[ ]\n4\nP T > 3 1 − F 3 2401\n[ ] ( )\nβ\n’ ’\n’ ’\n3\n’ ’"
    },
    {
        "id": 376,
        "topic": "SOA Exam P Sample Question",
        "question": "A small manufacturing company, consisting of five senior employees and ten junior\nemployees, randomly selects four employees to attend a professional conference.\nCalculate the probability that at least three senior employees are chosen.",
        "options": [
            "0.060",
            "0.073",
            "0.077",
            "0.099",
            "0.111"
        ],
        "answerLetter": "C",
        "answer": "0.077",
        "explanation": "Official solution: C\n\nThe number of senior employees X included in the sample is distributed per the hypergeometric\ndistribution. The required probability is P [ X = 3 or 4], which is:\n5 10 5 10\n’ ’’ ’ ’ ’’ ’\n+\n’ ’’ ’ ’ ’’ ’\n3 1 4 0\n10(10) + 5(1)\n’ ’’ ’ ’ ’’ ’\n= = 0.07692.\n15\n’ ’ 1365\n’ ’\n4\n’ ’"
    },
    {
        "id": 377,
        "topic": "SOA Exam P Sample Question",
        "question": "In a group of 3000 medical insurance policyholders, 1100 have a high resting heart rate,\nand 1900 have a low or normal resting heart rate. Of the policyholders with a high\nresting heart rate, 60 were treated for a stroke this year. Of the policyholders with a low\nor normal resting heart rate, 28 were treated for a stroke this year.\nCalculate the probability that a randomly chosen policyholder from the group has a low\nor normal resting heart rate, given that this policyholder was treated for a stroke this year.",
        "options": [
            "0.009",
            "0.015",
            "0.318",
            "0.467",
            "0.633"
        ],
        "answerLetter": "C",
        "answer": "0.318",
        "explanation": "Official solution: C\n\n1100 1900 60 28\nP H ( ) = , P L ( ) = , P S ( | H ) = , P S ( | L ) =\n3000 3000 1100 1900\nP S ( | L P L ) ( )\nP L S ( | ) =\nP S ( | L P L ) ( ) + P S ( | H P H ) ( )\n28 1900\n28\n1900 3000\n= = = 0.31818\n28 1900 60 1100\n28 + 60\n+\n1900 3000 1100 3000"
    },
    {
        "id": 378,
        "topic": "SOA Exam P Sample Question",
        "question": "In a certain year, an insurance company’s profit is modeled by a normal distribution with\nth\nmean 6.72. The 80 percentile of the profit is 8.40.\nth\nCalculate the 90 percentile of the insurance company’s profit in the year.",
        "options": [
            "8.61",
            "8.96",
            "9.28",
            "9.45",
            "12.80"
        ],
        "answerLetter": "C",
        "answer": "9.28",
        "explanation": "Official solution: C\n\nLet X = the company’s profit in a given year, which is normally distributed with mean μ = 6.72,\n80 percentile of 8.4, and standard deviation σ . Then,\nP X ( < 8.4) = 0.80\n8.4 − 6.72\nP Z ( < ) = 0.80\nσ\n8.4 − 6.72\n= 0.84162\nσ\nσ = 2\nP − 6.72\nP Z ( < ) = 0.90\n2\nP − 6.72\n= 1.28155\n2\nP = 9.28"
    },
    {
        "id": 379,
        "topic": "SOA Exam P Sample Question",
        "question": "A building experiences a power failure. The probability density function of the length (in\ndays) of this power failure is\n3\n’\n4 − x\n( )\n’\n, for 0 < x < 4\nf ( ) x = ’\n64\n’\n0, otherwise.\n’\nCalculate the median length (in days) of this power failure.",
        "options": [
            "0.0 4",
            "4 − 128",
            "0.8 3",
            "4 − 32",
            "2.0"
        ],
        "answerLetter": "B",
        "answer": "4 − 128",
        "explanation": "Official solution: B\n\nLet X = the length of the power failure in days.\nWe need to find the value of m for which the cumulative probability = 0.5\nm\nm\n3 4 4\n(4 − x ) (4 − x ) 1 (4 − m )\n4\n0.5 = dx = − = 256 − (4 − m ) = 1 −\n( )\n∫\n64 256 256 256\n0\n0\n4\n(4 − m )\n4 4\n4\n= 0.5 4 − m = 128 m = 4 − 128\n; (4 – m ) = 128; ;\n256"
    },
    {
        "id": 380,
        "topic": "SOA Exam P Sample Question",
        "question": "Consider the following three mutually independent random variables:\n• X has a normal distribution with mean 1205 and variance 5.0\n• Y and W have normal distributions with mean 2 and variance 0.5\nLet L = X – Y – W + 2.\nCalculate the probability that L is at least 1200.",
        "options": [
            "0.69",
            "0.89",
            "0.91",
            "0.93",
            "0.99"
        ],
        "answerLetter": "B",
        "answer": "0.89",
        "explanation": "Official solution: B\n\nL has a normal distribution with mean 1205 – 2 – 2 + 2 = 1203 and variance 5.0 + 0.5 + 0.5 =\n6.0. Then, P[ L ≥ 1200] = P[Z ≥ –3/ 6 ] = 0.8897."
    },
    {
        "id": 381,
        "topic": "SOA Exam P Sample Question",
        "question": "The lifetime (in years) of a car is a random variable with probability density function\n− 0 . 0625 x\n’\n0 . 0625 e , for x > 0\nf ( x ) =\n’\n0 , otherwise.\n’\nCalculate the probability that the car’s lifetime is less than 20 years, given that the car’s\nlifetime is at least five years.",
        "options": [
            "0.445",
            "0.522",
            "0.608",
            "0.832",
            "0.975"
        ],
        "answerLetter": "C",
        "answer": "0.608",
        "explanation": "Official solution: C\n\n− x /16\nThis is an exponential distribution with P X [ < x ] = 1 − e .\nP [5 < X < 20]\nP X [ < 20 | X > 5] =\nP X [ > 5]\nP X [ < 20] − P X [ < 5]\n=\nP X [ > 5]\n20 5\n− −\n16 16\n(1 − e ) − (1 − e )\n= = 0.60839\n5\n−\n16\ne"
    },
    {
        "id": 382,
        "topic": "SOA Exam P Sample Question",
        "question": "A company’s website consists of 30 pages. Five pages contain low graphical content, ten\npages contain moderate graphical content, and fifteen pages contain high graphical\ncontent. Four pages are randomly selected from the website without replacement. Let:\nX = number of pages selected which contain moderate graphical content, and\nY = number of pages selected which contain high graphical content.\nCalculate the conditional variance of Y , given that X = 3.",
        "options": [
            "0.1875",
            "0.2469",
            "0.5625",
            "0.7500",
            "1.3125"
        ],
        "answerLetter": "A",
        "answer": "0.1875",
        "explanation": "Official solution: A\n\nX = 3 implies Y = 0 or 1\nLet W be the number of pages with low graphical content. Then,\n’ 15 ’’ 5 ’’ 10 ’\n’ ’’ ’’ ’\n0 1 3\n’ ’’ ’’ ’\n30\n’ ’\n600\n’ ’\nP Y ( = 0, X = 3) P Y ( = 0, W = 1, X = 3) 4\n27, 405\n’ ’\nP Y ( = 0 | X = 3) = = = = = 0.25.\n2, 400\n20 10\nP X ( = 3) P X ( = 3) ’ ’’ ’\n’ ’’ ’\n27, 405\n1 3\n’ ’’ ’\n30\n’ ’\n’ ’\n4\n’ ’\nThe denominator follows because the distribution of X is hypergeometric with categories of X\nand not X . The conditional distribution of Y is Bernoulli with success probability 0.75. The\nvariance is 0.75(0.25) = 0.1875."
    },
    {
        "id": 383,
        "topic": "SOA Exam P Sample Question",
        "question": "A statistician models the size of unemployment claims that range from 0 to 1 using a\nth\nprobability density function proportional to the n root of the size of the claim, for some\npositive integer n .\nth th\nDetermine the ratio of the 30 percentile to the 20 percentile of the size of an\nunemployment claim.\nn",
        "options": [
            "1.5 n",
            "(1.5) n + 1 n",
            "(1.5) n n + 1",
            "(1.5) n + 1",
            "(1.5)"
        ],
        "answerLetter": "D",
        "answer": "(1.5) n + 1",
        "explanation": "Official solution: D\n\n1/ n\nf ( ) x = cx .\nThe density function is Then\n1\n1/ n + 1\n1\ncx c cn 1 + n\n1/ n\n1 = cx dx = = = ⇒ c = .\n∫\n0\n(1/ n ) + 1 (1/ n ) + 1 1 + n n\n0\nLet x represent the p th percentile. Then,\np\n1/ n\nx x\n(1 + n x )\np p\n1 1/ + n 1 1/ + n n /( n + 1)\np = F x ( ) = dx = x = ( x ) ⇒ x = p .\np p p\n∫\n0 0\nn\nThe desired ratio is\nn /( n + 1)\n1/( n + 1)\nx 0.3\nn n + 1 n\n0.3\n= = 1.5 = 1.5 .\n( )\nn /( n + 1)\nx\n0.2\n0.2"
    },
    {
        "id": 384,
        "topic": "SOA Exam P Sample Question",
        "question": "A dental insurance company offers two plans. The company’s actuary makes the\nfollowing observations:\ni) The size of a claim under the first plan ranges from 0 to 1 and has a distribution\nwith a density function proportional to the square of the size of the claim.\nii) For any p with 0 ≤ p ≤ 1, the (100 p ) percentile of the sizes of claims under the\n2\nfirst plan equals the (100 p ) percentile of the sizes of claims under the second\nplan.\nDetermine the density function for the size of a claim under the second plan, for\n0 ≤ x ≤ 1.\n2\n5",
        "options": [
            "x 3 5",
            "6 x 4",
            "5 x",
            "2 x 1 3 2",
            "x 2"
        ],
        "answerLetter": "B",
        "answer": "6 x 4",
        "explanation": "Official solution: B\n\n1\n2\nc x dx = 1 ⇒ c = 3\n∫\n0\nx\n2 3\nF x ( ) = 3 t dt = x\n∫\n0\n3\nx = p\nThe (100 p ) percentile of a claim under the first plan is the value of x satisfying .\n2\nSince this value of x is also the (100 p ) percentile of a claim under the second plan, the\n2\n2 3 6\nF x = p = x = x\ncumulative distribution function F of a claim under the second plan is ( ) .\n( )\n5\n′\nf ( ) x = F ( ) x = 6 x\nThen differentiating yields its probability density function ."
    },
    {
        "id": 385,
        "topic": "SOA Exam P Sample Question",
        "question": "A computer manufacturer collects data on how long it takes before its computers fail.\nThe time to fail, in years, follows an exponential distribution. Twenty percent of its\ncomputers fail within two years.\nThe probability a randomly selected computer fails before time t , in years, is 0.80.\nCalculate t .",
        "options": [
            "3.6",
            "7.2",
            "8.0",
            "14.4",
            "16.0"
        ],
        "answerLetter": "D",
        "answer": "14.4",
        "explanation": "Official solution: D\n\nLet be the mean of X . We know that\nβ\n’ 2/ ’\n0.2 ’ Pr X ’ 2 ’ 1 ’ e\n’ ’\n’ ’ 8.96284\nLet t be the time at which 80% of its computers have failed. Then,\n’ t /8.96284\n0.8 ’ Pr ’ X ’ t ’ ’ 1 ’ e\n’ t /8.9628\n0.2 ’ e\nt ’ 14.42513"
    },
    {
        "id": 386,
        "topic": "SOA Exam P Sample Question",
        "question": "To discourage traffic violations, county C charges each driver a fine of 1 for the driver’s\nfirst ticket of this year, 2 for the driver’s second ticket of this year, and generally n for the\ndriver’s n th ticket of this year.\nThe number of traffic tickets a certain driver in county C receives this year is Poisson\ndistributed with mean 4.\nCalculate the expected value of the total fine this driver is charged for tickets this year.",
        "options": [
            "6",
            "8",
            "10",
            "12",
            "14"
        ],
        "answerLetter": "D",
        "answer": "12",
        "explanation": "Official solution: D\n\nLet N = number of tickets the driver receives, which has a Poisson distribution with mean 4.\nN N ( + 1)\nNote that the total fine is the sum of the integers from 1 to N , which equals .\n2\nSo the expected total fine is\nN N ( + 1)\n’ ’\n2 2\nE = 0.5 E N ( ) + 0.5 E N ( ) = 0.5[ Var N ( ) + E N ( ) + E N ( )]\n’ ’\n2\n’ ’\n= 0.5(4 + 16 + 4) = 12."
    },
    {
        "id": 387,
        "topic": "SOA Exam P Sample Question",
        "question": "When a computer crashes, each of the data files 1, 2,…, d has the same probability of\nbeing corrupted, independently of the other files. Given that a crash causes exactly two\nof the d files to be corrupted, the probability that neither of the two most recently created\n40\nfiles are corrupted is .\n51\nCalculate the probability that none of the three most recently created files are corrupted,\ngiven that a crash causes exactly two of the files to be corrupted.",
        "options": [
            "0.523",
            "0.676",
            "0.686",
            "0.695",
            "0.710"
        ],
        "answerLetter": "C",
        "answer": "0.686",
        "explanation": "Official solution: C\n\n’ 2 ’’ d − 2 ’\n’ ’’ ’\n40 0 2 ( d − 2)( d − 3)\n’ ’’ ’\nThe probability that the 2 most recent files are both intact is = = .\n51 ’ d ’ d d ( − 1)\n’ ’\n2\n’ ’\n2 2 2\nThis leads to 40 d − 40 d = 51 d − 255 d + 306 ⇒ 0 = 11 d − 215 d + 306 = (11 d − 17)( d − 18) .\nSince d is an integer that is at least 3, the unique solution is d = 18.\nThe probability that the 3 most recent files are all intact is\n3 d − 3\n’ ’’ ’\n’ ’’ ’\n0 2\n( d − 3)( d − 4) 15(14) 35\n’ ’’ ’\n= = = = 0.686. .\nd\n’ ’ d d ( − 1) 18(17) 51\n’ ’\n2\n’ ’"
    },
    {
        "id": 388,
        "topic": "SOA Exam P Sample Question",
        "question": "Under an insurance policy, no benefit is paid on 75% of the claims filed. The benefits\npaid on the remaining claims are exponentially distributed with mean 8.\nCalculate the variance of the benefit for a randomly selected claim under this policy.",
        "options": [
            "2",
            "14",
            "16",
            "28",
            "32"
        ],
        "answerLetter": "D",
        "answer": "28",
        "explanation": "Official solution: D\n\nLet N = number of claims; let X = the benefit paid.\nP( N = 0) = 0.75; P( N = 1) = 0.25\nE( X | N = 0) = 0; E( X | N = 1) = 8\n2\nVar( X | N = 0) = 0; Var( X | N = 1) = 8 = 64\n2\nVar(E( X | N )) = 8 (0.25)(0.75) = 12 because i) a Bernoulli (0-1) random variable has variance\n2\np (1 - p ) if p = P(Bernoulli variable = 1), and ii)the variance of 8 times the Bernoulli is 8 times\nthe variance of the Bernoulli\nE(Var( X | N )) = 0(0.75) + 64(0.25) = 16\nVar( X ) = Var(E( X | N )) + E(Var( X | N )) = 12 + 16 = 28."
    },
    {
        "id": 389,
        "topic": "SOA Exam P Sample Question",
        "question": "Four men at a wedding party throw their hats into a big box. Later, each of them\nrandomly selects a hat from the box and places it on his head.\nCalculate the probability that none of the four men has his own hat on his head.",
        "options": [
            "0.042",
            "0.250",
            "0.333",
            "0.375",
            "0.500"
        ],
        "answerLetter": "D",
        "answer": "0.375",
        "explanation": "Official solution: D\n\nLet the hats (and men) be A, B, C, and D. There are 24 orderings of the hats drawn. Consider the\ncomplement, where at least one man draws his hat.\nIf A is drawn first, all 6 subsequent combinations meet this event.\nIf B is drawn first, combinations ACD,CAD, and DCA meet this event.\nIf C or D is drawn first, each also have three combinations that meet this event.\nHence there are 6 + 3 + 3 + 3 = 15 ways to meet the complementary event.\nThe desired probability is (24-15)/24 = 0.375."
    },
    {
        "id": 390,
        "topic": "SOA Exam P Sample Question",
        "question": "In a vacation timeshare marketing business, the value of each timeshare point is modeled\nby a random variable, X , which follows a gamma distribution with mean 6 and variance\n18.\nCalculate the probability that the value of a timeshare point exceeds 4.",
        "options": [
            "0.54",
            "0.56",
            "0.58",
            "0.60",
            "0.62"
        ],
        "answerLetter": "E",
        "answer": "0.62",
        "explanation": "Official solution: E\n\nUsing the probability density function for gamma distribution and integration by parts we have\n∞ ∞ ∞\n∞\n1 1 1 1\n2 1 − − x /3 − x /3 − x /3 − x /3\nP X ( > 4) = x e = xe dx = − 3 xe + 3 e dx\n∫ 2 ∫ ∫\n4\n9 9 9\n3 Γ (2)\n4 4 4\n∞\n4 1 4 7\n− 4/3 − x /3 − 4/3 − 4/3 − 4/3\n= e − 9 e = e + e = e = 0.6151.\n4\n3 9 3 3"
    },
    {
        "id": 391,
        "topic": "SOA Exam P Sample Question",
        "question": "The annual profits of each of two car insurance companies, A and B, are normally\ndistributed with the same standard deviation.\nThe mean annual profit of company A is 30.\nth th\nA profit of 214 is both the 96 percentile of company A’s annual profit and the 90\npercentile of company B’s annual profit.\nCalculate the mean annual profit of company B.",
        "options": [
            "33",
            "42",
            "54",
            "79",
            "105"
        ],
        "answerLetter": "D",
        "answer": "79",
        "explanation": "Official solution: D\n\nP A [ < 214] = 0.96\n214 − 30\n’ ’\nP Z < = 0.96\n’ ’\nσ\n’ ’\n214 − 30\n= 1.75\nσ\nσ = 105.143\nP B [ < 214] = 0.90\n214 − μ\n’ ’\nP Z < = 0.90\n’ ’\n105.143\n’ ’\n214 − μ\n= 1.2816\n105.143\nμ = 79.25\nThe value for 0.96 was obtained using the closest entry in the normal table (1.75) while the value\nfor 0.90 (1.2816) was obtained from the list of percentiles at the bottom of the table."
    },
    {
        "id": 392,
        "topic": "SOA Exam P Sample Question",
        "question": "The amount of time, in years, that a refrigerator functions before breaking down is a\ncontinuous random variable with density function\nc x ( − 5), for 5 ≤ x ≤ 8\n’\n’\nf ( ) x = c (11 − x ), for 8 < x ≤ 11\n’\n’\n0, otherwise,\n’\nwhere c is a constant.\nCalculate the probability that the refrigerator will function between six and eight years\nbefore breaking down.",
        "options": [
            "0.222",
            "0.278",
            "0.333",
            "0.379",
            "0.444"
        ],
        "answerLetter": "E",
        "answer": "0.444",
        "explanation": "Official solution: E\n\n8 11\n8 11\n2 2\n’ ’\n’ ’\n( x − 5) (11 − x )\nc x − 5 dx + (11 − x dx ) = c ’ − ’ = c (4.5 + 4.5) = 1\n( )\n’ ’\n∫ ∫\n2 2\n’ ’\n’ 5 8 ’\n5 8\n’ ’\n1\nc =\n9\n8\n8 2\n1 ( x − 5) 9 − 1\nx − 5 dx = = = 0.444.\n( )\n∫\n9 9(2) 18\n6 6"
    },
    {
        "id": 393,
        "topic": "SOA Exam P Sample Question",
        "question": "A homeowner purchases a policy from an insurance company covering losses from\nhurricanes and fires. Under the policy, the insurance company pays 1000 for each loss.\nIn each year, the number of hurricanes is Poisson distributed, with a common mean for\nall years. Similarly, for each year, the number of fires is also Poisson distributed, with a\ncommon mean for all years. A hurricane occurs on average once every 10 years, while a\nfire occurs on average once every 50 years. The numbers of hurricanes and numbers of\nfires in different years are all mutually independent.\nLet T be a random variable representing the total payments made by the insurance\ncompany to the homeowner over the next 40 years.\nCalculate the mode of T .",
        "options": [
            "2000",
            "3000",
            "4000",
            "4800",
            "5000"
        ],
        "answerLetter": "C",
        "answer": "4000",
        "explanation": "Official solution: C\n\nSince both events are Poisson distributed, the combination is also Poisson distributed with\nλ = 0 . 1 + 0 . 02 = 0 . 12 per year. The claims in forty years are also Poisson distributed with\n. To find the mode, First note that\nλ = 40(0.12) = 4.8\n− 4.8 n − 4.8 n − 1\ne 4.8 4.8 e 4.8 4.8\np n ( ) = = = p n ( − 1).\nn ! n ( n − 1)! n\nThis means that the probability increases when n < 4.8 and decreases thereafter. We have p (4) =\n1.2 p (3) while p (5) = 0.96 p (4) and hence the mode must be at 4. The total payments are 4000."
    },
    {
        "id": 394,
        "topic": "SOA Exam P Sample Question",
        "question": "The loss, X , subject to reimbursement under an insurance policy, has density function\n− x − d\n( )\n’\n’ ’ 1 ’\nβ\n’\ne , for x ≥ d\nf ( ) x = ’ ’ ’\nβ\n’ ’\n’\n0, otherwise,\n’\n’\nwhere d is the deductible, and is a positive constant.\nβ\nth\nDetermine the absolute value of the difference between the mode of X and the 10\npercentile of X .\n11\n’ ’",
        "options": [
            "β ln ’ ’ 10 ’ ’ 10 ’ ’",
            "β ln ’ ’ 9 ’ ’ ’ 11 ’",
            "β ln + d ’ ’ 10 ’ ’ 10 ’ ’",
            "β ln + d ’ ’ 9 ’ ’ 1 11 ’ ’",
            "ln ’ ’ β 10 ’ ’"
        ],
        "answerLetter": "B",
        "answer": "β ln ’ ’ 9 ’ ’ ’ 11 ’",
        "explanation": "Official solution: B\n\nx − d\n−\n1\nβ\nSince f '( ) x = − e < 0, f ( ) x is monotonically decreasing for x ≥ d . Thus, the mode of X\n2\nβ\nis at its lowest possible value, that being x = d .\nth\nLet p be the 10 percentile of X .\np p\n− 1 − ( x − d )/ β − ( x − d )/ β − ( p − d )/ β\n0.10 = F p ( ) = β e dx = − e = 1 − e\n∫\nd d\n− ( p − d )/ β\n0.90 = e\nln(0.9) = − ( p − d ) / β\np = d − β ln(0.9) = d + β ln(10 / 9).\nSo, | p − d | = β ln(10 / 9) + d − d = β ln(10 / 9)."
    },
    {
        "id": 395,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurer’s losses are modeled by a random variable X , with density function, f , where\n1\nf ( x ) is proportional to , for x > 100, and 0, otherwise.\n2\nx\nCalculate the median of X .",
        "options": [
            "100",
            "120",
            "150",
            "200",
            "300"
        ],
        "answerLetter": "D",
        "answer": "200",
        "explanation": "Official solution: D\n\n∞\n∞\n− 2 − 1 − 1\n1 = c x dx = − cx = c 100 ⇒ c = 100\n∫\n100\n100\nM\nM\n− 2 − 1 − 1\n0.5 = 100 x dx = − 100 x = 1 − 100 M ⇒ M = 200\n∫\n100\n100"
    },
    {
        "id": 396,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy covers losses incurred by a policyholder, subject to a deductible of\n20. Losses incurred follow a distribution with probability density function\n0.25\n’\n’ kx , for 0 < x < 100\nf ( ) x = ’\n0, otherwise,\n’\n’\nwhere k is a constant.\nth\nCalculate the 90 percentile of losses that exceed the deductible.",
        "options": [
            "89",
            "90",
            "91",
            "92",
            "93"
        ],
        "answerLetter": "E",
        "answer": "93",
        "explanation": "Official solution: E\n\n100\n100\n1.25 1 . 25\nx k 1.25\nk x\n0.25 1.25 1 . 25\nkx dx = k = 100 = 1 ⇒ k = F ( x ) = x =\nFirst, and\n∫ 1.25\n1 . 25\n1.25 1.25 100 1 . 25\n100\n0\n0\nThe desired percentile is\n1.25 1.25\nPr(20 ≤ X ≤ p ) F p ( ) − F (20) p − 20\n0.9 = Pr( X ≤ p | X > 20) = = =\n1.25 1.25\nPr( X > 20) 1 − F (20) 100 − 20\n1.25 1.25 1/1.25 1.25 1/1.25\np = [0.9(100 − 20 )] + 20 = [0.9(316.23 − 42.29) + 42.29] = 93.01."
    },
    {
        "id": 397,
        "topic": "SOA Exam P Sample Question",
        "question": "The combined results of employee satisfaction surveys taken at each of Store A and Store\nB are given in the following table, in which satisfaction is ranked from 0 to 5.\nCombined Frequencies\nSatisfaction\nover Stores A and B\n0 9\n1 6\n2 12\n3 6\n4 6\n5 9\nAmong only the employees of Store A, the frequency of each response is at least 4. Store\nA has three modes, each with a frequency of 8.\nCalculate the largest possible number of modes for Store B.",
        "options": [
            "0",
            "1",
            "2",
            "3",
            "5"
        ],
        "answerLetter": "B",
        "answer": "1",
        "explanation": "Official solution: B\n\nThe three modes for A must be at 0, 2, and 5. Therefore, the frequencies for B at these values\nmust be 1, 4, and 1.\nFor values of 1, 3 and 4 the frequencies for A are at least 4. For B they are then at most 2 for\neach of these values.\nThere is one frequency of 4 and all other frequencies are 2 or less. Hence there is one mode, at a\nvalue of 2."
    },
    {
        "id": 398,
        "topic": "SOA Exam P Sample Question",
        "question": "Ten percent of homeowners in a certain city are classified as high-risk, and ninety percent\nare classified as low-risk. Each homeowner’s classification remains unchanged over the\nnext four years.\nIn any given year, each high-risk homeowner has probability 0.80 of experiencing no\nfires, and each low-risk homeowner has probability 0.99 of experiencing no fires. For\neach homeowner, the numbers of fires in different years are mutually independent.\nA randomly chosen homeowner experiences no fires in the first and second years.\nCalculate the probability that this homeowner will experience no fires in the third and\nfourth years.",
        "options": [
            "0.9055",
            "0.9324",
            "0.9461",
            "0.9548",
            "0.9571"
        ],
        "answerLetter": "E",
        "answer": "0.9571",
        "explanation": "Official solution: E\n\nLet X = event of no fires the first 2 years; Y = event of no fires the following 2 years.\nLet H = event of homeowner being high-risk; L = event of homeowner being low risk.\nP H [ ] = 0.1; P L [ ] = 0.9\n2 2\nP X [ | H ] = 0.8 ; P X [ | L ] = 0.99\n4 4\nP X [ and Y | H ] = 0.8 ; P X [ and Y | L ] = 0.99\nP X [ and Y ] P X [ and Y | H P H ] [ ] + P X [ and Y | L P L ] [ ]\nP Y [ | X ] = =\nP X [ ] P X [ | H P H ] [ ] + P X [ | L P L ] [ ]\n4 4\n0.8 (0.1) + 0.99 (0.9)\n= = 0.95709.\n2 2\n0.8 (0.1) + 0.99 (0.9)",
        "plainExplanation": "這題的重點不是直接算「第三、四年沒火災」而已，因為題目已經告訴你：這個人前兩年都沒有火災。這個資訊會讓我們重新猜他比較可能是哪一種屋主。\n一開始，高風險屋主只有 10%，低風險屋主有 90%。低風險屋主每年沒火災的機率是 0.99，高風險是 0.80。所以如果一個人前兩年都沒火災，他更像是低風險屋主。\n我們要算的是：在「前兩年沒火災」這個條件下，後兩年也沒火災的機率。用條件機率想，就是「四年都沒火災的機率」除以「前兩年沒火災的機率」。\n四年都沒火災：高風險部分是 0.1 × 0.8^4，低風險部分是 0.9 × 0.99^4。前兩年沒火災：高風險部分是 0.1 × 0.8^2，低風險部分是 0.9 × 0.99^2。\n所以答案是 (0.1×0.8^4 + 0.9×0.99^4) / (0.1×0.8^2 + 0.9×0.99^2) ≈ 0.9571。直覺上也合理：前兩年都安全，代表他很可能是低風險，所以後兩年也安全的機率很高。"
    },
    {
        "id": 399,
        "topic": "SOA Exam P Sample Question",
        "question": "In a large population of patients, 20% have cancer. Of those who have cancer, 8% have\nstage IV cancer.\nPatients are tested one at a time, at random, until five patients with stage IV cancer are\nfound.\nLet N represent the number of patients tested. Let C represent the number of patients\ntested who have cancer.\nDetermine the probability function, p ( , ) n c , for integers n and c such that 5 ≤ c ≤ n .\nN C ,\n( n − 1)!\nn − c c − 5 5",
        "options": [
            "p ( , ) n c = (0.8) (0.184) (0.016) N C , ( n − c )!( c − 5)!4! ( n − 1)! n − c c − 5 5",
            "p ( , ) n c = (0.8) (0.12) (0.08) N C , ( n − c )!( c − 5)!4! n ! n − c c − 5 5",
            "p ( , ) n c = (0.8) (0.184) (0.016) N C , ( n − c )!( c − 5)!5! ( n − 5)! n − c c − 5 5",
            "p ( , ) n c = (0.8) (0.184) (0.016) N C , ( n − c )!( c − 5)! ( n − 1)! n − − c 1 c − 4 5",
            "p ( , ) n c = (0.8) (0.12) (0.08) N C , ( n − c − 1)!( c − 4)!4!"
        ],
        "answerLetter": "A",
        "answer": "p ( , ) n c = (0.8) (0.184) (0.016) N C , ( n − c )!( c − 5)!4! ( n − 1)! n − c c − 5 5",
        "explanation": "Official solution: A\n\nA given person in this population has no cancer with probability 1 − 0.2 = 0.8 , cancer other than\nstage IV with probability 0.2(1 − 0.08) = 0.184 , and stage IV cancer with probability\n.\n0.2(0.08) = 0.016\nn − c\nWe need to find the probability that i) out of the first n − 1 patients, have no cancer, c − 5\nhave cancer other than stage IV, and 4 have stage IV cancer, and ii) the n th patient has stage IV\ncancer.\nKeeping in mind that we are given that the patients are independent, we multiply the individual\nprobabilities together. We then multiply this product by the number of possible orders in which\n( n − 1)!\nn − c c − 5 5\np ( , ) n c = (0.8) (0.184) (0.016)\nthese results need to occur, to get .\nN C ,\n( n − c )!( c − 5)!4!"
    },
    {
        "id": 400,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy provides coverage for two types of claims. Let X and Y denote the\nnumbers of monthly claims of Type I and Type II, respectively. The joint probability\nfunction of X and Y is given by\n8 − 2 x − y\nfor and\np x y ( , ) = , x = 0 , 1 , 2 y = 0,1, 2,3.\n54\nCalculate the probability that there are in total at least two claims on this policy in the\ncoming month.",
        "options": [
            "0.19",
            "0.28",
            "0.39",
            "0.52",
            "0.61"
        ],
        "answerLetter": "E",
        "answer": "0.61",
        "explanation": "Official solution: E\n\nLet W denote the total claims received.\nP W ( ≥ 2) = 1 − P W ( < 2) = 1 − [ P X ( = 0, Y = 0) + P X ( = 0, Y = 1) + P X ( = 1, Y = 0)]\n8 7 6 33\n’ ’\n= 1 − + + = = 0.61\n’ ’\n54 54 54 54\n’ ’"
    },
    {
        "id": 401,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X be a normally distributed random variable representing the amount of an individual\nclaim of a policyholder covered by a group health policy.\nYou are given that Var( X ) = 250,000 and P[ X <1000] = 0.3446.\nth\nCalculate the difference between the 90 percentile of X and the median of X .",
        "options": [
            "241",
            "441",
            "641",
            "822",
            "980"
        ],
        "answerLetter": "C",
        "answer": "641",
        "explanation": "Official solution: C\n\n1000 − μ\n’ ’\nP Z < = 0.3446\n’ ’\n500\n’ ’\n1000 − μ\n= − 0.40\n500\nμ = 1200\nP − 1200\n’ ’\n0.9\nP Z < = 0.90\n’ ’\n500\n’ ’\nP − 1200\n0.9\n= 1.2816\n500\nP = 1840.8\n0.9\nMedian equals the mean or 1200, the difference is 1840.8 − 1200 = 640.8."
    },
    {
        "id": 402,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of phone calls received per minute at a call center is modeled by a Poisson\ndistribution. The second moment of the number of calls received per minute is 0.2756.\nThe numbers of calls received during non-overlapping one-minute time intervals are\nmutually independent random variables.\nCalculate the probability that more than two calls are received in a 15-minute interval.",
        "options": [
            "0.655",
            "0.781",
            "0.805",
            "0.850",
            "0.918"
        ],
        "answerLetter": "A",
        "answer": "0.655",
        "explanation": "Official solution: A\n\n2 2\nVar X E X E X\n( ) = λ = ( ) − ( )\n2\nλ = 0.2756 − λ\n2\nλ + λ − 0.2756 = 0\nBy quadratic formula: λ = 0.2250\nThen: 15 λ = 3.37474\nThen,\nP Y ( > 2) = 1 − P Y ( ≤ 2)\n= 1 − P (0) + P (1) + P (2)\n[ ]\n0 1 2\n’ ’\n3.37474 3.37474 3.37474\n− 3.37474\n= 1 − e + +\n’ ’\n0! 1! 2!\n’ ’\n= 0.65536."
    },
    {
        "id": 403,
        "topic": "SOA Exam P Sample Question",
        "question": "Five claims are randomly selected from a group of fifteen different claims, which consists\nof five workers compensation claims, four homeowner claims and six auto claims.\nCalculate the probability that the five claims selected consist of one workers\ncompensation claim, three homeowner claims and one auto claim.",
        "options": [
            "0.025",
            "0.036",
            "0.040",
            "0.150",
            "0.213"
        ],
        "answerLetter": "C",
        "answer": "0.040",
        "explanation": "Official solution: C\n\nHypergeometric:\n5 4 6\n’ ’ ’ ’ ’ ’\n’ ’ ’ ’ ’ ’\n’ ’ ’ ’ ’ ’\n1 3 1\n’ ’ ’ ’ ’ ’\n= 0.040\n15\n’ ’\n’ ’\n’ ’\n5\n’ ’"
    },
    {
        "id": 404,
        "topic": "SOA Exam P Sample Question",
        "question": "The joint probability function of X and Y is\n24 − 7 x − 3 y\n’\n, for x = 0,1, 2 and y = 0,1, 2\n’\np x y ( , ) = ’\n126\n’\n0, otherwise.\n’\nCalculate Var( Y ).",
        "options": [
            "0.56",
            "0.65",
            "0.75",
            "0.80",
            "0.87"
        ],
        "answerLetter": "B",
        "answer": "0.65",
        "explanation": "Official solution: B\n\nThe marginal distribution of Y is:\n24 17 10 51\np (0) = p (0, 0) + p (1, 0) + p (2, 0) = + + =\nY\n126 126 126 126\n21 14 7 42\np (1) = p (0,1) + p (1,1) + p (2,1) = + + =\nY\n126 126 126 126\n18 11 4 33\np (2) = p (0, 2) + p (1, 2) + p (2, 2) = + + =\nY\n126 126 126 126\n51 42 33 108\nE Y ( ) = 0 + 1 + 2 =\n126 126 126 126\n51 42 33 174\n2 2 2 2\nE Y\n( ) = 0 + 1 + 2 =\n126 126 126 126\n2\n174 108\n’ ’\nV Y ( ) = − = 0.64626.\n’ ’\n126 126\n’ ’"
    },
    {
        "id": 405,
        "topic": "SOA Exam P Sample Question",
        "question": "A monthly state lottery picks five distinct integers from 1 to 30 and selects one of the five\nto be the bonus number. An entry consists of five distinct integers from 1 to 30 with one\nof the numbers designated as the bonus number.\nEach month there are 100,000 entries. Each entry that matches the five distinct numbers is\nawarded 50,000. If the bonus number is also matched, an additional 250,000 is awarded\nto that entry. Nothing is awarded for matching fewer than five numbers.\nCalculate the expected payout from the lottery in a month.",
        "options": [
            "70,172",
            "77,190",
            "84,731",
            "100,000",
            "175,431"
        ],
        "answerLetter": "A",
        "answer": "70,172",
        "explanation": "Official solution: A\n\nThe expected monthly payout is:\n100,000 * [300,000 * P(match all 5 and bonus number) + 50,000 * P(match all 5 but no bonus\nnumber) + 0 * P(match fewer than 5 numbers)].\n1 1 1\nP (Match all five and Bonus) = * =\n30\n’ ’ 5 712,530\n’ ’\n5\n’ ’\n1 4 4\nP (Match all five and No Bonus) = * =\n30\n’ ’ 5 712,530\n’ ’\n5\n’ ’\nThus, expected monthly payout equals:\n’ 1 4 ’\n100, 000 300, 000 + 50, 000 = 70,172.\n’ ’\n712,530 712,530\n’ ’"
    },
    {
        "id": 406,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of monthly claims on an insurance policy has a distribution given by\nNumber of monthly claims Probability\n0 s\n1 t\n2 0.75 s\n3 or more 0\nA random sample of five policies is selected, and the claims for a given month are\nrecorded. The numbers of claims on the five policies are mutually independent. Let the\nrandom variable Y denote the number of policies from the sample with fewer than two\nmonthly claims.\nLet c = P Y = 5 .\n[ ]\nDetermine which of the following is equal to t .\n0.2\n4 − 4 c",
        "options": [
            "3 0.2 3 − 7 c",
            "3 0.2 4 c − 4",
            "3 0.2 5 c − 3",
            "3 0.2 7 c − 4",
            "3"
        ],
        "answerLetter": "E",
        "answer": "3",
        "explanation": "Official solution: E\n\nY is a binomial random variable with n = 5 and probability of success equal to s + t.\nNext, the probability that Y = 5 is:\n5\n’ ’\n5 1/5 1/5\nP Y ( = 5) = ( s + t ) = c ⇒ s + t = c ⇒ s = c − t\n’ ’\n5\n’ ’\nThen,\ns + 0.75 s + t = 1.75 s + t = 1\n1/5\nt = 1 − 1.75( c − t )\n1/5\nt = 1 − 1.75 c + 1.75 t\n1/5\n0.75 t = 1.75 c − 1\n1/5 1/5\n1.75 c − 1 7 c − 4\nt = = .\n0.75 3"
    },
    {
        "id": 407,
        "topic": "SOA Exam P Sample Question",
        "question": "The lifetime of a new electronic device is exponentially distributed with a median of\nthree years.\nCalculate the variance of the remaining lifetime, given the device did not fail before\n0.5 years.",
        "options": [
            "3.8",
            "4.3",
            "9.0",
            "14.7",
            "18.7"
        ],
        "answerLetter": "E",
        "answer": "18.7",
        "explanation": "Official solution: E\n\nLet X denote the time until failure. Because the median of X is 3, we have:\n− 3/ β\nP X ( > 3) = 0.5 = e\n3\nln 0.5 = −\nβ\nβ = 4.32809\n2\nβ = 18.73232\nThe variance of an exponential random variable is .\nBecause the exponential distribution is memoryless, the variance of the future lifetime from t =\n2\nβ = 18.73232.\n0.5 is also"
    },
    {
        "id": 408,
        "topic": "SOA Exam P Sample Question",
        "question": "A purse contains two coins, one fair and one two-headed. One of the coins is selected at\nrandom and tossed twice. Both tosses result in heads.\nCalculate the probability that a third toss of the selected coin will result in heads.",
        "options": [
            "1/2",
            "9/16",
            "5/8",
            "4/5",
            "9/10"
        ],
        "answerLetter": "E",
        "answer": "9/10",
        "explanation": "Official solution: E\n\nLet H be the event a single head and F be the event the fair coin is selected. Then,\nP HHH ( )\nP HHH ( | HH ) =\nP HH ( )\n′ ′\nP HH ( ) = P HH ( | F P F ) ( ) + P HH ( | F ) P F ( ) = [(1/ 2)(1/ 2)](1/ 2) + [(1)(1)](1/ 2) = 5 / 8\n′ ′\nP HHH ( ) = P HHH ( | F P F ) ( ) + P HHH ( | F ) P F ( ) = [(1/ 2)(1/ 2)(1/ 2)](1/ 2) + [(1)(1)(1)](1/ 2) = 9 /16\n9 /16 9\nP HHH ( | HH ) = = .\n5 / 8 10"
    },
    {
        "id": 409,
        "topic": "SOA Exam P Sample Question",
        "question": "The amount of a loss under a fire insurance policy is continuous and has cumulative\ndistribution function\n’ 0, for x < 0\n’\n4\n’\nx\n’ ’ ’ 3\nF x ( ) = c , for 0 ≤ x ≤ 10\n’ ’\n’\n15\n’ ’\n’\n’\n1, for x > 10,\n’\n’\nwhere c is a positive constant.\nThe insurer reimburses each loss up to a maximum amount m . The probability that a\ngiven loss is partially reimbursed is 0.56.\nCalculate m .",
        "options": [
            "5.40",
            "6.47",
            "7.03",
            "7.80",
            "8.10"
        ],
        "answerLetter": "A",
        "answer": "5.40",
        "explanation": "Official solution: A\n\nLet X represent the loss. Since it is given that losses never exceed 10, we have\n4 4\n3 3\n10 15\n’ ’ ’ ’\n1 = P[ X ≤ 10] = F (10) = c ⇒ c = .\n’ ’ ’ ’\n15 10\n’ ’ ’ ’\nSince the probability that a given loss is partially reimbursed is 0.56, we have\n4 4 4 4\n3 3 3 3\nm 15 m m\n’ ’ ’ ’ ’ ’ ’ ’\n0.56 = P[ X > m ] = 1 − P[ X ≤ m ] = 1 − F m ( ) = 1 − c = 1 − = 1 −\n.\n’ ’ ’ ’ ’ ’ ’ ’\n15 10 15 10\n’ ’ ’ ’ ’ ’ ’ ’\n3\n4\nm = 10 1 − 0.56 = 5.40\nSolving for m yields ( ) ."
    },
    {
        "id": 410,
        "topic": "SOA Exam P Sample Question",
        "question": "This year, a homeowner experiences no tornadoes with probability 0.80, exactly one\ntornado with probability 0.12, exactly two tornadoes with probability 0.05, and exactly\nthree tornadoes with probability 0.03.\nEach tornado independently results in a loss of 1 with probability 0.50 and a loss of 2\nwith probability 0.50.\nLet X be the number of tornadoes that the homeowner experiences this year, and Y be the\ntotal amount of losses that the homeowner experiences this year due to all the tornadoes.\nLet be the joint cumulative distribution function of X and Y .\nF x y ( , )\nCalculate\nF (2,3).",
        "options": [
            "0.0250",
            "0.0500",
            "0.0675",
            "0.9325",
            "0.9575"
        ],
        "answerLetter": "E",
        "answer": "0.9575",
        "explanation": "Official solution: E\n\nF (2,3) = P[ X ≤ 2 and Y ≤ 3]\nWe need to find , which equals the probability of at most 2\nX Y ,\ntornadoes and a total loss of at most 3.\nThe probability of no tornadoes or exactly one tornado is 0.8 + 0.12 = 0.92, and in this situation,\nthe total loss is no more than 2 and is therefore no more than 3.\nThe probability of exactly two tornadoes is 0.05, and in this situation, the total loss is at most 3\n2\n1 − (0.5) = 0.75\nas long as both losses are not 2, which occurs with probability .\nF (2,3) = 0.92 + 0.05(0.75) = 0.9575\nTherefore, .\nX Y ,"
    },
    {
        "id": 411,
        "topic": "SOA Exam P Sample Question",
        "question": "An automobile insurance company specializes in insuring high-risk drivers.\nThe number of accidents for a randomly selected high-risk driver in year 1 is modeled by\na random variable X . The number of accidents for the same driver in year 2 is modeled\nby a random variable Y .\nThe probability mass function of X and Y is\n’ ( 4 − x ) (3 − y )\n, for x = 0,1,2,3 and y = 0,1, 2\n’\np x y ( , ) = ’\n60\n’\n0, otherwise.\n’\nCalculate Var( Y ).",
        "options": [
            "0.56",
            "0.67",
            "0.75",
            "1.00",
            "1.44"
        ],
        "answerLetter": "A",
        "answer": "0.56",
        "explanation": "Official solution: A\n\nLet the marginal pdf for be pY ( y ), for y = 0,1,2.\np (0) = p (0, 0) + p (1, 0) + p (2, 0) + p (3, 0) = (12 + 9 + 6 + 3) / 60 = 30 / 60\nY\np (1) = p (0,1) + p (1,1) + p (2,1) + p (3,1) = (8 + 6 + 4 + 2) / 60 = 20 / 60\nY\np (2) = 1 − (30 + 20) / 60 = 10 / 60\nY\nE Y ( ) = 0(3 / 6) + 1(2 / 6) + 2(1/ 6) = 4 / 6\n2 2 2 2\nVar Y ( ) = 0 (3 / 6) + 1 (2 / 6) + 2 (1/ 6) − (4 / 6) = (36 − 16) / 36 = 20 / 36 = 0.56"
    },
    {
        "id": 412,
        "topic": "SOA Exam P Sample Question",
        "question": "Claims on a liability policy are independent and uniformly distributed on the interval\n[0, 10]. An auditor randomly selects three claims.\nCalculate the probability that the maximum of the three claims is less than 7.",
        "options": [
            "0.027",
            "0.081",
            "0.189",
            "0.343",
            "0.441"
        ],
        "answerLetter": "D",
        "answer": "0.343",
        "explanation": "Official solution: D\n\n3\n(0.7) = 0.343.\nThis is the same as the probability that all three claims are less than 7, which is"
    },
    {
        "id": 413,
        "topic": "SOA Exam P Sample Question",
        "question": "An auditor is examining insurance policies for fraud. A policyholder can only file one\nclaim. The probability of any given policy having a claim is 0.90, and the probability of\na claim being fraudulent is 0.20. The auditor picks five policies at random and examines\nthem in order until he finds two fraudulent claims. He then stops examining policies. If\nhe doesn’t find two fraudulent claims, he stops after examining the fifth policy.\nCalculate the expected number of policies he will examine.",
        "options": [
            "4.68",
            "4.73",
            "4.78",
            "4.83",
            "4.88"
        ],
        "answerLetter": "B",
        "answer": "4.73",
        "explanation": "Official solution: B\n\nThis is a negative binomial distribution. The probability of finding fraud is 0.9(0.2) = 0.18. Let\np ( x ) be the probability of examining x policies. Then,\np (1) = 0\n2\np (2) = 0.18 = 0.0324\n2\np (3) = 2(0.82)(0.18) = 0.0531\n2 2\np (4) = 3(0.82) (0.18) = 0.0654\np (5) = 1 − 0.0324 − 0.0531 − 0.0654 = 0.8491\nE X ( ) = 2(0.0324) + 3(0.0531) + 4(0.0654) + 5(0.8491) = 4.7312."
    },
    {
        "id": 414,
        "topic": "SOA Exam P Sample Question",
        "question": "An agent markets a new life insurance policy to nine people. Six of the nine have already\npurchased an insurance product from the agent.\nThe agent randomly selects four of the nine people for appointments today.\nCalculate the probability that at least three of the four people with appointments have\nalready purchased an insurance product from the agent.",
        "options": [
            "0.10",
            "0.12",
            "0.14",
            "0.48",
            "0.60"
        ],
        "answerLetter": "E",
        "answer": "0.60",
        "explanation": "Official solution: E\n\nThis is a hypergeometric problem.\n6 3 6 3\n’ ’’ ’ ’ ’’ ’\n’ ’’ ’ ’ ’’ ’\n3 1 4 0\n’ ’’ ’ ’ ’’ ’\nP X [ = 3] = + P X [ = 4] =\n9 9\n’ ’ ’ ’\n’ ’ ’ ’\n4 4\n’ ’ ’ ’\n= 0.4762 + 0.1190 = 0.5952."
    },
    {
        "id": 415,
        "topic": "SOA Exam P Sample Question",
        "question": "A specialty store sells only baby carriages and car seats. The price of a baby carriage is\n300 and the price of a car seat is 100. The proprietor knows that 60% of the people\nstopping at the store do not make a purchase, 20% buy a baby carriage, and 35% buy a\ncar seat. No customer buys more than one of each item. If a customer buys both a baby\ncarriage and a car seat, the proprietor gives a 10% discount on the total.\nCalculate the revenue the proprietor expects on a day that 200 people come to the store.",
        "options": [
            "8,200",
            "17,800",
            "18,400",
            "18,440",
            "29,800"
        ],
        "answerLetter": "B",
        "answer": "17,800",
        "explanation": "Official solution: B\n\nLet C be the expected number buying the carriage only\nS be the expected number buying the seat only\nB be the expected number buying both\nThen C + S + B + 0.60(200) = 200\nC + B = 0.20(200) = 40\nS + B = 0.35(200) = 70\n40 + 70 – B + 120 = 200\nB = 30, C = 10, S = 40\nRevenue = 10(300) + 40(100) + 30(360) = 17,800"
    },
    {
        "id": 416,
        "topic": "SOA Exam P Sample Question",
        "question": "A company has 1000 dental insurance policies. The number of claims filed by a\npolicyholder during one year is a Poisson random variable with variance 1. The number\nof claims filed by these policyholders are mutually independent.\nThe payment for each dental claim is 100 and the annual premium for each policy is\n103% of the total expected claim payments for that policy.\nCalculate the probability, using the normal approximation, that the total claim payments\non the 1000 policies exceeds the total premium collected.",
        "options": [
            "0.001",
            "0.159",
            "0.167",
            "0.488",
            "0.500"
        ],
        "answerLetter": "C",
        "answer": "0.167",
        "explanation": "Official solution: C\n\nX 1 = Var X ( ) = E X ( ).\nLet be the number of claims for policyholder i . We have The total\ni i i\nS = 100( X + ’ + X )\namount paid is then . Note that the solution employs the continuity\n1 1000\ncorrection.\nE S ( ) = 100[ E X ( ) + ’ + E X ( )] = 100(1, 000)(1) = 100, 000\n1 1000\n2 2\nVar S ( ) = 100 [ Var X ( ) + ’ + Var X ( )] = 100 (1, 000)(1) = 10, 000, 000\n1 1000\n1/2\nStDev S ( ) = 10, 000, 000 = 3,162.28\nPremium = 1.03(100, 000) = 103, 000\n’ 103, 050 − 100, 000 ’\nP S ( > 103, 000) = P Z > = 0.9645 = 0.167\n’ ’\n3, 162.28\n’ ’"
    },
    {
        "id": 417,
        "topic": "SOA Exam P Sample Question",
        "question": "On average, a certain word processing software program has a fatal crash once in every\n50 instances of saving a document.\nThe instances of fatal crashes, while saving, are independent from one another.\nCalculate the probability that the second fatal crash, while saving, occurs on the fourth\ninstance of saving a document.",
        "options": [
            "0.00038",
            "0.00115",
            "0.00230",
            "0.01882",
            "0.02000"
        ],
        "answerLetter": "B",
        "answer": "0.00115",
        "explanation": "Official solution: B\n\nThis is a negative binomial distribution.\n3\n’ ’\n2 2\nP (Second fatal crash occurs on the fourth save) = (0.02) (0.98) = 0.001152.\n’ ’\n1\n’ ’"
    },
    {
        "id": 418,
        "topic": "SOA Exam P Sample Question",
        "question": "A policyholder purchases car insurance for two years. In a given year, the policyholder's\nnumber of car accidents is zero with probability 0.9, exactly one with probability 0.08,\nand exactly two with probability 0.02. The number of accidents in the first year is\nindependent of the number in the second.\nCalculate the probability that the policyholder has one accident in each year, given that\nthe policyholder has a total of exactly two accidents.",
        "options": [
            "0.006",
            "0.042",
            "0.151",
            "0.262",
            "0.960"
        ],
        "answerLetter": "C",
        "answer": "0.151",
        "explanation": "Official solution: C\n\nLet M = # of accidents in first year, N = # of accidents in second year.\nP M ( = 1, N = 1) 0.08(0.08)\nP M ( = 1, N = 1| M + N = 2) = =\nP M ( + N = 2) 0.9(0.02) + 0.08(0.08) + 0.02(0.9)\n0.0064\n0.151\n= =\n0.0424"
    },
    {
        "id": 419,
        "topic": "SOA Exam P Sample Question",
        "question": "A customer purchases a lawnmower with a two-year warranty. The number of years\nbefore the lawnmower needs a repair is uniformly distributed on [0, 5].\nCalculate the probability that the lawnmower needs no repairs within 4.5 years after the\npurchase, given that the lawnmower needs no repairs within the warranty period.",
        "options": [
            "0.10",
            "0.17",
            "0.44",
            "0.50",
            "0.60"
        ],
        "answerLetter": "B",
        "answer": "0.17",
        "explanation": "Official solution: B\n\nX = amount of time (years) before repair is needed, which is uniform on [0, 5]\nP X [ > 4.5 | X > 2]\nP X [ > 4.5]\n=\nP X [ > 2]\n5 − 4.5\n1\n5 − 0\n= = = 0.167\n5 − 2\n6\n5 − 0"
    },
    {
        "id": 420,
        "topic": "SOA Exam P Sample Question",
        "question": "A scientist estimates the time (in tens of millions of years) before a major asteroid will hit\nthe earth using a random variable X with probability density function\n− x\n’\nxe , for x > 0\nf ( ) x = ’\n0, otherwise.\n’\nCalculate the probability that the next time the earth is hit by a major asteroid occurs\nbetween 10 million and 20 million years from now.",
        "options": [
            "0.0005",
            "0.0867",
            "0.3298",
            "0.6702",
            "0.9995"
        ],
        "answerLetter": "C",
        "answer": "0.3298",
        "explanation": "Official solution: C\n\nUsing integration by parts\n2 2\n2 2\n− x − x − x − 2 − 1 − x − 2 − 1\nxe dx = − xe − − e dx = − ( 2 e + e ) − e = − 3 e + 2 e = 0.329753.\n∫ ∫\n1 1\n1 1"
    },
    {
        "id": 421,
        "topic": "SOA Exam P Sample Question",
        "question": "The lifetimes of televisions of a certain model are exponentially distributed with a\nmedian of 2.7 years.\nth\nCalculate the 87.5 percentile of the lifetimes for these televisions.",
        "options": [
            "3.08",
            "4.73",
            "8.10",
            "10.80",
            "19.68"
        ],
        "answerLetter": "C",
        "answer": "8.10",
        "explanation": "Official solution: C\n\nLet X = lifetime of a television of this brand:\n− 2/7/ β\n0.5 = P X [ < 2.7] = 1 − e\n2.7 / β = 0.6931\nβ = 3.8953\n− p /3.8953\n0.875 = P X [ < P ] = 1 − e\np / 3.8953 = 2.0794\np = 8.10."
    },
    {
        "id": 422,
        "topic": "SOA Exam P Sample Question",
        "question": "Events A and B are mutually exclusive, and at least one of A or B is certain to occur.\nEvents C and D are mutually exclusive, and at least one of C or D is certain to occur.\nThe following probabilities are known:\ni) P [A] = 0.75\nii) P [D] = 0.20\niii) P [A ∩ C] = 0.55\nCalculate P [B ∩ D].",
        "options": [
            "0.00",
            "0.05",
            "0.20",
            "0.25",
            "0.45"
        ],
        "answerLetter": "A",
        "answer": "0.00",
        "explanation": "Official solution: A\n\nSince one of C or D is guaranteed to occur, and they are mutually exclusive:\nso,\nP [ A ] = P [ A ∩ C ] + P [ A ∩ D ]\n.\nP [ A ∩ D ] = 0 . 75 − 0 . 50 = 0 . 20\nThen, since one of A and B is guaranteed to occur:\n,\nP [ D ] = P [ A ∩ D ] + P [ B ∩ D ]\nso\nP [ B ∩ D ] = 0 . 20 − 0 . 20 = 0 . 00"
    },
    {
        "id": 423,
        "topic": "SOA Exam P Sample Question",
        "question": "A survey was conducted within the population of those who claim to have contributed to\ncharity during the previous year. Results indicate that 70% of this population claimed to\nhave contributed at least 1000, 50% overstated the value of their contributions, and 45%\ndid both.\nAssume that the survey accurately represents the population.\nCalculate the probability that a randomly selected person overstated the value of his\ncontribution, given that they claimed to have contributed less than 1000.",
        "options": [
            "1/20",
            "1/10",
            "1/6",
            "3/4",
            "5/6"
        ],
        "answerLetter": "C",
        "answer": "1/6",
        "explanation": "Official solution: C\n\nWe are given the following:\nOverstated Didn't overstate Row Total\nClaimed at least 1000 0.45 0.70\nClaimed less than 1000\nColumn Total 0.50\nThis gives\nOverstated Didn't overstate Row Total\nClaimed at least 1000 0.45 0.25 0.70\nClaimed less than 1000 0.05 0.25 0.30\nColumn Total 0.50 0.50 1.00\nThen, P(Overstated | Less than 1000) = P(Overstated and Less than 1000)/P(Less than 1000) =\n0.05/0.30 = 1/6."
    },
    {
        "id": 424,
        "topic": "SOA Exam P Sample Question",
        "question": "A website requires a five-character password consisting of exactly three distinct\ncharacters selected from the 26 upper-case letters of the alphabet and exactly two\ncharacters, not necessarily distinct, selected from the ten digits. The password must begin\nwith one of the selected letters.\nCalculate the maximum number of unique passwords, in millions, the site will\naccommodate.",
        "options": [
            "3.120",
            "4.212",
            "4.680",
            "8.424",
            "9.360"
        ],
        "answerLetter": "E",
        "answer": "9.360",
        "explanation": "Official solution: E\n\nThere are ( C )(3) = 7,800 ways to select the 3 distinct upper case letters and choose one for the\n26 3\nleading position of the password. For each of those ways, there are P = 12 ways to allocate the\n4 2\nother two letters among the 4 open positions. So there are 93,600 ways to allocate the letters.\n2\nFor each, there are 10 ways to select and place the two digits in the remaining two open\npositions. Thus, there are 9,360,000 possibilities."
    },
    {
        "id": 425,
        "topic": "SOA Exam P Sample Question",
        "question": "This year, the number of tooth fillings a policyholder undergoes is Poisson distributed.\nThe probability that the policyholder undergoes no tooth fillings this year is 0.18.\nCalculate the mode of the number of tooth fillings the policyholder undergoes this year.",
        "options": [
            "0",
            "1",
            "2",
            "5",
            "6"
        ],
        "answerLetter": "B",
        "answer": "1",
        "explanation": "Official solution: B\n\nLet X = number of fillings, which has a Poisson distribution with mean λ\n− λ 0\ne λ\n− λ\n0.18 = P X [ = 0] = = e\n0!\nλ = 1.7147\nSince the mean is 1.7147, the mode will be 1 as it can be shown that when the mean is not a\nwhole number, the mode is the largest whole number less than the mean. When the mean is a\nwhole number, there are two modes, the mean and one less than the mean."
    },
    {
        "id": 426,
        "topic": "SOA Exam P Sample Question",
        "question": "The time, in years, until replacement for a new telephone pole has probability density\nfunction\nkt , for 0 < t < 50\n’\nf t ( ) = ’\n0, otherwise,\n’\nwhere k is a constant.\nCalculate the probability that a new telephone pole will be replaced within 25 years given\nthat it is not replaced within 20 years.",
        "options": [
            "0.09",
            "0.11",
            "0.16",
            "0.17",
            "0.84"
        ],
        "answerLetter": "B",
        "answer": "0.11",
        "explanation": "Official solution: B\n\n50\n1\n1 = ktdt = 1250 k ⇒ k =\n∫\n1250\n0\n25\nt\ndt\n∫\n1250\nP [20 < T < 25] (625 − 400) / 2500 225\n20\nP T [ ≤ 25 | T ≥ 20] = = = = = 0.10714\n50\nP T [ > 20] (2500 − 400) / 2500 2100\nt\ndt\n∫\n1250\n20\n427. Deleted"
    },
    {
        "id": 428,
        "topic": "SOA Exam P Sample Question",
        "question": "The working lifetime of a master computer chip that regulates the electronic components\nof an automobile engine is exponentially distributed with a mean of 7.2 years. Under a\nwarranty, the chip manufacturer will replace any chip that fails within t years. It is\nexpected that 5% of all chips will be replaced under this warranty.\nCalculate t.",
        "options": [
            "0.007",
            "0.369",
            "0.416",
            "0.501",
            "0.720"
        ],
        "answerLetter": "B",
        "answer": "0.369",
        "explanation": "Official solution: B\n\nLet = working lifetime of chips, in years. Then\n− t /7.2\n0.05 = P X [ ≤ t ] = 1 − e\n− t /7.2\ne = 0.95\n− t / 7.2 = − 0.05129\nt = 0.3693"
    },
    {
        "id": 429,
        "topic": "SOA Exam P Sample Question",
        "question": "A baseball-pitching machine is used for batting practice. The machine is out of\nadjustment such that every pitched baseball arrives at the batter’s box between 0 and 2\nfeet higher than intended.\nLet X equal the difference, in feet, between the actual arrival height and the intended\narrival height of a pitched baseball.\nThe density of X , f ( x ), is proportional to x .\nth\nCalculate the 80 percentile for X .",
        "options": [
            "0.40",
            "0.89",
            "1.26",
            "1.60",
            "1.79"
        ],
        "answerLetter": "E",
        "answer": "1.79",
        "explanation": "Official solution: E\n\n2 2\n1 = f ( ) x dx = cxdx = 2 c ⇒ c = 0.5\n∫ ∫\n0 0\np\n2\n0.8 = 0.5 xdx = 0.25 p ⇒ p = 3.2 = 1.7889\n∫\n0"
    },
    {
        "id": 430,
        "topic": "SOA Exam P Sample Question",
        "question": "Two different models of televisions, A and B, have exponentially distributed lifespans,\nmeasured in years. The probability that television A and television B are still working T\nyears from now is 0.49 and 0.70, respectively.\nThe variance of television A's lifespan is 5.60.\nCalculate the variance of television B's lifespan.",
        "options": [
            "1.40",
            "1.80",
            "2.80",
            "11.20",
            "22.40"
        ],
        "answerLetter": "E",
        "answer": "22.40",
        "explanation": "Official solution: E\n\nLet X and Y represent the exponentially distributed life spans of televisions A and B,\nrespectively, and let λ and λ represent the means for X and Y , respectively.\n1 2\n2\nVar( X ) = λ = 5.6 ⇒ λ = 2.3664\n1 1\n− T / λ − T /2.3664\n1\n0.49 = P X ( > T ) = 1 − 1 − e = e ⇒ − T / 2.3664 = − 0.7133 ⇒ T = 1.6881\n( )\n− T / λ − 1.6881/ λ\n2 2\n.\n0.7 = P Y ( > T ) = e = e ⇒ − 1.6882 / λ = − 0.3567 ⇒ λ = 4.7332\n2 2\n2 2\nVar ( Y ) = λ = 4.7332 = 22.403 .\n2"
    },
    {
        "id": 431,
        "topic": "SOA Exam P Sample Question",
        "question": "Each year, a car insurance company’s four quarterly profits are mutually independent and\nnormally distributed with common mean and variance. Each quarter, the probability that\nthe company earns a positive profit is 0.80.\nCalculate the probability that the company earns an overall positive profit in a given year.",
        "options": [
            "0.410",
            "0.663",
            "0.800",
            "0.954",
            "0.998"
        ],
        "answerLetter": "D",
        "answer": "0.954",
        "explanation": "Official solution: D\n\nLet X be the profit earned in quarter i . Then\ni\n0 − μ\n’ ’\n0.8 = P X [ > 0] = P Z > ⇒ μ / σ = 0.84\ni\n’ ’\nσ\n’ ’\nLet S = X + X + X + X be the total profit for the year. Then S has a normal distribution with\n1 2 3 4\n2\nmean 4 μ and variance 4 σ . Then,\n0 − 4 μ\n’ ’\nP S [ > 0] = P Z > = − 2 μ / σ = − 1.68 = 0.9535.\n’ ’\n2 σ\n’ ’"
    },
    {
        "id": 432,
        "topic": "SOA Exam P Sample Question",
        "question": "A large life insurance company gets a steady inflow of new policyholders each month. In\nthe past, the number of new policyholders per month, N , was normally distributed with\npast\nmean 500, standard deviation σ , and P[ N < 400] = 0.1056.\npast\nThe company has just undertaken a new marketing strategy, which is projected to have a\npositive effect on new sales. The projected number of new policyholders per month,\nN , is normally distributed with mean 550 and standard deviation 1.25 σ .\nfuture\nCalculate P[370 < N < 730].\nfuture",
        "options": [
            "0.903",
            "0.928",
            "0.970",
            "0.976",
            "0.985"
        ],
        "answerLetter": "B",
        "answer": "0.928",
        "explanation": "Official solution: B\n\n400 − 500 400 − 500\n’ ’\n0.1056 = P N [ < 400] = P Z < ⇒ = − 1.25 ⇒ σ = 80\npast\n’ ’\nσ σ\n’ ’\n370 − 550 730 − 550\n’ ’\n’ ’\nP 370 < N < 730 = P < Z < = P − 1.8 < Z < 1.8 = 0.9641 − 0.0359 = 0.9282\n[ ]\nfuture\n’ ’\n’ ’\n100 100\n’ ’"
    },
    {
        "id": 433,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company sells flood and fire insurance. This year, the company’s profit\nfrom selling flood insurance is normally distributed, and its profit from selling fire\ninsurance is normally distributed with three times the mean and three times the standard\ndeviation as from flood insurance.\nThe profits from the two types of insurance are independent. The probability that the\ncompany earns a positive profit from selling flood insurance this year is 0.67.\nCalculate the probability that the insurance company earns an overall positive profit this\nyear.",
        "options": [
            "0.71",
            "0.73",
            "0.81",
            "0.92",
            "0.96"
        ],
        "answerLetter": "A",
        "answer": "0.71",
        "explanation": "Official solution: A\n\nLet X be the profit from flood insurance and Y be the profit from fire insurance and let S = X + Y be the\ntotal profit. Let and σ be the mean and standard deviation of X .\nμ\n0 − μ 0 − μ\n’ ’\nP X [ > 0] = P Z > = 0.67 ⇒ = − 0.44 ⇒ 0.44 σ = μ\n’ ’\nσ σ\n’ ’\nS has a normal distribution with mean and standard deviation\nE X [ ] + E Y [ ] = μ + 3 μ = 4 μ\n2 2\nVar X ( ) + Var Y ( ) = σ + 9 σ = 10 σ .\n’ 0 − 4 μ − 4(0.44 σ ) ’\nP S [ > 0] = P Z > = = − 0.56 = 0.71\n’ ’\n10 σ 10 σ\n’ ’"
    },
    {
        "id": 434,
        "topic": "SOA Exam P Sample Question",
        "question": "An amusement park has two roller coasters. This year, the numbers of accidents\noccurring on the first and second roller coasters are Poisson distributed with means\nλ = 0.5 and λ , respectively. The probability that at least one accident occurs on the\n1 2\nsecond roller coaster is twice the probability for the first roller coaster.\nCalculate λ .\n2",
        "options": [
            "1.00",
            "1.19",
            "1.23",
            "1.55",
            "2.00"
        ],
        "answerLetter": "D",
        "answer": "1.55",
        "explanation": "Official solution: D\n\nLet X = number of accidents occurring on the j th roller coaster, for j = 1, 2, which is Poisson\nj\ndistributed with mean λ .\nj\nThe probability that at least one accident occurs on roller coaster j equals\n0\n− λ\nj\ne λ\n( )\nj\n− λ\nj\n1 − P ’ X = 0 ’ = 1 − = 1 − e .\nj\n’ ’\n0!\nSince the probability that at least one accident occurs on the second roller coaster is twice that\n− λ − λ\n2 1\nfor the first roller coaster, 1 − e = 2 1 − e . Then\n( )\n− λ − λ − λ − 0.5\n2 1 1\ne = 2 e − 1 ⇒ λ = − ln 2 e − 1 = − ln 2 e − 1 = 1.546 .\n( ) ( )\n2"
    },
    {
        "id": 435,
        "topic": "SOA Exam P Sample Question",
        "question": "A large city police department is conducting an analysis of the annual number of car\naccidents in the city. The department hires an actuary who models the annual number of\ncar accidents using an exponential distribution with a variance of 7225.\nCalculate the median minus the mean of this distribution.",
        "options": [
            "–2217",
            "–26",
            "0",
            "26",
            "2217"
        ],
        "answerLetter": "B",
        "answer": "–26",
        "explanation": "Official solution: B\n\nStandard deviation equals 85 implies mean = 85.\nLet M equal the median\nP X [ > M ] = 0.5\n− M /85\ne = 0.5\n− M\n= ln 0.5\n85\nM = 58.92\nSo median minus mean = 58.92 - 85 = –26.08"
    },
    {
        "id": 436,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy has been purchased for a windmill farm. The policy will pay to\ncompensate for the loss of revenue resulting from certain weather hazards that shut down\nthe farm. Each such loss is exponentially distributed with standard deviation 1000.\nCalculate the probability that a random loss exceeds 1500 given that it exceeds the mean.",
        "options": [
            "0.22",
            "0.39",
            "0.50",
            "0.61",
            "0.78"
        ],
        "answerLetter": "D",
        "answer": "0.61",
        "explanation": "Official solution: D\n\nThe mean equals the standard deviation, so is also 1000. By the memoryless property of the\nexponential distribution,\n∞\n∞\n− 0.001 x − 0.001 x − 0.5\nP X [ > 1500 | X > 1000] = P X [ > 500] = 0.001 e dx = − e = e = 0.6065.\n∫\n500\n500"
    },
    {
        "id": 437,
        "topic": "SOA Exam P Sample Question",
        "question": "Data from a study shows the following about the number of injuries a football player\nexperiences in a year:\ni) The probability is 0.250 that the player experiences 1 or 2 injuries.\nii) The probability is 0.036 that the player experiences 2 or 3 injuries.\niii) The probability is 0.260 that the player experiences at least 1 injury.\niv) The probability is 0.002 that the player experiences at least 4 injuries.\nCalculate the probability that the football player experiences exactly 2 injuries this year.",
        "options": [
            "0.009",
            "0.014",
            "0.024",
            "0.028",
            "0.048"
        ],
        "answerLetter": "D",
        "answer": "0.028",
        "explanation": "Official solution: D\n\nP[exactly 2 injuries]\n= P[1 or 2 injuries] + P[2 or 3 injuries] – P[at least 1 injury] + P[4 or more injuries]\n= 0.25 + 0.036 – 0.26 + 0.002\n= 0.028"
    },
    {
        "id": 438,
        "topic": "SOA Exam P Sample Question",
        "question": "A delivery truck, when filled to capacity, can carry only three items of Type A in addition\nto only two items of Type B.\nOne day, six items of Type A and four items of Type B await delivery. The ten items are\nbrought to the loading dock one at a time in random order.\nCalculate the probability that the first five items brought to the loading dock will fill the\ndelivery truck to capacity.",
        "options": [
            "1/210",
            "1/21",
            "1/10",
            "21/100",
            "10/21"
        ],
        "answerLetter": "E",
        "answer": "10/21",
        "explanation": "Official solution: E\n\nThe event that the first 5 items fill the truck to its capacity is equivalent to the event that the first\n5 items include 3 items of Type A and 2 items of Type B. This is a hypergeometric probability:\n6 4\n’ ’’ ’\n’ ’’ ’\n3 2 20(6) 10\n’ ’’ ’\n= =\n10 252 21\n’ ’\n’ ’\n5\n’ ’"
    },
    {
        "id": 439,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company’s profit for one year is normally distributed with probability\n0.8531 of being positive.\nThe company’s profit the next year is normally distributed with probability 0.9192 of\nbeing positive.\nThe yearly profits are independent with the same mean but different standard deviations.\nCalculate the probability that the insurance company earns an overall positive profit in\nthis two-year period.",
        "options": [
            "0.7842",
            "0.7995",
            "0.8849",
            "0.9535",
            "0.9929"
        ],
        "answerLetter": "D",
        "answer": "0.9535",
        "explanation": "Official solution: D\n\nLet X and Y be the profits in years 1 and 2 respectively. Let S = X + Y be the total profit for the\ntwo years.\n’ ’\n0 − μ\n0.8531 = P X [ > 0] = P Z > ⇒ − μ / σ = − 1.05 ⇒ σ = μ /1.05\n’ ’ X X\nσ\n’ X ’\n’ ’\n0 − μ\n0.9192 = P Y [ > 0] = P Z > ⇒ − μ / σ = − 1.40 ⇒ σ = μ /1.40\n’ ’ Y X\nσ\n’ Y ’\n2 2 2 2 2\nE S [ ] = μ + μ = 2 μ , Var S ( ) = σ + σ = μ (1/1.05 + 1/1.40 ), σ = 1.1905 μ\nX Y S\n’ 0 − 2 μ ’\nP S [ > 0] = P Z > = − 1.68 = 0.9535\n’ ’\n1.1905 μ\n’ ’"
    },
    {
        "id": 440,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses under a boat insurance policy are exponentially distributed. The median loss is\n400.\nCalculate the mean loss.",
        "options": [
            "400",
            "446",
            "492",
            "533",
            "577"
        ],
        "answerLetter": "E",
        "answer": "577",
        "explanation": "Official solution: E\n\n− x / λ\nThe distribution function for an exponential distribution is F x ( ) = 1 − e .\n− 400/ λ\n1 − e = 0.5\n− 400/ λ\ne = 0.5\n− 400 / λ = ln 0.5\nλ = 577.08."
    },
    {
        "id": 441,
        "topic": "SOA Exam P Sample Question",
        "question": "A patient must undergo hospitalization and surgery. The hospitalization and surgery\ncharges are uniformly distributed on the intervals [0, b ] and [0, 2 b − 6] , respectively,\nwhere b is a constant larger than 3.\nThe standard deviation of the hospitalization charge is 9.60.\nCalculate the standard deviation of the surgery charge.",
        "options": [
            "13.2",
            "15.7",
            "17.5",
            "19.2",
            "19.9"
        ],
        "answerLetter": "C",
        "answer": "17.5",
        "explanation": "Official solution: C\n\nThe variance of a uniform distribution is 1/12 of the square of the interval length. The standard\nb\ndeviation of the hospitalization charge is = 9.6 ⇒ b = 33.255 . The standard deviation of the\n12\n2 b − 6 2(33.255) − 6\n= = 17.4677.\nsurgery charge is\n12 12"
    },
    {
        "id": 442,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X be a random variable that is uniform on [ a , b ]. The probability that X is greater\nthan 8 is 0.60. The probability that X is greater than 11 is 0.20.\nCalculate the variance of X .",
        "options": [
            "3.70",
            "4.69",
            "6.25",
            "7.24",
            "8.75"
        ],
        "answerLetter": "B",
        "answer": "4.69",
        "explanation": "Official solution: B\n\nb − 11\nP X [ > 11] = 0.2 =\nb − a\nb − a = 5( b − 11)\nb − 8\nP X [ > 8] = 0.6 =\nb − a\n0.6[5( b − 11)] = b − 8\n3 b − 33 = b − 8\nb = 12.5\na = 5\n2\n(12.5 − 5)\nVar X ( ) = = 4.6875.\n12"
    },
    {
        "id": 443,
        "topic": "SOA Exam P Sample Question",
        "question": "A continuous random variable, X , has density function f ( x ) where\nx − 1\n’\n, for 1 < x < 3\n’\n4\n’\n’ 5 − x\nf x = , for 3 ≤ x < 5\n( )\n’\n4\n’\n’\n0, otherwise.\n’\n’\nDetermine which of the following expressions equals E X − 2 .\n( )\n2 3 5\n1 1 1",
        "options": [
            "( 2 − x )( x − 1 ) dx + ( x − 2 )( x − 1 ) dx + ( 2 − x )( 5 − x dx ) ∫ ∫ ∫ 1 2 3 4 4 4 3 5 1 1",
            "2 − x x − 1 dx + x − 2 5 − x dx ( )( ) ( )( ) ∫ ∫ 1 3 4 4 2 3 5 1 1 1",
            "x − 2 x − 1 dx + 2 − x x − 1 dx + 2 − x 5 − x dx ( )( ) ( )( ) ( )( ) ∫ ∫ ∫ 1 2 3 4 4 4 3 5 1 1",
            "x − 2 x − 1 dx + x − 2 5 − x dx ( )( ) ( )( ) ∫ ∫ 1 3 4 4 2 3 5 1 1 1",
            "( 2 − x )( x − 1 ) dx + ( x − 2 )( x − 1 ) dx + ( x − 2 )( 5 − x dx ) ∫ ∫ ∫ 1 2 3 4 4 4"
        ],
        "answerLetter": "E",
        "answer": "( 2 − x )( x − 1 ) dx + ( x − 2 )( x − 1 ) dx + ( x − 2 )( 5 − x dx ) ∫ ∫ ∫ 1 2 3 4 4 4",
        "explanation": "Official solution: E\n\n5 2 3 5\nE [| X − 2 |] = | x − 2 | f ( ) x dx = (2 − x f ) ( ) x dx ( x − 2) f ( ) x dx ( x − 2) f ( ) x dx\n∫ ∫ ∫ ∫\n1 1 2 3\n2 3 5\nx − 1 x − 1 5 − x\n= (2 − x ) dx ( x − 2) dx ( x − 2) dx\n∫ ∫ ∫\n1 2 3\n4 4 4"
    },
    {
        "id": 444,
        "topic": "SOA Exam P Sample Question",
        "question": "The joint probability function of X and Y is given by\n− 2 x − 4 y + xy + 8\n’\n, for x = 1, 2,3 and y = 0,1\n’\np x y ( , ) = ’\n18\n’\n0, otherwise.\n’\nY\n’ ’\nCalculate E .\n’ ’\nX\n’ ’",
        "options": [
            "0.102",
            "0.200",
            "0.241",
            "0.306",
            "0.722"
        ],
        "answerLetter": "C",
        "answer": "0.241",
        "explanation": "Official solution: C\n\nY\n’ ’\nThe question requires calculation of E ’ ’ . The joint density of X and Y is given by\nX\n’ ’\nX\n1 2 3\nY 0 6/18 4/18 2/18\n1 3/18 2/18 1/18\nY Y\nThe six cells yield the quotients = 0, 0, 0, 1, 1/2, 1/3. The expected value of is thus\nX X\n3 1 2 1 1 1\n’ ’’ ’ ’ ’’ ’ ’ ’’ ’\n13\n+ +\n, which is .\n’ ’’ ’ ’ ’’ ’ ’ ’’ ’\n18 1 18 2 18 3 54\n’ ’’ ’ ’ ’’ ’ ’ ’’ ’"
    },
    {
        "id": 445,
        "topic": "SOA Exam P Sample Question",
        "question": "In a study of driver safety, drivers were categorized according to three risk factors. For\neach risk factor, exactly 1200 drivers exhibited that risk factor, and exactly 420 among\nthem exhibited only that risk factor. There were exactly 320 drivers who exhibited all\nthree risk factors and 480 who exhibited none of the three risk factors.\nCalculate the number of drivers in the study.",
        "options": [
            "1740",
            "2290",
            "2750",
            "3440",
            "4080"
        ],
        "answerLetter": "C",
        "answer": "2750",
        "explanation": "Official solution: C\n\nThere are 3(420) = 1260 drivers who have exactly one risk factor. There are 320 with all three\nfactors. Look at the 1200 drivers with the first risk factor. 420 + 320 = 740 are accounted for.\nThe remining 460 drivers have exactly one other risk factor. This is 230 for each and hence\n3(230) = 690 with exactly two risk factors. Also adding the 480 with no risk factors gives a total\nof 1260 + 320 + 690 + 480 = 2750."
    },
    {
        "id": 446,
        "topic": "SOA Exam P Sample Question",
        "question": "Once each morning and once each afternoon, the driver of a delivery truck is assigned to\na route with a length that depends upon the items being delivered. The morning route is\n5, 10, or 40 miles. The afternoon route is 0, 5, or 30 miles. The routes are assigned with\nthe following probabilities:\nLength of Afternoon Route\n(miles)\n0 5 30\nLength of\n5 0 2 x 3 x\nMorning\n10 0 2 x 0\nRoute(miles)\n40 y 0 0\nThe expected length of the assigned afternoon route is 11 miles.\nCalculate the variance of the length of the afternoon route.",
        "options": [
            "159.0",
            "168.5",
            "181.5",
            "259.0",
            "269.0"
        ],
        "answerLetter": "A",
        "answer": "159.0",
        "explanation": "Official solution: A\n\nWe have that 11.0 = 0 y + 5(2 x + 2 x ) + 30(3 x ), so x =0.10. Thus y = 0.30. The variance we seek\n2 2 2\nis therefore (0–11) (0.3) + (5–11) (0.4) + (30–11) (0.3) = 159.0."
    },
    {
        "id": 447,
        "topic": "SOA Exam P Sample Question",
        "question": "The amount of money stolen from an insured home during a burglary is modeled by a\nrandom variable that is uniformly distributed on the interval [0, 1000]. The claim\npayment that the insurer makes for such a loss under its homeowners policy has the\nfollowing characteristics:\ni) The claim payment equals a constant percentage, p , of the amount by which the\nloss exceeds 400.\nii) The expected claim payment is 90.\nCalculate p.",
        "options": [
            "15%",
            "18%",
            "30%",
            "50%",
            "75%"
        ],
        "answerLetter": "D",
        "answer": "50%",
        "explanation": "Official solution: D\n\nLet X be loss and Y be the amount paid by the insurance. Then Y = 0 if X < 400 and Y = p ( X –\n400) otherwise. Then,\n1000 1000\n2\n90 = p x ( − 400)(0.001) dx = p [( x − 400) / 2](0.001) = 180 p ⇒ p = 0.50.\n∫\n400\n400"
    },
    {
        "id": 448,
        "topic": "SOA Exam P Sample Question",
        "question": "A policyholder sustains one loss covered by policy A and a second loss covered by policy\nB. The two losses are independent and uniformly distributed on the interval [0,10]. Each\npolicy has a deductible of 5.\nCalculate the probability that the larger of the two claim payments does not exceed t , for\n0 ≤ t ≤ 5 .\n2\nt\n’ ’",
        "options": [
            "’ ’ 5 ’ ’ 2 t ’ ’",
            "’ ’ 10 ’ ’ 5 + t",
            "10 2 ’ 5 + t ’",
            "’ ’ 10 ’ ’ 2 5 − t ’ ’",
            "1 − ’ ’ 10 ’ ’"
        ],
        "answerLetter": "D",
        "answer": "’ ’ 10 ’ ’ 2 5 − t ’ ’",
        "explanation": "Official solution: D\n\nLet X and Y be the two claims; X and Y are independent and identically distributed. Let U and V\nthe amount paid on each claim. U and V are also independent and identically distributed.\nWe want\n2\nP (max( U V , ) ≤ t ) = P U ( ≤ t V , ≤ t ) = P U ( ≤ t ) .\nWe have\nP U ( ≤ t ) = P X ( − 5 ≤ t ) = P X ( ≤ t + 5) = ( t + 5) /10.\n2\n5 + t\n’ ’\nThus,\nP (max( U V , ) ≤ t ) = .\n’ ’\n10\n’ ’"
    },
    {
        "id": 449,
        "topic": "SOA Exam P Sample Question",
        "question": "Two random variables X and Y are each defined on a set of positive integers and have\njoint probability function p ( x , y ). A portion of the corresponding joint cumulative\ndistribution function F ( x , y ) is given in the following table:\nx\n3 4 5 6\ny\n8 0.53 0.62 0.67 0.75\n9 0.65 0.76 0.84 0.93\nCalculate p (4,9) + p (5,9).",
        "options": [
            "0.01",
            "0.02",
            "0.03",
            "0.04",
            "0.05"
        ],
        "answerLetter": "E",
        "answer": "0.05",
        "explanation": "Official solution: E\n\np (4,9) + p (5,9) = P (3 < X ≤ 5,8 < Y ≤ 9) = F (5,9) − F (3,9) − F (5,8) + F (3,8)\n= 0.84 − 0.65 − 0.67 + 0.53 = 0.05"
    },
    {
        "id": 450,
        "topic": "SOA Exam P Sample Question",
        "question": "X, Y, and Z are three mutually independent Poisson random variables with common\nvariance λ . Let U = 100 X +150 Y +200 Z . The coefficient of variation for U is 0.90.\nCalculate λ .",
        "options": [
            "0.44",
            "0.82",
            "1.22",
            "1.50",
            "2.25"
        ],
        "answerLetter": "A",
        "answer": "0.44",
        "explanation": "Official solution: A\n\nE U ( ) = 100 λ + 150 λ + 200 λ = 450 λ\n2 2 2\nVar U ( ) = 100 λ + 150 λ + 200 λ = 72,500 λ\n72,500 λ\n2\n0.9 = ⇒ λ = 72,500 / (0.9 × 450) = 0.442\n450 λ"
    },
    {
        "id": 451,
        "topic": "SOA Exam P Sample Question",
        "question": "A system has three mutually independent components. Each component has a lifetime\nthat is modeled by a random variable with density function\n− ( y − 5 )\n’\ne , for y > 5\nf ( y ) =\n’\n0 , otherwise.\n’\nThe system will fail when any of the three components fail.\nCalculate the expected lifetime of the system.",
        "options": [
            "5.20",
            "5.33",
            "5.67",
            "6.00",
            "6.33"
        ],
        "answerLetter": "B",
        "answer": "5.33",
        "explanation": "Official solution: B\n\ny y\n− ( t − 5) − ( t − 5) − ( y − 5)\nF y ( ) = e dt = − e = 1 − e .\nThe distribution function is The density function for\n∫\n5 5\n2 − ( y − 5) − ( y − 5) 2 − 3( y − 5)\ng ( y ) = 3 f ( y )[1 − F y ( )] = 3 e [ e ] = 3 e .\nthe first order statistic is: The expected\n1\nvalue is:\n∞ ∞\n− 3( y − 5) − 3( y − 5) − ( y − 5)\n3 ye dy = − ye − (1/ 3) e = 5 + 1/ 3 = 5.33.\n∫\n5\n5\nAlternatively, recognize that the first order statistics is 5 plus an exponentially distributed\nrandom variable with mean 1/3."
    },
    {
        "id": 452,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company’s medical claims for individual policyholders are normally\ndistributed with a mean of 1000 and a standard deviation of 625.\nThe insurance company sells the medical insurance to a group of 25 individuals whose\nclaims are mutually independent.\nThe insurance company will lose money if the total claims for the 25 individuals exceeds\n27,500.\nCalculate the probability that the insurance company will lose money.",
        "options": [
            "0.07",
            "0.10",
            "0.14",
            "0.21",
            "0.44"
        ],
        "answerLetter": "D",
        "answer": "0.21",
        "explanation": "Official solution: D\n\nThe group has a normal distribution with mean 25 x 1000 = 25,000 and standard deviation of\n1/2\n625 x (25) = 3,125.\n27,500 − 25, 000\n’ ’\nP[Lose Money] = P[Claims > 27,500] = P Z > = P Z [ 0.80] > 0.2119 =\n.\n’ ’\n3125\n’ ’"
    },
    {
        "id": 453,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses under a policy are uniformly distributed on the interval [0, 480]. For each loss,\nthe claim payment is a constant percentage of the amount in excess of a deductible of\n240.\nThe insurer wants the variance of the claim payment for a single loss to equal 2000.\nCalculate the percentage the insurer should choose.",
        "options": [
            "11.1%",
            "33.3%",
            "57.7%",
            "64.5%",
            "91.3%"
        ],
        "answerLetter": "C",
        "answer": "57.7%",
        "explanation": "Official solution: C\n\nLet p represent the percentage, expressed as a decimal; let Y represent the loss; let X represent the\nclaim. Then X = 0 when Y < 240 and X = p ( Y – 240) otherwise. Then X has a mixed distribution\nwith and for 0 < x < 240 p ,\nP X ( = 0) = P Y ( < 240) = 0.5\nF ( ) x = P X ( ≤ x ) = P p Y ( ( − 240) ≤ x ) = P Y ( ≤ 240 + x / p ) = 0.5 + x / 480 p f ( ) x = 1/ 480 p\nand\nX X\n.\nThen,\n240 p\n2\nE Y ( ) = 0(0.5) + x / (480 p dx ) = (240 p ) / (960 p ) = 60 p\n∫\n0\n240 p\n2 2 2 3 2\nE Y ( ) = 0 (0.5) + x / (480 p dx ) = (240 p ) / (1440 p ) = 9600 p\n∫\n0\n2 2 2\n2000 = 9600 p − (60 p ) = 6000 p ⇒ p = 0.577.\n2000\nSo p = = 0.57735.\n6000"
    },
    {
        "id": 454,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses under an insurance policy are uniformly distributed on [0, 1000]. The policy has a\ndeductible of 400.\nA loss occurred for which the insurance benefit was less than 400.\nCalculate the probability that the benefit was more than 300.",
        "options": [
            "0.100",
            "0.125",
            "0.250",
            "0.750",
            "0.875"
        ],
        "answerLetter": "B",
        "answer": "0.125",
        "explanation": "Official solution: B\n\nP[claim > 300 | claim < 400] = P[loss > 700 | loss < 800] = P[700 < loss < 800] / P[loss < 800]\n= [(800 - 700)/(1000 - 0)] / [(800 - 0)/(1000 - 0)] = 0.125."
    },
    {
        "id": 455,
        "topic": "SOA Exam P Sample Question",
        "question": "Under a health insurance policy, 70% of the policyholders are low-risk and the other 30%\nare high-risk. For each low-risk policyholder, the number of hospitalizations experienced\nthis year is Poisson-distributed with mean 0.05. For each high-risk policyholder, the\nnumber of hospitalizations experienced this year is Poisson-distributed with mean 0.30.\nCalculate the probability that a randomly selected policyholder is low-risk, given that the\npolicyholder undergoes no hospitalizations this year.",
        "options": [
            "0.280",
            "0.666",
            "0.700",
            "0.750",
            "0.760"
        ],
        "answerLetter": "D",
        "answer": "0.750",
        "explanation": "Official solution: D\n\nL = event that policyholder is low risk\nH = event that policyholder is high risk\nN = event that policyholder undergoes no hospitalizations\nP[ ]=0.7, P[ L H ]=0.3\n− 0.05 − 0.3\nP[ N L | ] = e , P[ N H | ] = e\nP L P N [ ] [ | L ]\nP[ | L N ] =\nP L P N [ ] [ | L ] + P H P N [ ] [ | H ]\n− 0.05\n0.7 e\n= = 0.749756.\n− 0.05 − 0.3\n0.7 e + 0.3 e"
    },
    {
        "id": 456,
        "topic": "SOA Exam P Sample Question",
        "question": "In a group of ten patients, three have high blood pressure, six have normal blood\npressure, and one has low blood pressure.\nFour of these ten patients are randomly selected without replacement.\nCalculate the probability that exactly two of these four patients have normal blood\npressure.",
        "options": [
            "0.058",
            "0.071",
            "0.300",
            "0.346",
            "0.429"
        ],
        "answerLetter": "E",
        "answer": "0.429",
        "explanation": "Official solution: E\n\nThis is a hypergeometric probability:\n6 4\n’ ’’ ’\n’ ’’ ’\n2 2 ( 15 (6) )\n’ ’’ ’\n= = 0.42857.\n10\n’ ’ 210\n’ ’\n4\n’ ’"
    },
    {
        "id": 457,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X denote the number of illnesses a person experiences during a one-year period. The\nprobability function of X is:\nx Probability\n0 0.28\n1 0.12\n2 0.42\n3 0.18\nIf X = 0, then the person makes no doctor visits during the one-year period. If X = k , for\nk = 1, 2, 3, then the number of doctor visits is Poisson distributed with mean k .\nCalculate the probability that the person makes at least one doctor visit during the one-\nyear period.",
        "options": [
            "0.18",
            "0.39",
            "0.61",
            "0.72",
            "0.89"
        ],
        "answerLetter": "C",
        "answer": "0.61",
        "explanation": "Official solution: C\n\nThe probability of at least one visit is one minus the probability of no visits. The probability of\n− 1 0 − 2 0 − 3 0\ne 1 e 2 e 3\nno visits is 0.28 + 0.12 + 0.42 + 0.18 = 0.39 , so the answer is 1-0.39 = 0.61.\n0! 0! 0!"
    },
    {
        "id": 458,
        "topic": "SOA Exam P Sample Question",
        "question": "An investor wants to purchase a total of ten units of two assets, A and B, with annual\npayoffs per unit purchased of X and Y , respectively. Each asset has the same purchase\nprice per unit. The payoffs are independent random variables with equal expected values\nand with Var( X ) = 30 and Var( Y ) = 20.\nCalculate the number of units of asset A the investor should purchase to minimize the\nvariance of the total payoff.",
        "options": [
            "0",
            "2",
            "4",
            "5",
            "6"
        ],
        "answerLetter": "C",
        "answer": "4",
        "explanation": "Official solution: C\n\nLet u be the number of units of A purchased, and hence 10 – u is the number of units of B\npurchased.\nThe payoff will be uX + (10 – u ) Y . Because of independence,\n2 2 2\nVar uX ( + (10 − u Y ) ) = u 30 + (10 − u ) 20 = 50 u − 400 u + 2000.\nDifferentiating and setting the\nderivative to 0 to yields u = 4. The second derivative is positive, indicating it is a minimum."
    },
    {
        "id": 459,
        "topic": "SOA Exam P Sample Question",
        "question": "For its group life policies, an insurer models the number of claims per group as\nindependent Poisson random variables with common mean 16.\nThe insurer randomly selects 64 of its groups.\nCalculate the probability that the average number of claims per group is between 15 and\n18.",
        "options": [
            "0.29",
            "0.38",
            "0.95",
            "0.98",
            "1.00"
        ],
        "answerLetter": "D",
        "answer": "0.98",
        "explanation": "Official solution: D\n\nPoisson with mean of 16 means the variance is also 16 and the standard deviation is 4. Then for\nsamples of size 64, the mean for the average is 16 and the standard deviation for the average is\n4/8 = 0.5 Then using the normal approximation from the Central Limit Theorem:\n15 − 16 18 − 16\n’ ’\nP (15 < X < 18) = P < Z < = P ( 2 − < Z < 4) = 0.9772.\n’ ’\n0.5 0.5\n’ ’\nThe continuity correction is not needed. If it were, the adjustment would be 1/128, not 1/2."
    },
    {
        "id": 460,
        "topic": "SOA Exam P Sample Question",
        "question": "Claims under a product liability policy have the following characteristics:\ni) The number of claims does not exceed two.\nii) The probability that the number of claims is exactly one is 0.08.\niii) The probability that the number of claims is exactly two is 0.02.\niv) For n = 1 or 2 claims, the total claim amount under the policy is a random\nvariable X with cumulative distribution function\n500 n\n’ ’\nF ( x ) = 1 − , for x ≥ 500 n .\n’ ’\nx\n’ ’\nCalculate the probability that there is exactly one claim, given that there is at least one\nclaim and the total claim amount under the policy is less than or equal to 2000.",
        "options": [
            "1/2",
            "3/5",
            "2/3",
            "3/4",
            "6/7"
        ],
        "answerLetter": "E",
        "answer": "6/7",
        "explanation": "Official solution: E\n\nP N ( = 1, X ≤ 2000) = 0.08 P X ( ≤ 2000 | N = 1) = 0.08(3 / 4) = 0.06\nP N ( = 2, X ≤ 2000) = 0.08 P X ( ≤ 2000 | N = 2) = 0.02(1/ 2) = 0.01\nP N ( > 0, X ≤ 2000) = 0.06 + 0.01 = 0.07\nP N ( = 1, X ≤ 2000) 0.06\nP N ( = 1| N > 0, X ≤ 2000) = = = 6 / 7\nP N ( > 0, X ≤ 2000) 0.07"
    },
    {
        "id": 461,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of traffic tickets a driver receives this year is Poisson distributed. The\n− 1.5\ndriver’s probability of receiving no tickets is .\ne\nCalculate the probability that the driver receives at least four tickets this year, given that\nthe driver receives at least one ticket.",
        "options": [
            "0.066",
            "0.084",
            "0.138",
            "0.141",
            "0.250"
        ],
        "answerLetter": "B",
        "answer": "0.084",
        "explanation": "Official solution: B\n\nLet λ represent the mean number of tickets. Then,\n− λ 0\ne λ\n− 1.5 − λ\ne = P (0 tickets) = = e , so λ = 1.5\n0!\nP X ( ≥ 4)\nP X ( ≥ 4 | X ≥ 1) = =\nP X ( ≥ 1)\n1 − (P(0) + P(1) + P(2) + P(3)) 0.06564\n= = 0.8449.\n1 − P(0) 0.77687"
    },
    {
        "id": 462,
        "topic": "SOA Exam P Sample Question",
        "question": "Each person in a large population independently has probability p of testing positive for\ndiabetes, 0 < p < 1. People are tested for diabetes, one person at a time, until a test is\npositive. Individual tests are independent.\nDetermine the probability that m or fewer people are tested, given that n or fewer people\nare tested, where 1 ≤ m ≤ n .\nm",
        "options": [
            "n m − n",
            "( 1 − p ) m",
            "1 − ( 1 − p ) m 1 − p",
            "n 1 − p m 1 − ( 1 − p )",
            "n ( ) 1 − 1 − p"
        ],
        "answerLetter": "E",
        "answer": "n ( ) 1 − 1 − p",
        "explanation": "Official solution: E\n\nLet X = number of people tested until a diabetic is found\nThen X is geometric with success parameter p .\nm m\nk − 1\nP ( X = k ) p 1 − p\n( )\nm\n∑ ∑\n1 − 1 − p\nP ( X ≤ m ) ( )\nk = 1 k = 1\nP ( X ≤ m | X ≤ n ) = = = = .\nn n n\nP ( X ≤ n ) k − 1\n1 − ( 1 − p )\nP ( X = k ) p ( 1 − p )\n∑ ∑\nk = 1 k = 1"
    },
    {
        "id": 463,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of brake repair jobs a particular bus needs in a year is modeled by a Poisson\ndistribution. The probability that the bus needs at least one brake repair job this year is\n0.10.\nCalculate the probability that the bus needs at least two brake repair jobs this year.",
        "options": [
            "0.0052",
            "0.0100",
            "0.0500",
            "0.1054",
            "0.3303"
        ],
        "answerLetter": "A",
        "answer": "0.0052",
        "explanation": "Official solution: A\n\nx − λ\nλ e\nP X ( = x ) =\nLet X = number of brake jobs needed. Then, .\nx !\n− λ\nP( X = 0) = 0.9 = e ; λ = − ln 0.9\n− λ − λ\nP( X ≥ 2) = 1 − P( X = 0) − P( X = 1) = 1 − e − e λ = 0.00518."
    },
    {
        "id": 464,
        "topic": "SOA Exam P Sample Question",
        "question": "The loss due to an injury in a certain sport is uniformly distributed on an interval.\nth\nThe interquartile range of a random variable is defined as the difference between its 75\nth\nand 25 percentiles.\nDetermine the correct statement about the ratio of the standard deviation to the\ninterquartile range of the loss due to a given injury in that sport.",
        "options": [
            "The ratio is 1: 3 , regardless of the endpoints of the interval.",
            "The ratio is 1:1, regardless of the endpoints of the interval.",
            "The ratio is 2 : 3 , regardless of the endpoints of the interval.",
            "The ratio depends on the length of the interval.",
            "The ratio depends on the location of the center of the interval."
        ],
        "answerLetter": "A",
        "answer": "The ratio is 1: 3 , regardless of the endpoints of the interval.",
        "explanation": "Official solution: A\n\nThe variance for a uniform distribution is the square of the interval length, divided by 12.\nThe standard deviation is the interval length, divided by 12 .\nSince the distribution is uniform and 75% – 25% = 50%, the interquartile range is half the\ninterval length.\nThe interval length cancels in the ratio of standard deviation to interquartile range, so this ratio is\n1\n1\n12\n= 1: 3\n, or .\n1\n3\n2"
    },
    {
        "id": 465,
        "topic": "SOA Exam P Sample Question",
        "question": "Homeowner losses due to tornado damage are exponentially distributed with standard\ndeviation σ. A homeowners policy covers tornado losses in full, subject to a deductible.\nThe probability that a random loss exceeds the deductible by at least σ is 0.20.\nCalculate the probability that a random loss exceeds the deductible by at least 0.5σ.",
        "options": [
            "0.33",
            "0.40",
            "0.46",
            "0.54",
            "0.60"
        ],
        "answerLetter": "A",
        "answer": "0.33",
        "explanation": "Official solution: A\n\nFor an exponential distribution, the mean is equal to the standard deviation. Hence, the\n− x / σ\nF x ( ) = 1 − e .\ndistribution function is Then,\n− ( d + σ )/ σ − d / σ − 1\nP L ( > d + σ ) = e = e e\n− ( d + 0.5 σ )/ σ − d / σ − .5 − d / σ − 1 0.5 0.5\nP L ( > d + 0.5 σ ) = e = e e = e e e = (0.20) e = 0.3297."
    },
    {
        "id": 466,
        "topic": "SOA Exam P Sample Question",
        "question": "An individual buys an automobile policy and a homeowners policy for one year. The\nprobability of an automobile claim is 0.10 and the probability of a homeowners claim is\n0.05. Neither policy can have more than one claim. The correlation between the\nnumbers of claims on these policies is 0.30.\nCalculate the probability that both policies will have a claim.",
        "options": [
            "0.005",
            "0.006",
            "0.025",
            "0.033",
            "0.045"
        ],
        "answerLetter": "C",
        "answer": "0.025",
        "explanation": "Official solution: C\n\nLet X = automobile claims and Y = homeowners claims. X and Y are binomial with n = 1.\nNote that and thus E( XY ) is the solution.\nE( XY ) = 1(1) Pr( X = 1, Y = 1)\nE( XY ) − E( X )E( Y )\nρ = 0.30 =\nσ σ\nX Y\nσ = 0.1(1 − 0.1) = 0.30\nX\nσ = 0 . 05 ( 1 − 0 . 05 ) = 0 . 218\nY\nE( XY ) − (0.1)(0.05)\n0.30 = ⇒ E( XY ) = 0.025\nThen\n(0.30)(0.218)\nE ( XY ) = 0 . 025\nAnd"
    },
    {
        "id": 467,
        "topic": "SOA Exam P Sample Question",
        "question": "Within a fleet of aircraft, planes are subject to mechanical inspection. For a randomly\nselected airplane, let X denote the number of inspections in the past year and Y the\nnumber of repairs. The joint probability function of X and Y is given by\nx − 2 y − xy + 3\n’\n, for x = 1, 2,3 and y = 0,1\n’\np x y ( , ) = ’\n18\n’\n0, otherwise.\n’\nY\n’ ’\nCalculate the expected number of repairs per inspection, E .\n’ ’\nX\n’ ’",
        "options": [
            "3/38",
            "11/108",
            "11/36",
            "1/2",
            "11/18"
        ],
        "answerLetter": "B",
        "answer": "11/108",
        "explanation": "Official solution: B\n\nThe solution is the sum of ( y / x ) p ( x , y ) over the six combinations of x and y . Because the three\ncases where y = 0 contribute nothing to the total, the solution is\n(1/1)(1/18) + (1/2)(1/18) + (1/3)(1/18) = (6 + 3 + 2)/108 = 11/108."
    },
    {
        "id": 468,
        "topic": "SOA Exam P Sample Question",
        "question": "Drivers are classified as either high-risk or low-risk. Ten percent of drivers are classified\nas high-risk. The risk classification of each driver remains the same from this year to next\nyear.\nThe probability that a driver classified as high-risk is involved in an accident is 0.12 for\nthis year and, independently, 0.12 for next year. The probability that a driver classified\nas low-risk is involved in an accident is 0.05 for this year and, independently, 0.05 for\nnext year.\nCalculate the probability that a driver is involved in an accident next year, given that the\ndriver is involved in an accident this year.",
        "options": [
            "0.004",
            "0.014",
            "0.057",
            "0.065",
            "0.099 th"
        ],
        "answerLetter": "D",
        "answer": "0.065",
        "explanation": "Official solution: D\n\nLet H be the event that a driver is high-risk and L be the event that a driver is low-risk.\nLet T be the event that a driver has an accident this year and N be the event that the same driver\nhas an accident next year. Then,\nP N [ ∩ T ] P N [ ∩ T | H P H ] [ ] + P N [ ∩ T | L P L ] [ ]\nP N T [ | ] = =\nP T [ ] P T [ | H P H ] [ ] + P T [ | L P L ] [ ]\nP N [ | H P T ] [ | H P H ] [ ] + P N [ | L P T ] [ | L P L ] [ ]\n=\nP T [ | H P H ] [ ] + P T [ | L P L ] [ ]\n2 2\n(0.12) (0.10) + (0.05) (0.90)\n= =\n0.6474.\n(0.12)(0.10) + (0.05)(0.90)"
    },
    {
        "id": 469,
        "topic": "SOA Exam P Sample Question",
        "question": "Random variable X follows a uniform distribution with mean 12 and 75 percentile 18.\nCalculate Var ( X ).",
        "options": [
            "24",
            "36",
            "48",
            "144",
            "192"
        ],
        "answerLetter": "C",
        "answer": "48",
        "explanation": "Official solution: C\n\nLet a and b be the end points of the range for this uniform distribution. Then,\na + b\n12 = ⇒ a + b = 24\n2\n18 = 0.75 b + 0.25 a ⇒ 3 b + a = 72\n2 b = 48\nb = 24\na = 0\n2\nVar = (24 − 0) /12 = 48."
    },
    {
        "id": 470,
        "topic": "SOA Exam P Sample Question",
        "question": "The random variable X follows a distribution with probability function\nx\n1 4\n’ ’’ ’\np x ( ) = , for x = 0,1, 2,....\n’ ’’ ’\n5 5\n’ ’’ ’\nCalculate .\nVar ( X | X > 1 )",
        "options": [
            "13",
            "16",
            "20",
            "22",
            "24"
        ],
        "answerLetter": "C",
        "answer": "20",
        "explanation": "Official solution: C\n\n2\nP X > 1 = 1 − P X ( = 0) − P X ( = 1) = 1 − 1/ 5 − (1/ 5)(4 / 5) = 16 / 25 = (4 / 5)\n( ) ,\nx − 2\n1 4\n’ ’’ ’\nso the conditional probability function is\n, for x = 2,3, 4,....\n’ ’’ ’\n5 5\n’ ’’ ’\nThis is the unconditional probability function shifted to the right by 2. Thus, the conditional\nprobability distribution has the same variance as the unconditional probability distribution, which\nis a geometric distribution with variance (4/5)/(1/5) = 20.."
    },
    {
        "id": 471,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy insures against two perils. Let X and Y be the number of monthly\nclaims for each of these perils. The joint probability function of X and Y is given by\n2 x + y + 1\np ( x , y ) = , for x = 0 , 1 , 2 and y = 0 , 1 , 2 .\n36\nCalculate the variance of the marginal distribution of X .",
        "options": [
            "0.56",
            "0.64",
            "0.75",
            "0.80",
            "0.89"
        ],
        "answerLetter": "A",
        "answer": "0.56",
        "explanation": "Official solution: A\n\nx = 0 1 2\ny = 0 1/36 3/36 5/36\n1 2/36 4/36 6/36\n2 3/36 5/36 7/36\np ( x ) 6/36 12/36 18/36\nE X = + + =\n( ) 0(6 / 36) 1(12 / 36) 2(18 / 36) 4 / 3\n2\nE X ( ) = 0(6 / 36) + 1(12 / 36) + 4(18 / 36) = 7 / 3\n2\nV X ( ) = (7 / 3) − (4 / 3) = 5 / 9 = 0.556"
    },
    {
        "id": 472,
        "topic": "SOA Exam P Sample Question",
        "question": "Basketball team Z has a 60% chance of winning any particular game. The team plays n\ngames this season, where n > 1, with the outcomes of these games being mutually\nindependent. The probability that the team wins exactly three games this season is five\ntimes the probability that the team wins exactly two games this season.\nCalculate n .",
        "options": [
            "6",
            "8",
            "10",
            "12",
            "14"
        ],
        "answerLetter": "D",
        "answer": "12",
        "explanation": "Official solution: D\n\nn n\n’ ’ ’ ’\n3 n − 3 2 n − 2\n(0.6) (0.4) = 5 (0.6) (0.4)\n’ ’ ’ ’\n3 2\n’ ’ ’ ’\nn ! n !\n3 n − 3 2 n − 2\n(0.6) (0.4) = 5 (0.6) (0.4)\n( n − 3)!3! ( n − 2)!2!\n1 1\n(0.6) = 5 (0.4)\n6 ( n − 2)2\n1\n0.1 =\nn − 2\nn = 12"
    },
    {
        "id": 473,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses under a boat insurance policy are uniformly distributed on the interval [0, 1]. The\npolicy has a fixed deductible.\nThe expected value of the claim payment on a given loss is 0.245.\nCalculate the variance of the claim payment on a given loss.",
        "options": [
            "0.020",
            "0.054",
            "0.062",
            "0.083",
            "0.114"
        ],
        "answerLetter": "B",
        "answer": "0.054",
        "explanation": "Official solution: B\n\nLet X represent the loss, which is uniformly distributed on the interval [0, 1], let d represent the\ndeductible, and let Y represent the claim on this loss. Note that we are given that 0 < d < 1.\nNote that Y = max(0, X − d ). So Y = 0 with probability d , and is uniformly distributed on the\ninterval [0, 1 − d ] with probability 1 − d . Thus the expected value of the claim payment is\n2\n0 + 1 − d (1 − d )\n’ ’\n0.245 = E Y = d (0) + (1 − d ) =\n( ) .\n’ ’\n2 2\n’ ’\nKeeping in mind that 0 < d <1, 1 − d = 0.49 = 0.7.\nThe expected value of the square of the claim payment is\n3\n1 − d\n2\n1 − d\ny dy ( )\n2 2\nE Y = d (0) + (1 − d ) =\n( ) .\n∫\n1 − d 3\n0\nThe variance of the claim payment on a given loss is\n2\n3 2\n3 4\n’ ’\n2 ( 1 − d ) ( 1 − d )\n0.7 0.7\n2\nVar Y = E Y − ’ E Y ’ = − ’ ’ = − = 0.0543.\n( ) ( )\n( )\n’ ’\n3 2 3 4\n’ ’\n’ ’"
    },
    {
        "id": 474,
        "topic": "SOA Exam P Sample Question",
        "question": "A motorist currently has no traffic tickets.\nThe amount of time between now and when the motorist receives the first ticket is\nexponentially distributed with mean 0.80 years.\nThe motorist plans to drive more carefully after receiving the first ticket. Hence the mean\ntime from the first ticket to the second is greater than 0.80. The amount of time between\nthe first ticket and the second ticket is exponentially distributed and is independent of\nwhen the motorist receives the first ticket.\nThe variance of the number of years from now until the second ticket is 2.65.\nCalculate the expected amount of time, in years, between the motorist's first and second\ntraffic tickets.",
        "options": [
            "0.83",
            "0.96",
            "1.42",
            "1.85",
            "2.01"
        ],
        "answerLetter": "C",
        "answer": "1.42",
        "explanation": "Official solution: C\n\nLet X represent the amount of time (in years) between now and the first ticket.\nLet Y represent the amount of time (in years) between the first ticket and the second ticket.\nX and Y are independent and exponentially distributed with means 0.8 and μ > 0.8, respectively.\nThe variance of an exponential distribution is the square of its mean, and the variance of a sum\nof independent random variables is the sum of the variances. Therefore, the variance of the\nnumber of years from now to the second ticket is\n2 2\n2\n2.65 = Var X ( + Y ) = Var X ( ) + Var Y ( ) = 0.8 + μ\n. Thus, .\nμ = 2.65 − (0.8) = 1.418."
    },
    {
        "id": 475,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X represent the number of defective parts in a shipment of four.\n2\n1 x − 2\n’ ’\nP[ X ≥ x ] = 1 − , for x = 1, 2, 3, 4.\n’ ’\n4 3\n’ ’\nCalculate E( X ).",
        "options": [
            "0.83",
            "0.96",
            "1.39",
            "1.81",
            "1.83"
        ],
        "answerLetter": "A",
        "answer": "0.83",
        "explanation": "Official solution: A\n\n’ 1 − P X ( ≥ 1) = 1 − 0.444 = 0.556, for x = 0\n’\nP X ( ≥ 1) − P X ( ≥ 2) = 0.444 − 0.250 = 0.194, for x = 1\n’\n’\np x ( ) = P X ( ≥ 2) − P X ( ≥ 3) = 0.250 − 0.111 = 0.139, for x = 2\n’\n’\nP X ( ≥ 3) − P X ( ≥ 4) = 0.111 − 0.028 = 0.083, for x = 3\n’\nP X ( ≥ 4) = 0.028, for x = 4\n’\n’\nE( X ) = 0(0.556) + 1(0.194) + 2 (0.139) + 3(0.083) + 4(0.028) = 0.833."
    },
    {
        "id": 476,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurer sells an annual group life and disability policy.\nThe joint probability distribution for death and disability is:\nAnnual Number of Deaths\n0 1 2 3 4\n0 0.45 0.09 0.03 0.01 0.01\nAnnual\n1 0.08 0.06 0.02 0.01 0.01\nNumber of\n2 0.07 0.05 0.02 0.01 0.00\nDisabilities\n3 0.04 0.02 0.01 0.01 0.00\nCalculate the probability of at least two disabilities, given no more than one death.",
        "options": [
            "0.14",
            "0.17",
            "0.18",
            "0.21",
            "0.32"
        ],
        "answerLetter": "D",
        "answer": "0.21",
        "explanation": "Official solution: D\n\nAdd the probabilities for number of deaths less than 2. Add the probabilities for number of\ndeaths less than 2 and number of disabilities at least 2. Divide second sum by first sum.\n0.18\n= 0.20930.\n0.86"
    },
    {
        "id": 477,
        "topic": "SOA Exam P Sample Question",
        "question": "The time, in years, until replacement for a new telephone pole has probability density\nfunction\nkt , for 0 < t < 20\n’\nf t ( ) = ’\n0, otherwise,\n’\nwhere k is a constant.\nCalculate the probability that a new telephone pole will be replaced within ten years\ngiven that it is not replaced within five years.",
        "options": [
            "0.19",
            "0.20",
            "0.25",
            "0.33",
            "0.94"
        ],
        "answerLetter": "B",
        "answer": "0.20",
        "explanation": "Official solution: B\n\nP T [ ≤ 10 | T ≥ 5] = P[5 ≤ T ≤ 10] / P[ T ≤ 5]\n10\n10\n2\nktdt\nt\n75\n∫\n5 5\n= = = 0.20\n20 20\n2\n375\nt\nktdt\n∫\n5\n5"
    },
    {
        "id": 478,
        "topic": "SOA Exam P Sample Question",
        "question": "A company provides health insurance to employees located at four different plants.\nHealth insurance costs at each plant are independent of those costs at any other plant.\nPlant managers have calculated the following statistics:\nAverage Standard\nPlant\nCost Deviation\n1 2 1\n2 2 2\n3 5 3\n4 7 4\nCalculate the standard deviation of the total company health insurance costs.",
        "options": [
            "2.5",
            "5.5",
            "7.5",
            "10.0",
            "12.5"
        ],
        "answerLetter": "B",
        "answer": "5.5",
        "explanation": "Official solution: B\n\nThe variance of the sum of independent random variables is the sum of the individual variances.\n2 2 2 2\nSo the variance of the total health insurance cost is 1 + 2 + 3 + 4 = 30 . The standard\ndeviation of the total cost is the square root: 30 = 5.4772."
    },
    {
        "id": 479,
        "topic": "SOA Exam P Sample Question",
        "question": "A patient must undergo hospitalization and surgery. The hospitalization and surgery\ncharges are modeled by random variables uniformly distributed on the intervals [0, c ]\nand [0, 3 c − 18] , respectively, where c is a constant larger than 6.\nThe standard deviation of the hospitalization charge is 4 3 .\nCalculate the standard deviation of the surgery charge.",
        "options": [
            "2.8",
            "7.3",
            "10.4",
            "15.6",
            "20.8"
        ],
        "answerLetter": "D",
        "answer": "15.6",
        "explanation": "Official solution: D\n\n1\nThe variance of a uniform distribution is of the square of the interval length. For the\n12\nc\n= 4 3\nhospitalization charge: , so that c = 24.\n12\n3 c − 18 ’ 3(24) − 18 ’ 54\nThe standard deviation of the surgery charge is = = = 15.5885.\n’ ’\n12 12 12\n’ ’"
    },
    {
        "id": 480,
        "topic": "SOA Exam P Sample Question",
        "question": "In a group of 144 car insurance policyholders, each policyholder has no accidents this\nyear with probability 0.80, one accident with probability 0.16, and two accidents with\nprobability 0.04.\nThe numbers of accidents this year for different policyholders are mutually independent.\nCalculate the variance of the total number of accidents this year for this group of\npolicyholders.",
        "options": [
            "3.15",
            "34.56",
            "37.79",
            "46.08",
            "54.37"
        ],
        "answerLetter": "C",
        "answer": "37.79",
        "explanation": "Official solution: C\n\nFor one policyholder\nE X ( ) = 0.8(0) + 0.16(1) + 0.04(2) = 0.24\n2\nE X ( ) = 0.08(0) + 0.16(1) + 0.04(4) = 0.32\n2\nVar X ( ) = 0.32 − 0.24 = 0.2624.\nBecause they are independent, the variance of the sum is the sum of the variances: 144(0.2624) =\n37.7856."
    },
    {
        "id": 481,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of days required for a damage control team to locate and repair a leak in the\nhull of a ship is modeled by a discrete random variable, N . N is uniformly distributed on\n{1, 2, 3, 4, 5}.\n2\nThe cost of locating and repairing a leak is N + N + 1.\nCalculate the expected cost of locating and repairing a leak in the hull of the ship.",
        "options": [
            "11",
            "12",
            "13",
            "14",
            "15"
        ],
        "answerLetter": "E",
        "answer": "15",
        "explanation": "Official solution: E\n\nEach value has probability 0.2.\nE N ( ) = 1(0.2) + 2(0.2) + 3(0.2) + 4(0.2) + 5(0.2) = 3\n2\nE N ( ) = 1(0.2) + 4(0.2) + 9(0.2) + 16(0.2) + 25(0.2) = 11\n2 2\nE (Cost) = E N ( + N + 1) = E N ( ) + E N ( ) + 1 = 11 + 3 + 1 = 15."
    },
    {
        "id": 482,
        "topic": "SOA Exam P Sample Question",
        "question": "A flight is delayed due to bad weather. The delay time is modeled by a random variable\nwith a continuous uniform distribution. The expected delay time is three hours, and the\nstandard deviation of the delay time is one hour.\nCalculate the shortest possible delay time, in hours.",
        "options": [
            "0.58",
            "1.27",
            "1.73",
            "2.31",
            "2.42"
        ],
        "answerLetter": "B",
        "answer": "1.27",
        "explanation": "Official solution: B\n\na + b\nE X ( ) = = 3\n2\na + b = 6\nb = 6 − a\n2\n( b − a )\n2\nV X ( ) = = 1 = 1\n12\n2\n(6 − a − a )\n= 1\n12\na = 1.26795."
    },
    {
        "id": 483,
        "topic": "SOA Exam P Sample Question",
        "question": "A doctor tests 100 patients for two diseases, A and B. Each patient has probability p of\nhaving disease A and probability p of having disease B, with .\n0 ≤ p ≤ 0.50\nFor each patient, the event of having disease A and the event of having disease B are\nindependent. The test outcomes for different patients are mutually independent.\nThe variance of the number of patients who have disease A is 9.00.\nCalculate the variance of the number of patients who have at least one of the two\ndiseases.",
        "options": [
            "15.39",
            "1600",
            "16.59",
            "17.19",
            "18.00"
        ],
        "answerLetter": "A",
        "answer": "15.39",
        "explanation": "Official solution: A\n\nThe number who test positive for disease A has a binomial distribution with n = 100 and p . Then\n9 = 100 p (1 – p ) which implies that p = 0.1 (0.9 is also a solution but we are given that p is\nbetween 0 and 0,5.\nThe probability of having at least one disease is 1 minus the probability of neither having the\ndisease. Thus, this probability is 1 – 0.9(0.9) = 0.19. The variance for 100 patients is\n100(0.19)(0.81) = 15.29."
    },
    {
        "id": 484,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company has customer service operations in Denver, Philadelphia, and Salt\nLake City.\nEmployee salaries in Denver are uniformly distributed from 25 to 90. Employee salaries\nin Philadelphia are uniformly distributed from 45 to x . Employee salaries in Salt Lake\nCity are uniformly distributed from 10 to x /3.\nth th\nThe 40 percentile of Denver salaries is equal to the 20 percentile of Philadelphia\nsalaries.\nCalculate the median of Salt Lake City employee salaries .",
        "options": [
            "12.5",
            "17.5",
            "25.0",
            "35.0",
            "60.0"
        ],
        "answerLetter": "B",
        "answer": "17.5",
        "explanation": "Official solution: B\n\nth\nThe 40 percentile for Denver is at 0.6(25) + 0.4(90) = 51.\nth\nThe 20 percentile for Philadelphia is at 0.8(45) + 0.2 x = 36 + 0.2 x .\nEquating them yields x = 75.\nTherefore, Salt Lake City salaries are uniform from 10 to 25 and the median is (10 + 25)/2 =\n17.5."
    },
    {
        "id": 485,
        "topic": "SOA Exam P Sample Question",
        "question": "The loss due to a warehouse robbery is modeled by a uniform distribution on the interval\n, where a is a positive constant.\na , 2 a\n[ ]\nth th\nThe ratio of the 40 percentile of the loss to the p percentile of the loss equals the ratio\nth th\nof the p percentile of the loss to the 80 percentile of the loss.\nCalculate p .",
        "options": [
            "56.6",
            "58.7",
            "60.0",
            "61.4",
            "65.4"
        ],
        "answerLetter": "B",
        "answer": "58.7",
        "explanation": "Official solution: B\n\nth\nThe 40 percentile is at 0.6 a + 0.4(2 a ) = 1.4 a .\nth\nThe 80 percentile is at 0.2 a + 0.8(2 a ) = 1.8 a .\nThe p th percentile (treating p is a decimal) is at (1 – p ) a + p (2 a ) = a + pa = (1 + p ) a .\nThen,\n1.4 a (1 + p a )\n=\n(1 + p a ) 1.8 a\n2\n1.4(1.8) = (1 + p )\n1.58745 = 1 + p\np = 0.58745 = 58.7%."
    },
    {
        "id": 486,
        "topic": "SOA Exam P Sample Question",
        "question": "A study of fire damage claims is conducted. Claim amounts are mutually independent\nand each claim amount exceeds 1000 with probability 0.20.\nCalculate the probability that at least one of three randomly selected claim amounts\nexceeds 1000.",
        "options": [
            "0.472",
            "0.488",
            "0.512",
            "0.528",
            "0.600"
        ],
        "answerLetter": "B",
        "answer": "0.488",
        "explanation": "Official solution: B\n\nThe number of such claims, N , is binomial with n = 3 and p = 0.2.\n3\nP N ( > 0) = 1 − P N ( = 0) = 1 − 0.8 = 0.488"
    },
    {
        "id": 487,
        "topic": "SOA Exam P Sample Question",
        "question": "A group of students will take Exam 1. Those who pass Exam 1 will take Exam 2. Those\nwho also pass Exam 2 will take Exam 3. For the initial group, the probability of passing\nExam 1 is 0.80, the probability of passing Exams 1 and 2 is 0.48, and the probability of\npassing Exams 1, 2, and 3 is 0.36. A student who fails an exam stops taking exams.\nCalculate the probability that a student of this group passes Exam 2, given that the\nstudent does not pass all three exams.",
        "options": [
            "0.12",
            "0.19",
            "0.25",
            "0.64",
            "0.75"
        ],
        "answerLetter": "B",
        "answer": "0.19",
        "explanation": "Official solution: B\n\nThe denominator is the probability of not passing all three exams, which is 1 – 0.36 = 0.64. The\nnumerator is the probability of passing Exam 2 and not passing Exam 3. This is 0.48 – 0.36 =\n0.12. The desired conditional probability is 0.12/0.64 = 0.1875."
    },
    {
        "id": 488,
        "topic": "SOA Exam P Sample Question",
        "question": "A representative of a market research firm contacts consumers by phone to conduct\nsurveys. The specific consumer contacted by each phone call is randomly determined.\nThe probability that a phone call produces a completed survey is 0.25.\nCalculate the probability that the eighth phone call produces the third completed survey.",
        "options": [
            "0.03",
            "0.08",
            "0.13",
            "0.21",
            "0.31"
        ],
        "answerLetter": "B",
        "answer": "0.08",
        "explanation": "Official solution: B\n\nLet N denote the number of the phone call that produced the third completed survey. For N = 8,\nthe preceding seven surveys must produce exactly two completed surveys. This is a binomial\n7\n’ ’\n2 5\nprobability, The eighth call must result in a completed survey, so\n(0.25) (0.75) = 0.31146.\n’ ’\n2\n’ ’\nthe total probability is 0.31146(0.25) = 0.078. A direct solution can be obtained by recognizing\nthis is a negative binomial random variable and remembering the probability function."
    },
    {
        "id": 489,
        "topic": "SOA Exam P Sample Question",
        "question": "The amount of loss under an insurance policy is uniformly distributed on [10, 60]. The\ninsurer will reimburse the full amount of the loss up to a maximum benefit. The expected\nbenefit per loss is equal to 31.\nCalculate the maximum benefit under the policy.",
        "options": [
            "35",
            "38",
            "40",
            "52",
            "56"
        ],
        "answerLetter": "C",
        "answer": "40",
        "explanation": "Official solution: C\n\nLet b = maximum benefit. Then,\n2 2 2\nb 60\nb − 10 60 − b − b + 120 b − 100\n31 = x / 50 dx + b / 50 dx = + b =\n∫ ∫\n10 b\n100 50 100\n2\n3100 = − b + 120 b − 100\n2\nb − 120 b + 3200 = 0\n( b − 40)( b − 80) = 0.\nThe only feasible solution is b = 40."
    },
    {
        "id": 490,
        "topic": "SOA Exam P Sample Question",
        "question": "A person mails four packages. Two are fragile and two are not.\nEach fragile package has probability 0.2 of breaking; each non-fragile package has\nprobability 0.1 of breaking. The occurrences of packages breaking are mutually\nindependent.\nExactly two packages break.\nCalculate the probability that both broken packages were fragile.",
        "options": [
            "0.032",
            "0.040",
            "0.167",
            "0.336",
            "0.609"
        ],
        "answerLetter": "D",
        "answer": "0.336",
        "explanation": "Official solution: D\n\nLet X = # of fragile packages that break; Y = # of non-fragile packages that break. For the\ndenominator,\nP( X + Y = 2) = P( X = 2)P( Y = 0) + P( X = 1)P( Y = 1) + P( X = 0)( Y = 2)\n= [(0.2)(0.2)][(0.9)(0.9)] + [2(0.8)(0.2)][2(0.1)(0.9)] + [(0.8)(0.8)][(0.1)(0.1)] = 0.0964.\nFor the numerator,\nP( X = 2 and X + Y = 2) = P( X = 2 and Y = 0) = (0.2)(0.2)(0.9)(0.9) = 0.0324.\nThe conditional probability is 0.0324/0.0964 = 0.336."
    },
    {
        "id": 491,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X be a random variable with cumulative distribution function\n’ 0 , x < 0\n’\n1\n3\n’\nx , 0 ≤ x < 1\n’\n2\nF ( x ) =\n’\n2\nx\n’\n2 x − − 1 , 1 ≤ x ≤ 2\n’\n2\n’\n1 , x > 2 .\n’\nCalculate E( X ).",
        "options": [
            "3/8",
            "25/48",
            "2/3",
            "1",
            "25/24"
        ],
        "answerLetter": "E",
        "answer": "25/24",
        "explanation": "Official solution: E\n\n0 , x < 0\n’\n’\n3\n2\n’\nx , 0 ≤ x < 1\n’\nThe density function is .\nf ( x ) =\n2\n’\n’\n2 − x , 1 ≤ x ≤ 2\n’\n’ 0 , x > 2\n’\nThe expected value is\n1 2\n3 3 2 25\n3\n.\nE X ( ) = x dx + x (2 − x dx ) = + =\n∫ ∫\n0 1\n2 8 3 24"
    },
    {
        "id": 492,
        "topic": "SOA Exam P Sample Question",
        "question": "A machine’s lifetime X , in years, is modeled by an exponential distribution. The\nprobability that the machine still functions after one year is 0.80.\nF is the cumulative distribution function for X .\nDetermine F ( x ) for x ≥ 0 .\nx",
        "options": [
            "F x ( ) = 0.8 x − 0.8 x",
            "F x ( ) = 0.8 e x",
            "F x ( ) = 1 − 0.8 − 0.8 x",
            "F x ( ) = 1 − e − 0.8 x",
            "F x ( ) = e"
        ],
        "answerLetter": "C",
        "answer": "F x ( ) = 1 − 0.8 − 0.8 x",
        "explanation": "Official solution: C\n\nLet X = machine’s lifetime.\n− λ\n0.80 = P X [ > 1] = e\n− λ x x\nF x ( ) = P X [ ≤ x ] = 1 − e = 1 − 0.80 ."
    },
    {
        "id": 493,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurer sells a group life and disability policy.\nThe joint probability distribution for death and disability is given in the table below.\nNumber of Deaths\n0 1 2 3 4\n0 0.51 0.09 0.04 0.01 0.01\nNumber of\n1 0.08 0.06 0.02 0.01 0.01\nDisabilities\n2 0.04 0.03 0.01 0.01 0.00\n3 0.03 0.02 0.01 0.01 0.00\nCalculate the probability of at least two disabilities given no more than one death.",
        "options": [
            "0.12",
            "0.14",
            "0.15",
            "0.25",
            "0.75"
        ],
        "answerLetter": "B",
        "answer": "0.14",
        "explanation": "Official solution: B\n\n0.04 + 0.03 + 0.03 + 0.02 0.12\nP[Dis ≥ 2 | Death ≤ 1] = = = 0.1395.\n0.51 + 0.09 + 0.08 + 0.06 + 0.04 + 0.03 + 0.03 + 0.02 0.86"
    },
    {
        "id": 494,
        "topic": "SOA Exam P Sample Question",
        "question": "Each of the twelve employees of a company independently has the same probability of\nbeing accident-free this year.\nThe expected number of accident-free employees is 9.\nCalculate the variance of the number of accident-free employees this year.",
        "options": [
            "0.75",
            "1.50",
            "2.25",
            "9.00",
            "12.00"
        ],
        "answerLetter": "C",
        "answer": "2.25",
        "explanation": "Official solution: C\n\nLet X represent the number of accident-free employees; X is binomially distributed.\nLet n = number of employees = 12.\nLet p = the probability that a given employee is accident-free this year.\n9 = E( X ) = np = 12 p , so p = 0.75.\nVar( X ) = np (1 – p ) = 9(1 – 0.75) = 2.25."
    },
    {
        "id": 495,
        "topic": "SOA Exam P Sample Question",
        "question": "The heights, in feet, of basketball players in a city league are modeled by a random\nvariable, X , with probability density function\n2\n’\n3( x − 6)\n’ , for 5 < x < 7\nf ( ) x = ’\n2\n’\n0, otherwise.\n’\nCalculate Var( X ).",
        "options": [
            "0.33",
            "0.60",
            "2.00",
            "4.00",
            "6.00"
        ],
        "answerLetter": "B",
        "answer": "0.60",
        "explanation": "Official solution: B\n\n7\n7 7 4\n’ ’\n3 3 x\n3 2 3 2\nE X [ ] = xf ( ) x dx = ( x − 12 x + 36 ) x dx = − 4 x + 18 x\n’ ’\n∫ ∫\n2 2 4\n5 5 ’ ’\n5\n4 4 3 3 2 2\n= 1.5[(7 − 5 ) / 4 − 4(7 − 5 ) + 18(7 − 5 )] = 6\n7\n7 7\n5\n3 3 ’ x ’\n2 2 4 3 2 4 3\nE X [ ] = x f ( ) x dx = ( x − 12 x + 36 x ) dx = − 3 x + 12 x\n’ ’\n∫ ∫\n2 2 5\n’ ’\n5 5\n5\n5 5 4 4 3 3\n= 1.5[(7 − 5 ) / 5 − 3(7 − 5 ) + 12(7 − 5 )] = 36.6\n2\nVar ( X ) = 36.6 − 6 = 0.60"
    },
    {
        "id": 496,
        "topic": "SOA Exam P Sample Question",
        "question": "Three identical machines are purchased simultaneously and are still operating after one\nyear. The manufacturer then buys an insurance policy that pays 1000 if any of the three\nmachines fails during the second year of use. The three machines operate independently.\nThe age at failure, in years, for each of these machines has cumulative distribution\nfunction\n1\n’\n1 4\n’ ’\n’\n1 − , for x ≥ 1\n’ ’\nF ( x ) =\n’\nx\n’ ’\n’\n0 , otherwise.\n’\nNote that x ≥ 1 because each machine has already successfully completed one year of\noperation.\nCalculate the expected claim payment for this policy.",
        "options": [
            "4",
            "159",
            "405",
            "595",
            "996"
        ],
        "answerLetter": "C",
        "answer": "405",
        "explanation": "Official solution: C\n\n1/4\nF (2) = 1 − (1/ 2) = 0.1591.\nThe probability that a machine fails in the second year is\nThe probability that at least one machine fails is the complement of the probability of no\n3\n1 − (1 − 0.1591) = 0.4054.\nmachines failing, The expected payment is 1000(0.4054) = 405."
    },
    {
        "id": 497,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X, Y, and Z represent three independent losses with common density function\n1\n’\n− x / 6\ne , for 0 < x < ∞\n’\n’\n6\nf ( x ) =\n’\n’\n’\n0 , otherwise.\n’\nLet W represent the minimum of the losses.\nCalculate E( W ).",
        "options": [
            "1/6",
            "1/3",
            "1/2",
            "2",
            "6"
        ],
        "answerLetter": "D",
        "answer": "2",
        "explanation": "Official solution: D\n\n− x /6\nF x ( ) = 1 − e .\nThe distribution function is For a set of three independent and identically\ndistributed random variable, the distribution function of the minimum is\n3 − x /6 3 − x /2\nF ( ) x = 1 − [1 − F x ( )] = 1 − ( e ) = 1 − e .\nmin\nThis is an exponential distribution with a mean of 2."
    },
    {
        "id": 498,
        "topic": "SOA Exam P Sample Question",
        "question": "In a large state, drivers are divided into three distinct age groups. The following table\nprovides the probabilities that a one-car accident, involving a driver in a given age group,\noccurs in an urban, suburban or rural location in that state.\nProbability of accident location by age group\nDriver’s age Urban Suburban Rural\nUnder 25 7/10 1/5 1/10\n25-65 1/4 3/5 3/20\nOver 65 1/20 7/20 3/5\nFifty-five percent of one-car accidents involve a driver who is under 25, and fifteen\npercent involve a driver who is over 65.\nA one-car accident occurs in a suburban location.\nCalculate the probability that the driver is under 25.",
        "options": [
            "0.11",
            "0.17",
            "0.32",
            "0.55",
            "0.76"
        ],
        "answerLetter": "C",
        "answer": "0.32",
        "explanation": "Official solution: C\n\nP (suburban) = 0.55(1/5) + 0.30(3/5) + 0.15(7/20) = 0.3425.\nP (suburban and under 25) = 0.55(1/5) = 0.11.\nP (under 25 | suburban) = 0.11/0.3425 = 0.3212."
    },
    {
        "id": 499,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance agent sells life insurance policies. The number of life insurance policies\nsold in a month can be modeled by a Poisson distribution with mean 4.\nThe agent sold at least one life insurance policy in a particular month.\nCalculate the probability that the agent sold more than three life insurance policies in that\nmonth.",
        "options": [
            "0.567",
            "0.577",
            "0.624",
            "0.776",
            "0.839"
        ],
        "answerLetter": "B",
        "answer": "0.577",
        "explanation": "Official solution: B\n\nLet X be the number of policies sold random variable. Then,\n0 1 2 3\n’ ’\n4 4 4 4\n− 4\n1 − e + + +\n’ ’\n0! 1! 2! 3!\nP X [ > 3] 0.5665\n’ ’\nP X [ > 3 | X ≥ 1] = = = = 0.5771.\n0\nP X [ ≥ 1] ’ ’ 0.9817\n4\n− 4\n1 − e\n’ ’\n0!\n’ ’"
    },
    {
        "id": 500,
        "topic": "SOA Exam P Sample Question",
        "question": "Whether a football player is injury-free in any one season is independent of whether the\nplayer is injury-free in any other seasons. The player’s probability of being injury-free\nfor a season is the same for each season. Let x represent the player’s probability of being\ninjury-free for exactly one of the next two seasons.\nDetermine the player’s probability of being injury-free for exactly two of the next four\nseasons.",
        "options": [
            "0.5 x",
            "2 x 2",
            "x 2",
            "1.5 x 2",
            "3 x"
        ],
        "answerLetter": "D",
        "answer": "1.5 x 2",
        "explanation": "Official solution: D\n\nLet p be the probability of being injury-free in a given year. Using the binomial distribution,\nx = P (injury-free for exactly 1 of next 2 seasons) = 2 p (1 – p )\n2 2 2 2\nThen, P (injury-free for exactly 2 of next 4 seasons) = 6 p (1 – p ) = 1.5[2 p (1 – p )] = 1.5 x ."
    },
    {
        "id": 501,
        "topic": "SOA Exam P Sample Question",
        "question": "Each of ten homeowners independently has the same probability of experiencing at least\none loss this year. Eight of these ten homeowners are insured.\nThree of the ten homeowners experience at least one loss.\nCalculate the probability that at least two of these three homeowners are insured.",
        "options": [
            "0.384",
            "0.467",
            "0.700",
            "0.896",
            "0.933"
        ],
        "answerLetter": "E",
        "answer": "0.933",
        "explanation": "Official solution: E\n\nThe key is that the probability of experiencing at least one loss is not needed. The population of\nhomeowners is split into two groups, eight with insurance and two without. Three homeowners\nwith losses are randomly sampled from these ten. We want the probability that at least two are\nfrom the eight that are insured. This is a hypergeometric probability:\n8 2 8 2\n’ ’’ ’ ’ ’’ ’\n’ ’’ ’ ’ ’’ ’\n2 1 3 0\n28(2) 56(1)\n’ ’’ ’ ’ ’’ ’\n+ = + = 0.9333.\n10 10\n’ ’ ’ ’ 120 120\n’ ’ ’ ’\n3 3\n’ ’ ’ ’"
    },
    {
        "id": 502,
        "topic": "SOA Exam P Sample Question",
        "question": "A medical insurance policyholder just experienced a hospitalization, resulting in an\nundetermined financial loss that is exponentially distributed. The policyholder has Plan\nA, which reimburses the first two units for each hospitalization. The policyholder could\nhave chosen Plan B, which reimburses the first ten units for each hospitalization.\nThe probability that this hospitalization is completely covered under Plan A is 0.15.\nCalculate the probability that this hospitalization would have been completely covered\nhad the policyholder chosen Plan B.",
        "options": [
            "0.200",
            "0.351",
            "0.443",
            "0.556",
            "0.750"
        ],
        "answerLetter": "D",
        "answer": "0.556",
        "explanation": "Official solution: D\n\nLet X = loss due to hospitalization, which is exponentially distributed with parameter λ .\n2\n− λ x − 2 λ\n0.15 = P X ( ≤ 2) = λ e dx = 1 − e\n∫\n0\n− 2 λ\n0.85 = e .\n− 10 λ 5\nP X ( ≤ 10) = 1 − e = 1 − 0.85 = 0.55629."
    },
    {
        "id": 503,
        "topic": "SOA Exam P Sample Question",
        "question": "A trapeze artist has a constant probability, less than 0.5, of having an accident in any\nparticular performance. The occurrence of an accident in any one performance is\nindependent of the occurrence of an accident in all other performances. The probability\nthat the artist’s first accident occurs in the second performance is 0.16.\nCalculate the probability that the artist’s first accident occurs in the fourth performance.",
        "options": [
            "0.0064",
            "0.0256",
            "0.0800",
            "0.1024",
            "0.2000"
        ],
        "answerLetter": "D",
        "answer": "0.1024",
        "explanation": "Official solution: D\n\nLet p be the probability of an accident in a given performance.\nLet X = the number of performances it takes to have the first accident, which is geometrically\ndistributed with “success” probability p ; p < 0.5.\ni − 1\nP X [ = i ] = p (1 − p )\nP X [ = 2] = 0.16 = p (1 − p ) ⇒ p = 0.2\n3\nP X [ = 4] = 0.2(0.8) = 0.1024"
    },
    {
        "id": 504,
        "topic": "SOA Exam P Sample Question",
        "question": "A construction worker experiences a back injury resulting in a loss on an insurance\npolicy. Losses under the policy are uniformly distributed on the interval [2, 10]. The\ninsurer reimburses the worker for 60% of this loss.\nth\nCalculate the 30 percentile of the construction worker’s unreimbursed loss from the\nback injury.",
        "options": [
            "1.76",
            "1.80",
            "2.64",
            "3.04",
            "4.40"
        ],
        "answerLetter": "A",
        "answer": "1.76",
        "explanation": "Official solution: A\n\nLet X be the loss, which is uniform [2, 10].\nLet Y be the unreimbursed loss. Then, Y = 0.4 X . Then,\n2.5 p − 2\n0.3 = P Y [ ≤ p ] = P [0.4 X ≤ p ] = P X [ ≤ 2.5 p ] = = 5 p /16 − 1/ 4\n10 − 2\n5 p /16 = 3 /10 + 1/ 4 = 11/ 20\n16(11)\np = = 1.76.\n5(20)"
    },
    {
        "id": 505,
        "topic": "SOA Exam P Sample Question",
        "question": "At a certain intersection, the number of accidents that occur per day is modeled by a\nPoisson distribution with mean 0.20.\nThe numbers of accidents that occur on different days are all mutually independent.\nCalculate the probability that exactly three accidents occur at the intersection in the next\nseven days.",
        "options": [
            "0.025",
            "0.087",
            "0.113",
            "0.191",
            "0.224"
        ],
        "answerLetter": "C",
        "answer": "0.113",
        "explanation": "Official solution: C\n\nIf one day has a Poisson(0.2) distribution, then seven days has a Poisson(1.4) distribution.\n− 1.4 3\ne (1.4)\nP X [ = 3] = = 0.1128\n3!"
    },
    {
        "id": 506,
        "topic": "SOA Exam P Sample Question",
        "question": "A college office has two student assistants, Bob and Ann, who work on alternate days.\nEach day, the assistant draws a morning and an afternoon assignment from a jar\ncontaining four assignments, one outdoor and three indoor.\nBob always makes his selection with replacement, while Ann makes hers without\nreplacement.\nOn a particular day, one outdoor and one indoor assignment are selected.\nCalculate the probability that Bob made the selections.",
        "options": [
            "3/16",
            "3/8",
            "3/7",
            "7/16",
            "1/2"
        ],
        "answerLetter": "C",
        "answer": "3/7",
        "explanation": "Official solution: C\n\n3 1 3\nThe probability of getting one of each type when Bob is selecting is × × 2 = . The same\n4 4 8\n3\n3\n3 1 1\n8\nprobability when Ann is selecting is . Thus, the desired probability is = .\n× × 2 =\n1 3\n7\n4 3 2\n+\n2 8"
    },
    {
        "id": 507,
        "topic": "SOA Exam P Sample Question",
        "question": "The random variable X has density function\n5 − 0.01 x\n’ cx e , for x > 0\nf ( ) x = ’\n0, otherwise,\n’\nwhere c is a constant.\nCalculate E( X ).",
        "options": [
            "100",
            "200",
            "300",
            "500",
            "600"
        ],
        "answerLetter": "E",
        "answer": "600",
        "explanation": "Official solution: E\n\nα = 6 , β = 100\nThis is a gamma distribution with parameters . E( X ) = αβ = 600 .\nIf the distribution type is not recognized integration by parts is needed to get c and then to get the\nexpected value."
    },
    {
        "id": 508,
        "topic": "SOA Exam P Sample Question",
        "question": "A statistician determines that the probability density function of the losses from\nf ( ) x\nx\nconstruction accidents is proportional to , for all nonnegative x .\n9\n2\n1 + x\n( )\nnd\nCalculate the 2 percentile of the losses from construction accidents.",
        "options": [
            "0.003",
            "0.020",
            "0.045",
            "0.050",
            "0.222"
        ],
        "answerLetter": "D",
        "answer": "0.050",
        "explanation": "Official solution: D\n\nnd\nLet a represent the 2 percentile; keep in mind that a > 0. We have the following equation:\na a\n2 − 9\n2 − 8\n2 − 8\nx (1 + x ) dx − (1 + x ) /16\n1 − (1 + a )\n∫\n0 0\n0.02 = = =\n∞ ∞\n2 − 9 2 − 8\n1\nx (1 + x ) dx − (1 + x ) /16\n∫\n0 0\n2 − 8\n0.98 = (1 + a )\n2\n1.0025285 = 1 + a\na = 0.050"
    },
    {
        "id": 509,
        "topic": "SOA Exam P Sample Question",
        "question": "A credit card protection insurance company’s monthly profits are independent and\nnormally distributed with constant mean and variance. The probability that the company\nearns an overall positive profit in a given year is 0.60.\nCalculate the probability that the insurance company earns a positive profit in a given\nmonth.",
        "options": [
            "0.51",
            "0.53",
            "0.60",
            "0.81",
            "0.96"
        ],
        "answerLetter": "B",
        "answer": "0.53",
        "explanation": "Official solution: B\n\nLet μ and σ be the monthly mean and standard deviation. Then the yearly mean is and\n12 μ\nthe standard deviation is 12 σ . Let X be the annual profit. Then,\n0.6 = P X [ > 0] = P Z [ > − 12 μ / ( 12 σ ) = − 12( μ / σ )].\nFrom the normal table,\n0.253347 = 12( μ / σ )\nμ / σ = 0.073135.\nLet Y be the monthly profit. Then,\nP Y [ > 0] = P Z [ > − μ / σ = − 0.73135] = 0.52915."
    },
    {
        "id": 510,
        "topic": "SOA Exam P Sample Question",
        "question": "A company insures two buildings for one year. Its insurer will pay the value of a loss,\nrounded down to the nearest million. Let X and Y represent the insurer’s payments in\nmillions on each of the buildings. The joint probability function is:\nX\n0 1 2\n0 0.38 0.10 0.02\nY 1 0.16 0.11 0.03\n2 0.06 0.09 0.05\nCalculate the expected value of the maximum of X and Y.",
        "options": [
            "0.33",
            "0.70",
            "0.87",
            "1.20",
            "2.00"
        ],
        "answerLetter": "C",
        "answer": "0.87",
        "explanation": "Official solution: C\n\nThe maximum is 2 when either X or Y is 2, the probability is 0.02+0.03+0.05+0.09+0.06 = 0.25.\nThe maximum is 0 when both X and Y are 0, the probability is 0.38.\nThus the maximum is 1 with probability 1 – 0.25 – 0.38 = 0.37.\nThe expected value is 0(0.38) + 1(0.37) + 2(0.25) = 0.87."
    },
    {
        "id": 511,
        "topic": "SOA Exam P Sample Question",
        "question": "Each loss under a disability insurance policy can range from 0 to 1. The probability\ndensity function of a loss is proportional to the fifth power of the loss.\nThe insurer plans to implement a constant deductible d for each loss so that the\nprobability that the insurer pays something for at least one of the next two losses has a\nspecified value P . Assume that the next two losses are independent.\nDetermine the deductible d the insurer should charge, in terms of P.\n5",
        "options": [
            "P 10",
            "P 10",
            "1 − P 12",
            "P 12",
            "1 − P"
        ],
        "answerLetter": "E",
        "answer": "1 − P",
        "explanation": "Official solution: E\n\nLet p = the probability that the insurer pays nothing for a given loss.\nd\n6\n5\nd\nx dx\n∫\n0 6 6\np = P loss ≤ d = = = d .\n[ ]\n1\n1\n5\nx dx\n∫\n6\n0\nP = P[insurer pays for at least 1 of 2 losses] = 1 – P[insurer pays nothing for 2 losses]\n2 12\n= 1 − p = 1 − d .\n1/12\nd = (1 − P ) .\nThen,"
    },
    {
        "id": 512,
        "topic": "SOA Exam P Sample Question",
        "question": "A random variable, X , denotes the number of airplanes landing each hour at a certain\nairport. X is modeled by a Poisson distribution. On average, 20 airplanes are expected to\nland each hour.\n2\nCalculate E( X ) ’ E( X ) .",
        "options": [
            "40",
            "60",
            "420",
            "440",
            "820"
        ],
        "answerLetter": "D",
        "answer": "440",
        "explanation": "Official solution: D\n\nE( X ) = V( X ) = λ = 20\n2 2\nV( X ) = E( X ) − E( X )\n2 2\nE( X ) = 20 + 20 = 420\n2\nE( X ) + E( X ) = 420 + 20 = 440"
    },
    {
        "id": 513,
        "topic": "SOA Exam P Sample Question",
        "question": "A point P is randomly selected in the Cartesian plane in such a way that the distance from\nP to the origin has a uniform distribution on the interval [0, 3].\nCalculate the variance of the area of the circle that is centered at the origin and passes\nthrough P .\n2",
        "options": [
            "9 π /16 2",
            "3 π / 4 2",
            "3 π / 2 2",
            "36 π / 5 2",
            "81 π / 5"
        ],
        "answerLetter": "D",
        "answer": "36 π / 5 2",
        "explanation": "Official solution: D\n\nLet X be the distance between P and the origin. Then X has the uniform distribution on [0, 3].\n2 2 2\nWe seek Var( π X ) = π Var( X ) , which is:\n2 4 2 2\nπ ’ E X ( ) − E X ( ) ’\n’ ’\n3\n4\nx 243 81\n4\nE X ( ) = dx = =\n∫\n3 15 5\n0\n3\n2\nx\n2\nE X ( ) = dx = 3\n∫\n3\n0\n81 − 45\n2 4 2 2 2 2\n’ ’\nπ E X ( ) − E X ( ) = π = 36 π / 5.\n’ ’\n5"
    },
    {
        "id": 514,
        "topic": "SOA Exam P Sample Question",
        "question": "On any given day, the number of available units, X , of a given commodity, and the\nmarket price per unit, Y , have joint probability function\n’ y − 6 x − 2\n, for x = 1, 2 and y = 10,12,14\n’\np x y ( , ) = ’\n18\n’\n0, otherwise.\n’\nAssume that all available units will sell at the market price per unit.\nCalculate the expected revenue generated by the sale of all available units.",
        "options": [
            "140/9",
            "144/9",
            "150/9",
            "156/9",
            "162/9"
        ],
        "answerLetter": "A",
        "answer": "140/9",
        "explanation": "Official solution: A\n\nWe seek E( XY ), which is (10)(1) p (1,10) + (12)(1) p (1,12) + (14)(1) p (1,14) + (10)(2) p (2,10) +\n(12)(2) p (2,12) + (14)(2) p (2,14).\n2 4 6 4 2 0 280 140\n= 10(1) + 12(1) + 14(1) + 10(2) + 12(2) + 14(2) = = .\n18 18 18 18 18 18 18 9"
    },
    {
        "id": 515,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses, X , in millions, are modeled by a distribution with density function\n3\n’\n’ k (1 − x ) , for 0 < x < 1\nf ( ) x = ’\n0, otherwise,\n’\n’\nwhere k is a constant.\nClaim payments are limited to a maximum of 225,000.\nCalculate the median claim payment.",
        "options": [
            "159,000",
            "173,000",
            "187,000",
            "200,000",
            "225,000"
        ],
        "answerLetter": "A",
        "answer": "159,000",
        "explanation": "Official solution: A\n\n1\nFirst,\nf ( x ) dx = 1 => k = 4\n∫\n0\n4\nF ( x ) = 1 − ( 1 − x )\nand\n4\n1 − ( 1 − x ) = 0 . 5 => x = 0 . 1591\nBecause and this result is less than the benefit maximum, the\nmedian benefit payment is 0.1591(1,000,000)= 159,000."
    },
    {
        "id": 516,
        "topic": "SOA Exam P Sample Question",
        "question": "Let R be the proportion of right-handed babies among all newborns in a town each year.\nR has a beta distribution with density function\nβ − 1\nα − 1\n’\n’ ’\nk r 1 − r , for 0 < r < 1\n( )\n’\n’ ’\nf r ( ) = ’\n’ 0, otherwise,\n’\nwhere α = 13, β = 2 , and k is a positive constant.\nCalculate P[ R > 0.9].",
        "options": [
            "0.208",
            "0.240",
            "0.415",
            "0.479",
            "0.575"
        ],
        "answerLetter": "C",
        "answer": "0.415",
        "explanation": "Official solution: C\n\nα − 1 β − 1 12 12 13\nf r ( ) = kr (1 − r ) = kr (1 − r ) = k r ( − r )\nSince\n1 1 1\n12 12 13\n1 = f r dr ( ) = kr (1 − r dr ) = k ( r − r ) dr\n∫ ∫ ∫\n0 0 0\nr = 1\n13 14\n’ r r ’ 1 1 k\n’ ’\n= k − = k − = .\n’ ’\n’ ’\n13 14 13 14 182\n’ ’\n’ ’\nr = 0\n12 13\nf r ( ) = 182( r − r )\nThus, k = 182, and\nThen,\n1 1\n12\nP R [ > 0.9] = f r dr ( ) = 182 r (1 − r dr )\n∫ ∫\n0.9 0.9\nr = 1\n13 14\nr = 1\n’ r r ’\n13 14\n= 182 − = ’ 14 r − 13 r ’\n’ ’\n’ ’\nr = 0.9\n13 14\n’ ’\nr = 0.9\n13 14\n= 14(1 − 0.9 ) − 13(1 − 0.9 ) = 0.415."
    },
    {
        "id": 517,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy provides coverage for two types of claims. The numbers of annual\nclaims of Type I and Type II are denoted by X and Y , respectively.\nThe joint probability function of X and Y is given in the following table.\ny\n0 1 2\n0 0.31 p 0.05\nx\n1 0.21 0.13 q\nA Type I claim costs 750, and a Type II claim costs 1000. The expected annual Type I\nclaims cost is 345.\nCalculate the variance of Y .",
        "options": [
            "0.25",
            "0.57",
            "0.67",
            "0.75",
            "0.82"
        ],
        "answerLetter": "B",
        "answer": "0.57",
        "explanation": "Official solution: B\n\nFirst, note that p + q = 0.3.\nNext, the expected Type I claim costs are:\n(0.21 + 0.13 + q )750 = 345 ⇒\n0.34 + q = 0.46 ⇒ q = 0.12 ⇒ p = 0.18.\nNext,\nP ( Y = 0 ) = 0 . 52\nP ( Y = 1 ) = 0 . 31\nP ( Y = 2 ) = 0 . 17\nFinally,\n2\nE Y ( ) = 0.31 + 0.17(4) = 0.99\nE Y ( ) = 0.31 + 0.17(2) = 0.65\n2\nVar Y ( ) = 0.99 − 0.65 = 0.5675."
    },
    {
        "id": 518,
        "topic": "SOA Exam P Sample Question",
        "question": "In a certain region, the number of earthquakes in the next decade is modeled by a Poisson\ndistribution. The probability of exactly two earthquakes is 0.43 times the probability of\nexactly one earthquake.\nCalculate the probability of at least three earthquakes in the next decade in this region.",
        "options": [
            "0.010",
            "0.012",
            "0.045",
            "0.056",
            "0.080"
        ],
        "answerLetter": "D",
        "answer": "0.056",
        "explanation": "Official solution: D\n\nLet X represent the number of earthquakes, which is Poisson distributed with\n− λ i\ne λ\nP[ X = i ] =\n, for integer i ≥ 0.\ni !\n− λ 2 − λ 1\ne λ ’ e λ ’\nSince we are given , we have , which gives\nP[ X = 2] = 0.43P[ X = 1] = 0.43\n’ ’\n2! 1!\n’ ’\nλ\n= 0.43 and then λ = 0.86.\n2\nThe probability of at least 3 earthquakes is\nP[ X ≥ 3] = 1 − P[ X = 0] − P[ X = 1] − P[ X = 2]\n− λ 0 − λ 1 − λ 2 2\n’ ’\ne λ e λ e λ 0.86 (0.86)\n− 0.86\n= 1 − − − = 1 − e 1 + + = 0.056.\n’ ’\n0! 1! 2! 1! 2!\n’ ’"
    },
    {
        "id": 519,
        "topic": "SOA Exam P Sample Question",
        "question": "A tornado occurs in each of two cities, A and B. The durations of the tornadoes in cities\nA and B are independent and exponentially distributed with means 5 minutes and 4\nminutes, respectively.\nThe tornadoes in cities A and B result in damages valued at 1.00 and c per minute,\nrespectively, where c is a constant.\nThe standard deviation of the total damage to the two cities is 5.20.\nCalculate c .",
        "options": [
            "0.05",
            "0.13",
            "0.36",
            "2.35",
            "5.51"
        ],
        "answerLetter": "C",
        "answer": "0.36",
        "explanation": "Official solution: C\n\nLet X represent the number of minutes that city A's tornado lasts.\nLet Y represent the number of minutes that city B's tornado lasts.\nX and Y are independent and exponentially distributed with means 5 and 4, respectively.\nThe variance of an exponential distribution is the square of its mean, the variance of a sum of\nindependent random variables is the sum of the variances and multiplying a random variable by a\nconstant results in multiplying the variance by the square of the constant. Therefore, the\nvariance of the monetary value of the damage is\n2 2 2 2 2 2\n(5.2) = Var X + cY = Var X + Var cY = Var X + c Var Y = 5 + c (4) = 25 + 16 c .\n( ) ( ) ( ) ( ) ( )\n2\n(5.2) − 25\nSolving for c gives c = = 0.35707.\n16"
    },
    {
        "id": 520,
        "topic": "SOA Exam P Sample Question",
        "question": "The random vector ( W,X,Y ) has the following properties:\ni) W assumes values of only 0 and 1.\nii) X and Y each assume values of only 1 and 2.\niii) P[ W = w , X = x , Y = y ] is proportional to x + y – w .\nCalculate Var( W | Y = 1) .",
        "options": [
            "51/400",
            "15/64",
            "6/25",
            "3/8",
            "2/5"
        ],
        "answerLetter": "B",
        "answer": "15/64",
        "explanation": "Official solution: B\n\nHere are the possible vectors with their probabilities:\n( w , x , y ) x + y – w probability\n(0,1,1) 2 2/20\n(0,1,2) 3 3/20\n(0,2,1) 3 3/20\n(0,2,2) 4 4/20\n(1,1,1) 1 1/20\n(1,1,2) 2 2/20\n(1,2,1) 2 2/20\n(1,2,2) 3 3/20\nGiven that Y = 1, W is 0 with probability (2 + 3)/(2 + 3 + 1 + 2) = 5/8 and 1 with probability 3/8.\nThen,\n3\nE W ( ) =\n8\n3\n2\nE W ( ) =\n8\n2\n3 ’ 3 ’ 15\nV W ( ) = − = .\n’ ’\n8 8 64\n’ ’"
    },
    {
        "id": 521,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company only sells auto insurance and property insurance. Total annual\nauto claims, X , follow a normal distribution with a mean of 15 and a standard deviation\nof 4. Total annual property claims, Y , follow a normal distribution with a mean of 20 and\na standard deviation of 5.\nThe variables X and Y are independent.\nCalculate the probability that the total overall claims, X + Y , is less than 45.",
        "options": [
            "0.60",
            "0.71",
            "0.87",
            "0.94",
            "0.99"
        ],
        "answerLetter": "D",
        "answer": "0.94",
        "explanation": "Official solution: D\n\nWe want P X ( + Y < 45).\n2 2\nThe random variable X + Y is normal with mean 15 + 20 = 35 and variance 4 + 5 = 41.\nThe standard deviation of X + Y = 6.40.\nP X + Y < 45 = P Z < 1.5617 = 0.9408.\nThen ( ) ( )"
    },
    {
        "id": 522,
        "topic": "SOA Exam P Sample Question",
        "question": "A motorist is driving without an automobile insurance policy in a region where law\nrequires the motorist to have automobile insurance. The time in months until the motorist\nis charged for driving without automobile insurance is exponentially distributed with\nmedian 1.733 months.\nCalculate the probability that the time until the motorist is charged is between the median\nand mean times until the motorist is charged.\n− 1",
        "options": [
            "0.5 − e − 0.16",
            "e − 0.5 − 1",
            "e − 1",
            "1 − e − 1",
            "0.5 + e"
        ],
        "answerLetter": "A",
        "answer": "0.5 − e − 0.16",
        "explanation": "Official solution: A\n\nLet X = number of months until the motorist is charged, which is exponentially distributed with\nmean . Then,\nβ\n− 1.733/ β\n0.5 = e\nβ = 2.5\n− 2.5/2.5 − 1.733/2.5 − 1 − 1\nP (1.733 < X < 2.5) = 1 − e − 1 − e = 1 − e − 1 + 0.5 = 0.5 − e .\n( ) ( )"
    },
    {
        "id": 523,
        "topic": "SOA Exam P Sample Question",
        "question": "You are given the following information about two insurance policies:\ni) Losses covered by each policy follow a normal distribution with mean\n8000.\nii) Losses covered by Policy I have standard deviation k .\niii) Losses covered by Policy II have standard deviation 1.5 k .\nth st\nThe p percentile of losses covered by Policy I is equal to the 81 percentile of losses\ncovered by Policy II.\nCalculate p .",
        "options": [
            "83.2",
            "85.7",
            "88.2",
            "90.6",
            "93.2"
        ],
        "answerLetter": "D",
        "answer": "90.6",
        "explanation": "Official solution: D\n\nst\nFrom the standard normal table, the 81 percentile is 0.87790 standard deviations above the\nst\nmean. Therefore, the 81 percentile of losses covered by Policy II is y = 8000 + 0.87790(1.5 ) k .\ny − 8000\nA loss of y covered by Policy I would be standard deviations\n= 0.87790(1.5) = 1.3168\nk\nth\nabove the mean. Using the standard normal table, this corresponds to the 90.6 percentile.\n(Using the table provided gives 90.7.)"
    },
    {
        "id": 524,
        "topic": "SOA Exam P Sample Question",
        "question": "In a group of 35 patients, 9 have high blood pressure, 9 have high cholesterol, and 15\nhave high blood pressure or high cholesterol.\nFrom these 35 patients, a doctor needs to select a group of 8 patients for a test in which\nexactly 4 have high blood pressure only, exactly 1 has high cholesterol only, and exactly\n2 have both high blood pressure and high cholesterol.\nCalculate the number of different groups the doctor can select for this test.",
        "options": [
            "90",
            "270",
            "5,400",
            "47,628",
            "238,140"
        ],
        "answerLetter": "C",
        "answer": "5,400",
        "explanation": "Official solution: C\n\nThere are four subsets here:\nNeither high blood pressure or high cholesterol: 35 – 15 = 20\nBoth high blood pressure and high cholesterol: 9 + 9 -15 = 3\nHigh blood pressure only: 9 – 3 = 6\nHigh cholesterol only: 9 – 3 = 6.\nThere are 6 choose 4 = 15 ways to select four with high blood pressure only.\nThere are 6 choose 1 = 6 ways to select one with high cholesterol only.\nThere are 3 chose 2 = 3 ways to select two with both high blood pressure and high cholesterol.\nThere are 20 choose 1 = 20 ways to select one with neither high blood pressure or high\ncholesterol.\nThe total number of groups is 15(6)(3)(20) = 5400."
    },
    {
        "id": 525,
        "topic": "SOA Exam P Sample Question",
        "question": "The joint distribution of television viewers’ habits in the two entertainment categories of\nSports and Movies and the one non-entertainment category of News is:\nRegularly watches Sports:\nRegularly watches Does not regularly\nNews watch News\nRegularly watches\n0.35 0.10\nMovies\nDoes not regularly\n0.08 0.06\nwatch Movies\nDoes not regularly watch Sports\nRegularly watches Does not regularly\nNews watch News\nRegularly watches\n0.22 0.06\nMovies\nDoes not regularly\n0.05 0.08\nwatch Movies\nCalculate the variance of the number of entertainment categories regularly watched by\nthose television viewers who regularly watch News.",
        "options": [
            "0.242",
            "0.388",
            "0.400",
            "0.478",
            "0.571"
        ],
        "answerLetter": "B",
        "answer": "0.388",
        "explanation": "Official solution: B\n\nThe probability of regularly watching News is 0.35 + 0.08 + 0.22 + 0.05 = 0.70.\nOf those probabilities, 0.05 watch neither Movies or Sports, 0.08 + 0.22 = 0.30 watch exactly\none of Movies and Sports, and 0.35 watch both Movies and Sports.\nThe conditional distribution of the number of entertainment categories watched by those watch\nNews is then:\n0 – 0.05/0.70 = 1/14\n1 – 0.30/0.70 = 6/14\n2 – 0.35/0.70 = 7/14.\nThe mean is 0(1/14) + 1(6/14) + 2(7/14) = 20/14 = 10/7.\nThe second moment is 0(1/14) + 1(6/14) + 4(7/14) = 34/14 = 17/7.\nThe variance is 17/7 – 100/49 = 0.388."
    },
    {
        "id": 526,
        "topic": "SOA Exam P Sample Question",
        "question": "A company insures homes in 50 different territories. The company models annual\ntornado losses within each territory by an exponential distribution with mean 100,000.\nBecause of the local nature of most tornadoes, losses in one territory are independent of\nlosses in other territories. Calculate the approximate probability that total annual tornado\nlosses over all 50 territories exceed 5.5 million.",
        "options": [
            "0.14",
            "0.18",
            "0.24",
            "0.33",
            "0.46"
        ],
        "answerLetter": "C",
        "answer": "0.24",
        "explanation": "Official solution: C\n\nLet T denote the total losses due to tornadoes. For each territory, the mean is 0.1 million and the\nstandard deviation is also 0.1 million. Then, for the sum of 50 such independent random\nvariables,\nE T ( ) = 50(0.1) = 5\nSD T ( ) = 50(0.1) = 0.7071\n5.5 − 5\n’ ’\nPr( T > 5.5) = Pr Z > = 0.7071 = 0.2397.\n’ ’\n0.7071\n’ ’"
    },
    {
        "id": 527,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X and Y be random variables for which\ni) Var ( X ) = Var ( Y )\nii) Var ( X + Y ) = 10\niii) Var ( X − 2 Y) = 16.\nCalculate Cov X Y , .\n( )",
        "options": [
            "− 1.0",
            "− 0.1",
            "0.1",
            "1.0",
            "2.0"
        ],
        "answerLetter": "D",
        "answer": "1.0",
        "explanation": "Official solution: D\n\n10 = Var X ( + Y ) = Var X ( ) + Var Y ( ) + 2 Cov X Y ( , ) = 2 Var X ( ) + 2 Cov X Y ( , )\n16 = Var X ( − 2 Y ) = Var X ( ) + 4 Var Y ( ) − 4 Cov X Y ( , ) = 5 Var X ( ) − 4 Cov X Y ( , )\nFrom the first equation, Substituting in the second equation,\nVar X ( ) = 5 − Cov X Y ( , ).\n16 = 5[5 − Cov X Y ( , )] − 4 Cov X Y ( , ) = 25 − 9 Cov X Y ( , )\nCov X Y ( , ) = 1."
    },
    {
        "id": 528,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary makes the following observations about an insurer’s fire and flood\ninsurance policies:\ni) The probability that a client purchases neither policy exceeds the\nprobability that a client purchases both policies by 0.20.\nii) The probability that a client purchases both policies is positive.\niii) The probability that a client purchases a fire policy given that the client\npurchases a flood policy is twice the probability that a client purchases a\nflood policy given that the client purchases a fire policy.\nCalculate the probability that a client purchases a flood policy.",
        "options": [
            "0.27",
            "0.33",
            "0.40",
            "0.53",
            "0.80"
        ],
        "answerLetter": "A",
        "answer": "0.27",
        "explanation": "Official solution: A\n\nLet A be the event that the fire policy is purchased and B be the event that the flood policy is\npurchased. Also let x be the probability that neither is purchased:\nx = 1 − P( A ∪ B ) = 0.2 + P( A ∩ B ), so P( A ∩ B ) = x − 0.2.\nP A ∩ B 2 P A ∩ B\n( ) ( )\nFirst from statement iii): P A B = = 2 P B A = .\n( ) ( )\nP B P A\n( ) ( )\n1\nFrom the second and fourth expressions in the above line we get , since\nP B ( ) = P ( A )\n2\nP A ∩ B ≠ 0\n( ) .\nNow, P A ∪ B = P A + P B − P A ∩ B .Substituting, we get\n( ) ( ) ( ) ( )\n1 3 2 8\n1 − x = P A + P A − x − 0.2 , and so 1 − 0.2 = P A . Thus P A = 0.8 = , and\n( ) ( ) ( ) ( ) ( ) ( )\n2 2 3 15\n1 4\n.\nP B = P A = = 0.2666\n( ) ( )\n2 15"
    },
    {
        "id": 529,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of errors on an application is modeled by a Poisson random variable with\nvariance 0.25.\nThe number of errors on any application is independent of the number of errors on all\nother applications.\nCalculate the probability that two applications contain a total of more than one error.",
        "options": [
            "0.03",
            "0.09",
            "0.30",
            "0.61",
            "0.91"
        ],
        "answerLetter": "B",
        "answer": "0.09",
        "explanation": "Official solution: B\n\nThis is a Poisson Random Variable. with λ = 0.25. Since we are talking about two applications,\nx p p\nP( > 1) = 1 − (0) − (1)\n− 0.5 0 − 0.5 1\ne (0.5) e (0.5)\n= 1 − −\n0! 1!\n= 1 − 0.6065 − 0.3033\n= 0.0902."
    },
    {
        "id": 530,
        "topic": "SOA Exam P Sample Question",
        "question": "A box contains three fair dice. One has faces numbered 1, 2, 3, 4, 5, and 6; one has faces\nnumbered 2, 2, 4, 4, 6, and 6; and one has all six faces numbered 6. Two of the three dice\nare randomly selected and rolled.\nCalculate the probability that the sum of the numbers rolled on the two dice is 11.",
        "options": [
            "0.025",
            "0.028",
            "0.074",
            "0.111",
            "0.222"
        ],
        "answerLetter": "C",
        "answer": "0.074",
        "explanation": "Official solution: C\n\nLabel the three dice, A, B, and C in the order presented.\nIf A and B are selected, an 11 can be obtained only with a 5 from A and a 6 from B. The\nprobability is (1/6)(1/3) = 1/18\nIf A and C are selected, an 11 can be obtained only with a 5 from A and a 6 from C. The\nprobability is (1/6)(1) = 1/6.\nIf B and C are selected, an 11 is not possible.\nThe total probability is (1/3)(1/18) + (1/3)(1/6) = 4/54 = 0.0741."
    },
    {
        "id": 531,
        "topic": "SOA Exam P Sample Question",
        "question": "A policyholder is insured against both fire and theft claims. The probability of a fire\nclaim is 10%. The probability of a theft claim is 30%.\nLet p be the probability of having neither a fire nor a theft claim, assuming fire and theft\nclaims are independent.\nLet r be the probability of having neither a fire nor a theft claim, assuming fire and theft\nclaims are mutually exclusive.\nCalculate p – r .",
        "options": [
            "−0.06",
            "−0.03",
            "0.00",
            "0.03",
            "0.06"
        ],
        "answerLetter": "D",
        "answer": "0.03",
        "explanation": "Official solution: D\n\nAssuming independence:\nP( F ∩ T ) = 0.10(0.30) = 0.03\np = 1 − P( F ) + P( T ) − P( F ∩ T ) = 1 − 0.10 + 0.30 − 0.03 = 0.63.\n( ) ( )\nAssuming mutually exclusive:\nr = 1 − P( F ) − P( T ) = 1 − 0.10 − 0.30 = 0.60\np − r = 0.63 − 0.60 = 0.03."
    },
    {
        "id": 532,
        "topic": "SOA Exam P Sample Question",
        "question": "In a certain region, 5% of all banks will fail in the next five years. The FDIC insures\n80% of the banks in the region. Only 3% of the banks in the region insured by the FDIC\nwill fail in the next five years.\nCalculate the probability that a bank in the region that fails in the next five years is\ninsured by the FDIC.",
        "options": [
            "0.02",
            "0.04",
            "0.06",
            "0.48",
            "0.60"
        ],
        "answerLetter": "D",
        "answer": "0.48",
        "explanation": "Official solution: D\n\nP( F ) = 0.05, P( FDIC ) = 0.80\nP( F ∩ FDIC ) P( F ∩ FDIC )\nP( F | FDIC ) = 0.03 = = ⇒ P( F ∩ FDIC ) = 0.024.\nP( FDIC ) 0.80\nP( F ∩ FDIC ) 0.024\nP( FDIC | F ) = = = 0.48.\nWe want:\nP( F ) 0.05"
    },
    {
        "id": 533,
        "topic": "SOA Exam P Sample Question",
        "question": "This year, each of the ten employees of a company has probability 0.2 of having at least\none accident. The occurrences of accidents among different employees are mutually\nindependent.\nOf the ten employees, six are in department A. The other four are in department B.\nExactly three of the ten employees each have at least one accident.\nCalculate the probability that at least one of these accidents occurs to an employee in\ndepartment B.",
        "options": [
            "0.201",
            "0.500",
            "0.590",
            "0.784",
            "0.833"
        ],
        "answerLetter": "E",
        "answer": "0.833",
        "explanation": "Official solution: E\n\nSince all employees are independent and have the same accident risk, all combinations of three\nemployees with accidents are equally likely. Therefore,\nP[at least 1 accident in dept. B] = 1 – P[the 3 \"accident\" employees are all in dept. A]:\n6 4\n’ ’’ ’\n’ ’’ ’\n3 0 20 × 1 5\n’ ’’ ’\n1 − = 1 − = = 0.8333.\n10\n’ ’ 120 6\n’ ’\n3\n’ ’"
    },
    {
        "id": 534,
        "topic": "SOA Exam P Sample Question",
        "question": "In a given year, the number of accidents an auto insurance policyholder experiences is\nPoisson distributed with mean 0.10. The numbers of accidents by year are independent.\nCalculate the probability that a policyholder's first accident occurs during the sixth year\nof the policy, given that the policyholder experiences no accidents during the first two\nyears of the policy.",
        "options": [
            "0.0009",
            "0.0577",
            "0.0705",
            "0.0729",
            "0.3297"
        ],
        "answerLetter": "C",
        "answer": "0.0705",
        "explanation": "Official solution: C\n\n− 0.10 0\ne 0.10\n− 0.10\n1 − P[0] = 1 − = 1 − e .\nP[at least 1 accident during a given year] =\n0!\nP[first accident in sixth year | no accidents in first two years]\n= P[first accident in sixth year and no accidents in first two years] / P[no accidents in first two\nyears]\n= P[first accident in sixth year]/ P[no accidents in first two years]\n5\nP[0] P[ ≥ 1]\n= ,\nby independence.\n2\nP[0]\n5\n− 0.10 − 0.10\ne 1 − e\n( ) ( )\n= 0.070498.\n2\n− 0.10\ne\n( )"
    },
    {
        "id": 535,
        "topic": "SOA Exam P Sample Question",
        "question": "A policyholder experiences one accident under a health insurance policy and one accident\nunder a dental insurance policy. The health insurance policy reimburses 80% of losses.\nLosses under this policy have variance 40,000. The dental insurance policy reimburses\n90% of losses. Losses under this policy have variance 10,000.\nThe policyholder's two losses are independent.\nCalculate the variance of the policyholder's total unreimbursed loss under these policies.",
        "options": [
            "1,700",
            "9,000",
            "16,300",
            "33,700",
            "50,000"
        ],
        "answerLetter": "A",
        "answer": "1,700",
        "explanation": "Official solution: A\n\nLet:\nX = loss under health insurance policy\nY = loss under dental insurance policy\nVar( X ) = 40,000; Var( Y ) = 10,000; X and Y are independent\nU = total unreimbursed loss = 0.2 X + 0.1 Y\nVar( U ) = Var(0.2 X + 0.1 ) Y\n= Var(0.2 X ) + Var(0.1 ), since independent Y\n2 2\n=0.2 Var( X ) + 0.1 Var( Y )\n2 2\n= 0.2 (40, 000) + 0.1 (10, 000)\n= 1700."
    },
    {
        "id": 536,
        "topic": "SOA Exam P Sample Question",
        "question": "A weighted six-sided die is rolled. Let A be the event that the number rolled is less than\n5. Let B be the event that the number rolled is less than 4. Let C be the event that the\nnumber rolled is a 6. The probabilities of A, B, and C are 0.3, 0.1, and 0.7, respectively.\nCalculate P[A ∪ B] + P[A ∪ C] + P[B ∪ C].",
        "options": [
            "1.10",
            "1.89",
            "2.10",
            "2.17",
            "2.20"
        ],
        "answerLetter": "C",
        "answer": "2.10",
        "explanation": "Official solution: C\n\nP A ( ∪ B ) = P ( < 5) = 0.3\nP A ( ∪ C ) = P ( < 5 or 6) = 0.3 + 0.7 = 1.0\nP B ( ∪ C ) = P ( < 4 or 6) = 0.1 + 0.7 = 0.8\n0.3 + 1.0 + 0.8 = 2.1"
    },
    {
        "id": 537,
        "topic": "SOA Exam P Sample Question",
        "question": "An actuary accepts an assignment to live and work in Key West, Florida for three years.\nThe probability that there are no hurricanes in Key West is 0.75 per year. If there is at\nleast one hurricane in Key West in a year, then the probability is 0.35 that the actuary will\nneed to evacuate in that year. There is no other reason for the actuary to evacuate.\nThe year-to-year occurrences of hurricanes in Key West are independent events.\nCalculate the probability that the actuary will need to evacuate at least once from Key\nWest before the assignment is complete.",
        "options": [
            "0.088",
            "0.219",
            "0.240",
            "0.422",
            "0.578"
        ],
        "answerLetter": "C",
        "answer": "0.240",
        "explanation": "Official solution: C\n\nIn a given year, the probability of evacuating is the probability of evacuating given there is at\nleast one hurricane times the probability of at least one hurricane, 0.35(0.25) = 0.0875.\n3\nThe probability of never evacuating in three years is 0.9125 = 0.7598.\nThe probability of being evacuated at least once is 1 – 0.7598 = 0.2402."
    },
    {
        "id": 538,
        "topic": "SOA Exam P Sample Question",
        "question": "Each person in a certain large population independently has probability 0.0625 of having\na certain disease. People in this population are tested for the disease, until somebody is\nfound to have the disease.\nCalculate the mode of the number of people tested.",
        "options": [
            "1",
            "6",
            "11",
            "15",
            "16"
        ],
        "answerLetter": "A",
        "answer": "1",
        "explanation": "Official solution: A\n\nLet X = number of tests; X is geometric with success probability p = 0.0625;\nn − 1\nP X [ = n ] = (1 − 0.0625) (0.0625)\nfor all values of n ≥ 1.\nP[ X = n ] is maximized when the exponent n - 1 is minimized, which occurs at n = 1. The mode\nof X is 1."
    },
    {
        "id": 539,
        "topic": "SOA Exam P Sample Question",
        "question": "The random variables X , X , X represent the values of three independent investments.\n1 2 3\nEach is normally distributed with E( X ) = 100 and Var( X ) = 27 i /2, i = 1, 2, 3. Let Φ( x )\ni i\ndenote the cumulative distribution function of the standard normal variable.\nDetermine the probability that the average value of the three investments exceeds 106.",
        "options": [
            "Φ (2)",
            "Φ (2 / 3)",
            "1 – Φ (2 / 3)",
            "1 – Φ (2)",
            "1 – Φ 2 / 3 ( )"
        ],
        "answerLetter": "D",
        "answer": "1 – Φ (2)",
        "explanation": "Official solution: D\n\n1\nLet Y = ( X + X + X ) . Then Y is normal, with mean 100 and variance\n1 2 3\n3\n1 27\n’ ’’ ’\n1 + 2 + 3 = 9.\n( )\n’ ’’ ’\n9 2\n’ ’’ ’\n’ 106 − 100 ’\nThus P[ X > 106] = P Z> = P Z > 2 = 1 − P Z [ < 2] = 1 − Φ (2).\n[ ]\n’ ’\n9\n’ ’"
    },
    {
        "id": 540,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company pays a benefit for a duration of one year, two years, or five years,\ndepending upon the severity of the claim. Information about the distribution of claims in\nthe past year by sex and duration of benefit is given in the following table:\n1 year 2 years 5 years\nMale 20% 40% 40%\nFemale 10% 70% 20%\nMales accounted for 60% of all claims.\nCalculate the probability that a claimant was female, given that this claimant received a\nfive-year benefit.",
        "options": [
            "1/5",
            "1/4",
            "1/3",
            "1/2",
            "3/4"
        ],
        "answerLetter": "B",
        "answer": "1/4",
        "explanation": "Official solution: B\n\nP[5|F]P[F] (0.2)(0.4)\nP[Female | 5 Years]= = = 0.25.\nP[5|F]P[F]+P[5|M]P[M] (0.2)(0.4) + (0.4)(0.6)"
    },
    {
        "id": 541,
        "topic": "SOA Exam P Sample Question",
        "question": "The lifetime of an electronic component is exponentially distributed. Given that the\ncomponent lasts at least five years, the probability that it lasts at least fifteen years is 0.027.\nCalculate the probability that the component lasts at least 25 years, given that it lasts at least five\nyears.",
        "options": [
            "0.0007",
            "0.0024",
            "0.0135",
            "0.0162",
            "0.0450"
        ],
        "answerLetter": "A",
        "answer": "0.0007",
        "explanation": "Official solution: A\n\nLet X = machine’s lifetime.\n− x / β\nP[ X < x ] = 1 − e\nLet equal the mean. Then the cumulative distribution function is: and\nβ\n− x / β\nP[ X > x ] = e .\nSince the exponential distribution is memoryless,\n− 10/ β\n0.027 = P[ X > 15 | X > 5] = P[ X > 10] = e\nβ = 2.76861.\n− 20/2.76861\nP[ X > 25 | X > 5] = P[ X > 20] = e = 0.000729.\nThen,"
    },
    {
        "id": 542,
        "topic": "SOA Exam P Sample Question",
        "question": "Each of the 76 employees of a company is either a low-risk or a high-risk employee.\nThis year, each low-risk employee’s number of accidents has standard deviation 0.50 and\neach high-risk employee’s number of accidents has standard deviation 5.50. The\nstandard deviation of the total number of accidents for all the employees is 43.00. The\nfrequencies of accidents among the employees are independent.\nCalculate the number of low-risk employees.",
        "options": [
            "1",
            "15",
            "38",
            "61",
            "75"
        ],
        "answerLetter": "B",
        "answer": "15",
        "explanation": "Official solution: B\n\nLet l = number of low-risk employees; therefore, there are 76 – l high-risk employees.\nFor independent random variables, the variance of the sum equals the sum of the variances.\nTherefore:\n2\n43 = 1849 = Var[Total # of Accidents]\n= l × Var[# of Accidents of Low Risk Ee] + (76- ) l × Var[# of Accidents of High Risk Ee]\n2 2\n= l (0.50) + (76 − l )(5.50)\n= 2299 − 30 l\n450 = 30 l\nl = 15."
    },
    {
        "id": 543,
        "topic": "SOA Exam P Sample Question",
        "question": "A renter’s insurance policy pays a percentage p of the amount by which each loss\nexceeds a deductible d . Each policyholder reports a loss if and only if the loss exceeds\nthe deductible.\nThe variance of a reported loss is v .\nDetermine the variance of the claim payment resulting from a reported loss.",
        "options": [
            "pv 2",
            "p v",
            "p ( v – d ) 2",
            "p ( v – d ) 2",
            "(1 – p ) v"
        ],
        "answerLetter": "B",
        "answer": "p v",
        "explanation": "Official solution: B\n\nLet X represent the reported loss; note that X always exceeds d and Var[ X ] = v .\nThe claim payment is p ( X - d ) since X always exceeds d .\n2 2 2\nVar[claim payment] = Var[ p ( X - d )] = p Var[ X – d ] = p Var[ X ] = p v ."
    },
    {
        "id": 544,
        "topic": "SOA Exam P Sample Question",
        "question": "Assume the distribution of the number of automobile claims per year for an auto\ninsurance policyholder is described by the following table:\nNumber of Claims Probability\n0 0.4\n1 0.3\n2 0.2\n3 0.1\nFor each claim that occurs, there is a probability of 0.5 that the claim size is 500 and a\nprobability of 0.5 that the claim size is 1000. Claim sizes are mutually independent.\nCalculate the probability that the total claim size for a randomly selected policyholder\nthis year is greater than or equal to 2000, given that at least two claims occur.",
        "options": [
            "0.14",
            "0.25",
            "0.29",
            "0.46",
            "0.88"
        ],
        "answerLetter": "D",
        "answer": "0.46",
        "explanation": "Official solution: D\n\nLet A be the probability that total claim size is at least 2000. Let B be the probability of at least\ntwo claims.\nP [ A ∩ B ]\nP [ A | B ] =\n.\nP [ B ]\nis the probability of exactly two claims, both of them for 1000:\nP [ A ∩ B ]\n(0.2)(0.5)(0.5) = 0.05 , plus the probability of exactly three claims, at least one of which is for\n3\n(0.1)[1 − (0.5) ] = 0.0875\nmore than 500, which is the complement of all being 500: , for a total\nof 0.1375. [ ] is the probability of two or more claims: 0.2 + 0.1 = 0.3. Therefore, the answer\nP B\n0.1375\nis:\n= 0.4583.\n0.3"
    },
    {
        "id": 545,
        "topic": "SOA Exam P Sample Question",
        "question": "The total amount of all hurricane claims filed with a company in a one-year time period is\nmodeled by a random variable, X , with density function\n1\n’\n− x /1,000,000\ne , for x > 0\n’\nf ( ) x = ’ 1, 000, 000\n’\n0, otherwise.\n’\nth th\nCalculate, to the nearest 100,000, the difference between the 15 and 95 percentiles of\nthe total amount of hurricane claims.",
        "options": [
            "1,800,000",
            "1,900,000",
            "2,700,000",
            "2,800,000",
            "3,000,000"
        ],
        "answerLetter": "D",
        "answer": "2,800,000",
        "explanation": "Official solution: D\n\nThis is an exponential distribution with mean 1,000,000.\n− x /1,000,000\nF x ( ) == 1 − e .\nFor the fifteenth percentile:\n− a /1,000,000\nP[ X < a ] = 1 − e = 0.15\n− a /1,000,000\n0.85 = e\na = 162,519.\nFor the ninety-fifth percentile:\n− b /1,000,000\nP[ X < b ] = 1 − e = 0.95\n− b /1,000,000\n0.05 = e\nb = 2,995, 732.\n2,995, 732 − 162,519 = 2,833, 213."
    },
    {
        "id": 546,
        "topic": "SOA Exam P Sample Question",
        "question": "A large lot of circuit boards contains 10% that are defective. A test for defective boards\nis correct with 80% probability if the board is defective and correct with only 40%\nprobability if the board is not defective.\nA randomly selected board is tested and the test indicates that the board is defective.\nCalculate the probability that the board is defective.",
        "options": [
            "2/25",
            "1/10",
            "2/17",
            "4/31",
            "2/11"
        ],
        "answerLetter": "D",
        "answer": "4/31",
        "explanation": "Official solution: D\n\nLet D be the event that the board is defective and let T be the event that the test indicates that the\nboard is defective. We want:\nP[ T | D P D ] [ ] (0.8)(0.1) 4\nP[ D T | ] = = = .\nP[ T | D P D ] [ ] + P[ T | D P D ] [ ] (0.8)(0.1) + (0.6)(0.9) 31"
    },
    {
        "id": 547,
        "topic": "SOA Exam P Sample Question",
        "question": "A weather satellite is sending a binary code of 0s and 1s describing a tropical storm.\nSuppose 70% of the message being sent is 0s and there is an 80% chance of any\nparticular 0 or 1 being received correctly. (If a 1 is sent and incorrectly received, it is\nreceived as a 0, and vice versa.)\nCalculate the probability that a 0 was sent, given that a 1 was received.",
        "options": [
            "0.16",
            "0.34",
            "0.37",
            "0.63",
            "0.90"
        ],
        "answerLetter": "C",
        "answer": "0.37",
        "explanation": "Official solution: C\n\nB A\nLet denote the event “ i was sent,” , and let denote the event “ i is received,”\ni = 0,1\ni i\n. Need to determine P B | A .\ni = 0,1 [ ]\n0 1\nP B = 0.7 ⇒ P B = 0.3 , since B and B are mutually exclusive\n[ ] [ ] .\n0 1 0 1\nP A | B = 0.8 ⇒ P A | B = 0.2 , since A and A are mutually exclusive\n[ ] [ ] .\n0 0 1 0 0 1\nP A | B = 0.8 ⇒ P A | B = 0.2 .\n[ ] [ ]\n1 1 0 1\nP A | B P B\n[ ] [ ]\n1 0 0\nP B | A =\n[ ]\n0 1\nP A | B P B + P A | B P B\n[ ] [ ] [ ] [ ]\n1 0 0 1 1 1\n0.2 0.7\n( )( )\n=\n0.2 0.7 + 0.8 0.3\n( )( ) ( )( )\n= 0.37."
    },
    {
        "id": 548,
        "topic": "SOA Exam P Sample Question",
        "question": "Urn A contains five red chips and four white chips. Urn B contains four red chips and\nfive white chips. Two chips are transferred from urn A to urn B. Then a single chip is\ndrawn from urn B.\nCalculate the probability that the chip drawn from urn B will be white.",
        "options": [
            "0.455",
            "0.535",
            "0.545",
            "0.556",
            "0.571"
        ],
        "answerLetter": "B",
        "answer": "0.535",
        "explanation": "Official solution: B\n\nLet W be the event “white chip is drawn from urn B.” Let 0WT denote zero white chips\ntransferred. Let 1WT denote one white chip transferred. Let 2WT denote two white chips\ntransferred. Therefore,\nP W = P W | 0 WT P 0 WT + P W |1 WT P 1 WT + P W | 2 WT P 2 WT\n[ ] [ ] [ ] [ ] [ ] [ ] [ ]\n4 5 4 5 4 5\n’ ’’ ’ ’ ’’ ’ ’ ’’ ’\n’ ’’ ’ ’ ’’ ’ ’ ’’ ’\n0 2 1 1 2 0\n5 6 7 212\n’ ’’ ’ ’ ’’ ’ ’ ’’ ’\nP[ W ] = + + = = 0.5354.\n9 9 9\n11 ’ ’ 11 ’ ’ 11 ’ ’ 396\n’ ’ ’ ’ ’ ’\n2 2 2\n’ ’ ’ ’ ’ ’"
    },
    {
        "id": 549,
        "topic": "SOA Exam P Sample Question",
        "question": "Six people are seated randomly around a circular table. Two of the six people are left-\nhanded.\nCalculate the probability that the two left-handed people are seated next to each other.",
        "options": [
            "1/6",
            "1/5",
            "1/3",
            "2/5",
            "3/5"
        ],
        "answerLetter": "D",
        "answer": "2/5",
        "explanation": "Official solution: D\n\nThe number of ways these 6 people can be seated at a round table is 5!. Let A and B be two left-\nhanded people. The number of ways 6 people can seat in a round table with A and B seating next\n2 4!\n( )( )\n2\nto each other is (2)(4!). Therefore, the probability that both A and B sit together is = .\n5! 5\nAlternatively, consider having the first left-handed person take a seat at random. There are two\nof five seats remaining for the other left-hander to sit in."
    },
    {
        "id": 550,
        "topic": "SOA Exam P Sample Question",
        "question": "In a group of nine people, five have high blood sugar. Five people are to be chosen\nrandomly from this group of nine.\nCalculate how many possible combinations contain exactly two people with high blood\nsugar.",
        "options": [
            "10",
            "14",
            "40",
            "100",
            "126"
        ],
        "answerLetter": "C",
        "answer": "40",
        "explanation": "Official solution: C\n\nThere are two tasks: choose two people from the five high-blood-sugar people and choose three\npeople from the remaining four people. Therefore,\n5 4\n’ ’’ ’\nNumber of combinations = = 10(4) = 40 .\n’ ’’ ’\n2 3\n’ ’’ ’"
    },
    {
        "id": 551,
        "topic": "SOA Exam P Sample Question",
        "question": "A motorist makes four driving errors this year. Each error independently has probability\n0.3 of resulting in an accident. The motorist’s insurance company reimburses up to two\naccidents due to the motorist’s errors this year.\nCalculate the probability that these four errors result in at least one unreimbursed\naccident.",
        "options": [
            "0.03",
            "0.08",
            "0.24",
            "0.32",
            "0.41"
        ],
        "answerLetter": "B",
        "answer": "0.08",
        "explanation": "Official solution: B\n\nLet X = number of accidents, which is binomial with “success” probability 0.3 and 4 trials. We\nwant to find P[ X > 2].\n4\n4\n’ ’\nk 4 − k 3 4\nP[ X > 2] = (0.3) (0.7) = 4(0.3) (0.7) + (0.3) = 0.0837.\n∑\n’ ’\nk\nk = 3\n’ ’"
    },
    {
        "id": 552,
        "topic": "SOA Exam P Sample Question",
        "question": "The distribution of the lifetime in years of a certain brand of lawnmower is uniform on\nthe interval [ a , b ], where 0 < a < b .\nth\nDetermine the 80 percentile of the lifetime in years of this brand of lawnmower.",
        "options": [
            "a + 0.8 b",
            "0.2 a + 0.8 b",
            "0.8 a + 0.2 b",
            "0.8( b – a )",
            "0.8( b + a ) 5 ’ ’ th"
        ],
        "answerLetter": "B",
        "answer": "0.2 a + 0.8 b",
        "explanation": "Official solution: B\n\nth\nSince the lifetime has constant probability density in the interval [ a , b ], the 80 percentile is 80%\nof the way from a to b , which equals: a + 0.8( b − a ) = a + 0.8 b − 0.8 a = 0.2 a + 0.8 . b"
    },
    {
        "id": 553,
        "topic": "SOA Exam P Sample Question",
        "question": "A random variable X is exponentially distributed with 40 percentile equal to 4 ln .\n’ ’\n3\n’ ’\nCalculate the median of X .\n5\n’ ’",
        "options": [
            "5 ln ’ ’ 3 ’ ’",
            "4 ln 2 25 ’ ’",
            "5 ln ’ ’ 12 ’ ’",
            "4",
            "5"
        ],
        "answerLetter": "B",
        "answer": "4 ln 2 25 ’ ’",
        "explanation": "Official solution: B\n\n5\n’ ’\n0.4 = P X < 4 ln = 1 − exp − 4 ln(5 / 3) / β\n[ ]\n’ ’\n3\n’ ’\n− 4/ β − 4/ β 4/ β\n’ ’\n0.6 = exp − 4 ln(5 / 3) / β = exp ln (5 / 3) = (5 / 3) = (0.6)\n[ ]\n{ }\n’ ’\n4 / β = 1\nβ = 4\nThen,\n0.5 = 1 − exp( − M / 4)\n0.5 = exp( − M / 4)\nln 0.5 = − M / 4\nM = 4( − ln 0.5) = 4 ln 2."
    },
    {
        "id": 554,
        "topic": "SOA Exam P Sample Question",
        "question": "The base fare charged by airlines for flights from City A to City B is uniformly\ndistributed on [100, 225]. In addition to the base fare, the airlines charge a processing fee\nof 15 and a 30% fuel surcharge applied to the base fare.\nCalculate the standard deviation of the total charge for a flight from City A to City B.",
        "options": [
            "10.8",
            "36.1",
            "41.1",
            "46.9",
            "61.9"
        ],
        "answerLetter": "D",
        "answer": "46.9",
        "explanation": "Official solution: D\n\nLet X be uniformly distributed on [100, 225]. Let C be the total charge:\nC = 15 + 1.3 X\n2\n(225 − 100)\n2 2\nVar( C ) = 1.3 Var( X ) = 1.3 = 2200.52\n12\nSD( C ) = 2200.52 = 46.91."
    },
    {
        "id": 555,
        "topic": "SOA Exam P Sample Question",
        "question": "The amount of beverage filled into each bottle by a bottling machine is independently and\nnormally distributed with mean 12.0 ounces and standard deviation σ ounces.\nApproximately 20% of all 24-bottle cases contain more than 290 ounces of total\nbeverage.\nσ\nCalculate .",
        "options": [
            "0.01",
            "0.10",
            "0.49",
            "2.38",
            "10.10 th"
        ],
        "answerLetter": "C",
        "answer": "0.49",
        "explanation": "Official solution: C\n\n2\nX\nLet amount of beverage in one bottle i , in ounces: X ’ N (12, σ ), i = 1, ’ , 24.\ni i\n24 2\nY ’ N (288, 24 σ )\nLet = amount of beverage in one case, in ounces.\nY = X\n∑ i\ni = 1\nP Y [ > 290] = 0.20\n’ ’\n290 − 288\nP Z > = 0.20\n’ ’\n2\n24 σ\n’ ’\n290 − 288\n= 0.84162\n2\n24 σ\nσ = 0.4851."
    },
    {
        "id": 556,
        "topic": "SOA Exam P Sample Question",
        "question": "The profit on an individual insurance policy is normally distributed. The 60 percentile\nth\nof the profit is 1000. The 80 percentile of the profit is 2000.\nth\nCalculate the 95 percentile, to the nearest 100, of the profit.",
        "options": [
            "2300",
            "2400",
            "2700",
            "3400",
            "3900"
        ],
        "answerLetter": "D",
        "answer": "3400",
        "explanation": "Official solution: D\n\n1000 − μ\n’ ’\nP Z < = 0.60\n’ ’\nσ\n’ ’\n1000 − μ\n= 0.253347\nσ\n2000 − μ\n’ ’\nP Z < = 0.80\n’ ’\nσ\n’ ’\n2000 − μ\n= 0.841621\nσ\nDivide the first equation by the second equation:\n1000 − μ 0.253347\n= = 0.301023\n2000 − μ 0.841621\n1000 − μ = 602.046 − 0.301023 μ\nμ = (1000 − 602.046) / (1 − 0.301023) = 569.338\nThen,\nσ = (1000 − 569.338) / 0.253347 = 1699.89\nth\nSolve for the 95 percentile:\nN − 569.338\n’ ’\nP Z < = 0.95\n’ ’\n1699.89\n’ ’\nN − 569.338\n= 1.644854\n1699.89\nN = 3365"
    },
    {
        "id": 557,
        "topic": "SOA Exam P Sample Question",
        "question": "A customer just purchased a refrigerator with a five-year warranty. The number of years\nbefore the refrigerator malfunctions is exponentially distributed. The probability that the\nrefrigerator malfunctions before the five-year warranty expires is 0.40.\nCalculate the standard deviation of the number of years before the refrigerator\nmalfunctions.",
        "options": [
            "0.10",
            "3.13",
            "5.46",
            "9.79",
            "12.50"
        ],
        "answerLetter": "D",
        "answer": "9.79",
        "explanation": "Official solution: D\n\nLet X = # of years before malfunction, which is exponentially distributed with mean β . Then,\n− x / β\nP X < x = 1 − e\n[ ]\n− 5/ β\nP X < 5 = 1 − e = 0.40\n[ ]\n− 5/ β\ne = 0.60\n− 5\nβ = = 9.78808\nln(0.60)\nwhich equals the standard deviation."
    },
    {
        "id": 558,
        "topic": "SOA Exam P Sample Question",
        "question": "The probability is 0.45 that a mouse exposed to a certain disease will develop it.\nThe events of individual mice developing the disease are all mutually independent.\nCalculate the probability that the tenth mouse exposed to the disease will be the third to\ncatch it.",
        "options": [
            "0.0014",
            "0.0499",
            "0.1110",
            "0.1165",
            "0.1665"
        ],
        "answerLetter": "B",
        "answer": "0.0499",
        "explanation": "Official solution: B\n\nThe random variable X , defined as # of mice exposed to such disease on which the third mouse\ncatches it, follows a negative binomial distribution. The probability for the third success on the\ntenth try is:\n9\n’ ’\n3 7\n(0.45) (0.55) = 0.049943.\n’ ’\n2\n’ ’"
    },
    {
        "id": 559,
        "topic": "SOA Exam P Sample Question",
        "question": "Brand A air conditioning units have twice the expected life span of Brand B air\nconditioning units. The life span for each brand is exponentially distributed.\nThe probability that a Brand A air conditioning unit lasts at least 15 years is 0.046656.\nCalculate the probability that a Brand B air conditioning unit lasts at least 5 years.",
        "options": [
            "0.01",
            "0.03",
            "0.07",
            "0.13",
            "0.18"
        ],
        "answerLetter": "D",
        "answer": "0.13",
        "explanation": "Official solution: D\n\nX X\nLet and represent the lifespans of the first and second units, respectively. Both are\n1 2\nmodeled by an exponential distribution. The mean for Brand A is The mean for Brand B is\nβ .\n0.5 β . For Brand A,\n− 15/ β\nP X > 15 = e = 0.046656\n[ ]\n1\nβ = 4.894038.\n− 5/(0.5 β ) − 5/2.447019\nFor Brand B: P X > 5 = e = e = 0.1296.\n[ ]\n2"
    },
    {
        "id": 560,
        "topic": "SOA Exam P Sample Question",
        "question": "Homeowner losses due to fire are exponentially distributed with mean 6.\nHomeowners insurance policy A reimburses up to a maximum of m for a loss due to fire.\nHomeowners insurance policy B, with a different premium, reimburses up to a maximum\nof m + 2 for a loss due to fire.\nLet p be the probability that a loss due to fire is partially unreimbursed under policy A.\nA\nLet p be the probability that a loss due to fire is partially unreimbursed under policy B.\nB\np\nB\nDetermine .\np\nA\n− 12",
        "options": [
            "e − 1/3",
            "e − ( m + 2)/6 1 − e",
            "− m /6 1 − e − 6 m − 12 1 − e",
            "− 6 m 1 − e m",
            "m + 2"
        ],
        "answerLetter": "B",
        "answer": "e − ( m + 2)/6 1 − e",
        "explanation": "Official solution: B\n\n− x /6\nFor an exponential distribution with random variable X and with mean 6: P[ X > x ] = e .\n− m /6 − ( m + 2)/6\np = e and p = e\nA B\n− ( m + 2)/6\np e\n− [( m + 2) − m ]/6 − 1/3\nB\n= = e = e .\n− m /6\np e\nA"
    },
    {
        "id": 561,
        "topic": "SOA Exam P Sample Question",
        "question": "From a collection of eight keys, Door A can only be opened with one key and Door B can\nonly be opened with one other key.\nCalculate the probability that among four randomly selected keys, exactly three keys will\nopen neither door.",
        "options": [
            "0.03",
            "0.11",
            "0.29",
            "0.42",
            "0.57"
        ],
        "answerLetter": "E",
        "answer": "0.57",
        "explanation": "Official solution: E\n\n8 2 6\n’ ’ ’ ’ ’ ’\n’ ’ ’ ’ ’ ’\nThere are = 70 ways that 4 keys can be selected. Of those 70 ways, = 40 contain\n’ ’ ’ ’ ’ ’\n4 1 3\n’ ’ ’ ’ ’ ’\n40\nexactly one fitting key. The solution is thus\n= 0.5714.\n70"
    },
    {
        "id": 562,
        "topic": "SOA Exam P Sample Question",
        "question": "The damage from an accident at a certain intersection follows a uniform distribution on\nthe interval [ a , b ], where 0 < a < 3. The probability that the damage is greater than 4,\ngiven that it is greater than 3, is 0.90. The probability that the damage is greater than 4,\ngiven that it is less than 11, is 0.70.\nCalculate the unconditional probability that the damage is greater than 4.",
        "options": [
            "0.70",
            "0.75",
            "0.80",
            "0.85",
            "0.90 400"
        ],
        "answerLetter": "B",
        "answer": "0.75",
        "explanation": "Official solution: B\n\nb − 4\nP X > 4\n[ ] b − 4\nb − a\n0.9 = P X > 4 | X > 3 = = =\n[ ]\nb − 3\nP X > 3 b − 3\n[ ]\nb − a\nb − 4 = (0.9)( b − 3)\nb = 1.3 / 0.1 = 13\n7\nP 4 < X < 11\n[ ] 7\n13 − a\n0.7 = P X > 4 | X < 11 = = = = 0.7\n[ ]\n11 − a\nP X < 11 11 − a\n[ ]\n13 − a\n0.7(11 − a ) = 7\na = 1\n13 − 4 9\nP[ X > 4] = = = 0.75\n13 − 1 12"
    },
    {
        "id": 563,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses under a boat insurance policy are exponentially distributed with mean .\nln 2\nFor each loss, the claim payment is the amount of the loss, up to a maximum of 1000.\nCalculate the expected value of a claim payment.",
        "options": [
            "298",
            "367",
            "400",
            "475",
            "577"
        ],
        "answerLetter": "D",
        "answer": "475",
        "explanation": "Official solution: D\n\nLet be the mean. The expected claim payment is\nβ = 400 / ln 2\n∞ 1000 ∞\n1000 ∞\n− 1 − x / β − 1 − x / β − 1 − x / β − x / β − x / β\nmin x ,1000 β e dx = β xe dx + 1000 β e dx = − x + β e − 1000 e\n( ) ( )\n∫ ∫ ∫\n0 1000\n0 0 1000\n400\n− 1000/ β − 1000/ β − 1000/ β − 2.5ln 2\n= β − 1000 + β e + 1000 e = β 1 − e = 1 − e = 475.06.\n( )\n( ) ( )\nln 2"
    },
    {
        "id": 564,
        "topic": "SOA Exam P Sample Question",
        "question": "The length of an exchange student’s phone call depends on whether the call is domestic\nor international. Lengths of domestic calls are exponentially distributed with a mean of\n0.75 minutes, and lengths of international calls are exponentially distributed with a mean\nof 0.50 minutes. Each call has a 40% probability of being a domestic call and a 60%\nprobability of being an international call.\nCalculate the probability that the length of a randomly selected phone call by the student\nis between one and three minutes.",
        "options": [
            "0.178",
            "0.200",
            "0.222",
            "0.250",
            "0.378"
        ],
        "answerLetter": "A",
        "answer": "0.178",
        "explanation": "Official solution: A\n\nDomestic :\n− 3/0.75 − 1/0.75\nP [1 < X < 3] = 1 − e − 1 − e = 0.245281\n( ) ( )\nInternational :\n− 3/0.5 − 1/0.5\nP [1 < X < 3] = 1 − e − 1 − e = 0.132857\n( ) ( )\nThe desired probability is\n0.4(0.245281) + 0.6(0.132857) = 0.17783."
    },
    {
        "id": 565,
        "topic": "SOA Exam P Sample Question",
        "question": "The proportion of cotton plants on a large farm infested with boll weevils is modeled by a\ncontinuous random variable with probability density function\n3\n’\n20 x (1 − x ), for 0 ≤ x ≤ 1\n’\nf ( ) x = ’\n0, otherwise.\n’\n’\nCalculate the standard deviation of the proportion of cotton plants on the farm that are\ninfested with boll weevils.",
        "options": [
            "0.032",
            "0.178",
            "0.476",
            "0.690",
            "0.959"
        ],
        "answerLetter": "B",
        "answer": "0.178",
        "explanation": "Official solution: B\n\nThis is a beta distribution with α = 4 and β =2.\nαβ 4 × 2 2\n= = = 0.031746\nThe variance of a Beta distribution is:\n2 2\n( α + β ) ( α + β + 1) 6 × 7 63\n0.031746 = 0.178174.\nSo, the standard deviation is:\nThe variance can also be calculated directly. The mean is\n1 1\n1\n4 4 5 5 6\n20 x (1 − x dx ) = 20 x − 20 x ) dx = 20 x / 5 − 20 x / 6 = 20 / 5 − 20 / 6 = 2 / 3.\n∫ ∫\n0\n0 0\nThe second moment is\n1 1\n1\n5 5 6 6 7\n20 x (1 − x dx ) = 20 x − 20 x ) dx = 20 x / 6 − 20 x / 7 = 20 / 6 − 20 / 7 = 10 / 21.\n∫ ∫\n0\n0 0\n2\n10 / 21 − (2 / 3) = 30 / 63 − 28 / 63 = 2 / 63.\nThe variance is"
    },
    {
        "id": 566,
        "topic": "SOA Exam P Sample Question",
        "question": "The annual number of claims per policy for a class of insurance policies is modeled by a\nPoisson distribution with mean 1.20.\nA policy is randomly selected from those policies that had at least one claim in the past\nyear.\nCalculate the probability that the selected policy had at least three claims in the past year.",
        "options": [
            "0.10",
            "0.12",
            "0.15",
            "0.17",
            "0.20"
        ],
        "answerLetter": "D",
        "answer": "0.17",
        "explanation": "Official solution: D\n\nLet X denote the number of claims in the past year for a randomly selected policy. We are\nlooking to find:\n− 1.2 0 − 1.2 1 − 1.2 2\n’ ’\ne 1.2 e 1.2 e 1.2\n1 − + +\n’ ’\n0! 1! 2!\nP X ( ≥ 3) 0.120513\n’ ’\nP X ( ≥ 3 | X ≥ 1) = = = = 0.17246.\n− 1.2 0\nP X ( ≥ 1) e 1.2 0.698806\n1 −\n0!"
    },
    {
        "id": 567,
        "topic": "SOA Exam P Sample Question",
        "question": "A company tests five batteries. Each battery has a probability p of being defective, where\np is a constant. The events of different batteries being defective are mutually\nindependent.\nThe number of defective batteries out of the five batteries is a random variable, N, where\n2\nE N = 1.80.\n( )\nCalculate Var( N ) .",
        "options": [
            "0.80",
            "0.98",
            "1.15",
            "1.67",
            "1.80"
        ],
        "answerLetter": "A",
        "answer": "0.80",
        "explanation": "Official solution: A\n\nThe second moment is the variance plus the square of the mean. For a binomial distribution, we\nhave (knowing that p must be positive)\n2 2\n1.80 = 5 p (1 − p ) + (5 p ) = 5 p + 20 p\n2\n0 = 20 p + 5 p − 1.80\n− 5 ± 25 + 144 − 5 + 13\np = = = 0.20.\n40 40\nThe variance is 5 p (1 − p ) = 5(0.2)(1 − 0.2) = 0.80 ."
    },
    {
        "id": 568,
        "topic": "SOA Exam P Sample Question",
        "question": "Policyholders of a particular type of insurance policy will have either zero claims or one\nclaim. The probability of zero claims is 20%. If a claim is received, the claim size\nfollows a normal distribution with mean 50,000 and standard deviation c .\nThe probability that a randomly selected policyholder has a claim exceeding 55,000 is\n0.1837.\nCalculate c .",
        "options": [
            "5546",
            "6125",
            "6490",
            "6756",
            "7120"
        ],
        "answerLetter": "D",
        "answer": "6756",
        "explanation": "Official solution: D\n\nThe probability a randomly selected policyholder had a claim exceeding 55,000 is given by:\n55, 000 − 50, 000\n’ ’\nP[claim]P[claim > 55, 000 | claim] = 0.8P Z > = 0.1837\n’ ’\nc\n’ ’\n55, 000 − 50, 000\n’ ’\nP 0.229625\nZ > =\n’ ’\nc\n’ ’\n55, 000 − 50, 000\n= 0.74008\nc\nc = 6756."
    },
    {
        "id": 569,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance policy covers a house for ten calendar years for losses due to hailstorm and\ntheft. Only one loss due to hailstorm and only one loss due to theft are covered by the\npolicy during any one calendar year.\nth\nFor the k calendar year let H be the event that the policy incurs a loss due to hailstorm\nk\nand let T be the event that the policy incurs a loss due to theft,. Suppose that the events\nk\nH , ’ , H , T , ’ , T are mutually independent, and that\n1 10 1 10\nP H [ ] = 0.2, P T [ ] = 0.1, for all k .\nk k\nCalculate the probability that the total number of hailstorm and theft losses covered by\nthe policy during the ten calendar years is less than two.",
        "options": [
            "0.17",
            "0.23",
            "0.77",
            "0.80",
            "0.83"
        ],
        "answerLetter": "A",
        "answer": "0.17",
        "explanation": "Official solution: A\n\nLet T be the total number of theft claims, T has a binomial distribution with n = 10 and p = 0.1,\nso:\n10\n’ ’\n0 10\nP T [ = 0] = (0.1) (0.9) = 0.348678\n’ ’\n0\n’ ’\n’ 10 ’\n1 9\nP T [ = 1] = (0.1) (0.9) = 0.387420\n’ ’\n1\n’ ’\nLet H be the total number of hailstorm claims, H has a binomial distribution with n = 10 and p =\n0.2, so:\n10\n’ ’\n0 10\nP H [ = 0] = (0.2) (0.8) = 0.107374\n’ ’\n0\n’ ’\n10\n’ ’\n1 9\nP H [ = 1] = (0.2) (0.8) = 0.268435\n’ ’\n1\n’ ’\nP[ T + H < 2] = P T [ = 0] [ P H = 0] + P T [ = 0] [ P H = 1] + P T [ = 1] [ P H = 0]\n= (0.348678)(0.107374) + (0.348678)(0.268435) + (0.387420)(0.107374)\n= 0.172635."
    },
    {
        "id": 570,
        "topic": "SOA Exam P Sample Question",
        "question": "A homeowner hires a moving company to transport ten pieces of electronic equipment to\na new home. Each piece is equally likely to be damaged during the move, and the event\nof damage to any one piece is independent of the events of damage to the other pieces.\nThe homeowner fully insures two of these pieces, partially insures three of them, and\nleaves the other five pieces uninsured.\nDuring the move, three pieces are damaged.\nCalculate the probability that at least one damaged piece is fully insured and at least one\ndamaged piece is partially insured.",
        "options": [
            "0.242",
            "0.250",
            "0.325",
            "0.378",
            "0.400"
        ],
        "answerLetter": "C",
        "answer": "0.325",
        "explanation": "Official solution: C\n\nC\nThere are = 120 possible and equally likely combinations of three damaged pieces.\n10 3\nThere are three events to add up, with the indicated number of possibilities.\ni) 1 damaged piece insured, 1 damaged piece partially insured, 1 damaged piece uninsured;\nC ( C )( C ) = 2(3)(5) = 30.\n2 1 3 1 5 1\nii) 1 damaged piece insured, 2 damaged pieces partially insured, 0 damaged pieces uninsured;\n( C )( C )( C ) = 2(3)(1) = 6.\n2 1 3 2 5 0\niii) 2 damaged pieces insured, 1 damaged piece partially insured, 0 damaged pieces uninsured;\n( C )( C )( C ) = 1(3)(1) = 3.\n2 2 3 1 5 0\nThe solution is (30 + 6 + 3)/120 = 39/120 = 0.325."
    },
    {
        "id": 571,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X be a continuous random variable with density function\n’ x\n, for − 2 < x < 4\n’\nf ( ) x = ’\n10\n’\n0, otherwise.\n’\nCalculate Var( X ).",
        "options": [
            "0.25",
            "2.52",
            "3.32",
            "4.13",
            "4.93"
        ],
        "answerLetter": "C",
        "answer": "3.32",
        "explanation": "Official solution: C\n\n0 4\n1 1 8 64 56\n2 2\nE( X ) = − x dx + x dx = − + =\n∫ ∫\n10 10 30 30 30\n− 2 0\n0 4\n1 1 16 256 272\n2 3 3\nE( X ) = − x dx + x dx = + =\n∫ ∫\n10 10 40 40 40\n− 2 0\n2\n272 56\n’ ’\nVar( X ) = − = 3.3156.\n’ ’\n40 30\n’ ’"
    },
    {
        "id": 572,
        "topic": "SOA Exam P Sample Question",
        "question": "In a large city, 40% of the intersections are safe, while all others are dangerous. The\nnumbers of accidents occurring annually at individual safe and dangerous intersections\nare Poisson distributed with means 0.5 and 1.0, respectively.\nNo accidents occurred during 2004 at Thirty-Fourth Street and Vine Street, an\nintersection within the city.\nCalculate the probability that Thirty-Fourth Street and Vine is a safe intersection.",
        "options": [
            "0.24",
            "0.40",
            "0.46",
            "0.52",
            "0.62"
        ],
        "answerLetter": "D",
        "answer": "0.52",
        "explanation": "Official solution: D\n\nP[no accidents | safe]P[safe]\nP[safe|no accidents] =\nP[no accidents| safe]P[safe]+P[no accidents| dang]P[dang]\n− 0.5\ne (0.4)\n= = 0.52.\n− 0.5 − 1\ne (0.4) + e (0.6)"
    },
    {
        "id": 573,
        "topic": "SOA Exam P Sample Question",
        "question": "A company insures 40,000 drivers. The annual number of auto accidents for individual\ndrivers is modeled by mutually independent Poisson random variables with mean 0.16.\nCalculate the coefficient of variation for the total annual number of auto accidents for all\n40,000 drivers.",
        "options": [
            "0.01",
            "0.16",
            "0.40",
            "1.00",
            "2.50"
        ],
        "answerLetter": "A",
        "answer": "0.01",
        "explanation": "Official solution: A\n\nThe expected number of accidents for a single driver is 0.16.\nThe expected number of accidents for 40,000 drivers is 40,000(0.16) = 6,400\nThe variance of the number of accidents for a single driver is 0.16.\nThe variance of the number of accidents for 40,000 drivers is 40.000(0.16) = 6,400 (the variance\nof the sum of independent random variables is the sum of their variances).\n6400\nCV( X ) = = 0.0125.\n6400"
    },
    {
        "id": 574,
        "topic": "SOA Exam P Sample Question",
        "question": "A gardener models his strawberry ( S ) / blueberry ( B ) harvest with the following joint\nprobability distribution. Note that three of the entries are smudged and cannot be read.\nB\n1 2 3 4 5\n1 0.07 0.06 0.06 0.05 0.01\nS\n2 0.07 0.10 0.08 0.05 0.03\n3 0.04 0.05 0.06 0.05 0.04\n4 0.01 0.02 ? ? ?\nCalculate the variance of the strawberry harvest.",
        "options": [
            "1.03",
            "1.04",
            "1.07",
            "1.09",
            "Cannot be determined based on information provided."
        ],
        "answerLetter": "D",
        "answer": "1.09",
        "explanation": "Official solution: D\n\n0.25, for s = 1\n’\n’\n0.33, for s = 2\n’\np s ( ) = ’\n0.24, for s = 3\n’\n’\n0.18, for s = 4\n’\nE( S ) = 0.25(1) + 0.33(2) + 0.24(3) + 0.18(4) = 2.35\n2 2 2 2 2\nE( S ) = 0.25(1 ) + 0.33(2 ) + 0.24(3 ) + 0.18(4 ) = 6.61\n2\nVar( S ) = 6.61 − 2.35 = 1.0875."
    },
    {
        "id": 575,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurer's quarterly profits are independent and normally distributed with mean 8 and\nstandard deviation 24. A quarterly loss counts as a negative profit.\nLet Z represent the standard normal random variable.\nDetermine the probability that the insurer makes an overall positive profit in a given four-\nquarter period.",
        "options": [
            "P[ Z > –3.00]",
            "P[ Z > –1.50]",
            "P[ Z > –0.67]",
            "P[ Z > –0.33]",
            "P[ Z > –0.17]"
        ],
        "answerLetter": "C",
        "answer": "P[ Z > –0.67]",
        "explanation": "Official solution: C\n\nThe yearly mean = 4 × 8 = 32\n2\nThe yearly variance = 4 × 24 = 2304\nYearly standard deviation = 2304\n’ 0 − 32 ’\nAnswer = P X [ > 0] = P Z > = P Z > − 0.67\n[ ]\n’ ’\n2304\n’ ’"
    },
    {
        "id": 576,
        "topic": "SOA Exam P Sample Question",
        "question": "A light bulb’s lifetime in months is uniformly distributed on [0, 40].\nLet a be a positive real number less than 30. The probability that the light bulb fails\nwithin 30 months, given that it is working after a months, equals 0.60.\nCalculate the value of a .",
        "options": [
            "6",
            "12",
            "15",
            "16",
            "18"
        ],
        "answerLetter": "C",
        "answer": "15",
        "explanation": "Official solution: C\n\n0.6 = P[lifetime < 30 | lifetime > a ]\nP[ a < lifetime < 30]\n=\nP[lifetime > a ]\n30 − a\n30 − a\n40 − 0\n= =\n40 − a\n40 − a\n40 − 0\n0.60(40 − a ) = 30 − a\n24 − 0.60 a = 30 − a\n0.40 a = 6\na = 15."
    },
    {
        "id": 577,
        "topic": "SOA Exam P Sample Question",
        "question": "A homeowners insurance company pays claims only for thefts and fires. This year, the\ncompany's total theft losses are normally distributed with mean 100 and standard\ndeviation 40. The company's total fire losses are normally distributed with mean 150 and\nstandard deviation 30. Theft losses are independent of fire losses.\nCalculate the coefficient of variation for the company's combined theft and fire losses this\nyear.",
        "options": [
            "0.20",
            "0.28",
            "0.30",
            "0.40",
            "0.60"
        ],
        "answerLetter": "A",
        "answer": "0.20",
        "explanation": "Official solution: A\n\nX = total claim for thefts\nY = total claim for fires\nE X ( ) = 100, E Y ( ) = 150\nE X ( + Y ) = 250\n2 2\nVar X ( ) = 40 , Var Y ( ) = 30\n2 2\nVar X ( + Y ) = 40 + 30 = 2500\nSD X ( + Y ) = 50\n50\nCV = = 0.20.\n250"
    },
    {
        "id": 578,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company offers two kinds of insurance: automobile insurance and\nhomeowners insurance. This year, the company's profit from automobile insurance is\nnormally distributed with mean 200 and standard deviation 400. The company's profit\nfrom homeowners insurance is normally distributed with mean 400 and standard\ndeviation 300. The two profits are independent.\nLet Z represent the standard normal random variable.\nDetermine the probability that the company's overall profit this year is positive.",
        "options": [
            "P[ Z > –1.83]",
            "P[ Z > –1.20]",
            "P[ Z > –0.86]",
            "P[ Z > –0.83]",
            "P[ Z > –0.50]"
        ],
        "answerLetter": "B",
        "answer": "P[ Z > –1.20]",
        "explanation": "Official solution: B\n\nLet X – automobile Insurance\nLet Y – homeowners insurance\nE( X + Y ) = 200 + 400 = 600\n2 2\nVar( X + Y ) = 400 + 300 = 250, 000\nSD( X + Y ) = 250, 000 = 500\n0 − 600\n’ ’\nP[ X + Y > 0] = P Z > = P[ Z > − 1.2].\n’ ’\n500\n’ ’"
    },
    {
        "id": 579,
        "topic": "SOA Exam P Sample Question",
        "question": "The time T , in years, a fuse lasts is a random variable with density function\n− t\n’\nte , for t > 0\ng ( t ) =\n’\n0 , otherwise.\n’\nCalculate the probability that a fuse lasts at most two years, given that it lasts at least one\nyear.",
        "options": [
            "0.061",
            "0.330",
            "0.448",
            "0.736",
            "0.807"
        ],
        "answerLetter": "C",
        "answer": "0.448",
        "explanation": "Official solution: C\n\nP[1 < T < 2]\nP[ T < 2 | T > 1] =\nP[ T > 1]\n2 ∞\n− t − t − t − t 2 − t − t ∞\n’ ’ ’ ’\n= te dt / te dt = − te − e | / − te − e |\n1 1\n∫ ∫\n’ ’ ’ ’\n1 1\n3\n− 1 − 2 − 1 − 1\n= ’ 2 e − 3 e ’ / ’ 2 e ’ = 1 − e = 0.4482\n’ ’ ’ ’\n2"
    },
    {
        "id": 580,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X , X , X , X be independent observations of a random variable with mean 10 and\n1 2 3 4\nstandard deviation 3.\nCalculate the variance of 3 X − X − X − X .\n1 2 3 4",
        "options": [
            "27",
            "36",
            "54",
            "81",
            "108"
        ],
        "answerLetter": "E",
        "answer": "108",
        "explanation": "Official solution: E\n\nVar (3 X − X − X − X )\n1 2 3 4\n= 9 Var X ( ) + Var X ( ) + Var X ( ) + Var X ( )\n1 2 3 4\n= 9(9) + 9 + 9 + 9 = 108"
    },
    {
        "id": 581,
        "topic": "SOA Exam P Sample Question",
        "question": "The following table gives the joint probability function of two random variables X and Y :\nX\n0 1 2\n0 1/6 0 1/2\nY\n1 0 1/3 0\nCalculate Cov( X , Y ).",
        "options": [
            "–1/9",
            "0",
            "1/18",
            "1/9",
            "2/9"
        ],
        "answerLetter": "A",
        "answer": "–1/9",
        "explanation": "Official solution: A\n\n1 1 1 4\nE( X ) = 0 × + × 1 + 2 × =\n6 3 2 3\n2 1 1\nY = × + × =\nE( ) 0 1\n3 3 3\n1 1 1 1\n’ ’ ’ ’ ’ ’\nE( XY ) = 0 × 0 × + 1 × 0 × 0 + 2 × 0 × + 0 × × 1 0 + 1 1 × × + 2 × × 1 0 =\n( ) ( ) ( )\n’ ’ ’ ’ ’ ’\n6 2 3 3\n’ ’ ’ ’ ’ ’\n1 4 1 3 − 4 1\nCov( X Y , ) = − × = = − .\n3 3 3 9 9"
    },
    {
        "id": 582,
        "topic": "SOA Exam P Sample Question",
        "question": "The annual amount a travel insurance company pays for claims has standard deviation 3.\nThe 52 weekly amounts the company pays for claims are independent and have the same\nstandard deviation.\nCalculate the standard deviation of each of these weekly amounts.\n3",
        "options": [
            "2 52 3",
            "52 3",
            "52 3",
            "52",
            "3 52"
        ],
        "answerLetter": "D",
        "answer": "52",
        "explanation": "Official solution: D\n\nFor independent random variables, the variance of the sum equals the sum of the variances.\nTherefore:\n2\nVar(Annual Claim Payment) = 3 = 9\n9 = 52 × Var(Weekly Claim Payment)\n9\nVar(Weekly Claim Payment) =\n52\n9 3\nSD(Weekly Claim Payment) = = .\n52\n52"
    },
    {
        "id": 583,
        "topic": "SOA Exam P Sample Question",
        "question": "Claim amounts from accidents in an amusement park are uniformly distributed on an\ninterval. The probability that a randomly selected claim amount is less than 12 is 0.50.\nThe probability that a randomly selected claim amount exceeds 6 is 0.875.\nCalculate the probability that a randomly selected claim amount is less than 10, given that\nit exceeds 6.",
        "options": [
            "2/9",
            "1/4",
            "2/7",
            "3/8",
            "3/7"
        ],
        "answerLetter": "C",
        "answer": "2/7",
        "explanation": "Official solution: C\n\nLet X represent the loss. X is uniformly distributed on [ a , b ].\n12 − a\n0.5 = P X ( < 12) =\nb − a\n6 − a\n0.875 = P X ( > 6) ⇒ 0.125 = P X ( < 6) =\nb − a\n0.5 12 − a\n= =\n4\n0.125 6 − a\n24 − 4 a = 12 − a ⇒ a = 4\n12 − 4\n0.5 = ⇒ b = 20\nb − 4\nP (6 < X < 10) 4 /16\nP X ( < 10 | X > 6) = = = 2 / 7\nP X >\n( 6) 14 /16"
    },
    {
        "id": 584,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of thefts in any year a warehouse owner experiences is modeled by a Poisson\ndistribution. In each year, the probability of at least one theft is 0.10, and the yearly\nnumber of thefts are independent.\nCalculate the variance of the total number of thefts the owner experiences in the next 15\nyears.",
        "options": [
            "0.11",
            "0.41",
            "1.35",
            "1.50",
            "1.58"
        ],
        "answerLetter": "E",
        "answer": "1.58",
        "explanation": "Official solution: E\n\nLet X be number of thefts in one year and S be the total number of thefts in 15 years. The sum of\n15 independent Poisson distributions with mean λ is Poisson with mean 15λ.\n− λ 0\ne λ\n− λ\n0.10 = P[ X ≥ 1] = 1 − P[ X = 0] = 1 − = 1 − e\n0!\n− λ\n0.9 = e\nλ = 0.105361\nVar( S ) = 15 λ = 1.580408."
    },
    {
        "id": 585,
        "topic": "SOA Exam P Sample Question",
        "question": "The random variable Y has density function\n2\n’ y y\n− , for 0 < y < 6\n’\nf ( y ) = ’\n6 36\n’\n0, otherwise.\n’\nCalculate P[1 < Y < 3 2 < Y < 4] .",
        "options": [
            "0.111",
            "0.241",
            "0.481",
            "0.500",
            "0.885"
        ],
        "answerLetter": "D",
        "answer": "0.500",
        "explanation": "Official solution: D\n\n3\n2\ny y\n− dy\n∫\n6 36\nP[2 < Y < 3]\n2\nP[1 < Y < 3 | 2 < Y < 4] = =\n4\n2\nP[2 < Y < 4] y y\n− dy\n∫\n6 36\n2\n3\n2 3\ny y\n−\n12 108\n0.240741\n2\n= = = 0.5.\n4\n2 3\n0.481481\ny y\n−\n12 108\n2"
    },
    {
        "id": 586,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company sells an automobile policy that pays 80% of any losses that\nexceed the deductible of 500. The loss amounts (in units of 1000) follow an exponential\ndistribution with mean 6.\nCalculate the probability that the policy payment on a randomly selected loss exceeds\n5000.",
        "options": [
            "0.024",
            "0.318",
            "0.325",
            "0.675",
            "0.682"
        ],
        "answerLetter": "C",
        "answer": "0.325",
        "explanation": "Official solution: C\n\nLet L represent the size (in thousands) of a single loss and let Y represent the amount paid (in\nthousands) on a loss by the insurance company. Then, Y = 0 . 80 ( L − 0 . 5 ) for all losses L > 0 . 5\nwhile Y = 0 for smaller losses. Then,\n− 6.75/6\nP Y ( > 5) = P [0.8( L − 0.5) > 5] = P L [ > 6.75] = e = 0.3247."
    },
    {
        "id": 587,
        "topic": "SOA Exam P Sample Question",
        "question": "Once each morning and once each afternoon, the driver of a delivery truck is assigned to\na route with a length that depends upon the items being delivered. The morning route\nmay be 5, 10 or 40 miles. The afternoon route may be 0, 5 or 10 miles. The probabilities\nwith which the pairs of routes have been assigned are:\nLength of Afternoon Route\n(miles)\n0 5 10\nLength of\n5 0 2 p 3 p\nMorning\n10 0 2 p 0\nRoute(miles)\n40 q 0 0\nThe lengths of the assigned afternoon routes have a mean of 6 miles.\nCalculate the variance of the length of an afternoon route.",
        "options": [
            "11.0",
            "12.0",
            "16.5",
            "26.5",
            "42.0"
        ],
        "answerLetter": "B",
        "answer": "12.0",
        "explanation": "Official solution: B\n\n1 = 2 p + 3 p + 2 p + q = 7 p + q\n6 = 0( ) q + 5(4 p ) + 10(3 p ) = 50 p\np = 0.12\nq = 1 − 7 p = 1 − 7(0.12) = 0.16\n2 2 2\nVar[Afternoon Routes] = (0 − 6) (0.16) + (5 − 6) (0.48) + (10 − 6) (0.36) = 12"
    },
    {
        "id": 588,
        "topic": "SOA Exam P Sample Question",
        "question": "The lifetimes of light bulbs are independent and exponentially distributed with common\nmean 1000 hours. A lamp has a single bulb and is continuously on. Each light bulb is\nreplaced immediately after it burns out.\nCalculate the standard deviation of the time, in hours, until the failure of the fifth bulb.",
        "options": [
            "71",
            "158",
            "1000",
            "2236",
            "5000"
        ],
        "answerLetter": "D",
        "answer": "2236",
        "explanation": "Official solution: D\n\nA single bulb’s lifetime has a variance of 1,000,000 (for an exponential distribution the variance\nis the square of the mean).\nThe variance of the sum of five independent light bulb’s lifetimes is 5,000,000. The standard\ndeviation is the square root, 2,236."
    },
    {
        "id": 589,
        "topic": "SOA Exam P Sample Question",
        "question": "In a one-year period, the number of fires that occur in buildings insured by ABC\ninsurance is Poisson distributed with mean 12. The resulting losses are independent\nrandom variables that are also independent of the number of losses, each having density\nfunction\n8 − x\n’\n, for 0 < x < 8\n’\nf ( ) x = ’\n32\n’\n0, otherwise.\n’\nThe payment for any loss is equal to the amount of the loss in excess of a deductible of 2.\nCalculate the expected total payment that ABC must make for losses due to fire that\noccur in a one-year period.",
        "options": [
            "8.0",
            "13.5",
            "16.5",
            "30.0",
            "32.0"
        ],
        "answerLetter": "B",
        "answer": "13.5",
        "explanation": "Official solution: B\n\n8\n8 − x\nE(Total Payment) = 12 ( x − 2) dx\n∫\n32\n2\n8\n12\n2\n= 10 x − x − 16 dx\n∫\n32\n2\n3\n8\n12 ’ x ’\n2\n= 5 x − − 16 x\n’ ’\n32 3 2\n’ ’\n12\n= (21.333 + 14.667) = 13.50.\n32"
    },
    {
        "id": 590,
        "topic": "SOA Exam P Sample Question",
        "question": "Each of three people is holding a biased coin that has probability 0.25 of landing heads.\nThey toss the coins simultaneously. After each round of tosses, if the outcomes are all\nheads or all tails, they will continue to another round; otherwise, they will stop.\nCalculate the probability that there will be exactly five rounds of tosses.",
        "options": [
            "0.0003",
            "0.0029",
            "0.0206",
            "0.0438",
            "0.1030"
        ],
        "answerLetter": "C",
        "answer": "0.0206",
        "explanation": "Official solution: C\n\nProbability that the event does not end in any one round:\n3 3\nP HHH [ ] + P TTT [ ] = 0.25 + 0.75 = 0.4375 .\nProbability that the event ends in any one round:\n1 − 0.4375 = 0.5625.\nProbability that the event ends on the fifth round\nth\n= Pr obability that the event does not end in the first four rounds and ends in the 5 round\n4\n= 0.4375 0.5625 = 0.020608.\n( ) ( )"
    },
    {
        "id": 591,
        "topic": "SOA Exam P Sample Question",
        "question": "In a given year, a manufacturer’s profit from selling warranties is normally distributed\nwith mean 20 and variance 16.\nCalculate the interval, centered at the mean, containing 25% of the probability associated\nwith a single yearly profit.",
        "options": [
            "(12.2, 27.8)",
            "(14.9, 25.1)",
            "(16.0, 24.0)",
            "(17.3, 22.7)",
            "(18.7, 21.3)"
        ],
        "answerLetter": "E",
        "answer": "(18.7, 21.3)",
        "explanation": "Official solution: E\n\nLet X be the profit and Z be a standard normal random variable.\n0.25 = P ( μ − c < X < μ + c )\nμ − c − μ μ − c − μ\n’ ’\n= P < Z <\n’ ’\nσ σ\n’ ’\n= P ( 0.25 − c < Z < 0.25 ) c = P Z ( < 0.25 ) c − P Z ( < − 0.25 ) c\n= P Z ( < 0.25 ) c − 1 + P Z ( < 0.25 ) c\nP Z ( < 0.25 ) c = 0.625\n0.25 c = 0.3186\nc = 1.2744\nThe interval runs from 20 – 1.2744 = 18.7256 to 20 + 1.2744 = 21.2744."
    },
    {
        "id": 592,
        "topic": "SOA Exam P Sample Question",
        "question": "A group of 18 patients is tested for diabetes. Each patient independently has a 0.15\nprobability of testing positive.\nCalculate the mode of the number of patients in the group who test positive.",
        "options": [
            "0",
            "1",
            "2",
            "3",
            "4 th"
        ],
        "answerLetter": "C",
        "answer": "2",
        "explanation": "Official solution: C\n\nLet X = number of patients who test positive for diabetes, which has a binomial distribution with n\n= 18 trials and success probability p = 0.15.\nn 18\n’ ’ ’ ’\n18!\ni n − i i 18 − i i 18 − i\nP X [ = i ] = p (1 − p ) = (0.15) (0.85) = (0.15) (0.85)\n’ ’ ’ ’\ni i\ni !(18 − i )!\n’ ’ ’ ’\nWe need to maximize P [ X = i ].\nThe mean of this distribution is np =18(0.15) = 2.7. Calculate various probabilities near the mean:\nP X [ = 1] = 0.1704\nP X [ = 2] = 0.2556\nP X [ = 3] = 0.2406\nSince binomial probabilities increase, then decrease, the mode is at X = 2."
    },
    {
        "id": 593,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company’s annual profit is normally distributed with mean 39. The 28\npercentile of the annual profit is 21.\nCalculate the percentile associated with an annual profit of 3 for this insurance company.\nth",
        "options": [
            "4 th",
            "6 th",
            "8 th",
            "10 th",
            "12"
        ],
        "answerLetter": "E",
        "answer": "12",
        "explanation": "Official solution: E\n\nLet X = the company’s profit in a given year.\n21 − 39\n’ ’\n0.28 = P[ X < 21] = P Z <\n’ ’\nσ\n’ ’\n− 18\n= − 0.5828\nσ\nσ = 30.885\n3 − 39\n’ ’\nP Z < = P Z [ < − 1.1656] = 0.122.\n’ ’\n30.885\n’ ’"
    },
    {
        "id": 594,
        "topic": "SOA Exam P Sample Question",
        "question": "From a standard deck of 52 playing cards, five cards are chosen without replacement.\nCalculate the probability of obtaining at least two kings, but no aces or jacks.",
        "options": [
            "0.0174",
            "0.0228",
            "0.0240",
            "0.0298",
            "0.0417"
        ],
        "answerLetter": "C",
        "answer": "0.0240",
        "explanation": "Official solution: C\n\nThis is a hypergeometric probability:\nP = Probability of 2 kings and no aces or jacks + Probability of 3 kings and no aces or jacks +\nProbability of 4 kings and no aces or jacks\n4 8 40 4 8 40 4 8 40\n’ ’’ ’’ ’ ’ ’’ ’’ ’ ’ ’’ ’’ ’\n’ ’’ ’’ ’ ’ ’’ ’’ ’ ’ ’’ ’’ ’\n2 0 3 3 0 2 4 0 1\n’ ’’ ’’ ’ ’ ’’ ’’ ’ ’ ’’ ’’ ’\nP = + +\n52 52 52\n’ ’ ’ ’ ’ ’\n’ ’ ’ ’ ’ ’\n5 5 5\n’ ’ ’ ’ ’ ’\n= 0.024025."
    },
    {
        "id": 595,
        "topic": "SOA Exam P Sample Question",
        "question": "The check-out times for customers at a grocery store are modeled by a continuous\nuniform distribution between 1.1 and 8.6 minutes. The store would like to advertise that\n“no more than 5% of customers require more than y minutes to check out.”\nCalculate the minimum value for y .",
        "options": [
            "1.475",
            "7.125",
            "8.170",
            "8.225",
            "8.545"
        ],
        "answerLetter": "D",
        "answer": "8.225",
        "explanation": "Official solution: D\n\nLet X = checkout time, in minutes. Then X has a Uniform distribution on the interval [1.1, 8.6].\ny − 1.1\nP[ X < y ] = = 0.95\n8.6 − 1.1\ny = 8.225."
    },
    {
        "id": 596,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company’s annual profit is normally distributed. The probability that the\nannual profit exceeds 3.50 is 0.3264 and the probability that it exceeds 3.62 is 0.2743.\nCalculate the variance of the insurance company’s annual profit.",
        "options": [
            "0.44",
            "0.64",
            "0.80",
            "1.25",
            "1.56"
        ],
        "answerLetter": "B",
        "answer": "0.64",
        "explanation": "Official solution: B\n\nLet X be the random variable for annual profit.\nP[ X > 3.50] = 0.3264\n3.50 − μ\n’ ’\nP Z > = 0.3264\n’ ’\nσ\n’ ’\n3.50 − μ\n= 0.449876\nσ\nP[ X > 3.62] = 0.2743\n3.62 − μ\n’ ’\nP Z > = 0.2743\n’ ’\nσ\n’ ’\n3.62 − μ\n= 0.599860\nσ\n3.62 − μ 0.599860\n= = 1.33339\n3.50 − μ 0.449876\nμ = [3.50(1.33339) − 3.62] / (1.33339 − 1) = 3.140061\nσ = (3.62 − 3. 140061) / 0.599860 = 0.800085\n2\nσ = 0.640136."
    },
    {
        "id": 597,
        "topic": "SOA Exam P Sample Question",
        "question": "A theft insurance company offers two policies, A and B. Under each policy, a loss is\nuniformly distributed on the interval [ a , 19].\nFor a loss under policy A, the deductible is 0 and the expected value of the claim\npayment is 10.\nFor a loss under policy B, the deductible is 4.\nCalculate the expected value of the claim payment for a loss under policy B.",
        "options": [
            "6.00",
            "6.25",
            "7.50",
            "7.89",
            "8.33 2"
        ],
        "answerLetter": "B",
        "answer": "6.25",
        "explanation": "Official solution: B\n\nA given loss under each policy is uniformly distributed on [ a , 19]. Since the expected claim\npayment on Policy A is 10 when there is no deductible; ( a + 19) / 2 = 10, a = 1\nFor policy B, the expected value is\n19\n2 2 2\n19\n( x − 4) 15 − 0\n( x − 4)(1/18) dx = = = 6.25.\n∫\n4\n36 36\n4"
    },
    {
        "id": 598,
        "topic": "SOA Exam P Sample Question",
        "question": "The profit X on an insurance policy is normally distributed with E( X ) = 74 and\n.\nP[ X > 0] = 0.92\nCalculate the variance of the profit on this policy.",
        "options": [
            "24.88",
            "30.77",
            "34.50",
            "44.20",
            "62.86"
        ],
        "answerLetter": "A",
        "answer": "24.88",
        "explanation": "Official solution: A\n\n2 2 2\nFirst, E( X ) = μ + σ = 74 .\nSecond:\nP[ X > 0] = 0.92\n0 − μ\n’ ’\nP Z > = 0.92\n’ ’\nσ\n’ ’\n0 − μ\n= − 1.405072\nσ\nμ = 1.405072 σ\n2 2\n(1.405072 σ ) + σ = 74\n2\n2.974227 σ = 74\n2\nσ = 24.88"
    },
    {
        "id": 599,
        "topic": "SOA Exam P Sample Question",
        "question": "A random variable is exponentially distributed with mean μ .\nth th\nDetermine the difference between the 75 percentile and the 25 percentile of this\ndistribution.\nln 3",
        "options": [
            "μ",
            "μ",
            "μ ln 2",
            "μ ln 3 2",
            "μ"
        ],
        "answerLetter": "D",
        "answer": "μ ln 3 2",
        "explanation": "Official solution: D\n\nth th\nLet a be the 75 percentile and b be the 25 percentile.\n− x / μ\nP[ X < x ] = 1 − e\n− a / μ\n0.75 = 1 − e\n− a / μ\n0.25 = e\na\nln(0.25) = −\nμ\na = − μ ln(0.25)\nSimilarly,\nb = − μ ln(0.75)\na − b = − μ ln(0.25) − − μ ln(0.75)\n[ ]\n= μ ln(0.75) − ln(0.25)\n[ ]\n= μ ln 3"
    },
    {
        "id": 600,
        "topic": "SOA Exam P Sample Question",
        "question": "Hospitalization losses under a certain policy are mutually independent and each has\ncumulative distribution function\n’\n0, for x ’ 0\n’\n’\n’\n2\n’\nx ’ 15 x\n’\n’\nF x ( ) ’ , for 0 ’ x ’ 1\n’\n’\n16\n’\n’\n’\n1, for x ’ 1.\n’\n’ ’\nFor each hospitalization loss, the insurer reimburses up to a maximum of 0.80.\nCalculate the probability that a policyholder’s first partially unreimbursed hospitalization\nloss occurs on the third hospitalization.",
        "options": [
            "0.027",
            "0.080",
            "0.128",
            "0.148",
            "0.350"
        ],
        "answerLetter": "D",
        "answer": "0.148",
        "explanation": "Official solution: D\n\nLet p = the probability that a given hospitalization loss is fully reimbursed.\n2\n0.8 + 15(0.8)\nThen, p = P loss < 0.8 = F (0.8) = = 0.65 .\n[ ]\n16\nSo, the probability that the first partially unreimbursed loss occurs on the third hospitalization is\n2\n2\np 1 − p = 0.65 (0.35) = 0.147875 .\n( ) ( )"
    },
    {
        "id": 601,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses due to automobile accidents have a probability density function given by\n4\n’\n3 ’ 1000 ’\n, for x > 1000\n’\n’ ’\nf ( ) x = ’\n1000 x\n’ ’\n’\n0, otherwise.\n’\nAn automobile policy has a deductible of 1100.\nCalculate the expected value of the policy payout for a random loss.",
        "options": [
            "140",
            "400",
            "413",
            "826",
            "1240"
        ],
        "answerLetter": "C",
        "answer": "413",
        "explanation": "Official solution: C\n\n4\n∞\n3 ’ 1000 ’\n( x − 1100) dx\n’ ’\n∫\n1000 x\n’ ’\n1100\n∞ ∞\n3 4\n− 3 − 4\n= 3 1000 x dx − 3.3 1000 x dx\n( ) ( )\n∫ ∫\n1100 1100\n∞ ∞\n3 − 2 4 − 3\n3(1000) x 3.3(1000) x\n= −\n− 2 − 3\n1100 1100\n3 4\n3(1000) 3.3(1000)\n= −\n2 3\n2(1100) 3(1100)\n= 1239.67 − 826.45 = 413.22."
    },
    {
        "id": 602,
        "topic": "SOA Exam P Sample Question",
        "question": "A construction worker experiences up to five accidents this year.\ni) The probability of no accidents is three times the probability of exactly one\naccident.\nii) The probability of exactly one accident is four times the probability of exactly\ntwo accidents.\niii) The probability of exactly two accidents is five times the probability of exactly\nthree accidents.\nThe probability of three or fewer accidents is 0.95 .\nCalculate the probability of two or fewer accidents.",
        "options": [
            "0.71",
            "0.84",
            "0.91",
            "0.94",
            "0.96"
        ],
        "answerLetter": "D",
        "answer": "0.94",
        "explanation": "Official solution: D\n\nLet p represent the probability of exactly three accidents. Then,\n0.95 = P[three or fewer accidents]\n= P[3 accidents] + P[2 accidents] + P[1 accident] + P[0 accidents]\n= p + 5 p + 4 × 5 p + 3 × 4 × 5 p = 86 p\n0.95\np = .\n86\nThen,\nP[two or fewer accidents] = P[2 accidents] + P[1 accident] + P[0 accidents]\n= 5 p + 4 × 5 p + 3 × 4 × 5 p = 85 p\n0.95\n= 85 = 0.93895.\n86"
    },
    {
        "id": 603,
        "topic": "SOA Exam P Sample Question",
        "question": "A property-casualty insurer sells only homeowners insurance. Among the policies that\nthe company sold, 40% belong to policyholders who have a security system for their\nhouses and 60% belong to those who did not.\nAssume in any particular year:\ni) For any house without a security system, the number of break-ins follows a\nPoisson distribution, with mean 3.\nii) For any house with a security system, the number of break-ins follows a Poisson\ndistribution, and the probability of no break-ins is three times that for a house\nwithout a security system.\nCalculate the probability that a house has a security system, given that there are exactly\ntwo break-ins in a year.",
        "options": [
            "0.11",
            "0.27",
            "0.40",
            "0.45",
            "0.55"
        ],
        "answerLetter": "D",
        "answer": "0.45",
        "explanation": "Official solution: D\n\nLet S be the number of break-ins with a security system and N be the number without. Let\nE S ( ) = λ . Then,\n− λ − 3\nP S ( = 0) = e = 3 P N ( = 0) = 3 e\n− 3\n− λ = ln(3 e ) = (ln 3) − 3\nλ = 3 − ln 3 = 1.90139.\nLet A be the event that the house has a security system and X be the number of break-ins. Then,\nP X ( = 2 | A P A ) ( )\nP A ( | X = 2) =\nc c\nP X ( = 2 | A P A ) ( ) + P X ( = 2 | A ) P A ( )\n2 − 1.90139\n1.90139 e\n(0.4)\nP S ( = 2) P A ( )\n2!\n= =\nc 2 − 1.90139 2 − 3\n1.90139 e 3 e\nP S ( = 2) P A ( ) + P N ( = 2) P A ( )\n(0.4) + (0.6)\n2! 2!\n0.10800\n= = 0.44549.\n0.10800 + 0.13443"
    },
    {
        "id": 604,
        "topic": "SOA Exam P Sample Question",
        "question": "In a certain region, tornados occur only during the six months from March through\nAugust. The number of tornados in each of these six months follows the same Poisson\ndistribution and the number of tornados in different months are mutually independent.\nThe probability that there are no tornados in the six-month period from March through\nAugust is 0.008.\nCalculate the probability that both the months of July and August are tornado-free,\ngiven that there was a tornado in June.",
        "options": [
            "0.20",
            "0.22",
            "0.32",
            "0.57",
            "0.60"
        ],
        "answerLetter": "A",
        "answer": "0.20",
        "explanation": "Official solution: A\n\n− λ x\ne λ\nLet X be the number of tornadoes in a month where P[ X = x ] = , with λ equaling the mean\nx !\nof the distribution.\nThe number of tornados in six months follows a Poisson distribution with parameter 6 λ .\n− 6 λ 0\ne (6 λ )\nP[none in six months] = = 0.008\n0!\n− 6 λ\ne = 0.008\n1\n− 2 λ\n3\ne = (0.008) = 0.20\n− 2 λ 0\ne (2 λ )\nP[none in two months] = = 0.20.\n0!\nDue to independence, the fact that there were no tornados in June is not relevant."
    },
    {
        "id": 605,
        "topic": "SOA Exam P Sample Question",
        "question": "ElectroUSA is a store that sells portable music players. Ten percent of sales are Brand A\nand the rest are Brand B. The time, in years, until failure for Brand A is modeled by an\nexponential distribution with mean 2, while that for Brand B is modeled by an\nexponential distribution with mean 4.\nA portable music player sold by ElectroUSA fails for the first time within three years of\nthe purchase date.\nCalculate the probability that it is Brand A.",
        "options": [
            "0.08",
            "0.14",
            "0.47",
            "0.60",
            "0.78"
        ],
        "answerLetter": "B",
        "answer": "0.14",
        "explanation": "Official solution: B\n\nLet T be the time until failure. Then,\nPr( T < 3 | A ) Pr( A )\nPr( A T | < 3) =\nPr( T < 3 | A ) Pr( A ) + Pr( T < 3 | B ) Pr( AB )\n− 3/2\n(1 − e )0.1\n= = 0.1406.\n− 3/2 − 3/4\n(1 − e )0.1 + (1 − e )0.9"
    },
    {
        "id": 606,
        "topic": "SOA Exam P Sample Question",
        "question": "Along a highway, automobiles are randomly selected for tire inspections. Let X denote\nthe number of bad front tires and Y the number of bad rear tires on a randomly selected\nautomobile. The joint distribution of X and Y is given by the probability function\n(6 − x )(3 − y )\n’\n, for x = 0,1, 2 and y = 0,1, 2\n’\n58(1 + x − y )\np x y ( , ) = ’\n’\n0, otherwise.\n’\nCalculate the variance of the number of bad front tires among those automobiles with one\nbad rear tire.",
        "options": [
            "7/16",
            "49/100",
            "2/3",
            "7/10",
            "1"
        ],
        "answerLetter": "B",
        "answer": "49/100",
        "explanation": "Official solution: B\n\nThe joint density is:\ny\n0 1 2 Total\n0 36/116 12/116 4/116 52/116\nx 1 15/116 20/116 5/116 40/116\n2 8/116 8/116 8/116 24/116\nTotal 59/116 40/116 17/116 116/116\n12 40, for x = 0\n’\n’\np x ( | y = 1) 20 40, for x = 1\n’\n’\n8 40, for x = 2\n’\nVariance equals\n2\n’ 12 20 8 ’ 12 20 8\n’ ’\n2 2 2\n0 × + 1 × + 2 × − 0 × + × 1 + 2 ×\n’ ’ ’ ’\n40 40 40 40 40 40\n’ ’ ’ ’\n2\n52 36\n’ ’\n= − = 49 /100.\n’ ’\n40 40\n’ ’"
    },
    {
        "id": 607,
        "topic": "SOA Exam P Sample Question",
        "question": "From telephone calls made to a help line, the following statistics are compiled:\ni) 20% of the calls last for at least 2 minutes and less than 4 minutes.\nii) 34% of the calls last for at least 3 minutes and less than 5 minutes.\niii) 42% of the calls last for at least 4 minutes and less than 6 minutes.\niv) 38% of the calls last for at least 5 minutes and less than 7 minutes.\nv) 28% of the calls last for at least 6 minutes and less than 8 minutes.\nCalculate the probability that a randomly selected call will last for either at least 2\nminutes and less than 3 minutes, or at least 7 minutes and less than 8 minutes.",
        "options": [
            "12%",
            "18%",
            "24%",
            "28%",
            "30%"
        ],
        "answerLetter": "B",
        "answer": "18%",
        "explanation": "Official solution: B\n\nDue to mutual exclusivity, 20% + 42% + 28% = 90% of the calls last at least 2 minutes and less\nthan 8 minutes. Also due to mutual exclusivity, 34% + 38% = 72% of the calls last at least 3\nminutes and less than 7 minutes. The solution is the difference, 18%."
    },
    {
        "id": 608,
        "topic": "SOA Exam P Sample Question",
        "question": "Six patients independently have the same probability of having a certain disease.\nThe probability that no patient has the disease is ten times the probability that exactly one\npatient has the disease.\nThe probability that no patient has the disease is x times the probability that exactly three\npatients have the disease.\nCalculate x .",
        "options": [
            "300",
            "1,000",
            "1,800",
            "6,000",
            "10,800"
        ],
        "answerLetter": "E",
        "answer": "10,800",
        "explanation": "Official solution: E\n\nLet p represent the probability that a given patient has the disease.\nUsing the binomial formula, we have:\n’ 6 ’ ’ 6 ’\n6 − 0 6 − 0\n0 0\np 1 − p p 1 − p\n( ) ( )\n3\n’ ’ ’ ’\n0 1 ’ 1 − p ’ 0 1 ’ 1 − p ’\n’ ’ ’ ’\n10 = = and x = = .\n’ ’ ’ ’\n’ 6 ’ 6 p ’ 6 ’ 20 p\n6 1 − 6 − 3\n1 ’ ’ 3 ’ ’\np 1 − p p 1 − p\n( ) ( )\n’ ’ ’ ’\n1 3\n’ ’ ’ ’\n’ 1 − p ’\nFrom the first equation: 60 = . Plug into the second equation:\n’ ’\np\n’ ’\n1\n3\nx = 60 = 10,800.\n20"
    },
    {
        "id": 609,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses under a theft insurance policy have cumulative distribution function\n0, for x < 0\n’\n’\n2\nF x ( ) = c x ( + x ), for 0 ≤ x ≤ 5\n’\n’\n1, for x > 5,\n’\nwhere c is a constant.\nThe policy has a deductible of 3.2 for each loss.\nCalculate the probability that the insurer will pay something to the policyholder on a\ngiven loss.",
        "options": [
            "0.296",
            "0.360",
            "0.448",
            "0.552",
            "0.704"
        ],
        "answerLetter": "D",
        "answer": "0.552",
        "explanation": "Official solution: D\n\nLet X represent the loss. Since it is given that losses never exceed 5, we have\n1\n2\n1 = P[ X ≤ 5] = F (5) = c 5 + 5 = 30 c ⇒ c = .\n( )\n30\nTherefore, the probability that the insurer pays something on a given loss is\n2 1\n’ ’\nP[ X > 3.2] = 1 − P[ X ≤ 3.2] = 1 − F (3.2) = 1 − c 3.2 + 3.2 = 1 − 13.44 = 0.552\n( ) ( )\n’ ’\n30"
    },
    {
        "id": 610,
        "topic": "SOA Exam P Sample Question",
        "question": "Losses are uniformly distributed on the interval [0, 2000]. An insurance policy pays the\namount of each loss up to a maximum of m . The expected value of the claim payment on\na random loss is 910.\nCalculate m .",
        "options": [
            "910",
            "1150",
            "1400",
            "1600",
            "1820"
        ],
        "answerLetter": "C",
        "answer": "1400",
        "explanation": "Official solution: C\n\nLet X represent the loss. We have\nm 2000 2 2\nx m m m (2000 − m ) m\n910 = dx + dx = + = m −\n.\n∫ ∫\n2000 2000 4000 2000 4000\n0 m\n2\nSolving the resulting equation m − 4, 000 m + 3, 640, 000 = 0 for m using the quadratic formula\nyields m = 1400, since the other solution, m = 2600, exceeds 2000."
    },
    {
        "id": 611,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurer’s loss severity random variable, X , has density function\nc x ( − 5), 5 ≤ x ≤ 8\n’\n’\nf ( ) x = c (11 − x ), 8 ≤ x ≤ 11\n’\n’\n0. otherwise\n’\nwhere c is a constant.\nth\nCalculate the 30 percentile of the loss severity.",
        "options": [
            "5.47",
            "6.14",
            "6.80",
            "7.06",
            "7.32"
        ],
        "answerLetter": "E",
        "answer": "7.32",
        "explanation": "Official solution: E\n\nFirst find the constant c of the density function.\n8 11\n’ ’\nc ( x − 5) dx + (11 − x dx ) = 1\n’ ’\n∫ ∫\n’ 5 8 ’\nc 4.5 + 4.5 = 1\n[ ]\n1\nc = .\n9\nThe cumulative distribution function from 5 to 8 is:\nx\n2 2\nx\ny − 5 ( y − 5) ( x − 5)\nF x ( ) = dy = = .\n∫\n5\n9 18 18\n5\nth\nBecause F (8) = 0.5, the 30 percentile must be less than 8. Then,\n2\n( m − 5)\n0.3 = F m ( ) =\n18\n2\n5.4 = ( m − 5)\n2.324 = m − 5\nm = 7.324"
    },
    {
        "id": 612,
        "topic": "SOA Exam P Sample Question",
        "question": "For a certain product, the time until failure is modeled by a distribution with density\nfunction\n− cx\n’\n’ ce , x > 0\nf ( ) x = ’\n0, otherwise,\n’\n’\nwhere c is a constant. The median time until failure is 10 years.\nThe product has a warranty that provides a payment of 35 if failure occurs in the first 5\nyears, 25 if failure occurs after 5 years, but within 7.5 years, and 0 if failure occurs after\n7.5 years.\nCalculate the expected payment under the warranty.",
        "options": [
            "13.06",
            "17.13",
            "20.84",
            "24.58",
            "27.56"
        ],
        "answerLetter": "A",
        "answer": "13.06",
        "explanation": "Official solution: A\n\nFirst, solve for c for this exponential distribution:\n10\nln 2\n− cx − 10 c\nce dx = 1 − e = 0.5 => c = =0.069315\n∫\n10\n0\nNext, the expected cost of the warranty is:\n35 F (5) + 25[ F (7.5) − F (5)]\n− 5 c − 5 c − 7.5 c\n= 35(1 − e ) + 25( e − e )\n= 35(1 − 0.70711) + 25(0.70711 − 0.5946) = 13.06."
    },
    {
        "id": 613,
        "topic": "SOA Exam P Sample Question",
        "question": "The annual numbers of accidents at two construction sites are each Poisson distributed.\nThe probability of no accidents at the second construction site is 1.1 times this probability\nat the first construction site.\nThe standard deviation of the annual number of accidents at the first construction site is\n1.50.\nCalculate the standard deviation of the annual number of accidents at the second\nconstruction site.",
        "options": [
            "1.28",
            "1.36",
            "1.40",
            "1.47",
            "1.65"
        ],
        "answerLetter": "D",
        "answer": "1.47",
        "explanation": "Official solution: D\n\nLet λ and λ represent the means of the numbers of accidents at the first and second\n1 2\n− λ 0 − λ 0\n2 1\n’ ’\ne λ e λ\n2 1\nconstruction sites, respectively. From the given data, we have = 1.1 which\n’ ’\n0! 0!\n’ ’\n2\n− λ − λ\n2 1\nsimplifies to e = 1.1 e . and λ = 1.5 . So λ = 1.5 and then,\n( )\n1 1\n2\n− λ − (1.5) 2 2\n2\ne = 1.1 e ⇒ − λ = (ln1.1) − (1.5) ⇒ λ = (1.5) − ln1.1 .\n2 2\nThe standard deviation for the number of accidents at the second construction site is\n2\nλ = (1.5) − ln1.1 = 1.46789.\n2"
    },
    {
        "id": 614,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company sells policies for two years. The company’s profit in the first year\nis normally distributed with mean 660 and standard deviation 1100.\nThe company makes adjustments in the second year. The company’s profit in the second\nyear is normally distributed with mean μ and standard deviation 2640.\nAssume that the annual profits are independent.\nThe probability that the company earns a positive overall profit in the two-year period\nis 0.8643.\nCalculate μ .",
        "options": [
            "1320",
            "1940",
            "2486",
            "2740",
            "3454"
        ],
        "answerLetter": "C",
        "answer": "2486",
        "explanation": "Official solution: C\n\nFor independent random variables, the variance of the sum is the sum of the variances.\n2 2\nTherefore, the standard deviation of the company's two-year profit is 1100 + 2640 = 2860 .\nLet X represent the two-year profit.\n0 − (660 + μ )\n’ ’\nP X > 0 = P Z > = 0.8643\n[ ]\n’ ’\n2860\n’ ’\n0 − (660 + μ )\n’ ’\nP Z < = 0.1357\n’ ’\n2860\n’ ’\n0 − (660 + μ )\n= − 1.099844\n2860\nμ = 2485.55."
    },
    {
        "id": 615,
        "topic": "SOA Exam P Sample Question",
        "question": "A taxicab company purchases an insurance policy that covers damages from car\naccidents. The number of accidents on each day is Poisson distributed with mean λ , and\nthe number of accidents on different days are mutually independent. The expected\nnumber of accidents each week is 63.\nCalculate the probability that the number of accidents in one day is two or more standard\ndeviations below the expected number of accidents in one day.",
        "options": [
            "0.006",
            "0.021",
            "0.116",
            "0.156",
            "0.207"
        ],
        "answerLetter": "B",
        "answer": "0.021",
        "explanation": "Official solution: B\n\nLet D be the number of accidents in one day. Due to independence the expected number of\naccidents in one day is E( D ) = 63/7 = 9. For a Poisson distribution the variance is equal to the\nmean. Thus,\nVar( D ) = E( D ) = 9,SD( D ) = 3.\nThe probability of being two more standard deviations below the mean is\nP[ D ≤ 9 − 2 × 3] = P[ D ≤ 3]\n= P D = 0 + P D = 1 + P D = 2 + P D = 3\n[ ] [ ] [ ] [ ]\n− 9 0 − 9 1 − 9 2 − 9 3\ne 9 e 9 e 9 e 9\n= + + +\n0! 1! 2! 3!\n= 0.000123 + 0.001111 + 0.004998 + 0.014994 = 0.021226."
    },
    {
        "id": 616,
        "topic": "SOA Exam P Sample Question",
        "question": "Two random number generators, labeled C and D, are used to select numbers between 0\nand 10. Generator C uses the continuous uniform distribution on [0, 10]. Generator D\nuses the discrete uniform distribution on the integers 0 through 10.\nCalculate the absolute value of the difference between the standard deviation of the\nselection using C and the standard deviation of the selection using D.",
        "options": [
            "0.00",
            "0.02",
            "0.28",
            "0.50",
            "1.67"
        ],
        "answerLetter": "C",
        "answer": "0.28",
        "explanation": "Official solution: C\n\nFor Random Number Generator C:\n2\n10 − 0\n( )\nVar( C ) = = 8.3333,SD( C ) = 8.3333 = 2.8868\n12\nFor Random Number Generator D:\n1\nE( D ) = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 5\n[ ]\n11\n1\n2 2 2 2 2 2 2 2 2 2 2 2\nE( D ) = ’ 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 ’ = 35\n’ ’\n11\n2\nVar( D ) = 35 − 5 = 10, SD D ( ) = 10 = 3.1623.\nThe absolute difference is: | 2.8868 − 3.1623 | = 0.2755."
    },
    {
        "id": 617,
        "topic": "SOA Exam P Sample Question",
        "question": "A policyholder owns two properties and has hurricane insurance on both properties. One\nproperty is located in Texas. The other property is located in Florida.\nLet T be the number of hurricane claims in a 5-year period for the Texas property, and let\nF be the number of hurricane claims in a 5-year period for the Florida property. The joint\nprobability function for T and F is given in the following table.\nNumber of Hurricane Claims in 5-year period\nFlorida\n0 1 2 3\nTexas\n0 0.40 0.14 0.04 0.02\n1 0.16 0.08 0.04 0.02\n2 0.04 0.03 0.02 0.01\nCalculate\nVar( T | F = 1).",
        "options": [
            "0.18",
            "0.24",
            "0.45",
            "0.49",
            "0.80"
        ],
        "answerLetter": "D",
        "answer": "0.49",
        "explanation": "Official solution: D\n\n2 2\nVar( T | F = 1) = E( T | F = 1) – {E( T | F = 1)} . To calculate these two expected values, we must\nfirst find the conditional probability mass function p ( t|F = 1), where t = 0,1,2.\n’ 14\n= 0.56, t = 0\n25\n’\n’\n8\np t ( | F = 1) = = 0.32, t = 1\n’\n25\n’\n3\n’ = 0.12, t = 2\n’ 25\nE( T | F = 1) = 0(0.56) + 1(0.32) + 2(0.12) = 0.56\n2 2 2 2\nE( T | F = 1) = 0 (0.56) + 1 (0.32) + 2 (0.12) = 0.80\n2\nVar( T | F = 1) = 0.80 − 0.56 = 0.4864."
    },
    {
        "id": 618,
        "topic": "SOA Exam P Sample Question",
        "question": "The time in days, X , that an individual suffers from a common cold is continuous and\nuniformly distributed on [ a , b ]. The mean of X is 8.50, and the variance of X is 0.75.\nCalculate the probability that a person who has suffered from a common cold for\nthe past 7.5 days will continue to suffer from that cold for at least an additional 1.5 days.",
        "options": [
            "0.33",
            "0.40",
            "0.50",
            "0.60",
            "0.83 st nd th"
        ],
        "answerLetter": "B",
        "answer": "0.40",
        "explanation": "Official solution: B\n\na + b\n= 8.5, a = 17 − b\n2\n2\n( b − a )\n2\n= 0.75, ( b − a ) = 9, b − a = 3\n12\nb − (17 − b ) = 3, 2 b = 20, b = 10\na = 17 − 10 = 7\n10 − 9\n1.0\n10 − 7\nP[ X > 9 | X > 7.5] = = = 0.40.\n10 − 7.5\n2.5\n10 − 7"
    },
    {
        "id": 619,
        "topic": "SOA Exam P Sample Question",
        "question": "The numbers of hits received by a website during the 1 , 2 , …, 1440 minutes of a\ngiven day are mutually independent Poisson random variables with common mean. The\nst\nprobability that there are exactly four hits during the 1 minute is 54 times the probability\nth\nthat there are no hits during the 1440 minute.\nCalculate the number of hits the website is expected to receive between in a 60-minute\nperiod.",
        "options": [
            "120",
            "180",
            "240",
            "300",
            "360"
        ],
        "answerLetter": "E",
        "answer": "360",
        "explanation": "Official solution: E\n\n− λ 4 − λ 0\ne λ 54 e λ\n=\n4! 0!\n4\nλ\n= 54\n4!\n4\nλ = 1296, λ = 6\nThe expected number of hits in a 60-minute period is 60(6) = 360."
    },
    {
        "id": 620,
        "topic": "SOA Exam P Sample Question",
        "question": "A broker markets four separate products. The probabilities of selling these products to a\nclient are:\nProduct Probability\nAuto insurance 0.55\nHomeowners insurance 0.45\nHealth insurance 0.50\nLife insurance 0.60\nThe sales of these products are mutually independent.\nCalculate the probability that the broker sells more than two products to a client.",
        "options": [
            "0.27",
            "0.35",
            "0.39",
            "0.57",
            "0.73"
        ],
        "answerLetter": "B",
        "answer": "0.35",
        "explanation": "Official solution: B\n\nP[3 products] = ( 0.55 )( 0.45 )( 0.50 )( 0.40 ) + ( 0.45 )( 0.45 )( 0.50 )( 0.60 )\n+ 0.55 0.55 0.50 0.60 + 0.55 0.45 0.50 0.60 = 0.27525\n( )( )( )( ) ( )( )( )( )\nP[4 products] = 0.55 0.45 0.50 0.60 = 0.07425\n( )( )( )( )\nSo P 3 or 4 = 0.27525 + 0.07425 = 0.3495 .\n( )"
    },
    {
        "id": 621,
        "topic": "SOA Exam P Sample Question",
        "question": "The time between automobile accidents at a particularly dangerous intersection is\nexponentially distributed with mean 15 days.\nThere have been no accidents in the previous 10 days.\nCalculate the probability that the next accident will occur more than 5 days from now, but\nless than 25 days from now.",
        "options": [
            "0.27",
            "0.37",
            "0.47",
            "0.53",
            "0.63"
        ],
        "answerLetter": "D",
        "answer": "0.53",
        "explanation": "Official solution: D\n\nSince exponential distributions are memoryless,\nP[15 < X < 35 | X > 10] = P[5 < X < 25] = P[ X < 25] − P[ X < 5]\n− 25/15 − 5/15\n= 1 − e − 1 − e\n( )\n− 5/15 − 25/15\n= e − e = 0.52766."
    },
    {
        "id": 622,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X be a random variable representing the time required to fix a flat tire on a car.\nYou are given the following information:\ni. X is uniform on [ a , b ].\nth\nii. The 50 percentile of X is 16.36.\niii. The standard deviation of X is 7.63.\nb\nCalculate .\na",
        "options": [
            "1.83",
            "2.12",
            "4.58",
            "6.62",
            "9.41"
        ],
        "answerLetter": "E",
        "answer": "9.41",
        "explanation": "Official solution: E\n\na + b\n= 16.36, a = 32.72 − b\n2\n2\n( b − a ) b − a\n2\n= 7.63 , = 7.63, b − a = 26.431095\n12\n12\nSubstitute the first equation into the second,\nb − (32.72 − b ) = 26.431095\nb = 29.5755\nPlug this value of b back into the first equation:\na = 32.72 − 29.5755 = 3.1445\nb 29.5755\n= = 9.4056.\na 3.1445"
    },
    {
        "id": 623,
        "topic": "SOA Exam P Sample Question",
        "question": "The scores on a math exam are modeled by a normal distribution. The mode of the exam\nth\nscores is 56.00, and the 40 percentile is 52.20.\nCalculate the percentile corresponding to an exam score of 65.50.\nst",
        "options": [
            "71 th",
            "74 th",
            "78 st",
            "81 th",
            "85"
        ],
        "answerLetter": "B",
        "answer": "74 th",
        "explanation": "Official solution: B\n\nLet X be the normal random variable. For a normal distribution, the mode equals the mean, so\nμ= 56.\nP[ X < 52.20] = 0.40\n52.20 − 56\n’ ’\nP Z < = 0.40\n’ ’\nσ\n’ ’\n52.20 − 56\n= − 0.253347\nσ\nσ = 14.999185\n65.50 − 56\n’ ’\nNow, P X [ < 65.50] = P Z <\n’ ’\n14.999185\n’ ’\n= P Z < 0.6334 = 0.7368.\n[ ]"
    },
    {
        "id": 624,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company offers two kinds of insurance: automobile insurance and\nhomeowners insurance. This year the company's profit from automobile insurance is\nnormally distributed with a mean of 400 and a standard deviation of 200. Also this\nyear, the company's profit from homeowners insurance is normally distributed with a\nmean of –100 and a standard deviation of 500. The two profits are independent.\nCalculate the probability that the company's overall profit this year is positive.",
        "options": [
            "0.41",
            "0.59",
            "0.63",
            "0.67",
            "0.71"
        ],
        "answerLetter": "E",
        "answer": "0.71",
        "explanation": "Official solution: E\n\nLet X – automobile Insurance\nLet Y – homeowners insurance\nE( X + Y ) = 400 − 100 = 300\n2 2\nVar( X + Y ) = 200 + 500 = 290, 000\nSD( X + Y ) = 290, 000 = 538.5165\n0 − 300\n’ ’\nP[ X + Y > 0] = P Z > = P[ Z > − 0.5571] = 0.7113.\n’ ’\n538.5165\n’ ’"
    },
    {
        "id": 625,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of hurricanes in a year is modeled by a Poisson distribution with mean 1.\nThe number of hurricanes in different years are mutually independent.\nCalculate the probability that there are exactly ten hurricanes in a decade, given that there\nwere exactly eight hurricanes in the first seven years of the decade.",
        "options": [
            "0.053",
            "0.125",
            "0.130",
            "0.191",
            "0.224"
        ],
        "answerLetter": "E",
        "answer": "0.224",
        "explanation": "Official solution: E\n\nThe number of hurricanes in 3 years is Poisson distributed with mean 3. For 10 hurricanes to\noccur in 10 years given that 8 have occurred in the first 7 years, 2 hurricanes must occur in the\nlast 3 years.\nLet E be the event that 2 hurricanes occur in the last 3 years.\n− 3 2\ne ⋅ 3\nThen, P[ E ] = = 0.2240.\n2!"
    },
    {
        "id": 626,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company sells two types of policies. The annual number of claims for\nType 1 policies follows a Poisson distribution with mean λ and the annual number of\n1\nclaims for Type 2 policies follows a Poisson distribution with mean λ . The probability\n2\nthat a Type 1 policy has no claims in one year is one-half of the probability that a Type 2\npolicy has no claims in one year.\nLet V be the variance in the annual number of claims for a Type n policy.\nn\nCalculate V − V .\n1 2",
        "options": [
            "0.693",
            "0.724",
            "0.766",
            "0.813",
            "0.832"
        ],
        "answerLetter": "A",
        "answer": "0.693",
        "explanation": "Official solution: A\n\nV = λ for i = 1, 2\ni\ni\nFrom the given info regarding the probability of no claims, we have:\n− λ 0 − λ 0\n1 2\ne λ e λ\n1 2\n= 0.5\n0! 0!\n− λ − λ\n1 2\n2 e = e\n− ( λ − λ )\n2 1\n2 = e\nλ − λ = ln 2 = 0.6931.\n1 2"
    },
    {
        "id": 627,
        "topic": "SOA Exam P Sample Question",
        "question": "A policyholder owns a car and a truck. An auto insurer provides coverage on both\nvehicles.\nLet X be the number of claims incurred over a five-year period on the car.\nLet Y be the number of claims incurred over a five-year period on the truck.\nThe probability function of X and Y is shown in the table below:\nY\n0 1 2 3\n0 0.06 0.10 0.12 0.02\n1 0.08 0.11 0.15 0.06\nX\n2 0.05 0.07 0.05 0.03\n3 0.01 0.02 0.03 0.04\nCalculate E Y | X < 2 .\n( )",
        "options": [
            "1.30",
            "1.37",
            "1.41",
            "1.45",
            "1.53"
        ],
        "answerLetter": "C",
        "answer": "1.41",
        "explanation": "Official solution: C\n\n0.14 / 0.70 = 0.2000, y = 0\n’\n’\n0.21/ 0.70 = 0.3000, y = 1\n’\np y ( | X < 2) = ’\n0.27 / 0.70 = 0.3857, y = 2\n’\n’\n0.08 / 0.70 = 0.1143, y = 3\n’\nE Y ( | X < 2) = 0(0.2000) + 1(0.3000) + 2(0.3857) + 3(0.1143) = 1.4143."
    },
    {
        "id": 628,
        "topic": "SOA Exam P Sample Question",
        "question": "In a given month, a group of policies are up for renewal. The random variable R denotes\nthe fraction of those policies that are actually renewed. R has a probability density\nfunction of the form\nα\n’ ( α + 1 ) r , for 0 < r < 1\nf ( r ) =\n’\n0 , otherwise,\n’\nwhere α is a positive parameter. The expected value of R is 0.75.\nCalculate the probability that more than half of the policies up for renewal in a given\nmonth will actually be renewed.",
        "options": [
            "0.50",
            "0.58",
            "0.70",
            "0.75",
            "0.88"
        ],
        "answerLetter": "E",
        "answer": "0.88",
        "explanation": "Official solution: E\n\n1\n1\nα + 1 α + 1\nα + 1 α + 2\n0.75 = ( α + 1) r dr = r =\n∫\nα + 2 α + 2\n0 0\nα = 2\n1\n1\n2 3\nPr( R > 0.5) = 3 r dr = r = 0.875.\n∫\n0.5\n0.5"
    },
    {
        "id": 629,
        "topic": "SOA Exam P Sample Question",
        "question": "Let Y be a discrete random variable with probability function\n0.2, for y = a\n’\n’\n0.1, for y = 1\n’\n’\np y ( ) = 0.3, for y = 3\n’\n’\n0.4, for y = 10\n’\n’ 0, otherwise,\n’\nwhere a is a constant less than 0.\n2\nE( Y ) = 47.8 .\nCalculate Var( Y ).",
        "options": [
            "5.6",
            "11.8",
            "22.8",
            "31.8",
            "63.8"
        ],
        "answerLetter": "D",
        "answer": "31.8",
        "explanation": "Official solution: D\n\n2 2 2 2 2 2\n47.8 = E Y ( ) = a (0.2) + 1 (0.1) + 3 (0.3) + 10 (0.4) = 0.2 a + 42.8\n2\n5 = 0.2 a\na = − 25 = − 5\nE Y ( ) = − 5(0.2) + 1(0.1) + 3(0.3) + 10(0.4) = 4 .\n2 2 2 2\nConsequently, σ = E Y ( ) − [ E Y ( )] = 47.8 − 4 = 47.8 − 16 = 31.8 ."
    },
    {
        "id": 630,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurer sells a homeowners insurance policy that has a deductible of 2. Homeowners\nloss amounts follow an exponential distribution with mean 1.\nCalculate the expected claim payment made for a homeowners loss.\n− 2",
        "options": [
            "e − 2",
            "2 e − 1",
            "e − 2",
            "3 e",
            "1"
        ],
        "answerLetter": "A",
        "answer": "e − 2",
        "explanation": "Official solution: A\n\n∞ ∞\n∞\n− x − x − x − 2\n( x − 2) e dx = − ( x − 2) e + e dx = e .\n∫ ∫\n2\n2 2"
    },
    {
        "id": 631,
        "topic": "SOA Exam P Sample Question",
        "question": "The joint probability function of X and Y is given by:\n1\nP X = 1, Y = 0 =\n[ ]\n8\n1\nP X = 2, Y = 0 =\n[ ]\n4\n1\nP X = 1, Y = 1 =\n[ ]\n2\n1\nP X = 2, Y = 1 =\n[ ]\n8\nCalculate Var ( Y X = 1) .\n4",
        "options": [
            "25 15",
            "64 1",
            "4 3",
            "4 4",
            "5"
        ],
        "answerLetter": "A",
        "answer": "25 15",
        "explanation": "Official solution: A\n\nP Y [ = 0, X = 1] 1/ 8\nP Y [ = 0 | X = 1] = = = 1/ 5\nP X [ = 1] 1/ 8 + 1/ 2\nP Y [ = 1| X = 1] = 1 − P Y [ = 0 | X = 1] = 4 / 5\nE Y [ | X = 1] = 0(1/ 5) + 1(4 / 5) = 4 / 5\n2 2 2\nE Y [ | X = 1] = 0 (1/ 5) + 1 (4 / 5) = 4 / 5\n2\nVar Y [ | X = 1] = 4 / 5 − (4 / 5) = 4 / 25\nOr, recognize this is a binomial distribution with n = 1 and p = 4/5 and thus the variance is\n1(4/5)(1/5) = 4/25."
    },
    {
        "id": 632,
        "topic": "SOA Exam P Sample Question",
        "question": "A farmer purchases a five-year insurance policy that covers crop destruction due to hail.\nOver the five-year period, the farmer will receive a benefit of 30 for each year in which\nhail destroys the farmer’s crop, subject to a maximum of three benefit payments. The\nprobability that hail will destroy the farmer’s crop in any given year is 0.5, independent\nof any other year.\nCalculate the expected benefit that the farmer will receive over the five-year period.",
        "options": [
            "45",
            "52",
            "66",
            "68",
            "75"
        ],
        "answerLetter": "D",
        "answer": "68",
        "explanation": "Official solution: D\n\nLet X be the number of years in which his crops are destroyed. Then X is binomial with n = 5\nand p = 0.5 and E (benefit) is\n30 0 P X ( = 0) + 1 P X ( = 1) + 2 P X ( = 2) + 3 P X ( = 3, 4,5)\n[ ]\nP X ( = 0) = 0.03125 P X ( = 3) = 0.31250\nP X ( = 1) = 0.15625 P X ( = 4) = 0.15625\nP X ( = 2) = 0.31250 P X ( = 5) = 0.03125\nThe answer is 30[0.15625 + 2(0.31250) + 3(0.5)] = 68.4375."
    },
    {
        "id": 633,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company sells auto policies to a trucking company and a shuttle service.\nThe number of auto claims filed by the trucking company and the number of auto claims\nfiled by the shuttle service are independent Poisson random variables having variances 2\nand 3 respectively.\nCalculate the probability that the trucking company files exactly 6 auto claims, given that\nthe trucking company and the shuttle service together file a total of 8 auto claims.",
        "options": [
            "0.003",
            "0.012",
            "0.041",
            "0.054",
            "0.184"
        ],
        "answerLetter": "C",
        "answer": "0.041",
        "explanation": "Official solution: C\n\nN : Claims filed by trucking company, N : Claims filed by shuttle service\n1 2\nNote: Sum of Poissons is also Poisson.\n6 − 2\n’\n2 e\nP N [ = 6] =\n1 ’\n6 − 2 2 − 3\n6!\n2 e 3 e\n’\n2 − 3\n3 e ’ (0.01203)(0.22404)\n6! 2!\nP N [ = 2] = P N [ = 6 | N + N = 8] = = = 0.041288.\n’\n2 1 1 2 8 − 5\n2! 5 e (0.06528)\n’\n8 − 5\n’ 8!\n5 e\nP N [ + N = 8] =\n1 2 ’\n8!\n’"
    },
    {
        "id": 634,
        "topic": "SOA Exam P Sample Question",
        "question": "A customer uses an ATM. Let Y be the time that the customer spends waiting in line\nbefore reaching the ATM. Let Z be the time that the customer spends at the ATM\nperforming the transaction. Y and Z are independent random variables. Let X = Y + Z .\nAssume the following:\ni) E( X ) = 2.00\nii) Var ( X ) = 2.25\niii) E( Y ) = 1.20\niv) Var ( Y ) = 0.90\nCalculate the coefficient of variation for Z .",
        "options": [
            "0.59",
            "0.69",
            "1.16",
            "1.35",
            "1.45"
        ],
        "answerLetter": "E",
        "answer": "1.45",
        "explanation": "Official solution: E\n\nFrom the given information:\n2 = 1.2 + E( Z )\nE( Z ) = 0.8\n2.25 = 0.9 + V( Z )\nV( Z ) = 1.35\n1.35\nCV( Z ) = = 1.45237.\n0.8"
    },
    {
        "id": 635,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X , Y , and Z be mutually independent exponential random variables with means α , β,\nand 4 respectively.\nAssume the following:\ni) U = X + Y + Z\nii) V = X – Y\niii) E( U ) = Var ( V )\nVar( U ) − Var( V )\niv) E( U ) – E( V ) =\n2\nCalculate α.",
        "options": [
            "0.5",
            "1.0",
            "1.5",
            "2.0",
            "2.5"
        ],
        "answerLetter": "D",
        "answer": "2.0",
        "explanation": "Official solution: D\n\nFrom i) and ii),\nE U ( ) = α + β + 4\n2 2\nVar U ( ) = α + β + 16\nE V ( ) = α − β\n2 2\nVar V ( ) = α + β\nFrom iii),\n2 2\nα + β + 4 = α + β\nFrom iv),\n2 2 2 2\nα + β + 16 − ( α + β )\nα + β + 4 − ( α − β ) =\n2\n2 β + 4 = 8\nβ = 2\nThen iii) becomes\n2\nα + 2 + 4 = α + 4\n2\nα − α − 2 = 0\n( α − 2)( α + 1) = 0\nα = 2, because the value must be positive"
    },
    {
        "id": 636,
        "topic": "SOA Exam P Sample Question",
        "question": "A company insures businesses in 60 different rating zones. The company models annual\nhail losses within each rating zone by an exponential distribution with mean 50,000.\nBecause of the local nature of most hailstorms, annual losses in the rating zones are\nmutually independent.\nCalculate the approximate probability that total annual hail losses over all 60 rating zones\nexceeds 3.5 million.",
        "options": [
            "0.10",
            "0.12",
            "0.15",
            "0.43",
            "0.50"
        ],
        "answerLetter": "A",
        "answer": "0.10",
        "explanation": "Official solution: A\n\nLet X denote total hail losses. We will apply the Central Limit Theorem, due to independence.\nFor each rating zone, the mean is 50,000 and the standard deviation is also 50,000 so the\nvariance is 2,500,000,000. Then,\nE( X ) =60(50,000) = 3,000,000\nVar( X ) = 60(2,500,000,000) = 150,000,000,000\nStd Dev( X ) = =387,298.3346\nThen P [ X > 3,500,000]\n= P [ Z > (3,500,000-3,000,000)/387,298.3346] = P[ Z > 1.2910] = 0.098"
    },
    {
        "id": 637,
        "topic": "SOA Exam P Sample Question",
        "question": "The daily numbers of claims processed by an insurance company can be regarded as\nindependent observations from a distribution having mean 3300 and standard deviation\n130.\nCalculate the approximate probability that the insurance company processes more than\none million claims over a 303-day period.",
        "options": [
            "0.22",
            "0.48",
            "0.50",
            "0.52",
            "0.78"
        ],
        "answerLetter": "B",
        "answer": "0.48",
        "explanation": "Official solution: B\n\nLet S be the random variable that is the number of claims processed during the year.\nS is an approximate normal distribution with mean 3300(303) = 999,900 and standard deviation\n130(303)\n= 2262.8964 .\n303\n’ 1, 000, 000 − 999,900 ’\nP[ S > 1, 000, 000] = P Z >\n’ ’\n2, 262.8964\n’ ’\n= P Z > 0.0442 = 0.4840.\n[ ]"
    },
    {
        "id": 638,
        "topic": "SOA Exam P Sample Question",
        "question": "A gardener models his strawberry ( S ) / blueberry ( B ) harvest with the following joint\nprobability distribution.\nB\n1 2 3 4 5\n1 0.07 0.06 0.06 0.05 0.01\nS\n2 0.07 0.10 0.08 0.05 0.03\n3 0.04 0.05 0.06 0.05 0.04\n4 0.01 0.02 0.02 0.07 0.06\nThe strawberry harvest is 2 units.\nCalculate the conditional variance of the blueberry harvest.",
        "options": [
            "1.23",
            "1.51",
            "2.00",
            "2.46",
            "6.06"
        ],
        "answerLetter": "B",
        "answer": "1.51",
        "explanation": "Official solution: B\n\n0.07 / 0.33 = 0.2121, b = 1\n’\n’\n0.10 / 0.22 = 0.3030, b = 2\n’\n’\nP B S ( | = 2) = 0.08 / 0.33 = 0.2424, b = 3\n’\n’\n0.05 / 0.33 = 0.1515, b = 4\n’\n0.03 / 0.33 = 0.0909, b = 5\n’\n’\nE B S ( | = 2) = 1(0.2121) + 2(0.3030) + 3(0.2424) + 4(0.1515) + 5(0.0909) = 2.60606\n2 2 2 2 2 2\nE B ( | S = 2) = 1 (0.2 121) + 2 (0.3030) + 3 (0.2424) + 4 (0.1515) + 5 (0.0909) = 8.30303\n2\nVar B S ( | = 2) = 8.30303 − 2.60606 = 1.51148."
    },
    {
        "id": 639,
        "topic": "SOA Exam P Sample Question",
        "question": "This year, a dental insurance company reimburses up to two fillings and one root canal.\nA policyholder's number of fillings and number of root canals are independent and\nPoisson distributed with means 1 and 0.3, respectively.\nDetermine the probability that the policyholder has no unreimbursed fillings and no\nunreimbursed root canals this year.\n–1 –0.3",
        "options": [
            "(0.5 e )(0.3 e ) –1 –0.3",
            "(2.5 e )(1.3 e ) –1 –0.3",
            "1 – (2.5 e )(1.3 e ) –1 –0.3",
            "(1 – 2.5 e )(1 – 1.3 e ) –1 –0.3",
            "1 – (1 – 2.5 e )(1 – 1.3 e )"
        ],
        "answerLetter": "B",
        "answer": "(2.5 e )(1.3 e ) –1 –0.3",
        "explanation": "Official solution: B\n\nLet X = # of fillings; Y = # of root canals\n− 1 x − 0.3 y\ne 1 e 0.3\nP[ X = x ] = , P[ Y = y ] =\nx ! y !\n0 1 2\n’ ’\n1 1 1\n− 1 − 1\nP[ X ≤ 2] = e + + = 2.5 e\n’ ’\n0! 1! 2!\n’ ’\n0 1\n’ 0.3 0.3 ’\n− 0.3 − 0.3\nP[ Y ≤ 1] = e + = 1.3 e\n’ ’\n0! 1!\n’ ’\n− 1 − 0.3\nP[ X ≤ 2]P[ Y ≤ 1] = 2.5 e 1.3 e , by independence."
    },
    {
        "id": 640,
        "topic": "SOA Exam P Sample Question",
        "question": "A person mails three packages. Each package independently has probability p of being\nlost in the mail, where 0 < p < 1.\nDetermine the probability that exactly one package is lost in the mail, given that at least\none package is lost in the mail.\n2",
        "options": [
            "( 1 − p ) 2",
            "3 p ( 1 − p ) 3 p",
            "( 1 − p ) 2 p ( 1 − p )",
            "3 1 − ( 1 − p ) 2 3 p ( 1 − p )",
            "3 1 − ( 1 − p )"
        ],
        "answerLetter": "E",
        "answer": "3 1 − ( 1 − p )",
        "explanation": "Official solution: E\n\n3\nP At least one package lost = 1 − P No packages lost = 1 − (1 − p )\n[ ] [ ]\nP Exactly 1 package lost and at least 1 package lost\n[ ]\n2\n= P Exactly 1 package lost = 3 p (1 − p )\n[ ]\n2\n’ Exactly 1 package lost ’ 3 p (1 − p )\nP =\n’ ’ 3\nAt least 1 package lost 1 − (1 − p )\n’ ’"
    },
    {
        "id": 641,
        "topic": "SOA Exam P Sample Question",
        "question": "A homeowner has insurance for three types of loss: fire, flood, and theft. This year, the\nhomeowner has probability 0.9 of experiencing no loss due to fire, probability 0.9 of\nexperiencing no loss due to flood, and probability 0.8 of experiencing no loss due to theft.\nThe frequencies of the three types of loss are independent.\nCalculate the probability that a homeowner experiences a loss due to fire, given that the\nhomeowner experiences exactly one type of loss.",
        "options": [
            "0.072",
            "0.235",
            "0.250",
            "0.306",
            "0.346"
        ],
        "answerLetter": "B",
        "answer": "0.235",
        "explanation": "Official solution: B\n\nP(exactly one type of loss) = 0.1(0.9)(0.8) + 0.9(0.1)(0.8) + 0.9(0.9)(0.2) = 0.306.\nP(exactly one type of loss and a loss due to fire) = 0.1(0.9)(0.8) =0.072.\nThe conditional probability is 0.072/0.306 = 0.235."
    },
    {
        "id": 642,
        "topic": "SOA Exam P Sample Question",
        "question": "The lifetime of a car windshield is exponentially distributed with mean 9 years.\nCalculate the variance of the lifetime of a car windshield, given that it has lasted at least\nfive years.",
        "options": [
            "14",
            "16",
            "81",
            "106",
            "196"
        ],
        "answerLetter": "C",
        "answer": "81",
        "explanation": "Official solution: C\n\nLet X represent the car's lifetime.\nVar[ X | X ≥ 5] = Var[ X - 5 | X ≥ 5] since adding a constant does not affect variance\n= Var[ X ] since X is memoryless.\n2\n= 9 = 81."
    },
    {
        "id": 643,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of times per year a motorist uses emergency roadside service is Poisson\ndistributed with mean 2.\nCalculate the probability that the motorist does not use emergency roadside service more\nthan four times in a given year.\n2\n’ ’\n− 2",
        "options": [
            "e ’ ’ 3 ’ ’ 19 ’ ’ − 2",
            "1 − e ’ ’ 3 ’ ’ 19 ’ ’ − 2",
            "e ’ ’ 3 ’ ’ − 2",
            "1 − e − 2",
            "7 e"
        ],
        "answerLetter": "E",
        "answer": "7 e",
        "explanation": "Official solution: E\n\n0 1 2 3 4\n’ ’\n2 2 2 2 2\n− 2 − 2\nP X [ ≤ 4] = e + + + + = 7 e .\n’ ’\n0! 1! 2! 3! 4!\n’ ’"
    },
    {
        "id": 644,
        "topic": "SOA Exam P Sample Question",
        "question": "A salesperson ships six computers, but insures only four of them. Each computer\nindependently has probability 0.1 of being damaged during shipping.\nCalculate the probability that neither of the uninsured computers is damaged during\nshipping, given that exactly three of the computers are damaged during shipping.",
        "options": [
            "0.0029",
            "0.0036",
            "0.0146",
            "0.2000",
            "0.8100"
        ],
        "answerLetter": "D",
        "answer": "0.2000",
        "explanation": "Official solution: D\n\nEach computer has the same chance of breaking, so all combinations of 3 broken computers are\nequally likely. 4 computers are insured; 2 are not. Using the hypergeometric distribution:\n2 4\n’ ’’ ’\n’ ’’ ’\n0 3 1(4)\n’ ’’ ’\nP[Uninsured = 0 | Broken = 3] = = = 0.20.\n6 20\n’ ’\n’ ’\n3\n’ ’\nAlternatively, using the binomial distribution the probability of three being damaged is\n6\n’ ’\n3 3\n(0.1) (0.9) = 0.01458 . Assume computers 1 and 2 are not insured. The probability of three\n’ ’\n3\n’ ’\n2 4\n’ ’ ’ ’\n0 2 3 1\nbeing damaged and all insured is (0.1) (0.9) (0.1) (0.9) = 0.002916 . The ratio is 0.2.\n’ ’ ’ ’\n0 3\n’ ’ ’ ’"
    },
    {
        "id": 645,
        "topic": "SOA Exam P Sample Question",
        "question": "In any given year, a homeowner has probability 0.8 of experiencing no thefts. The\nnumber of thefts experienced by the homeowner in a year is independent of the number\nof thefts experienced by the homeowner in any other year.\nThe homeowner purchases a theft policy covering the next five years.\nCalculate the probability that the first theft to occur under the policy occurs in the second\npolicy year, given that thefts occur in exactly two of the policy years.",
        "options": [
            "0.160",
            "0.250",
            "0.300",
            "0.384",
            "0.400"
        ],
        "answerLetter": "C",
        "answer": "0.300",
        "explanation": "Official solution: C\n\nP First reimbursed theft in 2nd year | Exactly 2 reimbursed thefts in 5 years\n[ ]\nP First reimbursed theft in 2nd year and exactly 1 reimbursed theft in year s 3,4,5\n[ ]\n=\nP Exactly 2 reimbu sed thefts in 5 years r\n[ ]\n3\n’ ’ 2\n0 . 8 0.2 × 0.8 0.2\n( )( ) ( ) ( )\n’ ’\n1\n’ ’\n= = 0.30.\n5\n’ ’ 3 2\n( 0.8 ) ( 0.2 )\n’ ’\n2\n’ ’"
    },
    {
        "id": 646,
        "topic": "SOA Exam P Sample Question",
        "question": "A car rental insurance policyholder rents a car for seven days. For any day, the\nprobability that the policyholder has no claims is a constant r . The occurrences of claims\non different days are mutually independent.\nDetermine the probability that the policyholder has at least one claim during the seven-\nday rental period.\n7",
        "options": [
            "r 6",
            "(1 – r ) r 6",
            "7(1 – r ) r 7",
            "1 – r 7",
            "(1 – r )"
        ],
        "answerLetter": "D",
        "answer": "1 – r 7",
        "explanation": "Official solution: D\n\n7\nP[at least 1 claim in 7 days] = 1 – P[no claims in 7 days] = 1 – {P[no claims on a given day]}\n7\n= 1 – r ."
    },
    {
        "id": 647,
        "topic": "SOA Exam P Sample Question",
        "question": "An unfair coin is tossed. If the outcome of the coin toss is heads, then a six-sided die\nwith the probability that each even number is twice as likely as each odd number is\nrolled. If the outcome of the coin toss is tails, then a fair die is rolled.\nLet X be the random variable equal to the number on the face of the rolled die. Let F be\nthe cumulative distribution function for X.\nF (3) = 0.463.\nCalculate P[ X = 4].",
        "options": [
            "0.167",
            "0.194",
            "0.204",
            "0.537",
            "0.667"
        ],
        "answerLetter": "C",
        "answer": "0.204",
        "explanation": "Official solution: C\n\nLet P[Heads] = p and P[Tails] = 1 − p\n( )\nP [ X = 1 ] = p 1/ 9 + 1 − p 1/ 6 = 1/ 6 − p /18\n( ) ( )( )\nP X = 2 = p ( 2 / 9 ) + ( 1 − p )( 1/ 6 ) = 1/ 6 + p /18\n[ ]\nP [ X = 3 ] = p ( 1/ 9 ) + ( 1 − p )( 1/ 6 ) = 1/ 6 − p /18\nF 3 = P X = 1 + P X = 2 + P X = 3 = 1/ 2 − p /18\n( ) [ ] [ ] [ ]\n1 p\n0.463 = −\n2 18\np = 0.666\nP X = 4 = 0.666(2 / 9) + (1 − 0.666)(1/ 6) = 0.204.\n[ ]"
    },
    {
        "id": 648,
        "topic": "SOA Exam P Sample Question",
        "question": "X is a random variable with cumulative distribution function\n0, x < 0\n’\n’\n2\n’ x\nF x ( ) = , 0 ≤ x < 5\n’\n25\n’\n1, x ≥ 5.\n’\n’\nCalculate the second moment of X .",
        "options": [
            "1.39",
            "3.33",
            "6.25",
            "12.50",
            "25.00"
        ],
        "answerLetter": "D",
        "answer": "12.50",
        "explanation": "Official solution: D\n\n2 x\n’\n, for 0 ≤ x ≤ 5\n’\nf ( ) x = ’\n25\n’\n0, otherwise\n’\n5\n5\n3 4\n2 x 2 x\n2\nE X [ ] = dx = = 12.50.\n∫\n25 100\n0\n0"
    },
    {
        "id": 649,
        "topic": "SOA Exam P Sample Question",
        "question": "The lifetime X of an electronic component has density function\n2\n− 4 x\n’\n’ 8 xe , for x > 0\nf ( ) x = ’\n0, otherwise.\n’\n’\nCalculate the median lifetime of the component.",
        "options": [
            "0.173",
            "0.268",
            "0.416",
            "0.693",
            "0.833"
        ],
        "answerLetter": "C",
        "answer": "0.416",
        "explanation": "Official solution: C\n\nLet m be the median.\nm\n2\n− 4 x\n8 xe dx = 0.5\n∫\n0\nm\n2\n− 4 x\n− e = 0.5\n0\n2\n− 4 m\n− e + 1 = 0.5\n2\n− 4 m\ne = 0.5\n− ln 0.5\nm = = 0.4163.\n4"
    },
    {
        "id": 650,
        "topic": "SOA Exam P Sample Question",
        "question": "A policyholder experiences two sports injuries this year, each resulting in three possible\noutcomes: no hospital stay, a short hospital stay, or a long hospital stay. Each short\nhospital stay results in a loss of 2. Each long hospital stay results in a loss of 20.\nThe joint probability function for i short hospital stays and j long hospital stays is\n2 !\n’\ni j 2 − i − j\n( 0 . 2 ) ( 0 . 1 ) ( 0 . 7 ) , for 0 ≤ i + j ≤ 2\n’\np ( i , j ) =\n’ i ! j ! ( 2 − i − j )!\n’\n0 , otherwise.\n’\nCalculate the policyholder’s expected total loss from hospital stays due to sports injuries.",
        "options": [
            "0.60",
            "1.00",
            "1.44",
            "3.92",
            "4.80"
        ],
        "answerLetter": "E",
        "answer": "4.80",
        "explanation": "Official solution: E\n\n2! i j 2 − − i j\nE Total Loss ( ) = (2 i + 20 ) j ( 0.2 ) ( 0.1 ) ( 0.7 )\n∑\ni ! !(2 j − i − j )!\n0 ≤ + i j ≤ 2\n= (0 + 0)0.49 + (0 + 20)0.14 + (0 + 40)0.01 + (2 + 0)0.28 + (2 + 20)0.04 + (4 + 0)0.04\n= 4.80."
    },
    {
        "id": 651,
        "topic": "SOA Exam P Sample Question",
        "question": "A dental patient buys insurance that reimburses 100% of dental losses in Year 1 and 60%\nof dental losses in Year 2. The table below shows the joint probability function of the\npatient’s losses in both years.\nLoss in Year 1\n0 2 5 10 Total\n0 0.4 0.23 0.12 0.05 0.8\n2 0.05 0.03 0.012 0.008 0.1\nLoss\nin\n5 0.03 0.025 0.004 0.001 0.06\nYear\n10 0.02 0.015 0.004 0.001 0.04\n2\nTotal 0.5 0.3 0.14 0.06\nCalculate the patient’s expected unreimbursed loss in this two-year period.",
        "options": [
            "0.36",
            "0.76",
            "0.90",
            "1.70",
            "2.80"
        ],
        "answerLetter": "A",
        "answer": "0.36",
        "explanation": "Official solution: A\n\nLet Y = loss in Year 2.\n0.80, y = 0\n’\n’\n0.10, y = 2\n’\np y ( ) = ’\n0.06, y = 5\n’\n’\n0.04, y = 10\n’\nE Unreimbursed Loss = E 0.4 Y\n( ) ( )\n= 0.4(0.80)(0) + 0.4(0.10)(2) + 0.4(0.06)(5) + 0.4(0.04)(10) = 0.36."
    },
    {
        "id": 652,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company offers basic and supplemental life coverages for small employee\ngroups. For a group of size three, let X be the number who choose basic life and let Y be\nthe number who choose supplemental life. The company models the probability\ndistribution of X and Y using the joint probability function\nx + 2 y\n’\n, x = 0, 1, 2, 3, y = 0, ’ , x\n’\np x y ( , ) = ’\n40\n’\n0, otherwise.\n’\nCalculate the variance of X .",
        "options": [
            "0.45",
            "0.67",
            "0.92",
            "6.16",
            "6.70"
        ],
        "answerLetter": "A",
        "answer": "0.45",
        "explanation": "Official solution: A\n\nThe marginal probability function for X is:\n0, x = 0\n’\n’\n1 3 4\n’\n+ = , x = 1\n’ 40 40 40\n’\np x ( ) = ’\n2 4 6 12\n+ + = , x = 2\n’\n40 40 40 40\n’\n3 5 7 9 24\n’\n+ + + = , x = 3\n’\n’ 40 40 40 40 40\n4 12 24\nE( X ) = 0(0) + (1) + (2) + (3) = 2.5\n40 40 40\n4 12 24\n2 2 2 2 2\nE( X ) = 0(0 ) + (1 ) + (2 ) + (3 ) = 6.7\n40 40 40\n2\nVar( X ) = 6.7 − 2.5 = 0.45."
    },
    {
        "id": 653,
        "topic": "SOA Exam P Sample Question",
        "question": "Each of two fair six-sided dice has 1 on two faces and 2 on the other four faces. The two\ndice are rolled twice.\nCalculate the probability that the sum showing on the two dice is different on the two\nrolls.\n12",
        "options": [
            "27 14",
            "27 16",
            "27 18",
            "27 20",
            "27"
        ],
        "answerLetter": "C",
        "answer": "27 18",
        "explanation": "Official solution: C\n\nLet X be the value showing on a face and let S be the sum of a roll.\n1 2\nP[ X = 1] = , P[ X = 2] =\n3 3\n1 4 4\nP[ S = 2] = , P[ X = 3] = , P[ X = 4] =\n9 9 9\nP[two sums are different] = 1 – P[two sums are the same] =\n1 1 4 4 4 4 33 48 16\n’ ’\n1 − + + = 1 − = = .\n’ ’\n9 9 9 9 9 9 81 81 27\n’ ’"
    },
    {
        "id": 654,
        "topic": "SOA Exam P Sample Question",
        "question": "A broker solicits bids on a financial instrument. The bids are treated as independent\nrandom variables, each with a uniform probability density function on [ 0, 10 ] .\nCalculate the expected value of the maximum of three bids.",
        "options": [
            "6.7",
            "7.5",
            "8.0",
            "8.3",
            "8.8"
        ],
        "answerLetter": "B",
        "answer": "7.5",
        "explanation": "Official solution: B\n\nLet X , X , X be random variables with uniform probability density on [ 0,10 ] .\n1 2 3\nX =Max( X , X , X )\n(3) 1 2 3\nP( X ≤ x ) = P( X ≤ x X , ≤ x X , ≤ x ) = P( X ≤ x )P( X ≤ x )P( X ≤ x )\n(3) 1 2 3 1 2 3\n3\n3\n3 x x\n’ ’\n3\n= P( X ≤ x ) = F x ( ) = = .\n[ ]\n’ ’\n10 1000\n’ ’\n3 2\n’ ’\nd x 3 x\nf ( ) x = =\n(3) ’ ’\ndx 1000 1000\n’ ’\n10\n3 4\n10\n3 x 3 x\nE ’ X ’ = dx = = 7.5.\n(3)\n’ ’ ∫\n1000 4000 0\n0"
    },
    {
        "id": 655,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of earthquakes a homeowner experiences is Poisson distributed, at a constant\nrate of 2 for every 30 years.\nCalculate the standard deviation of the number of earthquakes the homeowner\nexperiences in the next ten years.",
        "options": [
            "0.258",
            "0.471",
            "0.667",
            "0.816",
            "1.414"
        ],
        "answerLetter": "D",
        "answer": "0.816",
        "explanation": "Official solution: D\n\nLet X = number of earthquakes in next 10 years, so\n2 2\nλ = ( 10 ) = .\n30 3\n2\nThen the mean number of earthquakes is .\n3\n2\nThe variance is also .\n3\n2\nStandard Deviation = = 0.816.\n3"
    },
    {
        "id": 656,
        "topic": "SOA Exam P Sample Question",
        "question": "A policyholder experiences two sports injuries, each resulting in three possible\noutcomes:no hospital stay, a short hospital stay, or a long hospital stay.\nThe joint probability function for i short hospital stays and j long hospital stays is\n’ 2! i j 2 − − i j\n0.2 0.1 0.7 , 0 ≤ i + j ≤ 2\n( ) ( ) ( )\n’\np i j ( , ) = ’ i ! !(2 j − i − j )!\n’\n0, otherwise.\n’\nCalculate the probability that at least one of the two injuries results in a long hospital\nstay.",
        "options": [
            "0.05",
            "0.15",
            "0.17",
            "0.19",
            "0.36"
        ],
        "answerLetter": "D",
        "answer": "0.19",
        "explanation": "Official solution: D\n\nThen the probability sought is:\np (0,1) + p (0, 2) + p (1,1) = 0.14 + 0.01 + 0.04 = 0.19."
    },
    {
        "id": 657,
        "topic": "SOA Exam P Sample Question",
        "question": "30% of the participants in this year's charity drive will make a cash donation and 60%\nwill donate items to the charity auction and it is possible that some will do both.\nDetermine the value or range of values of the probability p that an individual randomly\nchosen from among this year’s participants will donate in neither of the two indicated\nways.",
        "options": [
            "0 ≤ p ≤ 0.1",
            "p = 0.1",
            "0.1 ≤ p ≤0.4",
            "p = 0.3",
            "0.7 ≤ p ≤ 1.0"
        ],
        "answerLetter": "C",
        "answer": "0.1 ≤ p ≤0.4",
        "explanation": "Official solution: C\n\nLet i be the event that the randomly chosen individual donates items to the auction, and let c be\nthe event that the randomly chosen individual donates cash. Events i and c could be mutually\nexclusive, in which case the answer is p = 1 – 0.3 – 0.6 = 0.1. At the other extreme, event c\ncould be entirely contained in event i . In this case the answer is p = 1 – 0.6 = 0.4. Henc, p will\nlie in the interval [0.1, 0.4]."
    },
    {
        "id": 658,
        "topic": "SOA Exam P Sample Question",
        "question": "Let A, B and C be three events such that the following statements are true:\ni) P [ A ∪ B ∪ C ] = 1\nii) P [ B ] = 0 . 80\niii) P [ A B ] = 0 . 15 r\niv) P [ A ∪ C ] = 0 . 17 r\nv) B and C are mutually exclusive.\nCalculate r .",
        "options": [
            "0",
            "20/17",
            "100/29",
            "4",
            "The correct answer is not given by (A), (B), (C) or (D)."
        ],
        "answerLetter": "D",
        "answer": "4",
        "explanation": "Official solution: D\n\nP A ∪ B ∪ C = P A + P B + P C − P A ∩ B − P A ∩ C − P B ∩ C + P A ∩ B ∩ C\n[ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]\nP A ∪ B ∪ C = P A + P B + P C − P B P A B | − P A + P C − P A ∪ C\n[ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]\n{ } { }\nP A ∪ B ∪ C = P B − P B P A B | + P A ∪ C\n[ ] [ ] [ ] [ ] [ ]\n1 = 0.80 − 0.80 0.15 r + 0.17 r\n( )( ) ( )\nr = 4.00"
    },
    {
        "id": 659,
        "topic": "SOA Exam P Sample Question",
        "question": "Rangers at a mountain resort set explosives to detonate at various locations to induce a\ncontrolled avalanche after a snowfall. A controlled avalanche will start after two\neffective detonations, and the probability that a detonation will be effective is 0.30.\nAssume the effectiveness of different detonations are independent.\nCalculate the probability that the second effective detonation will occur from the tenth to\ntwelfth detonations inclusive.",
        "options": [
            "0.0280",
            "0.0363",
            "0.0856",
            "0.1110",
            "0.1223"
        ],
        "answerLetter": "D",
        "answer": "0.1110",
        "explanation": "Official solution: D\n\nth\nLet X denote the trial on which the r success occurs in a sequence of Bernoulli trials . Then\nr\nX has the negative binomial distribution:\nr\nx − 1\nx − r\n’ ’ r\nP X = x = p 1 − p , where x = r r , + 1, r + 2,...\n[ ] ( )\n’ ’\nr\nr − 1\n’ ’\n2 x − 2\n12\nx − 1\n’ ’’ 3 7\n’ ’ ’\nP[10 ≤ X ≤ 12] = = 0.0467 + 0.0363 + 0.0280 = 0.1110.\n∑\n2 ’ ’’ ’ ’ ’\n1 10 10\n’ ’ ’ ’\nx = 10 ’ ’"
    },
    {
        "id": 660,
        "topic": "SOA Exam P Sample Question",
        "question": "A motorist decides not to renew a car insurance policy. The number of months until the\nmotorist is charged for driving without insurance is exponentially distributed with mean\n2.50.\nCalculate the probability that the motorist lasts at least 2.50 months without being charged.\n–0.4",
        "options": [
            "1 – e –1",
            "e –1",
            "1 – e –0.4",
            "e –6.25",
            "1 – e"
        ],
        "answerLetter": "B",
        "answer": "e –1",
        "explanation": "Official solution: B\n\nLet X = number of months until the motorist is charged, which is exponentially distributed with\n1\n− 2.5\n1\n− 1\n2.5\nparameter λ = = 0.4 . We want to find P X ( > 2.5) = e = e .\n2.5"
    },
    {
        "id": 661,
        "topic": "SOA Exam P Sample Question",
        "question": "A group of four buildings are near each other on a coastline. A statistician models the\nprobability distribution of the number of buildings in the group that will be damaged by\nhigh tides this year, as shown in the table below.\nn 0 1 2 3 4\nProbability that\nexactly n buildings\n0.920 0.015 0.010 0.020 0.035\nare damaged by high\ntides\nCalculate the probability that at least one of these buildings is damaged by high tides this\nyear given that at least one of these buildings is undamaged by high tides this year.",
        "options": [
            "0.0466",
            "0.0800",
            "0.0829",
            "0.5625",
            "0.7500"
        ],
        "answerLetter": "A",
        "answer": "0.0466",
        "explanation": "Official solution: A\n\nLet X = number of buildings in the group damaged by high tides\nWe want to find P [at least one damaged | at least one undamaged]\nP[1 ≤ X ≤ 3] 0.015 + 0.01 + 0.02 9\nP[ X ≥ 1| X ≤ 3] = = = = 0.0466.\nP[ X ≤ 3] 0.92 + 0.015 + 0.01 + 0.02 193"
    },
    {
        "id": 662,
        "topic": "SOA Exam P Sample Question",
        "question": "The manager of a customer service team finds that the number of technical problems a\ntechnician resolves in an hour follows the distribution below:\nNumber of\nTechnical\nProblems 0 1 2 3 4 5\nResolved in an\nHour\nProbability 1/20 2/20 4/20 8/20 3/20 2/20\nThe number of technical problems resolved in an hour by any particular technician is\nindependent of the number resolved in that hour by any other technician.\nCalculate the probability that two technicians will resolve at least eight technical problems in an\nhour.",
        "options": [
            "25/400",
            "35/400",
            "41/400",
            "48/400",
            "57/400"
        ],
        "answerLetter": "E",
        "answer": "57/400",
        "explanation": "Official solution: E\n\nAt least eight problems are resolved if and only if the two technicians achieve one of the\nfollowing joint records of problem resolution:\nProblems Solved by Problems Solved by Probability\nTechnician #1 Technician #2\n5 5 (2/20)(2/20) = 4/400\n5 4 (2/20)(3/20) = 6/400\n4 5 (3/20)(2/20) = 6/400\n4 4 (3/20)(3/20) = 9/400\n5 3 (2/20)(8/20) = 16/400\n3 5 (8/20)(2/20) = 16/400\nThe solution is the sum, 57/400."
    },
    {
        "id": 663,
        "topic": "SOA Exam P Sample Question",
        "question": "Each day, an insurance claims adjuster is assigned five reports to complete. The total\ntime required to complete all five reports is normally distributed with mean 7.5 hours and\nstandard deviation 1.5 hours.\nCalculate the probability that the claims adjuster will be finished in eight hours or less\ngiven that he is still working after seven and one-half hours.",
        "options": [
            "0.13",
            "0.26",
            "0.37",
            "0.63",
            "0.74"
        ],
        "answerLetter": "B",
        "answer": "0.26",
        "explanation": "Official solution: B\n\nLet X denote the time it takes to complete the 5 reports. We want:\nP[7.5 ≤ X ≤ 8]\nP[ X ≤ 8 | X ≥ 7.5] =\nP X ≥ 7.5\n[ ]\n7.5 − 7.5 8 − 7.5\n’ ’\nP ≤ Z ≤\n’ ’\nP 0 ≤ Z ≤ 0.333\n[ ]\n1.5 1.5\n’ ’\n= =\n7.5 − 7.5\n’ ’ P[ Z ≥ 0]\nP Z ≥\n’ ’\n1.5\n’ ’\n0.13056\n= = 0.2611.\n0.5"
    },
    {
        "id": 664,
        "topic": "SOA Exam P Sample Question",
        "question": "The amount of losses for barn fires is exponentially distributed with mean 20,000.\nDetermine the probability that at least nine of a random sample of ten barn fires will have\nlosses in excess of 20,000.\n9 e − 10",
        "options": [
            "10 e 10 e − 9",
            "10 e 1 9 ( 9 + e )( 1 − ) e",
            "10 e e − 1 ’ ’ 10",
            "’ ’ 10 e ’ ’ 10 e − 1 ’ ’",
            "9 ’ ’ e ’ ’"
        ],
        "answerLetter": "B",
        "answer": "10 e 1 9 ( 9 + e )( 1 − ) e",
        "explanation": "Official solution: B\n\n− 1\n20,000\n1\n20,000 − 1\nP[ X > 20000] = e = e = . The answer is binomial for number of losses:\ne\n9 10\n10 10\n’ ’ ’ ’\n1 1 1 10( e − 1) + 1 10 e − 9\n’ ’ ’ ’ ’ ’\n1 − + = = .\n’ ’ ’ ’ ’ ’ ’ ’ ’ ’\n10 10\n9 e e 10 e e e\n’ ’ ’ ’ ’ ’\n’ ’ ’ ’"
    },
    {
        "id": 665,
        "topic": "SOA Exam P Sample Question",
        "question": "The number of errors on any page of text produced at a particular office is modeled by a\nPoisson distribution with mean 0.10. The number of errors on any one page is\nindependent of the number of errors on all other pages.\nCalculate the probability of more than four errors in a 100-page document produced at\nthe office.",
        "options": [
            "0.01",
            "0.03",
            "0.97",
            "0.98",
            "0.99"
        ],
        "answerLetter": "C",
        "answer": "0.97",
        "explanation": "Official solution: C\n\nThe mean for a 100 page document is 100(0.10) = 10.\nP[ X > 4] = 1 − P[ X ≤ 4] = 1 − (P[ X = 0] + P[ X = 1] + P[ X = 2] + P[ X = 3] + P[ X = 4]\n− 10 0 − 10 1 − 10 2 − 10 3 − 10 4\ne 10 e 10 e 10 e 10 e 10\n1\n= − − − − −\n0! 1! 2! 3! 4!\n= 1 − (.000045 + .00045 + .00227 + .00757 + .01892) = 0.97075."
    },
    {
        "id": 666,
        "topic": "SOA Exam P Sample Question",
        "question": "Engineering specifications require that the probability a ball bearing produced at a\nmanufacturing plant has diameter between 10.5 and 11.5 is at least 0,8. The diameters of\nthese ball bearings are normally distributed with mean 11 and standard deviation σ.\nCalculate the largest value of σ for which the specification is met.",
        "options": [
            "0.15",
            "0.39",
            "0.59",
            "1.60",
            "2.56"
        ],
        "answerLetter": "B",
        "answer": "0.39",
        "explanation": "Official solution: B\n\nP[10.5 < X < 11.5] = 0.80\nBy symmetry of the normal distribution:\nP[ X < 11.5] = 0.90\n11.5 − 11\n’ ’\nP Z< = 0.90\n’ ’\nσ\n’ ’\n11.5 − 11\n= 1.28155\nσ\nσ = 0.39015."
    },
    {
        "id": 667,
        "topic": "SOA Exam P Sample Question",
        "question": "Actuary Tong models claim size from a random sample using a normal distribution with\nmean 500. Actuary Bob models claim size from the same sample using an exponential\ndistribution with mean 500.\nth\nThe 80 percentiles for the two distributions are the same.\nCalculate the second moment, to the nearest thousand, of the claim size according to\nTong’s model.",
        "options": [
            "131,000",
            "145,000",
            "381,000",
            "395,000",
            "500,000 th"
        ],
        "answerLetter": "C",
        "answer": "381,000",
        "explanation": "Official solution: C\n\n− p\nth 500\nFor the exponential model, the 80 percentile is 1 − e = 0.8, p = 804.7190 .\nth\nFor the normal distribution, the z -value of the 80 percentile is 0.84162. Hence,\n804.7190 − 500\n= 0.84162, σ = 362.06245. . Then the second moment is\nσ\n2 2 2\nE( X ) = 362.06245 + 500 = 381, 089."
    },
    {
        "id": 668,
        "topic": "SOA Exam P Sample Question",
        "question": "The random variable X is uniformly distributed on an interval and has median 6 and 90\npercentile 13.20.\nCalculate the second moment of X .",
        "options": [
            "6",
            "27",
            "33",
            "36",
            "63"
        ],
        "answerLetter": "E",
        "answer": "63",
        "explanation": "Official solution: E\n\nLet the interval be from a to b . The median is 6 = ( a + b )/2 leading to the equation a + b = 12.\nth\nThe 90 percentile is 13.2 =0.1 a +-0.9 b leading to the equation a +9 b = 132. Subtracting the\nfirst equation from the second yields 8 b = 120 for b = 15 and then a = –3. The second moment is\n15\n15\n2 3\nx (1/18) dx = x / 54 = (3375 + 27) / 54 = 63.\n∫\n− 3 − 3\nAlternatively, using the formulas for the variance and mean of the uniform distribution the\n2 2\nsecond moment is [15 − − ( 3)] /12 + [(15 + − ( 3)) / 2] = 27 + 36 = 63."
    },
    {
        "id": 669,
        "topic": "SOA Exam P Sample Question",
        "question": "A boat insurance company’s annual profit is normally distributed with mean 100. The\nmean and standard deviation remain constant from year to year, and the annual profits are\nindependent.\nThe probability that the company’s annual profit is negative in at least one of the next two\nyears is 0.36.\nCalculate the standard deviation of the insurance company’s annual profit.",
        "options": [
            "84",
            "109",
            "119",
            "125",
            "127"
        ],
        "answerLetter": "C",
        "answer": "119",
        "explanation": "Official solution: C\n\nLet p = probability of nonnegative annual profit in a given year.\n2\nThen 0.36 = P[negative annual profit in at least one of the next two years] = 1 – p .\nSo, p = 0.80.\nSince the mean is 100, then by symmetry the probability that a given annual profit is less than\n200 is also 0.80.\nFrom the normal table, a cumulative probability 0.80 yields an approximate z -score of 0.84162.\nSo annual profits of 100 and 200 correspond to z -scores of 0 and approximately 0.84162,\nrespectively.\nThis means that a profit difference of 200 – 100 = 100 represents approximately 0.84162 – 0 =\n0.84162 standard deviations. Thus the standard deviation of the annual profit is\n100\n= 118.82.\n0.84162"
    },
    {
        "id": 670,
        "topic": "SOA Exam P Sample Question",
        "question": "The loss on an automobile policy is normally distributed with mean 2500 and standard\ndeviation 500.\nThe premium P for the policy is set such that the probability that a loss exceeds P is 5%.\nCalculate the amount by which P exceeds the median loss.",
        "options": [
            "822",
            "980",
            "2500",
            "3322",
            "3480"
        ],
        "answerLetter": "A",
        "answer": "822",
        "explanation": "Official solution: A\n\nth\nThe 95 percentile of the loss is 2500+1.6449(500) = 3322.45. Since the median and the mean\nare the same, the median is 2500. Therefore, the excess is 3322.45 – 2500 = 822.45."
    },
    {
        "id": 671,
        "topic": "SOA Exam P Sample Question",
        "question": "Two individuals were born today. The age at death of the first is normally distributed\nwith mean 70 and standard deviation 14. The age at death of the second is normally\ndistributed with mean 80 and standard deviation 20. The ages at death are independent.\nCalculate the probability that the average age at death of the two individuals exceeds 80.",
        "options": [
            "0.119",
            "0.238",
            "0.341",
            "0.381",
            "0.659"
        ],
        "answerLetter": "C",
        "answer": "0.341",
        "explanation": "Official solution: C\n\nThe mean of the sum is 70 + 80 = 150. The standard deviation of the sum is\n0.5\n150\n2 2\n’ 14 + 20 ’ = 24.4131.\nThe mean of the average is = 75. The standard deviation is\n’ ’\n2\n24.4131 80 − 75\n= 12.2066. The z-score we are looking for is = 0.4096. So, we want\n2 12.2066\nP X [ > 80] = P Z > 0.4096 = 0.34105.\n[ ]"
    },
    {
        "id": 672,
        "topic": "SOA Exam P Sample Question",
        "question": "The time to failure of an electrical appliance has an exponential distribution. The mean\nof this distribution exceeds its median by 3.80.\nCalculate the variance of this distribution.",
        "options": [
            "12",
            "14",
            "30",
            "153",
            "231"
        ],
        "answerLetter": "D",
        "answer": "153",
        "explanation": "Official solution: D\n\nLet λ be the mean of X, the time to failure . Let m be the median of X . Since\n− m / λ\n0.5 = P[ X ≥ m ] = e\nλ ln 2 = m\n3.8 = λ − λ ln 2\nλ = 12.38379\n2\nVar( X ) = λ = 153.36."
    },
    {
        "id": 673,
        "topic": "SOA Exam P Sample Question",
        "question": "Let X and Y be random variables with E( X ) = 2, E( Y ) = 0, Var ( X ) = 1, Var ( Y ) = 4 and\n1\nρ = Corr ( X , Y ) = .\n2\nDetermine the constant c for which X + Y and cX + Y are uncorrelated.",
        "options": [
            "–3",
            "–5/2",
            "–2",
            "–5/6",
            "–9/11"
        ],
        "answerLetter": "B",
        "answer": "–5/2",
        "explanation": "Official solution: B\n\nCov X Y ( , ) = ρσ σ = 0.5(1)(2) = 1\nX Y\n0 = Cov [( X + Y ), ( cX + Y )] = E ’ X + Y c X + Y ’ − μ μ\n( )( )\nX + Y cX + Y\n’ ’\n2 2\n0 = cE X + 1 + c E XY + E Y − μ μ\n( ) ( ) ( ) ( )\nX + Y cX + Y\n2 2 2 2\n0 = c ( σ + μ ) + 1 + c ( Cov X Y ( , ) + μ μ ) + σ + μ - ( μ + μ )( c μ + μ )\n( )\nX X X Y Y Y X Y X Y\n2 2\n0 = c σ + 1 + c ( Cov X ( , Y ) + μ μ ) + σ\n( )\nX X Y Y\n0 = c + (1 + c )(1 + 2(0)) + 4\n0 = 2 c + 5\n5\nc = − .\n2"
    },
    {
        "id": 674,
        "topic": "SOA Exam P Sample Question",
        "question": "A dental patient anticipates needing X fillings next year, where X is Poisson distributed\nwith mean 3. The patient has a choice of dental insurance policies that reimburse\ndifferent numbers of fillings next year, as shown in the table below.\nPolicy A B C D E\nMaximum number of\nfillings reimbursed 2 3 4 5 6\nnext year\nPolicies that reimburse a larger maximum number of fillings also charge higher\npremiums.\nThe patient wants at least a 75% probability of having all fillings reimbursed next year.\nDetermine the lowest premium policy that the patient should choose.",
        "options": [
            "Policy A",
            "Policy B",
            "Policy C",
            "Policy D",
            "Policy E"
        ],
        "answerLetter": "C",
        "answer": "Policy C",
        "explanation": "Official solution: C\n\nLet X = number of fillings this year, which is Poisson distributed with mean 3.\nWe need to find the smallest integer n such that P[ X ≤ n ] ≥ 0.75. Thus, we need to find the\n− 3 i\nn\ne 3\nsmallest integer n such that ≥ 0.75 .\n∑\ni !\ni = 0\nP[ X ≤ 3] = 0.6472\nP[ X ≤ 4] = 0.8153\nSo, n = 4\nThe patient should choose the policy that reimburses a maximum of 4 fillings, policy C."
    },
    {
        "id": 675,
        "topic": "SOA Exam P Sample Question",
        "question": "An insurance company has determined that the number of auto claims in a year is\nmodeled by a Poisson random variable, X . The probability that there is at least one claim\nin a year is 0.368.\nCalculate the second moment of X .",
        "options": [
            "0.211",
            "0.421",
            "0.459",
            "0.669",
            "1.000"
        ],
        "answerLetter": "D",
        "answer": "0.669",
        "explanation": "Official solution: D\n\nP X [ ≥ 1] = 0.368\n− λ 0\ne λ\nP X [ = 0] = 0.632 =\n0!\nλ = − ln(0.632) = 0.4589\n2 2 2\nE[ X ] = Var( X ) + E( X ) = λ + λ = 0.6694."
    },
    {
        "id": 676,
        "topic": "SOA Exam P Sample Question",
        "question": "Two intersections of streets in a downtown area have been watched for traffic violations.\nSuppose that such violations, in any month, have frequencies X and Y at these two\nintersections, respectively.\nX and Y are modeled by two Poisson distributions with means 15 and 30, respectively.\nThe numbers of monthly violations at the two intersections in all months are mutually\nindependent.\nCalculate the variance of the total number of traffic violations at these two intersections\nin a three-month period.",
        "options": [
            "45",
            "135",
            "225",
            "900",
            "1125"
        ],
        "answerLetter": "B",
        "answer": "135",
        "explanation": "Official solution: B\n\nFor a three-month period, the combined total number of such traffic violations is the sum of\nmonthly violations:\nS = X + X + X + Y + Y + Y .\n1 2 3 1 2 3\nAssuming independence, we have\nVar S ( ) = Var( X + X + X + Y + Y + Y ) = Var( X ) + Var( X ) + ’ + Var( Y )\n1 2 3 1 2 3 1 2 3\n= 15 + 15 + 15 + 30 + 30 + 30 = 135."
    },
    {
        "id": 677,
        "topic": "SOA Exam P Sample Question",
        "question": "In a certain group of medical insurance policyholders, the length of a hospitalization is a\nrandom variable modeled with density function\n− 0.6 x − 1.2 x\n’\n0.4 e + e , x > 0\n’ ( )\nf ( ) x = ’\n0, otherwise.\n’\n’\nCalculate the median length of hospitalizations.",
        "options": [
            "0.537",
            "0.905",
            "0.963",
            "1.252",
            "1.389"
        ],
        "answerLetter": "B",
        "answer": "0.905",
        "explanation": "Official solution: B\n\nm\nm\n− 0.6 x − 1.2 x − 0.6 m − 1.2 m\n’ ’ ’ ’\ne e e e\n− 0.6 x − 1.2 x\n0.5 = F m ( ) = 0.4 e + e dx = 0.4 − − = 0.4 2.5 − −\n( )\n’ ’ ’ ’\n∫\n0.6 1.2 0.6 1.2\n’ ’ ’ ’\n0\n0\n− 0.6 m\nLet y = e .\n2\ny y\n1.25 = 2.5 − −\n0.6 1.2\n2\n1.5 = 3 − 2 y − y\n2\ny + 2 y − 1.5 = 0 .\n− 2 + 4 + 6\ny = = 0.58114\n2\nm = − ln(0.58114) / 0.6 = 0.9046.\n(Note that the negative solution to the quadratic equation does not work since e to any power\nmust be positive.)"
    },
    {
        "id": 678,
        "topic": "SOA Exam P Sample Question",
        "question": "Grades on a final exam are uniformly distributed over the interval [65, 95].\nCalculate the probability that a randomly selected student’s grade is within one standard\ndeviation of the mean.",
        "options": [
            "0.29",
            "0.40",
            "0.58",
            "0.68",
            "0.79"
        ],
        "answerLetter": "C",
        "answer": "0.58",
        "explanation": "Official solution: C\n\na + b 65 + 95\nE( X ) = = = 80\n2 2\n2 2\n( b − a ) (95 − 65)\nVar( X ) = = = 75\n12 12\nSD X ( ) = 75 = 8.660254\n88.6603 − 71.3397\n’ ’\nP 80 − 75 < X < 80 + 75 = = 0.5774.\n’ ’\n30"
    },
    {
        "id": 679,
        "topic": "SOA Exam P Sample Question",
        "question": "Claims paid against a particular insurance policy are equal to the amount of the loss and\nfollow a normal distribution with mean 525 and standard deviation 100.\nA deductible, d , is written into the policy and applies separately to each loss. As a result,\nonly 14% of the losses result in a claim payment exceeding 500.\nCalculate d .",
        "options": [
            "36",
            "39",
            "61",
            "83",
            "133"
        ],
        "answerLetter": "E",
        "answer": "133",
        "explanation": "Official solution: E\n\n14% is the probability that a claim exceeds 500 + d . Hence,\n500 + d − 525\n’ ’\n0.14 = P X ( > 500 + d ) = P Z > = 0.01 d − 0.25\n’ ’\n100\n’ ’\n1.0803 = 0.01 d − 0.25\nd = 133.03."
    },
    {
        "id": 680,
        "topic": "SOA Exam P Sample Question",
        "question": "The loss, X , subject to reimbursement under an insurance policy, has a distribution with\ndensity function\n− x − d\n’ ( )\n’ ’ 1 ’\nβ\n’\ne , for x ≥ d\nf ( ) x = ’ ’ ’\nβ\n’ ’\n’\n0, otherwise,\n’\n’\nwhere d is the deductible, and β is a positive constant.\nth\nDetermine the 10 percentile of X .\n11\n’ ’",
        "options": [
            "β ln ’ ’ 10 ’ ’ 10 ’ ’",
            "β ln ’ ’ 9 ’ ’ 11 ’ ’",
            "β ln + d ’ ’ 10 ’ ’ 10 ’ ’",
            "β ln + d ’ ’ 9 ’ ’ 1 11 ’ ’",
            "ln ’ ’ β 10 ’ ’"
        ],
        "answerLetter": "D",
        "answer": "β ln + d ’ ’ 9 ’ ’ 1 11 ’ ’",
        "explanation": "Official solution: D\n\nth\nLet p be the 10 percentile of X . Then, we wish to solve for p such that\nP[ X < p ] = F p ( ) = 0.10.\n− ( x − d )\nβ\nNow, F x ( ) = 1 − e\n− ( p − d )\nβ\nSo, 1 − e = 0.10\n− ( p − d )\nβ\ne = 0.90\n− ( p − d )\n= ln 0.90\nβ\n( p − d ) 10\n= ln\nβ 9\n10\np = β ln + d\n9"
    }
];
