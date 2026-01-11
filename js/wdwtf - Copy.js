function loadAllData() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

      var allData = JSON.parse(this.responseText);
      setupApplication(allData.Application);
      setupAbout(allData.About);
      setupOverview(allData.Overview);
      setupGlossary(allData.Glossary);
      setupRoadmap(allData.Roadmap);
      setupResources(allData.Resources);
      setupBTS(allData.BTS);
      setupFooter(allData.Footer);
      setupInformation(allData.Information);

    }

  }

  xhttp.open("GET", "data/wdwtfdata.json", true);
  xhttp.send();
}

function setupApplication(application) {

  document.getElementById("HeroTitle").innerHTML = application.HeroTitle;
  document.getElementById("HeroTitle2").innerHTML = application.HeroTitle2;
  document.getElementById("HeroSubtitle").innerHTML = application.HeroSubtitle;
  document.getElementById("HeroBlurb1").innerHTML = application.HeroBlurb1;
  document.getElementById("HeroBlurb2").innerHTML = application.HeroBlurb2;
  document.getElementById("HeroBlurb3").innerHTML = application.HeroBlurb3;

}

function setupAbout(about) {

  var aboutText1 = "<p class='aboutText'>" + about.AboutText1 + "</p>";
  var aboutText2 = "<p class='aboutText'>" + about.AboutText2 + "</p>";
  var aboutText3 = "<p class='aboutText'>" + about.AboutText3 + "</p>";
  var authorText1 = "<p class='authorText'>" + about.AuthorText1 + "</p>";
  var authorText2 = "<p class='authorText'>" + about.AuthorText2 + "</p>";
  var authorText3 = "<p class='authorText'>" + about.AuthorText3 + "</p>";
  var authorText4 = "<p class='authorText'>" + about.AuthorText4 + "</p>";
  var authorText5 = "<p class='authorText'>" + about.AuthorText5 + "</p>";
  var authorText6 = "<p class='authorText'>" + about.AuthorText6 + "</p>";
  var authorImage = "<img class='authorImage' src='" + about.AuthorImage + "' alt='author image'>";

  document.getElementById("aboutSide").innerHTML = aboutText1 + aboutText2 + aboutText3;
  document.getElementById("aboutPanel").innerHTML =  authorImage + authorText1 + authorText2 +authorText3 + authorText4 + authorText5+ authorText6;
  document.getElementById("aboutMobile").innerHTML = aboutText1 + aboutText2 + aboutText3 + authorImage + authorText1 + authorText2 +authorText3 + authorText4 + authorText5 + authorText6;

}

function setupOverview(overview) {

  var side = "";
  var panel = "";
  var mobile = "";
  var i;
  var paramString;
  var classString;
  var headerString;
  var headingString;
  var briefString;
  var paragraph1String;
  var paragraph2String;
  var paragraph3String;
  var summaryString;

  for (i = 0; i < overview.length; i++) {

    paramString = "\"overviewText\", \"overview" + i + "\"";
    classString1 = "\"overviewHeading overviewText overview" + i + "\"";
    classString2 = "\"overviewBrief overviewText overview" + i + "\"";
    classString3 = "\"overviewParagraph overviewText overview" + i + "\"";
    classString4 = "\"overviewSummary overviewText overview" + i + "\"";

    headerString = "<button class='overviewHeader' onclick='navigateSub(" + paramString + ")'>" + overview[i].header +"</button>";
    headingString = "<p class=" + classString1 + ">" + overview[i].heading + "</p>";
    briefString = "<p class=" + classString2 + ">" + overview[i].brief + "</p>";
    paragraph1String = "<p class=" + classString3 + ">" + overview[i].paragraph1 + "</p>";
    paragraph2String = "<p class=" + classString3 + ">" + overview[i].paragraph2 + "</p>";
    paragraph3String = "<p class=" + classString3 + ">" + overview[i].paragraph3 + "</p>";
    summaryString = "<p class=" + classString4 + ">" + overview[i].summary + "</p>";

    side += headerString;
    panel += headingString + briefString + paragraph1String + paragraph2String + paragraph3String + summaryString ;
    mobile += headerString + headingString + briefString + paragraph1String + paragraph2String + paragraph3String + summaryString;

  }

  document.getElementById("overviewSide").innerHTML = side;
  document.getElementById("overviewPanel").innerHTML = panel;
  document.getElementById("overviewMobile").innerHTML = mobile;

}

function setupGlossary(glossary) {

  var side = "";
  var panel = "";
  var mobile = "";
  var i;
  var paramString;
  var classString1;
  var classString2;
  var classString3;
  var headerString;
  var headingString;
  var briefString;
  var paragraph1String;
  var paragraph2String;
  var paragraph3String;

  for (i = 0; i < glossary.length; i++) {

    paramString = "\"glossaryText\", \"glossary" + i + "\"";
    classString1 = "\"glossaryHeading glossaryText glossary" + i + "\"";
    classString2 = "\"glossaryBrief glossaryText glossary" + i + "\"";
    classString3 = "\"glossaryParagraph glossaryText glossary" + i + "\"";

    headerString = "<button class='glossaryHeader' onclick='navigateSub(" + paramString + ")'>" + glossary[i].header +"</button>";
    headingString = "<p class=" + classString1 + ">" + glossary[i].heading + "</p>";
    briefString = "<p class=" + classString2 + ">" + glossary[i].brief + "</p>";
    paragraph1String = "<p class=" + classString3 + ">" + glossary[i].paragraph1 + "</p>";
    paragraph2String = "<p class=" + classString3 + ">" + glossary[i].paragraph2 + "</p>";
    paragraph3String = "<p class=" + classString3 + ">" + glossary[i].paragraph3 + "</p>";

    side += headerString;
    panel += headingString + briefString + paragraph1String + paragraph2String + paragraph3String ;
    mobile += headerString + headingString + briefString + paragraph1String + paragraph2String + paragraph3String;

  }

  document.getElementById("glossarySide").innerHTML = side;
  document.getElementById("glossaryPanel").innerHTML = panel;
  document.getElementById("glossaryMobile").innerHTML = mobile;

}

function setupRoadmap(roadmap) {

  var roadmapParagraph1 = "<p class='roadmapParagraph roadmapText'>" + roadmap.RoadmapParagraph1 + "</p>";
  var roadmapParagraph2 = "<p class='roadmapParagraph roadmapText'>" + roadmap.RoadmapParagraph2 + "</p>";
  var roadmapParagraph3 = "<p class='roadmapParagraph roadmapText'>" + roadmap.RoadmapParagraph3 + "</p>";
  var roadmapLegend = "<p class='roadmapLegend roadmapText'>" + roadmap.RoadmapLegend + "</p>";
  var roadmapImage = "<img class='roadmapImage' src='" + roadmap.RoadmapImage + "'></img>";

  document.getElementById("roadmapSide").innerHTML = roadmapParagraph1 + roadmapParagraph2 + roadmapParagraph3;
  document.getElementById("roadmapPanel").innerHTML = roadmapImage + roadmapLegend;
  document.getElementById("roadmapMobile").innerHTML = roadmapParagraph1 + roadmapParagraph2 + roadmapParagraph3 + roadmapImage + roadmapLegend;

}

function setupResources(resources) {

  var side = "";
  var panel = "";
  var mobile = "";
  var i, j;
  var paramString;
  var classString1;
  var classString2;
  var classString3;
  var classString4;
  var classString5;
  var classString6;
  var headerString;
  var nameString;
  var tagsString;
  var linkURLString;
  var screenshotString;
  var summaryString;
  var paragraph1String;
  var paragraph2String;
  var paragraph3String;

  for (i = 0; i < resources.length; i++) {

    paramString = "\"resourcesText\", \"resources" + i + "\"";
    classString1 = "\"resourcesName resourcesText resources" + i + "\"";
    classString2 = "\"resourcesTags resourcesText resources" + i + "\"";
    classString3 = "\"resourcesLink resourcesText resources" + i + "\"";
    classString4 = "\"resourcesScreenshot resourcesText resources" + i + "\"";
    classString5 = "\"resourcesSummary resourcesText resources" + i + "\"";
    classString6 = "\"resourcesParagraph resourcesText resources" + i + "\"";
    tagsString = "";

    headerString = "<button class='resourcesHeader' onclick='navigateSub(" + paramString + ")'>" + resources[i].header +"</button>";
    nameString = "<p class=" + classString1 + ">" + resources[i].name + "</p>";

    for (j = 0; j < resources[i].tags.length; j++) {

      tagsString += "<p class=" + classString2 + ">" + resources[i].tags[j] + "</p>";

    }

    linkURLString = "<a href='" + resources[i].linkURL + "' class=" + classString3 + ">" + resources[i].linkURL + "</a>";
    screenshotString = "<img class=" + classString4 + " alt='screenshot' src='" + resources[i].screenshot + "'></img>";
    summaryString = "<p class=" + classString5 + ">" + resources[i].summary + "</p>";
    paragraph1String = "<p class=" + classString6 + ">" + resources[i].paragraph1 + "</p>";
    paragraph2String = "<p class=" + classString6 + ">" + resources[i].paragraph2 + "</p>";
    paragraph3String = "<p class=" + classString6 + ">" + resources[i].paragraph3 + "</p>";

    side += headerString;
    panel += tagsString + nameString + linkURLString + screenshotString + summaryString + paragraph1String + paragraph2String + paragraph3String;
    mobile += headerString + tagsString + nameString + linkURLString + screenshotString + summaryString + paragraph1String + paragraph2String + paragraph3String;

  }

  document.getElementById("resourcesSide").innerHTML = side;
  document.getElementById("resourcesPanel").innerHTML = panel;
  document.getElementById("resourcesMobile").innerHTML = mobile;

}

function setupBTS(bts) {

  var side = "";
  var panel = "";
  var mobile = "";
  var i;
  var paramString;
  var classString1;
  var classString2;
  var classString3;
  var classString4;
  var sectionString;
  var titleString;
  var headerString;
  var subtitleString;
  var pageString;

  for (i = 0; i < bts.length; i++) {

    paramString = "\"BTSText\", \"BTS" + i + "\"";
    classString1 = "\"BTSSection BTSText BTS" + i + "\"";
    classString2 = "\"BTSTitle BTSText BTS" + i + "\"";
    classString3 = "\"BTSSubtitle BTSText BTS" + i + "\"";
    classString4 = "\"BTSPage BTSText BTS" + i + "\"";

    headerString = "<button class='BTSHeader' onclick='navigateSub(" + paramString + ")'>" + bts[i].Section + ", " + bts[i].Title +"</button></br>";
    sectionString = "<p class=" + classString1 + ">" + bts[i].Section + "</p>";
    titleString = "<p class=" + classString2 + ">" + bts[i].Title + "</p>";
    subtitleString = "<p class=" + classString3 + ">" + bts[i].Subtitle + "</p>";
    pageString = "<p class=" + classString4 + ">" + bts[i].page + "</p>";

    side += headerString;
    panel += sectionString + titleString + subtitleString + pageString ;
    mobile += headerString + subtitleString + pageString;

  }

  document.getElementById("BTSSide").innerHTML = side;
  document.getElementById("BTSPanel").innerHTML = panel;
  document.getElementById("BTSMobile").innerHTML = mobile;

}

function setupFooter(footer) {

  document.getElementById("FooterContent").innerHTML = footer.copyright;

}

function setupInformation(information) {

  var InfoDataUpdate = "<p class='infoText1'>Data Updated :</p>" + "<p class='infoText2'>" + information.DataUpdate + "</p>";
  var InfoDataUpload = "<p class='infoText1'>Data Uploaded :</p>" + "<p class='infoText2'>" + information.DataUpload + "</p>";
  var InfoSiteUpload = "<p class='infoText1'>Site Uploaded :</p>" + "<p class='infoText2'>" + information.SiteUpload + "</p>";
  var InfoSiteStatus = "<p class='infoText1'>Site Status :</p>" + "<p class='infoText2'>" + information.SiteStatus + "</p>";
  var InfoSiteNotes = "<p class='infoText3'>" + information.SiteNotes + "</p>";
  var InfoDataStatus = "<p class='infoText1'>Data Status :</p>" + "<p class='infoText2'>" + information.DataStatus + "</p>";
  var InfoDataNotes = "<p class='infoText3'>" + information.DataNotes + "</p>";
  var InfoGitRepo = "<p class='infoText1'>Git Repository :</p>" + "<p class='infoText2'>" + information.GitRepo + "</p>";
  var InfoHost = "<p class='infoText1'>Host :</p>" + "<p class='infoText2'>" + information.Host + "</p>";
  var InfoHostURL = "<p class='infoText1'>Host URL :</p>" + "<p class='infoText2'>" + information.HostURL + "</p>";
  var InfoStyling = "<p class='infoText1'>Styling :</p>" + "<p class='infoText2'>" + information.Styling + "</p>";
  var InfoFrontEnd = "<p class='infoText1'>Front End :</p>" + "<p class='infoText2'>" + information.FrontEnd + "</p>";
  var InfoBackEnd = "<p class='infoText1'>Back End :</p>" + "<p class='infoText2'>" + information.BackEnd + "</p>";
  var InfoDataSource = "<p class='infoText1'>Data Source :</p>" + "<p class='infoText2'>" + information.DataSource + "</p>";
  var InfoContent = InfoDataUpdate + InfoDataUpload + InfoSiteUpload + InfoSiteStatus + InfoSiteNotes + InfoDataStatus + InfoDataNotes + InfoGitRepo + InfoHost + InfoHostURL + InfoStyling + InfoFrontEnd + InfoBackEnd + InfoDataSource;

  document.getElementById("PopUpContent").innerHTML = InfoContent;

}

function navigate(selection) {

  var x, i;

  x = document.getElementsByClassName("content");

  for (i = 0; i < x.length; i++) {

    x[i].style.display = "none";

  }

  x = document.getElementsByClassName(selection);

  for (i = 0; i < x.length; i++) {

    x[i].style.display = "block";

  }

}

function navigateSub(selectionType, selection) {

  var x, i;

  x = document.getElementsByClassName(selectionType);

  for (i = 0; i < x.length; i++) {

    x[i].style.display = "none";

  }

  x = document.getElementsByClassName(selection);

  for (i = 0; i < x.length; i++) {

    x[i].style.display = "block";

  }

}

function adminCheck() {
  document.getElementById("Admin").disabled = true;
}

function closePopUp() {
  document.getElementById("PopUp").style.display = "none";
}

function openPopUp() {
  document.getElementById("PopUp").style.display = "block";
}



