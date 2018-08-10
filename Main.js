// Facebook About Page class.  Here I am using private members and public methods
var AboutPage = /** @class */ (function () {
    //Below is the constructor to intialize some of the fields
    function AboutPage(FacebookAddress, UserName, BirthDate, MobileNumber, Gender, InterestedIn, AboutMe, BloodGroup) {
        var _this = this;
        this.AboutMe = "NA";
        this.NickName = "";
        this.RelationshipStatus = "NA";
        this.ReligiousView = "";
        this.PoliticalView = "";
        this.FavoriteQuote = "";
        this.BloodGroup = "NA";
        this.HaveDonatedBlood = false;
        this.CurrentWorkAtFromYear = 0;
        this.CurrentWorkAtToYear = 0;
        this.GraduationYear = 0;
        this.HighSchoolYear = 0;
        // Here starts our Setters methods
        this.setNickName = function (NickName) {
            _this.NickName = NickName;
        };
        this.setBloodGroup = function (BloodGroup) {
            _this.BloodGroup = BloodGroup;
        };
        this.setLanguageKnown = function () {
            var LanguageKnown = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                LanguageKnown[_i] = arguments[_i];
            }
            _this.LanguageKnown = LanguageKnown;
        };
        this.setRelationshipStatus = function (RelationshipStatus) {
            _this.RelationshipStatus = RelationshipStatus;
        };
        this.setHaveDonatedBlood = function (haveDonatedBlood) {
            _this.HaveDonatedBlood = haveDonatedBlood;
        };
        this.setCurrentProfessionalDetails = function (CurrentDesignation, CurrentWorkAt, CurrentWorkAtFromYear, CurrentWorkAtToYear) {
            _this.CurrentDesignation = CurrentDesignation;
            _this.CurrentWorkAt = CurrentWorkAt;
            _this.CurrentWorkAtFromYear = CurrentWorkAtFromYear;
            _this.CurrentWorkAtToYear = CurrentWorkAtToYear;
        };
        this.setGraduationDetails = function (GraduationCollegeName, GraduationCollegeCity, GraduationUniversity, GraduationYear) {
            _this.GraduationCollegeName = GraduationCollegeName;
            _this.GraduationCollegeCity = GraduationCollegeCity;
            _this.GraduationUniversity = GraduationUniversity;
            _this.GraduationYear = GraduationYear;
        };
        this.setHighschoolDetails = function (HighSchoolName, HighSchoolCity, HighSchoolYear) {
            _this.HighSchoolName = HighSchoolName;
            _this.HighSchoolCity = HighSchoolCity;
            _this.HighSchoolYear = HighSchoolYear;
        };
        this.setContactDetails = function (EmailAddress, AlternateMobileNumber, CurrentLiveingIn, HomeTown) {
            _this.EmailAddress = EmailAddress;
            _this.AlternateMobileNumber = AlternateMobileNumber;
            _this.CurrentLiveingIn = CurrentLiveingIn;
            _this.HomeTown = HomeTown;
        };
        this.setViewAndQuots = function (ReligiousView, PoliticalView, FavoriteQuote) {
            _this.ReligiousView = ReligiousView;
            _this.PoliticalView = PoliticalView;
            _this.FavoriteQuote = FavoriteQuote;
        };
        // here are the Getters methods
        this.getNickName = function () {
            return _this.NickName;
        };
        this.getRelationshipStatus = function () {
            return _this.RelationshipStatus;
        };
        this.getHaveDonatedBlood = function () {
            return _this.HaveDonatedBlood;
        };
        this.getBloodGroup = function () {
            return _this.BloodGroup;
        };
        this.getLanguageKnown = function () {
            return _this.LanguageKnown;
        };
        this.getAge = function () {
            console.log("Here we can calculate age of the user-- not implemented the code here");
        };
        this.getBasicDetails = function () {
            console.log("Here's the Basic details of the user's About section");
            console.log("UserName   : " + _this.UserName);
            console.log("BirthDate : " + _this.BirthDate);
            console.log("MobileNumber   : " + _this.MobileNumber);
            console.log("Gender  : " + _this.Gender);
            console.log("InterestedIn  : " + _this.InterestedIn);
            console.log("BloodGroup  : " + _this.BloodGroup);
            console.log("AboutMe  : " + _this.AboutMe);
        };
        this.getGraduationDetails = function () {
            console.log("Here's the Graduation Information");
            console.log("Graduation College name : " + _this.GraduationCollegeName);
            console.log("Graduation college city : " + _this.GraduationCollegeCity);
            console.log("Graduation University name : " + _this.GraduationUniversity);
            console.log("Graduation year : " + _this.GraduationYear);
        };
        this.getHighschoolDetails = function () {
            console.log("Here's the Highschool  Information");
            console.log("Highschool name : " + _this.HighSchoolName);
            console.log("Highschool college city : " + _this.HighSchoolCity);
            console.log("Highschool year : " + _this.HighSchoolYear);
        };
        this.getCurrentProfessionalDetails = function () {
            console.log("Here's the Professional Information");
            console.log("CurrentDesignation name : " + _this.CurrentDesignation);
            console.log("CurrentWorkAt  : " + _this.CurrentWorkAt);
            console.log("CurrentWorkAtFromYear  : " + _this.CurrentWorkAtFromYear);
            console.log("CurrentWorkAtToYear  : " + _this.CurrentWorkAtToYear);
        };
        this.getContactDetails = function () {
            console.log("Here's the Contact Information");
            console.log("EmailAddress  : " + _this.EmailAddress);
            console.log("AlternateMobileNumber  : " + _this.AlternateMobileNumber);
            console.log("CurrentLiveingIn  : " + _this.CurrentLiveingIn);
            console.log("HomeTown  : " + _this.HomeTown);
        };
        this.getViewAndQuots = function () {
            console.log("Here's the Some Views and Quotes Information");
            console.log("ReligiousView  : " + _this.ReligiousView);
            console.log("PoliticalView  : " + _this.PoliticalView);
            console.log("FavoriteQuote  : " + _this.FavoriteQuote);
        };
        this.FacebookAddress = FacebookAddress;
        this.UserName = UserName;
        this.BirthDate = BirthDate;
        this.MobileNumber = MobileNumber;
        this.Gender = Gender;
        this.InterestedIn = InterestedIn;
        this.AboutMe = AboutMe;
        this.BloodGroup = BloodGroup;
    }
    return AboutPage;
}()); // end of AboutPage class
// Create object of AboutPage class
var AboutPageObj = new AboutPage("https://www.facebook.com/", "DipAmar", "28 Aug 1991", 1236521479, "Male", "Female", "I want to be a MEAN stack developer", "O+");
// set all the values 
AboutPageObj.setNickName("Dip");
AboutPageObj.setBloodGroup("O+");
AboutPageObj.setLanguageKnown("English", "Hindi", "Marathi");
AboutPageObj.setRelationshipStatus("Single");
AboutPageObj.setHaveDonatedBlood(true);
AboutPageObj.setGraduationDetails("SSBT COET", "Jalgaon", "NMU", 2015);
AboutPageObj.setCurrentProfessionalDetails("Software Developer", "LnT", 2015, 2018);
AboutPageObj.setHighschoolDetails("D.N.C.V.P", "Jalgaon", 2010);
AboutPageObj.setContactDetails("abcxyz@gmail.com", 7896541237, "Pune", "Jalgaon");
AboutPageObj.setViewAndQuots("Hum sab bhai bhai", "No intrest", 'Why not now?');
//calling method to change the current  relationship status
AboutPageObj.setRelationshipStatus("In-Relationship");
// now display those value
console.log("Now we display all the information");
AboutPageObj.getBasicDetails();
AboutPageObj.getNickName();
AboutPageObj.getBloodGroup();
console.log("Current Relationship Status : " + AboutPageObj.getRelationshipStatus());
AboutPageObj.getRelationshipStatus();
AboutPageObj.getHaveDonatedBlood();
AboutPageObj.getGraduationDetails();
AboutPageObj.getCurrentProfessionalDetails();
AboutPageObj.getHighschoolDetails();
AboutPageObj.getContactDetails();
AboutPageObj.getViewAndQuots();
