let keywords = ['Biden', 'LGBTQ+', "Alabama", 'Alaska', 'Arizona', 'Arkansas', 'California', 
'Colorado', 'Connecticut', 'Delaware', 'Florida', 'hospitals', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 
'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 
'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
'New Jersey', 'New Mexico', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregona', 
'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
'Virginia', 'West Virginia', 'Wisconsin', 'Wyoming', 'Trump', 'Donald Trump', 'Biden', 
'Joe Biden', 'Obama', 'Barack Obama', 'Pelosi', 'Nancy Pelosi', 'McConnell', 'Mitch McConnell', 'Fauci', 
'Anthony Fauci', 'Dr. Fauci', 'Harris', 'Kamala Harris', 'Sanders', 'Bernie Sanders', 'Warren', 
'Elizabeth Warren', 'Ocasio-Cortez', 'AOC', 'Alexandria Ocasio-Cortez', 'McCarthy', 'Kevin McCarthy',
'Hawley', 'Josh Hawley', 'Cruz', 'Ted Cruz', 'Romney', 'Mitt Romney', 'Xi Jinping', 'Putin', 
'Vladimir Putin', 'Merkel', 'Angela Merkel', 'Johnson', 'Boris Johnson', 'COVID-19', 'COVID', 
'COVID 19', 'Covid', 'Covid-19', 'Covid 19', 'Vaccine', 'Vaccines', 'Vaccination', 'Vaccinations',
'Virus', 'Outbreak', 'Strain', 'Pandemic', 'Quarantine', 'Lockdown', 'Death', 'Deaths', 'Masks',
'Mask', 'Cases', 'Pfizer', 'Moderna', 'Johnson and Johnson', 'Johnson & Johnson', 'J and J', 'J & J',
'Coronavirus', 'Stimulus', 'Democrat', 'Democrats', 'Republican', 'Republicans', 'Liberal', 'Liberals',
'Conservative', 'Conservatives', 'Government', 'Vote', 'Votes', 'Voters', 'Law', 'Laws', 'Governor',
'President', 'White House', 'GOP', 'DNC', 'Crime', 'Economy', 'Stocks', 'Market', 'Housing', 'Jobs',
'Unemployment', 'Company', 'Corporate', 'Corporation', 'Population', 'History', 'Million',
'Millions', 'Billion', 'Billions', 'Taxes', 'Tax', 'Police', 'Climate', 'Protest', 'Protests', 'LGBTQ', 
'LGBT', 'Gay', 'Lesbian', 'Queer', 'Transgender', 'Church', 'Religion', 'Guns', 'Gun', 'Abortion',
'Shooting', 'Shootings', 'Education', 'Science', 'School', 'Schools', 'Teacher', 'Teachers', 
'Student', 'Students', 'Racism', 'Black', 'White', 'Hispanic', 'Asian', 'Facebook', 'Twitter', 
'Instagram', 'Amazon', 'Google', 'Apple', 'Video Games', 'Reddit', 'Elon Musk', 
'Gates', 'Bill Gates', 'Melinda', 'Melinda Gates', 'Bezos', 'Jeff Bezos', 'Pope', 
'Pope Francis', 'Zuckerberg', 'Mark Zuckerberg', 'Buffett', 'Warren Buffett', 'Cook', 'Tim Cook',
'San Francisco', 'Miami', 'Chicago', 'Seattle', 'New York City', 'Houston', 
'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 
'New Orleans', 'United States', 'America', 'US', 'Russia', 'China', 'India', 'Mexico', 
'Canada', 'Israel', 'Palestine', 'Brazil', 'United Kingdom', 'England', 'Nigeria', 'Japan', 
'South Korea', 'North Korea', 'Pakistan', 'Germany', 'France', 'Greece', 'Italy', 'Spain', 'bitcoin',
'Jerusalem', 'Philippines', 'anti-Semitic', 'calf', 'freedom', 'ransom', 'Jewish','Rome','fossils',
'troll', 'Iceland', 'coral', 'busiest', 'Barcelona','election','child','birth','misinformation','blood','Aboriginal'];

let mp3 = {
    "vidID":"g3jCAyPai2Y",
    "vidTitle":"Yakuza OST - Baka Mitai (ばかみたい) Kiryu full version",
    "vidThumb":"https://img.youtube.com/vi/g3jCAyPai2Y/0.jpg",
    "duration":291,
    "vidInfo":{
    "0":{
    "dloadUrl":"https://s8.all-mp3.co/@download/251-6095ec7aad46d-2400000-291-320-webm-4900772-00:01:00-00:02:00/mp3/g3jCAyPai2Y/Yakuza%2BOST%2B-%2BBaka%2BMitai%2B%2528%25E3%2581%25B0%25E3%2581%258B%25E3%2581%25BF%25E3%2581%259F%25E3%2581%2584%2529%2BKiryu%2Bfull%2Bversion.mp3/4392869ec8fe2a43d9a46618f69da4fb3ced67774b011d5317793d7934a13950-1",
    "bitrate":320,
    "mp3size":"2.29 MB"
    },
    "1":{
    "dloadUrl":"https://s8.all-mp3.co/@download/251-6095ec7aad46d-1920000-291-256-webm-4900772-00:01:00-00:02:00/mp3/g3jCAyPai2Y/Yakuza%2BOST%2B-%2BBaka%2BMitai%2B%2528%25E3%2581%25B0%25E3%2581%258B%25E3%2581%25BF%25E3%2581%259F%25E3%2581%2584%2529%2BKiryu%2Bfull%2Bversion.mp3/4392869ec8fe2a43d9a46618f69da4fb3ced67774b011d5317793d7934a13950-1",
    "bitrate":256,
    "mp3size":"1.83 MB"
    },
    "2":{
    "dloadUrl":"https://s8.all-mp3.co/@download/251-6095ec7aad46d-1440000-291-192-webm-4900772-00:01:00-00:02:00/mp3/g3jCAyPai2Y/Yakuza%2BOST%2B-%2BBaka%2BMitai%2B%2528%25E3%2581%25B0%25E3%2581%258B%25E3%2581%25BF%25E3%2581%259F%25E3%2581%2584%2529%2BKiryu%2Bfull%2Bversion.mp3/4392869ec8fe2a43d9a46618f69da4fb3ced67774b011d5317793d7934a13950-1",
    "bitrate":192,
    "mp3size":"1.37 MB"
    },
    "3":{
    "dloadUrl":"https://s8.all-mp3.co/@download/251-6095ec7aad46d-960000-291-128-webm-4900772-00:01:00-00:02:00/mp3/g3jCAyPai2Y/Yakuza%2BOST%2B-%2BBaka%2BMitai%2B%2528%25E3%2581%25B0%25E3%2581%258B%25E3%2581%25BF%25E3%2581%259F%25E3%2581%2584%2529%2BKiryu%2Bfull%2Bversion.mp3/4392869ec8fe2a43d9a46618f69da4fb3ced67774b011d5317793d7934a13950-1",
    "bitrate":128,
    "mp3size":"937.5 KB"
    },
    "4":{
    "dloadUrl":"https://s8.all-mp3.co/@download/251-6095ec7aad46d-480000-291-64-webm-4900772-00:01:00-00:02:00/mp3/g3jCAyPai2Y/Yakuza%2BOST%2B-%2BBaka%2BMitai%2B%2528%25E3%2581%25B0%25E3%2581%258B%25E3%2581%25BF%25E3%2581%259F%25E3%2581%2584%2529%2BKiryu%2Bfull%2Bversion.mp3/4392869ec8fe2a43d9a46618f69da4fb3ced67774b011d5317793d7934a13950-1",
    "bitrate":64,
    "mp3size":"468.75 KB"
    }
}
}