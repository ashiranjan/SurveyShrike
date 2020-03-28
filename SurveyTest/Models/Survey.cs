//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SurveyTest.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Survey
    {
        public System.Guid Id { get; set; }
        public Nullable<System.Guid> CreatedBy { get; set; }
        public Nullable<System.DateTime> ProductStartDate { get; set; }
        public string ProductName { get; set; }
        public string ReasonForDissatisfaction { get; set; }
        public Nullable<bool> IsExpected { get; set; }
        public Nullable<bool> DoRecommend { get; set; }
        public Nullable<int> RatingId { get; set; }
        public Nullable<int> MostSatisfiedTypeId { get; set; }
        public Nullable<int> LeastSatisfiedTypeId { get; set; }
        public string Signature { get; set; }
        public Nullable<bool> IsPublish { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
    
        public virtual User User { get; set; }
    }
}