import React, { useState, useRef, useEffect } from 'react';
import { apiPost } from '../service/client';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import $ from 'jquery';
import {
    Bar,
    Pie,
} from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const TabbedContent = () => {
    useEffect(() => {
        tabControl(); // run once on mount

        let resizeTimer;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                tabControl(); // run on resize end
            }, 250);
        };

        $(window).on('resize', handleResize);

        return () => {
            $(window).off('resize', handleResize);
        };
    }, []);

    const tabControl = () => {
        const tabs = $('.tabbed-content .tabs');

        // Unbind previous handlers to avoid duplicates
        $('.tabs a').off('click');
        $('.item').off('click');

        if (tabs.css('display') !== 'none') {
            $('.tabs a').on('click', function (event) {
                event.preventDefault();
                const target = $(this).attr('href');
                const container = $(this).closest('.tabbed-content');
                const items = container.find('.item');
                const buttons = container.find('.tabs a');

                buttons.removeClass('active');
                items.removeClass('active');

                $(this).addClass('active');
                $(target).addClass('active');
            });
        } else {
            $('.item').on('click', function () {
                const container = $(this).closest('.tabbed-content');
                const currId = $(this).attr('id');
                const items = container.find('.item');

                items.removeClass('active');
                $(this).addClass('active');

                container.find('.tabs a').removeClass('active');
                container.find(`.tabs a[href$="#${currId}"]`).addClass('active');
            });
        }
    };





    const [isDownloading, setIsDownloading] = useState(false);

    const [activeTab, setActiveTab] = useState(0);

    const [bankSavings, setBankSavings] = useState("");

    const [needsTaxHelp, setNeedsTaxHelp] = useState(false);
    const [needsBudgetHelp, setNeedsBudgetHelp] = useState(false);
    const [needsDebtHelp, setNeedsDebtHelp] = useState(false);
    const [needsRetirementHelp, setNeedsRetirementHelp] = useState(false);
    const [needsRealEstateHelp, setNeedsRealEstateHelp] = useState(false);

    const [iasSavings, setIasSavings] = useState("");
    const [emergencySavings, setEmergencySavings] = useState("");
    const [cashSavings, setCashSavings] = useState("");
    const [ownsRealEstate, setOwnsRealEstate] = useState(false);
    const [numProperties, setNumProperties] = useState("");
    const [primaryResidenceValue, setPrimaryResidenceValue] = useState("");
    const [ownsInvestmentProperties, setOwnsInvestmentProperties] = useState(false);
    const [hasInvestments, setHasInvestments] = useState(false);
    const [investmentsValue, setInvestmentsValue] = useState("");
    const [hasValuableAssets, setHasValuableAssets] = useState(false);
    const [valuableAssetsValue, setValuableAssetsValue] = useState("");
    const [monthlyIncome, setMonthlyIncome] = useState("");
    const [receivesRentalIncome, setReceivesRentalIncome] = useState(false);
    const [monthlyRentalIncome, setMonthlyRentalIncome] = useState("");
    const [monthlyFixedExpenses, setMonthlyFixedExpenses] = useState("");
    const [monthlyVariableExpenses, setMonthlyVariableExpenses] = useState("");
    const [emergencyFund, setEmergencyFund] = useState("");
    const [emergencyFundCoverageMonths, setEmergencyFundCoverageMonths] = useState("");
    const [hasSavingsGoals, setHasSavingsGoals] = useState(false);
    const [savingsGoal1Description, setSavingsGoal1Description] = useState("");
    const [savingsGoal1Amount, setSavingsGoal1Amount] = useState("");
    const [monthlySavingsContribution, setMonthlySavingsContribution] = useState("");
    const [plansToBuyProperty, setPlansToBuyProperty] = useState(false);
    const [investsInFinancialAssets, setInvestsInFinancialAssets] = useState(false);
    const [investmentAllocationPercentage, setInvestmentAllocationPercentage] = useState("");
    const [investmentRiskComfort, setInvestmentRiskComfort] = useState("");
    const [hasMortgage, setHasMortgage] = useState(false);
    const [mortgageBalance, setMortgageBalance] = useState("");
    const [monthlyMortgagePayment, setMonthlyMortgagePayment] = useState("");
    const [mortgageInterestRate, setMortgageInterestRate] = useState("");
    const [mortgageYearsLeft, setMortgageYearsLeft] = useState("");
    const [hasOtherDebts, setHasOtherDebts] = useState(false);
    const [otherDebtBalance, setOtherDebtBalance] = useState("");
    const [monthlyDebtRepayment, setMonthlyDebtRepayment] = useState("");
    const [monthlyDebtRepaymentTotal, setMonthlyDebtRepaymentTotal] = useState("");
    const [plansToPayOffMortgageEarly, setPlansToPayOffMortgageEarly] = useState(false);
    const [hasWorkplacePension, setHasWorkplacePension] = useState(false);
    const [pensionBalance, setPensionBalance] = useState("");
    const [employerMatchesPension, setEmployerMatchesPension] = useState(false);
    const [monthlyPensionContribution, setMonthlyPensionContribution] = useState("");
    const [hasPrivatePension, setHasPrivatePension] = useState(false);
    const [plansToUsePropertyEquity, setPlansToUsePropertyEquity] = useState(false);
    const [plannedRetirementAge, setPlannedRetirementAge] = useState("");
    const [usesTaxEfficientAccounts, setUsesTaxEfficientAccounts] = useState(false);
    const [maxedIsaAllowance, setMaxedIsaAllowance] = useState(false);
    const [tracksCapitalGains, setTracksCapitalGains] = useState(false);
    const [donatesToCharity, setDonatesToCharity] = useState(false);
    const [charityDonationAmount, setCharityDonationAmount] = useState("");
    const [needsInvestmentHelp, setNeedsInvestmentHelp] = useState(false);
    const [usesFinancialTools, setUsesFinancialTools] = useState(false);
    const [financialTools, setFinancialTools] = useState("");
    const [wantsPersonalizedPlan, setWantsPersonalizedPlan] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [queryError, setQueryError] = useState("");
    const [insights, setInsights] = useState(null);
    const [stepsInsights, setStepsInsights] = useState(null);
    const [mortgageYearsLeftError, setMortgageYearsLeftError] = useState("");
    const [plannedRetirementAgeError, setPlannedRetirementAgeError] = useState("");
    const [creditCardBalance, setCreditCardBalance] = useState("");
    const [creditCardInterestRate, setCreditCardInterestRate] = useState("");


    const [id, setId] = useState(null);
    // query states
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [isResultVisible, setIsResultVisible] = useState(false);
    // Query Design
    const [htmlDesign, setHtmlDesign] = useState("");
    const chartRef = useRef(null);


    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const [expandedSections, setExpandedSections] = useState({
        net_worth: true,
        cash_flow: false,
        debt: false,
        investments_savings: false,
        retirement: false,
        recommendations: false,
    });


    const showTab = (index) => {
        setActiveTab(index);
        const tabId = `tab${index + 1}`; // Maps index 0 to tab1, 1 to tab2, etc.
        const container = document.querySelector('.tabbed-content');
        const items = container.querySelectorAll('.item');
        items.forEach(item => item.classList.remove('active'));
        const targetItem = document.getElementById(tabId);
        if (targetItem) {
            targetItem.classList.add('active');
        }
        const tabsNav = container.querySelector('.tabs');
        const aTags = tabsNav.querySelectorAll('a');
        aTags.forEach(a => a.classList.remove('active'));
        const aTag = tabsNav.querySelector(`a[href="#${tabId}"]`);
        if (aTag) {
            aTag.classList.add('active');
        }
    };




    const reportRef = useRef();

    const validateYears = (value, setError) => {
        const years = parseInt(value, 10);
        if (value && (isNaN(years) || years >= 100)) {
            setError("Please enter a value less than 100 years.");
            return false;
        }
        setError("");
        return true;
    };

    const downloadReport = () => {
        setIsDownloading(true);
        const input = reportRef.current;
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save("Financial_Insights_Report.pdf");
            setIsDownloading(false);
        });

    };


    const handleSubmitSteps = async () => {
        //setLoading(true);
        setError(null);
        //setInsights(null);


        const formData = {
            id: id,
            cash_savings: parseFloat(bankSavings) || 0 + parseFloat(iasSavings) || 0 + parseFloat(emergencySavings) || 0,
            owns_real_estate: ownsRealEstate,
            num_properties: parseInt(numProperties) || 0,
            primary_residence_value: parseFloat(primaryResidenceValue) || 0,
            owns_investment_properties: ownsInvestmentProperties,
            has_investments: hasInvestments,
            investments_value: parseFloat(investmentsValue) || 0,
            has_valuable_assets: hasValuableAssets,
            valuable_assets_value: parseFloat(valuableAssetsValue) || 0,
            has_mortgage: hasMortgage,
            mortgage_balance: parseFloat(mortgageBalance) || 0,
            monthly_mortgage_payment: parseFloat(monthlyMortgagePayment) || 0,
            mortgage_interest_rate: parseFloat(mortgageInterestRate) || 0,
            mortgage_years_left: parseInt(mortgageYearsLeft) || 0,
            has_other_debts: hasOtherDebts,
            // other_debt_balance: parseFloat(otherDebtBalance) || 0,
            monthly_debt_repayment: parseFloat(monthlyDebtRepayment) || 0,
            monthly_income: parseFloat(monthlyIncome) || 0,
            receives_rental_income: receivesRentalIncome,
            monthly_rental_income: parseFloat(monthlyRentalIncome) || 0,
            monthly_fixed_expenses: parseFloat(monthlyFixedExpenses) || 0,
            monthly_variable_expenses: parseFloat(monthlyVariableExpenses) || 0,
            emergency_fund: parseFloat(emergencyFund) || 0,
            emergency_fund_coverage_months: parseInt(emergencyFundCoverageMonths) || 0,
            has_savings_goals: hasSavingsGoals,
            savings_goal_1_description: savingsGoal1Description,
            savings_goal_1_amount: parseFloat(savingsGoal1Amount) || 0,
            monthly_savings_contribution: parseFloat(monthlySavingsContribution) || 0,
            plans_to_buy_property: plansToBuyProperty,
            invests_in_financial_assets: investsInFinancialAssets,
            investment_allocation_percentage: parseFloat(investmentAllocationPercentage) || 0,
            investment_risk_comfort: investmentRiskComfort,
            // monthly_debt_repayment_total: parseFloat(monthlyDebtRepaymentTotal) || 0,
            plans_to_pay_off_mortgage_early: plansToPayOffMortgageEarly,
            has_workplace_pension: hasWorkplacePension,
            pension_balance: parseFloat(pensionBalance) || 0,
            monthly_pension_contribution: parseFloat(monthlyPensionContribution) || 0,
            employer_matches_pension: employerMatchesPension,
            has_private_pension: hasPrivatePension,
            planned_retirement_age: parseInt(plannedRetirementAge) || 0,
            plans_to_use_property_equity: plansToUsePropertyEquity,
            uses_tax_efficient_accounts: usesTaxEfficientAccounts,
            maxed_isa_allowance: maxedIsaAllowance,
            tracks_capital_gains: tracksCapitalGains,
            donates_to_charity: donatesToCharity,
            // charity_donation_amount: parseFloat(charityDonationAmount) || 0,
            needs_investment_help: needsInvestmentHelp,
            needs_tax_help: needsTaxHelp,
            needs_real_estate_help: needsRealEstateHelp,
            needs_retirement_help: needsRetirementHelp,
            needs_debt_help: needsDebtHelp,
            needs_budgeting_help: needsBudgetHelp,
            uses_financial_tools: usesFinancialTools,
            financial_tools: financialTools,
            wants_personalized_plan: wantsPersonalizedPlan,
            credit_card_balance: parseFloat(creditCardBalance) || 0,
            credit_card_interest_rate: parseFloat(creditCardInterestRate) || 0,


        };

        try {

            const response = await apiPost("api/generate", formData);
            if (response?.data?.status === true) {
                setStepsInsights(response?.data?.data);
                setId(response?.data?.id);
                //setActiveTab(8);
            }


        } catch (err) {
            setError("Failed to submit the form or generate insights. Please try again.");
            console.error(err);
        } finally {
            //setLoading(false);
        }
    };


    const handleSubmit = async () => {
        setLoading(true);
        setError(null);
        setInsights(null);


        const formData = {
            cash_savings: parseFloat(bankSavings) || 0 + parseFloat(iasSavings) || 0 + parseFloat(emergencySavings) || 0,
            owns_real_estate: ownsRealEstate,
            num_properties: parseInt(numProperties) || 0,
            primary_residence_value: parseFloat(primaryResidenceValue) || 0,
            owns_investment_properties: ownsInvestmentProperties,
            has_investments: hasInvestments,
            investments_value: parseFloat(investmentsValue) || 0,
            has_valuable_assets: hasValuableAssets,
            valuable_assets_value: parseFloat(valuableAssetsValue) || 0,
            has_mortgage: hasMortgage,
            mortgage_balance: parseFloat(mortgageBalance) || 0,
            monthly_mortgage_payment: parseFloat(monthlyMortgagePayment) || 0,
            mortgage_interest_rate: parseFloat(mortgageInterestRate) || 0,
            mortgage_years_left: parseInt(mortgageYearsLeft) || 0,
            has_other_debts: hasOtherDebts,
            // other_debt_balance: parseFloat(otherDebtBalance) || 0,
            monthly_debt_repayment: parseFloat(monthlyDebtRepayment) || 0,
            monthly_income: parseFloat(monthlyIncome) || 0,
            receives_rental_income: receivesRentalIncome,
            monthly_rental_income: parseFloat(monthlyRentalIncome) || 0,
            monthly_fixed_expenses: parseFloat(monthlyFixedExpenses) || 0,
            monthly_variable_expenses: parseFloat(monthlyVariableExpenses) || 0,
            emergency_fund: parseFloat(emergencyFund) || 0,
            emergency_fund_coverage_months: parseInt(emergencyFundCoverageMonths) || 0,
            has_savings_goals: hasSavingsGoals,
            savings_goal_1_description: savingsGoal1Description,
            savings_goal_1_amount: parseFloat(savingsGoal1Amount) || 0,
            monthly_savings_contribution: parseFloat(monthlySavingsContribution) || 0,
            plans_to_buy_property: plansToBuyProperty,
            invests_in_financial_assets: investsInFinancialAssets,
            investment_allocation_percentage: parseFloat(investmentAllocationPercentage) || 0,
            investment_risk_comfort: investmentRiskComfort,
            // monthly_debt_repayment_total: parseFloat(monthlyDebtRepaymentTotal) || 0,
            plans_to_pay_off_mortgage_early: plansToPayOffMortgageEarly,
            has_workplace_pension: hasWorkplacePension,
            pension_balance: parseFloat(pensionBalance) || 0,
            monthly_pension_contribution: parseFloat(monthlyPensionContribution) || 0,
            employer_matches_pension: employerMatchesPension,
            has_private_pension: hasPrivatePension,
            planned_retirement_age: parseInt(plannedRetirementAge) || 0,
            plans_to_use_property_equity: plansToUsePropertyEquity,
            uses_tax_efficient_accounts: usesTaxEfficientAccounts,
            maxed_isa_allowance: maxedIsaAllowance,
            tracks_capital_gains: tracksCapitalGains,
            donates_to_charity: donatesToCharity,
            // charity_donation_amount: parseFloat(charityDonationAmount) || 0,
            needs_investment_help: needsInvestmentHelp,
            needs_tax_help: needsTaxHelp,
            needs_real_estate_help: needsRealEstateHelp,
            needs_retirement_help: needsRetirementHelp,
            needs_debt_help: needsDebtHelp,
            needs_budgeting_help: needsBudgetHelp,
            uses_financial_tools: usesFinancialTools,
            financial_tools: financialTools,
            wants_personalized_plan: wantsPersonalizedPlan,
            credit_card_balance: parseFloat(creditCardBalance) || 0,
            credit_card_interest_rate: parseFloat(creditCardInterestRate) || 0,


        };

        try {

            const response = await apiPost("api/generate", formData);

            if (response?.data?.status === true) {
                setInsights(response?.data?.data);
                setId(response?.data?.id);
                setActiveTab(8);
            }


        } catch (err) {
            setError("Failed to submit the form or generate insights. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };




    const handleSubmitQuery = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setQueryError("");
        setHtmlDesign("");
        // Get the query input value
        const queryInput = query.trim();
        if (!queryInput) {
            setQueryError("Please enter a financial query.");
            return;
        }

        if (!id) {
            setQueryError("Please fill the form first.");
            return;
        }
        setIsResultVisible(true);
        setKeyword(queryInput);
        setQueryError("");
        try {
            const response = await apiPost("api/aiinsights", { "id": id, "prompt": queryInput });
            if (response?.data?.status === true) {
                if (response?.data?.data?.insights?.html_design) {
                    setHtmlDesign(response?.data?.data?.insights?.html_design);
                    console.log("response---------->", response?.data?.data?.insights?.html_design);
                } else {
                    setHtmlDesign(response?.data?.data?.html_design);
                    console.log("response---------->", response?.data?.data?.html_design);
                }
                // setInsights(response?.data?.data);
                // setHtmlDesign(response?.data?.data?.insights?.html_design);
                // console.log("response---------->",response?.data?.data?.insights?.html_design);
                setIsResultVisible(true);
            }
        } catch (err) {
            setQueryError("Failed to proceed with the query. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };


    const getBodyContent = (htmlString) => {
        const bodyMatch = htmlString.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        return bodyMatch ? bodyMatch[1] : htmlString;
    };

    useEffect(() => {
        if (htmlDesign && isResultVisible) {
            // Extract the script content
            const scriptMatch = htmlDesign.match(
                /<script>([\s\S]*?)<\/script>/
            );
            if (scriptMatch && scriptMatch[1]) {
                try {
                    // Create a function from the script content
                    const scriptContent = scriptMatch[1].replace("window.onload = function ()", "return function ()");
                    const scriptFunction = new Function(scriptContent)();
                    scriptFunction();
                } catch (e) {
                    console.error("Error executing chart script:", e);
                    const chartError = document.getElementById("chart-error");
                    if (chartError) {
                        chartError.style.display = "block";
                    }
                }
            }
        }
    }, [htmlDesign, isResultVisible]);



    const colors = {
        blue: "#36A2EB",
        red: "#FF6384",
        green: "#4BC0C0",
        yellow: "#FFCE56",
        purple: "#9966FF",
        orange: "#FF9F40",
        cyan: "#17A2B8",
        pink: "#E83E8C",
    };





    const retirementOptions = {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Retirement Overview (£)",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Amount (£)",
                },
            },
        },
    };




    const retirementData = {
        labels: ["Pension Balance", "Monthly Contribution"],
        datasets: [
            {
                label: "Amount (£)",
                data: [
                    insights?.retirement?.pension_balance ?? 0,
                    insights?.retirement?.monthly_pension_contribution ?? 0,
                ],
                backgroundColor: [colors.blue, colors.red],
            },
        ],
    };



    const investmentsSavingsOptions = {
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Investments & Savings Breakdown (£)",
            },
        },
    };



    const debtOptions = {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Debt Overview (£)",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Amount (£)",
                },
            },
        },
    };


    const debtData = {
        labels: ["Mortgage Balance", "Monthly Payment"],
        datasets: [
            {
                label: "Amount (£)",
                data: [insights?.debt?.mortgage_balance ?? 0, insights?.debt?.monthly_mortgage_payment ?? 0],
                backgroundColor: [colors.blue, colors.red],
            },
        ],
    };



    const cashFlowIncomeOptions = {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Income vs. Net Cash Flow (£)",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Amount (£)",
                },
            },
        },
    };


    const cashFlowIncomeData = {
        labels: ["Monthly Income", "Net Cash Flow"],
        datasets: [
            {
                label: "Amount (£)",
                data: [insights?.cash_flow?.income ?? 0, insights?.cash_flow?.net ?? 0],
                backgroundColor: [colors.blue, colors.green],
            },
        ],
    };


    const cashFlowExpensesOptions = {
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Monthly Outgoings (£)",
            },
        },
    };


    const cashFlowExpensesData = {
        labels: ["Fixed Expenses", "Variable Expenses", "Savings Contribution", "Pension Contribution"],
        datasets: [
            {
                data: [
                    insights?.cash_flow?.expenses?.monthly_fixed_expenses ?? 0, // Includes mortgage
                    insights?.cash_flow?.expenses?.monthly_variable_expenses ?? 0,
                    insights?.cash_flow?.expenses?.monthly_savings_contribution ?? 0,
                    insights?.cash_flow?.expenses?.monthly_pension_contribution ?? 0,
                ],
                backgroundColor: [colors.red, colors.green, colors.yellow, colors.purple],
            },
        ],
    };


    const netWorthOptions = {
        indexAxis: "y",
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Assets",
            },
        },
        scales: {
            x: {
                stacked: true,
                title: {
                    display: true,
                    text: "Amount (£)",
                },
            },
            y: {
                stacked: true,
            },
        },
    };


    const netWorthData = {
        labels: ["Net Worth"],
        datasets: [
            {
                label: "Cash Savings",
                data: [insights?.net_worth?.assets?.cash_savings ?? 0],
                backgroundColor: colors.blue,
            },
            {
                label: "Primary Residence",
                data: [insights?.net_worth?.assets?.primary_residence_value ?? 0],
                backgroundColor: colors.red,
            },
            {
                label: "Investments",
                data: [insights?.net_worth?.assets?.investments_value ?? 0],
                backgroundColor: colors.green,
            },
            {
                label: "Pension Balance",
                data: [insights?.net_worth?.assets?.pension_balance ?? 0],
                backgroundColor: colors.yellow,
            },
            {
                label: "Mortgage",
                data: [-(insights?.net_worth?.liabilities?.mortgage_balance ?? 0)],
                backgroundColor: colors.purple,
            },
            {
                label: "Credit Card",
                data: [-(insights?.net_worth?.liabilities?.credit_card_balance ?? 0)],
                backgroundColor: colors.orange,
            },
            {
                label: "Personal Loan",
                data: [-(insights?.net_worth?.liabilities?.personal_loan_balance ?? 0)],
                backgroundColor: colors.cyan,
            },
        ],
    };







    const investmentsSavingsData = {
        labels: ["Cash Savings", "Investments Value"],
        datasets: [
            {
                data: [
                    insights?.investments_savings?.cash_savings ?? 0,
                    insights?.investments_savings?.investments_value ?? 0,
                ],
                backgroundColor: [colors.blue, colors.red],
            },
        ],
    };





    return (
        <div className='container'>
            <article className="tabbed-content tabs-side">
                <nav className="tabs">
                    <ul>
                        <li><a className={activeTab === 0 ? "activeTab" : "inactiveTab"} onClick={() => showTab(0)}  > Personal Financial Overview</a></li>
                        <li><a className={activeTab === 1 ? "activeTab" : "inactiveTab"} onClick={() => showTab(1)} > Income & Expenses</a></li>
                        <li><a className={activeTab === 2 ? "activeTab" : "inactiveTab"}  onClick={() => showTab(2)} > Savings & Goals</a></li>
                        <li><a className={activeTab === 3 ? "activeTab" : "inactiveTab"}  onClick={() => showTab(3)} > Debt Management</a></li>
                        <li><a className={activeTab === 4 ? "activeTab" : "inactiveTab"}  onClick={() => showTab(4)} > Retirement Planning</a></li>
                        <li><a className={activeTab === 5 ? "activeTab" : "inactiveTab"}  onClick={() => showTab(5)} > Tax Optimization</a></li>
                        <li><a className={activeTab === 6 ? "activeTab" : "inactiveTab"}  onClick={() => showTab(6)} > Financial Education</a></li>
                        <li><a className={activeTab === 7 ? "activeTab" : "inactiveTab"}  onClick={() => showTab(7)} > Complete</a></li>
                    </ul>
                </nav>
                <section id="tab1" className="item active" data-title="Personal Financial Overview"  >
                    <div className="item-content">

                        <div className={`form-section ${activeTab === 0 ? "active" : ""}`}>
                            <h2>Personal Financial Overview (Net Worth Calculation)</h2>
                            <p>Please provide information about your assets and liabilities</p>
                            <div className="form-group">
                                <label>Total bank accounts savings?</label>
                                <input
                                    type="text"
                                    placeholder="£ Enter amount"
                                    value={bankSavings}
                                    onChange={(e) => setBankSavings(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Total ISAs savings?</label>
                                <input
                                    type="text"
                                    placeholder="£ Enter amount"
                                    value={iasSavings}
                                    onChange={(e) => setIasSavings(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Total emergency fund savings?</label>
                                <input
                                    type="text"
                                    placeholder="£ Enter amount"
                                    value={emergencySavings}
                                    onChange={(e) => setEmergencySavings(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Do you own any real estate properties?</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            value="Yes"
                                            checked={ownsRealEstate === true}
                                            onChange={() => setOwnsRealEstate(true)}
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="No"
                                            checked={ownsRealEstate === false}
                                            onChange={() => setOwnsRealEstate(false)}
                                        /> No
                                    </label>
                                </div>
                            </div>
                            {ownsRealEstate && (
                                <>
                                    <div className="form-group">
                                        <label>How many properties do you own?</label>
                                        <input
                                            type="number"
                                            placeholder="Enter number"
                                            value={numProperties}
                                            onChange={(e) => setNumProperties(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Estimated market value of property/properties</label>
                                        <input
                                            type="text"
                                            placeholder="£ Enter amount"
                                            value={primaryResidenceValue}
                                            onChange={(e) => setPrimaryResidenceValue(e.target.value)}
                                        />
                                    </div>
                                </>
                            )}
                            <div className="form-group">
                                <label>Do you own rental or investment properties?</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            value="Yes"
                                            checked={ownsInvestmentProperties === true}
                                            onChange={() => setOwnsInvestmentProperties(true)}
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="No"
                                            checked={ownsInvestmentProperties === false}
                                            onChange={() => setOwnsInvestmentProperties(false)}
                                        /> No
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Do you have investments (stocks, bonds, ETFs, crypto)?</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            value="Yes"
                                            checked={hasInvestments === true}
                                            onChange={() => setHasInvestments(true)}
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="No"
                                            checked={hasInvestments === false}
                                            onChange={() => setHasInvestments(false)}
                                        /> No
                                    </label>
                                </div>
                            </div>
                            {hasInvestments && (
                                <div className="form-group">
                                    <label>Total estimated value of investments</label>
                                    <input
                                        type="text"
                                        placeholder="£ Enter amount"
                                        value={investmentsValue}
                                        onChange={(e) => setInvestmentsValue(e.target.value)}
                                    />
                                </div>
                            )}
                            <div className="form-group">
                                <label>Do you have valuable assets (e.g., jewelry, art)?</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            value="Yes"
                                            checked={hasValuableAssets === true}
                                            onChange={() => setHasValuableAssets(true)}
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="No"
                                            checked={hasValuableAssets === false}
                                            onChange={() => setHasValuableAssets(false)}
                                        /> No
                                    </label>
                                </div>
                            </div>
                            {hasValuableAssets && (
                                <div className="form-group">
                                    <label>Total estimated value of valuable assets</label>
                                    <input
                                        type="text"
                                        placeholder="£ Enter amount"
                                        value={valuableAssetsValue}
                                        onChange={(e) => setValuableAssetsValue(e.target.value)}
                                    />
                                </div>
                            )}
                            <div className="form-group">
                                <label>Credit Card balance?</label>
                                <input
                                    type="text"
                                    placeholder="£ Enter amount"
                                    value={creditCardBalance}
                                    onChange={(e) => setCreditCardBalance(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Credit Card Interest Rate?</label>
                                <input
                                    type="text"
                                    placeholder="Enter percentage"
                                    value={creditCardInterestRate}
                                    onChange={(e) => setCreditCardInterestRate(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Do you currently invest in stocks, bonds, or other financial assets?</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            value="Yes"
                                            checked={investsInFinancialAssets === true}
                                            onChange={() => setInvestsInFinancialAssets(true)}
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="No"
                                            checked={investsInFinancialAssets === false}
                                            onChange={() => setInvestsInFinancialAssets(false)}
                                        /> No
                                    </label>
                                </div>
                            </div>

                            {investsInFinancialAssets && (
                                <>
                                    <div className="form-group">
                                        <label>What percentage of your income do you allocate to investments?</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                placeholder="Enter percentage"
                                                value={investmentAllocationPercentage}
                                                onChange={(e) => setInvestmentAllocationPercentage(e.target.value)}
                                            />
                                            <span>%</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>How comfortable are you with investment risk?</label>
                                        <div className="radio-group">
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="Low"
                                                    checked={investmentRiskComfort === "Low"}
                                                    onChange={() => setInvestmentRiskComfort("Low")}
                                                /> Low
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="Medium"
                                                    checked={investmentRiskComfort === "Medium"}
                                                    onChange={() => setInvestmentRiskComfort("Medium")}
                                                /> Medium
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="High"
                                                    checked={investmentRiskComfort === "High"}
                                                    onChange={() => setInvestmentRiskComfort("High")}
                                                /> High
                                            </label>
                                        </div>
                                    </div>
                                </>
                            )}


                            <div className="nav-buttons">
                                <button className="btn-next" onClick={() => { showTab(1); handleSubmitSteps(); }}>
                                    Next →
                                </button>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="tab2" className="item" data-title="Income & Expenses"  >
                    <div className="item-content">

                        <div className={`form-section ${activeTab === 1 ? "active" : ""}`}>
                            <h2>Income & Expenses (Budgeting & Cash Flow)</h2>
                            <p>Please provide information about your income and expenses</p>
                            <div className="form-group">
                                <label>Total salary?</label>
                                <input
                                    type="text"
                                    placeholder="£ Enter amount"
                                    value={monthlyIncome}
                                    onChange={(e) => setMonthlyIncome(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Do you receive rental income?</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            value="Yes"
                                            checked={receivesRentalIncome === true}
                                            onChange={() => setReceivesRentalIncome(true)}
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="No"
                                            checked={receivesRentalIncome === false}
                                            onChange={() => setReceivesRentalIncome(false)}
                                        /> No
                                    </label>
                                </div>
                            </div>
                            {receivesRentalIncome && (
                                <div className="form-group">
                                    <label>If yes, how much do you receive monthly?</label>
                                    <input
                                        type="text"
                                        placeholder="£ Enter amount"
                                        value={monthlyRentalIncome}
                                        onChange={(e) => setMonthlyRentalIncome(e.target.value)}
                                    />
                                </div>
                            )}
                            <div className="form-group">
                                <label>Total monthly fixed expenses (mortgage/rent, utilities, insurance)?</label>
                                <input
                                    type="text"
                                    placeholder="£ Enter amount"
                                    value={monthlyFixedExpenses}
                                    onChange={(e) => setMonthlyFixedExpenses(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Total monthly variable expenses (groceries, dining, transport, entertainment)?</label>
                                <input
                                    type="text"
                                    placeholder="£ Enter amount"
                                    value={monthlyVariableExpenses}
                                    onChange={(e) => setMonthlyVariableExpenses(e.target.value)}
                                />
                            </div>
                            <div className="nav-buttons">
                                <button className="btn-back" onClick={() => showTab(0)}>
                                    ← Back to Financial Overview
                                </button>
                                <button className="btn-next" onClick={() => { showTab(2); handleSubmitSteps(); }}>
                                    Savings & Goals →
                                </button>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="tab3" className="item" data-title="Savings & Goals" >
                    <div className="item-content">

                        <div className={`form-section ${activeTab === 2 ? "active" : ""}`}>
                            <h2>Savings & Financial Goals</h2>
                            <p>Please provide information about your savings and financial goals</p>
                            <div className="form-group">
                                <label>How much do you have saved in an emergency fund?</label>
                                <input
                                    type="text"
                                    placeholder="£ Enter amount"
                                    value={emergencyFund}
                                    onChange={(e) => setEmergencyFund(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>How many months of living expenses can your emergency fund cover?</label>
                                <input
                                    type="number"
                                    placeholder="Enter number of months"
                                    value={emergencyFundCoverageMonths}
                                    onChange={(e) => setEmergencyFundCoverageMonths(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Are you currently saving for any financial goals?</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            value="Yes"
                                            checked={hasSavingsGoals === true}
                                            onChange={() => setHasSavingsGoals(true)}
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="No"
                                            checked={hasSavingsGoals === false}
                                            onChange={() => setHasSavingsGoals(false)}
                                        /> No
                                    </label>
                                </div>
                            </div>
                            {hasSavingsGoals && (
                                <>
                                    <div className="form-group">
                                        <label>Goal 1:</label>
                                        <input
                                            type="text"
                                            placeholder="Enter goal description"
                                            value={savingsGoal1Description}
                                            onChange={(e) => setSavingsGoal1Description(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Target amount:</label>
                                        <input
                                            type="text"
                                            placeholder="£ Enter amount"
                                            value={savingsGoal1Amount}
                                            onChange={(e) => setSavingsGoal1Amount(e.target.value)}
                                        />
                                    </div>
                                </>
                            )}
                            <div className="form-group">
                                <label>How much do you contribute to savings each month?</label>
                                <input
                                    type="text"
                                    placeholder="£ Enter amount"
                                    value={monthlySavingsContribution}
                                    onChange={(e) => setMonthlySavingsContribution(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Are you planning to buy property in the next 5 years?</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            value="Yes"
                                            checked={plansToBuyProperty === true}
                                            onChange={() => setPlansToBuyProperty(true)}
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="No"
                                            checked={plansToBuyProperty === false}
                                            onChange={() => setPlansToBuyProperty(false)}
                                        /> No
                                    </label>
                                </div>
                            </div>
                            <div className="nav-buttons">
                                <button className="btn-back" onClick={() => showTab(1)}>
                                    ← Back to Income & Expenses
                                </button>
                                <button className="btn-next" onClick={() => { showTab(3); handleSubmitSteps(); }}>
                                    Debt Management →
                                </button>
                            </div>
                        </div>

                    </div>
                </section>

                {/* <div className={`form-section ${activeTab === 3 ? "active" : ""}`}>
              <h2>Investments & Wealth Building</h2>
              <p>Please provide information about your investment strategy</p>
              <div className="form-group">
                <label>Do you currently invest in stocks, bonds, or other financial assets?</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      value="Yes"
                      checked={investsInFinancialAssets === true}
                      onChange={() => setInvestsInFinancialAssets(true)}
                    /> Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="No"
                      checked={investsInFinancialAssets === false}
                      onChange={() => setInvestsInFinancialAssets(false)}
                    /> No
                  </label>
                </div>
              </div>
              {investsInFinancialAssets && (
                <>
                  <div className="form-group">
                    <label>What percentage of your income do you allocate to investments?</label>
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Enter percentage"
                        value={investmentAllocationPercentage}
                        onChange={(e) => setInvestmentAllocationPercentage(e.target.value)}
                      />
                      <span>%</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>How comfortable are you with investment risk?</label>
                    <div className="radio-group">
                      <label>
                        <input
                          type="radio"
                          value="Low"
                          checked={investmentRiskComfort === "Low"}
                          onChange={() => setInvestmentRiskComfort("Low")}
                        /> Low
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="Medium"
                          checked={investmentRiskComfort === "Medium"}
                          onChange={() => setInvestmentRiskComfort("Medium")}
                        /> Medium
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="High"
                          checked={investmentRiskComfort === "High"}
                          onChange={() => setInvestmentRiskComfort("High")}
                        /> High
                      </label>
                    </div>
                  </div>
                </>
              )}
              <div className="nav-buttons">
                <button className="btn-back" onClick={() => showTab(2)}>
                  ← Back to Savings & Goals
                </button>
                <button className="btn-next" onClick={() => showTab(4)}>
                  Debt Management →
                </button>
              </div>
            </div> */}
                <section id="tab4" className="item" data-title="Debt Management" >
                    <div className="item-content">

                        <div className={`form-section ${activeTab === 3 ? "active" : ""}`}>
                            <h2>Debt Management</h2>
                            <p>Please provide information about your debt management strategy</p>
                            <div className="form-group">
                                <label>Do you have a mortgage?</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            value="Yes"
                                            checked={hasMortgage === true}
                                            onChange={() => setHasMortgage(true)}
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="No"
                                            checked={hasMortgage === false}
                                            onChange={() => setHasMortgage(false)}
                                        /> No
                                    </label>
                                </div>
                            </div>
                            {hasMortgage && (
                                <>
                                    <div className="form-group">
                                        <label>Current mortgage balance</label>
                                        <input
                                            type="text"
                                            placeholder="£ Enter amount"
                                            value={mortgageBalance}
                                            onChange={(e) => setMortgageBalance(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Monthly mortgage payment</label>
                                        <input
                                            type="text"
                                            placeholder="£ Enter amount"
                                            value={monthlyMortgagePayment}
                                            onChange={(e) => setMonthlyMortgagePayment(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Mortgage interest rate</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                placeholder="Enter percentage"
                                                value={mortgageInterestRate}
                                                onChange={(e) => setMortgageInterestRate(e.target.value)}
                                            />
                                            <span>%</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Years left on mortgage</label>
                                        <input
                                            type="number"
                                            placeholder="Enter years"
                                            value={mortgageYearsLeft}
                                            onChange={(e) => setMortgageYearsLeft(e.target.value)}
                                        />
                                    </div>
                                </>
                            )}
                            <div className="form-group">
                                <label>Do you have other debts (credit cards, loans)?</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            value="Yes"
                                            checked={hasOtherDebts === true}
                                            onChange={() => setHasOtherDebts(true)}
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="No"
                                            checked={hasOtherDebts === false}
                                            onChange={() => setHasOtherDebts(false)}
                                        /> No
                                    </label>
                                </div>
                            </div>
                            {hasOtherDebts && (
                                <>
                                    <div className="form-group">
                                        <label>Total balance of other debts</label>
                                        <input
                                            type="text"
                                            placeholder="£ Enter amount"
                                            value={otherDebtBalance}
                                            onChange={(e) => setOtherDebtBalance(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Monthly repayment for other debts</label>
                                        <input
                                            type="text"
                                            placeholder="£ Enter amount"
                                            value={monthlyDebtRepayment}
                                            onChange={(e) => setMonthlyDebtRepayment(e.target.value)}
                                        />
                                    </div>
                                </>
                            )}
                            <div className="nav-buttons">
                                <button className="btn-back" onClick={() => showTab(2)}>
                                    ← Back to Savings & Goals
                                </button>
                                <button className="btn-next" onClick={() => { showTab(4); handleSubmitSteps(); }}>
                                    Retirement Planning →
                                </button>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="tab5" className="item" data-title="Retirement Planning" >
                    <div className="item-content">

                        <div className={`form-section ${activeTab === 4 ? "active" : ""}`}>
                            <h2>Retirement Planning</h2>
                            <p>Please provide information about your retirement plans</p>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Do you have a workplace pension?</label>
                                    <div className="radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={hasWorkplacePension === true}
                                                onChange={() => setHasWorkplacePension(true)}
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={hasWorkplacePension === false}
                                                onChange={() => setHasWorkplacePension(false)}
                                            /> No
                                        </label>
                                    </div>
                                </div>
                                {hasWorkplacePension && (
                                    <div className="form-group">
                                        <label>If yes, what is your current pension balance?</label>
                                        <input
                                            type="text"
                                            placeholder="£ Enter amount"
                                            value={pensionBalance}
                                            onChange={(e) => setPensionBalance(e.target.value)}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Does your employer match contributions?</label>
                                    <div className="radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={employerMatchesPension === true}
                                                onChange={() => setEmployerMatchesPension(true)}
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={employerMatchesPension === false}
                                                onChange={() => setEmployerMatchesPension(false)}
                                            /> No
                                        </label>
                                    </div>
                                </div>
                                {employerMatchesPension && (
                                    <div className="form-group">
                                        <label>How much do you contribute monthly?</label>
                                        <input
                                            type="text"
                                            placeholder="£ Enter amount"
                                            value={monthlyPensionContribution}
                                            onChange={(e) => setMonthlyPensionContribution(e.target.value)}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Do you have a private pension (SIPP, LISA, or other)?</label>
                                    <div className="radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={hasPrivatePension === true}
                                                onChange={() => setHasPrivatePension(true)}
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={hasPrivatePension === false}
                                                onChange={() => setHasPrivatePension(false)}
                                            /> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Do you plan to use property equity (downsizing, rental income) in retirement?</label>
                                    <div className="radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={plansToUsePropertyEquity === true}
                                                onChange={() => setPlansToUsePropertyEquity(true)}
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={plansToUsePropertyEquity === false}
                                                onChange={() => setPlansToUsePropertyEquity(false)}
                                            /> No
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>At what age do you plan to retire?</label>
                                    <input
                                        type="text"
                                        placeholder="Enter age"
                                        value={plannedRetirementAge}
                                        onChange={(e) => setPlannedRetirementAge(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="nav-buttons">
                                <button className="btn-back" onClick={() => showTab(3)}>
                                    ← Back to Debt Management
                                </button>
                                <button className="btn-next" onClick={() => { showTab(5); handleSubmitSteps(); }}>
                                    Tax Optimization →
                                </button>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="tab6" className="item" data-title="Tax Optimization" >
                    <div className="item-content">
                        <div className={`form-section ${activeTab === 5 ? "active" : ""}`}>
                            <h2>Tax Optimization</h2>
                            <p>Please provide information about your tax planning strategies</p>
                            <div className="form-row">
                                <div className="form-group full-width">
                                    <label>Do you contribute to tax-efficient investment accounts (Stocks & Shares ISA, Pension, LISA)?</label>
                                    <div className="radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={usesTaxEfficientAccounts === true}
                                                onChange={() => setUsesTaxEfficientAccounts(true)}
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={usesTaxEfficientAccounts === false}
                                                onChange={() => setUsesTaxEfficientAccounts(false)}
                                            /> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group full-width">
                                    <label>Have you maxed out your annual ISA allowance?</label>
                                    <div className="radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={maxedIsaAllowance === true}
                                                onChange={() => setMaxedIsaAllowance(true)}
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={maxedIsaAllowance === false}
                                                onChange={() => setMaxedIsaAllowance(false)}
                                            /> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group full-width">
                                    <label>Do you track your capital gains for tax purposes?</label>
                                    <div className="radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={tracksCapitalGains === true}
                                                onChange={() => setTracksCapitalGains(true)}
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={tracksCapitalGains === false}
                                                onChange={() => setTracksCapitalGains(false)}
                                            /> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group full-width">
                                    <label>Do you donate to charity and claim tax relief (Gift Aid)?</label>
                                    <div className="radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={donatesToCharity === true}
                                                onChange={() => setDonatesToCharity(true)}
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={donatesToCharity === false}
                                                onChange={() => setDonatesToCharity(false)}
                                            /> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="nav-buttons">
                                <button className="btn-back" onClick={() => showTab(4)}>
                                    ← Back to Retirement Planning
                                </button>
                                <button className="btn-next" onClick={() => { showTab(6); handleSubmitSteps(); }}>
                                    Financial Education →
                                </button>
                            </div>
                        </div>


                    </div>
                </section>
                <section id="tab7" className="item" data-title="Financial Education" >
                    <div className="item-content">


                        <div className={`form-section ${activeTab === 6 ? "active" : ""}`}>
                            <h2>Financial Education & Planning Preferences</h2>
                            <p>Please provide information about your financial education needs</p>
                            <div className="form-row">
                                <div className="form-group full-width">
                                    <label>What financial topics do you need the most help with? (Select all that apply)</label>
                                    <div className="checkbox-group">
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="Investment Planning"
                                                checked={needsInvestmentHelp}
                                                onChange={(e) => setNeedsInvestmentHelp(e.target.checked)}
                                            /> Investment Planning
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="Budgetting Help"
                                                checked={needsBudgetHelp}
                                                onChange={(e) => setNeedsBudgetHelp(e.target.checked)}
                                            /> Budgetting Help
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="Debt Help"
                                                checked={needsDebtHelp}
                                                onChange={(e) => setNeedsDebtHelp(e.target.checked)}
                                            /> Debt Help
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="Real Estate Help"
                                                checked={needsRealEstateHelp}
                                                onChange={(e) => setNeedsRealEstateHelp(e.target.checked)}
                                            /> Real Estate Help
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="Retirement Help"
                                                checked={needsRetirementHelp}
                                                onChange={(e) => setNeedsRetirementHelp(e.target.checked)}
                                            /> Retirement Help
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="Tax Help"
                                                checked={needsTaxHelp}
                                                onChange={(e) => setNeedsTaxHelp(e.target.checked)}
                                            /> Tax Help
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group half-width">
                                    <label>Do you currently use financial tools/apps to track your finances?</label>
                                    <div className="radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={usesFinancialTools === true}
                                                onChange={() => setUsesFinancialTools(true)}
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={usesFinancialTools === false}
                                                onChange={() => setUsesFinancialTools(false)}
                                            /> No
                                        </label>
                                    </div>
                                </div>
                                {usesFinancialTools && (
                                    <div className="form-group half-width">
                                        <label>If yes, which one(s)?</label>
                                        <input
                                            type="text"
                                            placeholder="Enter tools/apps"
                                            value={financialTools}
                                            onChange={(e) => setFinancialTools(e.target.value)}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="form-row">
                                <div className="form-group full-width">
                                    <label>Would you be interested in a personalized financial plan based on this data?</label>
                                    <div className="radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={wantsPersonalizedPlan === true}
                                                onChange={() => setWantsPersonalizedPlan(true)}
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={wantsPersonalizedPlan === false}
                                                onChange={() => setWantsPersonalizedPlan(false)}
                                            /> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="nav-buttons">
                                <button className="btn-back" onClick={() => showTab(5)}>
                                    ← Back to Tax Optimization
                                </button>
                                <button className="btn-next" onClick={() => { showTab(7); handleSubmitSteps(); }}>
                                    Complete →
                                </button>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="tab8" className="item" data-title="Completed" >
                    <div className="item-content">

                        <div className={`form-section ${activeTab === 7 ? "active" : ""}`} id="success-message" style={{ textAlign: "center" }}>
                            <div style={{ fontSize: 60, color: "#2B63E1", marginBottom: 20 }}>
                                <i className="fa-regular fa-circle-check" />
                            </div>
                            <h2>Thank You for Completing Your Financial Assessment!</h2>
                            <p>
                                Your information has been submitted successfully. Our financial advisors will review your data and contact you shortly with personalized recommendations.
                            </p>
                            <button className="btn-start" onClick={handleSubmit} disabled={loading}>
                                {loading ? "Submitting..." : "View Summary"}
                            </button>
                            {error && <p className="error-message">{error}</p>}
                        </div>

                    </div>
                </section>
            </article>
        </div>
    );
};

export default TabbedContent;
