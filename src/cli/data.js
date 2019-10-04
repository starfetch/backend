import { withBreasts, withoutBreasts } from '@freesewing/models';

export default {
  users: [
    {
      email: 'test@freesewing.org',
      username: 'test_user',
      handle: 'tuser',
      password: 'test',
      role: 'user',
      settings: {
        language: 'nl',
        units: 'imperial'
      },
      consent: {
        profile: true,
        model: true,
        openData: true
      },
      status: 'active'
    },
    {
      email: 'admin@freesewing.org',
      username: 'admin',
      password: 'admin',
      role: 'admin',
      handle: 'admin',
      social: {
        github: 'freesewing-bot',
        twitter: 'freesewing_org',
        instagram: 'freesewing_org',
      },
      patron: 8,
      settings: {
        language: 'en',
        units: 'metric'
      },
      consent: {
        profile: true,
        model: true,
        openData: true
      },
      status: 'active'
    }
  ],
  models: [
    {
      handle: 'modela',
      picture: 'modela.svg',
      user: 'tuser',
      name: 'Example model - No breasts',
      breasts: false,
      units: 'metric',
      notes: 'This is an example model',
      measurements: withoutBreasts.size42
    },
    {
      handle: 'modelb',
      picture: 'modelb.svg',
      user: 'tuser',
      name: 'Example model - With breasts',
      breasts: true,
      units: 'metric',
      notes: 'This is an example model',
      measurements: withBreasts.size36
    },
  ],
  recipes: [
    {
      handle: "recip",
      name: "Example recipe",
      notes: "These are the recipe notes",
      recipe: {
        settings: {
          sa: 10,
          complete: true,
          paperless: false,
          units: "imperial",
          measurements: {
            bicepsCircumference: 335,
            centerBackNeckToWaist: 520,
            chestCircumference: 1080,
            naturalWaistToHip: 145,
            neckCircumference: 420,
            shoulderSlope:  55,
            shoulderToShoulder: 465,
            hipsCircumference: 990
          }
        },
        pattern: "aaron",
        model:"modela"
      },
      created: "2019-08-14T09:47:27.163Z",
      user: 'tuser'
    }
  ]
}
