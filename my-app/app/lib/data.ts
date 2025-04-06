import type { BodyBatteryData, StrainData, SummaryData, TabData, SessionData } from "./types"

export const bodyBatteryData: BodyBatteryData[] = [
  {
    title: "Body Battery Trend",
    type: "composed",
    unit: "%",
    xAxis: "date",
    xAxisType: "date",
    yAxis: [
      {
        title: "body_battery",
        chart: "area",
        unit: "%",
      },
      {
        title: "strain",
        chart: "bar",
        unit: "%",
      },
      {
        title: "recovery",
        chart: "bar",
        unit: "%",
      },
    ],
    data: [
      {
        date: "2025-03-28",
        body_battery: "67.01",
        strain: "59.88",
        recovery: "40.12",
      },
      {
        date: "2025-03-29",
        body_battery: "100.0",
        strain: "46.16",
        recovery: "53.84",
      },
      {
        date: "2025-03-30",
        body_battery: "81.15",
        strain: "55.2",
        recovery: "44.8",
      },
      {
        date: "2025-03-31",
        body_battery: "31.51",
        strain: "76.04",
        recovery: "23.96",
      },
      {
        date: "2025-04-01",
        body_battery: "35.97",
        strain: "73.55",
        recovery: "26.45",
      },
      {
        date: "2025-04-02",
        body_battery: "51.06",
        strain: "66.2",
        recovery: "33.8",
      },
      {
        date: "2025-04-03",
        body_battery: "100.0",
        strain: "0.0",
        recovery: "0.0",
      },
    ],
    avg: null,
    order: 1,
    size: "full-width",
    llm_insights:
      "Over the past week, Body Battery scores fluctuated significantly. High scores indicate peak energy levels, ideal for challenging activities, while lower scores suggest the need for rest. Recovery Percentage and Strain Percentage work inversely; a higher recovery implies readiness, whereas increased strain signals potential fatigue. Notably, a midweek dip in Body Battery suggests balancing activity intensity to prevent burnout. Monitoring these trends helps predict when to push forward or take breaks effectively, optimizing energy use and enhancing overall performance. Prioritize activities based on your energy peaks and plan rest during low periods for sustained well-being.",
  },
]

export const strainData: StrainData[] = [
  {
    title: "Strain Debt",
    type: "simple",
    unit: "%",
    xAxis: "date",
    xAxisType: "date",
    yAxis: [
      {
        title: "strain_debt",
        chart: "bar-negative",
        unit: "%",
      },
    ],
    data: [
      {
        date: "2025-03-28",
        strain_debt: "-4.94",
      },
      {
        date: "2025-03-29",
        strain_debt: "2.42",
      },
      {
        date: "2025-03-30",
        strain_debt: "-3.33",
      },
      {
        date: "2025-03-31",
        strain_debt: "-1.61",
      },
      {
        date: "2025-04-01",
        strain_debt: "8.48",
      },
      {
        date: "2025-04-02",
        strain_debt: "6.84",
      },
      {
        date: "2025-04-03",
        strain_debt: "-27.82",
      },
    ],
    avg: null,
    order: 3,
    size: "small",
    llm_insights:
      "Your energy expenditure fluctuates significantly, suggesting recovery often lags behind exertion. Prioritize rest to balance strain.",
  },
  {
    title: "TDEE",
    type: "simple",
    unit: "%",
    xAxis: "date",
    xAxisType: "date",
    yAxis: [
      {
        title: "tdee",
        chart: "area",
        unit: "%",
      },
    ],
    data: [
      {
        date: "2025-03-27",
        tdee: "72.37",
      },
      {
        date: "2025-03-28",
        tdee: "81.58",
      },
      {
        date: "2025-03-29",
        tdee: "72.37",
      },
      {
        date: "2025-03-30",
        tdee: "100.0",
      },
      {
        date: "2025-03-31",
        tdee: "100.0",
      },
      {
        date: "2025-04-01",
        tdee: "81.58",
      },
      {
        date: "2025-04-02",
        tdee: "72.37",
      },
    ],
    avg: null,
    order: 4,
    size: "small",
    llm_insights:
      "TDEE fluctuations suggest varying daily calorie burn; understanding this makes nutrition and fitness tracking more intuitive and efficient.",
  },
  {
    title: "Activity HRZ",
    type: "simple",
    unit: "%",
    xAxis: "date",
    xAxisType: "date",
    yAxis: [
      {
        title: "activity_hrz",
        chart: "area",
        unit: "%",
      },
    ],
    data: [
      {
        date: "2025-03-27",
        activity_hrz: "33.65",
      },
      {
        date: "2025-03-28",
        activity_hrz: "34.31",
      },
      {
        date: "2025-03-29",
        activity_hrz: "35.86",
      },
      {
        date: "2025-03-30",
        activity_hrz: "37.23",
      },
      {
        date: "2025-03-31",
        activity_hrz: "33.42",
      },
      {
        date: "2025-04-01",
        activity_hrz: "33.89",
      },
      {
        date: "2025-04-02",
        activity_hrz: "34.2",
      },
    ],
    avg: null,
    order: 5,
    size: "small",
    llm_insights:
      "Consistent moderate Activity Heart Zone Strain boosts heart performance and endurance, crucial for improving overall fitness levels.",
  },
  {
    title: "Workout HRZ",
    type: "simple",
    unit: "%",
    xAxis: "date",
    xAxisType: "date",
    yAxis: [
      {
        title: "workout_hrz",
        chart: "area",
        unit: "%",
      },
    ],
    data: [
      {
        date: "2025-03-16",
        workout_hrz: "0",
      },
      {
        date: "2025-03-17",
        workout_hrz: "0",
      },
      {
        date: "2025-03-18",
        workout_hrz: "0",
      },
      {
        date: "2025-03-19",
        workout_hrz: "0",
      },
      {
        date: "2025-03-20",
        workout_hrz: "0",
      },
      {
        date: "2025-03-21",
        workout_hrz: "0",
      },
      {
        date: "2025-03-22",
        workout_hrz: "0.0",
      },
    ],
    avg: 0,
    order: 6,
    size: "small",
    llm_insights:
      "Workout intensity boosts short-term heart strain but enhances long-term fitness. Adjust workouts for balanced heart health.",
  },
  {
    title: "Total Strain Trend",
    type: "composed",
    unit: "%",
    xAxis: "date",
    xAxisType: "date",
    yAxis: [
      {
        title: "total_strain_trend",
        chart: "area",
        unit: "%",
      },
      {
        title: "physical_strain",
        chart: "bar",
        unit: "%",
      },
      {
        title: "sedentary_strain",
        chart: "bar",
        unit: "%",
      },
    ],
    data: [
      {
        date: "2025-03-27",
        total_strain_trend: "34.27",
        physical_strain: "80.48",
        sedentary_strain: "19.52",
      },
      {
        date: "2025-03-28",
        total_strain_trend: "25.95",
        physical_strain: "100.0",
        sedentary_strain: "0.0",
      },
      {
        date: "2025-03-29",
        total_strain_trend: "26.22",
        physical_strain: "100.0",
        sedentary_strain: "0.0",
      },
      {
        date: "2025-03-30",
        total_strain_trend: "55.17",
        physical_strain: "71.64",
        sedentary_strain: "28.36",
      },
      {
        date: "2025-03-31",
        total_strain_trend: "35.74",
        physical_strain: "88.22",
        sedentary_strain: "11.78",
      },
      {
        date: "2025-04-01",
        total_strain_trend: "77.13",
        physical_strain: "36.6",
        sedentary_strain: "63.4",
      },
      {
        date: "2025-04-02",
        total_strain_trend: "29.85",
        physical_strain: "100.0",
        sedentary_strain: "0.0",
      },
    ],
    order: 1,
    size: "full-width",
    llm_insights:
      "Over the past week, your body's workload showed significant fluctuations. Key observations reveal alternating periods of high physical exertion and moderate recovery. The Total Strain Score varied notably, reflecting shifts between intense activity and rest phases. At times, physical strain reached its peak while sedentary activity dropped to minimal levels. This indicates a need to balance high-intensity workouts with adequate rest days to prevent burnout and promote recovery. Monitoring these variations helps optimize your training schedule for improved performance and overall well-being, ensuring sustainable progress without overexertion.",
  },
]

export const summaryData: SummaryData[] = [
  {
      title: "Sleep",
      type: "composed",
      unit: "%",
      xAxis: "date",
      xAxisType: "date",
      yAxis: [
          {
              title: "sleep_quality",
              chart: "area",
              unit: "%",
          },
          {
              title: "sleep_debt",
              chart: "bar-negative",
              unit: "min",
          },
      ],
      data: [
          {
              date: "2025-03-27",
              sleep_quality: "46.39",
              sleep_debt: "85.42",
          },
          {
              date: "2025-03-28",
              sleep_quality: "64.49",
              sleep_debt: "96.4",
          },
          {
              date: "2025-03-29",
              sleep_quality: "0",
              sleep_debt: "0",
          },
          {
              date: "2025-03-30",
              sleep_quality: "46.37",
              sleep_debt: "107.96",
          },
          {
              date: "2025-03-31",
              sleep_quality: "48.06",
              sleep_debt: "94.88",
          },
          {
              date: "2025-04-01",
              sleep_quality: "57.28",
              sleep_debt: "111.68",
          },
          {
              date: "2025-04-02",
              sleep_quality: "59.09",
              sleep_debt: "109.75",
          },
      ],
      order: 1,
      llm_insights: null
  },
  {
      title: "Vitals",
      type: "composed",
      unit: "%",
      xAxis: "date",
      xAxisType: "date",
      yAxis: [
          {
              title: "hr_avg",
              chart: "area",
              unit: "count/min",
          },
          {
              title: "total_calories_burned",
              chart: "area",
              unit: "kcal",
          },
      ],
      data: [
          {
              date: "2025-03-27",
              hr_avg: "73.3",
              total_calories_burned: "2542.63",
          },
          {
              date: "2025-03-28",
              hr_avg: "81.8",
              total_calories_burned: "2674.07",
          },
          {
              date: "2025-03-29",
              hr_avg: "84.0",
              total_calories_burned: "2593.75",
          },
          {
              date: "2025-03-30",
              hr_avg: "83.3",
              total_calories_burned: "2959.37",
          },
          {
              date: "2025-03-31",
              hr_avg: "77.6",
              total_calories_burned: "2729.27",
          },
          {
              date: "2025-04-01",
              hr_avg: "74.8",
              total_calories_burned: "2718.83",
          },
          {
              date: "2025-04-02",
              hr_avg: "80.0",
              total_calories_burned: "1687.21",
          },
      ],
      order: 2,
      llm_insights: null
  },
  {
      title: "Workout",
      type: "composed",
      unit: "%",
      xAxis: "date",
      xAxisType: "date",
      yAxis: [
          {
              title: "workout_duration",
              chart: "area",
              unit: "min",
          },
          {
              title: "workout_calories",
              chart: "area",
              unit: "kcal",
          },
      ],
      data: [
          {
              date: "2025-03-16",
              workout_duration: "0",
              workout_calories: "0",
          },
          {
              date: "2025-03-17",
              workout_duration: "0",
              workout_calories: "0",
          },
          {
              date: "2025-03-18",
              workout_duration: "0",
              workout_calories: "0",
          },
          {
              date: "2025-03-19",
              workout_duration: "0",
              workout_calories: "0",
          },
          {
              date: "2025-03-20",
              workout_duration: "0",
              workout_calories: "0",
          },
          {
              date: "2025-03-21",
              workout_duration: "0",
              workout_calories: "0",
          },
          {
              date: "2025-03-22",
              workout_duration: "0.16",
              workout_calories: "0.31",
          },
      ],
      order: 3,
      llm_insights: null
  },
  {
      title: "Activity",
      type: "composed",
      unit: "%",
      xAxis: "date",
      xAxisType: "date",
      yAxis: [
          {
              title: "activity_calories",
              chart: "area",
              unit: "kcal",
          },
          {
              title: "step_count",
              chart: "area",
              unit: "count",
          },
      ],
      data: [
          {
              date: "2025-03-27",
              activity_calories: "499.1",
              step_count: "5744",
          },
          {
              date: "2025-03-28",
              activity_calories: "606.0",
              step_count: "7863",
          },
          {
              date: "2025-03-29",
              activity_calories: "563.2",
              step_count: "6382",
          },
          {
              date: "2025-03-30",
              activity_calories: "845.6",
              step_count: "12729",
          },
          {
              date: "2025-03-31",
              activity_calories: "680.4",
              step_count: "12073",
          },
          {
              date: "2025-04-01",
              activity_calories: "654.3",
              step_count: "9355",
          },
          {
              date: "2025-04-02",
              activity_calories: "416.3",
              step_count: "5792",
          },
      ],
      order: 4,
      llm_insights: null
  },
]

export const tabsData: TabData[] = [
  {
    key: "body_battery",
    title: "Body Battery",
    value: 100,
    unit: "%",
    change: 46,
    change_type: "increase",
    order: 1,
  },
  {
    key: "strain",
    title: "Strain",
    value: 100,
    unit: "%",
    change: 53,
    change_type: "increase",
    order: 2,
  },
  {
    key: "recovery",
    title: "Recovery",
    value: 100,
    unit: "%",
    change: 59,
    change_type: "increase",
    order: 3,
  },
  {
    key: "sedentary_stress",
    title: "Sedentary Stress",
    value: 39,
    unit: "%",
    change: 12,
    change_type: "decrease",
    order: 4,
  },
]

export const upcomingSessions: SessionData[] = [
  {
    createdAt: "2025-04-01T14:26:08.998Z",
    updatedAt: "2025-04-01T14:26:08.998Z",
    deletedAt: null,
    id: "1bb45183-d849-4b97-a861-2261bb70a604",
    serviceProviderId: "87ffef05-5af5-44b7-92f1-1b0adec958b3",
    customerId: "3f7a90d0-273d-4a57-afcd-ef49a4a9592d",
    serviceId: "c43c0294-5cf3-4240-a43a-48d186129ad2",
    planId: "651efafc-e6a9-4d63-970f-8f8674a15a8f",
    startDate: "2025-04-10T10:15:00.000Z",
    endDate: "2025-04-10T11:15:00.000Z",
    mode: "on-site",
    googleMeetLink: null,
    location: "Lokanthali Manohara Park, Madhyapur Thimi, Nepal",
    googleEventId: "hmo1he72tc75pcbuvujc0jda84",
    status: "pending",
    cancellationReason: null,
    customer: {
      id: "3f7a90d0-273d-4a57-afcd-ef49a4a9592d",
      name: "Tushar Client",
      email: "me.tushark999+clientOne@gmail.com",
      profilePicture:
        "https://storage.googleapis.com/fithack-web-images/profile-pictures/e16bb520-74cf-419c-bf38-787431fb91e6/1739118896900-IMG_8393.jpg",
    },
    serviceProvider: {
      id: "87ffef05-5af5-44b7-92f1-1b0adec958b3",
      name: "Tushar Trainer",
      email: "me.tushark999+trainerOne@gmail.com",
      profilePicture:
        "https://storage.googleapis.com/fithack-web-images/profile-pictures/5fbaf954-8f50-4789-be87-ead62e335f99/1739117199603-IMG_8386.jpg",
    },
    service: {
      id: "c43c0294-5cf3-4240-a43a-48d186129ad2",
      name: "Martial Arts",
      description: "Martial Arts",
      icon: "https://storage.googleapis.com/fithack-web-images/1743520025354-martial-arts-clothes-svgrepo-com.svg",
      color: "#EC4899",
    },
    plan: {
      id: "651efafc-e6a9-4d63-970f-8f8674a15a8f",
      name: "Be Active",
    },
    remainingSessions: 3,
    numberOfPendingSessions: 1,
    numberOfCompletedSessions: 0,
    numberOfCancelledSessions: 0,
  },
  {
    createdAt: "2025-04-03T12:30:45.123Z",
    updatedAt: "2025-04-03T09:15:22.456Z",
    deletedAt: null,
    id: "2ce56294-e95a-5ca8-b972-3372cc81b715",
    serviceProviderId: "91edef16-6bf6-55c8-a3b2-2c1bddf069c4",
    customerId: "4e8ba1e1-384e-5b68-bede-fe5aba6a83e",
    serviceId: "d54d1395-6de4-5351-b54b-59c297230be3",
    planId: "762fcbgd-f7ba-5e74-a81f-9g9785b26b9g",
    startDate: "2025-04-15T14:30:00.000Z",
    endDate: "2025-04-15T16:00:00.000Z",
    mode: "virtual",
    googleMeetLink: "https://meet.google.com/abc-defg-hij",
    location: null,
    googleEventId: "kmp2if83ud86qbdwvwkd1keb95",
    status: "confirmed",
    cancellationReason: null,
    customer: {
      id: "4e8ba1e1-384e-5b68-bede-fe5aba6a83e",
      name: "Raj Kumar",
      email: "raj.kumar@example.com",
      profilePicture:
        "https://storage.googleapis.com/fithack-web-images/profile-pictures/f27cc631-85dg-520d-cf49-898542gc02f7/1739118947811-profile_raj.jpg",
    },
    serviceProvider: {
      id: "91edef16-6bf6-55c8-a3b2-2c1bddf069c4",
      name: "Priya Fitness",
      email: "priya.fitness@example.com",
      profilePicture:
        "https://storage.googleapis.com/fithack-web-images/profile-pictures/6gccg065-9g61-5890-cf98-fbe73f446g00/1739117265714-trainer_priya.jpg",
    },
    service: {
      id: "d54d1395-6de4-5351-b54b-59c297230be3",
      name: "Yoga Session",
      description: "Relaxing yoga session for beginners and intermediates",
      icon: "https://storage.googleapis.com/fithack-web-images/1743520136465-yoga-position-svgrepo-com.svg",
      color: "#3B82F6",
    },
    plan: {
      id: "762fcbgd-f7ba-5e74-a81f-9g9785b26b9g",
      name: "Stress Relief",
    },
    remainingSessions: 4,
    numberOfPendingSessions: 0,
    numberOfCompletedSessions: 1,
    numberOfCancelledSessions: 0,
  },
  {
    createdAt: "2025-04-02T07:45:33.789Z",
    updatedAt: "2025-04-04T16:20:11.234Z",
    deletedAt: null,
    id: "3df67305-f06b-6db9-c083-4483dd92c826",
    serviceProviderId: "a2fdeg27-7cg7-66d9-b4c3-3d2cedg170d5",
    customerId: "5f9cb2f2-495f-6c79-cfef-gf6bcb7b94f",
    serviceId: "e65e2406-7df5-6462-c65c-60d3a8341cf4",
    planId: "873gdche-g8cb-6f85-b92g-0h0896c37c0h",
    startDate: "2025-04-20T09:00:00.000Z",
    endDate: "2025-04-20T10:30:00.000Z",
    mode: "on-site",
    googleMeetLink: null,
    location: "Fitness First Gym, New Baneshwor, Kathmandu, Nepal",
    googleEventId: "lnq3jg94ve97rcexwxle2lfc06",
    status: "confirmed",
    cancellationReason: null,
    customer: {
      id: "5f9cb2f2-495f-6c79-cfef-gf6bcb7b94f",
      name: "Anisha Shah",
      email: "anisha.shah@example.com",
      profilePicture:
        "https://storage.googleapis.com/fithack-web-images/profile-pictures/g38dd742-96eh-631e-dg50-9a9653hd13g8/1739118998922-anisha_profile.jpg",
    },
    serviceProvider: {
      id: "a2fdeg27-7cg7-66d9-b4c3-3d2cedg170d5",
      name: "Bikram Fitness",
      email: "bikram.fitness@example.com",
      profilePicture:
        "https://storage.googleapis.com/fithack-web-images/profile-pictures/7hdch176-0h72-6901-dg09-gce84g557h11/1739117332825-bikram_trainer.jpg",
    },
    service: {
      id: "e65e2406-7df5-6462-c65c-60d3a8341cf4",
      name: "Weight Training",
      description: "Personalized weight training session",
      icon: "https://storage.googleapis.com/fithack-web-images/1743520247576-dumbbell-svgrepo-com.svg",
      color: "#10B981",
    },
    plan: {
      id: "873gdche-g8cb-6f85-b92g-0h0896c37c0h",
      name: "Strength Builder",
    },
    remainingSessions: 5,
    numberOfPendingSessions: 1,
    numberOfCompletedSessions: 2,
    numberOfCancelledSessions: 0,
  },
  {
    createdAt: "2025-03-25T15:10:27.654Z",
    updatedAt: "2025-04-05T10:10:27.654Z",
    deletedAt: null,
    id: "4eg78416-g17c-7ec0-d194-5594ee03d937",
    serviceProviderId: "b3gegh38-8dh8-77e0-c5d4-4e3dfeh281e6",
    customerId: "6g0dc3g3-506g-7d80-dgfg-hg7cdc8c05g",
    serviceId: "f76f3517-8eg6-7573-d76d-71e4b9452dg5",
    planId: "984hechf-h9dc-7g96-c03h-1i1907d48d1i",
    startDate: "2025-04-25T17:45:00.000Z",
    endDate: "2025-04-25T18:45:00.000Z",
    mode: "virtual",
    googleMeetLink: "https://meet.google.com/jkl-mnop-qrs",
    location: null,
    googleEventId: "mor4kh05wf08sdyfxymd3mgd17",
    status: "pending",
    cancellationReason: null,
    customer: {
      id: "6g0dc3g3-506g-7d80-dgfg-hg7cdc8c05g",
      name: "Sameer Patel",
      email: "sameer.patel@example.com",
      profilePicture:
        "https://storage.googleapis.com/fithack-web-images/profile-pictures/h49ee853-07fi-742f-eh61-0b0764ie24h9/1739119049033-sameer_pic.jpg",
    },
    serviceProvider: {
      id: "b3gegh38-8dh8-77e0-c5d4-4e3dfeh281e6",
      name: "Nisha Wellness",
      email: "nisha.wellness@example.com",
      profilePicture:
        "https://storage.googleapis.com/fithack-web-images/profile-pictures/8ieei287-1i83-7012-eh10-hdf95h668i22/1739117399936-nisha_coach.jpg",
    },
    service: {
      id: "f76f3517-8eg6-7573-d76d-71e4b9452dg5",
      name: "Nutrition Consultation",
      description: "Personalized nutrition planning and consultation",
      icon: "https://storage.googleapis.com/fithack-web-images/1743520358687-diet-nutrition-svgrepo-com.svg",
      color: "#F59E0B",
    },
    plan: {
      id: "984hechf-h9dc-7g96-c03h-1i1907d48d1i",
      name: "Healthy Eating",
    },
    remainingSessions: 3,
    numberOfPendingSessions: 1,
    numberOfCompletedSessions: 0,
    numberOfCancelledSessions: 0,
  },
  {
    createdAt: "2025-04-02T11:25:39.321Z",
    updatedAt: "2025-04-04T08:40:15.987Z",
    deletedAt: null,
    id: "5fh89527-h28d-8fd1-e205-6605ff14e048",
    serviceProviderId: "c4hfhi49-9ei9-88f1-d6e5-5f4egfi392f7",
    customerId: "7h1ed4h4-617h-8e91-ehgh-ih8ded9d16h",
    serviceId: "g87g4628-9fh7-8684-e87e-82f5c0563eh6",
    planId: "095ifdig-i0ed-8h07-d14i-2j2018e59e2j",
    startDate: "2025-05-01T13:15:00.000Z",
    endDate: "2025-05-01T14:15:00.000Z",
    mode: "on-site",
    googleMeetLink: null,
    location: "Buddha Park, Swayambhu, Kathmandu, Nepal",
    googleEventId: "npq5li16xg19tezgyznf4nhe28",
    status: "pending",
    cancellationReason: null,
    customer: {
      id: "7h1ed4h4-617h-8e91-ehgh-ih8ded9d16h",
      name: "Kabita Shrestha",
      email: "kabita.shrestha@example.com",
      profilePicture:
        "https://storage.googleapis.com/fithack-web-images/profile-pictures/i50ff964-18gj-853g-fi72-1c1875jf35i0/1739119100144-kabita_profile.jpg",
    },
    serviceProvider: {
      id: "c4hfhi49-9ei9-88f1-d6e5-5f4egfi392f7",
      name: "Rohan Meditation",
      email: "rohan.meditation@example.com",
      profilePicture:
        "https://storage.googleapis.com/fithack-web-images/profile-pictures/9jffj398-2j94-8123-fi21-ieg06i779j33/1739117467047-rohan_instr.jpg",
    },
    service: {
      id: "g87g4628-9fh7-8684-e87e-82f5c0563eh6",
      name: "Meditation Class",
      description: "Guided meditation for stress relief and mindfulness",
      icon: "https://storage.googleapis.com/fithack-web-images/1743520469798-meditation-lotus-svgrepo-com.svg",
      color: "#8B5CF6",
    },
    plan: {
      id: "095ifdig-i0ed-8h07-d14i-2j2018e59e2j",
      name: "Inner Peace",
    },
    remainingSessions: 4,
    numberOfPendingSessions: 1,
    numberOfCompletedSessions: 0,
    numberOfCancelledSessions: 0,
  },
]

export const pastSessions: SessionData[] = [
  {
    createdAt: "2025-02-10T08:26:08.998Z",
    updatedAt: "2025-02-10T08:26:08.998Z",
    deletedAt: null,
    id: "1bb45183-d849-4b97-a861-2261bb70a604",
    serviceProviderId: "87ffef05-5af5-44b7-92f1-1b0adec958b3",
    customerId: "3f7a90d0-273d-4a57-afcd-ef49a4a9592d",
    serviceId: "c43c0294-5cf3-4240-a43a-48d186129ad2",
    planId: "651efafc-e6a9-4d63-970f-8f8674a15a8f",
    startDate: "2025-03-03T10:15:00.000Z",
    endDate: "2025-03-03T11:15:00.000Z",
    mode: "on-site",
    googleMeetLink: null,
    location: "Lokanthali Manohara Park, Madhyapur Thimi, Nepal",
    googleEventId: "hmo1he72tc75pcbuvujc0jda84",
    status: "pending",
    cancellationReason: null,
    customer: {
      id: "3f7a90d0-273d-4a57-afcd-ef49a4a9592d",
      name: "Tushar Client",
      email: "me.tushark999+clientOne@gmail.com",
      profilePicture:
        "https://storage.googleapis.com/fithack-web-images/profile-pictures/e16bb520-74cf-419c-bf38-787431fb91e6/1739118896900-IMG_8393.jpg",
    },
    serviceProvider: {
      id: "87ffef05-5af5-44b7-92f1-1b0adec958b3",
      name: "Tushar Trainer",
      email: "me.tushark999+trainerOne@gmail.com",
      profilePicture:
        "https://storage.googleapis.com/fithack-web-images/profile-pictures/5fbaf954-8f50-4789-be87-ead62e335f99/1739117199603-IMG_8386.jpg",
    },
    service: {
      id: "c43c0294-5cf3-4240-a43a-48d186129ad2",
      name: "Martial Arts",
      description: "Martial Arts",
      icon: "https://storage.googleapis.com/fithack-web-images/1743520025354-martial-arts-clothes-svgrepo-com.svg",
      color: "#EC4899",
    },
    plan: {
      id: "651efafc-e6a9-4d63-970f-8f8674a15a8f",
      name: "Be Active",
    },
    remainingSessions: 1,
    numberOfPendingSessions: 1,
    numberOfCompletedSessions: 0,
    numberOfCancelledSessions: 1,
  },
  {
    createdAt: "2025-02-15T12:30:45.123Z",
    updatedAt: "2025-02-16T09:15:22.456Z",
    deletedAt: null,
    id: "2ce56294-e95a-5ca8-b972-3372cc81b715",
    serviceProviderId: "91edef16-6bf6-55c8-a3b2-2c1bddf069c4",
    customerId: "4e8ba1e1-384e-5b68-bede-fe5aba6a83e",
    serviceId: "d54d1395-6de4-5351-b54b-59c297230be3",
    planId: "762fcbgd-f7ba-5e74-a81f-9g9785b26b9g",
    startDate: "2025-03-05T14:30:00.000Z",
    endDate: "2025-03-05T16:00:00.000Z",
    mode: "virtual",
    googleMeetLink: "https://meet.google.com/abc-defg-hij",
    location: null,
    googleEventId: "kmp2if83ud86qbdwvwkd1keb95",
    status: "confirmed",
    cancellationReason: null,
    customer: {
      id: "4e8ba1e1-384e-5b68-bede-fe5aba6a83e",
      name: "Raj Kumar",
      email: "raj.kumar@example.com",
      profilePicture:
        "https://storage.googleapis.com/fithack-web-images/profile-pictures/f27cc631-85dg-520d-cf49-898542gc02f7/1739118947811-profile_raj.jpg",
    },
    serviceProvider: {
      id: "91edef16-6bf6-55c8-a3b2-2c1bddf069c4",
      name: "Priya Fitness",
      email: "priya.fitness@example.com",
      profilePicture:
        "https://storage.googleapis.com/fithack-web-images/profile-pictures/6gccg065-9g61-5890-cf98-fbe73f446g00/1739117265714-trainer_priya.jpg",
    },
    service: {
      id: "d54d1395-6de4-5351-b54b-59c297230be3",
      name: "Yoga Session",
      description: "Relaxing yoga session for beginners and intermediates",
      icon: "https://storage.googleapis.com/fithack-web-images/1743520136465-yoga-position-svgrepo-com.svg",
      color: "#3B82F6",
    },
    plan: {
      id: "762fcbgd-f7ba-5e74-a81f-9g9785b26b9g",
      name: "Stress Relief",
    },
    remainingSessions: 3,
    numberOfPendingSessions: 0,
    numberOfCompletedSessions: 2,
    numberOfCancelledSessions: 0,
  },
]

