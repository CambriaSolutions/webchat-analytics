const data = {
  'contact human': {
    occurences: 365,
    queries: [
      'Do I even read these questions ', // *
      'Can I speak to someone?', // added to contact-qa-number
      'answer my question', // *
      'Who do I talk to check the status of that ', // added to contact-qa-number, suggested for case status
      'I need help trying to find out who I need to talk to about chil custody ', // *
      "I just want to ask if I need to talk with someone about my case again, do I need to come in again? I have written a letter and drove an hour to Hattiesburg but I still need to talk to someone about our situation cuz it isn't healthy.", // added to contact-qa-number
      'i need to talk with someone', // added to contact-qa-number
      'Can I get the 800 number', // added to contact-qa-number
      'Question submitted and no one called', // added to contact-qa-number
      'Who do i need to speak wit or who cn i talk on the phone with about this ongoing issue.', // added to contact-qa-number
      'I need to talk to someone about my case', // added to contact-qa-number
      'number to check my address on file is correct', // added to contact-qa-number
      "I'm sorry phone # PHONE_NUMBER", // *
      'DIGITS month', // added to pmt-calc-tax-deductions
      'Noone answering that numberv', // mislabeled
      'I need to speak with someone', // added to contact-qa-number
      'How do I speak to my case worker?', // added to contact-qa-number
      'Who would I speak to to request visitations', // mislabeled
      'I am a child on the case but I am 21 won’t nobody talk to me why', // *
      'I need to speak with manager ', // added to contact-qa-number
      'DIGITS', // *
      'Speak to someone', // added to contact-qa-number
      'I need to talk to someone due to child support ', // added to contact-qa-number
      'I need to speak with someone about that ', // added to contact-qa-number
      'No one will answer this number', // mislabeled
      'Don’t know this ', // *
      'Get a number ', // added to contact-qa-number
      'DIGITS', // *
      'will they answer?', // suggest callcenter not answering
      'they never anser', // suggest callcenter not answering
      'translator', // *

      //// CUTOFF Training ////

      "dont worry about it i'll call when i get off", // *
      'Can you please have someone from the Kosciusko, Attala County Child Support to call me concerning one of my employees Child Support payments. Thank you. PERSON_NAME, J. C. Cheek Contractors, Inc. PHONE_NUMBER', // *
      'When you find out let me know so I can send check.', // *
      'Can I speak with someone', // added to contact-qa-number
      'Yes contact PERSON_NAME Angellete PHONE_NUMBER', // *
      'I dnt want the full service ', // *
      'DIGITS', // *
      'DIGITS N. Gloster Street, Suite B, Tupelo, MS ZIPCODE; I tried callin the number listed online PHONE_NUMBER. I received a message that the number was not in service.', // *
      'I’m trying to help my son to fine out how much child support he owe and I cannot get anyone to talk to me can you please help me ', // mislabeled, arrears?
      'I need a phone number for child support in ms', // add to contact-qa-number
      'I HAVE I DID NOT GET A COMPLETE ANSWER FORM THEM', // *
      'how long to hear from email ?', // *
      'Do I need to make an appointment to talk with someone about this',
      "U didn't answer my last question", // *
      'What’s the number to check.  ', // add to contact-qa-number
      'I need to set this up asap please PHONE_NUMBER', // add to contact-qa-number
      'Phone number to check case status', // add to contact-qa-number
      'I do not have a phone', // *
      'well then what questions can you answer', // mislabeled, suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'Please have supervisor call me ', // add to contact-qa-number
      'Please have a supervisor call me. Every person that has called me back has hung up because they are not trained to answer my question ', // mislabeled, complaints?
      'Looking for one ending in DIGITS', // *
      'Talk to PERSON_NAME sumerall ', // *
      'Call them', // add to contact-qa-number
      'I need tuelo ms phone number for mdhs', // add to contact-qa-number
      'Customer service number', // add to contact-qa-number
      'I need the number from STREET_ADDRESS, corinth ms', // add to contact-qa-number
      'Can I speak to an agent?', // add to contact-qa-number
      'Customer service number?', // add to contact-qa-number
      'May I have the customer service number ', // add to contact-qa-number
      'Need to speak with someone.  ', // add to contact-qa-number
      'Just need the DIGITS customer service number', // add to contact-qa-number
      'I need the phone number for the legal department of child support ', // add to contact-qa-number
      'Legal services number ', // add to contact-qa-number
      'Customer service number for ms', // add to contact-qa-number
      'Customer service number', // add to contact-qa-number
      'Child support phone number ', // add to contact-qa-number
      'what kind of questions do you answer', // mislabeled, suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'Do I need a call between 8 and 5 or something', // * mislabeled for hours of operations, but not category for this.
      'what are the hours of operation for customer service?', // * mislabeled for hours of operations, but not category for this.
      'DIGITS PHONE NUMBER', // *
      'No phone number', // *
      "I don't have a phone number.", // *
      'How can I talk to my caseworker ', // add to contact-qa-number
      'How can I talk to someone', // add to contact-qa-number
      'I have a complaint about MS child support case managers and customer service ', // mislabeld, complaints
      'Phone number in Vicksburg Mississippi', // add to contact-qa-number
      'Customer service number ', // add to contact-qa-number
      'Phone number ', // add to contact-qa-number
      'Why won’t anyone answer the phone.', // suggest callcenter not answering
      'Phone number', // add to contact-qa-number
      'Hi I have a question ', // *
      'phone number', // add to contact-qa-number
      'phone number for panola county', // add to contact-qa-number
      'What’s a Cin Number ', // *
      'DIGITS number', // *
      'Talk to human', // add to contact-qa-number
      'Child support phone number', // add to contact-qa-number
      'Phone numbers', // add to contact-qa-number
      'Is there a number to the distrbution center', // add to contact-qa-number
      'I need the phone number', // add to contact-qa-number
      'I already have a Eppicard, I Have a new phone an Dont hve the 1-800- Number no more', // add to contact-qa-number
      'contact with my case worker', // add to contact-qa-number
      'telephone number', // add to contact-qa-number
      'what is the helpline phone number', // add to contact-qa-number
      'Phone number', // add to contact-qa-number
      'Number ', // add to contact-qa-number
      'Phone number ', // add to contact-qa-number
      'Coahoma county child support number from online sources is not correct.', // mislabeled, complaints
      'are you a real person first off', // *
      'Is this a real person?', // *
      "How fast because I'm using others device at the moment I need you to call me before 4:30 if so PHONE_NUMBER ", // *
      'ask a question', // mislabeled, suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'Customer services ', // add to contact-qa-number
      "i'm looking to get help with a statement letter",
      'I need Mrs lay number she at county Drive ', // *
      'Customer service number ',
      'I need the number to check on all my cases. ',
      'Contact ', // add to contact-qa-number
      'Need to talk to caseworker about my pay ment', // add to contact-qa-number
      'r u dumb listen to me', // *
      'How do I get I touch with dhs', // add to contact-qa-number
      'are you a real person', // *
      'Do you have the number ', // add to contact-qa-number
      'Phone ', // add to contact-qa-number
      'yes what number do i call to cancel a child support case', // add to contact-qa-number
      'I want to talk to a agent', // add to contact-qa-number
      '1-800 number', // add to contact-qa-number
      'phone number', // add to contact-qa-number
      'Who can I call', // add to contact-qa-number
      'Could you have someone call me on PHONE_NUMBER', // add to contact-qa-number
      'What’s the direct number ', // add to contact-qa-number
      'Phone number ', // add to contact-qa-number
      'new number', // *
      'Phone number', // add to contact-qa-number
      'Simply ask a question', // mislabeled, suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'ask a question', // mislabeled, suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'What is the number', // add to contact-qa-number
      'phone number for Pascagoula ', // add to contact-qa-number
      'Speak to a representative ', // add to contact-qa-number
      'Need to talk to someone about a continuance on court date asap', // add to contact-qa-number
      'Phone number', // add to contact-qa-number
      'representative', // add to contact-qa-number
      'DIGITS', // *
      'Number', // *
      'Can I ask a General question', // *
      'U guys sent me a letter was trying to get a understanding', // *
      'what doyou know', // *
      'Phone number ', // add to contact-qa-number
      'customer service', // add to contact-qa-number
      'I need the 1-800 numbers so I can check my card not the number that be change the other number', // add to contact-qa-number
      'Whats the number to call you all', // add to contact-qa-number
      'Hey I have a question ', // mislabeled, suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'What is there phone number ', // add to contact-qa-number
      'DIGITS', // *
      "I don't want my local office. It's in pascagoula. I need a supervisor ", // *
      'I’m tryna get the contact number', // add to contact-qa-number
      'I NEED THE PHONE NUMBER', // add to contact-qa-number
      '1-601/674/DIGITS', // *
      'Phone number ', // add to contact-qa-number
      'Contact number', // add to contact-qa-number
      'Hello why I am', // *
      'Can I get a phone number for this address?', // add to contact-qa-number
      'Phone number:PHONE_NUMBER', // *
      'I need to speak to someone. Do you have a direct phone number?', // add to contact-qa-number
      'DIGITS', // *
      'Speak with someone ', // add to contact-qa-number
      '1 800 number so I can check on my cases', // add to contact-qa-number
      'What is a number I can call to talk to someone ', // add to contact-qa-number
      'local number', // add to contact-qa-number
      'the phone number', // add to contact-qa-number
      'Phone number ', // add to contact-qa-number
      'ask question', // mislabeled, suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'What is the phone number?', // add to contact-qa-number
      'How do I speak to someone', // add to contact-qa-number
      'I was supposed to get a call and never received one', // add to contact-qa-number
      'i have called so many times my case worker hasnt called me or any thing', // suggest callcenter not answering
      'I want to speak with a representative ', // add to contact-qa-number
      'i need a direct phone number ', // add to contact-qa-number
      'i cant get to a person when i call that number', // suggest callcenter not answering
      'speak with someone on phone', // add to contact-qa-number
      "What's the automated phone number", // add to contact-qa-number
      'Speak with a representative ', // add to contact-qa-number
      'PHone number', // add to contact-qa-number
      'Customer service ', // add to contact-qa-number
      'Trying to contact someone about child support', // add to contact-qa-number
      'who called me.', // *
      'Also I want to speak to caseworker ', // add to contact-qa-number
      'ask a question', // mislabeled, suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'any i can talk to', // *
      ' fireman a being to due to business my handle to unable am I because Griffin PERSON_NAME mother My with consult can You PHONE_NUMBER', // *
      'What is the phone number in PERSON_NAME, Ms ', // add to contact-qa-number
      'Their phone number', // add to contact-qa-number
      'Get a contact number ', // add to contact-qa-number
      'contact phone number', // add to contact-qa-number
      'Contact number', // add to contact-qa-number
      'No one is available to take my call', // suggest callcenter not answering
      'I cannot reach a representative by the number provided', // suggest callcenter not answering
      'Are u a computer', // *
      'I do have a few questions actually', // *
      'Answer my first question', // *
      'How can I speak with a case worker?', // add to contact-qa-number
      'Hello i need the DIGITS number to check my CS payment', // add to contact-qa-number
      "I have been calling trying to get in touch with someone to find out some information. If my child  has a child and is with child again and has a job I'm wondering why am I still having to pay child support?", // suggest callcenter not answering
      'Do you know how long will it take before someone contact me?', // *
      'PERSON_NAME , MS whats the telephone numbers?',
      'whats the phone number', // add to contact-qa-number
      'THEY NEVER REACH OUT OR ANSWER THE PHONE', // suggest callcenter not answering
      'They will not answer the phone', // suggest callcenter not answering
      "How can I talk to someone each time I call the number PHONE_NUMBER the will not answer the call.  I can only get the music in the background.  I really need to speak to someone and I have been trying for about a month can't get a person to answer. HELP!!", // suggest callcenter not answering
      'Hello? are you pushing me off to the call center with no explanation?', // *
      'are you a human or robot', // *
      "PERSON_NAME's phone #PHONE_NUMBER", // *
      'are you a person', // *
      'Assistant', // *
      'I need the number to talk to someone about my case ', // *
      'Phone number ', // *
      'Speak with a representative ', // add to contact-qa-number
      'Customer service ', // add to contact-qa-number
      "what is the child support division's phone number", // add to contact-qa-number
      'The phone number ', // add to contact-qa-number
      'need my iv-d number or docket number', // *
      'How do I contact my case worker ', // add to contact-qa-number
      'I want the phone number to call to see is there a pending amount that suppose to come to me I received a letter I’m not sure what it means ', // add to contact-qa-number
      " what's the toll free number", // add to contact-qa-number
      'Will you call or email so I know how to look ', // *
      'i have already called that number, i would like a number to the starkville ms mdms branch where i can speak to someone ', // add to contact-qa-number
      'im the custodial', // *
      'phone numbe', // add to contact-qa-number
      'I need to talk to someone', // add to contact-qa-number
      'I need to know how long does it take to process the information to the Mississippi Department of  Transportation?', // *
      'What is the phone number ', // add to contact-qa-number
      'Y’all to a representative ', // add to contact-qa-number
      'Phone number?', // add to contact-qa-number
      'I need a live person to talk to', // add to contact-qa-number
      "I'm here to see how can in get in touch with someone about my case. ", // add to contact-qa-number
      'Can you let me talk with someone else that would be able to assist me?', // add to contact-qa-number
      'and DIGITS', // *
      'Do I have to do anything else or will they call me', // *
      'Do you answer arrears questions', // mislabeled, arrears?
      'How can I speak with you', // add to contact-qa-number
      'phone number?', // add to contact-qa-number
      'whats the toll free number', // add to contact-qa-number
      'What the hot line number  to check  your bal', // add to contact-qa-number
      'Can you send me their number ', // add to contact-qa-number
      'I need a number to contact to get my DNA results ', // add to contact-qa-number
      'speaking with a live rep', // add to contact-qa-number
      'Phone number', // add to contact-qa-number
      'I need the phone number ', // add to contact-qa-number
      'I’m trying to see how to contact my caseworker directly ', // add to contact-qa-number
      'Phone number for county line', // add to contact-qa-number
      'Talk to customer service agent', // add to contact-qa-number
      'Phone bumber', // add to contact-qa-number
      'What phone number can I call ', // add to contact-qa-number
      'Are you answer questions today', // mislabeled, suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'Can I ask you a question?', // mislabeled, suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'Phone. Number', // add to contact-qa-number
      'Wat the number ', // add to contact-qa-number
      'Phone number ', // add to contact-qa-number
      'phone', // add to contact-qa-number
      'I need contact number', // add to contact-qa-number
      'Speak with someone', // add to contact-qa-number
      'Phone Humber ', // add to contact-qa-number
      'I was trying to find out the number to see if there was a payment made recently', // *
      'are you a real person?', // *
      'Actually idk I was looking on here to see if it can help me find Social worker that’s working on my family case', // *
      'Speak with someone ', // add to contact-qa-number
      'I don’t want to talk to the call center', // *
      'Case number and address to send it to.', // mislabeled, case number
      'I have not received all of my June child support and I need the number to the director, not the automated line, for Mississippi',
      'Do i need to contact a higher person over yall head this been 16years', // add to contact-qa-number
      'I’m looking for the 1-877 number', // add to contact-qa-number
      'Automatic number', // add to contact-qa-number
      "ive been to the local office and they haven't contacted me back. They wont give me a case worker ", // add to contact-qa-number
      'rep', // add to contact-qa-number
      'Phone number', // add to contact-qa-number
      'Customer service ', // add to contact-qa-number
      'have someone call me ', // add to contact-qa-number
      'please advise a phone number where a payment can be made on rearage  for ms ', // add to contact-qa-number
      'are you a fun time gal?', // *
      'are you a human', // *
      'Phone number ', // add to contact-qa-number
      'I call that number and they had me to call this number PHONE_NUMBER but I cant reach anyone', // suggest callcenter not answering
      'I have called customer service but I want to talk to a live person but keep getting automatic system.', // suggest callcenter not answering
      'the phone to correct the issue.', // add to contact-qa-number
      'What is the wed site to put on yur phone ', // *
      'Phone number ', // add to contact-qa-number
      'Customer service', // add to contact-qa-number
      'phone number ', // add to contact-qa-number
      'Can I speak with a real person?', // add to contact-qa-number
      'I need to talk to someone about my case', // add to contact-qa-number
      'Speak to a agent ', // add to contact-qa-number
      'Ask a question ', // mislabeled, suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'What questions they ask at child support hearing?', // *
      'Customer service', // add to contact-qa-number
      'Phone number', // add to contact-qa-number
      "What's the child support phone number ", // add to contact-qa-number
      'Phone number ', // add to contact-qa-number
      'Phone number', // add to contact-qa-number
      'I have questions to ask ', // mislabeled, suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      "I'm trying to talk to a worker", // add to contact-qa-number
      'Customer service number', // add to contact-qa-number
      "What's the number to the one in county line road", // add to contact-qa-number
      'Phone number', // add to contact-qa-number
      'Phone number phone num', // add to contact-qa-number
      'Do you have an automated phone payment line', // add to contact-qa-number
      'Customer Service number', // add to contact-qa-number
      'What is the best way to stay up to date and/or communicate with my case worker when I have concerns/questions?', // *
      'Phone number', // add to contact-qa-number
      'What is the number to call for the automated system to check what I am currently owed?', // add to contact-qa-number
      'I don’t have time to call anyone', // *
      'Phone number for vicksburg ', // add to contact-qa-number
      'Getting in touch with my case worker', // add to contact-qa-number
      'Trying to see how to contact child support to receive unpaid payments ', // add to contact-qa-number
      'What number do I call to check on the status of my case', // add to contact-qa-number
      'Talk to someone ', // add to contact-qa-number
      'speak to a person', // add to contact-qa-number
      'can I speak to a representative?', // add to contact-qa-number
      'What is the number to call to speak with someone about child support received?', // add to contact-qa-number
      'Can I speak to a representative ', // add to contact-qa-number
      'I want to talk to a real person', // add to contact-qa-number
      'Can I talk to someone, they been cutting the absent parent check and I need to find out about how to receive them payments', // add to contact-qa-number
      'full service', // *
      'what is customer service', // add to contact-qa-number
      'Phone number ', // add to contact-qa-number
      'Is on file and every time I call them no one helps me no one', // mislabeled, complaints
      'Can you please call me ', // add to contact-qa-number
      'yes im trying to see the number for tunica county child support office since its been move', // add to contact-qa-number
      'nobody answers that number', // suggest callcenter not answering
      'Do you know who this family contacts for assistance temporarily', // add to contact-qa-number
      "I'm at the child support officr in Indiana and they need to speak with a customer service rep", // add to contact-qa-number
      'How can I speak to a respresentive ', // add to contact-qa-number
      'I received a letter with a case #. I need to know who to speak to via voice? Do you have a phone number ', // add to contact-qa-number
      "What's the DIGITS number to child support", // add to contact-qa-number
      'need to speak to representative', // add to contact-qa-number
      'I need to know what number do I call to c if any payments have been made', // add to contact-qa-number
      'The local phone number', // add to contact-qa-number
      'phone number', // add to contact-qa-number
      'im gonna call', // *
      'phone numberr', // add to contact-qa-number
      'Phone number', // add to contact-qa-number
      'Phone number', // add to contact-qa-number
      'Don’t know', // *
      'Contact info ', // add to contact-qa-number
      'contact number', // add to contact-qa-number
      'Representative', // add to contact-qa-number
      'is there a phone # i can call in PERSON_NAME ms to talk with someone about our case ?', // add to contact-qa-number
      'Speak with a representative ', // add to contact-qa-number
      'Can  I get the 1 877 number', // add to contact-qa-number
      'What’s the DIGITS number ', // add to contact-qa-number
      'What is the number to call to find out if a payment had been made', // add to contact-qa-number
      'PHONE NUMBER', // add to contact-qa-number
      'Number', // add to contact-qa-number
      'What number do I call if I have questions about child support papers I have filed?', // add to contact-qa-number
      'Text please ', // *
      'What is their number ', // add to contact-qa-number
      'What’s the number ', // add to contact-qa-number
      'I was looking for a direct line to the Pascagoula office located on STREET_ADDRESS', // add to contact-qa-number
      'Can I have the child support hotline direct number?', // add to contact-qa-number
      'number to call', // add to contact-qa-number
      'who can I directly speak to about my case? ', // add to contact-qa-number
      'who do i get in touch with to figure out what’s taking so long for my case ', // add to contact-qa-number
      "What's the DIGITS number where I can talk to someone", // add to contact-qa-number
      "Why can't I just talk to a human", // add to contact-qa-number
      "What's the number where I can talk to a representative ", // add to contact-qa-number
      'what is the contact information to call someone in regards to this matter?', // add to contact-qa-number
      'customer service rep', // add to contact-qa-number
      'Real person', // add to contact-qa-number
      'How do I talk with a real person?', // add to contact-qa-number
      'Can i speak to a customer service rep', // add to contact-qa-number
      'Number to talk to worker', // add to contact-qa-number
      'Who else can be contacted', // add to contact-qa-number
      'That number has no information', // mislabeled, complaints
      'Yes I’m looking for a customer service phone number ', // add to contact-qa-number
    ],
    contexts: [
      { name: 'waiting-feedback-root', count: 81 },
      { name: 'waiting-restart-conversation', count: 80 },
      { name: 'waiting-yes-child-support', count: 64 },
      { name: 'waiting-not-child-support', count: 64 },
      { name: 'ticketinfo', count: 22 },
      { name: 'waiting-open-csc-location-services', count: 18 },
      { name: 'waiting-open-csc-employer-payments', count: 17 },
      { name: 'waiting-open-csc-full-services', count: 16 },
      { name: 'waiting-pmtmethods-debit-card', count: 15 },
      { name: 'waiting-support-phone-number', count: 11 },
      { name: 'waiting-maps-deliver-map', count: 11 },
      { name: 'waiting-support-no-phone-number', count: 10 },
      { name: 'waiting-support-general-inquiries', count: 10 },
      { name: 'waiting-support-type', count: 9 },
      { name: 'waiting-support-parent-receiving', count: 8 },
      { name: 'waiting-support-employer', count: 8 },
      { name: 'waiting-support-parent-paying', count: 8 },
      { name: 'waiting-iwo-wants-assistance', count: 7 },
      { name: 'waiting-iwo-faqs', count: 7 },
      { name: 'waiting-iwo-no-assistance', count: 7 },
      { name: 'waiting-support-no-email', count: 7 },
      { name: 'waiting-support-email', count: 7 },
      { name: 'waiting-support-restart', count: 5 },
      { name: 'waiting-acknowledge-privacy-statement', count: 5 },
      { name: 'waiting-eppi-activate', count: 5 },
      { name: 'waiting-eppi-replace-report', count: 5 },
      { name: 'waiting-eppi-get-card', count: 5 },
      { name: 'waiting-eppi-notifications', count: 5 },
      { name: 'waiting-eppi-faq', count: 5 },
      { name: 'waiting-eppi-fees', count: 5 },
      { name: 'waiting-open-csc-no-service', count: 4 },
      { name: 'waiting-open-csc-select-form', count: 4 },
      { name: 'waiting-support-cancel-issue', count: 3 },
      { name: 'waiting-caseqa-general-support-request', count: 3 },
      { name: 'waiting-support-employment-status', count: 3 },
      { name: 'waiting-pmtqa-ncp-payment-status-submit-request', count: 3 },
      { name: 'iwo-factors', count: 3 },
      { name: 'waiting-pmt-calc-num-children', count: 3 },
      { name: 'waiting-pmtmethods-cash', count: 2 },
      { name: 'waiting-support-submit-issue', count: 2 },
      { name: 'waiting-support-revise-issue', count: 2 },
      { name: 'payment-factors', count: 2 },
      { name: 'waiting-dirdep-learn-more-eppicard', count: 2 },
      { name: 'waiting-dirdep-no-learn-more-eppicard', count: 2 },
      { name: 'waiting-dirdep-confirm-form', count: 2 },
      { name: 'waiting-pmts-general-non-custodial', count: 2 },
      { name: 'waiting-pmts-general-receive-payments', count: 2 },
      { name: 'waiting-pmtmethods-cant-make', count: 2 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 2 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 2 },
      { name: 'request-type', count: 2 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 2 },
      { name: 'waiting-dirdep-learn-more', count: 2 },
      { name: 'waiting-dirdep-change', count: 1 },
      { name: 'waiting-iwo-disposable-income', count: 1 },
      { name: 'waiting-contact-provide-phone-number', count: 1 },
      { name: 'requests', count: 1 },
      { name: 'waiting-contact-support-handoff', count: 1 },
      { name: 'waiting-pmt-calc-unknown-ss-deductions', count: 1 },
      { name: 'waiting-support-parent-paying-more', count: 1 },
      { name: 'waiting-pmt-calc-retirement-contributions', count: 1 },
      { name: 'waiting-dirdep-start', count: 1 },
      { name: 'waiting-dirdep-stop', count: 1 },
      { name: 'waiting-appts-office-locations', count: 1 },
      { name: 'waiting-appts-guidelines', count: 1 },
      { name: 'waiting-appts-schedule', count: 1 },
      { name: 'waiting-feedback-helpful', count: 1 },
      { name: 'waiting-feedback-complete', count: 1 },
    ],
  },
  'not received payment': {
    occurences: 242,
    queries: [
      "I don't know the differnces", // *
      "I want to know why I haven't received any child support for the last 2 and a half weeks ", // add to pmtQA-havent-received
      'Is there any reason I havent gotten my payments in two months?', // add to pmtQA-havent-received
      "My child's father is not paying his child support and i was told he is fixing to get a large check from a car accident any way that can pay his child support up ", // *
      'Why am I not receiving my child support this month but I did last month ', // add to pmtQA-havent-received
      'What if the child mother keep saying she not receive child support how do I find out if it’s true or not they take it out my check', // *
      'Hi my name is PERSON_NAME.. I haven’t received my support check for this month always get it on the 12th each month.. how can I find out the problem..', // *
      "I have not received child support in two months and I can't reach anyone who can help me with this. I have information to help assist my child support case", // *
      'Did not receive last month ', // add to pmtQA-havent-received
      "I've always had my child, since the moment she was born till now.   It's been 6 years and nomatter what I'm still getting sued for child support.  Why?", // *
      'She’s been told not to do it we did it was Social Services that came out to the house and said that The house that the lady is in is not fit for', // *
      'Why is my payments not being hibernate to me ', // add to pmtQA-havent-received
      'I haven’t received my child support ', // add to pmtQA-havent-received
      'Have not received child support in a month', // add to pmtQA-havent-received
      'I have a current child support case, but I have not received my payment this month. How can I check on that? ', // add to pmtQA-havent-received
      'yes, I did not receive my child support for August and would like to have this investigated.', // add to pmtQA-havent-received
      'Why is child support taking medical and child support payment out my check', // *
      "I haven't received child support", // add to pmtQA-havent-received
      'He owes back child support. He’s a year behind ', // mislabeled, enforcements?
      'I have not received my child support for the month of Aug. and I need to know why?', // add to pmtQA-havent-received
      'My child’s father paid last week and I still haven’t received my pay', // suggest paid but not received
      'Why am I not receiving child support even though it is being withdrawn from other parents checks', // suggest paid but not received
      'No I do not give permission for dcse to take my payments and deposit direct', // *
      'I have not received payment for this week ', // add to pmtQA-havent-received
      'What if the month is almost over and u still haven’t received but the money is on hold as if he’s behind and he’s not then how do you get your money ', // *
      "No I need to know I'm not getting child support there is 900 dollars that been taking out the father's check", // suggest paid but not received
      'Why I’m not receiving my child support', // add to pmtQA-havent-received
      'why am I not getting my child support', // add to pmtQA-havent-received
      'Why am I not getting my child supoort', // add to pmtQA-havent-received
      "I haven't received a payment", // add to pmtQA-havent-received
      'I would like to know when my payments will start again. He has been employed for 3 months now. ', // add to pmtQA-havent-received
      'I am owed 9 months of child support', // mislabeled, enforcements?
      'Just wanted to see how much behind the other parent is', // add to pmtQA-havent-received
      "My ex wife says she hasn't got her child support", // add to pmtQA-havent-received
      'I haven’t received child support payments in 2 months ', // suggest > 1 month intent
      'my last 3 payments have not been sent to my kids', // suggest paid but not received
      'Where do I go to see why I have not received my child support ', // add to pmtQA-havent-received
      'My son’s father’s tax’s were offset due owing child support. Is there any way to check if the state has received money on my behalf? ', // mislabled, timelines
      'I haven’t received my payment this month ', // add to pmtQA-havent-received
      "Haven't got child support in 7 months ", // suggest > 1 month intent
      'Can I still collect unpaid support from my court ordered from my divorce.I did not receive any payments after DIGITS  ', // *
      'What can be done if you have not received any payments since last year and you know that the noncustodial parent is working?', // mislabeled, enforcements?
      "I haven't  recieved child support payment for this month", // add to pmtQA-havent-received
      'The money is coming out of my check but not being processed to the card ', // suggest paid but not received
      'My PERSON_NAME mother put child support on the card last week and we have yet received any money', // add to pmtQA-havent-received
      'They are taking 600 a month from the absent father but I haven’t receive any money ', // suggest paid but not received
      'I haven’t received my child support. Normally I receive it no later than the 5th of every month. My name is PERSON_NAME Morris. Last 4 of social are DIGITS', // add to pmtQA-havent-received
      'problem with having child support taken out of check when we do not owe child support to anyone ', // mislabeled
      'i need to know why im not getting child support', // add to pmtQA-havent-received
      'I haven’t received a payment in a. Year', // suggest > 1 month intent
      'I dont owe child support and have sent and called several times and thet told me it would be took ca tre e of and still has not ', // *
      'Tax return took child support out in February but it’s August and still not posted to the mothers account', // suggest paid but not received
      'I am not receiving child support from my child’s father and it is court ordered. ', // add to pmtQA-havent-received
      'I have not recieved payment for this month it was due on today', // add to pmtQA-havent-received
      'Have not received one', // add to pmtQA-havent-received
      "I haven't received anything in a long time... ", // add to suggest > 1 month intent
      'To check child support pending payments', // add to pmtQA-havent-received
      'The mother is using child support to pay her bills and not helping the baby ', // *
      'I have not received payment in years', // add to suggest > 1 month intent
      'My payments were suppose to start in June and I haven’t received anything for June. Only July payments ', // *
      'I got approved for Child support but is not getting the amount award for my children. What can I do to get the full amount award to them ', // add to pmtQA-havent-received
      "I have the eppicard,  but I'm not getting the payments i was ordered by the court and he states that he's paying ", // add to pmtQA-havent-received
      'No payments ', // add to pmtQA-havent-received
      'I’m not receiving payments from other parent ', // add to pmtQA-havent-received
      'My payment is due today but I will not have it until next week on the 7th.', // mislabeled, can't make payments
      'Payment not recieved ', // add to pmtQA-havent-received
      "Already have eppicard. Trying to find out where a payment is I haven't received ", // add to pmtQA-havent-received
      'Why is there an fee to recieve child support', // mislabeled, fees?
      "I've never received anything and I filed a year ago ", // mislabeled, case status?
      "I have not been receiving my child support payments as i am supposed to. They are coming straight out of the other parents checks and he is still getting them, so there should be no reason I'm b not getting mine", // *
      'I need to know why I haven’t received my payments ', // add to pmtQA-havent-received
      'I have a eppi card. But i switch states from Mississippi back to NY,  where both fathers live and i originally recieved payments. I tried switching back 4 months ago and havent recieved payments thru either state in that time. Where are my payments going?', // *
      'Why haven’t I received payments ', // add to pmtQA-havent-received
      'Why am I not receiving payment ', // add to pmtQA-havent-received
      "My son haven't got child support in 2 years. He's 21 now. His father missed his 11th and 12th grade year in school. Will he received that back money", // mislabeled, arrears
      'money', // *
      'NOT RECEIVING PAYMENTS', // add to pmtQA-havent-received
      'No I am not receiving my scheduled payments ', // add to pmtQA-havent-received
      'I have applied for child support and my daughter is 4 years old now and I still haven’t received any for her. What can I do?', // mislabeled, case status?
      'I am having trouble receiving the correct amount of child support. I have been through lawyer and it was suppose to start being drafted but that has never happened. I have contacted my lawyer office three times and have not gotten a call back from her.', // *
      'I’ve had a case open for 13 years and still not a penny', // mislabeled, case status?
      'He’s not paying but will be getting married next month ', // add to pmtQA-havent-received
      'IM TRYING TO SEE WHY I HAVENT HAD PAYMENT SINCE OCTOBER DIGITS', // add to suggest > 1 month intent
      "My child's father filed taxes in April. Why haven't I received anything when he's behind $DIGITS+?", // *
      'where is my money', // add to pmtQA-havent-received
      "I'm trying to update my information and see why I'm not getting my child support", // add to pmtQA-havent-received
      'Why am I not receiving child support payments? My child’s non custodial parent is currently on Workman’s Compensation. ', // add to pmtQA-havent-received
      'Trying to find out why my sons mother hasnt had to start paying on any of her back child support and why Its still not been adjusted to her income? ', // add to pmtQA-havent-received
      "I haven't received any payment ", // add to pmtQA-havent-received
      'I have the eppicard but haven’t received my payment ', // add to pmtQA-havent-received
      '19 years old and pregnant and not receiving benefits from the guardian over my Childsupport case', // add to pmtQA-havent-received
      'Why haven’t I been getting my child support payments? ', // add to pmtQA-havent-received
      'missed child support payment', // add to pmtQA-havent-received
      'I need a number to speak with someone in PERSON_NAME Co Mississippi about why I am not getting any CS, and they have taken over 8,000 from him for it ', // mislabeled, contact human
      'I have been giving money to my babymother and my daughter through cash app with payment info and what the money was for but she sued me for my arrears which was DIGITS.00  I have the receipts that total I’ve sent  her DIGITS.00. Do I get refunded for this ', // *
      'Hi....my name is PERSON_NAME Hunt....I haven’t receive child support since June 11, DIGITS ', // add to suggest > 1 month intent
      'I haven’t been getting the full amount like I should ', // add to pmtQA-havent-received
      'Why am I not receiving Child support from certain parents?', // add to pmtQA-havent-received
      'i am trying to find out if i even have anything to collect  im 26 and never recieved anything but my father still gets his checks garnished for back child support', // *
      "Actually it's a lot me and the children's father have not been paying child support on account of I have two and he has one we have been splitting payments for years now I'm being put on child support with no income ", // *
      'I have not received payment for this month ', // add to pmtQA-havent-received
      'Why am I only receiving 7 dollars in child support ', // add to pmtQA-havent-received
      'My ex husband has been working for several months and I have not had any child support payments from him. I have his employment information.', // mislabled, add to info about parent
      'I thought I would be getting something in the mail. ', // *
      'PHONE_NUMBER i got a letter about a decrease but never received anything else and that was like 3 month ago', // *
      'I have the card but haven’t received child support in almost 2 months ', // add to pmtQA-havent-received
      'Hey I’m a child who is on child support but I’m not getting any money from my mom', // add to pmtQA-havent-received
      'I sent information in May DIGITS to give father credit for child support payments made directly to me and it has not showed as credit. What should I do?', // *
      'Haven’t received ', // add to pmtQA-havent-received
      'i have a card already! i have not gotten child support since May. i have called the hotline every week. He is working but nothing has been done', // mislabeled, enforcements?
      'I currently go through DHS to receive child support payments.  He is now in arrearage of about $10,000.  Our sons are older now and I have agreed with their father to close our case with DHS under the circumstances that I get paid what is currently owed.', // *
      'I keep getting notices about arrears when I know I am NOT behind', // *
      'Why am I not receiving any child support from PERSON_NAME D Brown?', // add to pmtQA-havent-received
      "The last payment I received was in May and it wasn't my full amount. I haven't been getting my payments since then and I'm trying to figure out why because I need it for bills ASAP. Thank you", // *
      'I received one in the mail but I am not sure for the reason. ', // *
      'Where is my money for this month why is it not on my card?', // add to pmtQA-havent-received
      "I haven't received child support payment in over a month now. ", // suggest > 1 month
      'I didnt receive my payment this month. Could you tell me why?', // add to pmtQA-havent-received
      'Why am I not receiving payment if they’re taking it from my baby’s father check? ', // add to pmtQA-havent-received
      'I don’t owe any child support I’m the custodian ', // *
      'I have been trying to contact via phone but I do not have a pin.  Also, child support has been taken from my earnings but my children have not received anything in months',
      'My child’s father paid his back child support with his income tax this year and I still haven’t recieved  it. ', // suggest paid but not received
      'I have the eppicard, I haven’t received my July payment ', // add to pmtQA-havent-received
      'I have not receive none of the payments that the father has paid. How can I check and see that he has been paying?', // suggest paid but not received
      "Why haven't I received any payment since April 3 ", // add to > 1 month
      'I mailed my child support payment in', // *
      'I am not getting all of my child support ', // add to pmtQA-havent-received
      'I want to know why I haven’t received a payment in over a year ', // suggest > 1 month
      "I'm making payments and my child is not recieving them", // add paid but not received
      'No payment today', // add to pmtQA-havent-received
      "I have a open case but haven't got payment ", // add to pmtQA-havent-received
      'Im trying to see why i havent received any child support this month ', // add to pmtQA-havent-received
      'I want to know why I have not received a child support payment this month', // add to pmtQA-havent-received
      'I haven’t received a payment this month ', // add to pmtQA-havent-received
      "My exwife is receiving child support for our 20yr old daughter. My daughter has moved out of state for 3 months now. She's not even giving my daughter any monies that she's receiving ", // *
      'I need to know about my case I’m confused every week for 6 weeks they are taking it out his checks he says they haven’t taking about 700 hundred and I only get 55 here and there ', // *
      'Out of my check. How can I get this stopped', // *
      'no payment', // add to pmtQA-havent-received
      "haven't received payment", // add to pmtQA-havent-received
      "didn't get my child support last month or this month", // suggest > 1 month
      "But I'm not recieving anything right now", // *
      'Sending in checks to pay my child support. Checks for June and July were sent into together. Neither check has been cashed. ', // *
      'NO PAYMENT', // add to pmtQA-havent-received
      'My ex-husbands payments have been infrequent and sporadic. He did not pay any amount in DIGITS, and has only made two deposits so far in DIGITS. He states that he has contacted the department about this and that the deposits should be happening. ',
      'Need to KNOW why i only received a payment of. 21', // add to pmtQA-havent-received
      'I’m asking is there a problem with you all system because she suppose to been received her child support payment on yesterday ', // add to pmtQA-havent-received
      'I was trying to see why haven’t I received my daughter’s child support for the month of July ', // add to pmtQA-havent-received
      'My child’s father has paid child support but it has not came to my card so I’m trying to see where are the funds ', // add to pmtQA-havent-received
      'What to do if you are not getting child support for your children when it was court ordered?', // add to pmtQA-havent-received
      'I have not received child support in over six months what can i do', // suggest > 1 month
      'I would like to stop child support because I am not getting the amount they are taking from his check ', // mislabeled, termination
      "I haven't received any payments ", // add to pmtQA-havent-received
      "Im trying to find out how fat behind the payments are since i haven't recieved any since april", // suggest > 1 month
      'ex is not making child support payments', // mislabeled, enforcements?
      'i need to see how much arrearage child support of still have left to pay i did not received my letter with that information that i get each year', // mislabeled, arrears
      'my name is PERSON_NAME Waits 04/22/DIGITS why have i not received my child support payment on my debit card yet? ', // add to pmtQA-havent-received
      'I am the non-custodial parent.  I overpaid my account and it was closed on May 31st.  I sent in a form to recover the overpayment.  I called last Wednesday and was informed that the check was mailed out on the day before.  It has not been received yet',
      "I havent recieved my child support for last week and it's almost time for this weeks payment as well", // add to pmtQA-havent-received
      'Report not receiving payment', // add to pmtQA-havent-received
      'I never received my child support card nor my paper work in the mail. I have been getting the run around since Last year when this case first opened', // add to pmtQA-havent-received
      'My ex didn’t pay child support last month and I have yet to receive it this month. What action(s) can I take?', // mislabeled, enforcements?
      'trying to see when i will receive any child support', // mislabeled, payment timelines?
      'Why my child’s father is not paying and nothing is being done', // mislabeled, enforcements?
      'Child support payment made but not received ', // suggest paid but not received
      'Havent received payments', // add to pmtQA-havent-received
      'I already got the card usually the will take the money out his check on the first of every month but haven’t for this month', // add to pmtQA-havent-received
      'None, I already receive child support ', // *
      'What do I do if I do not receive child support payments', // add to pmtQA-havent-received
      'I need to know why I haven’t gotten my child support this month', // add to pmtQA-havent-received
      'I have not received any child support in months and the father is behind $6,300, what can I do? ', // mislabeled, enforcements?
      "I haven't been receiving any payments ", // add to pmtQA-havent-received
      'Hello, I have a divorce decree from PERSON_NAME and my ex-husband is not paying his child support.  How do I take these teeth garnish his check?', // *
      'I already Have the card but I didnt receive full payment last year ', // suggest > 1 month
      'My kids mom haven’t got child support in 2 months but they Takin from my check', // suggest paid but not received
      'Why haven’t I received payments in two months', // suggest > 1 month
      "I already have a card I haven't received any payments from my child's father", // add to pmtQA-havent-received
      'I just checked and my child support put on my card is 1/2 of what I have been getting. Has the amount changed and I was not notified?', // *
      'Neither, I already have one, im just not getting my payments every month', // suggest > 1 month
      'I receive child support? Even though I am not ', // *
      "My children's mother is on child's up port and hasn't ever paid and has a job and still isn't paying ", // mislabeled, enforcements?
      "I haven't received it", // *
      'I  All ready get child support But hes not paying and his very behind ', // mislabeled, enforcements?
      'Unfortunately I was not able to cash it time. ', // *
      "I'm trying to figure out why I haven't gotten my child support money yet",
      'I need to speak with someone on why I have not received payment in almost two months', // suggest > 1 month
      'What can I do if I’m not receiving child support when the court ordered it',
      'My child’s mother is saying she didn’t receive child support but I paid through the iPay online', // suggest paid but not received
      'Hi, I submitted an IWO with the court when i divorced. I have not been receiving child support from my ex. I called the court and they informed me the IWO form is just a document showed whats owed, not an order for the court to withdraw the money.', // *
      'I haven’t received anything ', // add to pmtQA-havent-received
      'I wanted to find out why I haven’t received my payment this month ', // add to pmtQA-havent-received
      'Neither I want to check on the balance on my account and report no payment in over a month', // suggest > 1 month
      "I'm paying child support but have no idea where my child is", // *
      "No. I'm not getting payments ", // add to pmtQA-havent-received
      "I currently get some payments but my ex said he made a lump sum payment and I didn't receive on my debit card.",
      'I’m not receiving child support anymore and I would like to know what I need to do about it ',
      'i am not getting my child support payments', // add to pmtQA-havent-received
      'Haven’t gotten any child support since January ', // suggest > 1 month
      'Still not receiving my child support and not getting any help. Please assist', // suggest > 1 month
      'Whem will i get my payment o have gotten one they are taling it out I hi checl but no money', // suggest paid but not received
      "I'm trying see who I need to talk to about child support. I have put him on child support but I haven't heard anything. I did this 3 years ago. He done got married and moved to bigger house and will not help nor see his kids. Everytime they call ", // *
      'I have receiveing child support through DHS but I  have not received a payment in several months', // suggest > 1 month
      'Where my money at', // add to pmtQA-havent-received
      "Haven't got June payment", // add to pmtQA-havent-received
      'Hello my name is Tiarrah PERSON_NAME. I haven’t receive child support money since June 1st.', // add to pmtQA-havent-received
      'Why am I not getting all my kids child support', // add to pmtQA-havent-received
      'I haven’t received my child support in 5 months ', //
      'Researching for a relative in Mississippi who has not received support for a long time. She is owed over $4K. Looking for options and advise. She does not have $ for attorneys', // *
      'thats not wht i need im trin to find out why i have not receivedany payments whn childsupport took his income taxes which was a lil over ZIPCODE and then after that his wife mailed in DIGITS and yall r taking childsupport out of his check every wk', // *
      'Trying see why I haven’t receive my child support ', // add to pmtQA-havent-received
      'My child been full military for 2yrs , why I still had to pay support ', // mislabeled, emancipation?
      "my ex has a large amount in back child support owed to me and was supposed to have it taken from his taxes and sent to me through the state. I haven't recieved anything or any word on the matter", // *
      "So, kid's dad is behind on Child support.  He is currently working and has been since last year, but nothing is coming to my card.  What can be done about that?", // *
      'Yes i am supposed to receive child support and I have been told before that my child’s father does have an employer on file but I’m trying to see why don’t I receive monthly child support payments. I have been dealing with this for almost 2 years now', // *
      'why have i not received my payment', // add to pmtQA-havent-received
      'Why is child support being held out if my check I send a bank check by mail every month ', // *
      'I receive child support ', // add to pmtQA-havent-received
      'I have a 7,000 dollar balance on my case my last payment was made on April 18th he has been working and MDHS just stopped taking it out of his checks he has called and even asked them to take it I am supposed to receive 700$ monthly by court order which', // *
      "I already have it set for direct deposit, I haven't received payment in 4 months", // mislabeled, enforcements?
      'nonpayment of court ordered child support', // mislabeled, enforcements?
      'Hi glen I want to know why am I still receiving partial payments a month', // add to pmtQA-havent-received
      'I have been receiving child support, but it’s not consistent. So what can I do?', // add to pmtQA-havent-received
      'HAVE NOT RECEIVED MY CHILD SUPPORT PAYMENT FOR JUNE YET', // add to pmtQA-havent-received
      'I AM TRYING TO SEE WHY MY MONTHLY PAYMENT HAS NOT REACHED MY EPPI CARD YET', // add to pmtQA-havent-received
      'My payment is not showing ', // add to pmtQA-havent-received
      "I'm just trying to figure out why child support payments are not taken from the absent parents check", // add to pmtQA-havent-received
      "I receive payments through a Debit Card but haven' t received any in a while. How can I check on that?", // suggest > 1 month
      'I have not received child support for my children yet. Their father has told me that child support was taken out of his check twice but I have not received it thru the card. ', // *
      'My card balance is 0 and I haven’t received child support since April 5. ', // suggest > 1 month
      'I got 70 dollar from child support ', // *
      'we already receive child support, but do not accually get the money. wanted to see if there was a balance due to us?', // *
      'How do I find out if I received a payment for back child support? My ex husband called and said that money was taken from his SSI.', // *
      'My child support got raised on court last month an child’s father job sent y’all one the payments an I haven’t got it ', // *
      "my taxes were taken for child support and the other person involved hasn't received any payment yet", // suggest paid but not received
      'Trying to see why I haven’t receive my support', // add to pmtQA-havent-received
      'I haven’t received a child support payment since April 24', // suggest > 1 month
      "why would dhs put my child on er father's health insurance when I do not recieve child support", // add to pmtQA-havent-received
      'I have not received payments on my eppicard ', // add to pmtQA-havent-received
      "I am trying to see why i haven't received any updates on my case of payment. my son is about to 10 ad has had an ongoing case since he was 1 year old. ", // mislabeled, enforcements?
      'Trying to see why I’m not getting anything anymore??', // add to pmtQA-havent-received
      "I'm looking to see why I could find out why my ex husband owes me over DIGITS dollars but nothing is getting done about it.  He is a 1 1/2 years behind but they started taking from his check past two months but nothing this month?? And nothing has been post", // *
      "I haven't received child support in close to two years.", // suggest > 1 month
      'I jave a case i was suppose to get deposited today but i dont know where', // add to pmtQA-havent-received
    ],
    contexts: [
      { name: 'waiting-pmtmethods-debit-card', count: 49 },
      { name: 'waiting-yes-child-support', count: 24 },
      { name: 'waiting-not-child-support', count: 24 },
      { name: 'waiting-restart-conversation', count: 20 },
      { name: 'waiting-feedback-root', count: 9 },
      { name: 'waiting-eppi-activate', count: 9 },
      { name: 'waiting-eppi-get-card', count: 9 },
      { name: 'waiting-eppi-replace-report', count: 9 },
      { name: 'waiting-eppi-faq', count: 9 },
      { name: 'waiting-eppi-notifications', count: 9 },
      { name: 'waiting-eppi-fees', count: 9 },
      { name: 'waiting-support-employer', count: 8 },
      { name: 'waiting-support-parent-paying', count: 8 },
      { name: 'waiting-support-parent-receiving', count: 8 },
      { name: 'waiting-open-csc-location-services', count: 6 },
      { name: 'waiting-open-csc-full-services', count: 5 },
      { name: 'waiting-open-csc-employer-payments', count: 5 },
      { name: 'waiting-pmtmethods-cant-make', count: 4 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 4 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 4 },
      { name: 'waiting-pmtmethods-cash', count: 4 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 4 },
      { name: 'payment-factors', count: 3 },
      { name: 'waiting-dirdep-stop', count: 2 },
      { name: 'waiting-pmt-calc-unknown-income', count: 2 },
      { name: 'waiting-support-type', count: 2 },
      { name: 'waiting-open-csc-select-form', count: 2 },
      { name: 'waiting-pmt-calc-gross-income', count: 2 },
      { name: 'waiting-dirdep-change', count: 2 },
      { name: 'waiting-open-csc-no-service', count: 2 },
      { name: 'waiting-acknowledge-privacy-statement', count: 2 },
      { name: 'waiting-dirdep-start', count: 2 },
      { name: 'waiting-support-parent-receiving-more', count: 1 },
      { name: 'waiting-appts-guidelines', count: 1 },
      { name: 'waiting-support-phone-number', count: 1 },
      { name: 'waiting-support-no-phone-number', count: 1 },
      { name: 'ticketinfo', count: 1 },
      { name: 'waiting-dirdep-confirm-form', count: 1 },
      { name: 'waiting-appts-schedule', count: 1 },
      { name: 'waiting-pmt-calc-income-term', count: 1 },
      { name: 'waiting-dirdep-no-learn-more-eppicard', count: 1 },
      { name: 'waiting-dirdep-learn-more-eppicard', count: 1 },
      { name: 'waiting-support-general-inquiries', count: 1 },
      { name: 'waiting-dirdep-learn-more', count: 1 },
      { name: 'waiting-appts-office-locations', count: 1 },
    ],
  },
  'insufficient response': {
    occurences: 199,
    queries: [
      'Somewhat',
      'None of the above',
      'None',
      '...',
      'No ',
      'None',
      '0',
      'neither',
      'Unsure ',
      '?',
      'Na',
      'What',
      '35,000',
      'Somewhat',
      'Neither ',
      'A little ',
      "I don't know yet",
      'Neither',
      'None ',
      '??',
      'what',
      "Don't have one",
      'Not sure',
      'Not sure',
      'I’m not sure can you explain all three',
      'thats all',
      'No ',
      '?',
      'None of these',
      'I forgot it ',
      '?',
      'tes',
      'Neither ',
      'Neither ',
      '?',
      "I'm not sure ",
      'Never mind ',
      'I’m not sure ',
      'I do not know ',
      'Non of these ',
      'What',
      'I am asking ',
      'somewhat',
      'neither',
      'Not really',
      '??',
      'Not much',
      'A little ',
      'None of the above',
      'that is all',
      'None of these',
      'I dont kno',
      'No I have not ',
      'Something else',
      'none of those',
      'Not sure yet',
      "Don't have one",
      '?',
      'None ',
      'Neither',
      'neither',
      'Not really. ',
      'Neither',
      'Neither',
      'what',
      'huh',
      'not really',
      'none',
      'none',
      "don't have one",
      'Neither ',
      'NON',
      'NON AT THE MOMENT',
      'other',
      'Neither',
      'None of those ',
      'Nothing ',
      'Not available',
      'Agree',
      'Neither',
      'None',
      'I am not sure',
      "That's all.",
      'Something else ',
      'None of the above',
      '65',
      "i don't know yet",
      'I guess',
      'Idk',
      '?',
      '0',
      'None',
      'I do not know',
      'Other',
      'What',
      'N/A',
      'Neither',
      'Not familiar with what?',
      "I don't understand is that a yes or no ",
      'Kinda',
      'not really',
      'NONE',
      'non afdc',
      "don't have one",
      "No you can't obviously",
      'not much',
      'Any other way',
      'dont have one',
      'dont have one',
      "don't have one",
      "don't have one",
      "I don't have one",
      "Don't have one ",
      'Nah. ',
      '3',
      '0',
      'Neither',
      'none of above',
      '2',
      'Other',
      'This is not my question ',
      'what',
      'I already have one',
      'Somewhat',
      'Mine?',
      'neither',
      'neither',
      'Neither',
      'I don’t understand ',
      'No ',
      "That's all",
      'I dont know',
      'Neither ',
      'Other',
      ' Is.',
      'What',
      'Neither',
      'what',
      'Other ',
      'A lot',
      'Just tr',
      "I don't know ",
      'So so',
      'no ',
      'Meaning?',
      'I don’t need that ',
      'Neither ',
      'I don’t know what all that means ',
      'what is it',
      'Sort of',
      'Huh',
      '??',
      '0',
      '?',
      "I'm not sure. What is the difference ",
      'Neither',
      'Neither',
      'Neither',
      'Kinda ',
      'Huh',
      "That's all",
      'No I have a question',
      'OTHER',
      'Neither ',
      'Other ',
      '[',
      'neither',
      '0',
      'Is there another way',
      'Other',
      'I mean, kinda',
      'is',
      'Somewhat',
      'None of those.',
      'Somewhat',
      'Something else',
      'Neither ',
      'Ok I do have a question',
      'I just have a quick question.',
      'Non',
      'are you kidding',
      'neither ',
      'Neither ',
      'Not sure',
      'Not sure',
      'Not really ',
      "I'm not sure I understand the differences",
      'I don’t know what these options mean ',
      'I just have a question ',
      'really',
      'Neither ',
      'Other help',
      "I'm not sure what I need",
      'is',
      'Not really',
      'That is all ',
      'n/a',
      'Neither ',
      "No, I'm just looking for any amendments to the RFP. Would that be in this page subpages?",
    ],
    contexts: [
      { name: 'ticketinfo', count: 32 },
      { name: 'payment-factors', count: 28 },
      { name: 'waiting-pmtmethods-debit-card', count: 25 },
      { name: 'waiting-feedback-helpful', count: 23 },
      { name: 'waiting-feedback-not-helpful', count: 23 },
      { name: 'waiting-open-csc-location-services', count: 23 },
      { name: 'waiting-open-csc-employer-payments', count: 22 },
      { name: 'waiting-open-csc-full-services', count: 22 },
      { name: 'waiting-support-cancel-issue', count: 16 },
      { name: 'waiting-yes-child-support', count: 15 },
      { name: 'waiting-support-parent-receiving', count: 15 },
      { name: 'waiting-not-child-support', count: 15 },
      { name: 'waiting-support-parent-paying', count: 15 },
      { name: 'waiting-support-employer', count: 15 },
      { name: 'waiting-restart-conversation', count: 14 },
      { name: 'waiting-feedback-root', count: 14 },
      { name: 'waiting-pmt-calc-unknown-income', count: 12 },
      { name: 'waiting-support-no-email', count: 12 },
      { name: 'waiting-support-email', count: 12 },
      { name: 'waiting-pmt-calc-gross-income', count: 10 },
      { name: 'waiting-support-phone-number', count: 9 },
      { name: 'waiting-support-no-phone-number', count: 9 },
      { name: 'waiting-pmt-calc-ss-deductions', count: 5 },
      { name: 'waiting-support-type', count: 5 },
      { name: 'waiting-maps-deliver-map', count: 5 },
      { name: 'waiting-pmt-calc-unknown-tax-deductions', count: 5 },
      {
        name: 'waiting-pmt-calc-retirement-contributions-amount',
        count: 4,
      },
      { name: 'waiting-pmts-general-receive-payments', count: 4 },
      { name: 'waiting-pmt-calc-child-support-no-retirement', count: 4 },
      { name: 'waiting-pmts-general-non-custodial', count: 4 },
      { name: 'request-type', count: 3 },
      { name: 'waiting-support-case-number', count: 3 },
      { name: 'waiting-support-no-case-number', count: 3 },
      { name: 'waiting-support-retry-phone-number', count: 3 },
      { name: 'waiting-support-retry-email', count: 3 },
      { name: 'waiting-eppi-faq', count: 2 },
      { name: 'waiting-eppi-notifications', count: 2 },
      { name: 'waiting-eppi-fees', count: 2 },
      { name: 'waiting-eppi-activate', count: 2 },
      { name: 'waiting-eppi-replace-report', count: 2 },
      { name: 'waiting-eppi-get-card', count: 2 },
      { name: 'waiting-open-csc-no-service', count: 2 },
      { name: 'waiting-acknowledge-privacy-statement', count: 2 },
      { name: 'waiting-support-restart', count: 2 },
      { name: 'waiting-open-csc-select-form', count: 2 },
      { name: 'waiting-pmt-calc-retirement-contributions', count: 2 },
      { name: 'waiting-pmt-calc-unknown-ss-deductions', count: 2 },
      { name: 'waiting-support-collect-new-employer-phone', count: 2 },
      { name: 'waiting-support-no-new-employer', count: 2 },
      { name: 'waiting-support-new-employer-unknown-phone', count: 2 },
      { name: 'waiting-pmtmethods-cant-make', count: 2 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 2 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 2 },
      { name: 'waiting-pmtmethods-cash', count: 2 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 2 },
      { name: 'waiting-pmt-calc-tax-deductions', count: 2 },
      { name: 'waiting-dirdep-stop', count: 1 },
      { name: 'waiting-support-revise-issue', count: 1 },
      { name: 'waiting-support-submit-issue', count: 1 },
      { name: 'waiting-dirdep-no-learn-more-eppicard', count: 1 },
      { name: 'waiting-dirdep-learn-more-eppicard', count: 1 },
      { name: 'waiting-dirdep-learn-more', count: 1 },
      { name: 'waiting-dirdep-confirm-form', count: 1 },
      { name: 'waiting-iwo-no-assistance', count: 1 },
      { name: 'waiting-iwo-faqs', count: 1 },
      { name: 'waiting-appts-yes-contacted', count: 1 },
      { name: 'waiting-feedback-complete', count: 1 },
      { name: 'waiting-support-employment-status', count: 1 },
      { name: 'waiting-caseqa-general-support-request', count: 1 },
      { name: 'requests', count: 1 },
      { name: 'waiting-dirdep-change', count: 1 },
      { name: 'waiting-support-parent-paying-more', count: 1 },
      { name: 'waiting-dirdep-start', count: 1 },
      { name: 'waiting-pmt-calc-income-term', count: 1 },
      { name: 'waiting-pmt-calc-child-support-amount', count: 1 },
      {
        name: 'waiting-pmt-calc-final-estimation-no-other-children',
        count: 1,
      },
      { name: 'waiting-support-parent-receiving-more', count: 1 },
      { name: 'waiting-iwo-wants-assistance', count: 1 },
    ],
  },
  'case status': {
    occurences: 170,
    queries: [
      "i haven't received them & it's been 3 weeks", // add to caseQA-general
      "I'm trying to check on one of my child support cases", // add to caseQA-general
      'How can I check on that', // add to caseQA-general
      'My case ', // add to caseQA-general
      'Check case', // add to caseQA-general
      'I want to check on my case ', // add to caseQA-general
      'Action on a case', // add to caseQA-general
      'Getting information on my case', // add to caseQA-general
      'Checking a child support case', // add to caseQA-general
      'how can I find out if i owe child support', // add to caseQA-general
      'Checking status online', // add to caseQA-general
      'How to I check the status of my case', // add to caseQA-general
      'How can I check my child support case', // add to caseQA-general
      'how can i check the status of my case', // add to caseQA-general
      'Check a case', // add to caseQA-general
      'I want to check my case ', // add to caseQA-general
      'I have questions about my case', // add to caseQA-general
      'can you check the progress of my case', // add to caseQA-general
      'Check case status', // add to caseQA-general
      'My case', // add to caseQA-general
      'Yes 2 weeks ago', // *
      'It’s been a year since I opened my case', // *
      'It’s been 3 months ', // *
      'I want to find out what’s going on with my case', // add to caseQA-general
      'Check status ', // add to caseQA-general
      'Checking case status ', // add to caseQA-general
      'check my case', // add to caseQA-general
      'Check status ', // add to caseQA-general
      'Follow up', // add to caseQA-general
      ' I am sanctioned ', // *
      'Hi i got a letter sayong i was approved and now ota got xxx next to me being sanctioned', // *
      'Trying to find out if i have a open case ', // add to caseQA-general
      'i have submitted all of my information to start my case and i have not received any information about my case', // *
      'My dad passed and hes not on my birth certificate and I was trying to get info showing he was on child support ', // *
      'Checking my case', // add to caseQA-general
      "I'm PERSON_NAME I was wanting to check on a case I have with PERSON_NAME?", // add to caseQA-general
      'My case was accidentally closed because I did know I had an appointment. I need my case reopened.', // *
      'Check the status of my child care ', // mislabled, add to child care
      'Check status of case', // add to caseQA-general
      'Case', // add to caseQA-general
      'Looking to check on my case to see if they have found out anything', // add to caseQA-general
      'About 3 weeks ago I sent a letter in on one of cases requesting a review and i still havent heard anything yet', // add to caseQA-general
      "HI my name is PERSON_NAME. I'm trying to get a update on my case of Hattiesburg ms", // add to caseQA-general
      'I would like to find out more about 2 cases open with the same child on the case', // add to caseQA-general
      'How often is my case updated', // add to caseQA-general
      'my case is two weeks old and i havent heard anything about case', // add to caseQA-general
      'I wanted to check the status of my account ', // add to caseQA-general
      ' Check on status of case', // add to caseQA-general
      'look up my case', // add to caseQA-general
      'Checking on my case ', // add to caseQA-general
      'Check status of contempt packet ', // add to caseQA-general
      'Wanted to check a order of support', // add to caseQA-general
      'Know much info on my case', // add to caseQA-general
      'Can you tell me when my next dispersement date ?', // add to caseQA-general
      'I want to know how a child support case gets established. I’ve made payments directly to the cp for 10 years now a case is open. ', // add to caseQA-general
      'i have a question about my child support case ', // add to caseQA-general
      "I want to check my case to see what's the problem", // add to caseQA-general
      'How can i check arrearage ', // add to caseQA-general
      'Check status', // add to caseQA-general
      'The status of my case', // add to caseQA-general
      "I'm trying to get updates on my child support case", // add to caseQA-general
      'Hello, I would like to ask a question about my own case.', // add to caseQA-general
      'I applied for an increase and checking the status', // add to caseQA-general
      'It’s been about 3 weeks since I put in an action', // add to caseQA-general
      'Follow up on my case', // add to caseQA-general
      'Can you tell me anything about my case I have not heard back on the decision that was made', // add to caseQA-general
      'Would like to know the status of my case', // add to caseQA-general
      'Yes, I would like to get the status of my case', // add to caseQA-general
      'I need to check on my case', // add to caseQA-general
      'I received a refund check and I was checking the validity', // *
      'Status of case', // add to caseQA-general
      'I’m just trying to follow up in regards to my case', // add to caseQA-general
      'I want to know has anything changed with my case', // add to caseQA-general
      'I just asked', // *
      'How can I check the status of a review for child support?', // add to caseQA-general
      'I want to talk about my case', // add to caseQA-general
      'I am check on child supprt', // add to caseQA-general
      'Can I check the status of my case', // add to caseQA-general
      'I’m trying to get the status of my child support case', // add to caseQA-general
      "I done dealt with 4 supervisors for the month of July n still haven't received my payments yet ...my email still the same...wat is really goin on ", // *
      "How do I find out if I'm getting  a refund", // mislabeled, categorized as refund
      "How do.i find out if I'm getting a refund", // mislabeled, categorized as refund
      'I have 2 cases with the same issue.', // add to caseQA-general
      'Look up a case', // add to caseQA-general
      'Looking up a case against me saying I have a child in Mississippi', // add to caseQA-general
      'I’m waiting for a review ', // add to caseQA-general
      'Yes. I would also like to check on another case.', // add to caseQA-general
      'Status', // add to caseQA-general
      'check on my case', // add to caseQA-general
      'I am trying to see if i have a pending case or court date coming up ', // add to caseQA-general
      'Check case online', // add to caseQA-general
      'I want to check the status of my case', // add to caseQA-general
      'How can I check the status of my case?', // add to caseQA-general
      'Filed 4 months ago still waiting for an answer', // add to caseQA-general
      'I need to find out if my application has been received', // add to caseQA-general
      'I have a question about my case.', // add to caseQA-general
      "I'm checking on child support paymey", // add to caseQA-general
      'Can you check on my case ', // add to caseQA-general
      'I am trying to see where my case stands ', // add to caseQA-general
      'Can you tell me if I have a case', // add to caseQA-general
      'Check the status of my case', // add to caseQA-general
      'I would like to check on the status of my case.', // add to caseQA-general
      'Trying to see is my case being worked up.', // add to caseQA-general
      'I’m just wondering about my case ', // add to caseQA-general
      'When will I receive an court date for my case? ', // add to caseQA-general
      'Here to check on one of my cases', // add to caseQA-general
      'I’m done ', // *
      'Status on my case', // add to caseQA-general
      'yes i sent in an application for processing last month and have no received an update on it yet\n\n', // add to caseQA-general
      'I am trying to find out the status of my child support case.i am the custodial parent ', // add to caseQA-general
      'case numbewr', // add to caseQA-general
      'Im trying to check the status of my case.', // add to caseQA-general
      'Would like to know the status of my cases', // add to caseQA-general
      'Close a case', // mislabeled, added to termination
      'I would like to check the status of my review ', // add to caseQA-general
      'status on my case', // add to caseQA-general
      'My child support normally come today but will it be delayed because of 4th of July ',
      'i received a refund check but i cannot remember if i cash it. can you tell me if it has been drawn down?', // add to caseQA-general
      'Information on my case it seems to be at a standstill', // add to caseQA-general
      'Status', // add to caseQA-general
      'Can I check a case', // add to caseQA-general
      'I have questions about my child support case', // add to caseQA-general
      'My case was being reviewed-- my daughter got married and I am still having child support taken out.', // add to caseQA-general
      "Just wanting to know if there's a case with my name on it", // add to caseQA-general
      'i was checking to see if i have unclaimed child support', // add to caseQA-general
      "I'm wanting to check on my case", // add to caseQA-general
      'close a case', // add to caseQA-general
      'I want to check on my case', // add to caseQA-general
      'I have an open case but no response', // add to caseQA-general
      'Status of my case', // add to caseQA-general
      'Status of my case?', // add to caseQA-general
      'I have 2 cases', // add to caseQA-general
      'Case status ', // add to caseQA-general
      'Current case status', // add to caseQA-general
      'Check the status of my case', // add to caseQA-general
      'Status', // add to caseQA-general
      'Judge changed my child support order 6 weeks ago when will it change?', // *
      'Question about my case ', // add to caseQA-general
      'im checking on my case', // add to caseQA-general
      'Checking on child support ', // add to caseQA-general
      'Check the status of my case ', // add to caseQA-general
      'On my case what is the going on as now ', // add to caseQA-general
      'i have had a case open since last year. ', // add to caseQA-general
      'I was trying to check on my case', // add to caseQA-general
      'Just checking on updates ', // add to caseQA-general
      'Case', // add to caseQA-general
      "I'm looking into a case I havent heard back from in 9 months", // add to caseQA-general
      'Case', // add to caseQA-general
      'I was trying to see when I receive my child support and will I get a card', // add to caseQA-general
      'Results of court case', // add to caseQA-general
      'has a case been open ', // add to caseQA-general
      'Trying to check status of my case', // add to caseQA-general
      'How can I check ', // add to caseQA-general
      'Is there a case against PERSON_NAME cole?', // add to caseQA-general
      "I'm trying to find out what is going on with my benefits ", // add to caseQA-general
      "I want to check and see what is going on with my case. There was a lien put on my children's father's workers comp and I was checking to see when a payment would be made.", // *
      'Case!?', // add to caseQA-general
      'I have a case', // add to caseQA-general
      'good afternoon', // add welcome intent
      'Questions about a case that has been sitting for 3 yrs now', // add to caseQA-general
      'How can i check notices online', // add to caseQA-general
      'Checking to see if I was sent a certified letter ', // add to caseQA-general
      'Check the status of my case ', // add to caseQA-general
      'I have requested a review on my case and checking the status ', // add to caseQA-general
      'is my case still active', // add to caseQA-general
      'Yes. Trying to find out about my case. It’s been over 6 months and I still haven’t gotten a court date ', // add to caseQA-general
      'I have a child support case and it has been years since anything has been done on it.', // add to caseQA-general
      'I am trying to get the results of my court date on the 5/30/19', // add to caseQA-general
      'I have my daughter on child support and I just had a baby so if I put her on how does that works like does more comes out of his check.', // *
      'notices', // mislabeled, added to documentation
    ],
    contexts: [
      { name: 'waiting-yes-child-support', count: 32 },
      { name: 'waiting-not-child-support', count: 32 },
      { name: 'waiting-restart-conversation', count: 17 },
      { name: 'waiting-feedback-root', count: 15 },
      { name: 'waiting-open-csc-location-services', count: 9 },
      { name: 'waiting-open-csc-employer-payments', count: 9 },
      { name: 'waiting-open-csc-full-services', count: 9 },
      { name: 'waiting-support-type', count: 5 },
      { name: 'payment-factors', count: 4 },
      { name: 'waiting-pmtmethods-debit-card', count: 3 },
      { name: 'waiting-dirdep-confirm-form', count: 2 },
      { name: 'waiting-dirdep-learn-more', count: 2 },
      { name: 'waiting-support-cancel-issue', count: 2 },
      { name: 'waiting-support-revise-issue', count: 2 },
      { name: 'waiting-support-submit-issue', count: 2 },
      { name: 'waiting-support-restart', count: 2 },
      { name: 'waiting-support-general-inquiries', count: 2 },
      { name: 'waiting-pmt-calc-gross-income', count: 2 },
      { name: 'ticketinfo', count: 2 },
      { name: 'waiting-pmt-calc-unknown-income', count: 2 },
      { name: 'waiting-support-parent-receiving-more', count: 2 },
      { name: 'waiting-acknowledge-privacy-statement', count: 2 },
      { name: 'request-type', count: 1 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 1 },
      { name: 'waiting-feedback-complete', count: 1 },
      { name: 'waiting-iwo-no-assistance', count: 1 },
      { name: 'waiting-iwo-faqs', count: 1 },
      { name: 'requests', count: 1 },
      { name: 'waiting-pmts-general-non-custodial', count: 1 },
      { name: 'waiting-support-employment-status', count: 1 },
      { name: 'waiting-support-parent-paying-more', count: 1 },
      { name: 'waiting-pmts-general-receive-payments', count: 1 },
      { name: 'waiting-appts-office-locations', count: 1 },
      { name: 'waiting-appts-guidelines', count: 1 },
      { name: 'waiting-appts-schedule', count: 1 },
      { name: 'waiting-pmtmethods-cant-make', count: 1 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 1 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 1 },
      { name: 'waiting-pmtmethods-cash', count: 1 },
      { name: 'waiting-iwo-wants-assistance', count: 1 },
    ],
  },
  card: {
    occurences: 155,
    queries: [
      'How do I get a child support card', // add to eppi-get-card
      'I haven’t received a card ', // add to eppi-get-card
      'How much will I get and why did he get a card sent and will both kids be on ', // *
      'No I have a card', // *
      'Number on back of green PERSON_NAME card', // *
      'Stolen card', // add to eppi-replace-report
      'Hi, how can I get another card I have misplaced the one I had', // add to eppi-replace-report
      'I never received a child support card', // add to eppi-get-card
      'My child support card is expiring and I need a new one ', // add to eppi-replace-report
      'WHEN WILL I GET MY CARD', // add to eppi-get-card
      'I have lost my child support debit card. How do I get it replaced?', // add to eppi-replace-report
      'How do I apply to get my debit card ', // add to eppi-get-card
      'i havent received my card in the mail yet', // add to eppi-replace-report
      'I need to see what address my card was sent to', // *
      'CAN A DEBIT CARD BE DEACTIVATED AND THEN RE-ACTIVATED IF HAVING PROBLEM WITH THE CARD?', // *
      'When will I receive my child support card?', // *
      'i am trying to find out when my child supprtwill be on my card. when icall the no.on the back of my card i get charged fifty cents with no option to speak to anyone.', // *
      'How long does it take to get a card in the mIl', // add to eppi-root
      'Using bank card ', // add to eppi-root
      'Lost Mississippi epicard', // add to eppi-replace-report
      'My card is old can I get another one', // add to eppi-replace-report
      "Yes it's been years zinc my last it came in February I was just wondering is my card so good cuz I haven't heard that is all this money we're owed to try to help take care of her and I thought getting it just my car now or do I need a new card", // *
      'I cannot remember the address connected to my card. i can verify previous addresses but i cannot remember what i changed it to and can’t use it for what i need it for without it. ', // *
      'Need a replacement card', // add to eppi-replace-report
      'When will I receive my eppicard ', // add to eppi-root
      'Child support card has expired, and i need to get a new one', // add to eppi-replace-report
      'How do I get a card?', // add to eppi-get-card
      'I lost my child support card', // add to eppi-replace-report
      'Learn about Eppicard', // add to eppi-root
      'How could I get eppicard', // add to eppi-get-card
      'I had lost my card and called for a replacement weeks ago and I have not received the new card.', // add to eppi-replace-report
      'When will i receive my child support card?', // add to eppi-root
      'Yes whats the debit card ', // add to eppi-root
      'need a new card', // add to eppi-replace-report
      'I need a new child support debit card', // add to eppi-replace-report
      'frying hmaburgers', // *
      'I haven’t received a child support card ', // add to eppi-root
      'How do I get my PIN number ', // add to eppi-activate-card
      'How could he get his own child support card',
      'I just need a new card sent ', // add to eppi-replace-report
      'Phone number to mdhs child support number to the card', // add to eppi-root
      'Why did i get a card when my child support is closed?', // add to eppi-root
      'Epicard', // add to eppi-root
      'Order a new card', // add to eppi-replace-report
      'How do I get a PIN number?', // add to eppi-activate-card
      'I need a new child support debt card my old one got stolen ', // add to eppi-replace-report
      'New card',
      'I haven’t received my child support card', // add to eppi-root
      'No just need help,applying for bridge card', // add to eppi-root
      'new card', // add to eppi-replace-report
      'Passport ', // *
      'I have received my new card but  the website will not let me log on and I changed password and all and I have three kids and a while and currently unemployed and cannot get anyone on the phone to help thanks', // *
      'How do i get my four digit PIN', // add to eppi-activate-card
      "I lost my card and don't know the card number. How can I get a new card", // add to eppi-replace-report
      'I have a Mississippi card that was issued I need to know about pending deposit ', // add to eppi-root
      'Replacement card', // add to eppi-replace-report
      'Card', // add to eppi-root
      'How long does it take a child support card to come in after you receive judgement', // add to eppi-root
      'i am having trouble getting my card', // add to eppi-root
      'I have got 3 deposits on August 1st & it’s not on my card ', // add to eppi-payment-history
      'I have not received my replacement card', // add to eppi-replace-report
      'Just trying to check my card ', // add to eppi-root
      'Yes ..how I get started paying with a debit card?', // mislabled, make payments
      'If I have no money on Ms child support card can I still get gas', // *
      'It’s saying my card number is invalid ', // add to eppi-root
      'Replacement card ', // add to eppi-replace-report
      "I need help. My card isn't working...and I cant get in touch with anyone. ", // add to eppi-root
      'Have not child support debit card', // add to eppi-root
      'My child support card expires at the end of this month and I have not received a new one', // add to eppi-replace-report
      'how do i get a MS debit card for child support payments', // add to eppi-get-card
      'Hi, my card is reading card error at every store I go to, but it has funds available. ',
      'To order a replacement card.', // add to eppi-replace-report
      'my grandma daughter stay with me and her mother get the child support card and i don’t feel like thats right',
      'Haven’t receive child support card for my second case ', // add to eppi-root
      'i get i ton the eppi card ', // add to eppi-root
      'Getting a new child support card', // add to eppi-replace-report
      'I haven’t got a card yet for child support and it have been a month', // add to eppi-root
      'Hey my name is PERSON_NAME I was trying to see how much was posted on my card from this month', // add to eppi-payment-history
      'I need to get a new card mines about expire this month', // add to eppi-replace-report
      'I need to get a new card mine is expiring ', // add to eppi-replace-report
      'Debit card ', // add to eppi-root
      'Call center is asking for a PIN number ',
      'I need new card', // add to eppi-replace-report
      'I have not received my child support card and it’s been pass 10 business days', // add to eppi-root
      'Trying to see when I will receive a card with my child support ', // add to eppi-root
      'My card is suspended and I would like to know why, it has never done this before', // add to eppi-root
      'need a new card ', // add to eppi-replace-report
      'Maybe send me a new card that works ', // add to eppi-replace-report
      'Hi I’m trying to report a card lost and order another one how can I do that', // add to eppi-replace-report
      'How do I find out my pin #', // add to eppi-activate-card
      'how to order a child supprt card', // add to eppi-get-card
      'Why my card says fraud suspended ', // add to eppi-replace-report
      'How can I talk to about a child support case my father been paying child support I have never received a card ', // add to eppi-root
      'In August, I will be going to college and I’m wondering if I can get my own child support card since I’m not in my mother’s house hold ', // *
      'how do I get a new child support debit card sent to another address?', // add to eppi-replace-report
      'I would like to receive my separate child support cases on separate debit cards rather than all cases on one card. ', // add to eppi-root
      'it ain’t common', // *
      'Well my question is I suppose to receive a payment on the 7/5 but it has not crossed over to card yet', // mislabeled, not received payment
      'When will I receive the eppi card?', // add to eppi-root
      'I need a number to talk to someone about a freeze on my card', // add to eppi-root
      'New card', // add to eppi-get-card
      'I need to update my address and get a new card shipped to me because my current card has expired', // add to eppi-replace-report
      'How do I request a debit card', // add to eppi-get-card
      'I have not received my debit mastercard', // add to eppi-root
      'Need to pay right at DIGITS to get my license back. I’m using a credit card how do I go about it? Thank you ', // *
      "I am trying to see when my child support will be put on my card. I usually get it on wednesdays but it wasn't put on there last wednesday", // add to eppi-payment-history
      'I lost my debit card', // add to eppi-replace-report
      'how can i set up a pin # to get the inforation i need', // add to eppi-activate-card
      'I need a new replacement caard', // add to eppi-replace-report
      'I need to report my brother’s child support card stolen.', // add to eppi-replace-report
      'I was looking for the green support card', // add to eppi-root
      'Need a new card', // add to eppi-replace-report
      'I have not received my child support on my Smione Card. Is there something wrong?', // add to eppi-root?
      'New card', // add to eppi-replace-report
      'How long does it take to receive a debit card', // add to eppi-root
      'I need to reorder a new card ', // add to eppi-replace-report
      'Do you have a 4 digit pin number ', // add to eppi-activate-card
      "My case numbers do t match and I can't make payments a Kroger ", // mislabeled, can't make payments
      'what ? how can i cancel my lost card and order a new', // add to eppi-replace-report
      'i need to cancel my card and order another one', // add to eppi-replace-report
      'Yes I have questions about how my card is being loaded ', // add to eppi-root
      'Im trying to found out if i have a payment pending on my card.', // add to eppi-payment-history
      'I have lost my debit card', // add to eppi-replace-report
      'When will they issue me a debit card to get my funds', // add to eppi-get-card
      'I’m trying to see why my child support isn’t on my card yet , I’m missing two payments ', // add to eppi-payment-history
      'My EPPICard for child support was stolen so I cancelled it and got a new one. When I had my old card I ordered something and recently received a refund but it went back to the cancelled card. How do I go about getting my money ? ', // *
      'I was wondering how can I find out where my card has all been swiped at?', // add to eppi-root
      'How long does it take to receive a child support card', // add to eppi-root
      'Im 19 now i was trying to see how to get my own child support card from my mother', // add to eppi-get-card
      'Where do I find my pin number?', // add to eppi-activate-card
      'My card I’ve expired and I’m still having money paid but can’t get it', // add to eppi-replace-report
      'I’m trying to order a new card mine expired ', // add to eppi-replace-report
      'Hey I’m makayla PERSON_NAME and I lost my child support card and I want to know how can I get another ', // add to eppi-replace-report
      'New', // *
      'Just a quick question. How long does it take to receive a new card?', // add to eppi-root
      'I need to get him set up I already have a eppi card', // add to eppi-root
      'Haven’t received a card ', // add to eppi-root
      'Replacement card', // add to eppi-replace-report
      'Child support card replacement ', // add to eppi-replace-report
      'What time do payments be post to card', // *
      'How long funds on card', // *
      'Can child support be paid be debit card/ credit card?', // add to eppi-root
      'I am currently receiving payments on a card however haven’t received any back support but the non custodial parent has paid it', // mislabeled, not received payment
      'I have not received a new one', // add to eppi-replace-report
      'When do you receive the 1st card?', // add to eppi-root
      'my card is expiring I do not have a new one', // add to eppi-replace-report
      'I need to speak to someone about my eppicard.  It expires this month and I have not received a new one', // add to eppi-replace-report
      'How can you know if you have child support if you have no card ', // *
      'Cell number to card ', // add to eppi-root
      'I have a case but havent received a new card. Can u tell me why?', // add to eppi-get-card
      'New card', // add to eppi-get-card
      'I have not received my card yet. I was trying to see was it on its way? ',
      'Why is my money posted but not posted on my card', // add to eppi-payment-history
      'yes. i need a card', // add to eppi-get-card
      'How can i sighn up to recieve a card to recieve payment', // add to eppi-get-card
    ],
    contexts: [
      { name: 'waiting-not-child-support', count: 35 },
      { name: 'waiting-yes-child-support', count: 35 },
      { name: 'waiting-feedback-root', count: 22 },
      { name: 'waiting-restart-conversation', count: 22 },
      { name: 'waiting-pmtmethods-debit-card', count: 10 },
      { name: 'waiting-acknowledge-privacy-statement', count: 8 },
      { name: 'waiting-eppi-notifications', count: 5 },
      { name: 'waiting-eppi-activate', count: 5 },
      { name: 'waiting-eppi-get-card', count: 5 },
      { name: 'waiting-eppi-replace-report', count: 5 },
      { name: 'waiting-support-employer', count: 5 },
      { name: 'waiting-support-parent-paying', count: 5 },
      { name: 'waiting-support-parent-receiving', count: 5 },
      { name: 'waiting-eppi-faq', count: 5 },
      { name: 'waiting-eppi-fees', count: 5 },
      { name: 'waiting-support-cancel-issue', count: 4 },
      { name: 'waiting-support-type', count: 3 },
      { name: 'waiting-support-general-inquiries', count: 2 },
      { name: 'request-type', count: 2 },
      { name: 'waiting-pmts-general-receive-payments', count: 2 },
      { name: 'waiting-pmts-general-non-custodial', count: 2 },
      { name: 'payment-factors', count: 2 },
      { name: 'ticketinfo', count: 2 },
      { name: 'waiting-support-parent-receiving-more', count: 2 },
      { name: 'waiting-pmt-calc-unknown-income', count: 1 },
      { name: 'waiting-contact-provide-phone-number', count: 1 },
      { name: 'waiting-open-csc-employer-payments', count: 1 },
      { name: 'waiting-open-csc-full-services', count: 1 },
      { name: 'waiting-appts-office-locations', count: 1 },
      { name: 'waiting-appts-guidelines', count: 1 },
      { name: 'waiting-appts-schedule', count: 1 },
      { name: 'waiting-support-revise-issue', count: 1 },
      { name: 'waiting-support-submit-issue', count: 1 },
      { name: 'requests', count: 1 },
      { name: 'waiting-contact-support-handoff', count: 1 },
      { name: 'waiting-pmt-calc-num-children', count: 1 },
      { name: 'waiting-dirdep-learn-more', count: 1 },
      { name: 'waiting-dirdep-confirm-form', count: 1 },
      { name: 'waiting-support-phone-number', count: 1 },
      { name: 'waiting-support-no-phone-number', count: 1 },
      { name: 'waiting-pmtmethods-cant-make', count: 1 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 1 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 1 },
      { name: 'waiting-pmtmethods-cash', count: 1 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 1 },
      { name: 'waiting-feedback-helpful', count: 1 },
      { name: 'waiting-feedback-not-helpful', count: 1 },
      { name: 'waiting-pmtqa-ncp-payment-status-submit-request', count: 1 },
      { name: 'waiting-pmt-calc-gross-income', count: 1 },
      { name: 'waiting-open-csc-location-services', count: 1 },
    ],
  },
  documentation: {
    occurences: 155,
    queries: [
      'Print notices ', // Suggest general documentation intent
      'I am trying to get a copy of my award letter ', // Suggest general documentation intent
      'Award letter', // Suggest general documentation intent
      'I need proof of income', // Suggest general documentation intent
      'The letter I got in the mail saying something about a petition ', // *
      'I need a copy of my files', // Suggest general documentation intent
      'Child support forms', // Suggest general documentation intent
      'I recieved monthly payments on my card and I am trying to get a copy of the deposits made for proof of income for my landlord ', // Add to payment history
      'i need a copy of my child support with he kids name on it.', // Suggest general documentation intent
      'U sent a repayment form and was making sure it arrived ', // add to caseQA-general
      'Documentation', // Suggest general documentation intent
      'Need a print out ', // Suggest general documentation intent
      '6 month print out of payments', // Add to payment history
      'Bill invoice', // Add to payment history
      'I am trying to print out a income withholding transmittal form. Where can I find it.', // Add to IWO root
      'Where is the app to fill out and send in about child support ', // add to open-csc-root
      'No review needed just want a print out', // Suggest general documentation intent
      'I need a child support waiver form', // add to open-csc-root
      'I already have a active case. I just need some type of documentation that states how much I receive and how often.', // Suggest general documentation intent
      'Disbursement  unit letters', // Suggest general documentation intent
      'Can I upload documents', // mislabeled, added to online action
      'prose forms]', // Suggest general documentation intent
      'invoice', // Suggest general documentation intent
      'invoice', // Suggest general documentation intent
      'how do you get invoices for remittance?', // Suggest general documentation intent
      'print', // Suggest general documentation intent
      'award letter', // Suggest general documentation intent
      'I need recertification but when I go online I don’t see no recertifications applications ', // Suggest general documentation intent
      'online statement', // Suggest general documentation intent
      'no im already receiving payments im trying to print of some forms from child support', // add to open-csc-root
      'How to retrieve my award letter', // Suggest general documentation intent
      'PRO SE LITIGATION FORM', // Suggest general documentation intent
      'POR SE LITIGATION FORM', // Suggest general documentation intent
      'I am trying to find a copy of the Interagency referral form', // Suggest general documentation intent
      'I trying to get a copy of my child support orders', // Suggest general documentation intent
      'I have the form. What do I do next?', // *
      'I need a copy of the court documents concerning my case', // Suggest general documentation intent
      'How to find old records ', // Suggest general documentation intent
      'I NEED COPIAH COUNTY DVISION OF CHILD SUPPORT EMPLOYEE INCOME WITHOLDIN TRANSMITTAL FORMS', // Suggest general documentation intent
      'Can I submit my child support documentation online ', // Suggest general documentation intent
      'Send me the paperwork to my email I can fill out online and submitt', // mislabeled, added to online action
      'how to get a legal document or court order for leasing', // Suggest general documentation intent
      'I need to get a new blank Income Withholding Transmittal Form.  ', // add to open-csc-root
      'sorry I need to know where to send form i filled out on an employee ', // add to iwo-where-to-submit
      'thanks...where can I get a copy of the certified registration for child support order?', // Suggest general documentation intent
      'Just need a copy of how much my payment is a month ', // Suggest general documentation intent
      'I want to know if you will except a verification letter or a picture of the receipt of a verification letter in PERSON_NAME of a copy of the marriage license', // *
      'My paperwork is being held up because y’all are waiting on my marriage license but to order my copy of my marriage license I have to mail out for it and acting take 20 to 25 days to come in I can however order online a verification letter ', // Suggest general documentation intent
      'I need to get a print out of the last 12 months of payments on my cases', // add to payment history
      'print out', // Suggest general documentation intent
      'I’m trying to get a print out for one of my residents saying how much she get for child support from the last 4 months', // add to payment history
      'I need 12 month receipt of payments sent to an email.', // add to payment history
      'Hi..Yes I was hoping I can get a print out of the last 2 months of my child support ', // add to payment history
      'How would the person paying child support get a copy of their payment agreement', // add to documentation
      'I overpaid with an automatic deduction at work and have called numerous times the past 4 months and every time I am told they will send the form requesting reimbursement and I never get the form. Where can i get this form.', // *
      'My daughter turned 18 in March of this year. Our divorce decree states my child support stops at that time unless she is in school. How can I get proof of enrollment /attendance in school to see if I still need to be paying? ', // *
      'I already receive. I just need something showing that I receive payments ', // Mislabeled, added to verification
      'i need a form to change my child support', // Add to support-root
      'How to I get a copy of my child support order? ', // Suggest general documentation intent
      "I need  an establishment of part it's form", // Suggest general documentation intent
      'If I have a divorce decree that states child support is owed and it hasn’t been paid, what form do I fill out ', // Suggest general documentation intent
      'Good morning is there an online form I can complete to file for child support?', // add to open-csc-root
      'i need an updated income withholding transmittal form', // Add to open-csc-root
      'I am just looking for a blank Verification of Services form. ', // Mislabeled, added to verification
      'How can I get documentation of benefits for the school', // Mislabeled, added to verification
      'please just help me locate the forms that I need to fill out', // Add to open-csc-root
      'I need a printout of the child support I received during the month of June DIGITS', // add to payment history
      'What proofs or forms do I need', // Suggest general documentation intent
      "In my divorce, my spouse had it written that I pay child support for a period of 5 years from the date of filing. I signed it. This would have me paying two years of child support past the age of majority. Can I legally stop paying on the child's 21st", // *
      'need civil case filing form cover sheet', // *
      'is there a form to be filled out', // Suggest general documentation intent
      'I’m here to figure out how do I get a copy of my child support court order from both fathers of my children ', // Suggest general documentation intent
      'I can get  a proof of child support from that place u sent me rght', // *
      'Yes need to know what I need to bring in to cooperate with child support', // add to appts-root
      'I have a question about income holding for child support form', // Add to open-csc-root
      'Is there a form the employee signs to authorize deduction from check?', // Add to open-csc-root
      'i just want the withholding form for employees', // Add to open-csc-root
      'looking for the court order', // Suggest general documentation intent
      'Where can I find the child support forms ', // Suggest general documentation intent
      'Just need to know how to get the document to release the income withholding order', // Add to open-csc-root
      'I wanted to know if there is a form we could use to do the agreement and have filed through the court? Also how would that work if we wanted to do agreement among ourselves but have it filed through the court?', // *
      'forms for child support', // Add to open-csc-root
      'I am looking for the forms to print so I can send payments for my employees.', // Add to open-csc-root
      'I am trying to get a printout of my child support payments', // add to payment history
      'Informacion sobre El Caso de mantencion dei hijo ', // *
      'Forms', // Suggest general documentation intent
      'Need printout emailed to me showing what I’ve received for the past 6 months ', // add to payment history
      'How to get a print out online', // add to payment history
      'Drivers license reinstatement  clearance form', // add to payment history
      'I was trying to see if I have to go get print out from the last year or could it be mailed to me ', // add to payment history
      'can i get copies of payments', // add to payment history
      'After i print it off then whats the next step ', // *
      'I am in need pf a copy of all child support payments I have received for the past year. Who would I talk to to obtain this info?', // add to payment history
      'Yes, how can I login and print off my child support amount ?', // add to payment history
      'Checking the site to see if I can get proof of child support.', // mislabeled, added to verification
      'Is there a form that I can file to modify child support? One that I can file in court myself? ', // add to support root
      'How can I get paper copies of the monthly payments?', // add to payment history
      'Forms', // Suggest general documentation intent
      'i was wondering how can i get  copy of my child support documents', // Suggest general documentation intent
      "No I have a court date at 9AM in the morning.  I need to print my child support payments out online.  Are you saying that isn't possible?", // Suggest general documentation intent
      'Can someone go to the nearest location to get a a copy of their child support verfication?', // *
      'Is there a app I can download to print it ', // Add to open-csc-root
      "How do I get a copy of my child support case saying that j don't receive anything yet", // Suggest general documentation intent
      'How can i get a copy of child support papers', // Suggest general documentation intent
      'how can I get a copy of my child support agreement', // Suggest general documentation intent
      'Im trying to get a copy of my childsupport payments', // add to payment history
      'i need form to fill out to start process', // add to open-csc-root
      'proof of enrollment in school', // *
      'Can i get a copy of the IWO?', // Suggest general documentation intent
      'I am trying to find out about filling to get full amount from my daughters father and the process for that', // add to open-csc-root
      'I received a letter for Notification of coverage via qualified medical child support order. And I’m trying to figure out how to obtain the insurance cards since he’s not willing to just hand them over. ', // *
      'How can I get a print out of my account?', // Suggest general documentation intent
      'how do I get a copy of my child support order', // Suggest general documentation intent
      'Proof of court order ', // Suggest general documentation intent
      'THIS IS PERSON_NAME FARMS IN BELZONI, I NEED TO BEGIN SUBMITTING PAYMENTS FOR AN EMPLOYEE.  WHERE DO I FIND THE PRINTABLE FORM TO MAIL IN WITH THE PAYMENT?', // add to open-csc-root
      'What do I do once I fill out the form? ', // Suggest general documentation intent
      'We need a w9 form', // Suggest general documentation intent
      ' I need a print our of my most recent payments how can i view i or get it?', // Suggest general documentation intent
      'I need a statement showing that I don’t any support payments ', // Suggest general documentation intent
      'Hey how r u doing my name is PERSON_NAME Hale and I would like to know if I can get a letter saying that I am done with my child support payments', // *
      'Just need a copy of the documents', // Suggest general documentation intent
      'I need a print out of my case so i can give it to the funeral home, I had a son to died', // *
      'I need statements for the month of May and June ', // add to payment history
      'terminstion of fsthers rights nrrd s copy', // *
      'I need a copy of my child support agreement from about 14 years ago', // Suggest general documentation intent
      'I need a printout of child support payments from the last year', // add to payment history
      'Legal guardianship forms ', // Suggest general documentation intent
      'I need a statement saying how much I receive a month ', // Suggest general documentation intent
      'Online childsuport claim log in', // *
      'Need proof of my child support back three months', // add to payment history
      "I'm looking for the visitation  to file with the the court", // *
      'contempt of court form', // Suggest general documentation intent
      'I need the contempt of court form for non-payment of child support order', // Suggest general documentation intent
      'Trying to get a month to month print out of owed child support ', // Suggest general documentation intent
      'Find old file', // Suggest general documentation intent
      'See old file', // Suggest general documentation intent
      'Where can I get a copy of my court ordered child support documents?', // Suggest general documentation intent
      'I need a I-9 form', // Suggest general documentation intent
      'So I was coming on this website to see if I could print the same forms off', // Suggest general documentation intent
      "I need the child support forms that my caseworker mailed to me and I didn't receive", // Suggest general documentation intent
      'how can i get a copy of my child support orders', // Suggest general documentation intent
      'forms', // Suggest general documentation intent
      'Can you provide blank copies of forms? ', // Suggest general documentation intent
      'Do I have to bring the original copy of my son’s birth certificate. Or can it just be a copy? ', // *
      'Trying to see how can I get a print out of my child support payments ', // add to payment history
      'I neeed a copy of the most reason', // *
      'Is there a printable 508 form? ', // Suggest general documentation intent
      'yes I need to know how to get a new form with our employees on it  and the amounts to send in each pay period', // add to iwo-root
      'Trying to get a copy of 1year payments of child support', // add to payment history
      'I am trying to help a client of mine get a copy of a child support order that he is paying arrears on?', // Suggest general documentation intent
      'i want to know how can I get documents without going to a office', // Suggest general documentation intent
      'print it', // Suggest general documentation intent
      'Hey is there anyway i can access family cvontribution forms online ', // Suggest general documentation intent
      'Paper work ', // Suggest general documentation intent
      'Waiver form ', // Suggest general documentation intent
    ],
    contexts: [
      { name: 'waiting-not-child-support', count: 34 },
      { name: 'waiting-yes-child-support', count: 34 },
      { name: 'waiting-restart-conversation', count: 21 },
      { name: 'waiting-feedback-root', count: 17 },
      { name: 'waiting-pmtmethods-debit-card', count: 7 },
      { name: 'waiting-support-type', count: 6 },
      { name: 'waiting-acknowledge-privacy-statement', count: 5 },
      { name: 'waiting-iwo-faqs', count: 5 },
      { name: 'waiting-iwo-wants-assistance', count: 5 },
      { name: 'waiting-iwo-no-assistance', count: 5 },
      { name: 'waiting-open-csc-location-services', count: 4 },
      { name: 'waiting-open-csc-full-services', count: 4 },
      { name: 'waiting-open-csc-employer-payments', count: 4 },
      { name: 'waiting-support-parent-receiving-more', count: 3 },
      { name: 'waiting-maps-deliver-map', count: 3 },
      { name: 'request-type', count: 3 },
      { name: 'waiting-dirdep-confirm-form', count: 2 },
      { name: 'waiting-dirdep-learn-more', count: 2 },
      { name: 'waiting-support-parent-paying', count: 2 },
      { name: 'waiting-support-employer', count: 2 },
      { name: 'waiting-support-employment-status', count: 2 },
      { name: 'ticketinfo', count: 2 },
      { name: 'iwo-factors', count: 2 },
      { name: 'waiting-support-parent-receiving', count: 2 },
      { name: 'waiting-appts-guidelines', count: 1 },
      { name: 'waiting-appts-schedule', count: 1 },
      { name: 'waiting-contact-provide-phone-number', count: 1 },
      { name: 'waiting-contact-support-handoff', count: 1 },
      { name: 'waiting-support-phone-number', count: 1 },
      { name: 'waiting-support-no-phone-number', count: 1 },
      { name: 'waiting-caseqa-compliance-support-request', count: 1 },
      { name: 'waiting-pmtqa-yes-payment-reduction', count: 1 },
      { name: 'waiting-iwo-confirm-estimate', count: 1 },
      { name: 'waiting-appts-office-locations', count: 1 },
      { name: 'waiting-support-general-inquiries', count: 1 },
      { name: 'waiting-support-no-email', count: 1 },
      { name: 'waiting-support-email', count: 1 },
      { name: 'waiting-support-parent-paying-more', count: 1 },
      { name: 'waiting-pmts-general-non-custodial', count: 1 },
      { name: 'waiting-pmts-general-receive-payments', count: 1 },
      { name: 'waiting-dirdep-no-learn-more-eppicard', count: 1 },
      { name: 'waiting-dirdep-learn-more-eppicard', count: 1 },
      { name: 'payment-factors', count: 1 },
    ],
  },
  gratitude: {
    occurences: 120,
    queries: [
      'no thank you for your help', // Suggest gratitude intent intent
      'No thaks', // Suggest gratitude intent intent
      'Ok', // *
      'Ok', // *
      'Thank you', // Suggest gratitude intent intent
      'Okay ', // *
      'Thanks ', // Suggest gratitude intent intent
      'Thank you ', // Suggest gratitude intent intent
      'Ok', // *
      'Thank you', // Suggest gratitude intent intent
      'That’s all thank you ', // Suggest gratitude intent intent
      'No that’s all thank you!', // Suggest gratitude intent intent
      'not right now thanks', // Suggest gratitude intent intent
      'welcome', // Suggest gratitude intent intent
      'Thank u ', // Suggest gratitude intent intent
      'Thank you', // Suggest gratitude intent intent
      'Not at this time', // Suggest gratitude intent intent
      'thank you ', // Suggest gratitude intent intent
      'thank you ', // Suggest gratitude intent intent
      'Great. ', // Suggest gratitude intent intent
      'Thank you', // Suggest gratitude intent intent
      'Yes ', // *
      'Yes ', // *
      'No , but thank you🙂', // Suggest gratitude intent intent
      'Okay', // *
      'Yes. Very.', // add to helpful feedback
      'thank you', // Suggest gratitude intent intent
      'thank you', // Suggest gratitude intent intent
      'Lol ok thanks', // Suggest gratitude intent intent
      'thank you', // Suggest gratitude intent intent
      'Ok', // *
      'Ok', // *
      'Ok', // *
      'gardianship', // mislabeled
      'ok', // *
      'Yes! This service saves me so much time!', // add to helpful feedback
      'I will try that thank you ', // add to helpful feedback
      'Yes , very thankful ', // add to helpful feedback
      'okay , thank you!!', // add to helpful feedback
      'Ok', // *
      'Thanks ', // Suggest gratitude intent intent
      'Ok', // *
      'No that answers my question ', // Suggest gratitude intent intent
      'Ok ', // *
      'Ok', // *
      'ok thank you', // Suggest gratitude intent intent
      'Not yet I don’t. Thanks', // Suggest gratitude intent intent
      'No thanks I will call ', // Suggest gratitude intent intent
      'No ty ', // Suggest gratitude intent intent
      "That's all and thanks in advance", // Suggest gratitude intent intent
      'ok', // *
      'No, I think this is what I needed. Thank you ', // Suggest gratitude intent intent
      'No ty ', // Suggest gratitude intent intent
      'Thanks', // Suggest gratitude intent intent
      'thanks', // Suggest gratitude intent intent
      'I know that part', // mislabeled, added to insufficient response
      'Ok', // *
      'No that’s it thanks', // Suggest gratitude intent intent
      'Thank you', // Suggest gratitude intent intent
      'thank you ', // Suggest gratitude intent intent
      'Thank you ', // Suggest gratitude intent intent
      'Okay', // Suggest gratitude intent intent
      'Thanks 4 nuthn', // mislabeled, added to complaints
      'YEA', // *
      'Welcome', // mislabeled suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'Welcome', // mislabeled suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'Welcome', // mislabeled suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'Thank you', // Suggest gratitude intent intent
      'Wow ', // mislabeled, added to complaints
      'Gen was helpful ', // add to helpful feedback intent
      'LOVE U', // Suggest gratitude intent intent
      'Thank you ', // Suggest gratitude intent intent
      'Thank you ', // Suggest gratitude intent intent
      'OK THANKS', // Suggest gratitude intent intent
      'Thanks ', // Suggest gratitude intent intent
      'Thanks', // Suggest gratitude intent intent
      'no my question', // mislabeled, added to insufficient response
      "You aren't helpful. I can find that on my own.", // mislabeled, added to complaints
      'thank you.Itisnotan emergencty.I willcallinthe morning.', // Suggest gratitude intent intent
      'thanks', // Suggest gratitude intent intent
      'Welcome', // mislabeled suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'Welcome', // mislabeled suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'Welcome', // mislabeled suggest to use this a training phrase for Home ("I can help with the following topics..etc")
      'Thank you so much ', // Suggest gratitude intent intent
      'WOW', // mislabeled, added to complaints
      'I am well, thank you!', // Suggest gratitude intent intent
      "i'm just doing my research for the time being..thanks ", // Suggest gratitude intent intent
      'No further questions. Thanks', // Suggest gratitude intent intent
      'Ok', // *
      'The message I just wrote up top ', // mislabeled, added to insufficient response
      'No thank you are not helping me.', // mislabeled, added to complaints
      'Thanks', // Suggest gratitude intent intent
      'Thank you!', // Suggest gratitude intent intent
      'Bless and you ', // Suggest gratitude intent intent
      'Ok', // *
      'Thank you ', // Suggest gratitude intent intent
      'Thanks.', // Suggest gratitude intent intent
      'Okay thanks ', // Suggest gratitude intent intent
      'Thank you', // Suggest gratitude intent intent
      'Ok thank you', // Suggest gratitude intent intent
      'Thank you ', // Suggest gratitude intent intent
      'Ok thank u ', // Suggest gratitude intent intent
      'Ok', // *
      'Ok', // *
      'That’s it, ty', // Suggest gratitude intent intent
      'Ok, thank you ', // Suggest gratitude intent intent
      'Thanks for help!', // Suggest gratitude intent intent
      'i hope so', // *
      'THANKS ', // Suggest gratitude intent intent
      'Yes sorr', // *
      'thank you', // Suggest gratitude intent intent
      'Very', // add to helpful feedback
      'Ok', // *
      'Thanks ', // Suggest gratitude intent intent
      'okay', // *
      'Yes I do', // *
      'ok', // *
      'done', // *
      'no more questions', // *
      'Yes, afternoon Gen', // mislabeled suggest to use this a training phrase for Home ("I can help with the following topics..etc")
    ],
    contexts: [
      { name: 'waiting-restart-conversation', count: 32 },
      { name: 'waiting-feedback-root', count: 26 },
      { name: 'waiting-support-cancel-issue', count: 18 },
      { name: 'waiting-pmtmethods-debit-card', count: 11 },
      { name: 'waiting-feedback-helpful', count: 8 },
      { name: 'waiting-maps-deliver-map', count: 7 },
      { name: 'waiting-feedback-not-helpful', count: 7 },
      { name: 'waiting-support-employer', count: 6 },
      { name: 'waiting-support-parent-receiving', count: 6 },
      { name: 'waiting-support-parent-paying', count: 6 },
      { name: 'waiting-pmts-general-receive-payments', count: 5 },
      { name: 'waiting-pmts-general-non-custodial', count: 5 },
      { name: 'waiting-feedback-complete', count: 4 },
      { name: 'waiting-caseqa-general-support-request', count: 4 },
      { name: 'ticketinfo', count: 4 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 3 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 3 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 3 },
      { name: 'waiting-pmtmethods-cant-make', count: 3 },
      { name: 'waiting-pmtmethods-cash', count: 3 },
      { name: 'waiting-yes-child-support', count: 3 },
      { name: 'waiting-not-child-support', count: 3 },
      { name: 'waiting-pmtqa-ncp-payment-status-submit-request', count: 2 },
      { name: 'payment-factors', count: 2 },
      { name: 'waiting-open-csc-location-services', count: 2 },
      { name: 'waiting-open-csc-full-services', count: 2 },
      { name: 'waiting-open-csc-employer-payments', count: 2 },
      { name: 'waiting-support-type', count: 2 },
      { name: 'waiting-pmtmethods-moneygram', count: 1 },
      { name: 'waiting-support-general-inquiries', count: 1 },
      { name: 'waiting-support-parent-receiving-more', count: 1 },
      { name: 'waiting-support-employment-status', count: 1 },
      { name: 'waiting-support-phone-number', count: 1 },
      { name: 'waiting-eppi-faq', count: 1 },
      { name: 'waiting-pmt-calc-ss-deductions', count: 1 },
      { name: 'waiting-eppi-notifications', count: 1 },
      { name: 'waiting-pmt-calc-unknown-tax-deductions', count: 1 },
      { name: 'waiting-pmt-calc-income-term', count: 1 },
      { name: 'waiting-support-no-phone-number', count: 1 },
      { name: 'waiting-eppi-activate', count: 1 },
      { name: 'waiting-eppi-replace-report', count: 1 },
      { name: 'waiting-appts-office-locations', count: 1 },
      { name: 'waiting-appts-guidelines', count: 1 },
      { name: 'waiting-appts-schedule', count: 1 },
      { name: 'waiting-eppi-get-card', count: 1 },
      { name: 'waiting-pmtmethods-paynearme', count: 1 },
      { name: 'waiting-eppi-fees', count: 1 },
    ],
  },
  'payment modification': {
    occurences: 119,
    queries: [
      'three year review',
      'Amendment ',
      'review case',
      'review order',
      'order review and modification',
      'review of order',
      'how should i submit a request for modification',
      'WhT is a modification ',
      'Can a person have their child support reviewed?',
      'If the father of my child helps me with everything he pay the bills provide for me n the baby can I ask judge or caseworker can they only take 40 or 50 dollars out check ',
      'Modification',
      'Need help with modification forms ',
      'can you adjust the amount to send?',
      'child support review',
      'I would just like to look over my case',
      'How to request modification ',
      'Modification  ',
      'Need to have my case reviewed',
      'Modifications',
      'formal motion requesting a modification due to changed circumstances.\n\n',
      'If I want to put my child father on child support can I request for him just to pay 50 dollars a month cause he’s the one providing for our family ',
      'Modification ',
      'how can i review my case',
      'Where do I send my request for a review in writing',
      'case review',
      'Modification',
      'Need to file a modification request ',
      'Add a child',
      'Trying to see about a review ',
      'How do I get my child support reviewed?',
      'Modification',
      'How do i file to decrease child support',
      'How can I get an increase in child support',
      'Wanna a decrease ',
      'we received a second notification that we are to w/h $5.00 per month and forward that along with the child support pmts',
      'modification',
      'modification',
      'Forms to request a modification',
      'I would like to know if my child support can be increased without a notice',
      "How can I make payments arrangements. so I can get my license. I'm a truck driver ",
      'I want to request a increase ',
      'Hi gen what do I have to do to get my child support raised',
      '1.  I just want to see if he can pay me more than $200 a month for his 16 year old son. ',
      "Our divorce decree states my ex is obligated to pay $860 a month in child support for our two children. If I file for child support enforcement will this amount change based on his income? More or less, I'm asking for either way.",
      'When can I ask for increase for child support?',
      'Review status',
      'I lost my child support letter for review of increase',
      'Request a review',
      'What steps must be followed to request a Review of my child’s father?',
      'Increase',
      'How do I request an increase ',
      'How often does am i required to wait to get my child support case reviewed for increase?',
      'I need a payment increase',
      'How do i request a review',
      'What about child support reviews',
      'Why am I only receiving seven dollars in child support and the father has two jobs ',
      'How do you get an increase ',
      'Who do I contact to get an increase to in my child support',
      'Modification ',
      'Yes. How do I go by getting an increase ',
      'How can I review my child support order ',
      'I am the person who is paying child support and would like to know how can I go by getting it increased ',
      'i need the complete guidelines for child support in ms',
      'review case',
      'obligation review',
      'I would like to get an increase ',
      'HOW CAN MDHS INCREASE CHILD SUPPORT?',
      'HOW CAN I INCREASE CHILD SUPPORT ',
      'I received a letter stating that every 3 years they will look into the non custodial parents income for increase for child support. I would like to know a little more about that ',
      'How can I get a copyappointment to review amount of payment',
      'How do I request an increase in child support',
      'i would like to get my outstanding balance on my cases',
      'How can get an review?',
      "Why can't I never get an increase in child support",
      'I want to know when I’m eligible for a pay increase ',
      'how do you request a 3 year review ',
      'Yes, however I’m the the father. I was wondering if it’s possible for me to take out child support on myself. And what would the monthly amount come out to be if I did so?',
      'Im looking to speak with someone about a increase on my child support payments ',
      'I NEED MY CASE REVIEWED',
      'Need to know the process of receiving an increase due to the absent parents increase in income',
      'Increase in child support ',
      'How can I go about getting an increase in my child support. Is it true I can ask for an increase every 3 years ',
      'Payment revision and reduction',
      'I need someone to review my case',
      'What are the steps I must take to get an increase in child support',
      'child support modification for non custodial parent',
      'Are there any changes taking effect July DIGITS regarding child support',
      'I receive child support but how do I go about re-evaluating how much he pays a month',
      'I receive child support I was wondering how do I request an increase?',
      'Just have a couple questions',
      "Need to modify child support payments, it's been 8 yrs. And major changes with the other parent",
      'How do I get a case reviewed ',
      'Can child support review my case ',
      ' Reassessment ',
      'Modification ',
      'Can I get a payment increase',
      'I am trying to see how do I get my case reviewed ',
      'If I am making my child support payments, how do i go about getting visitation rights?',
      'how to request an increase in child support',
      'Increase',
      'Payment increase',
      'Child support increase',
      'How do I request a payment increase?',
      'form for child support review',
      'Can I get my child support looked at to see if I can get more in child support even though I have a court order for child support that is 10 years old',
      'How do I get my child support up',
      'How can I get an increase in child support ',
      'How can I apply for an increase in child support ',
      'What’s the difference between the 3? ',
      'How to request an increase? ',
      "What's the process to get a child support review",
      'Do I have to write another letter for a raise in child support',
      'Do I have to pay full monthly obligation if I don’t work currently ',
      'How does a parent go about getting a modification ',
      'I think my kids father is making more money now... is there anyway that can be reviewed ',
      'modification',
      'revision',
      'What if my monthly income has changed ',
      'I got hurt at work then fired. I have no income. How do I modify my order?',
    ],
    contexts: [
      { name: 'waiting-not-child-support', count: 22 },
      { name: 'waiting-yes-child-support', count: 22 },
      { name: 'waiting-restart-conversation', count: 22 },
      { name: 'waiting-feedback-root', count: 15 },
      { name: 'waiting-pmtmethods-debit-card', count: 9 },
      { name: 'waiting-open-csc-location-services', count: 5 },
      { name: 'waiting-open-csc-employer-payments', count: 5 },
      { name: 'waiting-open-csc-full-services', count: 3 },
      { name: 'waiting-support-parent-receiving', count: 3 },
      { name: 'waiting-support-parent-paying', count: 3 },
      { name: 'waiting-open-csc-no-service', count: 3 },
      { name: 'waiting-support-employer', count: 3 },
      { name: 'ticketinfo', count: 3 },
      { name: 'waiting-support-type', count: 3 },
      { name: 'waiting-open-csc-select-form', count: 3 },
      { name: 'waiting-appts-not-contacted', count: 2 },
      { name: 'waiting-support-restart', count: 2 },
      { name: 'waiting-appts-yes-contacted', count: 2 },
      { name: 'waiting-support-employment-status', count: 2 },
      { name: 'payment-factors', count: 2 },
      { name: 'waiting-pmtmethods-cash', count: 1 },
      { name: 'waiting-pmt-calc-gross-income', count: 1 },
      { name: 'waiting-support-cancel-issue', count: 1 },
      { name: 'request-type', count: 1 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
      { name: 'waiting-pmt-calc-income-term', count: 1 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 1 },
      { name: 'waiting-pmt-calc-unknown-income', count: 1 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 1 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 1 },
      { name: 'waiting-pmtmethods-cant-make', count: 1 },
      { name: 'waiting-support-general-inquiries', count: 1 },
      { name: 'waiting-caseqa-general-support-request', count: 1 },
      { name: 'waiting-pmt-calc-num-children', count: 1 },
      { name: 'waiting-pmt-calc-restart', count: 1 },
    ],
  },
  'office locations': {
    occurences: 118,
    queries: [
      'ZIPCODE',
      'Location I need to go to?',
      'PERSON_NAME address for  support services ',
      'PHONE_NUMBER. New address: DIGITS W. STREET_ADDRESS. Apt 2 Jacksonville Florida ZIPCODE',
      'visitaion',
      'PERSON_NAME ms',
      'PERSON_NAME county',
      'ZIPCODE',
      'I just want to know the address of the facility and what would be the best time to come in',
      'Can you give me the adress so i can come in',
      'I am looking for a gulfport fs officee',
      'the P.O. box in PERSON_NAME ms',
      '213 b PERSON_NAME ms ZIPCODE',
      'Ues',
      'Near Ridgeland ms ',
      'PERSON_NAME ms',
      'Where is the new location for child support collections?',
      'Confirming DHS location in Tunica County at the address of STREET_ADDRESS, Clarksdale, MS ZIPCODE',
      '150 Hwy 469North Apt G51 Florence Ms ZIPCODE',
      'DIGITS 1/STREET_ADDRESS, Laurel, MS ZIPCODE',
      'Need location to visit',
      'STREET_ADDRESS summit Ms ZIPCODE',
      'STREET_ADDRESS 20-A Flowood, Ms ZIPCODE',
      'STREET_ADDRESS Greenville, MS ZIPCODE',
      'Where',
      'philadelphia ms ',
      'What is the address to get there?',
      'ZIPCODE',
      'I need the PERSON_NAME county Ms location and phone number please',
      'What is location services ',
      'ZIPCODE',
      'STREET_ADDRESS PERSON_NAME LA ZIPCODE',
      'I have a new location for child support ',
      '183cr308 houlka ms ZIPCODE',
      'itta bena, ms',
      'My address is 670-c Meeting street,Charleston, South PERSON_NAME ZIPCODE',
      'Where',
      'I would like to get the address to Department of Huma Services',
      'ZIPCODE',
      'PERSON_NAME, ms',
      'where do I go',
      'where do i turn it in at i live in gulfport ms',
      'STREET_ADDRESS\nDecherd, TN ZIPCODE\nFranklin County\nContact PERSON_NAME\nPHONE_NUMBER',
      'I know where it is ',
      'what are the hours of operation',
      'my house',
      'reactapp',
      'Could u just send me the address ',
      'are you there',
      'PERSON_NAME county, ms',
      'I am looking for the agency ID for MDHS',
      'What’s your address ',
      'mailling address ',
      'address ',
      "what is the agency's mission",
      'PERSON_NAME address ',
      'Hours of operation ',
      'Address',
      'Holly springs, Ms ',
      'Byhalia, MS ',
      'byhalia, Ms ',
      'STREET_ADDRESS, PERSON_NAME, MS ZIPCODE',
      'PERSON_NAME, MS',
      'STREET_ADDRESS PERSON_NAME, ms ZIPCODE',
      'Is it open in PERSON_NAME county ',
      'Address for the distribution unit in PERSON_NAME Mississippi',
      'ZIPCODE',
      'I live in another stoate. Where do I send it?',
      'PERSON_NAME and PERSON_NAME County',
      'PERSON_NAME address',
      'where do i send the paperowrk back to?',
      'STREET_ADDRESS stateline ms ZIPCODE',
      'AGENCY',
      'Kosciusko ms ',
      'Canton, Ms',
      'I have the address but they are close for the holiday ',
      'PERSON_NAME ms ZIPCODE',
      '314 North Canton Club Cirle',
      'PERSON_NAME ms ZIPCODE',
      'Hey what time do you all close?',
      'Address',
      'Looking for local location ',
      'I live in laurel and i was trying to see what are their hours of operation? I know they have moved cant seem to pull up the new location.',
      'Hey are you still there',
      'Tunica, MS ',
      "The address for D'iberville Wal-Mart is STREET_ADDRESS, D'Iberville, ME ZIPCODE",
      'PERSON_NAME address',
      'what is the childsupport address',
      'Starkville Ms ZIPCODE and phone number ',
      'PERSON_NAME address Laurel, MS',
      'What’s address',
      'I’m trying to get there ',
      'ZIPCODE',
      'Columbus, Ms',
      'i live in vicksburg,ms',
      'Ct',
      'Address for PERSON_NAME ',
      'PERSON_NAME address ',
      'Can you send me the PERSON_NAME address ',
      'what is the address',
      'Canton,MS',
      'what are their hours of operation',
      'Yes are you from PERSON_NAME ms',
      "'what is the address",
      'address',
      'address',
      'hattiesburg ms',
      'child support enforcement agency address AND phone ',
      'Location on county line road?',
      'I’m sorry my name is PERSON_NAME ward ',
      'I am trying to locate the lee county office in Tupelo ms',
      'where to file in picayune',
      'Can not find the one in ridgeland ',
      'Location to child support in Vicksburg MS ',
      'Hours of operation',
      'What is your address',
      'ZIPCODE',
      'PERSON_NAME ms',
    ],
    contexts: [
      { name: 'waiting-restart-conversation', count: 33 },
      { name: 'waiting-feedback-root', count: 30 },
      { name: 'waiting-not-child-support', count: 15 },
      { name: 'waiting-yes-child-support', count: 15 },
      { name: 'waiting-maps-deliver-map', count: 14 },
      { name: 'ticketinfo', count: 11 },
      { name: 'waiting-support-submit-issue', count: 5 },
      { name: 'request-type', count: 5 },
      { name: 'payment-factors', count: 5 },
      { name: 'waiting-support-revise-issue', count: 5 },
      { name: 'waiting-support-email', count: 4 },
      { name: 'waiting-open-csc-location-services', count: 4 },
      { name: 'waiting-open-csc-employer-payments', count: 4 },
      { name: 'waiting-open-csc-full-services', count: 4 },
      { name: 'waiting-support-no-email', count: 4 },
      { name: 'waiting-support-parent-receiving', count: 2 },
      { name: 'waiting-support-parent-paying', count: 2 },
      { name: 'waiting-pmtmethods-debit-card', count: 2 },
      { name: 'waiting-support-employer', count: 2 },
      { name: 'waiting-appts-schedule', count: 1 },
      { name: 'waiting-support-type', count: 1 },
      { name: 'waiting-caseqa-general-support-request', count: 1 },
      { name: 'waiting-support-phone-number', count: 1 },
      { name: 'waiting-pmts-general-non-custodial', count: 1 },
      { name: 'waiting-open-csc-select-form', count: 1 },
      { name: 'waiting-open-csc-no-service', count: 1 },
      { name: 'waiting-pmt-calc-gross-income', count: 1 },
      { name: 'waiting-pmt-calc-unknown-income', count: 1 },
      { name: 'waiting-support-cancel-issue', count: 1 },
      { name: 'waiting-pmts-general-receive-payments', count: 1 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
      { name: 'waiting-support-no-phone-number', count: 1 },
      { name: 'waiting-feedback-helpful', count: 1 },
      { name: 'waiting-feedback-not-helpful', count: 1 },
      { name: 'waiting-dirdep-no-learn-more-eppicard', count: 1 },
      { name: 'waiting-dirdep-learn-more-eppicard', count: 1 },
      { name: 'waiting-pmt-calc-num-children', count: 1 },
      { name: 'waiting-appts-office-locations', count: 1 },
      { name: 'waiting-appts-guidelines', count: 1 },
      { name: 'waiting-support-employment-status', count: 1 },
    ],
  },
  'make payment': {
    occurences: 118,
    queries: [
      'Check',
      'making an online child support payment',
      'Can I pay payments with a debit card?',
      'I need to pay payments online ',
      'Can i make child support payment online by debit card?',
      'paynearme',
      'I do not have an account set up so I do not have a pin number',
      "Sign up to pay it won't let me con plete",
      'Can i send money gram ',
      'Payment methods to pay child support in Mississippi that’s acceptable ',
      "I'm the parent making payments.",
      'What is cash medical?',
      'Form to pay ',
      'How do you make child support payments online',
      'how to make payments',
      'How to set up payment for child support it gives me error code',
      'can you pay with debit card',
      'How to do a moneygram',
      'I need to get a new submission form to send with payment',
      'Can’t make payment',
      'Can’t make payments',
      'using epay',
      "I'm new to this",
      'how does the custodial parent receive the money?',
      'It’s the $93 fee I’m trying to pay',
      'I’m trying to make a payment through money gram but I need the information ',
      'Money gram info',
      'It isn’t me I’m the parent who it’s supposed to b paid to',
      'Payable to',
      'The non-custodial parent is not making the full amount of payment. What can I do?',
      'I already get payment',
      'Can this service be used with out of country child support (european account)',
      'change payment method',
      'but wanted to change the method of payment',
      'Can i be late making a payment?',
      'i will be on std for a few months and would like to pay my payments online until i gt back to work',
      'DIGITS banks ton in tunica ms ',
      'estatus de pago',
      'What is the Bank Plan child support',
      'Can NCP make payment without court order being sign',
      'can non-custodial parents pay by credit card',
      'Can I make a payment with a debit card?',
      'Cashiers check',
      'Cashier check made out to whom',
      'Make child support payments',
      'I recently lost my job. My child support payments were deducted from my paychecks. How and where do I make my child support payments now?',
      'Hiw do I set up a non custodial parent account to make payments',
      'if i pay with a debit card will it be charge every month. reason im asking cuz it isnt my account',
      'First payment ',
      'does the custodial parents get paid any late fees for non payment? ',
      'I am trying to find out if I can submit a child support payment online ?',
      'My company name is Southwest Distributors and it is the monthly form that we use to remit payment with',
      'payable to',
      'How can I make a payment with my debit card ',
      'I’m trying to make a child support payment online, as the non custodial parent. I don’t see an option to use my debit or credit card',
      'Can I pay childsupport with cash',
      'Tell me about paynearme',
      'What will I need to use money gram?',
      'would western union be a faster way for the money to get on the card for the person receiving it',
      'payment forms',
      'I’m making a payment so it takes 7 days here in ms',
      'Payment types',
      'Do payment location accept cash? ',
      'Change payment method',
      'I would like to change my current payment method',
      'Am I to make payment to the other parent or child',
      'If a child support account is opened will it draft from his work check or will he be able to pay it through an app',
      'Submit',
      'I need to make a payment. i cant make the full payment but i was gonna send what i can . can i send it online and it go straight to the mother debit card?',
      "we don't have direct deposit",
      'I am trying to set up my bank account to pay child support',
      'Then I want to set up a monthly withdrawal of $250.00.',
      'Making',
      'it has alreasy been set up but he isnt paying ',
      'I have EFT set up through my payroll company.  Can I add the $5 month fee to that.',
      'Can i make my child support payment online?',
      'I have a question about a deposit ',
      'Can he make the payment cash? ',
      'Money gram payment',
      'When paying mdhs with money gram how is the account number entered?',
      'Need to send payment by money gram and I neee the receive code',
      'Can MDHS deduct monies directly from my bank account without notifying me?',
      'What do  red to make cash payments?',
      'Im trying to make a payment ',
      "I'm trying to make a payment on line. ",
      'Trying to get bar code to Pay childsupport',
      'I’m trying to setup automatic payment out of my account ',
      'Making a child support payment ',
      'Can i change it to deposit ',
      'Is there a physical address to overnight a payment to?',
      'He got paid on the 14 th I got it on the 25th',
      'How do you submit a payment besides PERSON_NAME it in?',
      'Submit',
      'What is paynearme',
      'Can I send payments through moneygram',
      'How does paying rearrange works',
      'Check',
      'Can u send in some money to keep from liscence suspended',
      'He',
      'What is the receive code for money gram?',
      'What info do I need to send payment through money gram?',
      'I would like to know if child support can be withdrawn from bank account for payment ',
      'Make a child support payment ',
      'here to make a child support payment online',
      'This doesn’t help me nor my child if my money is going to the non custodial parent ',
      'Sorry I hit the wrong thing...I will be making a payment',
      'Can I make my child support payments online',
      'Can my child gets it support directly paid to them',
      'Are money gram payments processed in same day',
      '❓',
      "Western Union payment's",
      "when i hover over the payment options as an employer  it doesn't take me anywhere to set up the payments...",
      'Ipay',
      'I’m looking for something called ipay',
      'What’s goes on money order when sending off a child support payment ',
      'I am trying to make a payment with a debit card',
      'Ipay',
      'How do Ik a payment ',
    ],
    contexts: [
      { name: 'waiting-not-child-support', count: 29 },
      { name: 'waiting-yes-child-support', count: 29 },
      { name: 'waiting-restart-conversation', count: 24 },
      { name: 'waiting-feedback-root', count: 18 },
      { name: 'waiting-pmtmethods-debit-card', count: 14 },
      { name: 'waiting-support-general-inquiries', count: 4 },
      { name: 'waiting-support-type', count: 4 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 3 },
      { name: 'waiting-pmtmethods-cash', count: 3 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 3 },
      { name: 'waiting-pmtmethods-cant-make', count: 3 },
      { name: 'waiting-support-employment-status', count: 3 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 3 },
      { name: 'waiting-iwo-wants-assistance', count: 2 },
      { name: 'waiting-pmts-general-non-custodial', count: 2 },
      { name: 'waiting-pmts-general-receive-payments', count: 2 },
      { name: 'waiting-support-restart', count: 2 },
      { name: 'waiting-iwo-no-assistance', count: 2 },
      { name: 'waiting-iwo-faqs', count: 2 },
      { name: 'waiting-open-csc-location-services', count: 1 },
      { name: 'waiting-open-csc-employer-payments', count: 1 },
      { name: 'waiting-support-parent-receiving', count: 1 },
      { name: 'waiting-support-employer', count: 1 },
      { name: 'waiting-support-handle-employment-status', count: 1 },
      { name: 'request-type', count: 1 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
      { name: 'waiting-pmt-calc-income-term', count: 1 },
      { name: 'waiting-support-parent-paying', count: 1 },
      { name: 'waiting-open-csc-full-services', count: 1 },
      { name: 'waiting-pmt-calc-num-children', count: 1 },
      { name: 'waiting-pmt-calc-ss-deductions', count: 1 },
      { name: 'waiting-pmt-calc-unknown-tax-deductions', count: 1 },
      { name: 'payment-factors', count: 1 },
      { name: 'waiting-feedback-helpful', count: 1 },
      { name: 'waiting-feedback-not-helpful', count: 1 },
      { name: 'waiting-dirdep-savings', count: 1 },
      { name: 'waiting-dirdep-checking', count: 1 },
    ],
  },
  'payment timelines': {
    occurences: 115,
    queries: [
      'I wanted to know the dates that funds will be available for the month of October 2019',
      'How do child support payments are receive ',
      'How long it takes for a payment to post if you mailed it to Jackson,  MS a couple days ago',
      'I need to know when I am going to receive my child support.',
      'How long do it take to receive my first payment from the noncustodial parent?',
      'A payment was deposit on PERSON_NAME when will I receive on Eppicard',
      'yes. Will my payment be received immediately if I make it online with a debit card',
      'I wanted to know how long does a person wait to have their passport hold remove after they pay their back amount owed in child support?',
      'When is child support due each month',
      'Wanted to know when do the child support payment post on debit card ',
      'If my child support was pain Thursday when will it post on card',
      'my child support is paid in full how long until it stops',
      'How long it take to receive the money on the card',
      'How do I find out if there is a payment pending release from the IRS?',
      'I’m trying to figure out why my deposits have yet to be put onto my card this month. I usually receive my payment twice a month and it’s always been before this time of month. There have been 2 pay periods go by and no payment to my card yet ',
      "If you already receiving child support and you're going to start receiving child support for your child, how will you get the payments? On the same card or different?",
      "I'm the mother and wanting to know when will we receive Sept. Child support ",
      'How long does it take to receive the child support after it is being paid?',
      'I just need to know what time in the morning does credits usually become available ',
      'How long does it take for the custodial parent to receive payment',
      'When should I expect my child support to be direct deposited into my checking account?',
      'How long does it take to receive a child support payment ',
      'I will be receiving child support. The non custodial parent is ordered to pay by the 10th of September and I want to know how long it will take for me to receive that payment ',
      'Will we receive our deposit on holidays like today',
      'I have two childsupport pay ing pedi g one came on the 29 and one came on the 30 PERSON_NAME is a holiday will I get it',
      'How long does it take to receive child support after noncustodial parent starts paying',
      'If the 1st of the month is a Sunday when will I receive my child support payment',
      'Child support debit draft every month ?',
      'I need to know when I will receive a payment ',
      'How long does it take to receive the money?',
      'How long does it take to receive funds after applying for child support',
      'How does it take when I apply to receive benefits ',
      'After payment is received, how long will it take for custodial parent to get funds',
      'How long does it take to receive a payment ',
      'When will I receive payments after judge signs child support order',
      'How long does it take to receive child support?',
      'When will payment post to debit card after payment done online?',
      'does it always take 45 days for someone to receive a payment?',
      'On the 5 week of a month do child support come out',
      'I need to know when I’ll receive my child support payment ',
      'When can legal action take place for non child support payment',
      'What day of the week do payments post?',
      'I need to know how I will be receiving the payments that started August 1st',
      'When will i receive my payment',
      'When do they give out child support money each month',
      'what date of the month does the custodial parent receive payment ',
      'how long do it take for child support order to be process once you have been to court on 20 of June',
      'how long does this process take',
      'When i called the  number to checl the arrears balance and payments made . The was a new updated balance made for this month however the card says there isnt any money on the card. How long does it take for the money to be added to the card .',
      'what do I do next after I get done with the application',
      'I’m wondering when my child support will go through into my account and why I’m not getting the full amount on one of them?',
      'When are deposits made to the custodial parents debit card after they are garnished from the non custodial parent? ',
      'How long does it take to get my child support eppicard?',
      'How do I find out if a payment has been made?',
      "If my children's father sent his payment off from Popularville on the 19th of this month, how long will it take for me to receive it?",
      'When was my last payment made',
      'what time does it deposits ',
      'Im currently getting child support payments. And i was trying to see when is the next deposit to my card',
      'When will I begin getting payments',
      '1 I received a lump some back pay last month should I start getting payment  every month ',
      'How long does it take before I get garnished taxes for childsupport from my ex?',
      'how long does it take to receive child support from.an income tax',
      'I was awarded child support over a month ago and have yet to receive a payment ',
      'How long will it take the parent to receive the payment once I mail in the money order ',
      'if i pay online how fast will my ex wife get the money?  i did this online years ago when you all first started doing it and it took like 3 weeks for her to get her money.  ',
      'How many days do you have to wait for funds to post after child support receive the payment ',
      'What day do my benefits hit card this month',
      'I spoke with child support customer service and she told my payment in the amount of 115 with be deposited on my card july 16 and it isnt on there yet',
      'I was looking for information regarding a recent payment that I have not received. How long does it require before I receive a payment that was submitted on the 12th?',
      'When am I going to get my payment ',
      'How long does it take the state to process a payment on an account that is in arrearage?',
      'Have a question when do it end',
      'When will I receive child support ',
      'My case # is 616536621A, My name is PERSON_NAME. I was hoping to get an update on payments. I was told the request was sent to the non custodial parent on the 14th of June. How long does this process usually take?',
      'How long does it take before it starts?',
      'How long does it usually take to get an answer about the increase',
      'When I called the toll free number a payment was made on the 3rd but I have to receive it.. When will I receive it ',
      '\nI wanted to know after the person who is on child support pay TANF back does the parent receive the child support payements after the TANF is paid back to state?',
      'When will I receive my back time child support?',
      'Just want to know if my payment will be late this week',
      'will payment be made on 4th of july',
      'How long does it take to inform me of the amount child support is going up after the review. We received the letter saying it will be changing ',
      "Hi,my name is clay savage and I've over paid in child support and I was trying to see how long does it takes for me to receive my money?",
      'When is the money deposited on the Eppi card. This is first time to get it',
      'When will I receive my payment for July if it is scheduled to post on July 3 ',
      'I need to know when my payment will decrease',
      'Receive payments',
      "I have a couple questions on how child support is paid out.   It doesn't appear that I am receiving all the payments that are being made from the other parent.   ",
      'How long do a child receive child support?',
      'When should I receive my payment this month ',
      'how long does it take to start getting child support?',
      'When will the deposit be posted on my card and what time zone are y’all in',
      'I have a debit card already. My question is how long does it take for the parent to receive the money ',
      'when do you stop paying child support?',
      'I made a purchase then a return how long does it take for the return to credit to account ',
      'How long does it take to be withheld after recieving the letter?',
      'How long does it takw',
      'How long does it take for me to receive first payment ',
      'I was trying to see if yall take child surport out a check how long will it to receive it',
      'Who can i call to ask what is going on with my payments ',
      'How long is the process after filling out your application ',
      'When is my child support payment due?',
      'I’m wondering how long do parents have to be separated before filing for child support ',
      'If a support payment is made to dhs on a Thursday. What banking day can the custodial parent expect to receive it',
      'When do you receive the initial debit card?',
      'Hi PERSON_NAME. What is the normal time frame that payments received from income tax to be deposited on your card?',
      'Hi PERSON_NAME. What is the normal time frame that payments received from income tax to be deposited on your card?',
      'What day of month is support due ',
      "I'm cleared with my back pay, trying to see how can I get the money that's owed to me",
      'when do may child support payment stop',
      'Yes I was just wondering when are child support payments available on the EPPICard? ',
      'How long do offsets takes',
      'My sons stepmother submitted a payment online yesterday and I was trying to figure out how long it would take for me to actually receive the payment. ',
      'My court hearing is this Thursday to determine support/visitation.  How long after that can I expect to receive child support?',
      'When is payment disbursed',
    ],
    contexts: [
      { name: 'waiting-not-child-support', count: 17 },
      { name: 'waiting-yes-child-support', count: 17 },
      { name: 'waiting-pmtmethods-debit-card', count: 15 },
      { name: 'waiting-restart-conversation', count: 14 },
      { name: 'waiting-feedback-root', count: 11 },
      { name: 'waiting-eppi-get-card', count: 6 },
      { name: 'waiting-eppi-activate', count: 6 },
      { name: 'waiting-eppi-faq', count: 6 },
      { name: 'waiting-eppi-replace-report', count: 6 },
      { name: 'waiting-eppi-notifications', count: 6 },
      { name: 'waiting-eppi-fees', count: 6 },
      { name: 'waiting-acknowledge-privacy-statement', count: 4 },
      { name: 'waiting-pmts-general-non-custodial', count: 3 },
      { name: 'waiting-pmts-general-receive-payments', count: 3 },
      { name: 'payment-factors', count: 3 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 2 },
      { name: 'waiting-pmtmethods-cash', count: 2 },
      { name: 'waiting-pmt-calc-unknown-income', count: 2 },
      { name: 'waiting-support-type', count: 2 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 2 },
      { name: 'waiting-open-csc-select-form', count: 2 },
      { name: 'waiting-open-csc-no-service', count: 2 },
      { name: 'waiting-pmtmethods-cant-make', count: 2 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 2 },
      { name: 'waiting-pmt-calc-gross-income', count: 2 },
      { name: 'waiting-open-csc-location-services', count: 1 },
      { name: 'waiting-open-csc-employer-payments', count: 1 },
      { name: 'request-type', count: 1 },
      { name: 'waiting-dirdep-no-learn-more-eppicard', count: 1 },
      { name: 'waiting-dirdep-learn-more-eppicard', count: 1 },
      { name: 'ticketinfo', count: 1 },
      { name: 'waiting-support-restart', count: 1 },
      { name: 'waiting-dirdep-start', count: 1 },
      { name: 'waiting-pmt-calc-income-term', count: 1 },
      { name: 'waiting-support-general-inquiries', count: 1 },
      { name: 'iwo-factors', count: 1 },
      { name: 'waiting-iwo-confirm-estimate', count: 1 },
      { name: 'waiting-support-parent-paying', count: 1 },
      { name: 'waiting-support-employer', count: 1 },
      { name: 'waiting-support-parent-receiving', count: 1 },
      { name: 'waiting-dirdep-change', count: 1 },
      { name: 'waiting-dirdep-stop', count: 1 },
      { name: 'waiting-support-handle-employment-status', count: 1 },
    ],
  },
  'account balance': {
    occurences: 105,
    queries: [
      'Check balance ',
      'How can I check my balance on this site? It does not show this',
      'I need to check my payment ',
      'Number to check child support balance',
      'to check status of payment ',
      'I’m trying to find out if I have had a check deposited ',
      'Find balance owef',
      'Just trying to check my balance',
      'Checking balance online',
      'How can I set up an account to check my balance online?',
      'Check my account ',
      'Check my balance ',
      'i want to check my child support payments',
      'How can i check on a pending payment ',
      'How to find out my balance on child support ',
      'Check my account',
      "I'll call the one eight hundred number, and it says that I have got 98 dollars deposited in my account, but every time I called the line, it says that I don't have nothing in my account, so I'm trying to see what is really going on",
      'I need to know the amount that was collected on my child support account ',
      'How can I find out when my money is on my card',
      'Check balance online',
      'How do I find out how much money I owe in child support?',
      'I’m trying to check the arrearage on my account',
      'What is the website to check my card balance ',
      'Check balance ',
      'Why cant I see my full amount all I see is only one deposit I cant see the savings account for tanf',
      "I'm trying to see what my balance is for my child support it suppose to be over with this month",
      'Check child support balance ',
      'Checking my balance',
      'need to check my balance on my card',
      'can i get my final balance ',
      'get a statement of account',
      'How do I find out my current balance ',
      'How can I find out the balance I owe on back child support',
      'Where do i check account balances',
      'Is there an app to check my balance',
      'Check my card balance ',
      'I want to check my online account ',
      'Checking my account ',
      'I want to check annoys case to see if there is money available ',
      'how do i check if a balance is owed to me on my account',
      'Can u check  my account',
      'How do I find out my balance?',
      'How do I check my child support balance using my social or account number',
      'Is there a way I can check payment online? ',
      'Checking my balance',
      'Trying to check and see about a payment ',
      'What is the DIGITS to check  balance ',
      "I can't check my balance it send me to customer service",
      'Need to check balance',
      'I need to check my payment',
      'Is there an online website to check child support balance owed',
      'Is there a way to check owed balance ',
      'check balance',
      "I'm trying to check my child support balance.",
      'Just want to check on deposit',
      "I'm trying to find the balance of my account",
      'How can I check my daughter”s SSI online ',
      'How can I check child support payments online',
      'How can I check payments',
      'Check balance ',
      'how can i check the balance of child support my child is due ',
      'How Do I Find Out How Much Money Is Available ',
      'Get balance',
      'How can I check my child support payments',
      'How to check payment online ',
      'How do I check my balance online ',
      'How can I get my funds deposited into my own account ',
      'what is the number to call to get my balance owed',
      'need to check on my child support payment',
      'trying to see is it render blance on my case ',
      'Balance check',
      'Trying to check balance online',
      'Checking my rear balances',
      'I’m here trying to check on my funds',
      'How do I get my balance on my child support ',
      'Yes how can i check on the balance of my child support ',
      'How do I get a statement of balance due',
      'I am trying to find out how to log on to check my child support',
      'can i check my balance online',
      'Check on my child support ',
      'I need to check if payment has been made',
      'checking if my payment have been recieved',
      'The number to check my balance ',
      'When I call to try to change my balance  it says we have an important message about your account ',
      'is there anyway i can check my balance online',
      'How can I check on my payments ',
      'I’m trying to get an online acct to check my payments and activity ',
      'How can I check my account balance',
      'Trying to be able to check my balance on line',
      'Can I check my child support payments online ',
      'Money PERSON_NAME ',
      'to see if a payment been made on my case',
      'I’m trying to see if July 4 will affect when I get my money PERSON_NAME? ',
      'I want to know how much i have paid',
      'How can I have a partial payment deducted from my bank account ',
      'Money PERSON_NAME ',
      "How do I check to see if I've received a payment?",
      'How to check balance ',
      'How can i check on accout ',
      'Checking my balance',
      'I’m trying to  find out if money has been deposited  ',
      'Where my DIGITS dollars ',
      'Tryn to see about my existing account with my funds',
      'How can I retrieve my payment?',
      'Check my balance',
    ],
    contexts: [
      { name: 'waiting-not-child-support', count: 24 },
      { name: 'waiting-yes-child-support', count: 24 },
      { name: 'waiting-restart-conversation', count: 15 },
      { name: 'waiting-feedback-root', count: 11 },
      { name: 'waiting-pmtmethods-debit-card', count: 9 },
      { name: 'waiting-support-type', count: 5 },
      { name: 'waiting-eppi-activate', count: 3 },
      { name: 'waiting-support-general-inquiries', count: 3 },
      { name: 'waiting-eppi-faq', count: 3 },
      { name: 'waiting-eppi-fees', count: 3 },
      { name: 'waiting-eppi-notifications', count: 3 },
      { name: 'request-type', count: 3 },
      { name: 'waiting-eppi-get-card', count: 3 },
      { name: 'waiting-eppi-replace-report', count: 3 },
      { name: 'waiting-pmts-general-receive-payments', count: 3 },
      { name: 'waiting-dirdep-no-learn-more-eppicard', count: 3 },
      { name: 'waiting-dirdep-learn-more-eppicard', count: 3 },
      { name: 'waiting-pmts-general-non-custodial', count: 3 },
      { name: 'waiting-support-cancel-issue', count: 2 },
      { name: 'waiting-support-employment-status', count: 2 },
      { name: 'payment-factors', count: 2 },
      { name: 'waiting-pmt-calc-unknown-income', count: 2 },
      { name: 'waiting-support-parent-paying-more', count: 1 },
      { name: 'waiting-support-employer', count: 1 },
      { name: 'ticketinfo', count: 1 },
      { name: 'waiting-support-parent-paying', count: 1 },
      { name: 'waiting-support-parent-receiving', count: 1 },
      { name: 'waiting-feedback-helpful', count: 1 },
      { name: 'waiting-open-csc-location-services', count: 1 },
      { name: 'waiting-open-csc-full-services', count: 1 },
      { name: 'waiting-open-csc-employer-payments', count: 1 },
      { name: 'waiting-dirdep-learn-more', count: 1 },
      { name: 'waiting-dirdep-confirm-form', count: 1 },
      { name: 'waiting-feedback-not-helpful', count: 1 },
      { name: 'waiting-pmt-calc-tax-deductions', count: 1 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
      { name: 'waiting-pmtmethods-cant-make', count: 1 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 1 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 1 },
      { name: 'waiting-pmtmethods-cash', count: 1 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 1 },
      { name: 'waiting-pmt-calc-gross-income', count: 1 },
      { name: 'waiting-support-parent-receiving-more', count: 1 },
    ],
  },
  emancipation: {
    occurences: 100,
    queries: [
      '21 yearsold',
      'Do children get child support while in college?',
      'children',
      'I wanna know if the child still in college as they reach 21 of age, can they still receive child support ',
      'What happens if my son is grown and his mother dies',
      'so even if he is in college i quit at 21',
      'no 18 but dropped out of high school',
      '21 years old ',
      'The child is 21 years of age ',
      'My son father is in the Navy, and I do not have a social on him will I still be able to receive child support?',
      'How long does a child receive child support?',
      'My child is about to be 18 but he is special needs and will be in school until he is 21. Will he continue to receive child support until he is 21?',
      'When an 18 y/o ',
      'My son is 19 and no longer in school do he still get child support ',
      'Must pay child support until 21 years old no matter what.',
      'What age do children stop receiving support?',
      'Does child support stop when my child turns 18?',
      'when does child support stop?',
      'When does child support stop? When my child is 18 or graduates from high school? ',
      'When can I stop paying child support?',
      'What is the emancipation age in MS?',
      'emancipation age in MS?',
      "what's the emancipation age?",
      'My son turns 21 in August. When does my payroll deduction end for support for him?',
      'What is the age you should stop making payments',
      'The current order is for the children until they are 21.  One of the children will soon be 21.  What do I have to do to get her removed from this case?',
      'My child turns 21 on the 8th of August. At what point will my court order for child support be vacated?',
      'Yes.  When did the age of emancipation change from 18 to 21?',
      'Age a child can receive child support ',
      'Does child support payments end when child reaches 21 years of age?',
      'Why does father still pay child support for a child at is 18 years old?',
      'What ages does child support stop',
      'When does child support payments stop',
      'Can you give me information on receiving child support after kids turn 19 years',
      'My son dropped out of school.  Has turned 18. When will my payments stop',
      'Trying to determine if my 18 year old moves, does child support stop',
      'My divorce papers say that my exhusband only has to pay support until my child is 18.  However, someone told me in the State of MS, age 21 is the age he has to support her through... ',
      'Once my child reaches 21, then what?',
      'When can i stop paying child support ',
      'My child is turning 21 in sept. What do I need to do to stop the automatic withdrawal ',
      'My daughter turned 21 and has lived with me for the past 2 years. Will the child support turn off now?',
      'When does child support end?',
      'My child will be 18 tomorrow. It is my understanding that I should give the child the support that the mother has been receiving, is that correct?',
      'Yes, my daughter turned 21 last month and they are still taking out support on my payrool',
      'When did the child support age go up?',
      'what if my children grown',
      'At what age does child support stops in Mississippi?',
      'MY PAYMENT SHOULD BE OVER WITH  MY CHILD IS 21',
      'At what age does child support end',
      'What age do you stop paying child support for a child',
      'My son turned 21 last month so when will I no longer have to pay support?',
      'When does child support end',
      'What age do stop paying child support',
      'Paying child support for a child about to turn 18 , does the money still come out of my check after he is 18',
      'A can',
      'How far behind is the other parent',
      'Can wife sue if child is 21',
      'When my kids turns 21 how do I stop the child support ',
      'At what age is child support terminated ',
      'The child whom the child support order is for will be 21 years of age in November.  Does the parent have to notify DHS that the Child Support garnishment should end?',
      'Multiple children on one case and one child is 21 years of age and doesn’t attend college.  Should I still be paying for that child?',
      'If insurance was court ordered, what is the age that a child is removed ',
      'What do I how to when your child done move out of your house',
      'I have a question. Can a person be taken off child support or is it permanent? ',
      'My child is 19 years old can I His mother pursue child support for him',
      'What is the cut off age in Mississippi ',
      'I need to know when my payments end my son turns 21 in august',
      'When do you stop paying child support in Mississippi?',
      'I would like to know when can one stop paying child support ',
      'Does it end at 18',
      'What is the age of majority ',
      'what age does child support stop',
      'my child turns 21 in a few months...will you stop collecting child support from me at that time?',
      'How old does a child have to be to stop receiving child support',
      'Can a parent receive child support for a child where the child does not reside .The child lives with grandparents who have custody',
      'What if I get married ',
      'when can i stop paying child support',
      'My daughter is 14 can I still get support for her',
      'What is the legal age that a non custodial parent pay child support in MS',
      'Can my child still receive assistance after she turns 21? ',
      'My son is 21 and incarcerated should i still be paying child support',
      'how long after all children have turned 18 do the support continue ',
      'what if they child is over 21',
      'My son turned 21 on 5/6/19. Yet the support is still being taken from my paycheck. ',
      'Yes I have a question.. wouldn’t I be required to pay child support until my child is 18 UNLESS he’s in school all the way to 21 ? Is that correct ? ',
      'whats the the law for the emancipation ',
      'What is the age for emancipation for MS?',
      'what is the emancipation age for the state of ms?',
      'what is the emancipation age for the state of mississippi?',
      'What is the age for emancipation for MS?',
      'when can i stop paying child support?',
      'when does child support terminate?',
      'when does child support stop in ms?',
      'My is 20 and no longer living with their gaudian',
      'What is the age for emancipation for MS?',
      'my child is 18 years old',
      'my child is 18 when does child support stop',
      'what is the age of emancipation?',
      'emancipation age',
      'How old can a child receive child support legally',
    ],
    contexts: [
      { name: 'waiting-yes-child-support', count: 22 },
      { name: 'waiting-not-child-support', count: 22 },
      { name: 'waiting-restart-conversation', count: 16 },
      { name: 'waiting-feedback-root', count: 13 },
      { name: 'ticketinfo', count: 10 },
      { name: 'waiting-pmtmethods-cant-make', count: 4 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 4 },
      { name: 'waiting-open-csc-location-services', count: 4 },
      { name: 'waiting-support-type', count: 4 },
      { name: 'waiting-open-csc-full-services', count: 4 },
      { name: 'waiting-open-csc-employer-payments', count: 4 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 4 },
      { name: 'waiting-pmtmethods-cash', count: 4 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 4 },
      { name: 'waiting-support-general-inquiries', count: 3 },
      { name: 'waiting-acknowledge-privacy-statement', count: 3 },
      { name: 'waiting-pmtmethods-debit-card', count: 3 },
      { name: 'waiting-support-parent-receiving', count: 2 },
      { name: 'waiting-support-email', count: 2 },
      { name: 'waiting-support-no-email', count: 2 },
      { name: 'waiting-support-parent-paying', count: 2 },
      { name: 'waiting-support-employer', count: 2 },
      { name: 'waiting-support-employment-status', count: 2 },
      { name: 'waiting-support-restart', count: 1 },
      { name: 'waiting-support-phone-number', count: 1 },
      { name: 'waiting-support-parent-paying-more', count: 1 },
      { name: 'waiting-support-no-phone-number', count: 1 },
      { name: 'waiting-maps-deliver-map', count: 1 },
    ],
  },
  'change of information': {
    occurences: 90,
    queries: [
      'Address change',
      'I need to change where my ex husband works',
      'I’m needing to have my address in the system changed',
      'I want to change my PERSON_NAME address',
      'Address Change',
      'EMAIL_ADDRESS but need to change to EMAIL_ADDRESS',
      'address change',
      'Address change',
      'Need to submit my address',
      'I was asking bout my PERSON_NAME address ',
      'Email address for change of residence ',
      'address change',
      'I need to change my name',
      'change name',
      'name change',
      'how to complete a change of address',
      'Address change',
      'I moved, and I had my address change and updated at the post office, so will child support know my address is change or do I have to call? Because I should’ve receiving child support soon and don’t want them to send it to my old address ',
      'address change',
      'I need a change of address on my child support case',
      'Change of address ',
      'Change of address for child support card renewal',
      'change of address form',
      'Change of address ',
      'How can i change my child support address and get a new card',
      'How do I change my address on my child support case',
      'Address change',
      'Change of address',
      'Changing my Address',
      'Address change ',
      'I am needing to update my address so that I can get a new EPPI card sent to me.',
      'I am trying to figure out how to get my case information updated properly.',
      'Change of address',
      'Change of address',
      'Change of address',
      'I’m looking for the change of address form ',
      'Change of address for child support',
      'Yes. I need to know where to go to change my address so that I can get a new card. The epicard people cannot help me. ',
      'Address change',
      'Need to also change the address as well ',
      'I need the email address to change my address I have a case opened',
      'yes trying to change my address to get a replacement card',
      'Need to change address',
      'change of address',
      'Change address ',
      'Change personal information ',
      'CHANGE ADDRESS',
      'i MOVED BACK TO MISSISSIPPI FROM ALABAMA.. DONT KNOW HOW TO CHANGE MY ADDRESS',
      'Change address',
      'A change of address',
      "If I recently got married and I wanted to  change my son's last name. How do I go about trying to get my son last name changed?",
      'How do I change my address to receive a new debit card?',
      'How do I change my address with child support?  I haven’t gotten my new card and forgot to change my address. ',
      'Change of address',
      'How can I change my address so that I can receive my new card',
      'Changing address ',
      'Address change ',
      'need to change adress',
      'Change of address',
      'Change in address ',
      'Address change, my card is about to expire.',
      'How do I change my address. I need a new epic card ',
      'Change address',
      'Change of custodial parent ',
      'As an obligator, how do I go about getting my drivers license reinstated?',
      'thats not my name. i chose the wrong option',
      'Change address',
      'How to change my address on order for me to receive my debit card',
      'Change my home address',
      'Change of name and address',
      'Change of address',
      'Trying to get my address changed',
      'I need to kno how can i change my address online',
      'I will like to change my address',
      'I have gotten married and have moved, what do I need to do to change my address and name on my case??',
      'Change my address',
      'How to change my address?',
      'Change of Address ',
      'Change of address',
      'Change of address',
      'change of address',
      'Change of address',
      'change of address',
      'Address change ',
      'I have a change of address ',
      'Updated a address with child support',
      'Change of address',
      'Trying to see how to change my address so I can get a card sent because I never received one 3 yrs ago when I filed and I just moved and finally have received a payment ',
      'Is there a way to change my address online? ',
      'change last name of child',
    ],
    contexts: [
      { name: 'waiting-yes-child-support', count: 20 },
      { name: 'waiting-not-child-support', count: 20 },
      { name: 'waiting-feedback-root', count: 9 },
      { name: 'waiting-restart-conversation', count: 8 },
      { name: 'waiting-support-parent-paying', count: 5 },
      { name: 'waiting-support-employer', count: 5 },
      { name: 'waiting-support-parent-receiving', count: 5 },
      { name: 'ticketinfo', count: 4 },
      { name: 'waiting-open-csc-full-services', count: 4 },
      { name: 'waiting-open-csc-location-services', count: 4 },
      { name: 'waiting-open-csc-employer-payments', count: 4 },
      { name: 'waiting-pmtmethods-debit-card', count: 1 },
      { name: 'waiting-support-no-email', count: 1 },
      { name: 'waiting-support-cancel-issue', count: 1 },
      { name: 'waiting-support-email', count: 1 },
      { name: 'waiting-support-type', count: 1 },
      { name: 'waiting-support-restart', count: 1 },
      { name: 'waiting-eppi-faq', count: 1 },
      { name: 'waiting-eppi-notifications', count: 1 },
      { name: 'waiting-eppi-fees', count: 1 },
      { name: 'waiting-eppi-activate', count: 1 },
      { name: 'waiting-eppi-replace-report', count: 1 },
      { name: 'waiting-eppi-get-card', count: 1 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
      { name: 'waiting-support-phone-number', count: 1 },
      { name: 'waiting-support-no-phone-number', count: 1 },
      { name: 'waiting-dirdep-learn-more', count: 1 },
      { name: 'waiting-dirdep-confirm-form', count: 1 },
    ],
  },
  enforcement: {
    occurences: 79,
    queries: [
      'It says on divorce paper he is supposed to pay but I have no idea where he is ',
      "I need a copy of my child support from Court my oldest son father hasn't made a payment on 18 years",
      'Contempt',
      'Yes, I only have the state where my kids father stay no address, I know where he works and social security number, I need help ASAP',
      'What happened if you are 3 months behind on child support ',
      'contempt',
      'contempt of childsupport',
      'sorry the weekly is 555.60',
      "I'm taking care of my 5 children and neither dad does for them financially or even physically consistent",
      'contempt',
      'contempt request',
      'Contempt order',
      "The non-custodial parent is supposed to have a hold on him until a payment has been made on the case, he's being released from prison and I'm trying to find out if this order will be enforced?",
      "the non-custodial parent didn't pay the full child support amount last month. what will MDHS do about that?",
      'Today (several years later), he continues to have the minimum payment which he has failed to pay over the past several months. In the meantime of his financial absence of $150.00, he and his wife have been able to move from state to state ',
      'How do I go about getting child support through MDHS instead of the non custodial parent? He is always late and gives me a very hard time.',
      'My ex-wife is fixing to be 3 months behind on child support how are you going to enforce this',
      'On sept 3, DIGITS will make 1 year that I have hhhad my daughter PERSON_NAME Parker back in my care yet her father Tim Parker is keeping her child support and food stamp benifits',
      "My twins' father is ordered to pay around $215 per month but he keeps missing months and won't pay. He usually stays around 700-900 or more delinquent at all times and that doesnt even include the entire first 2 years of their lives that he provided ",
      "I have a child support order from my twin's father for $215 a month. Its not much but it would help me a lot. He keeps missing payments for months at a time and is always 700-900 or more delinquent. What can I do?",
      "I have a child support order from my twins' father that he js suppose to pay $215 a month, which isnt much at all, but he keeps skipping months at a time and is behind around 700-900 or more at all times. Not",
      'How can I get the father to pay child support',
      'How can some not follow through with a garnishment ',
      'How can my ex after not paying for 4 yrs make 3 pmts and stop again?',
      'Trying to figure out how to get my ex to pay since he is not after divorce',
      'How can I get the "absent parent" to pay child support?  It has been almost 3 years.',
      'Non custodial parent has not paid child support in 3 months is there any updates i need to know about',
      'I have a question if a father is over 15,000 dollars behind in Child support will another be open if he is assisting with the second child',
      'My ex is over $4,000 behind.  What can I do?',
      'none, i have not received child support since Oct of DIGITS. He was ordered to start paying in March or DIGITS and I have only gotten 3 or 4  payment since that date. from July to Oct of DIGITS. How can i find out if anything is being done to try to collect',
      'Termination of parental rights of a parent who hasn’t paid child support or seen there child in almost 5 years ',
      "My son's father pays rent lights water but I'm being denied food stamps because I have to put him on child support. I'm worried he will stop paying the bills if I do this and the support won't be enough",
      'My wife is late on child support and not answering my calls',
      'My daughter recently turned 18 and her father stopped paying support ',
      'How do I go about getting an eforcement?',
      'Enforce!',
      'How can I help get my ex to pay child support?',
      'How long can he go without paying? ',
      'My ex husband hasnt paid me in tears and I know he works why havent child support found him',
      'How can i go after a dad for not paying his child support? ',
      'Who to talk to about non payment in over a year ',
      'My ex husband is not paying the correct amout of child support i got a review eligibility in the mail and need help he owes over 50,000.00',
      'My ex-husband stopped paying child support in January of this year and has not made any contact with me to correct this problem.  ',
      'My ex was paying 100 a week for child support for 3 kids. Well 3 weeks ago we signed and filed divorce papers. Since then he hasn’t paid anything. He said he isn’t going to pay until the papers are final and he has to.   Can he do that? ',
      'i am asking for a friend, her husband left her with two kids and does not want to pay child support',
      'Dnt know what to do next can’t get other parent to pay child support. I need help with my kids asap',
      'My ex is 2 months behind on child support. how can i get his wages garnished or press charges',
      'What if ex is not paying?',
      'my husband owes a lot on his child support. I would like him to start paying every month through yall. would you be able to collect the past due amount?',
      'My ex is habitually late on child support payments. Like 2 months behind. What can i do?',
      'What if my exhusband hasn’t paid child support in 3 months ',
      'what happens if the other parent has missed his monthly child support payment',
      "I'm trying to get incompliant with child support foodstamps",
      'I requested the non custodial parent be in contempt but once 3 payments were made it was dismissed and he stop making payments. What can I do to enforce my case',
      'How to get my child mom to pay',
      "my friend has to pay child support, about ZIPCODE, and doesn't have a lawyer or anyone who can pay, he is currently incarcerated and is wondering how to pay or work out plans with out a lawyer ",
      'My ex husband has not paid child support more than 3 months',
      "He's past due $2,000.00",
      'What can be done about a non custodial parent working and not paying ',
      "The other parent hasn't been making payments since March 6 DIGITS",
      "I have had my son 4-5 years and I'm still paying child support. What can I do",
      "This is the father's 5th or so contempt charge he chould have, all of them by keeping my baby from his mother, the one who raised him. It is sad because it is for no reason at all, I could see if he had a reason",
      'I need to get the amount owed',
      'My baby daddy has never paid support and I was trying to figure out how to get it started ',
      'I would like to know how I can get my case on the docket. The noncustodial parent is almost $50K delinquent in payments and has not attempted to make any payments since DIGITS. ',
      'I am trying to see who I need to contact about my PERSON_NAME father.  He has not paid child support since May DIGITS',
      'How do I get my child support caught up ',
      'I am the custodial parent but the father resides in Mississippi and is behind on payments. What can I do?',
      'Contempt order',
      'contempt packet',
      'Contempt order',
      "My baby's father has not paid child support since DIGITS. My baby was born in DIGITS. He only made like 3 payments and now he is getting paid under the table. His balance is over $DIGITS. What do I need to do?",
      'Well I was trying to see how to get action taken on my case because my child support is about 9 months behind ',
      'My son is PERSON_NAME ho he has gone to court sign all papers and child support got him in debit for DIGITS dollars what can I do ',
      'My sons father only pays child support when he feels and he need to be consistent. I need to know what I can do about this situation',
      'Trying to see why I haven’t received a payment since 2/22/18 and non custodial parent has 2 jobs',
      'I was just wondering if child support pauses when the other parent has 1 month with my child for the summer?',
      'Is there anything that ca be done about this as long as he is being paid cash on purpose ',
      "How can I enforce child support on my child's father ",
    ],
    contexts: [
      { name: 'waiting-yes-child-support', count: 11 },
      { name: 'waiting-not-child-support', count: 11 },
      { name: 'waiting-restart-conversation', count: 10 },
      { name: 'waiting-feedback-root', count: 8 },
      { name: 'waiting-pmtmethods-debit-card', count: 5 },
      { name: 'ticketinfo', count: 4 },
      { name: 'waiting-support-revise-issue', count: 3 },
      { name: 'waiting-support-submit-issue', count: 3 },
      { name: 'payment-factors', count: 2 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 2 },
      { name: 'waiting-support-cancel-issue', count: 2 },
      { name: 'waiting-pmtmethods-cant-make', count: 2 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 2 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 2 },
      { name: 'waiting-pmtmethods-cash', count: 2 },
      { name: 'waiting-pmt-calc-unknown-income', count: 1 },
      { name: 'waiting-pmts-general-receive-payments', count: 1 },
      { name: 'waiting-pmt-calc-ss-deductions', count: 1 },
      { name: 'waiting-pmt-calc-unknown-tax-deductions', count: 1 },
      { name: 'waiting-pmt-calc-gross-income', count: 1 },
      { name: 'waiting-caseqa-general-support-request', count: 1 },
      { name: 'requests', count: 1 },
      { name: 'waiting-pmts-general-non-custodial', count: 1 },
      { name: 'waiting-open-csc-location-services', count: 1 },
      { name: 'waiting-open-csc-employer-payments', count: 1 },
      { name: 'waiting-open-csc-full-services', count: 1 },
    ],
  },
  paternity: {
    occurences: 78,
    queries: [
      'Paternity test form',
      "What are the next step when the father didn't come to his appointment to take DNA?",
      'trying to see if i can change my child last name in the divorce court with my dna paper',
      'Yes I have another child to put on child support ',
      'Paternity test ',
      'blood test ',
      ' Do they do paternity test ?',
      'paternity test',
      'Adoption',
      'I am looking for a Voluntary Acknowledgement Of Paternity Form',
      'I am trying to figure out who is the father of metss no. 617420627A',
      'Paternity',
      'Paternity test ',
      'My name is PERSON_NAME and I was placed on child support by PERSON_NAME of Hazlehurst, Ms. for a child who is 32 years, PERSON_NAME and I would like to have a blood test.',
      'I was placed on child support for a child who is 32 years old, who she told me was somebody else’s child.',
      'How do I get a blood test',
      'Does Mississippi offer free paternity test by going through DHS?',
      'Paternity test',
      'I am the custodial parent',
      'There was a DNA test done and I was wanting to know if the results were in',
      "I'm trying to get a DNA on 2",
      'establish paternity',
      'i am the custodial parent',
      'I’m trying to petition a paternity test I’m not the child’s father and I’m on child support and paying for a child that isn’t mine',
      'Dna test',
      'I want to get a blood test for a child ',
      'I’m inquiring about my dna results. I haven’t received them yet. ',
      'im trying to establish paternity to get my name removed from a birth certificate',
      'Do y’all do free DNA test ',
      'If one guy is on child support for a child and you get legal documentation that another guy is the father. will the first guy be taking off child support ',
      'paternity',
      'That the child belongs to another man , how do I get that information',
      "I'm trying to see how to get records of a mother and a guy who had a paternity test saying",
      'How much for paternity test',
      'paternity test',
      'DNA testing ',
      "I'm trying to get a DNA test for my child. ",
      'My son has been told that his ex-girlfriend is pregnant with his baby.  He would like to get help on getting a dna test so if the child is his he can support the child',
      'Paternity test ',
      'Establish paternity ',
      'DNA testing ',
      'Paternity testing ',
      'My son is trying to get his child’s name changed to his name on her birth certificate. Currently the baby just has moms name. Does he have to hire an attorney in Mississippi to do this or can he just fill out some paperwork or get a dna test',
      'I am trying to check on paternity results.',
      'acknowledgement of paternity',
      'DNA test',
      'I was wondering the status of my case, the father of my child said he took the DNA test but no one has reached out to me to test my son.',
      'Proof of Paternity Test Results',
      'How do I establish paternity of a Girl they say is my Husbands',
      'Is dna testing free ',
      'How to get a paternity test',
      'How do the non custodian parent go about getting a paternity test done and visitation rights',
      'I want to know how long do it take to get DNA RESULTS',
      'How do i get a dna test ',
      'I am the custodial parent. ',
      'I need to see how I can get a copy of DNA results proving paternity',
      'Neither i am the child ',
      'I want to know where to go in PERSON_NAME MS to get a free DNA test',
      'How do I set up a paternity test',
      'Question is this: after being confirmed the father through DNA swab, what rights does the father have with that child (visiting, time with the child... etc.)?',
      'Paternity test',
      'Trying find out about doing a DNA TEST ',
      "How long is the child support process. I filed in April and received paternity results, but haven't heard anything yet.",
      'I was trying to see if I could request a blood test even though I’m the mother ?',
      'adoption',
      'My child father hasn’t token the dna test how do I get that done ',
      'My son was just told to go get tested for DNA for child if he is the father will this bother his baseball scholarship ',
      'There is no father on the birth certificate and there is no DNA test stating who the father is of my youngest, so there is no one to collect child support from',
      'I’m trying to see get a DNA TEST done on my baby father ',
      'DNA testing ',
      'Genetic testing ',
      'Can child support order paternity test for a unwedded mother',
      'DNA Testing',
      'My fiancé was married to a woman who cheated on him and had a baby. She had her boyfriend sign the birth certificate. She is now receiving food stamps and is married to the boyfriend. Can he request a paternity test?',
      'Procedures to get blood test',
      'My child father wants to get a DNA test after 2 years of my son being born! He is already on child support. How much will he have to pay? And who do we need to contact?',
      'I need help with establishing paternity questions ',
      'Trying to get a DNA test',
    ],
    contexts: [
      { name: 'waiting-yes-child-support', count: 15 },
      { name: 'waiting-not-child-support', count: 15 },
      { name: 'waiting-feedback-root', count: 9 },
      { name: 'waiting-restart-conversation', count: 7 },
      { name: 'waiting-open-csc-location-services', count: 6 },
      { name: 'waiting-open-csc-employer-payments', count: 6 },
      { name: 'waiting-open-csc-full-services', count: 5 },
      { name: 'waiting-support-employer', count: 5 },
      { name: 'waiting-support-parent-paying', count: 5 },
      { name: 'waiting-support-parent-receiving', count: 5 },
      { name: 'waiting-support-type', count: 2 },
      { name: 'waiting-maps-deliver-map', count: 2 },
      { name: 'request-type', count: 1 },
      { name: 'waiting-open-csc-no-service', count: 1 },
      { name: 'waiting-support-employment-status', count: 1 },
      { name: 'waiting-support-parent-paying-more', count: 1 },
      { name: 'waiting-iwo-in-arrears', count: 1 },
      { name: 'waiting-support-cancel-issue', count: 1 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
      { name: 'iwo-factors', count: 1 },
      { name: 'waiting-open-csc-select-form', count: 1 },
    ],
  },
  terminate: {
    occurences: 77,
    queries: [
      'Cancel child support',
      'I need childcare I just had a baby but the dad help me with her and I don’t want to put him on child support what do I do',
      'bye',
      'I am a father and I want to know what can I do to be able to see my children .. the mother is giving me a hard time... I pay child support ',
      'how to terminate or appeal payments',
      'how to terminate or appeal payments or reevaluting ',
      'Bye',
      'Goodbye ',
      'Bye',
      'Goodbye ',
      'stop child support',
      'Stop child support ',
      'I need to know the steps to take to terminate a child support order',
      'Me and the mother are try to get our child support case cancel ',
      'they quit',
      'stop child support',
      'My child is 20, not in school and has a full time job. How do I stop child support.',
      'stop',
      "Now she says she can't stop the child support because it was court ordered. How can he get the child support stopped without having to go thru an attorney.",
      "My son has two children and pays child support. His ex could not handle their oldest, so she gave him to my son (who's the father) last Oct. She has continued to collect full child support. She agreed (in a text) to stop the child support.",
      'Cancel child support ',
      'stop collection',
      'Child support stop',
      'How can they stop pmts after only making 4',
      "How do I stop my daughter's father from receiving her child support if I have her",
      'How can I stop child support ',
      'my son is about to be 19 and have a job and do not live with his mom. how can I stop paying child support ',
      'I need to stop child support payment to me. One of my  child is going to live with his father ',
      'How to stop child support ',
      'My fiance kids are 17 and 20. They have decided to live with there dad. How does he stop child support to their mother?',
      'I wish to stop paying because he now lives with me',
      'How can I get child support stopped when child is married and moved out on their own?',
      'How to stop payments',
      'How to get off childsupport',
      'If child live with me how do i get off childsupport',
      'How do I stop child support on children who live with me now',
      'I now have my daughter full time and the mother who I pay child support is willing to sign a letter saying so. How do I stop my payment request from the state',
      'So how do I go about taking him off ? ',
      'Disable',
      'I need to cancel my case',
      'How to stop child support ',
      'Stop all childsupport',
      'Terminate',
      'How to stop payments',
      'how to stop child support deductions',
      'Yes I have another child and his father was put on child support..  we decided to come to an agreement that he was going start helping out..  how do I go about canceling the case?',
      'how do i terminate child support',
      'How can I stop child support when I have the kids more than the other parent?',
      'How do it work with Taking my child father of child support ',
      'Stop garnishments',
      'Terminate child support ',
      "My sister's grandson lives with her. She is financially responsible for him.  However, her daughter does not live with her or take care of her son. How can my sister get the child support redirected to her .",
      'Want to cancel it',
      'I would like to cancel my case',
      "I'm trying to put child support on my kids dad",
      'Cancel',
      'Stopping child support order',
      'can I terminate my rights?',
      'How do I stop child support payment? ',
      'Bye',
      'Terminate child support',
      'Can I terminate child support payments since my sons father and I are back together?',
      'I’m trying to take my children kids off child support . How do I go about doing that . ',
      'Stop',
      'Cancel',
      'I want to know how to cancel a child support order',
      'Stopping payment ',
      'Stop child support',
      'How do I stop child support collections now that my son is living with his father?',
      'I want to stop getting child support from an absent parent ',
      'Yes my daughters father stop paying child support and has another job ',
      'The court just gave primary custody of my daughter to me. Who do I send the court notice to cancel my child support?',
      'I need to know how to stop the reaccuring payments.  I have had an employee quit and it is going to continue to take out for him.',
      "I'm just trying to take him off child support and he just pay me in cash",
      'How can I take my son father off child support ',
      'I was trying to see how can i get child support removed',
      'Termination ',
    ],
    contexts: [
      { name: 'waiting-not-child-support', count: 22 },
      { name: 'waiting-yes-child-support', count: 22 },
      { name: 'waiting-restart-conversation', count: 8 },
      { name: 'waiting-open-csc-location-services', count: 5 },
      { name: 'waiting-open-csc-employer-payments', count: 5 },
      { name: 'waiting-open-csc-full-services', count: 5 },
      { name: 'waiting-acknowledge-privacy-statement', count: 4 },
      { name: 'waiting-feedback-root', count: 4 },
      { name: 'waiting-support-employer', count: 3 },
      { name: 'waiting-support-parent-paying', count: 3 },
      { name: 'waiting-support-parent-receiving', count: 3 },
      { name: 'waiting-pmtmethods-debit-card', count: 2 },
      { name: 'waiting-support-employment-status', count: 2 },
      { name: 'ticketinfo', count: 2 },
      { name: 'waiting-pmtmethods-cash', count: 2 },
      { name: 'waiting-eppi-faq', count: 1 },
      { name: 'waiting-eppi-notifications', count: 1 },
      { name: 'waiting-eppi-fees', count: 1 },
      { name: 'waiting-dirdep-learn-more-eppicard', count: 1 },
      { name: 'waiting-eppi-replace-report', count: 1 },
      { name: 'waiting-eppi-get-card', count: 1 },
      { name: 'request-type', count: 1 },
      { name: 'waiting-support-retry-phone-number', count: 1 },
      { name: 'waiting-support-phone-number', count: 1 },
      { name: 'waiting-support-no-phone-number', count: 1 },
      { name: 'payment-factors', count: 1 },
      { name: 'waiting-support-retry-email', count: 1 },
      { name: 'waiting-support-handle-employment-status', count: 1 },
      { name: 'waiting-dirdep-savings', count: 1 },
      { name: 'waiting-dirdep-checking', count: 1 },
      { name: 'waiting-pmtmethods-cant-make', count: 1 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 1 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 1 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 1 },
      { name: 'waiting-dirdep-no-learn-more-eppicard', count: 1 },
      { name: 'waiting-eppi-activate', count: 1 },
    ],
  },
  visitation: {
    occurences: 75,
    queries: [
      'Roderick',
      'Roderick',
      'EMAIL_ADDRESS',
      '618232492A',
      'I want to know about adopting',
      'access and visitation program',
      'visitation',
      'Visitation',
      'PERSON_NAME farm',
      'Vistition',
      'EMAIL_ADDRESS',
      'visits',
      'visits',
      'visitation',
      '619355024A',
      'Fucj ',
      'I would like to know, can a guardian visit friends and other family if they are to be supervised ',
      'jkljkljlj',
      'casey_deer',
      'How to apply for custody and establish visitation guidelines',
      'visitation rights',
      '616736175A',
      'Will it still come to parent? ',
      'I would like to put myself on child support payments and schedule a visitation schedule with my child ',
      'Guardian',
      'Custody',
      'visit',
      'visition ',
      'visitation rights',
      'visitation rights',
      'Mississippi’s Access and Visitation Program (MAV-P',
      'EMAIL_ADDRESS',
      'EMAIL_ADDRESS',
      'Mother',
      '610061400A',
      'EMAIL_ADDRESS',
      'EMAIL_ADDRESS ',
      'Visitation info ',
      'EMAIL_ADDRESS',
      '617855224A',
      ' non-custodial parent',
      'What law show the responsibility of the custodial parent as it relates to visitation rights',
      'This is for my nephew',
      'How to file for visitation',
      'Ranora Medders',
      'establish visitation rights',
      'visitation',
      'custody issues',
      'dad',
      'Visitation',
      'child visitation forms',
      'EMAIL_ADDRESS',
      'EMAIL_ADDRESS',
      '618917991A',
      'Visition right',
      'access and visitation',
      'Inquiring o. The Mississippi access and visitation',
      'EMAIL_ADDRESS',
      'File for custody ',
      'EMAIL_ADDRESS',
      'Custody papers',
      'w9',
      'EMAIL_ADDRESS',
      'EMAIL_ADDRESS',
      'The grandparent',
      'Shhd',
      'Grandparent seeking visitation',
      'Visitation',
      'PERSON_NAME POPE',
      'I dont get to see my son what should I do',
      'What should or can I do with issues about seeing my son or spending time with him he live there and I live in PERSON_NAME and travel as of right now  ',
      'The child ',
      'Parenting time',
      'EMAIL_ADDRESS',
      '619202333a',
    ],
    contexts: [
      { name: 'ticketinfo', count: 20 },
      { name: 'waiting-not-child-support', count: 10 },
      { name: 'waiting-support-no-email', count: 10 },
      { name: 'waiting-support-email', count: 10 },
      { name: 'waiting-yes-child-support', count: 10 },
      { name: 'waiting-support-parent-paying', count: 8 },
      { name: 'waiting-support-employer', count: 8 },
      { name: 'waiting-support-parent-receiving', count: 8 },
      { name: 'waiting-restart-conversation', count: 6 },
      { name: 'waiting-support-type', count: 6 },
      { name: 'waiting-support-restart', count: 6 },
      { name: 'waiting-feedback-root', count: 6 },
      { name: 'waiting-support-phone-number', count: 5 },
      { name: 'waiting-support-no-phone-number', count: 5 },
      { name: 'waiting-open-csc-employer-payments', count: 4 },
      { name: 'waiting-open-csc-full-services', count: 4 },
      { name: 'waiting-open-csc-location-services', count: 4 },
      { name: 'waiting-support-employment-status', count: 3 },
      { name: 'waiting-pmt-calc-income-term', count: 2 },
      { name: 'waiting-support-submit-issue', count: 2 },
      { name: 'request-type', count: 2 },
      { name: 'waiting-support-revise-issue', count: 2 },
      { name: 'waiting-support-general-inquiries', count: 1 },
      { name: 'iwo-factors', count: 1 },
      { name: 'payment-factors', count: 1 },
    ],
  },
  'estimate payments': {
    occurences: 71,
    queries: [
      'how much ',
      'I need current income transmittal for employers',
      'does the child support go by the amount the father makes and how many kids he has ',
      'Medicaid',
      'Medicaid cooperation',
      'Can pregnant women get tanf ',
      'not the same amount each month',
      'withholding amount for 1 individual with 6 kids',
      'what are the withholding limits',
      'What is the percent for child support in Mississippi ',
      'I have to children and my net pay is DIGITS every two weeks how much support would I have to pay ',
      'Medicaid',
      'Medicaid',
      'How much is 3 kids ',
      'percentage of income',
      'How much does someone making $49,000 a year pay in child support?',
      '540.00 a week',
      'Determining income ',
      'The father is self employed. How would you determine his income? ',
      'I dont know how much my child father make',
      'How is net income calculated?',
      'Net income calculation ',
      "I want to find how much I'm supposed to receive every month",
      'how much',
      'What percent of my income is used to provide medical support?',
      'My children are 4;6;8 I had the benefit before I just unfortunately need again',
      'What happens when they owe more than $1,000.',
      'How much per month ',
      'should employee health insurance be deducted before figuring disposable income?',
      'What percent of non custodial parents income is ordered to be paid to custodial parent ',
      'Can you tell me the weekly amount if I give you the monthly amount?',
      'Does the amount cap off? If the non custodial parent makes 160,000 a year does the child support cap off at 100,000? He saying I can only get a percentage up to 100,000',
      'How much is for 2 child',
      'Does the child support go down if the father has two other children after he had the first one',
      'What is the state minimum per child?',
      '$0',
      'If the father receive ssi can the child still get support ',
      'What is the percentage of child support for 2 children ',
      'I have two children what would I have to pay in child support in the state of MS',
      'medicaid',
      'Percentage of income paid by non-custodial parent.',
      'What is the minimum amount of child support and percentage of income required by the non/custodial parent?',
      'two children by two different mothers. What percent would I be obligated to pay? ',
      'I need see how much children soupprot be get every month',
      'How much is the minimum child support per month for one child in PERSON_NAME county MS',
      'percentage',
      'can you tell me the percentage of income for 2 children child support is?',
      'just  2 children that has emanicipated',
      'How is the amount determined',
      'What is the maximum percentage of disposable income that can be withheld for child support?',
      'what can you assist with?',
      'How can I see how much child support we receive each month?',
      'If I make DIGITS a month how much is 14% of my child support',
      'My husband works he gets paid bi weekly DIGITS a month',
      'My payments are based on how much I make and hours I work correct?',
      'What do you calculate for Income Tax and Retirement for an employees form.',
      'I have a question about allocation of child support garnishments when there are multiple garnishments for multiple children.  Which method does MS use?',
      'What are the hours ',
      'how much',
      'I need to find out if I can get a hardship licesense to work so I can pay more on child support ',
      'What is 20% of $DIGITS monthly income',
      'If I have two children of two different fathers, do I get 14% of each fathers income or 19% of their combined income? ',
      'In addition to the payroll deduction for child support, what other expenses is the non-custodial parent responsible for?',
      'Yes. What percentage of child support does a parent get for two children? ',
      'calculator did not work',
      'what is the rate',
      "If the child's father does not work what is the amount he would have to pay?",
      'How much am I getting ',
      'Do I get 20 percent  with 2 kids',
      'does the social security amount include medicare',
      'does the social security amount include medicare',
    ],
    contexts: [
      { name: 'waiting-restart-conversation', count: 16 },
      { name: 'waiting-feedback-root', count: 12 },
      { name: 'waiting-yes-child-support', count: 12 },
      { name: 'waiting-not-child-support', count: 12 },
      { name: 'payment-factors', count: 5 },
      { name: 'waiting-acknowledge-privacy-statement', count: 4 },
      { name: 'waiting-support-parent-receiving', count: 3 },
      { name: 'waiting-support-parent-paying', count: 3 },
      { name: 'waiting-support-employer', count: 3 },
      { name: 'iwo-factors', count: 2 },
      { name: 'waiting-open-csc-full-services', count: 2 },
      { name: 'waiting-open-csc-location-services', count: 2 },
      { name: 'waiting-open-csc-employer-payments', count: 2 },
      { name: 'waiting-pmtqa-ncp-payment-status-submit-request', count: 1 },
      { name: 'waiting-iwo-confirm-estimate', count: 1 },
      { name: 'waiting-pmt-calc-ss-deductions', count: 1 },
      { name: 'waiting-pmt-calc-gross-income', count: 1 },
      { name: 'waiting-pmt-calc-unknown-income', count: 1 },
      { name: 'waiting-pmtmethods-debit-card', count: 1 },
      { name: 'waiting-pmt-calc-child-support-amount', count: 1 },
      {
        name: 'waiting-pmt-calc-final-estimation-no-other-children',
        count: 1,
      },
      { name: 'waiting-feedback-helpful', count: 1 },
      { name: 'request-type', count: 1 },
      { name: 'waiting-feedback-complete', count: 1 },
      { name: 'waiting-pmt-calc-unknown-deductions', count: 1 },
    ],
  },
  arrears: {
    occurences: 68,
    queries: [
      '339 cr DIGITS mooreville ms ZIPCODE',
      'back',
      'How far is jermaine tellis behind',
      'how can I find out how far behind someone is in child support ',
      'what do i do about back child support owed',
      'How do I find out how much I owe in child support',
      'Back child support balance ',
      'How far behind do you get in trouble ',
      'Back child support',
      'How much is owed on my back child support?',
      'DIGITS cornet pl',
      'how to check back child support',
      'DIGITS PERSON_NAME Blv PERSON_NAME, MS',
      'how do you find names of people that owe child support?',
      'Is there a number I can call to check child support balance owed',
      'I need to know how much back time is being owe to me ',
      '238 cr DIGITS guntown ms',
      'Wht time does it close',
      'I am a non custodial parent.  Is there anyway online that i can see what i owe on child support/back child support?',
      'I recently had a back payment of DIGITS dollars.i have recently sent a payment of DIGITS .can i get my liscense back',
      'How can I track my back time money from child support?',
      'How do I find out how much back child support I owe?',
      'Check the arrears',
      'Is there anywhere to check to see how far behind my ex husband is?',
      'How much am i behind ',
      'How much am still behind on it',
      'How many years of back time child support can you get',
      'I want to know how i can get my past due child support from over the years',
      '769-666_6697',
      'Arrears overcharges',
      'I would like to know how am I behind ',
      'How do I go about trying to get support owed to me for the past 8 years? The father is now working',
      'I’m just wondering how behind is my oldest daughters father. The dollar amount along with how many months arrearage ',
      'I received a letter saying to with hold for arrears for an employee that says he is caught up. can I get an updated letter?',
      'Retainer',
      'lower',
      'Arrears',
      'Back',
      'Have questions about arrears',
      'Longino',
      'When a man finds out after 15 years he fathered a child and has not been requested to pay support until now, how far back does he pay support in arrears? ',
      'Can child support garnish a VA check for back time child support?',
      'What are arears',
      'I have had a open case since June of last year and it says I have a arrears balance or 0.00. Why? I have received 80 dollars from the father of my child since December 9,DIGITS when he was born. He has only seen him 1 time since last june',
      'Needing help getting court order and arrears balance transfer from TN to ms',
      'How to get arrears? ',
      'How much am I behind ',
      'Ricara PERSON_NAME',
      'Want to know my arrearage amount',
      'Arrears ',
      'How long does it take to receive child support arrears once the irs.takes my kuds father taxex',
      'lowering arrears',
      'My husband owe childsupport and he owe DIGITS back child support mississippi is taking my husband check',
      'add arrears',
      'arrears',
      'WHERE CAN I GET MY COURT ORDER FROM CHILD SUPPORT FROM DIGITS',
      'back',
      'My child support is coming out of my paycheck and I have a payment plan for arrears can I get a passport',
      'Need to know how much im behind',
      'Back time child support from a parent in PERSON_NAME ',
      'Back',
      'Just need the DIGITS to check rears and all ',
      "And all I would need is something showing that my arrears is caught up to close because that's what the VA requires but none seems to be able to help me get this done. This is the only time I have to get this done before leaving.",
      "I'm trying to see how far behind I'm in child support cause they took the time gettin it set up",
      'Checking on back time child support payment',
      'is there a place to see back child support owed',
      'is there a way to look online to see what amount of back child support is owed',
      'No payment on arrearage order in 12 months',
    ],
    contexts: [
      { name: 'waiting-not-child-support', count: 12 },
      { name: 'waiting-yes-child-support', count: 12 },
      { name: 'waiting-restart-conversation', count: 8 },
      { name: 'waiting-pmtmethods-debit-card', count: 6 },
      { name: 'waiting-feedback-root', count: 4 },
      { name: 'waiting-maps-deliver-map', count: 4 },
      { name: 'ticketinfo', count: 4 },
      { name: 'waiting-eppi-notifications', count: 3 },
      { name: 'waiting-eppi-get-card', count: 3 },
      { name: 'waiting-eppi-replace-report', count: 3 },
      { name: 'waiting-eppi-faq', count: 3 },
      { name: 'waiting-eppi-activate', count: 3 },
      { name: 'waiting-eppi-fees', count: 3 },
      { name: 'waiting-support-phone-number', count: 3 },
      { name: 'request-type', count: 2 },
      { name: 'waiting-open-csc-location-services', count: 2 },
      { name: 'waiting-open-csc-employer-payments', count: 2 },
      { name: 'waiting-open-csc-full-services', count: 2 },
      { name: 'waiting-pmtmethods-cant-make', count: 2 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 2 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 2 },
      { name: 'waiting-pmtmethods-cash', count: 2 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 2 },
      { name: 'waiting-support-employer', count: 2 },
      { name: 'waiting-support-parent-paying', count: 2 },
      { name: 'waiting-support-parent-receiving', count: 2 },
      { name: 'iwo-factors', count: 2 },
      { name: 'waiting-support-no-phone-number', count: 2 },
      { name: 'waiting-dirdep-confirm-form', count: 1 },
      { name: 'waiting-pmts-general-receive-payments', count: 1 },
      { name: 'waiting-dirdep-learn-more', count: 1 },
      { name: 'waiting-support-restart', count: 1 },
      { name: 'waiting-pmt-calc-income-term', count: 1 },
      { name: 'waiting-pmts-general-non-custodial', count: 1 },
      { name: 'waiting-support-general-inquiries', count: 1 },
      { name: 'waiting-support-type', count: 1 },
    ],
  },
  complaints: {
    occurences: 68,
    queries: [
      'You where not helpful ',
      'you are no help!!!',
      'NOT HELPFUL. ',
      'Kiss my ass',
      "i don't know yet i haven't received any instructions on what needs to be done or what will be done",
      'FAQs',
      'No help there ',
      'Yesterday at my SNAP appointment my caseworker informed me that i was code "DC" for noncompliance. I have no idea what i did ( or didn\'t do) and need help resolving this very urgent matter',
      'Fuck you',
      'Go back',
      'Ok we will not continue ',
      'Fuck you',
      'really you dont know anything then why com on here as if you can help. as soon as i hit enter thats your respnose. pitiful',
      'that was no help',
      'No information provided ',
      'useless',
      'you are not helpful at all',
      'you are useless',
      'This is a farce. I call that number and no one picks up. I get the same runaround I am automated system that you were giving me now.',
      "You're not answering the question that I asked",
      "This isn't working",
      'leave me alone',
      'Horrible',
      'Ur stupid computer ',
      'so why have a chat if you are unable to answer any questions',
      'i do not want to call them they were absolutely no help',
      'i tried calling. I was on hold for 15 minutes before being disconnected how can i get an audience with a case worker?',
      'thats not answering my question',
      'Bye.  This is a stupid interface.  ',
      "Why y'all dont do your job",
      'this has not been helpful to my questions.',
      'why wont the ipay page load?',
      'Talk to someone about DHS ... I ran into someone that she has 4 kids and all of the kids don’t have anything to eat just a loaf of bread and that’s it while the mother goes out and get drunk and high',
      'what is taking so long with the process ',
      'ive been on hold for 25 min',
      'this so stupid',
      'Your response is not at all related to the subject',
      'so why are you on here if you cannot assist?',
      'Is there anyway to get a letter stating the amount I receive each month? I’ve tried calling twice and have gotten disconnected each time.',
      'It would be nice if any of them would answer the phone!!!!!!',
      'i have already contacted that center and wasted my time ',
      'Get a statement',
      'No answer ',
      'My baby father has been on chold',
      'Go back',
      'nevermind i can see this is an auto system and you will not be able to help me with anything- i have contact mdhs child support several times through out many years (my child is 7 now) and still no one will seems to be able to help ever',
      'I am calling PHONE_NUMBER form tank and #4 extention will NOT PICK & ANSWER .',
      "Finding the deadbeat...local caseworker won't do her job so I am trying to do it.",
      'please remove this box',
      'The lady in the office here in Hernando ms laughed at me after I had been there two times prior n still no results I didn’t get to speak to anyone n the info that I did have she gave it back ',
      'Shut up',
      'Do you know anything ',
      'fuck you',
      'please add more faqs',
      'This will not put me behind will it ',
      'The wait time is too damn long.',
      'What can I do when the Child support dept. that is supposed to be collecting my support is not doing their job & staying on top of it , & I am giving them all the Information & they are not following through?',
      'this site sucks',
      'Go Back',
      'i can never get anyone on the phone or an update on my case. i have given the employment info and all of my exhusband several times since oct. DIGITS still nothing.',
      "I need a replacement debit card, I no longer have the one that was sent last time.  I've been on hold forever several times trying to talk to someone.",
      "I need a replacement card, I no longer have the debit card that was sent last time.  I've been on hold forever several times to talk to someone and still can't get anyone.",
      'Still not picking the phone up ',
      'disregard... i thought i would have a solution today',
      'yes why are you even offering this service if you cannot answer the ?',
      'All automated no answers',
      'I have done a snap shot of this chat so others can see how nothing will be done',
      'was not able to get license suspension information',
    ],
    contexts: [
      { name: 'waiting-restart-conversation', count: 16 },
      { name: 'waiting-feedback-root', count: 14 },
      { name: 'waiting-yes-child-support', count: 8 },
      { name: 'waiting-not-child-support', count: 8 },
      { name: 'waiting-feedback-helpful', count: 4 },
      { name: 'ticketinfo', count: 3 },
      { name: 'waiting-feedback-complete', count: 3 },
      { name: 'waiting-support-cancel-issue', count: 1 },
      { name: 'waiting-pmt-calc-gross-income', count: 1 },
      { name: 'payment-factors', count: 1 },
      { name: 'waiting-pmt-calc-unknown-income', count: 1 },
      { name: 'waiting-support-retry-phone-number', count: 1 },
      { name: 'waiting-support-retry-email', count: 1 },
      { name: 'waiting-support-type', count: 1 },
      { name: 'waiting-support-parent-receiving-more', count: 1 },
      { name: 'waiting-caseqa-general-support-request', count: 1 },
      { name: 'waiting-pmt-calc-income-term', count: 1 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
      { name: 'waiting-pmtmethods-debit-card', count: 1 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 1 },
      { name: 'waiting-feedback-not-helpful', count: 1 },
      { name: 'waiting-open-csc-location-services', count: 1 },
      { name: 'waiting-open-csc-employer-payments', count: 1 },
      { name: 'waiting-open-csc-full-services', count: 1 },
      { name: 'waiting-maps-deliver-map', count: 1 },
      { name: 'waiting-pmtmethods-cant-make', count: 1 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 1 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 1 },
      { name: 'waiting-pmtmethods-cash', count: 1 },
      { name: 'request-type', count: 1 },
    ],
  },
  interstate: {
    occurences: 65,
    queries: [
      'Can you explain the interest and what state statute speaks to this.',
      "I'm in Florida but the case in starkville ms",
      'If the NCP resides in another state does he/she still have to abide by the Mississippi guidelines?',
      'Hey is there a difference between the Mississippi department of human services and the  Mississippi Division of Child Support',
      'Transfer a case here from Florida',
      '104adamsrd PERSON_NAME mississippi ZIPCODE',
      '104 adamsrd PERSON_NAME mississippi',
      'I am trying to have my case moved to mississippi from PERSON_NAME',
      "I got a bill in the mail from mdhs-i don't have a case tin ms, my child support is paid through the state of NY and im current 600 + and ow nothis and never have-",
      'Transfer my case from Tennessee ',
      'I was wondering if the father of my kids child support change if he moved to a different state ',
      'I need to speak to someone about a transfer in my child support from LA to MS',
      "I've got a case open in Mississippi and the father ofy kids ",
      'I have an interagency case open in TN for MS. What are the next steps? ',
      'If I moved from the county',
      'Transfer from mobile Alabama ',
      'I work for South PERSON_NAME, trying to help someone "cancel" their child support case in Mississippi so it can be opened here in South PERSON_NAME.  Can the parent just type a letter requesting this?',
      'Louisiana is saying they sent over all paperwork regarding my case but Mississippi is saying they havent',
      'Mississippi took 654.57 out of my ckeck',
      'I received my letter to allow my ex to pay his child support thru the state however he has moved again so he was not notified . What do I need to do ?',
      'Transfer case',
      'Mississippi',
      'I live in TN, applied for child support but the child’s father lives in MS. My case has been turned over to MS for a schedule orientation but I don’t know who to contact to keep up with my status ',
      'I live in PERSON_NAME Ms and I moved here with an exsisting child support order from ct I am a single mom and was wondering if I can still get support from my sons father after he turns 18 he is going to north west community college  next month',
      'Well,I hope you can. My ex and I started a case in Tn but she moved to starkville ms when my son was around 4 and just in a year or so has moved to fort PERSON_NAME fl. my son is now 16 will be 17 december 13. I have not seen him in 6 in a half years.',
      'interstate case',
      'Apartment 110 is where you will find him before PERSON_NAME',
      'I am the custodial parent and child support order was established in Texas. The non custodial parent now resides in Mississippi. Who is now responsible for handeling enforcement? ',
      ' how to transfer my case from West Memphis Arkansas to Mississippi',
      'I am a custodial parent in Alabama and the biological father lives in Mississippi, I am trying to get a modification since the amount has not changed for the past 10 years ',
      'Transferring a case fromTeas',
      'How do I transfer to another county',
      "I have a question.  Currently I pay child support  on my son.  I pay through the state of Texas, as I live in Texas.  He now lives in Mississippi.  Does it ever transfer over to y'all?",
      'Who is this for my kids live in Indiana',
      'Original order from Missouri in DIGITS. Lived in Mississippi last 13 years with child. Need to apply for adjustment in Mississippi. ',
      'Transfer case to adult child from deceased parent',
      'Can they base my child support out of a state I do not live in',
      'I am trying to see when you receive child support that was intercepted by the state. ',
      'my child is in Wisconsin so support is sent to MS and MS sends to Wisconsin last month i sent in 439 and only 400 was sent to WI',
      'My husband lives in Mississippi and I live in West PERSON_NAME. I am filing to collect child support from him',
      "I am the custodial parent.  I live in South PERSON_NAME and my child's mother lives in MS and works for the National Guard.  There is a court order that she signed to pay child support and she does not pay the entire amount and she is late most of the time. ",
      'What laws I have to fallow Mississippi or Puerto PERSON_NAME',
      "Does Mississippi get involved in a child support case that's wasnt developed in the state",
      "I'm trying to reach the State distbustment unit",
      'I recieved a letter stating I have been named the father of a child in Mississippi but have never been to Mississippi, and the address does not match what your contact info states. Is this fraud?',
      'Im moving from Michigan to Mississippi my ex pays child support thru state of Michigan how can i get that changed to Mississippi',
      'I live in PERSON_NAME but the non custodial lives in Mississippi. We have a case in ga how will I get my child support?',
      'I would like my case transferred to PERSON_NAME State as me and the father of my child both reside in PERSON_NAME State now.',
      'I am the custodial parent but live in a different state. should I register in this system seeing the non custodial lives in MS ',
      'Have a question about Mississippi child support ',
      'How does child support work in the event that the custodial parent is out of state? ',
      'i have an open case ibut I moved to a new county',
      'I have been aproved for am increase in a child support case I relocated to PERSON_NAME County from PERSON_NAME county  PERSON_NAME county did their part when will i knownanything',
      "I live in fl. My sons father lives in Mississippi. I have a case open here and I'm just trying to see what your state is doing to help",
      "I'm working out of town in PERSON_NAME and am buying a place in Tennessee. So could it be sent here instead? Please and thank you. ",
      'I think I need you to e-mail me an application for opening a child support case.  I was divorced in Florida, but now live in MS and my ex-husband lives in South PERSON_NAME.  He has been paying child support to the Florida Disbursement Unit but quit.',
      'My husband recieved a letter about a child support case in TX but the case is currently open in MS. How do we get the TX case closed? ',
      'Child no longer lives in Mississippi ',
      'My case is supposed to transferred from the state of Indiana to the state of Mississippi and I’m wondering how long that process takes before I’ll start getting child support ',
      'I leave in texas and my sons dad in Mississippi I need to know my rights',
      'My child support case has been closed but I am told in my home state that I can have it reopened?',
      'From Louisiana and I move here',
      "I am curious if I can have my ex's wages garnished for Child Support.  I do not believe he is paying the minimum required by the state.  We made an agreement when we divorced, but he did not have a steady job at the time.  ",
      'Hi  I am trying to find the Mississippi child support statutes. Can you tell me what to look under?',
      'Enforcement of Mississippi order',
    ],
    contexts: [
      { name: 'waiting-restart-conversation', count: 7 },
      { name: 'waiting-yes-child-support', count: 6 },
      { name: 'waiting-not-child-support', count: 6 },
      { name: 'waiting-open-csc-location-services', count: 5 },
      { name: 'waiting-open-csc-employer-payments', count: 5 },
      { name: 'waiting-maps-deliver-map', count: 4 },
      { name: 'waiting-open-csc-full-services', count: 4 },
      { name: 'waiting-feedback-root', count: 3 },
      { name: 'waiting-acknowledge-privacy-statement', count: 2 },
      { name: 'payment-factors', count: 2 },
      { name: 'waiting-support-revise-issue', count: 1 },
      { name: 'waiting-support-submit-issue', count: 1 },
      { name: 'ticketinfo', count: 1 },
      { name: 'waiting-support-parent-paying-more', count: 1 },
      { name: 'waiting-caseqa-general-support-request', count: 1 },
      { name: 'waiting-support-type', count: 1 },
      { name: 'waiting-support-employment-status', count: 1 },
      { name: 'waiting-open-csc-select-form', count: 1 },
      { name: 'waiting-open-csc-no-service', count: 1 },
    ],
  },
  email: {
    occurences: 62,
    queries: [
      "I've tried to change my email address and it wont accept it.  The email I had on the account I'm not using anymore.  It wont accept my new one., please help",
      'What is the email address for the call center?',
      'No email ',
      'Email address ',
      'Looking for contact information of the director of MS Child Support',
      'Im trying to send my new address and stuff through email',
      'Can you give me the email address for the call center? ',
      'may i have a email address to send over my court order. i keep sending it this one and since march no one will call EMAIL_ADDRESS',
      'No email',
      'No email',
      'Email',
      'Need to provide information via email',
      'email address for hinds county dhs',
      'no email',
      'no email ',
      'I need an email address ',
      'What format does email need to be in on forms',
      'where can I email the Request for information?',
      'What is the email address for withholding forms',
      'Need email for submitting new address. ',
      'Email documents',
      'Email for call center ',
      'Child Support Center email',
      'Email address?',
      'What email address do I need to upload documents. To prove my identity ',
      'Do you have their email address? ',
      'No email',
      'Is there a way I can email my caseworker ',
      'Email',
      'Can I get the information sent to my email address',
      'PHONE_NUMBER or you can email me',
      'Email',
      'I need the email address ',
      'Email real person',
      'Got a letter in mail',
      'Could you please give me the email address that I need to use to email in a change of address?',
      'I need to email something to the child support department. No one specific. What is the email address. I have EMAIL_ADDRESS but it rejects.',
      'send an e-mail',
      'email contacts',
      'Email address ',
      'Hi I need an email address to send my drivers license n current address to receive my child support payment',
      'PERSON_NAME Straight Jr Phone number PHONE_NUMBER Case number  613673539A email EMAIL_ADDRESS',
      'WHAT IS THE EMAIL ADDRESS TO CHANGE ADDRESS INFORMATION',
      'I need the call center email address so I can change my home address ',
      'email',
      'is there an email address',
      'Email address for the call center ',
      'Wrong email address they gave me',
      'Email address to mdhs',
      'please email a form for petition to reduce child support ',
      'Need an email for K PERSON_NAME ',
      'IS there an email address I can send application form to ? ',
      'What is the email for child support change address ',
      'My email is better to reach me',
      'Where do I send it when it’s done ',
      'email address to send a change of address too?',
      'Hello can i get the msds call center email im trying to send a email of my up to date address',
      'is there an email address?',
      'email for disbursement unit in PERSON_NAME, MS?',
      'Can you email it to me',
      'do I apply by email or what',
      'My email',
    ],
    contexts: [
      { name: 'ticketinfo', count: 12 },
      { name: 'waiting-restart-conversation', count: 11 },
      { name: 'waiting-feedback-root', count: 11 },
      { name: 'waiting-not-child-support', count: 7 },
      { name: 'waiting-support-no-email', count: 7 },
      { name: 'waiting-support-email', count: 7 },
      { name: 'waiting-yes-child-support', count: 7 },
      { name: 'waiting-support-type', count: 2 },
      { name: 'waiting-support-parent-paying', count: 2 },
      { name: 'waiting-support-phone-number', count: 2 },
      { name: 'waiting-support-no-phone-number', count: 2 },
      { name: 'waiting-support-parent-receiving', count: 2 },
      { name: 'waiting-support-employer', count: 2 },
      { name: 'waiting-eppi-fees', count: 1 },
      { name: 'request-type', count: 1 },
      { name: 'waiting-iwo-no-assistance', count: 1 },
      { name: 'waiting-iwo-faqs', count: 1 },
      { name: 'waiting-iwo-wants-assistance', count: 1 },
      { name: 'waiting-eppi-notifications', count: 1 },
      { name: 'waiting-support-restart', count: 1 },
      { name: 'waiting-feedback-helpful', count: 1 },
      { name: 'waiting-eppi-activate', count: 1 },
      { name: 'waiting-eppi-get-card', count: 1 },
      { name: 'waiting-eppi-replace-report', count: 1 },
      { name: 'waiting-support-cancel-issue', count: 1 },
      { name: 'waiting-support-general-inquiries', count: 1 },
      { name: 'waiting-eppi-faq', count: 1 },
      { name: 'waiting-appts-office-locations', count: 1 },
      { name: 'waiting-appts-guidelines', count: 1 },
      { name: 'waiting-appts-schedule', count: 1 },
      { name: 'waiting-support-retry-phone-number', count: 1 },
      { name: 'waiting-support-handle-email-retry', count: 1 },
      { name: 'waiting-open-csc-location-services', count: 1 },
      { name: 'waiting-open-csc-employer-payments', count: 1 },
      { name: 'waiting-open-csc-full-services', count: 1 },
      { name: 'waiting-support-revise-issue', count: 1 },
      { name: 'waiting-support-submit-issue', count: 1 },
      { name: 'requests', count: 1 },
      { name: 'waiting-dirdep-learn-more', count: 1 },
      { name: 'waiting-dirdep-confirm-form', count: 1 },
      { name: 'waiting-pmtmethods-debit-card', count: 1 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
      { name: 'waiting-feedback-not-helpful', count: 1 },
    ],
  },
  'open case': {
    occurences: 59,
    queries: [
      'A parent who wishes to put my self on child support',
      'I’m looking for information on how to qualify for q m b program ',
      'How to start a child support case',
      'How do u get MDHS full services',
      'How do you get MDHS services',
      'How do you notify someone when their child support will begin coming in?',
      'Trying to get my case open...',
      'How to I start the process',
      'I would just like to know how to receive information on helping this parent begin the process of receiving child support.',
      'How to start a child support case?',
      'Trying to put someone on child support',
      'If the birth certificate was signed by the father, do I still need full services? ',
      'Start new child support case ',
      'Looking for the form I need to fill out to open a case.',
      'Do you have to go to the office to apply or can it be done online?',
      'how to set up an account to recieve child support from my spouse',
      'can i file for a case online?',
      'What can be done if so filed child support but never received court date',
      'i want to start a case to put my PERSON_NAME father on child support',
      'I’m trying to get a case switch over ',
      'What services can i get if my PERSON_NAME fatheris4',
      'Can an application be done online?',
      'reopening an old case',
      'how can i get a child support service form',
      'I’m trying to get child support for my 12 year old daughter.',
      'Do I have to wait until my baby gets here to file a case',
      'file a new case',
      'Sing up for Childsupport ',
      'I want to start getting child support on my baby from her father ',
      'How old does the child have to be in order to apply?',
      'open new case',
      'I would like to know how can I start a new child support case? ',
      "I'm tryna to figure out how to get child vistation rights",
      'Can you get child support if you are married ',
      'Trying to get my passport is this possible',
      'How do I get child support',
      'How to get child support',
      'Can I get Child support if the father and I live together?',
      'Can I get child support if t',
      'How do I set this up? I have a divorce decree that states he has to pay me on the first but did not say he had to go through MDHS',
      'How long does it take to start a case',
      'how do I add an infant',
      'I have a case open on my daughter. I just had my done 6/3/19. Can I add him to that’s case or do I need to fill out a new application for him ',
      "I'm trying to see how can I get my case reopened so I can apply for medicaid",
      'Can I file online',
      'I need to open a case against my ex husband and need to know how ',
      'Setup a case',
      'Yes how fast does it take to get the process started',
      'Do both parents have to be present to take the father off of child support or can the mother do it by herself? ',
      'how to apply',
      'can grandparents get child support',
      'can anyone get child support',
      'how do i get child support',
      'How much is it to start a case',
      'How long after opening a case does it usually take to hear something regarding the case?',
      'Can you receive child support if yourarried',
      'I’m trying to get information in absent parents ',
      'How do I start a case and what is needed ',
      'can you apply online?',
    ],
    contexts: [
      { name: 'waiting-yes-child-support', count: 14 },
      { name: 'waiting-not-child-support', count: 14 },
      { name: 'waiting-open-csc-location-services', count: 8 },
      { name: 'waiting-open-csc-employer-payments', count: 8 },
      { name: 'waiting-feedback-root', count: 7 },
      { name: 'waiting-restart-conversation', count: 7 },
      { name: 'waiting-open-csc-no-service', count: 4 },
      { name: 'waiting-open-csc-select-form', count: 4 },
      { name: 'waiting-open-csc-full-services', count: 4 },
      { name: 'waiting-support-type', count: 2 },
      { name: 'waiting-maps-deliver-map', count: 2 },
      { name: 'waiting-acknowledge-privacy-statement', count: 2 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 1 },
      { name: 'request-type', count: 1 },
      { name: 'waiting-support-parent-paying', count: 1 },
      { name: 'waiting-appts-office-locations', count: 1 },
      { name: 'waiting-support-employer', count: 1 },
      { name: 'waiting-appts-schedule', count: 1 },
      { name: 'waiting-support-parent-receiving', count: 1 },
      { name: 'waiting-support-parent-receiving-more', count: 1 },
      { name: 'waiting-eppi-faq', count: 1 },
      { name: 'waiting-eppi-notifications', count: 1 },
      { name: 'waiting-eppi-fees', count: 1 },
      { name: 'waiting-eppi-activate', count: 1 },
      { name: 'waiting-eppi-replace-report', count: 1 },
      { name: 'waiting-eppi-get-card', count: 1 },
      { name: 'waiting-pmtmethods-debit-card', count: 1 },
      { name: 'waiting-pmtmethods-cant-make', count: 1 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 1 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 1 },
      { name: 'waiting-pmtmethods-cash', count: 1 },
      { name: 'waiting-appts-guidelines', count: 1 },
    ],
  },
  'account information': {
    occurences: 58,
    queries: [
      "i don't have a username",
      'Is there anyway you can Have somebody come out here her name is PERSON_NAME',
      'I dont have my account number',
      'Can you tell me how to set up an online account',
      "It's not set up on neither of my accounts ",
      'I said SSN',
      'What’s the name of the app I can download to see when I get payments ',
      'My name is tierrus Parker ',
      'I dont have his ssn',
      'I would like to know what app name for child support pay online ?',
      'Look up current account ',
      'Whats the number to check your post date of your funds in ms',
      'when was the last deposit posted to my account',
      'How can I check my online information ',
      'How to login to my case',
      'who are you',
      "What is the child support number that I can use to see if anything is posted on my son's account when there are multiple children on one case ",
      'I need to know if I’m done with making payments to child support ',
      'Where do I find my next payment amount and date',
      'I already get direct deposit... I was trying to see was there a way to check online to see when was my last payment made',
      'Is the family group number the same thing as case number?',
      'What address is on file ',
      'Are they canceling bank plan for child support in the PERSON_NAME county in PERSON_NAME Mississippi',
      'my name is elvin leahman III  ss# DIGITS',
      'How to view statements onlibe',
      'How can I view letters that were sent from my case worker',
      'how do i get info about my case',
      'How do I close my case',
      'I had the case number to my account how can I check it ',
      'I want to know when was the last payment made on my case ',
      'I wanted to see if there was an online account that I could look at for my case',
      'How to view bill',
      'how can I  close my case?',
      "I'm trying to see if my account is up to date",
      'How can I locate my account number',
      'how can I the routing number to pay my child support with out having to set up a garnishment and how  will the account number be the case number',
      'Is there a website to view my case?',
      'What time do you post it on the account ',
      'I need to know my in arrears balance and when the last payment was made and my case workers name',
      'Do you have to have a case number for the eCheck/bank account debit?',
      'How do I see my case file, where do I go?',
      'need to know were yo pull up my cases',
      'I am the person that will receive the payments',
      'How much do I get in child support',
      'how much should i get in child support  ',
      'How do I log in to see my childsuport case?',
      'What is my caseworker name ',
      'I am inquiring about my case ',
      'My name is PERSON_NAME and my son name PERSON_NAME and the father name PERSON_NAME. I need to talk to some one because I have found out we’re my son dad is working. And I what to know what going on with my case. My number isPHONE_NUMBER ',
      'who is my caseworker',
      'How can I see my case?',
      "I have a question about my case but don't know how to directly get in contact with my case worker ",
      'Is there anything pending to my account ',
      'How can I see my case online',
      "How do I find out if my child's father is on child support for my child?",
      'Can you tell me when that last payment was made?',
      'By giving you the case number, can I find out which child the money is for? My husband isn’t here and I need if this is the right one ',
      'Can u tell me if i have anything  pending ',
    ],
    contexts: [
      { name: 'waiting-yes-child-support', count: 12 },
      { name: 'waiting-not-child-support', count: 12 },
      { name: 'waiting-restart-conversation', count: 10 },
      { name: 'waiting-feedback-root', count: 8 },
      { name: 'waiting-pmtmethods-debit-card', count: 3 },
      { name: 'waiting-open-csc-location-services', count: 3 },
      { name: 'waiting-open-csc-full-services', count: 3 },
      { name: 'waiting-support-parent-receiving', count: 2 },
      { name: 'waiting-support-employer', count: 2 },
      { name: 'waiting-support-parent-paying', count: 2 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 2 },
      { name: 'waiting-pmtmethods-cant-make', count: 2 },
      { name: 'waiting-pmtmethods-cash', count: 2 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 2 },
      { name: 'waiting-open-csc-employer-payments', count: 2 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 2 },
      { name: 'waiting-acknowledge-privacy-statement', count: 2 },
      { name: 'waiting-open-csc-select-form', count: 2 },
      { name: 'waiting-open-csc-no-service', count: 2 },
      { name: 'waiting-support-type', count: 2 },
      { name: 'waiting-eppi-faq', count: 1 },
      { name: 'waiting-eppi-fees', count: 1 },
      { name: 'waiting-eppi-notifications', count: 1 },
      { name: 'waiting-eppi-activate', count: 1 },
      { name: 'waiting-eppi-get-card', count: 1 },
      { name: 'waiting-eppi-replace-report', count: 1 },
      { name: 'waiting-dirdep-learn-more', count: 1 },
      { name: 'waiting-dirdep-confirm-form', count: 1 },
      { name: 'waiting-dirdep-no-learn-more-eppicard', count: 1 },
      { name: 'waiting-dirdep-learn-more-eppicard', count: 1 },
      { name: 'waiting-caseqa-general-support-request', count: 1 },
      { name: 'waiting-support-parent-paying-more', count: 1 },
      { name: 'waiting-appts-office-locations', count: 1 },
      { name: 'waiting-appts-guidelines', count: 1 },
      { name: 'waiting-appts-schedule', count: 1 },
      { name: 'waiting-feedback-helpful', count: 1 },
      { name: 'waiting-feedback-not-helpful', count: 1 },
      { name: 'waiting-support-restart', count: 1 },
      { name: 'waiting-support-general-inquiries', count: 1 },
      { name: 'waiting-support-employment-status', count: 1 },
      { name: 'waiting-maps-deliver-map', count: 1 },
    ],
  },
  verification: {
    occurences: 57,
    queries: [
      'child support verification form',
      'Verification ',
      'i need a MS verification form',
      'I am receiving child support for 3 kids and I need proof of how much the payment is',
      'How do I get a Mississippi Verification for Child Support Services form.',
      'Verification letter',
      'Income verification ',
      'Who do i need to notify to obtain a MS verification of child support service form. ',
      'Providing proof',
      'How do I get my childrens father to verify income',
      'Verification Letter',
      'What is a Mississippi child support verification form',
      'a Mississippi Verification for Child Support Services form',
      'Where do I get a Mississippi verification for child support form?',
      'Statement ',
      'Request form that says the parent receive payments',
      'I am trying to get my payments for the last two months for verification for SNAP',
      'Child support verification forms ',
      'I need Mississippi Verification of Child Support Form ',
      'Houseing income verification',
      'Child support enforcement cooperation verification request form',
      'Mississippi verification for child support services form',
      'Verification letter ',
      'Is there a way I can see some that states what I recieve for child support',
      'Mississippi child support verification form',
      'verification form',
      'Mississippi verification for child support services form',
      'Could I get a verification form from either location ',
      'I need a form to verify that I receive child support for my child.',
      'I need to get a print out of my child support case and verification for the past 3 months   ',
      'I need a Child Suport Verification Dorm for daycare',
      'How do i get a Mississippi Verification for Child Support Services form.\n',
      "I need verification that I don't receive any child support ",
      'Just need verification that I am receiving child support ',
      'How do I go about getting a verification of child support form?',
      'Child support verification form ',
      'I need a MS Child Support Verification form',
      'I print out for verification ',
      'Verification of income ',
      'I need a child support verification form',
      'Statement',
      'Statement ',
      'Mississippi verification form',
      'verification print off',
      'Verification of service paper ',
      "I'm trying to get some kind of verification",
      'how can i get proof of child support being received',
      'proof of childsupport',
      'Verification that I don’t have an open case',
      'how do i get verification of child support',
      'I need a ms verification of child support enforcement form',
      'Proof of payment ',
      ' How do I know if the other parent has paid?',
      'How do I get proof of compliance with child ',
      'This is PERSON_NAME an am trying to get print out of my childsuppurt. Cause i need that information for a house am trying to get PHONE_NUMBER i been call back to back an can not get any one onlie ',
      'Can I get a form stating how much child support I should be getting ',
      'statement',
    ],
    contexts: [
      { name: 'waiting-yes-child-support', count: 18 },
      { name: 'waiting-not-child-support', count: 18 },
      { name: 'waiting-support-type', count: 8 },
      { name: 'waiting-open-csc-location-services', count: 5 },
      { name: 'waiting-support-general-inquiries', count: 5 },
      { name: 'waiting-open-csc-employer-payments', count: 4 },
      { name: 'waiting-open-csc-select-form', count: 3 },
      { name: 'waiting-open-csc-no-service', count: 3 },
      { name: 'waiting-open-csc-full-services', count: 3 },
      { name: 'waiting-support-employer', count: 2 },
      { name: 'waiting-pmtmethods-debit-card', count: 2 },
      { name: 'waiting-feedback-root', count: 2 },
      { name: 'waiting-restart-conversation', count: 2 },
      { name: 'waiting-support-parent-paying', count: 2 },
      { name: 'waiting-support-parent-receiving-more', count: 2 },
      { name: 'waiting-support-parent-receiving', count: 2 },
      { name: 'waiting-pmtmethods-cash', count: 1 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 1 },
      { name: 'waiting-pmt-calc-unknown-income', count: 1 },
      { name: 'ticketinfo', count: 1 },
      { name: 'waiting-pmt-calc-gross-income', count: 1 },
      { name: 'payment-factors', count: 1 },
      { name: 'waiting-pmtmethods-cant-make', count: 1 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 1 },
      { name: 'waiting-maps-deliver-map', count: 1 },
      { name: 'waiting-support-restart', count: 1 },
      { name: 'waiting-dirdep-no-learn-more-eppicard', count: 1 },
      { name: 'waiting-dirdep-learn-more-eppicard', count: 1 },
      { name: 'waiting-support-phone-number', count: 1 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 1 },
    ],
  },
  'case number': {
    occurences: 50,
    queries: [
      'How do can I find my case number?',
      'How to contact your case manager',
      'How to get case number',
      'How can I find out my case id',
      'case #',
      'find my case',
      'yes i need my case numbetr',
      'Case number ',
      'How do I found out my case number',
      'How to find my cas e number\n',
      'Trying to find case # so can make payment',
      'Case numbers ',
      'case ID',
      'How do i obtain my case number?',
      'Another case DIGITS',
      'Case number: 619937341A',
      'Case number ',
      'Case # DIGITS',
      'Find case number',
      'Case number# 619876970A',
      'where do i find the case number',
      'Can I have my case number ',
      'How to locate case number ',
      'Case number DIGITS',
      'Case ID',
      'Case number ',
      'How can I find my case number ',
      'i am needing to get ahold of case worker PERSON_NAME garner',
      'How can I find my case number',
      'Case #DIGITS ',
      'case number DIGITS',
      'How can I get the case number ',
      'Case number ',
      'case # DIGITS',
      'Trying to find my case number ',
      "I cant find my case number'",
      'How do I find my case number',
      'Need my case number',
      'Case number ',
      'Case number ',
      'How do I find my case number ',
      'child support case number DIGITS ',
      'case # BZ62990R1',
      'How do I get my case number',
      'Find case',
      'How do I get my case number?',
      'Im trying to pay child support i dont know my mets id case number',
      'Where can I find my case number to register online?',
      'I have a case against PERSON_NAME but do not know the case number',
      'I’m trying to figure out what my case number is!',
    ],
    contexts: [
      { name: 'waiting-not-child-support', count: 12 },
      { name: 'waiting-yes-child-support', count: 12 },
      { name: 'waiting-feedback-root', count: 10 },
      { name: 'waiting-restart-conversation', count: 8 },
      { name: 'waiting-open-csc-full-services', count: 4 },
      { name: 'waiting-open-csc-employer-payments', count: 4 },
      { name: 'waiting-open-csc-location-services', count: 4 },
      { name: 'waiting-support-type', count: 3 },
      { name: 'waiting-pmtmethods-cash', count: 2 },
      { name: 'waiting-support-general-inquiries', count: 2 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 2 },
      { name: 'waiting-support-cancel-issue', count: 2 },
      { name: 'waiting-pmtmethods-cant-make', count: 2 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 2 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 2 },
      { name: 'waiting-support-revise-issue', count: 1 },
      { name: 'requests', count: 1 },
      { name: 'ticketinfo', count: 1 },
      { name: 'request-type', count: 1 },
      { name: 'waiting-support-submit-issue', count: 1 },
      { name: 'waiting-support-restart', count: 1 },
      { name: 'waiting-support-employment-status', count: 1 },
      { name: 'waiting-iwo-no-assistance', count: 1 },
      { name: 'waiting-iwo-faqs', count: 1 },
      { name: 'waiting-iwo-wants-assistance', count: 1 },
      { name: 'waiting-support-parent-receiving-more', count: 1 },
    ],
  },
  'support inquiries': {
    occurences: 50,
    queries: [
      'My kids father moved out of town and dont help me at all',
      'I want to review my case information and I am being told by the father that I have to be in court in Mississippi.',
      'I am a Housing provider and need the email address to verify benifits for a Resident at my property',
      'General request ',
      'Child support is coming out of my civilian employers check. Why is MDHS trying to also take it out of my national guard check?',
      'how do I check if I have overpaid ',
      'Who can ask for an review',
      'can you add my wife to case in case im unable to talk at that time?',
      "I haven't had a raised since DIGITS and I only gets 236 a month and the dad has a good job. What do I do I've already requested a raise and the dad said that he have a letter so what does that means ",
      'My ex husband has been fired and I need to know if/how many funds are remaining to be dispersed to me. ',
      'How do I pursue further action on my case?',
      'No.  I need an account statement mailed to me.',
      "Why are y'all taking so much out of my check",
      'My case was terminated but you all still talking money out my check why.',
      'Removing an item off my credit file',
      '103 PERSON_NAME a  bland ed',
      'How to I report a change in the childcare amount? ',
      "I can not understand why was my driver's license was suspended when I am not behind",
      'When should I update my income increase with child support ',
      'income withhold',
      'If me and my child’s father aren’t married, does he still go on child support?',
      'you can also speak with my wife PERSON_NAME',
      'I WAS TRYING TO SEE HOW CAN A REMOVE A NAME OFF MY CHILD SUPPORT CASE. THE GUY GAVE ME THE WRONG NOW AND NOW I HAVE THE CORRECT NAME',
      'Can you confirm whether checks from Absolute Fire Control for CASE#DIGITS dated 4/26/19 and 6/7/19 were ever received? I suspect that they were lost in the mail.',
      "My husband owes child support in the rears we are working out a deal to clear that can I do that one-on-one with him or do we have to go through y'all",
      'I applied for food stamps and the office said I was not compliant with child support so I would not be able to receive benefits but my kids still could. Is there anyway to change my status of compliance with child support ',
      "I found out today that my son's father recieved cs papers.   I was working on the papers, but hadn't finished them.   Could my snap caseworker have done the papers maybe? ",
      'Who do we contact to inquire about lump sum payments',
      'if I’m making payments why were my license suspended?',
      'Suspended license',
      'I was wondering if child support is adjusted if i have another child with my now wife?',
      'Can the agency debit my husband checking account for back support without letting him know in writing',
      'My license have been suspended',
      'I was wondering how far behind does an absent parent have to be before license are suspended and passport revoked? ',
      'How do I get an official audit review of my case',
      'THIRD PARTY CREDIT REPORTING AGENCY',
      'Getting in compliance with child support ',
      'who has custody when no papers are signed and parents are not married?',
      'I have a question concerning child support',
      'How is child support figured if I have two children in my household and my son lives with his mom? Would that hurt my two children that live in my home with a large amount of income being taken out of my check or would they be taken into consideration ',
      'Trying to see why am I only getting $30 a week when I am suppose to be receiving $250 a month',
      'I got a letter sayin that I was complying with Cs but I am n they have threatened to take my kids benefits . I can only give them what I have . ',
      'How can I start getting payments if my spouse is working',
      'Has my driver license been suspended?',
      'well i am legally married; however, my spouse and I have been separated for 2 years',
      'i have a question i am getting paid less than what i used to get paid do i have to take my other party to court or can i just send copy of my paychecks and you can take care of the resertification',
      'Ive been signed up to put my partner on child support but i never heard anything since and its been 4 years',
      'I started a case a few months ago and never heard anything back',
      'I have a notice of income withholding on a man that is no longer working for us.',
      'Is there a faster way to report employee terminations such as email, etc?',
    ],
    contexts: [
      { name: 'waiting-yes-child-support', count: 10 },
      { name: 'waiting-not-child-support', count: 10 },
      { name: 'waiting-support-employer', count: 3 },
      { name: 'waiting-support-parent-paying', count: 3 },
      { name: 'waiting-support-parent-receiving', count: 3 },
      { name: 'waiting-support-type', count: 2 },
      { name: 'waiting-pmtmethods-debit-card', count: 2 },
      { name: 'waiting-acknowledge-privacy-statement', count: 2 },
      { name: 'waiting-dirdep-no-learn-more-eppicard', count: 1 },
      { name: 'waiting-dirdep-learn-more-eppicard', count: 1 },
      { name: 'waiting-maps-deliver-map', count: 1 },
      { name: 'waiting-pmtmethods-cant-make', count: 1 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 1 },
      { name: 'waiting-appts-not-contacted', count: 1 },
      { name: 'waiting-pmtmethods-cash', count: 1 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 1 },
      { name: 'waiting-support-no-email', count: 1 },
      { name: 'waiting-support-email', count: 1 },
      { name: 'ticketinfo', count: 1 },
      { name: 'waiting-feedback-root', count: 1 },
      { name: 'waiting-restart-conversation', count: 1 },
      { name: 'waiting-support-cancel-issue', count: 1 },
      { name: 'waiting-open-csc-location-services', count: 1 },
      { name: 'waiting-open-csc-employer-payments', count: 1 },
      { name: 'waiting-open-csc-full-services', count: 1 },
      { name: 'waiting-support-general-inquiries', count: 1 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 1 },
    ],
  },
  snap: {
    occurences: 46,
    queries: [
      'food safety',
      'how do i recertify for snap',
      'Food stamps ',
      'Trying to get the code removed from my name so I can get food stamps ',
      'Food Stamps',
      'Food stamp app',
      'snap',
      'Snap app',
      'Snap recertify ',
      'Emergency foodstamp',
      'food stamps',
      'Need my snap benefit printout',
      'How do I know if I’m approved for food stamps ',
      'I want to know if I was approved for food stamps ',
      'Wal-Mart Distribution ',
      ' snap as the cp',
      "I'm try to set up my email for snap ",
      "I'm tryna to renew my snap",
      'Food stamps ',
      'Food stamp',
      'I. trying to reapply for snap benefits',
      'How to reapply for snap online',
      'recertification form for snap',
      'Mdhs food steamps  My app. ',
      'Find the form for food stamps',
      'how do i go by getting my snap benefits back on',
      'Renew food stamps',
      'How do I take me and my child off another food stamps case',
      'Sorry this is about food stamps ',
      'Snap Benifits ?',
      'Foodstamps',
      'i want to also receive food stamps and medicaid ',
      'Food stamp',
      'Foodstamps',
      'Food stamps ',
      'snap requirements',
      'What if I have medicaid or snap',
      'Snap ',
      'I receive food stamps.',
      'Snap benefits ',
      'food stamps',
      'Food stamps',
      'If I receive snap the non custodial parent automatically goes on child support? ',
      'I’m trying to apply for food stamps and tanf',
      'Don i have to put my child’s father on child support to receive food stamps ?',
      'I HAVE THE APPLIACTION BUT I RECIEVE EBT SO HOW DO I GO ABOUT THAT ',
    ],
    contexts: [
      { name: 'waiting-support-employer', count: 10 },
      { name: 'waiting-support-parent-receiving', count: 10 },
      { name: 'waiting-support-parent-paying', count: 10 },
      { name: 'request-type', count: 9 },
      { name: 'waiting-feedback-root', count: 9 },
      { name: 'waiting-open-csc-location-services', count: 7 },
      { name: 'waiting-yes-child-support', count: 7 },
      { name: 'waiting-restart-conversation', count: 7 },
      { name: 'waiting-not-child-support', count: 7 },
      { name: 'waiting-open-csc-employer-payments', count: 6 },
      { name: 'waiting-open-csc-no-service', count: 5 },
      { name: 'waiting-open-csc-select-form', count: 5 },
      { name: 'waiting-open-csc-full-services', count: 3 },
      { name: 'waiting-support-collect-new-employer-phone', count: 1 },
      { name: 'waiting-support-new-employer-unknown-phone', count: 1 },
      { name: 'ticketinfo', count: 1 },
    ],
  },
  legal: {
    occurences: 45,
    queries: [
      'I was served papers for child support yesterday, do I have to go to court or can they start taking the money out of my check ',
      'Contempt court? ',
      'What is the definition of contempt court? ',
      'My ex is regularly deducting old credit card payments in my name that also had his name from my child support. Is this legal?',
      'attorney',
      'i wanted to know if the parents are not able to make court for redetermination will courts proceed or leave the order as is',
      'Legal guardian ',
      'Legal guardian ',
      'I was wanting to know if I had to appear with my kids father to court',
      'laws',
      'Is my ex cooperating with dhs?',
      'My license suspended ',
      'Court ',
      'Hello PERSON_NAME, I have a question about a case after a custodial parent is deceased.',
      'Driver license clearance form ',
      'I have an insurance confusion. My child has two insurances. I need to know if MDHS put in a court order for her dad to carry insurance ',
      "I'm trying to find the building were court is held",
      'attorney general',
      'Court order ',
      'Enforcement ',
      'I have a question about my case dealing with court',
      'court order required? ',
      'Law',
      'I am the custodial parent. Do I have to be in court for my child support hearing?',
      "Do y'all still suspended driver license",
      'When the dhs lawyer said $120.00 did she mean monthly or weekly?',
      'Does child support include chairs care after school? Clothes, extracurricular activities etc?',
      'Enforcement ',
      'How is child support paid through a court order? Does it go through DHS?',
      'I would like to know if a non-custodial parent does not have a court order for visitation, can they use MAV-P services?',
      'dhs court order',
      "i need to pay court cost, i can't find it",
      'Do I have to go to court?',
      'Do I or the non custodial parent have to attend court?',
      'did the attoney get back about my case',
      'Can you tell me how it works when my child’s mother goes thru DHS to collect child support. Will I get served with paperwork when the court order is made?',
      'Do I have to use a private attorney',
      "Will DHS go by what's in our Court Order? As in, will my payment amounts and due dates stay the same?",
      'I have full legal and physical custody, issued by a Court Order. This Order also has a set amount and due date for child support to be paid to me by the noncustodial parent. ',
      'I want to know how I go by getting my court order paper that the father was agreed to pay',
      'If I have a court order from my divorce do I have to change it over to DHS to collect child support?',
      'How can you get sole custody?',
      'Getting sole custody ',
      'finding out a court date',
      'Legal department',
    ],
    contexts: [
      { name: 'waiting-not-child-support', count: 8 },
      { name: 'waiting-yes-child-support', count: 8 },
      { name: 'waiting-feedback-root', count: 4 },
      { name: 'waiting-restart-conversation', count: 4 },
      { name: 'waiting-open-csc-location-services', count: 3 },
      { name: 'waiting-open-csc-full-services', count: 3 },
      { name: 'waiting-open-csc-employer-payments', count: 3 },
      { name: 'waiting-support-type', count: 3 },
      { name: 'waiting-caseqa-general-support-request', count: 2 },
      { name: 'waiting-support-employment-status', count: 2 },
      { name: 'waiting-support-restart', count: 2 },
      { name: 'waiting-support-general-inquiries', count: 2 },
      { name: 'waiting-pmtmethods-debit-card', count: 1 },
      { name: 'waiting-appts-office-locations', count: 1 },
      { name: 'waiting-pmt-calc-num-children', count: 1 },
      { name: 'waiting-support-parent-paying-more', count: 1 },
      { name: 'waiting-appts-schedule', count: 1 },
      { name: 'waiting-maps-deliver-map', count: 1 },
      { name: 'waiting-appts-guidelines', count: 1 },
    ],
  },
  fax: {
    occurences: 39,
    queries: [
      'i just need a fax or email ',
      'I need a fax number to fax information to regarding the info requested to receive another card',
      'Hi I need a fax number for child support services in PERSON_NAME mississippi',
      'do I mail a letter? ',
      'can i fax the apllication in',
      'Please send information via fax to: PHONE_NUMBER ATTN: PERSON_NAME Terlouw - Payroll',
      'Where can I fax in a document ',
      'So can i have the fax number',
      'i Know the one by me i only need a fax number',
      "I'm simply looking for a fax number.",
      'fax number',
      'What is the fax number ',
      'i need a fax number to send in forms',
      'fax number',
      'fax',
      'Fax number ',
      'I am an employer trying to fax Child Support data that was requested and the number on the fax PHONE_NUMBER is not working.  Is there another number I can use?',
      'fax number',
      'Need a fax number to send in my written notice',
      'fax number',
      'can you give me the fax to where to send medical support form ',
      'need fax number',
      'Fax Number',
      'I would like an email or fax to send this to. The case worker is PERSON_NAME Garner. Case PHONE_NUMBER',
      "what's the fax number for Hernando ms",
      'Fax number ',
      'What is the fax number',
      'I just need the Email or Fax Number to send you the letter. ',
      'Fax number for Panola County DHS',
      'What is the fax number for employer information request forms?',
      'WHAT IS YOUR FAX',
      'FAX NUMBER',
      'PHONE_NUMBER IS THIS YOUR FAX FOR EMPLOYERS',
      'Fax # please',
      'may I have the fax number to submit a change of address',
      'Looking for a local fax number in Greenville ms',
      'i am looking for a fax or email to submit a medical insurance support orders for one of my employees.',
      'what is the fax number to send a child support verification form to from a goverment agency',
      'is there a fax number to send information to',
    ],
    contexts: [
      { name: 'waiting-yes-child-support', count: 12 },
      { name: 'waiting-not-child-support', count: 12 },
      { name: 'waiting-support-type', count: 6 },
      { name: 'waiting-feedback-root', count: 5 },
      { name: 'waiting-restart-conversation', count: 4 },
      { name: 'waiting-support-general-inquiries', count: 3 },
      { name: 'waiting-open-csc-full-services', count: 2 },
      { name: 'waiting-open-csc-employer-payments', count: 2 },
      { name: 'waiting-support-restart', count: 2 },
      { name: 'waiting-maps-deliver-map', count: 1 },
      { name: 'waiting-support-cancel-issue', count: 1 },
      { name: 'waiting-support-employer', count: 1 },
      { name: 'waiting-support-no-phone-number', count: 1 },
      { name: 'waiting-open-csc-select-form', count: 1 },
      { name: 'waiting-open-csc-no-service', count: 1 },
      { name: 'waiting-support-phone-number', count: 1 },
      { name: 'waiting-support-parent-paying', count: 1 },
      { name: 'payment-factors', count: 1 },
      { name: 'waiting-support-parent-receiving', count: 1 },
      { name: 'waiting-open-csc-location-services', count: 1 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
      { name: 'waiting-support-employment-status', count: 1 },
    ],
  },
  login: {
    occurences: 33,
    queries: [
      'Log in',
      'forgot log in ingormation',
      'Login',
      'Re activate my account',
      'I can’t log into my account. There is a charge in my card that takes place every month that I don’t know anything about.',
      'login',
      'Online site to login',
      'How to go online and access my account ',
      'I receive child support is there any way I can review my account online?',
      'I forgot my mdhs login information',
      "No can't access 😢",
      'Is there a parent portal where I can login to view activity on my case?',
      'How can i get my account information ',
      'I cannot get the payment portal to load...',
      "I'm trying to get in my account online but I've been lock out",
      'Online - link broken',
      'Why is my account over draft ? ',
      'Log in',
      'Online login ',
      'Login',
      'log in ',
      'Where do I find it?  Apparently my email add and password have expired.',
      'Neither. How do I access my account? ',
      'How can I get into my account? ',
      'trying to look up my  account',
      'How can I get help with login information on the EppiCard website?',
      'I have the EppiCard and am unable to get help with the website and logging in to look at my balance and transactions.  When I try to set up the login the information it keeps rejecting everything.  ',
      'Is there not a site i can access child support info ',
      "I can't access the ipay",
      'I am just trying to see why I cannot log into my account to pay child support',
      'Sign in to check my account ',
      'How to log in ipay',
      'Cant log in',
    ],
    contexts: [
      { name: 'waiting-yes-child-support', count: 10 },
      { name: 'waiting-not-child-support', count: 10 },
      { name: 'waiting-restart-conversation', count: 5 },
      { name: 'waiting-pmtmethods-debit-card', count: 4 },
      { name: 'waiting-feedback-root', count: 2 },
      { name: 'waiting-support-cancel-issue', count: 1 },
      { name: 'waiting-dirdep-change', count: 1 },
      { name: 'waiting-dirdep-start', count: 1 },
      { name: 'waiting-dirdep-stop', count: 1 },
    ],
  },
  'online action': {
    occurences: 31,
    queries: [
      'Can I submit this online',
      'Can I fill out child support paperwork online ',
      'online',
      'can i submit documents on the website',
      'Can I view this online',
      'Thank you. Is there any way that I may be able to review the information online, ',
      'Website ',
      'can i have the link to do it online',
      'Online child support service',
      'Do you have a way for a person to access that information online',
      'can i set up an account online?',
      'how do i get this shit with you off the screen so i can look at the site?',
      'Can i check it online',
      'Information',
      'Online status',
      'Information ',
      'Can I view my case online?',
      'website for childsupport',
      'Online',
      'close page',
      'where do I send completed documents?',
      'Log on ',
      'Website assistance ',
      'Website is not working to process bank withdrawal information ',
      "I am already registered and set up on ipayonline. I had to do a reset password but I don't see where I can change the password to something I can remember",
      'how do I acquire information via online concerning my case?',
      "NOW I HAVE AN EPPICARD ACCOUNT. ISN'T THERE A WAY TO LOOK FROM MDHS'S SITE?",
      'View child support order online ',
      'Trying to setup online account',
      'Child support web-based bills',
      "I'm trying to get to where I can view my child support letters online.",
    ],
    contexts: [
      { name: 'waiting-yes-child-support', count: 9 },
      { name: 'waiting-not-child-support', count: 9 },
      { name: 'waiting-feedback-root', count: 7 },
      { name: 'waiting-restart-conversation', count: 7 },
      { name: 'waiting-open-csc-employer-payments', count: 2 },
      { name: 'waiting-open-csc-full-services', count: 2 },
      { name: 'waiting-open-csc-location-services', count: 2 },
      { name: 'waiting-support-cancel-issue', count: 1 },
      { name: 'waiting-pmt-calc-num-children', count: 1 },
      { name: 'waiting-dirdep-savings', count: 1 },
      { name: 'waiting-dirdep-checking', count: 1 },
      { name: 'waiting-support-parent-receiving-more', count: 1 },
      { name: 'waiting-support-type', count: 1 },
    ],
  },
  'change employment information': {
    occurences: 25,
    queries: [
      'How do you report change of job for paying parent?',
      'I lost my job',
      'What if employer is not taking out check',
      'I need to update place of employment ',
      'I need to add an employer address and contact number to a case',
      'change jobs',
      'I need to put in my job information ',
      'Notify of employment change',
      'Changed jobs',
      'I need to turn in a new job for the mother who I have filed against',
      '1 he just got a new job when will I see payments ',
      'i lost my job and was trying to get in contact with my case worker',
      'Can I get the form needed online to take to may employer to have child support deducted from my paycheck. I have started a new job.',
      'Got a new job and need withholding  order for new job',
      'I lost my job.',
      'i lost my job',
      'give you my employer name and address',
      'I’m trying to get wages garnished from his new job',
      'Trying to set up child support to be taken out of my check at my new job',
      'how can i reach a person to give them my new empoler information?',
      'I need to switch my job on my case to the new one ',
      'Report change of employment ',
      'I would like to find out if my ex-husbands newest paycheck information from East PERSON_NAME University has been received.',
      'Yes I just got switched to every two weeks pay and I need to get new paperwork sent to me so I can adjust that coming out of my paycheck',
      'Change of Employment Status',
    ],
    contexts: [
      { name: 'waiting-not-child-support', count: 5 },
      { name: 'waiting-yes-child-support', count: 5 },
      { name: 'waiting-iwo-no-assistance', count: 2 },
      { name: 'waiting-iwo-faqs', count: 2 },
      { name: 'waiting-iwo-wants-assistance', count: 2 },
      { name: 'waiting-feedback-root', count: 2 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 2 },
      { name: 'waiting-pmtmethods-cash', count: 2 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 2 },
      { name: 'waiting-restart-conversation', count: 2 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 2 },
      { name: 'waiting-pmtmethods-cant-make', count: 1 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
      { name: 'ticketinfo', count: 1 },
      { name: 'waiting-pmtmethods-cant-make-qualifying', count: 1 },
      { name: 'waiting-pmt-calc-income-term', count: 1 },
      { name: 'waiting-dirdep-learn-more', count: 1 },
      { name: 'waiting-dirdep-confirm-form', count: 1 },
    ],
  },
  'info about parent': {
    occurences: 23,
    queries: [
      'Other parent changed jobs',
      'My kids father switched jobs. How do i report his current job now',
      'When the dad change jobs who to report it to ',
      'In my system they have the same custodial parent but different case numbers, Please advise',
      'How do you report a child in danger, annoymously?',
      'My sons Father has informed me that he no longer is employed. I didn’t know if I should notify you all or what?',
      'Report income of non custodial parent ',
      'How do I report income for a non-custodial parent?',
      'No, my child’s father got a new job about a month ago. I just wondered how long will it take for child support to start back. He has notified them about his job change. ',
      "Okay! My child's father will be receiving more than his monthly salary starting this month. How can I report that? ",
      'I haven’t received any payments, since absent parent moved from another state and has started a new job.',
      'How can get new information to my case worker on the absent father',
      ' I have the name of where the other parent is employed at',
      'Major changes in the father, ',
      "I got custody of my grandson 8 yrs ago and major changes have been made with the father. He's had 2 other children, married and making more money, ",
      'I am the non custodial parent ',
      'Job information about the non custodial parent',
      'How do I report a new job for noncustodial parent',
      'Trying to update my case worker with the non-custodial parents new employment. ',
      'I am the non custodial parent',
      'Yes I’m here to report an employmer for my kids father',
      'My husband started a new job and I need to know where to tell his employer to mail the child support payments that he deducts from his payroll check',
      'How do I report where my ex-husband is working so the process can get started on child support going again?',
    ],
    contexts: [
      { name: 'waiting-pmtmethods-debit-card', count: 5 },
      { name: 'waiting-yes-child-support', count: 5 },
      { name: 'waiting-not-child-support', count: 5 },
      { name: 'waiting-restart-conversation', count: 3 },
      { name: 'waiting-feedback-root', count: 2 },
      { name: 'request-type', count: 1 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
      { name: 'waiting-dirdep-learn-more', count: 1 },
      { name: 'waiting-dirdep-confirm-form', count: 1 },
    ],
  },
  fee: {
    occurences: 23,
    queries: [
      'What am i paying 25 dollars for? ',
      'do I pay 25 dollars if I reciev',
      'The “coupons” state that you have to pay fees. What exactly are the fees ',
      'What does the fees mean on the child support payments ',
      'What is the purpose of the fee',
      'What is the annual fee',
      'Where do i submit the fee',
      'How much is the  Application fee',
      'How much is the fee',
      'Do I have to pay 25 for an application fee',
      'If i only recieve 50 dollars a month is there still a fee',
      'Will I have to pay a fee there?',
      'is there a fee for paying child support through the state?',
      'Retain fee',
      'Is there a fee',
      'annual fee',
      'Is the custodial or non-custodial parent responsible for the $35 annual fee?',
      'Also, can I pay for the application fee on line with a debit card?',
      'Does the state charge a processing fee to collect payment.',
      'I have a charge of $120 on my credit score and all 3 of my sons are over 18 the youngest one is 23  how do I owe you this',
      "I've never heard of paying money to start a case",
      'I’ve already paid my $25 fee',
      'Yes Can the $25 fee be paid in cash',
    ],
    contexts: [
      { name: 'waiting-restart-conversation', count: 6 },
      { name: 'waiting-open-csc-location-services', count: 6 },
      { name: 'waiting-open-csc-employer-payments', count: 6 },
      { name: 'waiting-open-csc-no-service', count: 5 },
      { name: 'waiting-feedback-root', count: 5 },
      { name: 'waiting-open-csc-select-form', count: 5 },
      { name: 'waiting-yes-child-support', count: 5 },
      { name: 'waiting-not-child-support', count: 5 },
      { name: 'waiting-open-csc-full-services', count: 3 },
      { name: 'waiting-maps-deliver-map', count: 1 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
    ],
  },
  'addressing check': {
    occurences: 23,
    queries: [
      'How do I fill out a money order for child support ',
      "What's the address to mail in payments in Mississippi for the absent parent?",
      'How to fill out money order',
      'Who to make check payable to',
      'What name do I put on money order? Sdu?',
      'Who name do I put on check for child support?',
      'Who do I make the check payable to?',
      'Who do I write the check out to',
      'Who do I make the money order out to in Hernando Ms',
      'Who do you make the check out too',
      'I’m filling out a money order who do I make it out too',
      'Who do you make checks payable to?!',
      'Who do i make check to where do i send',
      'Who do I make the money order out to',
      'To what address should I mail a Judgment Terminating Child Support?',
      'Trying to find the address to send my child support',
      'Whew do I mail a child support payment to',
      'i am the parent who is sending money',
      'What just looking for address on where to send payment as well as how to make out money order',
      'When sending money gram do you send to mothers name',
      'Where do I mail a child support payment to?',
      'What is the PO box address in PERSON_NAME to send child support payment?',
      'Where can I mail my child support payment',
    ],
    contexts: [
      { name: 'waiting-restart-conversation', count: 10 },
      { name: 'waiting-yes-child-support', count: 7 },
      { name: 'waiting-not-child-support', count: 7 },
      { name: 'waiting-feedback-root', count: 6 },
      { name: 'waiting-support-type', count: 2 },
      { name: 'waiting-support-parent-receiving', count: 1 },
      { name: 'waiting-pmtmethods-cant-make', count: 1 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 1 },
      { name: 'waiting-support-general-inquiries', count: 1 },
      { name: 'waiting-pmtmethods-cash', count: 1 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 1 },
      { name: 'waiting-support-employer', count: 1 },
      { name: 'waiting-support-parent-paying', count: 1 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
      { name: 'waiting-support-restart', count: 1 },
      { name: 'waiting-support-employment-status', count: 1 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 1 },
    ],
  },
  taxes: {
    occurences: 20,
    queries: [
      'i dont owe any child support but you all took my tax refund',
      'How do I find out if I will receive a payment from tax offset of non custodial parent ',
      'Tax offset payment ',
      'tax',
      " I need to know where my taxes hadn't been took off my back child support",
      'Tax interception ',
      'I have a release for my tax refund ',
      'social security',
      'tax refund',
      'I would like my child’s support Payment’s to run through the state and be taken out of my payroll check each week',
      'How long before income tax is applied.',
      'tax ID number ',
      "I'm looking for your tax ID number to issue a child support withholding for a non-custodial parent.",
      'tax offset',
      'Why are they holding child support received from taxes ',
      'If my ex-husband is in arrears, does this agency participate in the collection of funds from the IRS; seize his refund?',
      'Getting income tax',
      'I have asked for the past three years about getting his income tax. ',
      "I'm trying to figure out the child in reference to my federal tax return they kept for child support that I wasn't aware I was supposed to be paying",
      'It has income tax/social security/retirement/childsupport',
    ],
    contexts: [
      { name: 'waiting-not-child-support', count: 5 },
      { name: 'waiting-yes-child-support', count: 5 },
      { name: 'waiting-pmt-calc-income-term', count: 2 },
      { name: 'waiting-feedback-not-helpful', count: 2 },
      { name: 'waiting-feedback-helpful', count: 2 },
      { name: 'waiting-restart-conversation', count: 1 },
      { name: 'waiting-support-employer', count: 1 },
      { name: 'waiting-support-parent-receiving', count: 1 },
      { name: 'waiting-open-csc-select-form', count: 1 },
      { name: 'ticketinfo', count: 1 },
      { name: 'waiting-feedback-root', count: 1 },
      { name: 'waiting-support-parent-paying', count: 1 },
      { name: 'waiting-open-csc-full-services', count: 1 },
      { name: 'waiting-pmt-calc-num-children', count: 1 },
      { name: 'waiting-pmtmethods-debit-card', count: 1 },
      { name: 'waiting-open-csc-no-service', count: 1 },
      { name: 'waiting-open-csc-location-services', count: 1 },
    ],
  },
  tanf: {
    occurences: 17,
    queries: [
      'Tanf',
      'Tanf ',
      '604532213c',
      'TANF',
      'Ellisquivalent ',
      'Tanf benfits',
      'dcse',
      'non-tanf',
      'Nekole PERSON_NAME ',
      '🖕🏿',
      '🖕🏿',
      '          KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK',
      'Childsupport',
      'Amccord14 @icloud.com',
      'Mclarty ',
      'Childsupport',
      'Deion PERSON_NAME',
    ],
    contexts: [
      { name: 'ticketinfo', count: 6 },
      { name: 'waiting-support-no-email', count: 2 },
      { name: 'waiting-support-email', count: 2 },
      { name: 'waiting-pmtmethods-debit-card', count: 1 },
      { name: 'waiting-support-revise-issue', count: 1 },
      { name: 'waiting-support-submit-issue', count: 1 },
      { name: 'requests', count: 1 },
      { name: 'waiting-yes-child-support', count: 1 },
      { name: 'waiting-not-child-support', count: 1 },
      { name: 'waiting-support-parent-paying', count: 1 },
      { name: 'waiting-support-phone-number', count: 1 },
      { name: 'waiting-feedback-root', count: 1 },
      { name: 'waiting-restart-conversation', count: 1 },
      { name: 'waiting-support-parent-receiving', count: 1 },
      { name: 'waiting-support-employer', count: 1 },
      { name: 'waiting-support-general-inquiries', count: 1 },
      { name: 'waiting-open-csc-location-services', count: 1 },
      { name: 'waiting-open-csc-employer-payments', count: 1 },
      { name: 'waiting-open-csc-full-services', count: 1 },
    ],
  },
  'child care': {
    occurences: 16,
    queries: [
      'I need daycare assistance ',
      'trying to check on child care',
      'Daycare ',
      'Daycare ',
      'i am trying to get help with child care',
      'Daycare vouchers ',
      'How would I check up on a daycare?',
      'I need to get my daughter on medicare',
      'I am trying to get a child care voucher',
      'Trying to get my child on the early child care program',
      'Child care assistance ',
      'im searching for a childcare form ',
      'I was trying to get a child care voucher for my son but im',
      'Getting help with childcare',
      'Childcare',
      'Child care voucher ',
    ],
    contexts: [
      { name: 'waiting-yes-child-support', count: 3 },
      { name: 'waiting-not-child-support', count: 3 },
      { name: 'waiting-open-csc-employer-payments', count: 2 },
      { name: 'waiting-support-parent-paying', count: 2 },
      { name: 'request-type', count: 2 },
      { name: 'waiting-support-parent-receiving', count: 2 },
      { name: 'waiting-open-csc-location-services', count: 2 },
      { name: 'waiting-support-employer', count: 2 },
      { name: 'waiting-open-csc-full-services', count: 2 },
      { name: 'waiting-feedback-root', count: 2 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
      { name: 'waiting-support-type', count: 1 },
      { name: 'payment-factors', count: 1 },
    ],
  },
  'payment history': {
    occurences: 16,
    queries: [
      'notice of monthly paymnet',
      'I need my last 3 months of my transactions from child support',
      'Can you help me find a record of payments made?',
      'Find a record of payments I made',
      'Can you show me any recent activity on my account?',
      'Checking payment I have made',
      'I need to get a copy of what I received for child support in the past 6 months.',
      '3-13-17 last payment 51.47 and 11-9-15',
      'How can I get a record of payments made to me for child support',
      'I am the non custodial parent and what to know how I can find out the payments I made',
      'Request Payment History or Record',
      'How can I get a list of payments made?',
      'Yes I’m trying to check my payments ',
      'My name is PERSON_NAME and I was wanted to know how much do I owe and how much I have paid',
      'copy of payment history',
      'I’m needing support obtaining payment history can you help',
    ],
    contexts: [
      { name: 'waiting-yes-child-support', count: 5 },
      { name: 'waiting-not-child-support', count: 5 },
      { name: 'waiting-feedback-root', count: 2 },
      { name: 'waiting-restart-conversation', count: 2 },
      { name: 'waiting-support-cancel-issue', count: 1 },
      { name: 'waiting-support-revise-issue', count: 1 },
      { name: 'waiting-support-type', count: 1 },
      { name: 'requests', count: 1 },
      { name: 'ticketinfo', count: 1 },
      { name: 'waiting-acknowledge-privacy-statement', count: 1 },
      { name: 'waiting-support-general-inquiries', count: 1 },
      { name: 'waiting-support-submit-issue', count: 1 },
    ],
  },
  incarceration: {
    occurences: 13,
    queries: [
      'When send out locator for non custodial parent will he go to jail',
      'Can I make child support payments for someone who is in Desoto county ms jail for failure to pay child supports may I send in payments',
      'My sons dad just got out of jail. He hasn’t paid since April. What’s the next step?',
      'My children dad is in jail',
      'What if the noncustodial parent is incarcerated ',
      'I need talk to someone bout my daughter father got out of prison ',
      'If he is in jail or prison, how do I get my child support?',
      'I got a letter in the mail about my child’s father being an absent parent he’s not an absent parent his just in prison for a few years',
      'Hello - I am a mom of two children that their father is incarcerated since March. He is my ex husband and will get life or death penalty in prison. I am currently homeless as well as jobless. No child support. Is there any help ',
      'family violence',
      'Yes! Who do I talk to about getting the non custodial parent arrested?',
      'Can I put my child’s father on child support even though he’s in prison ',
      'My sons dad is in prison so I won’t receive anything from him but I need my son on my stamp case and I don’t want my son to have his Medicaid cut so how do I handle this',
    ],
    contexts: [
      { name: 'waiting-feedback-root', count: 3 },
      { name: 'waiting-restart-conversation', count: 3 },
      { name: 'waiting-open-csc-location-services', count: 2 },
      { name: 'waiting-open-csc-employer-payments', count: 2 },
      { name: 'waiting-open-csc-select-form', count: 1 },
      { name: 'waiting-open-csc-no-service', count: 1 },
      { name: 'waiting-pmtmethods-debit-card', count: 1 },
      { name: 'waiting-support-parent-receiving', count: 1 },
      { name: 'waiting-yes-child-support', count: 1 },
      { name: 'waiting-not-child-support', count: 1 },
      { name: 'waiting-dirdep-no-learn-more-eppicard', count: 1 },
      { name: 'waiting-dirdep-learn-more-eppicard', count: 1 },
      { name: 'waiting-support-parent-paying', count: 1 },
      { name: 'waiting-support-employer', count: 1 },
      { name: 'waiting-open-csc-full-services', count: 1 },
    ],
  },
  appointments: {
    occurences: 13,
    queries: [
      'Number to schedule DNA appointment?',
      'Father doesn’t appear for appointment ',
      'I need to have an appointment 30 sept with my caseworker.  My name is PERSON_NAME ',
      'I need to schedule an appointment to provide employer information for my ex',
      'can i schudele an appointment',
      'Want to make an appointment for my husband PERSON_NAME Holland Marich an appointment to speak with a case worker. He wants to sign his rights away to PERSON_NAME. ',
      'Need an appt',
      'I need help scheduling an appointment for the first time',
      'When can you help me get appointment',
      'schedule an appointment',
      'Schedule an appointment ',
      'do I schedule appointments or walk in? ',
      'Who can I call to schedule an appointment in tupelo ms',
    ],
    contexts: [
      { name: 'waiting-feedback-root', count: 9 },
      { name: 'waiting-restart-conversation', count: 9 },
      { name: 'waiting-appts-office-locations', count: 1 },
      { name: 'waiting-appts-guidelines', count: 1 },
      { name: 'waiting-appts-schedule', count: 1 },
      { name: 'payment-factors', count: 1 },
      { name: 'waiting-support-cancel-issue', count: 1 },
      { name: 'waiting-open-csc-select-form', count: 1 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 1 },
      { name: 'waiting-feedback-helpful', count: 1 },
      { name: 'waiting-feedback-complete', count: 1 },
      { name: 'waiting-pmtmethods-cant-make', count: 1 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 1 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 1 },
      { name: 'waiting-pmtmethods-cash', count: 1 },
      { name: 'waiting-open-csc-no-service', count: 1 },
    ],
  },
  refund: {
    occurences: 13,
    queries: [
      'refund',
      'Im trying to see how much ive over paid on my childsupport case because i recieveda letter stating i had over paid.',
      'Can I get money back if I have an order from the court to stop taking money the you still did for over a year',
      'I have a question about a specific order and a refund that was returned to employer',
      'Refund of overpayments',
      'Refund of overpayments',
      'Im done making payments when will i get my reimbursement check',
      'Overpaid ',
      'Overpaid yearly',
      'My is way behind on child support... I have already been told that if he pays something every 3 months that there is nothing y’all will do.  Is there not a way to get his it’s refund when he filed taxes?',
      'Refund on overpayment',
      'Over paid ',
      "I'm looking for an over payment i made few months back i never was entitled to. ",
    ],
    contexts: [
      { name: 'waiting-restart-conversation', count: 4 },
      { name: 'waiting-yes-child-support', count: 2 },
      { name: 'waiting-not-child-support', count: 2 },
      { name: 'waiting-iwo-no-assistance', count: 1 },
      { name: 'waiting-iwo-faqs', count: 1 },
      { name: 'waiting-iwo-wants-assistance', count: 1 },
      { name: 'waiting-feedback-root', count: 1 },
      {
        name: 'waiting-pmt-calc-unknown-retirement-contributions',
        count: 1,
      },
      { name: 'waiting-pmt-calc-restart', count: 1 },
    ],
  },
  'cant make payments': {
    occurences: 12,
    queries: [
      'career opportunities',
      'I need a job ',
      "I'm unemployed ",
      'Lost a job',
      'Lost of job',
      'Career opportunities ',
      'lost a job',
      "I can't afford to but my kids school uniforms what do i do is there any help",
      'No job',
      'Unemployed ',
      'Payment continues to increase but my income is decreasing. ',
      'He works but he gets paid cash ',
    ],
    contexts: [
      { name: 'waiting-restart-conversation', count: 3 },
      { name: 'request-type', count: 2 },
      { name: 'waiting-feedback-root', count: 2 },
      { name: 'waiting-pmtmethods-cash', count: 1 },
      { name: 'iwo-factors', count: 1 },
      { name: 'waiting-iwo-disposable-income', count: 1 },
      { name: 'waiting-support-employer', count: 1 },
      { name: 'waiting-support-parent-receiving', count: 1 },
      { name: 'payment-factors', count: 1 },
      { name: 'waiting-pmtmethods-checkormoneyorder', count: 1 },
      { name: 'waiting-pmtmethods-withhold-payments', count: 1 },
      { name: 'waiting-support-parent-paying', count: 1 },
      { name: 'waiting-pmtmethods-echeckdebit', count: 1 },
      { name: 'waiting-pmtmethods-cant-make-qualifying', count: 1 },
      { name: 'waiting-open-csc-location-services', count: 1 },
      { name: 'waiting-open-csc-select-form', count: 1 },
      { name: 'waiting-open-csc-no-service', count: 1 },
      { name: 'waiting-open-csc-employer-payments', count: 1 },
      { name: 'waiting-support-handle-employment-status', count: 1 },
      { name: 'waiting-yes-child-support', count: 1 },
      { name: 'waiting-not-child-support', count: 1 },
      { name: 'waiting-pmt-calc-num-children', count: 1 },
    ],
  },
}
