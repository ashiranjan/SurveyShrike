using System.ComponentModel;

namespace SurveyShrikeApp.Enumerators
{
	public enum eRating
	{
		[Description("Very Satisfied")]
		Very_Satisfied = 1,

		[Description("Satisfied")]
		Satisfied = 2,

		[Description("Neutral")]
		Neutral = 3,

		[Description("UnSatisfied")]
		UnSatisfied = 3,

		[Description("Very UnSatisfied")]
		Very_UnSatisfied = 4,

		[Description("Other")]
		Other = 5,

	}

	public enum eSatisfied
	{
		[Description("Quality")]
		Quality = 1,

		[Description("Price")]
		Price = 2,

		[Description("Customer Service")]
		Customer_Service = 3,

		[Description("Installation or first use experience")]
		Installation_or_first_use_experience = 4,

		[Description("Other")]
		Other = 5,
	}
}