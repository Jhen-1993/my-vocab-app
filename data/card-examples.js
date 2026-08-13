// 例句補充資料：每一列為「英文詞彙|英文例句」。
// 例句必須真的使用目標詞，讓 index.html 能把該詞挖空出題；既有的繁中詞義仍由各字庫提供。
// decks.js 會在所有字庫合併、去重完成後，依英文詞彙把例句套用到卡片。
var CARD_EXAMPLE_ROWS = String.raw`
abroad|She plans to study abroad next year.
absent|Two employees were absent from the meeting.
access|Guests need a password to access the network.
actual|The actual cost was lower than we expected.
admire|I admire her patience with difficult customers.
adult|Every adult must show identification at the entrance.
agency|The travel agency arranged our hotel reservations.
alarm|The alarm rang at six o'clock this morning.
alike|The two brothers look alike in old photographs.
alone|He prefers to work alone when writing reports.
ambulance|An ambulance arrived within a few minutes.
apartment|They rented an apartment near the train station.
appetite|The long hike gave us a healthy appetite.
argue|The managers began to argue about the final budget.
artwork|The lobby displays artwork by local students.
aside|Please set the damaged box aside for inspection.
asleep|The child was already asleep when we arrived.
background|Her background in sales helped her get the job.
barber|The barber gave my brother a neat haircut.
bargain|This jacket is a bargain at half price.
beachfront|They booked a beachfront hotel for the holiday.
bean|Add one bean after the soup begins to boil.
behavior|His polite behavior impressed the interviewers.
belt|Please fasten your belt before the plane takes off.
beside|A small lamp stood beside the bed.
bicycle|She rides her bicycle to work every day.
booking|Please confirm your booking by email.
borrow|May I borrow your pen for a moment?
brave|It was brave of her to speak in public.
breakdown|The car had a breakdown on the highway.
breath|Take a deep breath before you begin the presentation.
bulletin|The school posted a bulletin about the schedule change.
bundle|He carried a bundle of old newspapers outside.
bus stop|We waited at the bus stop in the rain.
cabin|Our cabin had a beautiful view of the lake.
campground|The campground closes after October each year.
cancel|They had to cancel the outdoor concert.
carrier|The carrier delivered the package this morning.
cashier|The cashier gave me the correct change.
central|The hotel is in a central location downtown.
cereal|She ate cereal and fruit for breakfast.
changeable|The weather is changeable in early spring.
charity|The charity collects food for local families.
checkout|Checkout is at noon, so please return the key.
childhood|She spent her childhood near the ocean.
choice|You have a choice between tea and coffee.
citizen|Every citizen has the right to vote.
city hall|The meeting will take place at city hall.
classmate|My classmate helped me prepare for the exam.
clerk|The clerk checked our reservation quickly.
climate|The island has a warm climate all year.
coastline|We drove along the coastline before sunset.
compare|Compare the two prices before you buy anything.
concentrate|Please concentrate on one task at a time.
confirm|Could you confirm the delivery date today?
connection|We have a short connection in Singapore.
contact|Please contact us if you have any questions.
copy|Make a copy of the receipt for your records.
corner|The pharmacy is on the corner of this street.
counter|Please leave the completed form at the counter.
couple|A couple of customers are waiting outside.
courage|It took courage to admit the mistake.
court|The case will be heard in court next month.
crash|My computer may crash if too many programs are open.
crosswalk|Use the crosswalk when you cross the road.
crowded|The train is usually crowded during rush hour.
culture|Food is an important part of every culture.
customs|We declared the gifts at customs.
dairy|She buys dairy products from a local farm.
decoration|The flowers were a lovely decoration for the hall.
decrease|Sales may decrease during the slow season.
describe|Please describe the problem in detail.
destination|Taipei is our final destination on this trip.
diary|He writes in his diary before going to bed.
diet|A balanced diet gives you more energy.
dine|We plan to dine at a small Italian restaurant.
disease|Regular exercise can help prevent disease.
district|Their office is in the business district.
double|We booked a double room for two nights.
downtown|The museum is only ten minutes from downtown.
drama|The manager handled the complaint without any drama.
drawer|Your passport is in the top drawer.
driver's license|You need a driver's license to rent a car.
drugstore|I bought cough medicine at the drugstore.
dry cleaner|The dry cleaner will return my suit on Friday.
durable|This suitcase is durable enough for frequent travel.
earthquake|The earthquake caused minor damage to several buildings.
educate|The program aims to educate people about recycling.
elderly|The clinic offers special services for elderly patients.
elevator|Take the elevator to the fifth floor.
environment|We should protect the environment for future generations.
equal|All applicants should have an equal opportunity.
everywhere|We looked everywhere for the missing key.
exact|Please give me the exact address of the venue.
excited|The children were excited about the field trip.
firm|She works for an international law firm.
fitness|The gym offers classes for every level of fitness.
foreign|He speaks two foreign languages fluently.
form|Please complete this form before your appointment.
furniture|The office furniture arrived yesterday afternoon.
garage|The car is being repaired at the garage.
gardener|The gardener waters the plants every morning.
general|The general plan will be discussed on Monday.
gift shop|We bought postcards at the museum gift shop.
government|The government announced a new transportation plan.
grocery|I stopped at the grocery store after work.
guidebook|This guidebook includes useful maps and restaurant tips.
habit|Reading before bed is a good habit.
hallway|Please do not leave boxes in the hallway.
hang|Hang your coat on the hook by the door.
healthcare|Many employees receive healthcare through their company.
helpful|The receptionist was very helpful and friendly.
highway|Traffic was heavy on the highway this morning.
hiking|We went hiking in the mountains last weekend.
hotel lobby|Let's meet in the hotel lobby at eight.
human resources|Human resources will explain the new benefits.
identify|Can you identify the person in this photograph?
inform|Please inform the team about the time change.
ingredient|Fresh garlic is an important ingredient in this dish.
island|They spent a quiet week on a small island.
abide by|All employees must abide by the safety rules.
absorb|It took time to absorb the new information.
abstract|The report begins with a brief abstract.
accomplish|The team worked late to accomplish its goal.
account for|Travel costs account for most of the budget.
accuracy|Please check the accuracy of the figures.
acknowledge|Please acknowledge receipt of the revised contract.
administrative|He handles administrative tasks for the department.
advantageous|A flexible schedule is advantageous for many parents.
advertise|The company will advertise the position online.
ambassador|The ambassador spoke at the cultural event.
applicant|Each applicant must submit two references.
appoint|The board will appoint a new chairperson.
appraise|An expert will appraise the painting tomorrow.
approximate|The approximate cost is fifty thousand dollars.
archive|Please archive the completed files by year.
attendee|Every attendee received a name badge.
automate|The company plans to automate routine payments.
availability|Please check the manager's availability first.
bankruptcy|The retailer filed for bankruptcy last month.
binding|The signed agreement is legally binding.
budgetary|The committee discussed budgetary limits.
business card|She handed me her business card after the meeting.
bylaws|The association changed its bylaws last year.
calculate|Use this formula to calculate the total cost.
capital|The startup needs more capital to expand.
carefully|Please read the instructions carefully.
career path|The mentor helped her plan a career path.
catalogue|The catalogue lists every product by number.
certify|An inspector must certify the equipment as safe.
chairperson|The chairperson opened the meeting on time.
closure|The road closure delayed several deliveries.
collaborate|Our designers collaborate with local artists.
collective|The team made a collective decision.
compensation|The company offered compensation for the delay.
component|This small component controls the main switch.
comprise|The course will comprise six short modules.
conclude|We can conclude that the plan is working.
concrete|Please give us a concrete example.
conduct|The firm will conduct a customer survey.
confidential|Keep these financial records confidential.
consent|We need your written consent before proceeding.
considerable|The project requires considerable planning.
consist of|The package will consist of three separate parts.
consumption|Energy consumption rises during the summer.
contribute|Everyone can contribute an idea to the discussion.
cooperate|The two departments must cooperate closely.
corporate|The corporate office approved the proposal.
cost-effective|Online training can be a cost-effective solution.
coverage|The insurance provides coverage for theft.
credential|Her teaching credential expires in June.
critical|Good communication is critical to the project's success.
currency|You can exchange currency at the airport.
customize|Customers can customize the color of the bag.
database|The client information is stored in a secure database.
deadline extension|They requested a deadline extension for the report.
deduct|The company will deduct the fee from your payment.
defect|The technician found a defect in the screen.
demonstrate|Please demonstrate how the new system works.
depart|The train will depart from platform three.
designate|Please designate one person to lead the group.
desirable|Experience in sales is a desirable qualification.
detect|The sensor can detect smoke in the room.
develop|The company hopes to develop a new service.
discontinue|The store will discontinue this product line.
diversify|The firm wants to diversify its sources of income.
division|She works in the marketing division.
duration|The course has a duration of three weeks.
economic|The report examines recent economic trends.
economical|Taking the bus is more economical than driving.
edit|Please edit the document before you send it.
efficient|The new process is more efficient than the old one.
eligible|Only full-time staff are eligible for this benefit.
employment|The agency helps people find employment.
enterprise|The family runs a small enterprise.
entry|Write your name in the first entry on the form.
equivalent|One hundred centimeters is equivalent to one meter.
evidence|The report provides evidence of steady growth.
exclude|Please exclude duplicate records from the list.
exclusively|This lounge is used exclusively by members.
expenditure|The annual expenditure exceeded the original budget.
expertise|We need someone with expertise in digital marketing.
expiration|Check the expiration date before using the coupon.
extension|Please call extension 204 for technical support.
external|The company hired an external consultant.
factor|Price was an important factor in our decision.
financing|The project received financing from a local bank.
flexibility|Remote work gives employees more flexibility.
format|Please save the file in PDF format.
freight|The freight arrived at the warehouse on Tuesday.
funding|The museum received funding from several donors.
furthermore|Furthermore, the plan will reduce operating costs.
guarantee|The store offers a one-year guarantee.
guideline|Follow the guideline when completing the form.
headcount|The department's headcount increased this quarter.
implication|The change has an important implication for customers.
indicate|The chart may indicate a rise in online sales.
initiative|She showed initiative by solving the problem early.
inspect|A technician will inspect the machine today.
installation|The installation of the new software took an hour.
institute|The institute offers courses in language education.
intellectual|The job requires intellectual curiosity and patience.
intensive|They completed an intensive training program.
internal|Please discuss internal matters privately.
invest|Many people invest money for retirement.
manufacture|The factory will manufacture parts for bicycles.
market share|The company gained market share last year.
marketing|She works in marketing for a software company.
maximum|The room can hold a maximum of fifty people.
merchandise|The store displayed new merchandise near the entrance.
mission|Our mission is to provide reliable service.
negotiation|The contract is still under negotiation.
obligation|You have no obligation to accept the offer.
occupancy|Hotel occupancy is high during the festival.
operate|The company will operate stores across the country.
operational|The new website will be operational on Monday.
pending|Your application is still pending approval.
permanent|She accepted a permanent position with the firm.
personnel|Personnel will contact you about the schedule.
portfolio|He showed his design portfolio to the client.
precede|A short introduction will precede the presentation.
predict|Experts predict higher demand next year.
preference|Please tell us your seating preference.
premium|The premium plan includes extra support.
preserve|Store the food properly to preserve its freshness.
productivity|Short breaks can improve productivity.
proficiency|The role requires proficiency in English.
prospective|The event attracted prospective customers.
provision|The contract includes a provision for early cancellation.
qualify|You may qualify for a discount as a student.
quotation|We received a quotation from three suppliers.
recruit|The company plans to recruit more engineers.
recruitment|Recruitment begins again in September.
recruiter|The recruiter explained the interview process.
redeem|You can redeem this coupon before Friday.
refer|Please refer to page ten for more details.
renew|We need to renew the lease next month.
renovate|They plan to renovate the old office.
replacement|We sent a replacement for the damaged item.
resolution|The committee reached a resolution after discussion.
retire|My uncle plans to retire next summer.
revise|Please revise the report using these comments.
rotation|The staff rotation changes every two weeks.
salary range|The job posting lists a clear salary range.
sector|Tourism is an important sector of the local economy.
specification|The engineer checked the product specification.
stationary|Keep the camera stationary while taking the picture.
storage capacity|This device has enough storage capacity for photos.
subcontractor|The builder hired a subcontractor for the electrical work.
supervisor|Ask your supervisor before changing the schedule.
supply chain|The storm disrupted the global supply chain.
teleconference|We joined the teleconference from different offices.
therefore|The road was closed; therefore, we took another route.
timeline|The project timeline shows each major task.
transition|The transition to the new system went smoothly.
utility|Water is an essential public utility.
valid|Your ticket is valid until the end of the month.
variable|Shipping costs are variable, so the final price can change.
visible|The sign is clearly visible from the street.
wholesale|They buy coffee beans at wholesale prices.
withdraw|You can withdraw cash from this machine.
workload|Her workload became heavier before the deadline.
abatement|The city offered a tax abatement for the project.
absentee|The teacher spoke with the absentee after class.
accelerator|The startup joined a business accelerator last spring.
accessibility|The new ramp improves accessibility for wheelchair users.
accrual|The accountant recorded the accrual at month-end.
accrued expense|Rent is listed as an accrued expense this month.
acquisition|The acquisition created a larger company.
activation|Account activation takes only a few minutes.
adaptability|Adaptability is valuable in a changing workplace.
add-on|The extended warranty is an optional add-on.
adjustment|The manager made a small adjustment to the schedule.
advisory|The firm issued an advisory about the service outage.
after-sales service|Good after-sales service builds customer trust.
agency fee|The agency fee is included in the final invoice.
agenda item|The budget is the first agenda item today.
alignment|The team's goals are in alignment with the strategy.
allowance|The company gives interns a monthly allowance.
amendment|The contract amendment needs both signatures.
amortization|The loan amortization is spread over five years.
analyst|The analyst presented the sales forecast.
annual report|Shareholders read the annual report carefully.
approval process|The approval process takes about three days.
asset management|She works in asset management for a bank.
assignment|Your first assignment is due on Friday.
auditor|The auditor reviewed the company's accounts.
automation|Automation reduced the time needed for data entry.
aviation|She hopes to build a career in aviation.
backorder|The item is on backorder until next week.
bank transfer|Please pay by bank transfer if possible.
bar code|The cashier scanned the bar code on the package.
baseline|We need a baseline before measuring improvement.
beneficiary|Please name a beneficiary on the insurance form.
bid|The contractor submitted the lowest bid.
billing|Please contact billing if the amount is incorrect.
board meeting|The proposal will be discussed at the board meeting.
bonus scheme|The company introduced a new bonus scheme.
brand awareness|The campaign increased brand awareness among students.
brand loyalty|Good service can strengthen brand loyalty.
break-even|The new store reached break-even in its first year.
brokerage|The brokerage charges a fee for each trade.
cash flow|The manager monitors cash flow every week.
cash register|The cash register stopped working this morning.
certification|This certification is required for the position.
chair a meeting|She will chair a meeting with the regional team.
change order|The client approved the change order yesterday.
clearance|The shipment is waiting for customs clearance.
co-branding|The two companies launched a co-branding campaign.
code of conduct|Everyone must follow the company's code of conduct.
communication skills|Good communication skills are essential in this role.
company policy|Remote work is allowed under company policy.
computerized|The warehouse uses a computerized tracking system.
concession|The supplier offered a concession on the price.
confirmation number|Please keep your confirmation number for reference.
consignment|The shop sells local jewelry on consignment.
consignee|The consignee signed for the delivery.
consignor|The consignor arranged the shipment yesterday.
consortium|A consortium of banks financed the project.
consumer demand|Consumer demand rose before the holiday season.
consumer goods|The company produces household consumer goods.
contingency plan|We prepared a contingency plan for bad weather.
contractor|The contractor will repair the roof next week.
convention|The annual convention attracted visitors from abroad.
copyright|The artist owns the copyright to the image.
core business|Customer support is part of our core business.
cost analysis|The team completed a cost analysis before buying.
cost reduction|The plan focuses on cost reduction without layoffs.
costing|Accurate costing helps us set fair prices.
counteroffer|She made a counteroffer after reviewing the contract.
courier|The courier delivered the documents before noon.
credit line|The bank approved a larger credit line.
credit limit|The card has a monthly credit limit.
creditor|The creditor agreed to a new payment plan.
cross-functional|The project needs a cross-functional team.
customer base|The store has a loyal customer base.
customer loyalty|The program rewards customer loyalty.
customer retention|Quick support improves customer retention.
customer service desk|Please ask at the customer service desk.
customs declaration|Fill out the customs declaration before landing.
data entry|She spent the afternoon doing data entry.
debit card|I paid for lunch with my debit card.
debtor|The debtor made a payment last week.
decision maker|The sales team met with the decision maker.
deduction|The receipt supports the tax deduction.
defective|The store replaced the defective charger.
delivery date|Please confirm the delivery date by email.
demand forecast|The demand forecast helps us plan inventory.
depreciation|Depreciation reduces the asset's value over time.
direct deposit|My salary arrives by direct deposit.
direct marketing|The brand uses direct marketing to reach members.
directors' meeting|The budget was approved at the directors' meeting.
disbursement|The grant disbursement will occur in July.
distribution center|The package left the distribution center this morning.
distributor|The distributor supplies products to local stores.
dividend|The company paid a dividend to its shareholders.
down payment|We saved for the down payment on the apartment.
downsizing|The firm announced downsizing after sales declined.
due date|The payment is required by the due date.
e-commerce|E-commerce sales grew quickly last year.
earnings|The report showed higher earnings this quarter.
efficiency|The new tool improved the team's efficiency.
electronic signature|Please add your electronic signature here.
eligibility|Your eligibility depends on your employment status.
employer|The employer provides training for new staff.
employment contract|Read the employment contract before signing it.
endorsement|The product received an endorsement from a chef.
enrollment form|Submit the enrollment form by Friday.
entrepreneurship|The course teaches the basics of entrepreneurship.
entry-level|This is an entry-level role with training.
executive assistant|The executive assistant scheduled the meeting.
expense account|Keep receipts for your expense account.
export|The company plans to export tea to several countries.
exporter|The exporter arranged the shipping documents.
facility management|Facility management keeps the building safe and clean.
farewell party|We held a farewell party for our colleague.
financial statement|The accountant prepared the financial statement.
fixed cost|Rent is a fixed cost for the business.
follow up|I will follow up with the client tomorrow.
forecasting|Accurate forecasting helps prevent product shortages.
freelance|She works freelance as a graphic designer.
fulfillment center|The order was packed at the fulfillment center.
fundraiser|The school held a fundraiser for new books.
general manager|The general manager welcomed the new employees.
goal setting|Goal setting helps teams stay focused.
goods receipt|Please record the goods receipt in the system.
gross profit|Gross profit increased after costs fell.
growth rate|The growth rate slowed during the winter.
handover|The handover to the new manager was smooth.
hazard|A wet floor can be a safety hazard.
health insurance|The job includes health insurance for employees.
head office|The final decision came from the head office.
in-house|The company provides in-house training.
incur|Late payment may incur an additional fee.
indemnity|The contract includes an indemnity clause.
induction|New employees attend an induction on their first day.
industrial|The town has an industrial area near the port.
information technology|She works in information technology at the hospital.
installment|We paid for the computer in a single installment.
institution|The bank is a trusted financial institution.
insurance policy|Read your insurance policy before you travel.
intellectual property|The company protects its intellectual property carefully.
interest rate|The bank lowered its interest rate this month.
intern|The intern learned how to prepare reports.
internship|Her internship lasted for three months.
investment|The new factory was a major investment.
investor|The investor asked detailed questions about the plan.
invoice number|Please include the invoice number with your payment.
joint venture|The firms created a joint venture in Asia.
key performance indicator|Customer satisfaction is a key performance indicator.
labor cost|Labor cost increased because of overtime.
laboratory|The samples were tested in the laboratory.
labor union|The labor union met with company leaders.
landlord|The landlord repaired the broken heater.
lease|They signed a two-year lease for the office.
legal counsel|The company consulted its legal counsel.
letterhead|Please print the letter on company letterhead.
liability|The waiver limits the company's liability.
licensee|The licensee may use the brand name.
licensing|Licensing allows others to sell the product legally.
line manager|Ask your line manager for feedback.
loan|The bank approved her loan application.
loan application|He completed the loan application online.
loyalty program|The loyalty program gives members extra points.
machine operator|The machine operator checked the controls.
mailing list|Please add my address to the mailing list.
manufacturing|Manufacturing provides many jobs in the region.
market research|The team conducted market research before launching.
market segment|This product targets a young market segment.
marketplace|The online marketplace connects buyers and sellers.
media coverage|The event received positive media coverage.
merger agreement|Both companies signed the merger agreement.
milestone|Finishing the design was an important milestone.
minimum wage|The minimum wage increased this year.
minutes|The secretary sent the meeting minutes by email.
monetary|The award has both monetary and personal value.
monitoring|Regular monitoring helps us find problems early.
multinational|She works for a multinational company.
mutual fund|He invests a small amount in a mutual fund.
net income|Net income rose after expenses were reduced.
networking|Networking helped her find a new job.
nonprofit|The nonprofit provides meals for older people.
notice period|Employees must give a two-week notice period.
occupational|The clinic treats occupational injuries.
offshore|The company opened an offshore office.
onboarding|The onboarding process begins before the first day.
operating cost|Electricity is a major operating cost.
operating margin|The company improved its operating margin.
order form|Please complete the order form online.
organizational|The change created several organizational challenges.
overdue|Your library book is overdue.
overtime|The staff worked overtime to finish the order.
ownership|The document proves ownership of the vehicle.
packaging|The packaging protects the product during shipping.
performance review|Her performance review is scheduled for June.
petty cash|Use petty cash only for small purchases.
placement|The agency helped with job placement.
planning|Careful planning prevented delays.
point of sale|The display stands near the point of sale.
policyholder|The policyholder reported the accident promptly.
portable device|This portable device fits easily in a bag.
portfolio manager|The portfolio manager reviewed the investments.
postal code|Please enter your postal code correctly.
prepaid|The card is prepaid and cannot be reloaded.
press release|The company issued a press release this morning.
price list|The supplier emailed an updated price list.
pricing|The manager reviewed the pricing strategy.
production line|The new production line started last week.
profit margin|The shop increased its profit margin.
profitability|The report examines the product's profitability.
project manager|The project manager assigned the next tasks.
prospect|The salesperson called a promising prospect.
public relations|She works in public relations for the museum.
purchase order|The buyer sent a purchase order to the supplier.
quality control|Quality control checks every finished item.
quality assurance|Quality assurance prevents defects before shipping.
recruitment agency|The recruitment agency found several candidates.
refund policy|Please read the refund policy before ordering.
reimbursement|Submit the receipt to request reimbursement.
relocation|The company offered relocation support for the transfer.
aberration|The sudden drop in sales was an aberration, not a trend.
abjure|He chose to abjure violence in his public statement.
abrogate|The court may abrogate the rule if it is unconstitutional.
abscond|The suspect tried to abscond before the trial.
abstain|Several members chose to abstain from the vote.
adamant|She was adamant that the records be corrected.
aesthetic|The designer created a simple, modern aesthetic.
affinity|She has a strong affinity for classical music.
aggrandize|The report seemed designed to aggrandize its author.
alleviate|The new policy should alleviate pressure on small firms.
allay|The explanation helped allay the customers' concerns.
aloof|He seemed aloof at first but became friendly later.
ambivalent|She felt ambivalent about moving abroad.
anachronism|A smartphone in that historical film was an anachronism.
anecdotal|Anecdotal stories cannot replace careful research.
antecedent|The earlier agreement was an antecedent to the dispute.
apathetic|The audience became apathetic after the long speech.
appease|The manager tried to appease the angry customer.
aversion|He has a strong aversion to unnecessary risk.
boisterous|The children grew boisterous after lunch.
caustic|Her caustic comment made the room uncomfortable.
condescending|His condescending tone upset the new employee.
conjecture|Any answer without data is only conjecture.
conscientious|She is conscientious about checking every detail.
culpable|The investigation found no one clearly culpable.
cynical|The cynical reviewer doubted the company's promise.
debilitate|The long illness continued to debilitate him.
decorum|Please maintain decorum during the formal ceremony.
deference|Out of deference to her experience, we listened first.
demur|He did not demur when asked to lead the project.
denigrate|Do not denigrate colleagues to gain an advantage.
despot|The novel describes a despot who ruled by fear.
deterrent|Visible cameras can be a deterrent to theft.
dichotomy|The debate presents a false dichotomy between cost and quality.
diffuse|The supervisor tried to diffuse the tense situation.
digress|Please do not digress from the main topic.
disavow|The company chose to disavow the unauthorized advertisement.
discord|The proposal caused discord within the committee.
disdain|She looked at the cheap imitation with disdain.
dispassionate|A dispassionate review is needed before we decide.
dogmatic|His dogmatic approach left no room for discussion.
dormant|The account remained dormant for several years.
dubious|The website made several dubious claims.
eclectic|Her playlist has an eclectic mix of music.
efficacy|The study measured the efficacy of the new treatment.
elusive|A clear answer remained elusive after the meeting.
embezzle|The accountant was accused of trying to embezzle funds.
emulate|Young designers often emulate successful brands.
enervate|The humid weather can enervate even experienced hikers.
engender|Clear rules engender trust among employees.
eradicate|The program aims to eradicate the disease.
esoteric|The lecture was too esoteric for most visitors.
ethereal|Soft light gave the room an ethereal appearance.
evasive|His evasive answers raised more questions.
exemplary|Her exemplary service earned praise from customers.
expeditious|We need an expeditious solution to the delay.
explicit|The instructions were explicit and easy to follow.
extricate|The team worked to extricate the project from debt.
fallacious|The argument is fallacious because it ignores the evidence.
fickle|Customer demand can be fickle during holiday seasons.
florid|The writer used florid language in a simple report.
flounder|Without guidance, the new team began to flounder.
frugal|They are frugal and avoid unnecessary purchases.
furtive|He gave a furtive glance at the answer sheet.
genial|Our genial host welcomed everyone warmly.
gratuitous|The film included gratuitous violence that added nothing.
heedless|Heedless driving can endanger other people.
heterodox|Her heterodox theory challenged traditional assumptions.
homogeneous|The sample was too homogeneous for comparison.
hyperbole|Calling it a disaster was obvious hyperbole.
hypothetical|Let us consider a hypothetical situation first.
idiosyncrasy|Each software system has its own idiosyncrasy.
immutable|The dates are not immutable and may change.
impudent|It was impudent to interrupt the speaker repeatedly.
inchoate|The idea was still inchoate when we first discussed it.
incongruous|The bright sign looked incongruous in the old library.
indict|A grand jury may indict the suspect.
indolent|His indolent habits made deadlines difficult to meet.
ineffable|The view from the mountain was almost ineffable.
inept|The inept response made the complaint worse.
ingenuous|Her ingenuous question revealed genuine curiosity.
inhibit|Fear can inhibit people from sharing ideas.
insatiable|The company has an insatiable demand for data.
intuitive|The new app has an intuitive design.
inundate|A major outage could inundate the support team with requests.
irascible|The irascible customer complained about every detail.
irrevocable|Once signed, the decision became irrevocable.
kinship|They felt a kinship through their shared experience.
lament|Many residents lament the loss of the old theater.
languid|The heat made everyone feel languid after lunch.
latent|The audit uncovered a latent problem in the process.
lethargic|The market was lethargic during the holiday week.
malevolent|The email contained a malevolent threat.
meticulous|She is meticulous about filing every document.
negligible|The difference in cost was negligible.
notorious|The crossing is notorious for heavy traffic.
nuanced|The article offers a nuanced view of the issue.
ominous|Dark clouds gave the afternoon an ominous feeling.
opulent|They held the event in an opulent ballroom.
ornate|The hotel lobby has an ornate ceiling.
orthodox|The firm follows an orthodox investment strategy.
ostracize|No team should ostracize a member for asking questions.
palpable|The tension in the room was palpable.
parochial|A parochial view can limit international growth.
paucity|A paucity of evidence delayed the decision.
philanthropy|Her philanthropy supports scholarships for students.
placate|The refund did little to placate the disappointed buyer.
pragmatic|We need a pragmatic solution that fits the budget.
precarious|The ladder looked precarious in the strong wind.
precedent|The ruling may set a precedent for future cases.
presumptuous|It was presumptuous to assume everyone agreed.
prolific|She is a prolific writer of short stories.
profound|The loss had a profound effect on the community.
propitious|The sunny weather was propitious for the event.
prosaic|The report was useful but rather prosaic.
prudent|It is prudent to save money for emergencies.
punctilious|He is punctilious about arriving on time.
reconcile|The accountant must reconcile the two accounts.
remorse|He expressed deep remorse for the mistake.
resilient|The small business proved resilient after the storm.
resolute|She remained resolute despite the criticism.
reverent|Visitors spoke in reverent tones inside the memorial.
rigorous|The study used a rigorous method.
rudimentary|He has only rudimentary knowledge of coding.
salient|The most salient point was the cost increase.
satiate|A light meal did not satiate the hungry hikers.
scrupulous|The editor is scrupulous about factual accuracy.
shrewd|It was a shrewd investment at the time.
solicitous|The nurse was solicitous about the patient's comfort.
spurious|The website was removed for making spurious claims.
stoic|She remained stoic during the difficult interview.
stringent|The lab follows stringent safety standards.
subtle|There was a subtle change in his tone.
succinct|Please keep your answer succinct.
susceptible|Young plants are susceptible to frost.
tentative|We made a tentative plan for next week.
thorough|The inspector completed a thorough review.
tolerant|The plant is tolerant of dry conditions.
treacherous|The mountain path became treacherous after rain.
ubiquitous|Smartphones are ubiquitous in modern life.
unanimous|The vote was unanimous in favor of the proposal.
unequivocal|She gave an unequivocal answer: no.
utilitarian|The office has a utilitarian design.
vacillate|Do not vacillate when a quick decision is needed.
vehement|Several residents voiced vehement opposition to the plan.
venerable|The museum occupies a venerable old building.
verbose|His verbose explanation confused the audience.
vigilant|Staff must remain vigilant for safety hazards.
virtuous|The story praises a virtuous and honest leader.
volatile|Fuel prices are volatile this year.
wither|The flowers will wither without water.
abnegation|Her abnegation of personal comfort impressed the team.
adulterate|Do not adulterate the product with cheap materials.
aggrieved|The aggrieved customer requested a formal review.
amorphous|The plan was still amorphous and lacked details.
animosity|Years of animosity divided the two groups.
annul|The court may annul the contract.
antipathy|He felt immediate antipathy toward the unfair rule.
apposite|Her example was apposite to the discussion.
arrogate|No manager should arrogate all credit for a team's work.
ascribe|People often ascribe the success to good timing.
aspersion|The article cast an aspersion on his reputation.
assent|The board gave its assent to the proposal.
astute|She made an astute observation about the market.
atrophy|Unused skills can atrophy over time.
attenuate|Distance can attenuate the strength of a signal.
attrition|The company reduced staff through natural attrition.
avow|She chose to avow her support for the new policy.
banal|The speech relied on banal phrases.
blatant|It was a blatant violation of the rules.
blithe|His blithe response ignored serious concerns.
broach|She decided to broach the subject gently.
calumny|The lawyer denied the calumny in the article.
camaraderie|The trip built camaraderie among the new staff.
censure|The official received public censure for the remarks.
chastise|The coach did not chastise the team after one loss.
commensurate|Pay should be commensurate with experience.
compendium|The guide is a useful compendium of local resources.
complicit|The investigation found him complicit in the fraud.
concomitant|Fatigue is a concomitant effect of the illness.
conflagration|Firefighters contained the conflagration before dawn.
conflate|Do not conflate personal opinion with evidence.
conspicuous|Her bright coat was conspicuous in the crowd.
construe|Do not construe silence as agreement.
consummate|She is a consummate professional under pressure.
contemptuous|His contemptuous reply ended the discussion.
contravene|The proposal would contravene current regulations.
convivial|The café has a convivial atmosphere.
credence|The new evidence gives credence to her account.
decry|Many groups decry the proposed cuts.
defunct|The defunct factory is being turned into housing.
deluge|A deluge of emails followed the announcement.
demise|The newspaper reported the demise of the old brand.
deplete|The repairs will deplete our emergency fund.
depravity|The novel explores the depravity of a corrupt ruler.
derivative|The sequel felt derivative of the first film.
desiccate|Hot winds can desiccate the soil quickly.
diatribe|His speech became a diatribe against the media.
dilapidated|They bought a dilapidated house and restored it.
diminutive|The diminutive device fits in a pocket.
accede|The board agreed to accede to the request.
acclimate|New employees need time to acclimate to the workplace.
accolade|The scientist received an accolade for her research.
accretion|The reef grew through the slow accretion of coral.
acrimony|The debate ended with unnecessary acrimony.
acrid|An acrid smell came from the burning plastic.
acuity|Her mental acuity helped her solve the puzzle.
adjourn|The chair decided to adjourn the meeting early.
adjudicate|An independent panel will adjudicate the dispute.
adjunct|The online course is an adjunct to classroom teaching.
admonition|His admonition reminded us to protect customer data.
adversarial|The negotiation became adversarial after the accusation.
advocacy|Her advocacy helped secure funding for the clinic.
affliction|The medication eased his chronic affliction.
affront|The rude remark was an affront to the host.
agitate|The rumor continued to agitate the workforce.
allegory|The novel uses an allegory to discuss power.
alleviation|The aid provided some alleviation of their hardship.
alliance|The two companies formed an alliance.
allude|The speaker chose to allude to a problem without naming it.
altercation|A brief altercation broke out near the entrance.
altruism|Her altruism inspired others to volunteer.
amalgamate|The merger will amalgamate the two departments.
amenable|The manager was amenable to a flexible schedule.
amnesty|The government declared an amnesty for minor offenses.
analogue|This device is a modern analogue of the old tool.
animus|The decision seemed motivated by personal animus.
annihilate|The storm could annihilate unprotected crops.
anodyne|His anodyne remarks did not address the real problem.
antagonism|Open communication reduced antagonism between the teams.
antiquated|The office still uses an antiquated filing system.
appeasement|The policy of appeasement failed to stop the conflict.
arbitration|The contract requires arbitration before a lawsuit.
arcane|The manual is full of arcane technical terms.
ardor|She spoke about the project with great ardor.
artifice|The painting's beauty came from skill, not artifice.
ascendancy|The brand gained ascendancy in the local market.
asperity|He answered the question with unexpected asperity.
assiduity|Her assiduity made the research team more productive.
asymmetry|The designer noticed an asymmetry in the layout.
atonement|He offered an apology as atonement for the error.
authenticity|Experts questioned the authenticity of the document.
autocracy|The country was ruled by an autocracy for decades.
avowal|Her avowal of support encouraged the volunteers.
axiom|The principle is treated as an axiom in the field.
baleful|The dark, baleful look alarmed the children.
bellicose|His bellicose language made compromise difficult.
bereft|They felt bereft after the community center closed.
beset|The project was beset by delays and rising costs.
blandishment|The salesman used blandishment to win the client.
bravado|His bravado disappeared when the test began.
burgeon|Interest in electric bikes continues to burgeon.
byproduct|Heat is a byproduct of this process.
calibrate|Please calibrate the scale before weighing the samples.
cardinal|Safety is a cardinal concern for the company.
catalyze|The grant could catalyze new research.
catharsis|Writing the letter gave her a sense of catharsis.
causticity|The causticity of his remarks surprised the team.
caveat|One caveat is that the data are incomplete.
celerity|The team responded with impressive celerity.
centralize|The company plans to centralize its customer records.
chronicity|The chronicity of the problem requires long-term care.
circumspect|Be circumspect when sharing confidential information.
circumstantial|The case relied on circumstantial evidence.
clamor|A clamor of voices filled the hallway.
coercion|The agreement was invalid because of coercion.
collate|Please collate the survey responses by region.
colloquial|Avoid colloquial language in a formal report.
commemorate|The town will commemorate its founding this weekend.
commiserate|Friends gathered to commiserate after the loss.
commodify|Some critics fear the platform will commodify art.
compassionate|The nurse gave compassionate care to every patient.
compel|The evidence may compel the company to act.
compensatory|The payment was compensatory, not punitive.
complacency|Complacency can lead to preventable mistakes.
complementary|The two services are complementary rather than competing.
composure|She kept her composure during the difficult call.
conceit|The poem uses an unusual conceit about time.
conciliate|The mediator tried to conciliate both sides.
concurrent|Two concurrent sessions will begin at ten.
conducive|A quiet room is conducive to careful study.
confound|The unexpected result continued to confound researchers.
connoisseur|He is a connoisseur of rare teas.
conscientiousness|Her conscientiousness made her a trusted colleague.
conspicuity|The bright sign improved the shop's conspicuity.
consternation|To our consternation, the flight was canceled.
constriction|The pipe's constriction reduced the water flow.
contagion|The team acted quickly to limit contagion.
contempt|She spoke about the unfair rule with contempt.
contend|Several firms contend for the same contract.
contention|The main contention is that the policy is unfair.
contrivance|The device is a clever contrivance for saving space.
conviction|He spoke with conviction about the proposal.
corollary|A corollary of growth is greater demand for staff.
corporeal|The exhibition explores the relationship between mind and corporeal form.
corrosive|Salt water has a corrosive effect on metal.
cosmopolitan|The city has a cosmopolitan population.
counterfeit|The store refused to accept the counterfeit bill.
covet|Do not covet what you cannot afford.
credulity|The scam succeeded because of public credulity.
criterion|Cost is one criterion for selecting a vendor.
cumulative|The cumulative effect of small changes was significant.
daunt|The steep climb did not daunt the hikers.
debilitation|Prolonged stress can cause physical debilitation.
deceitful|The advertisement was deceitful and misleading.
decentralize|The agency plans to decentralize decision-making.
definitive|This is the definitive guide to the collection.
degrade|Sunlight can degrade the quality of the material.
dehydrate|Drink water so that you do not dehydrate.
deliberate|She made a deliberate choice to wait.
demarcate|The fence helps demarcate the two properties.
demonstrable|The training produced demonstrable improvement.
demote|The firm may demote managers who ignore policy.
denouement|The novel's denouement surprised the readers.
deprecate|The board voted to deprecate the outdated system.
deprivation|Sleep deprivation reduces concentration.
derogatory|The review contained derogatory remarks.
despondent|He felt despondent after the rejection.
destitute|The charity supports destitute families.
determinant|Price is a key determinant of demand.
detest|I detest wasting food.
detour|A detour added twenty minutes to the trip.
disarray|The office was in disarray after the move.
disavowal|Her disavowal of the message was immediate.
discernible|There was no discernible difference between the samples.
disconcerting|The sudden silence was disconcerting.
discretion|Use your discretion when handling private information.
discriminate|The policy must not discriminate against any group.
disdainful|He gave a disdainful look at the cheap product.
disentangle|We need to disentangle fact from rumor.
disparate|The report combines disparate sources of information.
dispel|The manager's explanation helped dispel doubts.
disposition|Her calm disposition helped during the crisis.
dissemination|The dissemination of accurate news is essential.
dissent|One member expressed dissent during the vote.
distill|The editor helped distill the report into key points.
divest|The firm plans to divest its overseas unit.
docility|The trainer valued the dog's docility.
dogma|Good research should question dogma.
draconian|The rule seemed draconian to many employees.
duress|He signed the document under duress.
ebullience|Her ebullience lifted everyone's mood.
eccentricity|His eccentricity made him memorable, not unreliable.
ecology|The project studies the ecology of coastal wetlands.
efface|Time may efface the writing on the stone.
effrontery|She had the effrontery to blame others for her error.
egregious|The report identified an egregious accounting error.
elude|The answer continued to elude the investigators.
embellish|Do not embellish the story with false details.
eminent|An eminent scholar gave the opening lecture.
empathy|Good managers show empathy toward their staff.
empower|Training can empower employees to solve problems.
encomium|The retiring teacher received an encomium from students.
endemic|Malaria is endemic in some tropical regions.
enforce|The agency will enforce the new regulation.
engross|A good mystery novel can engross readers for hours.
enumerate|Please enumerate the reasons for your decision.
erratic|The machine's erratic behavior needs investigation.
estranged|The estranged friends spoke again after many years.
evince|Her careful questions evince real interest.
exalt|The speech seemed designed to exalt one person.
exasperate|Repeated delays can exasperate passengers.
exhort|The coach will exhort the team to stay focused.
exigency|The storm created an exigency that required quick action.
expedite|Please expedite the shipment if possible.
expound|The speaker will expound on the new policy.
extant|Only two extant copies of the book remain.
extenuate|Nothing can extenuate the harm caused by fraud.
fabricate|Do not fabricate data to support a claim.
faction|A small faction opposed the proposal.
fallow|The farmer left the field fallow for a season.
fathom|I cannot fathom why the files disappeared.
fatuous|His fatuous remark added nothing to the debate.
feign|She tried to feign surprise at the news.
feral|Feral cats live near the abandoned building.
fervid|He gave a fervid speech about climate action.
finesse|She handled the negotiation with finesse.
forbearance|The customer showed forbearance during the delay.
foreboding|The strange silence filled her with foreboding.
formidable|The exam was formidable but fair.
forsake|They refused to forsake their original values.
fulsome|The review offered fulsome praise for the team.
functionary|A government functionary processed the permit.
galvanic|The announcement had a galvanic effect on the team.
genteel|The restaurant has a genteel atmosphere.
germane|Please keep your comments germane to the topic.
glib|His glib answer failed to address the concern.
goad|The criticism seemed to goad him into working harder.
guile|She won the negotiation through patience, not guile.
halcyon|They remembered the halcyon days of their childhood.
harbinger|The first frost is a harbinger of winter.
harrowing|The rescue was a harrowing experience for everyone.
hedonistic|The novel criticizes a hedonistic lifestyle.
heretical|His heretical idea challenged established practice.
hubris|Hubris can make leaders ignore useful advice.
humdrum|She wanted a job less humdrum than data entry.
hypocrisy|The public criticized the company's hypocrisy.
iconoclast|The artist was known as an iconoclast.
idealize|Do not idealize the past without remembering its problems.
illicit|The officers found illicit goods in the shipment.
illuminate|The chart helps illuminate the main trend.
illusory|The apparent savings were illusory.
imminent|A decision is imminent after months of discussion.
immoderate|The report criticized his immoderate spending.
impair|Lack of sleep can impair judgment.
impeach|The legislature voted to impeach the official.
imperious|Her imperious manner discouraged questions.
impertinent|That is an impertinent question for this meeting.
improvise|We had to improvise when the projector failed.
incendiary|The article used incendiary language.
incessant|The incessant noise made concentration difficult.
inclement|The match was delayed by inclement weather.
incoherent|His explanation was incoherent and incomplete.
incompatible|The two systems are incompatible.
inconsequential|The error was inconsequential to the final result.
indignant|She was indignant about the unfair charge.
inequity|The study revealed inequity in access to care.
infallible|No method is infallible.
infamous|The street is infamous for traffic jams.
ingratiate|He tried to ingratiate himself with the director.
inimical|Poor communication is inimical to teamwork.
insidious|The problem was insidious and hard to detect.
intransigent|The intransigent side refused to compromise.
intrinsic|Curiosity has intrinsic value in learning.
inveigh|Several speakers continued to inveigh against the proposed cuts.
inveterate|He is an inveterate collector of old maps.
irony|There is irony in solving the problem with more rules.
itinerant|The itinerant worker moved between several towns.
jargon|Avoid jargon when speaking to new customers.
jovial|Our jovial guide made the tour enjoyable.
knell|The closure sounded the knell for the small business.
labyrinthine|The building's labyrinthine hallways confused visitors.
lackluster|The product launch received a lackluster response.
languish|Without funding, the project may languish.
lassitude|After the long flight, she felt deep lassitude.
leeway|The supervisor gave us some leeway on the deadline.
lenient|The teacher was lenient about the late homework.
levity|A little levity eased the tense meeting.
libel|The newspaper removed the statement to avoid libel.
limpid|The lake was limpid in the early morning.
ludicrous|The proposed price was ludicrous.
maladroit|His maladroit comment offended the guest.
malady|The clinic specializes in treating chronic malady.
malice|The message was written with clear malice.
marginal|The change produced only marginal improvement.
martial|The museum displayed martial artifacts from the era.
meager|The small shop earned a meager profit.
mercenary|The mercenary leader fought for money, not loyalty.
militant|A militant group claimed responsibility for the attack.
misconstrue|Do not misconstrue my silence as approval.
miserly|The miserly owner refused to replace the broken chairs.
misnomer|Calling the small pond a lake is a misnomer.
multifaceted|The issue requires a multifaceted solution.
myopic|A myopic strategy can harm long-term growth.
nefarious|The police investigated a nefarious scheme.
nonchalant|He gave a nonchalant shrug when asked.
nostalgia|The old song filled her with nostalgia.
noxious|Noxious fumes forced everyone to leave the room.
obdurate|The obdurate manager would not change his mind.
obligatory|Safety training is obligatory for all staff.
oblivious|She was oblivious to the noise around her.
obsequious|His obsequious praise made the manager uncomfortable.
obviate|Careful planning can obviate many delays.
opaque|The rules are opaque to new employees.
opportunistic|The company made an opportunistic purchase during the downturn.
opprobrium|The decision brought public opprobrium.
outlandish|He arrived wearing an outlandish hat.
overarching|The overarching goal is better customer service.
overstate|Do not overstate the benefits of the product.
paltry|The refund was a paltry amount.
panacea|Technology is not a panacea for every problem.
pathos|The speech had great pathos and moved the audience.
pedantic|His pedantic corrections slowed the discussion.
penchant|She has a penchant for solving difficult puzzles.
penitent|The penitent employee apologized sincerely.
perceptive|Her perceptive question identified the real issue.
perilous|The road was perilous during the storm.
perpetual|The machine's perpetual noise annoyed the staff.
perplex|The conflicting instructions may perplex a new hire.
pertinent|Please provide only pertinent details.
peruse|Take time to peruse the agreement before signing.
pessimistic|He is pessimistic about sales next quarter.
piety|The ceremony was marked by quiet piety.
pinnacle|Winning the award was the pinnacle of her career.
plethora|The report contains a plethora of unnecessary charts.
ponder|We need time to ponder the consequences.
precipitate|One careless email can precipitate a crisis.
preclude|Poor timing may preclude a successful launch.
predicament|The missed train left us in a difficult predicament.
preempt|The company acted early to preempt a shortage.
prevalent|Online payments are prevalent in this city.
primeval|The trail passes through a primeval forest.
procrastinate|Do not procrastinate on important tasks.
prodigal|His prodigal spending worried his family.
prodigious|The team made a prodigious effort to finish.
proliferate|False rumors can proliferate online quickly.
prologue|The author read the prologue at the event.
propensity|She has a propensity to ask careful questions.
proscribe|The law will proscribe the sale of unsafe goods.
prosperity|The port brought prosperity to the town.
provincial|His provincial assumptions limited the discussion.
pugnacious|The pugnacious customer argued with everyone.
quell|The announcement helped quell public concern.
querulous|The querulous caller complained about every detail.
quiescent|The volcano has been quiescent for many years.
rancor|They settled the dispute without rancor.
ravenous|After the hike, we were ravenous.
rebuke|The supervisor gave him a quiet rebuke.
reclusive|The reclusive author rarely gives interviews.
recount|She asked him to recount what happened.
redress|The company offered redress for the faulty product.
regale|The host loves to regale guests with stories from his travels.
reinstate|The board voted to reinstate the employee.
reiterate|Let me reiterate the main safety rule.
rejuvenate|A short holiday can rejuvenate a tired team.
remedial|She attended remedial classes to improve her writing.
renounce|He chose to renounce his claim to the property.
replete|The report is replete with useful examples.
reprehensible|Fraud is reprehensible in any profession.
reprieve|The extension gave us a brief reprieve.
reproach|She spoke without reproach or anger.
repudiate|The company chose to repudiate the false statement.
reserved|He is reserved around people he does not know.
respite|The quiet weekend provided a welcome respite.
restrain|Please restrain the urge to interrupt.
retaliate|The company may not retaliate against a whistleblower.
retract|The newspaper agreed to retract the inaccurate claim.
revere|Many people revere her for her charity work.
rhetoric|We need practical action, not empty rhetoric.
rife|Rumors were rife after the announcement.
robust|The company reported robust demand for its services.
ruthless|The ruthless competitor cut prices drastically.
sacrosanct|Patient privacy is sacrosanct at this clinic.
sanctimonious|His sanctimonious speech annoyed the audience.
sardonic|She replied with a sardonic smile.
scant|We had scant information before the meeting.
scathing|The critic wrote a scathing review of the film.
seclusion|He enjoys the seclusion of his mountain cabin.
semblance|The office returned to a semblance of order.
sensory|The exhibit offers a rich sensory experience.
sentimental|She kept the old ticket for sentimental reasons.
serendipity|By serendipity, we found the perfect venue.
shun|The company tries to shun risky investments.
skittish|The skittish horse moved away from the noise.
sluggish|Sales were sluggish during the rainy month.
sober|He gave a sober assessment of the risks.
sordid|The article exposed the sordid details of the scam.
sporadic|We experienced sporadic internet outages.
staunch|She is a staunch supporter of public libraries.
stern|The teacher gave the class a stern warning.
stifle|Do not stifle useful criticism.
strident|The debate grew strident and unproductive.
stupor|The medication left him in a stupor.
subjugate|The empire tried to subjugate its neighbors.
subservient|The contract made the smaller firm subservient.
subversive|The book was once considered subversive.
suffice|A short explanation will suffice.
sullen|He remained sullen after the argument.
supercilious|Her supercilious manner alienated the team.
supplant|Digital records may supplant paper files.
surfeit|A surfeit of choices can confuse customers.
surmise|We can only surmise why the order was canceled.
surrogate|The assistant served as a surrogate for the manager.
swindle|The police warned residents about the swindle.
sycophant|A good leader does not need a sycophant.
symbiotic|The two businesses have a symbiotic relationship.
tactile|The museum has a tactile display for children.
temperate|The region has a temperate climate.
tenable|Her argument is tenable if the data are correct.
thwart|Bad weather could thwart our travel plans.
timorous|The timorous child stayed close to her parent.
tirade|The customer launched into a long tirade.
torpid|The market was torpid after the holiday.
tractable|The problem became more tractable after we simplified it.
trivial|Do not spend all day on trivial details.
turmoil|The sudden change caused turmoil in the office.
unassailable|The report presents an unassailable case for action.
unbiased|We need an unbiased review of the complaint.
unconventional|She proposed an unconventional but effective solution.
underscore|The results underscore the need for training.
undulate|The hills undulate across the horizon.
unfounded|The rumor was unfounded and quickly denied.
unify|The shared goal helped unify the two teams.
unravel|The analyst helped unravel the complex problem.
unrelenting|The unrelenting rain flooded several streets.
unscrupulous|An unscrupulous seller may hide product defects.
unseemly|The public argument was unseemly at the ceremony.
unwieldy|The old software is unwieldy and hard to update.
upbraid|She did not upbraid him for the honest mistake.
upright|He is known as an upright and fair manager.
usurp|No one may usurp the board's authority.
vacant|The office has been vacant since January.
vague|The instructions were too vague to follow.
vanquish|The team worked hard to vanquish its strongest rival.
vapid|The conversation became vapid after a few minutes.
variance|There is a small variance between the two totals.
veneer|The friendly smile was only a veneer.
venomous|The venomous snake was removed safely.
veracity|The editor checked the veracity of every claim.
versatile|This versatile tool can cut, drill, and sand.
vex|The repeated error continued to vex the staff.
vindictive|A vindictive response would only worsen the conflict.
virulent|The hospital prepared for a virulent strain of flu.
viscous|The sauce becomes viscous as it cools.
vivid|She gave a vivid description of the accident.
weary|The weary travelers finally reached the hotel.
wield|The director can wield considerable influence.
wrath|The decision drew the wrath of local residents.
aberrant|The aberrant reading was removed from the data.
abeyance|The project is in abeyance until funding arrives.
absolution|He sought absolution for his past mistakes.
acclivity|The cyclists slowed on the steep acclivity.
adduce|The lawyer will adduce evidence at the hearing.
adherent|She is a longtime adherent of the method.
adumbrate|The report seeks to adumbrate a possible future strategy.
aegis|The program operates under the aegis of the university.
afferent|The study measured afferent nerve signals.
agnostic|The team remains agnostic about the final platform.
alchemy|The exhibit explains the history of alchemy.
alimentary|The doctor examined the patient's alimentary system.
alluvial|The farm sits on rich alluvial soil.
amalgam|The course is an amalgam of theory and practice.
ambidextrous|The surgeon is ambidextrous and works with either hand.
ambivalence|Her ambivalence about the offer was understandable.
ameliorative|The new measures had an ameliorative effect.
amoral|The story presents an amoral character without judgment.
anathema|Dishonesty is anathema to the organization.
ancillary|The clinic provides ancillary services for patients.
antecedence|The records establish the antecedence of the earlier claim.
anthropogenic|The report examines anthropogenic climate change.
anthropomorphism|Giving the robot feelings is an example of anthropomorphism.
antipodal|Their antipodal views made agreement difficult.
apolitical|The charity remains apolitical in public debates.
apotheosis|The final concert was the apotheosis of her career.
apportion|The committee will apportion the funds fairly.
apprehend|Police were able to apprehend the suspect near the station.
archetype|The character is an archetype of the reluctant hero.
archipelago|Indonesia is a large archipelago of islands.
ardent|She is an ardent supporter of science education.
armistice|The leaders signed an armistice after the conflict.
asocial|His asocial behavior made group work difficult.
aspirant|Each aspirant submitted a detailed application.
assimilation|Language classes can support cultural assimilation.
attenuated|The signal was attenuated by the thick walls.
augmentative|The device has an augmentative feature for low vision.
auroral|We watched an auroral display in the northern sky.
avaricious|The avaricious owner raised prices without reason.
avuncular|Her avuncular mentor gave calm, practical advice.
axiomatic|It is axiomatic that clear goals improve planning.
baneful|The baneful effects of pollution are well documented.
beatific|She wore a beatific smile after hearing the news.
beneficence|The foundation's beneficence supports rural schools.
bibliography|The paper includes a complete bibliography.
bilateral|The two countries signed a bilateral agreement.
biodegradable|Choose biodegradable packaging whenever possible.
biomimicry|The design uses biomimicry to reduce energy use.
boorish|His boorish behavior embarrassed his friends.
brackish|The river water becomes brackish near the sea.
bulwark|Strong passwords are a bulwark against simple attacks.
cadence|The speaker's calm cadence held the audience's attention.
calligraphy|She practices calligraphy every weekend.
canonical|The article is a canonical text in the field.
capitulation|The agreement was seen as a capitulation to pressure.
cartography|He studies cartography and digital mapping.
causal|The researchers found no causal link.
cerebellar|The scan showed activity in the cerebellar region.
cerebration|The puzzle required several hours of cerebration.
ceremonial|They wore ceremonial clothing for the occasion.
chimerical|His plan to finish overnight was chimerical.
circuity|The circuity of the route added time to the trip.
citadel|The ancient citadel overlooks the city.
clique|A small clique controlled the conversation.
codify|The agency will codify the new procedures.
coercive|The court rejected the coercive agreement.
coeval|The two writers were coeval and often compared.
cohesion|Clear goals can improve team cohesion.
collegial|The office maintains a collegial working environment.
commensurability|The study examined the commensurability of the measures.
communal|The building has a communal kitchen.
compliant|The product is compliant with safety standards.
concatenation|A concatenation of small errors caused the failure.
concordance|The results showed concordance between the two tests.
confluent|The rivers are confluent near the old bridge.
congenital|The doctor explained the congenital condition clearly.
conjectural|The early estimate remains conjectural.
conjugal|The clinic offers counseling for conjugal problems.
consonant|Her actions are consonant with the stated values.
consort|The two companies consort on several research projects.
conspicuousness|The new color increases the bicycle's conspicuousness.
constitutional|The court considered the law's constitutional basis.
contemplative|He spent a contemplative afternoon by the lake.
contextualize|The teacher helped students contextualize the speech.
contiguous|The two offices are contiguous on the same floor.
contrapuntal|The composer used a contrapuntal melody.
controvert|New evidence may controvert the earlier conclusion.
conviviality|The host's warmth created a sense of conviviality.
copacetic|Everything is copacetic after the update.
copula|In grammar, a copula links the subject and complement.
corroborative|The witness gave corroborative evidence.
coterie|A small coterie of advisors met privately.
`.trim().split("\n");

// 轉成以小寫英文詞彙為鍵的查表物件；之後可以直接追加新列而不必修改主程式。
var CARD_EXAMPLES = {};
CARD_EXAMPLE_ROWS.forEach(function(row){
  var parts = row.split("|");
  CARD_EXAMPLES[parts[0].trim().toLowerCase()] = { example: parts[1].trim(), exampleZh: "" };
});
