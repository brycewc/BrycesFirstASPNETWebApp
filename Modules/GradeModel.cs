using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BrycesFirstASPNETWebApp.Models
{
    public class GradeModel
    {
        [Range(0, 100)]
        public int homework { get; set; }

        [Range(0, 100)]
        public int groupProject { get; set; }

        [Range(0, 100)]
        public int quizzes { get; set; }

        [Range(0, 100)]
        public int exams { get; set; }

        [Range(0, 100)]
        public int intex { get; set; }
    }
}
