// Facebook About Page class.  Here I am using private members and public methods
class AboutPage{
    private UserName : string;
    private BirthDate : string;
    private MobileNumber : number;
    private Gender : string;
    private InterestedIn : string;
    private AboutMe : string = `NA`;
    private FacebookAddress : string;

    private NickName : string = ``;
    private RelationshipStatus : string = `NA`;

    private ReligiousView : string= ``;
    private PoliticalView : string= ``;        
    private FavoriteQuote : string= ``;
    
    private LanguageKnown: string[];
    private BloodGroup : string= `NA`;
    private HaveDonatedBlood : boolean = false;

    private EmailAddress : string;
    private AlternateMobileNumber : number;
    private CurrentLiveingIn : string;
    private HomeTown : string;

    private CurrentDesignation: string;
    private CurrentWorkAt: string;
    private CurrentWorkAtFromYear: number = 0;
    private CurrentWorkAtToYear: number = 0;

    private GraduationCollegeName : string;
    private GraduationCollegeCity : string;
    private GraduationUniversity : string;
    private GraduationYear : number = 0;

    private HighSchoolName : string;
    private HighSchoolCity : string;
    private HighSchoolYear : number = 0;
    //Below is the constructor to intialize some of the fields
    constructor(
        FacebookAddress : string,
        UserName : string,
        BirthDate : string,
        MobileNumber : number,
        Gender : string,
        InterestedIn : string,
        AboutMe? : string,
        BloodGroup? : string
        ){
        this.FacebookAddress = FacebookAddress;
        this.UserName = UserName;
        this.BirthDate = BirthDate;
        this.MobileNumber = MobileNumber;
        this.Gender = Gender;
        this.InterestedIn = InterestedIn;
        this.AboutMe = AboutMe;
        this.BloodGroup =BloodGroup;
    }
    
// Here starts our Setters methods
    setNickName = (NickName : string)=>{
        this.NickName = NickName;
    }
    setBloodGroup = (BloodGroup: string)=>{
        this.BloodGroup = BloodGroup;
    }
    setLanguageKnown = (...LanguageKnown: string[])=>{
        this.LanguageKnown = LanguageKnown;
    }
    setRelationshipStatus = (RelationshipStatus : string)=>{
        this.RelationshipStatus = RelationshipStatus;
    }
    setHaveDonatedBlood = (haveDonatedBlood: boolean)=>{
        this.HaveDonatedBlood = haveDonatedBlood;
    }
    setCurrentProfessionalDetails = (CurrentDesignation : string,CurrentWorkAt : string,CurrentWorkAtFromYear : number,CurrentWorkAtToYear : number)=>{
        this.CurrentDesignation = CurrentDesignation;
        this.CurrentWorkAt = CurrentWorkAt;
        this.CurrentWorkAtFromYear = CurrentWorkAtFromYear;
        this.CurrentWorkAtToYear = CurrentWorkAtToYear;
    }
    setGraduationDetails = (GraduationCollegeName : string,GraduationCollegeCity : string,GraduationUniversity : string,GraduationYear : number)=>{
        this.GraduationCollegeName =  GraduationCollegeName;
        this.GraduationCollegeCity = GraduationCollegeCity;
        this.GraduationUniversity = GraduationUniversity;
       this.GraduationYear = GraduationYear;
    }
    setHighschoolDetails = (HighSchoolName : string,HighSchoolCity : string,HighSchoolYear : number)=>{
        this.HighSchoolName = HighSchoolName;
        this.HighSchoolCity = HighSchoolCity;
        this.HighSchoolYear = HighSchoolYear;
    }
    setContactDetails = (EmailAddress : string,AlternateMobileNumber : number,CurrentLiveingIn: string,HomeTown: string)=>{
        this.EmailAddress = EmailAddress;
        this.AlternateMobileNumber = AlternateMobileNumber;
        this.CurrentLiveingIn = CurrentLiveingIn;
        this.HomeTown = HomeTown;
    }
    setViewAndQuots = (ReligiousView : string,PoliticalView : string,FavoriteQuote: string)=>{
        this.ReligiousView = ReligiousView;
        this.PoliticalView = PoliticalView;
        this.FavoriteQuote = FavoriteQuote;
    }
    
// here are the Getters methods
getNickName = ()=>{
    return this.NickName;
}
getRelationshipStatus = ()=>{
    return this.RelationshipStatus;
}
getHaveDonatedBlood = ()=>{
    return this.HaveDonatedBlood;
}
getBloodGroup = ()=>{
    return this.BloodGroup;
}
getLanguageKnown = ()=>{
    return this.LanguageKnown;
}
getAge = ()=>{
    console.log(`Here we can calculate age of the user-- not implemented the code here`)
}
getBasicDetails = ()=>{
    console.log(`Here's the Basic details of the user's About section`);
    console.log(`UserName   : ${this.UserName}`);
    console.log(`BirthDate : ${this.BirthDate}`);
    console.log(`MobileNumber   : ${this.MobileNumber}`);
    console.log(`Gender  : ${this.Gender}`);
    console.log(`InterestedIn  : ${this.InterestedIn}`);
    console.log(`BloodGroup  : ${this.BloodGroup}`);
    console.log(`AboutMe  : ${this.AboutMe}`);
}
getGraduationDetails = ()=>{
    console.log(`Here's the Graduation Information`);
    console.log(`Graduation College name : ${this.GraduationCollegeName}`);
    console.log(`Graduation college city : ${this.GraduationCollegeCity}`);
    console.log(`Graduation University name : ${this.GraduationUniversity}`);
    console.log(`Graduation year : ${this.GraduationYear}`);
}
getHighschoolDetails = ()=>{
    console.log(`Here's the Highschool  Information`);
    console.log(`Highschool name : ${this.HighSchoolName}`);
    console.log(`Highschool college city : ${this.HighSchoolCity}`);
    console.log(`Highschool year : ${this.HighSchoolYear}`);
}
getCurrentProfessionalDetails = ()=>{
    console.log(`Here's the Professional Information`);
    console.log(`CurrentDesignation name : ${this.CurrentDesignation}`);
    console.log(`CurrentWorkAt  : ${this.CurrentWorkAt}`);
    console.log(`CurrentWorkAtFromYear  : ${this.CurrentWorkAtFromYear}`);
    console.log(`CurrentWorkAtToYear  : ${this.CurrentWorkAtToYear}`);
}
getContactDetails = ()=>{
    console.log(`Here's the Contact Information`);
    console.log(`EmailAddress  : ${this.EmailAddress}`);
    console.log(`AlternateMobileNumber  : ${this.AlternateMobileNumber}`);
    console.log(`CurrentLiveingIn  : ${this.CurrentLiveingIn}`);
    console.log(`HomeTown  : ${this.HomeTown}`);
}
getViewAndQuots = ()=>{
    console.log(`Here's the Some Views and Quotes Information`);
    console.log(`ReligiousView  : ${this.ReligiousView}`);
    console.log(`PoliticalView  : ${this.PoliticalView}`);
    console.log(`FavoriteQuote  : ${this.FavoriteQuote}`);
}
}// end of AboutPage class
    
// Create object of AboutPage class
let AboutPageObj = new AboutPage(`https://www.facebook.com/`,`DipAmar`,`28 Aug 1991`,1236521479,`Male`,`Female`,`I want to be a MEAN stack developer`,`O+`);
// set all the values 
AboutPageObj.setNickName(`Dip`);
AboutPageObj.setBloodGroup(`O+`);
AboutPageObj.setLanguageKnown(`English`,`Hindi`,`Marathi`)
AboutPageObj.setRelationshipStatus(`Single`)
AboutPageObj.setHaveDonatedBlood(true);
AboutPageObj.setGraduationDetails(`SSBT COET`,`Jalgaon`,`NMU`,2015);
AboutPageObj.setCurrentProfessionalDetails(`Software Developer`,`LnT`,2015,2018)
AboutPageObj.setHighschoolDetails(`D.N.C.V.P`,`Jalgaon`,2010);
AboutPageObj.setContactDetails(`abcxyz@gmail.com`,7896541237,`Pune`,`Jalgaon`);
AboutPageObj.setViewAndQuots(`Hum sab bhai bhai`,`No intrest`,'Why not now?');
//calling method to change the current  relationship status
AboutPageObj.setRelationshipStatus(`In-Relationship`);
// now display those value
console.log(`Now we display all the information`);
AboutPageObj.getBasicDetails();
AboutPageObj.getNickName();
AboutPageObj.getBloodGroup();
console.log(`Current Relationship Status : ${AboutPageObj.getRelationshipStatus()}`);
AboutPageObj.getRelationshipStatus()
AboutPageObj.getHaveDonatedBlood();
AboutPageObj.getGraduationDetails();
AboutPageObj.getCurrentProfessionalDetails()
AboutPageObj.getHighschoolDetails();
AboutPageObj.getContactDetails();
AboutPageObj.getViewAndQuots();
