// Types for Body Battery data
export interface BodyBatteryData {
    title: string
    type: string
    unit: string
    xAxis: string
    xAxisType: string
    yAxis: {
      title: string
      chart: string
      unit: string
    }[]
    data: {
      date: string
      body_battery: string
      strain: string
      recovery: string
      [key: string]: string
    }[]
    avg?: number | null
    order: number
    size: string
    llm_insights: string
  }
  
  // Types for Strain data
  export interface StrainData {
    title: string
    type: string
    unit: string
    xAxis: string
    xAxisType: string
    yAxis: {
      title: string
      chart: string
      unit: string
    }[]
    data: {
      date: string
      [key: string]: string
    }[]
    avg?: number | null
    order: number
    size: string
    llm_insights: string
  }
  
  // Types for Summary data
  export interface SummaryData {
    llm_insights: string | null
    title: string
    type: string
    unit: string
    xAxis: string
    xAxisType: string
    yAxis: {
      title: string
      chart: string
      unit: string
    }[]
    data: {
      date: string
      [key: string]: string
    }[]
    order: number
  }
  
  // Types for Tab data
  export interface TabData {
    key: string
    title: string
    value: number
    unit: string
    change: number
    change_type: string
    order: number
  }
  
  // Types for Session data
  export interface SessionData {
    createdAt: string
    updatedAt: string
    deletedAt: null | string
    id: string
    serviceProviderId: string
    customerId: string
    serviceId: string
    planId: string
    startDate: string
    endDate: string
    mode: string
    googleMeetLink: string | null
    location: string | null
    googleEventId: string
    status: string
    cancellationReason: string | null
    customer: {
      id: string
      name: string
      email: string
      profilePicture: string
    }
    serviceProvider: {
      id: string
      name: string
      email: string
      profilePicture: string
    }
    service: {
      id: string
      name: string
      description: string
      icon: string
      color: string
    }
    plan: {
      id: string
      name: string
    }
    remainingSessions: number
    numberOfPendingSessions: number
    numberOfCompletedSessions: number
    numberOfCancelledSessions: number
  }
  
  