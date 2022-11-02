{
   <div className="row">
<div className="sectionNumber">
  <div class="numberCircle">{2}</div>
  <div className="sectionTitle">
    <h2>Your Contact Preferences</h2>
  </div>
</div>
{secondSetQuestions.questions.map((item) => inputs(item))}
<button class="custom-btn btn-15">Continue</button>
</div>
<div className="row">
<div className="sectionNumber">
  <div class="numberCircle">{3}</div>
  <div className="sectionTitle">
    <h2>Critical Information</h2>
  </div>
</div>
{thirdSetQuestions.questions.map((item) => inputs(item))}
</div>
<div className="row">
<div className="sectionNumber">
  <div class="numberCircle">{4}</div>
  <div className="sectionTitle">
    <h2>Your Lifestyle and Health</h2>
  </div>
</div>
{fourthSetQuestions.questions.map((item) => inputs(item))}
</div>
<div className="row">
<div className="sectionNumber">
  <div class="numberCircle">{5}</div>
  <div className="sectionTitle">
    <h2>Almost There!</h2>
  </div>
</div>
{fifthSetQuestions.questions.map((item) => inputs(item))}
</div>
}
